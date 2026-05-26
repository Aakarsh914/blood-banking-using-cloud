import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = fs.readFileSync(path.join(__dirname, "..", "..", "backend", ".env"), "utf8");
let url = env.match(/^DATABASE_URL=(.+)$/m)[1].trim();
if (!url.includes("6543")) {
  url = url.replace(":5432/", ":6543/") + (url.includes("?") ? "&" : "?") + "pgbouncer=true";
}
process.env.DATABASE_URL = url;

const prisma = new PrismaClient();
try {
  const r = await prisma.bloodRequest.findMany({
    take: 1,
    include: { hospital: { select: { name: true } }, requester: { select: { name: true, email: true } } }
  });
  console.log("OK", r.length, r[0] || "empty");
} catch (e) {
  console.log("ERR", e.code);
  console.log(e.message);
}
await prisma.$disconnect();
