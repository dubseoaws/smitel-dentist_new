import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { ALL_TREATMENTS } from "@/lib/site-data";

const SLUG = "smile-makeover-london";

const treatment = ALL_TREATMENTS.find((t) => t.slug === SLUG)!;

export const metadata: Metadata = {
  title: treatment.name,
  description: treatment.description,
};

export default function SmileMakeoverPage() {
  return <TreatmentPage slug={SLUG} hideMembership />;
}
