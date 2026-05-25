export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser, requireRole } from "@/lib/auth";

export async function PATCH(req, { params }) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  const roleError = requireRole(user, ["ADMIN", "HOSPITAL"]);
  if (roleError) return roleError;

  try {
    const { status } = await req.json();
    const id = Number(params.id);
    if (!status) {
      return NextResponse.json({ error: "status is required" }, { status: 400 });
    }

    const bloodRequest = await prisma.bloodRequest.findUnique({ where: { id } });
    if (!bloodRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    if (status === "FULFILLED" && bloodRequest.status !== "FULFILLED") {
      const inv = await prisma.bloodInventory.findFirst({
        where: {
          bankId: bloodRequest.hospitalId,
          bloodGroup: bloodRequest.bloodGroup,
          units: { gte: bloodRequest.units }
        }
      });
      if (!inv) {
        return NextResponse.json({ error: "Insufficient inventory to fulfill this request" }, { status: 400 });
      }

      await prisma.bloodInventory.update({
        where: { id: inv.id },
        data: { units: inv.units - bloodRequest.units }
      });

      await prisma.inventoryHistory.create({
        data: {
          userId: user.id,
          action: "FULFILL",
          bloodGroup: bloodRequest.bloodGroup,
          component: "ANY",
          units: -bloodRequest.units,
          bankId: bloodRequest.hospitalId
        }
      });
    }

    const updated = await prisma.bloodRequest.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Update request status error:", err);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
