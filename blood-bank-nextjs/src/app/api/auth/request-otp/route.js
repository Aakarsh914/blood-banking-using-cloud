export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendOtpEmail } from "@/lib/mailer";
import crypto from "crypto";

export async function POST(req) {
  const prisma = getPrisma();
  try {
    let { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    email = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email is already registered" }, { status: 400 });
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.otpVerification.upsert({
      where: { email },
      update: { otp, expiresAt },
      create: { email, otp, expiresAt }
    });

    await sendOtpEmail(email, otp);
    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Request OTP error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to request OTP" },
      { status: err.status || 500 }
    );
  }
}
