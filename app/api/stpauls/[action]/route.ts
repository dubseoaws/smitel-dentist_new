import { NextResponse } from "next/server";

const BASE =
  process.env.STPAULS_BOOKING_API ?? "https://www.smiledentist.co.uk/api/stpauls";

const ALLOWED = ["slots", "book", "first-available"];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  const { action } = await params;
  if (!ALLOWED.includes(action))
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const query = new URL(request.url).search;
  const upstream = await fetch(`${BASE}/${action}${query}`, { cache: "no-store" });
  const text = await upstream.text();
  return new NextResponse(text, {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  const { action } = await params;
  if (!ALLOWED.includes(action))
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await request.text();
  const upstream = await fetch(`${BASE}/${action}`, {
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
