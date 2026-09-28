import { CLINICS } from "@/lib/site-data";
import { esc, shell, table } from "@/lib/email-template";

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

export function patientEmail(data: BookingEmailPayload) {
  const clinic = clinicFor(data.clinic);
  const details = table([
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
      details,
    ),
  };
}

export function clinicEmail(data: BookingEmailPayload) {
  const clinic = clinicFor(data.clinic);
  const details = table([
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
      details,
    ),
  };
}
