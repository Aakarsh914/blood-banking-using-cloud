export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { databaseConfigError } from "@/lib/databaseUrl";
import { ensureDbSchema } from "@/lib/ensureDbSchema";
import { NextResponse } from "next/server";

export async function GET() {
  const configError = databaseConfigError();
  if (configError) {
    return NextResponse.json(
      { error: "Failed to fetch hospitals", hint: configError },
      { status: 503 }
    );
  }

  try {
    const prisma = getPrisma();
    await ensureDbSchema(prisma);

    const hospitals = await prisma.hospital.findMany({
      orderBy: { name: "asc" }
    });

    return NextResponse.json(hospitals);
  } catch (err) {
    console.error("Fetch hospitals error:", err);

    if (err?.code === "P2022") {
      try {
        const prisma = getPrisma();
        await ensureDbSchema(prisma);
        const hospitals = await prisma.hospital.findMany({ orderBy: { name: "asc" } });
        return NextResponse.json(hospitals);
      } catch (retryErr) {
        console.error("Fetch hospitals retry error:", retryErr);
      }
    }

    return NextResponse.json(
      {
        error: "Failed to fetch hospitals",
        code: err?.code,
        hint:
          err?.code === "P2022"
            ? "Database schema mismatch. Redeploy the app or run migrations in Supabase SQL Editor."
            : err?.message?.slice(0, 200)
      },
      { status: 500 }
    );
  }
}
