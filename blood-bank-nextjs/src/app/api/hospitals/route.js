export const dynamic = 'force-dynamic';
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req) {
  const prisma = getPrisma();
  try {
    const hospitals = await prisma.hospital.findMany();
    return NextResponse.json(hospitals);
  } catch (err) {
    console.error("Fetch hospitals error:", err);
    return NextResponse.json({ error: "Failed to fetch hospitals" }, { status: 500 });
  }
}
