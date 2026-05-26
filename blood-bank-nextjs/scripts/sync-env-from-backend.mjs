/**
 * Copies DATABASE_URL and JWT_SECRET from backend/.env into blood-bank-nextjs/.env
 * so local `npm run dev` uses Supabase instead of file:./dev.db
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const backendEnv = fs.readFileSync(path.join(root, "..", "backend", ".env"), "utf8");
const target = path.join(root, ".env");

const pick = (key) => backendEnv.match(new RegExp(`^${key}=(.+)$`, "m"))?.[1]?.trim();
const databaseUrl = pick("DATABASE_URL");
const jwtSecret = pick("JWT_SECRET");

if (!databaseUrl?.startsWith("postgres")) {
  console.error("backend/.env has no PostgreSQL DATABASE_URL");
  process.exit(1);
}

let pooler = databaseUrl;
if (!pooler.includes("6543")) {
  pooler = pooler.replace(":5432/", ":6543/");
  pooler += pooler.includes("?") ? "&pgbouncer=true" : "?pgbouncer=true";
}

const smtpUser = pick("SMTP_USER") || "";
const smtpPass = pick("SMTP_PASS") || "";

const content = `DATABASE_URL="${pooler}"
JWT_SECRET="${jwtSecret || "development_secret_key"}"
SMTP_USER="${smtpUser}"
SMTP_PASS="${smtpPass}"
`;

fs.writeFileSync(target, content);
console.log("Updated blood-bank-nextjs/.env from backend/.env (Supabase pooler URL)");
