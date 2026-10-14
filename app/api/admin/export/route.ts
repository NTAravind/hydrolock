import { NextResponse } from "next/server";

import { isAuthenticated } from "@/lib/auth";
import { getSubscribers } from "@/lib/supabase";

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const subscribers = await getSubscribers();

  const header = ["id", "email", "joined_at"].map(csvCell).join(",");
  const rows = subscribers.map((subscriber) =>
    [subscriber.id, subscriber.email, subscriber.created_at]
      .map(csvCell)
      .join(",")
  );
  const csv = [header, ...rows].join("\r\n");

  const filename = `hydrolock-subscribers-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
