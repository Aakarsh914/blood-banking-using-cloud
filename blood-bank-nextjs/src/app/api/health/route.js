export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { databaseConfigError } from "@/lib/databaseUrl";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  const configError = databaseConfigError();
  if (configError) {
    return NextResponse.json(
      { ok: false, service: "blood-bank-api", database: "misconfigured", detail: configError },
      { status: 503 }
    );
  }

  try {
    const prisma = getPrisma();
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, service: "blood-bank-api", database: "connected" });
  } catch (err) {
    console.error("Health DB check:", err);
    return NextResponse.json(
      {
        ok: false,
        service: "blood-bank-api",
        database: "error",
        detail: err.message?.slice(0, 200) || "Database connection failed"
      },
      { status: 503 }
    );
  }
}
