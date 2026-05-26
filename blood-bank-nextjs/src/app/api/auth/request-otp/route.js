export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendOtpEmail } from "@/lib/mailer";
import { prismaErrorResponse } from "@/lib/apiErrors";
import crypto from "crypto";

export async function POST(req) {
  let prisma;
  try {
    prisma = getPrisma();
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Database is not configured on the server." },
      { status: 503 }
    );
  }

  try {
    let { email } = await req.json();
    email = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email is already registered",
          hint: "Use Log in instead, or register with a different email."
        },
        { status: 400 }
      );
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
    const prismaResponse = prismaErrorResponse(err, "Request OTP");
    if (prismaResponse) return prismaResponse;
    console.error("Request OTP error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to request OTP", hint: "Check Vercel env: SMTP_USER, SMTP_PASS, DATABASE_URL." },
      { status: err.status || 500 }
    );
  }
}
