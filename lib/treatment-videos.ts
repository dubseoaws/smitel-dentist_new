// Hero videos are picked from https://www.youtube.com/@SouthKensingtonMedicalDental
export const CHANNEL_VIDEO_TITLES: Record<string, string> = {
  n33iO5y6N0g: "Dental Implants Explained | A Premium Solution for Missing Teeth",
  Huq5WJ2grKc: "Impacted Wisdom Tooth | The Hidden Problem at the Back of Your Mouth",
  JyjVdDbavkA:
    "Private Dentist Appointment in South Kensington | Explained By Dr. Yasha Shirazi",
  bLtSMhb60HI:
    "Full Mouth Rehabilitation in London | Transform Your Smile with Dr. Andreia Phipps",
  "33u-MrdHaVU":
    "Saving £3,750 on Zirconia Teeth in London! | A Patient's Success Story",
  "lHx-p0FbocQ":
    "Need an Emergency Dentist in London? £30 Same-Day Appointments | SW7",
  ulaDPSMdx4M:
    "What Does a Dental Hygienist Do? | Essential Preventive Care Explained",
  Pv7tn0ULDgo:
    "Emergency Dentist in London, South Kensington | Same-Day Appointments | Walk-Ins Welcome",
  TXWm6v44dJc:
    "South Kensington Medical and Dental Clinic: Luxury Medical & Dental Care",
};

export const TREATMENT_HERO_VIDEOS: Record<string, string> = {
  // Cosmetic Dentistry
  "smile-makeover-london": "bLtSMhb60HI",
  "teeth-whitening-london": "TXWm6v44dJc",
  "composite-bonding-london": "TXWm6v44dJc",
  "porcelain-veneers-london": "33u-MrdHaVU",
  "composite-veneers-london": "33u-MrdHaVU",
  "dental-veneers-london": "33u-MrdHaVU",
  "tooth-contouring-london": "TXWm6v44dJc",
  "gum-contouring-london": "TXWm6v44dJc",
  "pro-aligners-london": "TXWm6v44dJc",
  // Restorative & Implants
  "missing-teeth-london": "n33iO5y6N0g",
  "dental-implants-london": "n33iO5y6N0g",
  "dental-crowns-london": "33u-MrdHaVU",
  "dental-bridges-london": "n33iO5y6N0g",
  "maryland-bridge-london": "n33iO5y6N0g",
  "dentures-london": "bLtSMhb60HI",
  "full-dentures": "bLtSMhb60HI",
  "root-canal-london": "JyjVdDbavkA",
  // General Dentistry
  "dental-examination-london": "JyjVdDbavkA",
  "white-fillings-london": "JyjVdDbavkA",
  "tooth-extraction-london": "Huq5WJ2grKc",
  "wisdom-tooth-extraction-london": "Huq5WJ2grKc",
  "tmj-treatment-london": "TXWm6v44dJc",
  // Preventative Care
  "hygiene-london": "ulaDPSMdx4M",
  "periodontal-london": "ulaDPSMdx4M",
  "childrens-dentistry-london": "TXWm6v44dJc",
  // Emergency Care
  "emergency-dental-london": "Pv7tn0ULDgo",
};

export const FALLBACK_HERO_VIDEO = "TXWm6v44dJc";

export function heroVideoFor(slug: string) {
  return TREATMENT_HERO_VIDEOS[slug] ?? FALLBACK_HERO_VIDEO;
}
