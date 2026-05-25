export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { formatUserForToken, signUserToken } from "@/lib/userPayload";

export async function POST(req) {
  const prisma = getPrisma();
  try {
    let { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "email and password are required" }, { status: 400 });
    }
    email = email.toLowerCase();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    if (user.role === "ADMIN" && user.email !== "sahniaakarsh6@gmail.com") {
      return NextResponse.json({ error: "Unauthorized. Admin login strictly restricted." }, { status: 403 });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = signUserToken(user);
    return NextResponse.json({
      message: "Login successful",
      token,
      user: formatUserForToken(user)
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error during login" }, { status: 500 });
  }
}
