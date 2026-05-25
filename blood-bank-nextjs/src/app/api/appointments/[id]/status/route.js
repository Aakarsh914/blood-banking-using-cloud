export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";

const VALID_STATUSES = ["PENDING", "APPROVED", "REJECTED", "COMPLETED"];

export async function PATCH(req, { params }) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  if (user.role === "DONOR") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { status } = await req.json();
    const id = Number(params.id);

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    await prisma.donationAppointment.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json({ message: `Appointment status updated to ${status}` });
  } catch (err) {
    console.error("Update appointment status error:", err);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 });
  }
}
