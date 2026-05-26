import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, "..", "..", "backend", ".env");
const env = fs.readFileSync(envPath, "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/").replace(/\/?$/, "?pgbouncer=true");
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
const checks = [];

try {
  await prisma.$queryRaw`SELECT 1`;
  checks.push(["ping", "OK"]);

  const users = await prisma.user.count();
  checks.push(["users", users]);

  const otps = await prisma.otpVerification.count();
  checks.push(["otp_rows", otps]);

  const hospitals = await prisma.hospital.count();
  checks.push(["hospitals", hospitals]);

  const donor = await prisma.user.findUnique({ where: { email: "donor@test.com" } });
  checks.push(["donor@test.com", donor ? "exists" : "missing"]);
} catch (e) {
  checks.push(["error", e.message?.split("\n")[0]]);
}

console.table(checks);
await prisma.$disconnect();
