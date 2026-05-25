import { NextResponse } from "next/server";

export function prismaErrorResponse(err, context) {
  console.error(`${context}:`, err);

  const message = err?.message || "";
  const code = err?.code;

  if (message.includes("DATABASE_URL") || message.includes("datasource")) {
    return NextResponse.json(
      {
        error: "Database is not configured on the server.",
        hint: "In Vercel, set DATABASE_URL to your Supabase Transaction pooler URI (port 6543) and redeploy."
      },
      { status: 503 }
    );
  }

  if (
    code === "P1001" ||
    message.includes("Can't reach database server") ||
    message.includes("ECONNREFUSED")
  ) {
    return NextResponse.json(
      {
        error: "Cannot reach the database.",
        hint: "Use Supabase Settings → Database → Transaction pooler (port 6543), not the direct db.* host on port 5432."
      },
      { status: 503 }
    );
  }

  if (
    message.includes("prepared statement") ||
    message.includes("42P05")
  ) {
    return NextResponse.json(
      {
        error: "Database connection misconfigured for serverless.",
        hint: "Append ?pgbouncer=true to DATABASE_URL (Supabase pooler on port 6543)."
      },
      { status: 503 }
    );
  }

  if (code === "P2021" || message.includes("does not exist")) {
    return NextResponse.json(
      {
        error: "Database tables are missing.",
        hint: "Run backend/sql/schema.sql in the Supabase SQL Editor, then try again."
      },
      { status: 503 }
    );
  }

  if (message.includes("users_role_check") || message.includes("23514")) {
    return NextResponse.json(
      {
        error: "Receiver accounts are not enabled in the database yet.",
        hint: "In Supabase SQL Editor, run backend/sql/migrate_add_receiver_role.sql, then register again."
      },
      { status: 400 }
    );
  }

  return null;
}
