export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { sendAppointmentEmail } from "@/lib/mailer";

export async function GET(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    let where = {};
    if (user.role === "DONOR") {
      where = { donorId: user.id };
    } else if (user.role === "HOSPITAL") {
      where = { hospitalId: user.hospitalId };
    }

    const appointments = await prisma.donationAppointment.findMany({
      where,
      include: {
        hospital: { select: { name: true } },
        donor: { select: { name: true, bloodGroup: true, email: true } }
      },
      orderBy: { createdAt: "desc" }
    });

    const formatted = appointments.map((a) => ({
      id: a.id,
      donor_id: a.donorId,
      donor_name: a.donor?.name,
      donor_blood_group: a.donor?.bloodGroup,
      hospital_id: a.hospitalId,
      hospital_name: a.hospital?.name,
      donation_type: a.donationType,
      status: a.status,
      scheduled_date: a.scheduledDate ? a.scheduledDate.toISOString() : null,
      created_at: a.createdAt.toISOString()
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("Fetch appointments error:", err);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const { hospitalId, donationType, scheduledDate } = await req.json();
    if (!donationType || !["AT_HOSPITAL", "AT_HOME"].includes(donationType)) {
      return NextResponse.json({ error: "Invalid donation type" }, { status: 400 });
    }

    const record = await prisma.donationAppointment.create({
      data: {
        donorId: user.id,
        hospitalId: hospitalId ? Number(hospitalId) : null,
        donationType,
        status: "PENDING",
        scheduledDate: scheduledDate ? new Date(scheduledDate) : null
      },
      include: { hospital: { select: { name: true } } }
    });

    sendAppointmentEmail(user.email, {
      hospitalName: record.hospital?.name,
      type: record.donationType,
      date: record.scheduledDate
    }).catch((err) => console.error("Appointment email error:", err));

    return NextResponse.json(
      {
        id: record.id,
        donor_id: record.donorId,
        hospital_id: record.hospitalId,
        hospital_name: record.hospital?.name,
        donation_type: record.donationType,
        status: record.status,
        scheduled_date: record.scheduledDate?.toISOString() || null,
        created_at: record.createdAt.toISOString()
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Create appointment error:", err);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
