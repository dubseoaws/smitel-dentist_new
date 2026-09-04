import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site-data";
import {
  clinicEmail,
  patientEmail,
  type BookingEmailPayload,
} from "@/lib/booking-email";

const FROM = process.env.BOOKING_EMAIL_FROM ?? "Smile Dentist <bookings@smiledentist.co.uk>";
const CLINIC_INBOX = process.env.BOOKING_EMAIL_TO ?? SITE.email;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 120) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ sent: false, reason: "not-configured" });
  }

  const raw = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!raw) return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const clinic = raw.clinic === "col" ? "col" : raw.clinic === "sk" ? "sk" : null;
  const email = clean(raw.email);
  const date = clean(raw.date, 10);
  const time = clean(raw.time, 5);
  if (
    !clinic ||
    !EMAIL.test(email) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !/^\d{2}:\d{2}$/.test(time)
  ) {
    return NextResponse.json({ error: "Invalid booking details" }, { status: 400 });
  }

  const data: BookingEmailPayload = {
    clinic,
    serviceName: clean(raw.serviceName) || "Dental appointment",
    priceLabel: clean(raw.priceLabel, 60),
    duration: Number(raw.duration) || 30,
    dentist: clean(raw.dentist, 60) || undefined,
    date,
    time,
    firstName: clean(raw.firstName, 60),
    lastName: clean(raw.lastName, 60),
    email,
    phone: clean(raw.phone, 30),
    dob: /^\d{4}-\d{2}-\d{2}$/.test(clean(raw.dob, 10)) ? clean(raw.dob, 10) : undefined,
    gender: clean(raw.gender, 20) || undefined,
  };

  const resend = new Resend(key);
  const patient = patientEmail(data);
  const clinicMail = clinicEmail(data);

  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: data.email,
      replyTo: SITE.email,
      subject: patient.subject,
      html: patient.html,
    }),
    resend.emails.send({
      from: FROM,
      to: CLINIC_INBOX,
      replyTo: data.email,
      subject: clinicMail.subject,
      html: clinicMail.html,
    }),
  ]);

  const failed = results.filter(
    (r) => r.status === "rejected" || (r.status === "fulfilled" && r.value.error),
  );
  if (failed.length) {
    console.error("Booking email failed", failed);
    return NextResponse.json({ sent: false }, { status: 502 });
  }

  return NextResponse.json({ sent: true });
}
