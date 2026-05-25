export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const where = user.role === "HOSPITAL" ? { bankId: user.hospitalId } : {};
    const items = await prisma.bloodInventory.findMany({
      where,
      include: { bank: { select: { name: true } } },
      orderBy: { bloodGroup: "asc" }
    });

    const formatted = items.map((item) => ({
      id: item.id,
      bank_id: item.bankId,
      bank_name: item.bank.name,
      blood_group: item.bloodGroup,
      component: item.component,
      units: item.units,
      expires_on: item.expiresOn.toISOString().split("T")[0]
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("Fetch inventory error:", err);
    return NextResponse.json({ error: "Failed to fetch inventory" }, { status: 500 });
  }
}

export async function POST(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  const roleError = requireRole(user, ["ADMIN", "HOSPITAL"]);
  if (roleError) return roleError;

  try {
    let { bankId, bloodGroup, component, units, expiresOn } = await req.json();

    if (user.role === "HOSPITAL") {
      bankId = user.hospitalId;
    }

    if (!bankId || !bloodGroup || !component || !units || !expiresOn) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existing = await prisma.bloodInventory.findFirst({
      where: {
        bankId: Number(bankId),
        bloodGroup,
        component
      }
    });

    let record;
    if (existing) {
      record = await prisma.bloodInventory.update({
        where: { id: existing.id },
        data: {
          units: existing.units + Number(units),
          expiresOn: new Date(expiresOn)
        }
      });
    } else {
      record = await prisma.bloodInventory.create({
        data: {
          bankId: Number(bankId),
          bloodGroup,
          component,
          units: Number(units),
          expiresOn: new Date(expiresOn)
        }
      });
    }

    await prisma.inventoryHistory.create({
      data: {
        userId: user.id,
        action: "ADD",
        bloodGroup,
        component,
        units: Number(units),
        bankId: Number(bankId)
      }
    });

    return NextResponse.json(record, { status: 201 });
  } catch (err) {
    console.error("Add inventory error:", err);
    return NextResponse.json({ error: "Failed to add inventory" }, { status: 500 });
  }
}
