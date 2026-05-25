import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sql = fs.readFileSync(
  path.join(__dirname, "..", "..", "backend", "sql", "migrate_add_receiver_role.sql"),
  "utf8"
);
const env = fs.readFileSync(path.join(__dirname, "..", "..", "backend", ".env"), "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/").replace(/\/?$/, "?pgbouncer=true");
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
await prisma.$executeRawUnsafe(`ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check`);
await prisma.$executeRawUnsafe(
  `ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('DONOR', 'HOSPITAL', 'ADMIN', 'RECEIVER'))`
);
console.log("Migration applied: RECEIVER role allowed");
await prisma.$disconnect();
