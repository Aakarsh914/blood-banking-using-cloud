export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser, requireRole } from "@/lib/auth";

export async function POST(req, { params }) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  const roleError = requireRole(user, ["ADMIN", "HOSPITAL"]);
  if (roleError) return roleError;

  try {
    const id = Number(params.id);
    const bloodRequest = await prisma.bloodRequest.findUnique({ where: { id } });
    if (!bloodRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    let responderName = "A network hospital";
    if (user.hospitalId) {
      const hospital = await prisma.hospital.findUnique({ where: { id: user.hospitalId } });
      if (hospital) responderName = hospital.name;
    }

    return NextResponse.json({
      message: "Response broadcasted",
      responderName,
      targetHospitalId: bloodRequest.hospitalId
    });
  } catch (err) {
    console.error("Respond to request error:", err);
    return NextResponse.json({ error: "Failed to respond" }, { status: 500 });
  }
}
