/**
 * Applies idempotent Supabase/Postgres patches when the DB was created from an older schema.sql.
 * Safe to call on every cold start (runs once per server instance).
 */
export async function ensureDbSchema(prisma) {
  if (globalThis.__bloodBankSchemaEnsured) return;

  const statements = [
    `ALTER TABLE hospitals ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION`,
    `ALTER TABLE hospitals ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION`,
    `ALTER TABLE blood_requests ADD COLUMN IF NOT EXISTS requester_id INTEGER REFERENCES users(id)`,
    `ALTER TABLE blood_requests ADD COLUMN IF NOT EXISTS token VARCHAR(50)`,
    `ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check`,
    `ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('DONOR', 'HOSPITAL', 'ADMIN', 'RECEIVER'))`
  ];

  for (const sql of statements) {
    await prisma.$executeRawUnsafe(sql);
  }

  globalThis.__bloodBankSchemaEnsured = true;
}
