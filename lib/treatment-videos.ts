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
  "6t0x3swAIww": "What Is Composite Bonding? ✨ A Fast Way to Improve Your Smile",
  Z2S8nGtEMKE: "Porcelain Veneers Treatment | Perfect Smile with Cosmetic Dentistry",
  ZZTyMH2IIZA: "Composite Veneers Treatment | Natural Smile Makeover",
  bLNstEIcrBQ: "Professional Dental Hygienist Cleaning | Healthy Teeth & Gums",
  mWMhRZo2E54:
    "South Kensington Medical and Dental Clinic: Luxury Medical & Dental Care",
  "lkEY_-its4k": "Dental Crown Treatment | Restore Strength and Improve Your Smile",
  M_ZfyFgI9y0:
    "Dental Bridge Treatment | Replace Missing Teeth and Restore Your Smile",
  N8_yS4Ynfso: "Root Canal Treatment | Save Your Tooth and Relieve Pain",
  cjQ1gRfY22E:
    "Need an Emergency Dentist in London? £30 Same-Day Appointments | SW7",
  X0YevbTU4ws:
    "Now Open Saturdays | Private GP & Dentist in South Kensington | Walk-Ins Welcome",
  MrlpuYBR0K0: "White Fillings Explained | Natural Looking Tooth Repair in London",
};

export const TREATMENT_HERO_VIDEOS: Record<string, string> = {
  // Cosmetic Dentistry
  "smile-makeover-london": "bLtSMhb60HI",
  "teeth-whitening-london": "TXWm6v44dJc",
  "composite-bonding-london": "6t0x3swAIww",
  "porcelain-veneers-london": "Z2S8nGtEMKE",
  "composite-veneers-london": "ZZTyMH2IIZA",
  "dental-veneers-london": "33u-MrdHaVU",
  "tooth-contouring-london": "TXWm6v44dJc",
  "gum-contouring-london": "bLtSMhb60HI",
  // Restorative & Implants
  "missing-teeth-london": "mWMhRZo2E54",
  "dental-implants-london": "Huq5WJ2grKc",
  "dental-crowns-london": "lkEY_-its4k",
  "dental-bridges-london": "M_ZfyFgI9y0",
  "dentures-london": "bLtSMhb60HI",
  "full-dentures": "bLtSMhb60HI",
  "root-canal-london": "N8_yS4Ynfso",
  // General Dentistry
  "dental-examination-london": "X0YevbTU4ws",
  "white-fillings-london": "MrlpuYBR0K0",
  "wisdom-tooth-extraction-london": "JyjVdDbavkA",
  "tmj-treatment-london": "mWMhRZo2E54",
  // Preventative Care
  "hygiene-london": "bLNstEIcrBQ",
  "periodontal-london": "ulaDPSMdx4M",
  "childrens-dentistry-london": "TXWm6v44dJc",
  // Emergency Care
  "emergency-dental-london": "cjQ1gRfY22E",
};

export const FALLBACK_HERO_VIDEO = "TXWm6v44dJc";

export function heroVideoFor(slug: string) {
  return TREATMENT_HERO_VIDEOS[slug] ?? FALLBACK_HERO_VIDEO;
}
