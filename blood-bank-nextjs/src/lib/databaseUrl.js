/**
 * Supabase + Vercel: use the transaction pooler (port 6543) and pgbouncer=true
 * so Prisma does not use prepared statements (avoids "prepared statement already exists").
 */
export function getDatabaseUrl() {
  const raw = process.env.DATABASE_URL;
  if (!raw?.trim()) return null;

  try {
    const url = new URL(raw);
    const isPooler =
      url.hostname.includes("pooler.supabase.com") || url.port === "6543";

    if (isPooler && !url.searchParams.has("pgbouncer")) {
      url.searchParams.set("pgbouncer", "true");
    }
    if (process.env.VERCEL && !url.searchParams.has("connection_limit")) {
      url.searchParams.set("connection_limit", "1");
    }
    return url.toString();
  } catch {
    return raw;
  }
}

export function databaseConfigError() {
  const url = process.env.DATABASE_URL;
  if (!url?.trim()) {
    return "DATABASE_URL is not set on the server. Add it in Vercel → Settings → Environment Variables, then redeploy.";
  }
  if (url.startsWith("file:")) {
    return "DATABASE_URL points to a local SQLite file. On Vercel, set the Supabase PostgreSQL pooler URI (port 6543).";
  }
  if (!url.startsWith("postgresql://") && !url.startsWith("postgres://")) {
    return "DATABASE_URL must be a PostgreSQL connection string (postgresql://...).";
  }
  return null;
}
