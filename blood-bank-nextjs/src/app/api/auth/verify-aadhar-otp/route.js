export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { formatUserForToken, signUserToken } from "@/lib/userPayload";

export async function POST(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const { aadharNumber, otp } = await req.json();
    if (!aadharNumber || !otp) {
      return NextResponse.json({ error: "Aadhar and OTP are required" }, { status: 400 });
    }
    if (otp !== "123456") {
      return NextResponse.json({ error: "Invalid Aadhar OTP. (Hint: Use Sandbox OTP 123456)" }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { aadharNumber }
    });

    const token = signUserToken(updated);
    return NextResponse.json({
      message: "Aadhar Verified and Linked Successfully",
      token,
      user: formatUserForToken(updated)
    });
  } catch (err) {
    console.error("Verify Aadhar error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
