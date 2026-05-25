export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { formatUserForToken, signUserToken } from "@/lib/userPayload";
import { prismaErrorResponse } from "@/lib/apiErrors";

export async function POST(req) {
  let prisma;
  try {
    prisma = getPrisma();
  } catch (err) {
    console.error("Login config error:", err);
    return NextResponse.json(
      { error: err.message || "Database is not configured on the server." },
      { status: 503 }
    );
  }

  try {
    let { email, password } = await req.json();
    email = typeof email === "string" ? email.trim().toLowerCase() : "";
    password = typeof password === "string" ? password.trim() : "";
    if (!email || !password) {
      return NextResponse.json({ error: "email and password are required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    if (user.role === "ADMIN" && user.email !== "sahniaakarsh6@gmail.com") {
      return NextResponse.json({ error: "Unauthorized. Admin login strictly restricted." }, { status: 403 });
    }

    if (!user.passwordHash) {
      return NextResponse.json(
        { error: "Account has no password set. Register again or reset the user in the database." },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Invalid email or password",
          hint: "Demo seed users use password «password» (donor/admin) or «hospital» (hospital admins). This is not your Supabase database password."
        },
        { status: 401 }
      );
    }

    const token = signUserToken(user);
    return NextResponse.json({
      message: "Login successful",
      token,
      user: formatUserForToken(user)
    });
  } catch (err) {
    const prismaResponse = prismaErrorResponse(err, "Login");
    if (prismaResponse) return prismaResponse;
    return NextResponse.json({ error: "Server error during login" }, { status: 500 });
  }
}
