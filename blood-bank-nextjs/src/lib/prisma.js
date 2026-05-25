import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

export function getPrisma() {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL
    });
  }
  return globalForPrisma.prisma;
}

if (process.env.NODE_ENV !== "production") {
  getPrisma();
}
