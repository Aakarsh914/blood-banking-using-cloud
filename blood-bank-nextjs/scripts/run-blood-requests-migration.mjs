import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sqlPath = path.join(
  __dirname,
  "..",
  "..",
  "backend",
  "sql",
  "migrate_blood_requests_requester.sql"
);
const sql = fs
  .readFileSync(sqlPath, "utf8")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

const env = fs.readFileSync(path.join(__dirname, "..", "..", "backend", ".env"), "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/").replace(/\/?$/, "?pgbouncer=true");
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
for (const statement of sql) {
  await prisma.$executeRawUnsafe(statement);
}
console.log("Migration applied: blood_requests.requester_id and token");
await prisma.$disconnect();
