/**
 * reset-passwords.mjs
 * Run from the blood-bank-nextjs directory:
 *   node scripts/reset-passwords.mjs
 *
 * Sets the correct bcrypt hashed passwords for demo/seed users in Supabase.
 * Donor users  → password: "password"
 * Hospital admin users → password: "hospital"
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Manually parse .env so we don't need the dotenv package
const envFile = path.join(__dirname, "..", ".env");
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8")
    .split("\n")
    .forEach((line) => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, "");
    });
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("ERROR: DATABASE_URL is not set. Check your .env file.");
  process.exit(1);
}

// Append pgbouncer=true if using the pooler and it's missing
const finalUrl = (() => {
  try {
    const u = new URL(url);
    if (
      (u.hostname.includes("pooler.supabase.com") || u.port === "6543") &&
      !u.searchParams.has("pgbouncer")
    ) {
      u.searchParams.set("pgbouncer", "true");
    }
    return u.toString();
  } catch {
    return url;
  }
})();

process.env.DATABASE_URL = finalUrl;

const prisma = new PrismaClient({ datasourceUrl: finalUrl });

const SALT_ROUNDS = 10;
const donorHash = await bcrypt.hash("password", SALT_ROUNDS);
const hospitalHash = await bcrypt.hash("hospital", SALT_ROUNDS);

console.log("Connecting to Supabase...");

let allUsers;
try {
  allUsers = await prisma.user.findMany({
    select: { id: true, email: true, role: true, name: true, passwordHash: true },
  });
} catch (err) {
  console.error("Failed to fetch users:", err.message);
  await prisma.$disconnect();
  process.exit(1);
}

console.log(`Found ${allUsers.length} users in the database.`);

let updated = 0;
let skipped = 0;

for (const user of allUsers) {
  let newHash = null;
  let reason = "";

  if (user.role === "HOSPITAL") {
    newHash = hospitalHash;
    reason = `HOSPITAL → "hospital"`;
  } else if (user.role === "DONOR" || user.role === "RECEIVER") {
    newHash = donorHash;
    reason = `${user.role} → "password"`;
  } else if (user.role === "ADMIN") {
    // Leave admin password alone — only the seeded admin should work
    skipped++;
    console.log(`  SKIP   ${user.email} (ADMIN — not touching)`);
    continue;
  } else {
    newHash = donorHash;
    reason = `unknown role ${user.role} → "password" (default)`;
  }

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: newHash },
    });
    updated++;
    console.log(`  UPDATED ${user.email}  [${reason}]`);
  } catch (err) {
    console.error(`  ERROR   ${user.email}: ${err.message}`);
  }
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
console.log("\nYou can now log in with:");
console.log("  Donors/Receivers  → password: password");
console.log("  Hospital Admins   → password: hospital");

await prisma.$disconnect();
