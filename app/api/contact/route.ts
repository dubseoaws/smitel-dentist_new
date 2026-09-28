import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site-data";
import {
  enquiryEmail,
  enquiryReceiptEmail,
  type ContactEmailPayload,
} from "@/lib/contact-email";

const FROM =
  process.env.CONTACT_EMAIL_FROM ??
  process.env.BOOKING_EMAIL_FROM ??
  "Smile Dentist <bookings@smiledentist.co.uk>";
const INBOX = process.env.CONTACT_EMAIL_TO ?? process.env.BOOKING_EMAIL_TO ?? SITE.email;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 120) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";
}

function cleanMultiline(value: unknown, max = 4000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ sent: false, reason: "not-configured" });
  }

  const raw = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!raw) return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  // Hidden field only bots fill in — accept silently so they get no signal.
  if (clean(raw.company, 200)) return NextResponse.json({ sent: true });

  const name = clean(raw.name, 80);
  const email = clean(raw.email, 120);
  const message = cleanMultiline(raw.message);

  if (!name || !EMAIL.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Invalid enquiry details" }, { status: 400 });
  }

  const data: ContactEmailPayload = {
    name,
    email,
    phone: clean(raw.phone, 30) || undefined,
    clinic: clean(raw.clinic, 60) || undefined,
    subject: clean(raw.subject, 120) || undefined,
    message,
  };

  const resend = new Resend(key);
  const team = enquiryEmail(data);
  const receipt = enquiryReceiptEmail(data);

  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: INBOX,
      replyTo: data.email,
      subject: team.subject,
      html: team.html,
    }),
    resend.emails.send({
      from: FROM,
      to: data.email,
      replyTo: SITE.email,
      subject: receipt.subject,
      html: receipt.html,
    }),
  ]);

  const failed = results.filter(
    (r) => r.status === "rejected" || (r.status === "fulfilled" && r.value.error),
  );
  if (failed.length) {
    console.error("Contact email failed", failed);
    return NextResponse.json({ sent: false }, { status: 502 });
  }

  return NextResponse.json({ sent: true });
}
