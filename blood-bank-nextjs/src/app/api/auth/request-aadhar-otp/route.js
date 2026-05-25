export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { isValidAadhar } from "@/utils/aadharValidator";

export async function POST(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const { aadharNumber } = await req.json();
    if (!aadharNumber) {
      return NextResponse.json({ error: "Aadhar Number is required" }, { status: 400 });
    }
    if (!isValidAadhar(aadharNumber)) {
      return NextResponse.json(
        { error: "Invalid Aadhar Card Number. Please ensure it is a valid 12-digit Indian Aadhar ID." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: { aadharNumber, NOT: { id: user.id } }
    });
    if (existing) {
      return NextResponse.json({ error: "This Aadhar Number is already linked to another account." }, { status: 400 });
    }

    return NextResponse.json({
      message: "OTP sent successfully to registered mobile number (Sandbox)",
      sandboxOtp: "123456"
    });
  } catch (err) {
    console.error("Aadhar OTP error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
