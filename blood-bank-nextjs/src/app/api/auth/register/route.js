export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const prisma = getPrisma();
  try {
    let { name, email, password, role = "DONOR", hospitalId, bloodGroup, otp } = await req.json();
    if (!name || !email || !password || !otp) {
      return NextResponse.json({ error: "name, email, password, and otp are required" }, { status: 400 });
    }
    email = email.toLowerCase();

    if (role === "ADMIN" && email !== "sahniaakarsh6@gmail.com") {
      return NextResponse.json({ error: "You cannot register as ADMIN. Access restricted." }, { status: 403 });
    }

    const otpRecord = await prisma.otpVerification.findUnique({ where: { email } });
    if (!otpRecord) {
      return NextResponse.json({ error: "No OTP requested for this email" }, { status: 400 });
    }
    if (otpRecord.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }
    if (new Date() > otpRecord.expiresAt) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email is already registered" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
        hospitalId: hospitalId ? Number(hospitalId) : null,
        bloodGroup: bloodGroup || null
      }
    });

    await prisma.otpVerification.delete({ where: { email } });
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Server error during registration" }, { status: 500 });
  }
}
