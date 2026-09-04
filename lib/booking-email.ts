import { CLINICS, SITE } from "@/lib/site-data";

export type BookingEmailPayload = {
  clinic: "sk" | "col";
  serviceName: string;
  priceLabel: string;
  duration: number;
  dentist?: string;
  date: string; // yyyy-mm-dd
  time: string; // HH:mm
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob?: string; // yyyy-mm-dd
  gender?: string;
};

const CLINIC_SLUG: Record<BookingEmailPayload["clinic"], string> = {
  sk: "south-kensington",
  col: "city-of-london",
};

export function clinicFor(clinic: BookingEmailPayload["clinic"]) {
  return CLINICS.find((c) => c.slug === CLINIC_SLUG[clinic])!;
}

export function longDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rows(items: [string, string | undefined][]) {
  return items
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;color:#6d665e;font-size:13px;width:170px">${esc(
          label,
        )}</td><td style="padding:8px 0;color:#1b1815;font-size:14px">${esc(
          value!,
        )}</td></tr>`,
    )
    .join("");
}

function shell(title: string, intro: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#fbf9f6;font-family:Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbf9f6;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e6e0d7">
        <tr><td style="background:#1b1815;padding:28px 32px">
          <p style="margin:0;color:#d7ab71;font-size:11px;letter-spacing:.22em;text-transform:uppercase">Smile Dentist</p>
          <h1 style="margin:10px 0 0;color:#fbf9f6;font-size:22px;font-weight:normal">${esc(title)}</h1>
        </td></tr>
        <tr><td style="padding:28px 32px">
          <p style="margin:0 0 20px;color:#6d665e;font-size:14px;line-height:1.7">${intro}</p>
          ${body}
        </td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #e6e0d7;color:#6d665e;font-size:12px;line-height:1.7">
          Need to change your appointment? Call <a href="${SITE.phoneHref}" style="color:#9a6f3c">${esc(SITE.phone)}</a> or reply to this email.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export function patientEmail(data: BookingEmailPayload) {
  const clinic = clinicFor(data.clinic);
  const details = rows([
    ["Treatment", data.serviceName],
    ["Price", data.priceLabel],
    ["Date", longDate(data.date)],
    ["Time", data.time],
    ["Duration", `${data.duration} minutes`],
    ["Clinician", data.dentist],
    ["Clinic", clinic.name],
    ["Address", clinic.address.join(", ")],
    ["Getting here", clinic.proximity],
  ]);

  return {
    subject: `Appointment confirmed — ${data.serviceName}, ${longDate(data.date)} at ${data.time}`,
    html: shell(
      "Appointment Confirmed",
      `Hi ${esc(data.firstName)}, your appointment is confirmed. We're looking forward to welcoming you to the clinic.`,
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${details}</table>`,
    ),
  };
}

export function clinicEmail(data: BookingEmailPayload) {
  const clinic = clinicFor(data.clinic);
  const details = rows([
    ["Clinic", clinic.name],
    ["Treatment", data.serviceName],
    ["Price", data.priceLabel],
    ["Date", longDate(data.date)],
    ["Time", data.time],
    ["Duration", `${data.duration} minutes`],
    ["Clinician", data.dentist],
    ["Patient", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["Mobile", data.phone],
    ["Date of birth", data.dob],
    ["Gender", data.gender],
  ]);

  return {
    subject: `New booking — ${data.firstName} ${data.lastName}, ${data.serviceName}, ${data.date} ${data.time}`,
    html: shell(
      "New Online Booking",
      `A new appointment was booked on the website.`,
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${details}</table>`,
    ),
  };
}
