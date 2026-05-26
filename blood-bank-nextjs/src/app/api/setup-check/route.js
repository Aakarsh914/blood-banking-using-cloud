export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { databaseConfigError } from "@/lib/databaseUrl";
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
    await prisma.$queryRaw`SELECT 1`;
    const [users, hospitals, otpPending] = await Promise.all([
      prisma.user.count(),
      prisma.hospital.count(),
      prisma.otpVerification.count()
    ]);
    result.supabase = { connected: true, users, hospitals, otpPending };
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
