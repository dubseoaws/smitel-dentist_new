// Service catalogue, provider names and filters mirrored from the live booking flow.

export type BookingCategory =
  | "emergency"
  | "general"
  | "hygiene"
  | "whitening"
  | "implants"
  | "cosmetic"
  | "ortho";

export type SkService = {
  id: string;
  name: string;
  duration: number;
  priceLabel: string;
  category: BookingCategory;
  tag?: string;
  note?: string;
  serviceKey: string;
  serviceTitle: string;
  deposit: number;
  inClinicPrice: number;
};

export type ColService = {
  id: string;
  name: string;
  appointmentTypeId: string;
  role: "dentist" | "hygienist";
  duration: number;
  priceLabel: string;
  tag?: string;
  note?: string;
  comments: string;
};

export const SK_SERVICES: SkService[] = [
  {
    id: "emergency",
    name: "Emergency Dentist",
    duration: 30,
    priceLabel: "£30 New Patient Offer (was £95)",
    category: "emergency",
    tag: "Special",
    note: "Join Membership to save £125 on extractions",
    serviceKey: "emergency-dentist",
    serviceTitle: "Emergency Dentist",
    deposit: 0,
    inClinicPrice: 30,
  },
  {
    id: "routine",
    name: "Dentist (Routine Exam)",
    duration: 30,
    priceLabel: "£30 New Patient Offer (was £95)",
    category: "general",
    serviceKey: "emergency-dentist",
    serviceTitle: "Dentist (Routine Exam)",
    deposit: 0,
    inClinicPrice: 30,
  },
  {
    id: "hygiene",
    name: "Hygienist",
    duration: 30,
    priceLabel: "£49 New Patient Offer (was £89)",
    category: "hygiene",
    serviceKey: "hygienist",
    serviceTitle: "Dental Hygienist",
    deposit: 0,
    inClinicPrice: 49,
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    duration: 30,
    priceLabel: "£199 Offer",
    category: "whitening",
    serviceKey: "emergency-dentist",
    serviceTitle: "Teeth Whitening",
    deposit: 0,
    inClinicPrice: 199,
  },
  {
    id: "implant-consult",
    name: "Dental Implants Consultation",
    duration: 15,
    priceLabel: "FREE",
    category: "implants",
    note: "A brief initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    serviceKey: "emergency-dentist",
    serviceTitle: "Dental Implants Consultation",
    deposit: 0,
    inClinicPrice: 0,
  },
  {
    id: "cosmetic-consult",
    name: "Cosmetic Dentistry Consultation",
    duration: 15,
    priceLabel: "FREE",
    category: "cosmetic",
    note: "A brief initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    serviceKey: "emergency-dentist",
    serviceTitle: "Cosmetic Dentistry Consultation",
    deposit: 0,
    inClinicPrice: 0,
  },
  {
    id: "ortho-consult",
    name: "Pro-aligners Consultation",
    duration: 15,
    priceLabel: "FREE",
    category: "ortho",
    note: "A brief initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    serviceKey: "emergency-dentist",
    serviceTitle: "Pro-aligners Consultation",
    deposit: 0,
    inClinicPrice: 0,
  },
];

export const COL_SERVICES: ColService[] = [
  {
    id: "exam",
    name: "Dentist (Routine Exam)",
    appointmentTypeId: "0ec1ec5a-6b52-f011-91ba-6045bd122dd7",
    role: "dentist",
    duration: 30,
    priceLabel: "£30 New Patient Offer (was £95)",
    comments: "Dentist Examination – £30",
  },
  {
    id: "emergency",
    name: "Emergency Dentist",
    appointmentTypeId: "43665cab-35af-408a-a8b2-652118c1585a",
    role: "dentist",
    duration: 30,
    priceLabel: "£30 New Patient Offer (was £95)",
    tag: "Special",
    comments: "Emergency Dental Examination – £30",
  },
  {
    id: "hygiene",
    name: "Dental Hygienist",
    appointmentTypeId: "46c3e873-b365-4f70-9262-09059cbcfb35",
    role: "hygienist",
    duration: 30,
    priceLabel: "£49 New Patient Offer (was £89)",
    comments: "Dental Hygienist – £49 / £89",
  },
  {
    id: "hygiene-airflow",
    name: "Hygienist + Airflow",
    appointmentTypeId: "da7b1250-1e57-f011-91ba-6045bd122dd7",
    role: "hygienist",
    duration: 30,
    priceLabel: "£102 / £142",
    comments: "Dental Hygienist + Airflow – £102 / £142",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    appointmentTypeId: "aaa3c0d5-526c-f011-b8ec-6045bdf21b73",
    role: "dentist",
    duration: 30,
    priceLabel: "£199 Offer",
    comments: "Teeth Whitening (Whitening Scan) – £199",
  },
  {
    id: "implant-consult",
    name: "Dental Implants Consultation",
    appointmentTypeId: "a6eee6cd-95b9-4bfd-95f4-c5f1f27987cd",
    role: "dentist",
    duration: 30,
    priceLabel: "£30",
    note: "An initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    comments: "Implant Consultation (30 min) – £30",
  },
  {
    id: "cosmetic-consult",
    name: "Cosmetic Dentistry Consultation",
    appointmentTypeId: "c48679c9-7423-f111-9a4b-6045bdcfda26",
    role: "dentist",
    duration: 15,
    priceLabel: "FREE",
    note: "A brief initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    comments: "Complimentary Short Consultation (Cosmetic) – Free",
  },
  {
    id: "ortho-consult",
    name: "Pro-aligners Consultation",
    appointmentTypeId: "b8d5424f-fd6b-f011-b8ec-6045bdf21b73",
    role: "dentist",
    duration: 30,
    priceLabel: "FREE",
    note: "A brief initial assessment. Diagnostic imaging and detailed treatment planning may incur separate charges.",
    comments: "Pro-Aligners Consultation – Free",
  },
];

// South Kensington service id -> City of London service id.
export const SK_TO_COL_SERVICE: Record<string, string> = {
  emergency: "emergency",
  routine: "exam",
  hygiene: "hygiene",
  whitening: "whitening",
  "implant-consult": "implant-consult",
  "cosmetic-consult": "cosmetic-consult",
  "ortho-consult": "ortho-consult",
};

export const PROVIDER_NAMES: Record<string, string> = {
  yasha_shirazi: "Dr. Yasha",
  narges: "Dr. Narges",
  andreia: "Dr. Andreia",
  kamran: "Dr. Kamran",
  reza: "Dr. Reza",
  andreia_phipps: "Dr. Andreia",
  narges_ameri: "Dr. Narges",
  kamran_yazdi: "Dr. Kamran",
  reza_davari: "Dr. Reza",
  ayman_mukhtar: "Dr. Ayman",
  elisabeth_lichtmannegger: "Elisabeth",
};

export const HIDDEN_PROVIDERS = ["louise_carnaby"];
export const ORTHO_ONLY_PROVIDERS = ["andreia_phipps", "narges_ameri"];
export const IMPLANT_EXCLUDED_PROVIDERS = [
  "narges_ameri",
  "narges",
  "ayman_mukhtar",
  "elisabeth_lichtmannegger",
  "andreia_phipps",
];
export const COSMETIC_EXCLUDED_PROVIDERS = ["andreia_phipps"];

export function providerName(key: string) {
  return (
    PROVIDER_NAMES[key] ??
    key
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

export type ProviderSlots = {
  providerKey: string;
  slots: { date: string; slots: string[] }[];
};

export function filterProviders(providers: ProviderSlots[], serviceId: string) {
  let list = providers.filter((p) => !HIDDEN_PROVIDERS.includes(p.providerKey));
  if (serviceId === "ortho-consult")
    list = list.filter((p) => ORTHO_ONLY_PROVIDERS.includes(p.providerKey));
  if (serviceId === "implant-consult")
    list = list.filter((p) => !IMPLANT_EXCLUDED_PROVIDERS.includes(p.providerKey));
  if (serviceId === "cosmetic-consult")
    list = list.filter((p) => !COSMETIC_EXCLUDED_PROVIDERS.includes(p.providerKey));
  return list;
}

// Consultations at South Kensington are weekdays only.
export function weekendBlocked(serviceId: string, date: string) {
  if (serviceId !== "ortho-consult" && serviceId !== "implant-consult") return false;
  const day = new Date(`${date}T00:00:00`).getDay();
  return day === 0 || day === 6;
}
