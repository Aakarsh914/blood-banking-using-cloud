import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export async function getUserFromRequest(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return null;
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (err) {
    console.error("Auth error in getUserFromRequest:", err);
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return null;
    }
    throw err; // Database connection error
  }
}

export async function requireUser(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return { user: null, error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
    }
    return { user, error: null };
  } catch (err) {
    console.error("Database error in requireUser:", err);
    return { user: null, error: NextResponse.json({ error: "Database connection failed", hint: "Supabase pooler timeout or connection issue." }, { status: 503 }) };
  }
}

export function requireRole(user, roles) {
  if (!roles.includes(user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
