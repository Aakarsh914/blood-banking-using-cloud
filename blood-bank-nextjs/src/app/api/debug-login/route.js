export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Temporary diagnostic endpoint - remove after debugging
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") || "admin_gmc@test.com";
  const testPassword = searchParams.get("pw") || "hospital";

  let prisma;
  try {
    prisma = getPrisma();
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ found: false, email });
    }

    const hasHash = !!user.passwordHash;
    const hashPrefix = user.passwordHash?.slice(0, 15) ?? null;
    let bcryptResult = null;

    if (hasHash) {
      bcryptResult = await bcrypt.compare(testPassword, user.passwordHash);
    }

    return NextResponse.json({
      found: true,
      email: user.email,
      role: user.role,
      hasPasswordHash: hasHash,
      hashPrefix,
      bcryptMatch: bcryptResult,
      testedPassword: testPassword,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
