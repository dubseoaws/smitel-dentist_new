// Hero videos are picked from https://www.youtube.com/@SouthKensingtonMedicalDental
export const CHANNEL_VIDEO_TITLES: Record<string, string> = {
  xQ833zvg6XY: "3 Things Your Dentist Notices That You Might Miss | Dr Nikki",
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
  BIUdsbvWGrY: "Professional Teeth Whitening in London | Medical and Dental",
  m0G8F04Oc_I: "Smile Makeover | Transform Your Smile",
  caJQ4VctLHs: "Glow Starts From Within",
  DS4o3clqkI0: "Professional Teeth Whitening in London",
  lJL8n7hB8dQ: "Porcelain Veneers ✨ Perfect Smile Transformation",
  R9lV65sDaoM: "Composite Bonding Explained by a Cosmetic Dentist",
  h9taMsS_asg: "Composite Veneers ✨ Natural Smile Makeover",
  yJvJKC_vFAM: "Tooth Contouring ✨ Improve Your Smile Naturally",
  lrHuOnhkjkU: "Thinking about improving your smile with composite bonding?",
  XTytCuaB588: "Dental Implants | A Premium Solution for Missing Teeth",
  fSfzXCXmUWg: "Dental Crown Treatment ✨ Restore and Protect Your Tooth",
  W9moDAFJxSk: "Root Canal Treatment ✨ Save Your Tooth",
  q9UBQhmUtTU: "Dental Bridge Treatment ✨ Restore Missing Teeth",
  aTa4r7IwIa0: "Dental Hygienist Teeth Cleaning ✨ Healthy Teeth & Gums",
  "-F4a0RQIrUs": "Why Do Your Teeth Hurt When Drinking Cold Water? 🥶🦷",
  VXPnTLdfxzo: "Wisdom Tooth Removal Explained in 60 Seconds",
  qFKmsgUfdys: "Now Open Saturdays | Private GP & Dentist in South Kensington",
};

/** Vertical YouTube Shorts, rendered in a portrait frame in the hero. */
export const VERTICAL_VIDEOS = new Set([
  "m0G8F04Oc_I",
  "caJQ4VctLHs",
  "DS4o3clqkI0",
  "lJL8n7hB8dQ",
  "R9lV65sDaoM",
  "h9taMsS_asg",
  "yJvJKC_vFAM",
  "lrHuOnhkjkU",
  "XTytCuaB588",
  "fSfzXCXmUWg",
  "W9moDAFJxSk",
  "q9UBQhmUtTU",
  "aTa4r7IwIa0",
  "-F4a0RQIrUs",
  "VXPnTLdfxzo",
  "qFKmsgUfdys",
]);

/** Preferred thumbnail frame for Shorts whose default (oar3) frame is unsuitable. */
export const SHORT_THUMB_FRAME: Record<string, string> = {
  DS4o3clqkI0: "oar1",
};

/** Extra Shorts shown beside the main hero Short. */
export const HERO_EXTRA_SHORTS: Record<string, string[]> = {
  "smile-makeover-london": ["caJQ4VctLHs"],
};

export const TREATMENT_HERO_VIDEOS: Record<string, string> = {
  // Cosmetic Dentistry
  "cosmetic-dentistry-london": "lrHuOnhkjkU",
  "smile-makeover-london": "m0G8F04Oc_I",
  "teeth-whitening-london": "DS4o3clqkI0",
  "composite-bonding-london": "R9lV65sDaoM",
  "porcelain-veneers-london": "lJL8n7hB8dQ",
  "composite-veneers-london": "h9taMsS_asg",
  "dental-veneers-london": "33u-MrdHaVU",
  "tooth-contouring-london": "yJvJKC_vFAM",
  "gum-contouring-london": "bLtSMhb60HI",
  // Restorative & Implants
  "missing-teeth-london": "XTytCuaB588",
  "dental-implants-london": "Huq5WJ2grKc",
  "dental-crowns-london": "fSfzXCXmUWg",
  "dental-bridges-london": "q9UBQhmUtTU",
  "dentures-london": "bLtSMhb60HI",
  "full-dentures": "bLtSMhb60HI",
  "root-canal-london": "W9moDAFJxSk",
  // General Dentistry
  "dental-examination-london": "-F4a0RQIrUs",
  "white-fillings-london": "MrlpuYBR0K0",
  "wisdom-tooth-extraction-london": "VXPnTLdfxzo",
  "tmj-treatment-london": "mWMhRZo2E54",
  // Preventative Care
  "hygiene-london": "aTa4r7IwIa0",
  "periodontal-london": "ulaDPSMdx4M",
  "childrens-dentistry-london": "TXWm6v44dJc",
  // Emergency Care
  "emergency-dental-london": "cjQ1gRfY22E",
};

export const FALLBACK_HERO_VIDEO = "TXWm6v44dJc";

export function heroVideoFor(slug: string) {
  return TREATMENT_HERO_VIDEOS[slug] ?? FALLBACK_HERO_VIDEO;
}
