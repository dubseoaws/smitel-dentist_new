import { NextResponse } from "next/server";

const BASE =
  process.env.SK_BOOKING_API ?? "https://moleculer.md.co.uk/api/booking/public";

const ENDPOINTS: Record<string, string> = {
  slots: "/calendar/get-time-slots-per-provider",
  book: "/booking/book-appointment-with-deposit",
};

export async function POST(
  request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  const { action } = await params;
  const endpoint = ENDPOINTS[action];
  if (!endpoint) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await request.text();
  const upstream = await fetch(`${BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    cache: "no-store",
  });

  const text = await upstream.text();
  return new NextResponse(text, {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
