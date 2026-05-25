export const dynamic = "force-dynamic";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";

export async function GET(req) {
  const prisma = getPrisma();
  const { user, error } = await requireUser(req);
  if (error) return error;

  try {
    const where = user.role === "HOSPITAL" ? { bankId: user.hospitalId } : {};
    const history = await prisma.inventoryHistory.findMany({
      where,
      include: {
        user: { select: { name: true, role: true } },
        bank: { select: { name: true } }
      },
      orderBy: { createdAt: "desc" },
      take: 100
    });

    const formatted = history.map((record) => ({
      id: record.id,
      user_name: record.user?.name,
      user_role: record.user?.role,
      action: record.action,
      blood_group: record.bloodGroup,
      component: record.component,
      units: record.units,
      bank_name: record.bank?.name,
      bank_id: record.bankId,
      created_at: record.createdAt.toISOString()
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("Inventory history error:", err);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}
