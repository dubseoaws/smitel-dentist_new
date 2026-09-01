import type { Metadata } from "next";
import CaseStudies from "@/components/CaseStudies";
import MembershipBanner from "@/components/MembershipBanner";
import MeetExperts from "@/components/MeetExperts";

export const metadata: Metadata = {
  title: "Real People, Real Smiles",
  description:
    "We take pride in changing lives, one smile at a time. Browse our gallery of recent case studies.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Transformations</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Real People, Real Smiles
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            We take pride in changing lives, one smile at a time. Browse our gallery of
            recent case studies.
          </p>
        </div>
      </section>
      <CaseStudies />
      <MeetExperts limit={3} tone="cream" />
      <MembershipBanner />
    </>
  );
}
