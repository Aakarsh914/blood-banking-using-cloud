import { PrismaClient } from "@prisma/client";
import { databaseConfigError, getDatabaseUrl } from "./databaseUrl";

const globalForPrisma = global;

export function getPrisma() {
  const configError = databaseConfigError();
  if (configError) {
    throw new Error(configError);
  }

  const datasourceUrl = getDatabaseUrl();

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      datasourceUrl
    });
  }
  return globalForPrisma.prisma;
}

if (process.env.NODE_ENV !== "production") {
  try {
    getPrisma();
  } catch {
    // Local dev may use SQLite placeholder until .env is configured
  }
}
