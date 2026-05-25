export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { formatUserForToken, signUserToken } from "@/lib/userPayload";

export async function PATCH(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const { bloodGroup, latitude, longitude } = await req.json();
    if (!bloodGroup || latitude === undefined || longitude === undefined) {
      return NextResponse.json({ error: "Missing required profile fields" }, { status: 400 });
    }

    const current = await prisma.user.findUnique({ where: { id: user.id } });
    if (!current?.aadharNumber) {
      return NextResponse.json({ error: "Aadhar authentication is incomplete. Please verify your Aadhar first." }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        bloodGroup,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      }
    });

    const token = signUserToken(updated);
    return NextResponse.json({
      message: "Profile updated successfully",
      token,
      user: formatUserForToken(updated)
    });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
