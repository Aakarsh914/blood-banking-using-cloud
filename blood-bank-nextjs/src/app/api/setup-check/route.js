export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { databaseConfigError } from "@/lib/databaseUrl";
import { ensureDbSchema } from "@/lib/ensureDbSchema";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  const smtpOk = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
  const jwtOk = Boolean(process.env.JWT_SECRET);
  const configError = databaseConfigError();

  const result = {
    ok: true,
    supabase: { connected: false, users: null, hospitals: null, otpPending: null },
    env: {
      databaseUrl: configError ? "missing_or_invalid" : "set",
      jwtSecret: jwtOk ? "set" : "missing",
      smtp: smtpOk ? "set" : "missing"
    },
    hints: []
  };

  if (configError) {
    result.ok = false;
    result.hints.push(configError);
    return NextResponse.json(result, { status: 503 });
  }

  try {
    const prisma = getPrisma();
    await ensureDbSchema(prisma);
    await prisma.$queryRaw`SELECT 1`;
    const [users, hospitals, otpPending] = await Promise.all([
      prisma.user.count(),
      prisma.hospital.count(),
      prisma.otpVerification.count()
    ]);
    const columnCheck = await prisma.$queryRaw`
      SELECT table_name, column_name FROM information_schema.columns
      WHERE table_schema = 'public'
        AND (
          (table_name = 'blood_requests' AND column_name IN ('requester_id', 'token'))
          OR (table_name = 'hospitals' AND column_name IN ('latitude', 'longitude'))
        )`;
    const found = new Set(columnCheck.map((r) => `${r.table_name}.${r.column_name}`));
    const required = [
      "blood_requests.requester_id",
      "blood_requests.token",
      "hospitals.latitude",
      "hospitals.longitude"
    ];
    const missing = required.filter((c) => !found.has(c));

    result.supabase = { connected: true, users, hospitals, otpPending, schemaOk: missing.length === 0, missingColumns: missing };
    if (missing.length > 0) {
      result.ok = false;
      result.hints.push(
        `Database schema is outdated. Missing: ${missing.join(", ")}. Run backend/sql migrations in Supabase SQL Editor or: node blood-bank-nextjs/scripts/run-all-schema-migrations.mjs`
      );
    }
  } catch (err) {
    result.ok = false;
    result.supabase.connected = false;
    result.hints.push(err.message?.slice(0, 200) || "Database connection failed");
    return NextResponse.json(result, { status: 503 });
  }

  if (!smtpOk) {
    result.hints.push("SMTP not set — OTP emails will fail. Add SMTP_USER and SMTP_PASS on Vercel.");
  }
  if (!jwtOk) {
    result.hints.push("JWT_SECRET missing on Vercel — login tokens may fail.");
  }

  return NextResponse.json(result);
}
