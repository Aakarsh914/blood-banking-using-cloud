import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sqlDir = path.join(__dirname, "..", "..", "backend", "sql");
const files = [
  "migrate_add_receiver_role.sql",
  "migrate_blood_requests_requester.sql",
  "migrate_hospitals_location.sql"
];

const env = fs.readFileSync(path.join(__dirname, "..", "..", "backend", ".env"), "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/").replace(/\/?$/, "?pgbouncer=true");
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
for (const file of files) {
  const raw = fs.readFileSync(path.join(sqlDir, file), "utf8");
  const statements = raw
    .split(";")
    .map((s) => s.replace(/--[^\n]*/g, "").trim())
    .filter((s) => s.length > 0);
  for (const statement of statements) {
    await prisma.$executeRawUnsafe(statement);
  }
  console.log("Applied:", file);
}

await prisma.hospital.findMany({ take: 1 });
await prisma.bloodRequest.findMany({
  take: 1,
  include: { hospital: { select: { name: true } }, requester: { select: { name: true } } }
});
console.log("Schema OK");
await prisma.$disconnect();
