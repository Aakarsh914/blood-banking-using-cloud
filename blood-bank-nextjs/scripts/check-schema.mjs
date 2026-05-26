import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = fs.readFileSync(path.join(__dirname, "..", "..", "backend", ".env"), "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/") + (url.includes("?") ? "&" : "?") + "pgbouncer=true";
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
const cols = await prisma.$queryRaw`
  SELECT column_name FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = 'blood_requests'
  ORDER BY column_name`;
console.log("blood_requests columns:", cols.map((c) => c.column_name).join(", "));
await prisma.$disconnect();
