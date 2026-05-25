export const dynamic = "force-dynamic";
import crypto from "crypto";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser, requireRole } from "@/lib/auth";
import { sendSosEmail } from "@/lib/mailer";

export async function GET(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    let where = {};
    if (user.role === "HOSPITAL") {
      where = { hospitalId: user.hospitalId };
    } else if (user.role === "RECEIVER" || user.role === "DONOR") {
      where = { requesterId: user.id };
    }

    const requests = await prisma.bloodRequest.findMany({
      where,
      include: {
        hospital: { select: { name: true } },
        requester: { select: { name: true, email: true } }
      },
      orderBy: { createdAt: "desc" }
    });

    const formatted = requests.map((r) => ({
      id: r.id,
      requester_id: r.requesterId,
      requester_name: r.requester?.name,
      requester_email: r.requester?.email,
      hospital_id: r.hospitalId,
      hospital_name: r.hospital?.name,
      blood_group: r.bloodGroup,
      units: r.units,
      urgency: r.urgency,
      status: r.status,
      token: r.token,
      created_at: r.createdAt.toISOString()
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("Fetch requests error:", err);
    return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 });
  }
}

export async function POST(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  const roleError = requireRole(user, ["ADMIN", "HOSPITAL", "RECEIVER", "DONOR"]);
  if (roleError) return roleError;

  try {
    let { hospitalId, bloodGroup, units, urgency = "NORMAL" } = await req.json();

    if (user.role === "HOSPITAL") {
      hospitalId = user.hospitalId;
    }

    if (user.role === "DONOR") {
      const hasDonated = await prisma.donationAppointment.findFirst({
        where: { donorId: user.id, status: "COMPLETED" }
      });
      if (!hasDonated) {
        return NextResponse.json(
          { error: "Only donors who have completed a donation can request blood." },
          { status: 403 }
        );
      }
    }

    if (!hospitalId || !bloodGroup || !units) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const requesterId = user.role === "RECEIVER" || user.role === "DONOR" ? user.id : null;
    const token =
      user.role === "RECEIVER" || user.role === "DONOR"
        ? `REQ-${crypto.randomBytes(3).toString("hex").toUpperCase()}`
        : null;

    const record = await prisma.bloodRequest.create({
      data: {
        hospitalId: Number(hospitalId),
        requesterId,
        bloodGroup,
        units: Number(units),
        urgency,
        status: "PENDING",
        token
      },
      include: { hospital: { select: { name: true } } }
    });

    if (urgency === "CRITICAL") {
      const admins = await prisma.user.findMany({
        where: {
          role: { in: ["ADMIN", "HOSPITAL"] },
          OR: [{ hospitalId: { not: Number(hospitalId) } }, { hospitalId: null }]
        },
        select: { email: true }
      });
      const emails = admins.map((a) => a.email).filter(Boolean);
      if (emails.length > 0) {
        sendSosEmail(emails, {
          hospitalName: record.hospital?.name || `Hospital #${hospitalId}`,
          bloodGroup: record.bloodGroup,
          units: record.units
        }).catch((err) => console.error("SOS email error:", err));
      }
    }

    return NextResponse.json(
      {
        id: record.id,
        hospital_id: record.hospitalId,
        requester_id: record.requesterId,
        blood_group: record.bloodGroup,
        units: record.units,
        urgency: record.urgency,
        status: record.status,
        token: record.token,
        hospital_name: record.hospital?.name,
        created_at: record.createdAt.toISOString()
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Create request error:", err);
    return NextResponse.json({ error: "Failed to create request" }, { status: 500 });
  }
}
