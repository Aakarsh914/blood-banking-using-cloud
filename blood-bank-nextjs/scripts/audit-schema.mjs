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
const checks = {
  hospital: () => prisma.hospital.findMany({ take: 1 }),
  bloodRequest: () =>
    prisma.bloodRequest.findMany({ take: 1, include: { hospital: true, requester: true } }),
  bloodInventory: () => prisma.bloodInventory.findMany({ take: 1, include: { bank: true } })
};

for (const [name, run] of Object.entries(checks)) {
  try {
    await run();
    console.log("OK", name);
  } catch (e) {
    console.log("FAIL", name, "—", e.message.split("\n").slice(2, 4).join(" "));
  }
}
await prisma.$disconnect();
