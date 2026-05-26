/**
 * check-login.mjs
 * Verifies the password hash stored in Supabase matches the expected plaintext.
 * Run: node scripts/check-login.mjs
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
  console.error("ERROR: DATABASE_URL is not set.");
  process.exit(1);
}

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

const prisma = new PrismaClient({ datasourceUrl: finalUrl });

const emailsToCheck = [
  { email: "admin_gmc@test.com", expectedPassword: "hospital" },
  { email: "donor@test.com", expectedPassword: "password" },
  { email: "sahniaakarsh4@gmail.com", expectedPassword: "password" },
];

console.log("Checking users in database...\n");

for (const { email, expectedPassword } of emailsToCheck) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.log(`❌ ${email}: NOT FOUND in database`);
      continue;
    }

    console.log(`User: ${email}`);
    console.log(`  role: ${user.role}`);
    console.log(`  passwordHash present: ${!!user.passwordHash}`);
    console.log(`  passwordHash (first 30 chars): ${user.passwordHash?.slice(0, 30) ?? "NULL"}`);

    if (!user.passwordHash) {
      console.log(`  ❌ No password hash stored!\n`);
      continue;
    }

    const match = await bcrypt.compare(expectedPassword, user.passwordHash);
    console.log(`  bcrypt.compare("${expectedPassword}", hash) = ${match ? "✅ MATCH" : "❌ NO MATCH"}\n`);
  } catch (err) {
    console.error(`  Error checking ${email}:`, err.message);
  }
}

await prisma.$disconnect();
