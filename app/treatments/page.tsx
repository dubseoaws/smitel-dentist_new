import type { Metadata } from "next";
import Link from "next/link";
import TreatmentCard from "@/components/TreatmentCard";
import MembershipBanner from "@/components/MembershipBanner";
import SmileGallery from "@/components/SmileGallery";
import MeetExperts from "@/components/MeetExperts";
import { TREATMENT_CATEGORIES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Treatments",
  description:
    "From routine preventative care to complex cosmetic transformations, we offer a full spectrum of dental services under one roof.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Comprehensive Care</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">Our Treatments</h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            From routine preventative care to complex cosmetic transformations, we offer a
            full spectrum of dental services under one roof.
          </p>
          <nav className="mt-8 flex flex-wrap gap-3">
            {TREATMENT_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="border border-ink/20 bg-white px-5 py-2.5 font-label text-[11px] font-medium tracking-[0.16em] uppercase hover:border-gold hover:text-gold-deep transition-colors"
              >
                {cat.title.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {TREATMENT_CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-16 lg:py-20 scroll-mt-28 ${i % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl sm:text-4xl tracking-tight">{cat.title}</h2>
              <p className="mt-3 text-ink-soft leading-relaxed">{cat.intro}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cat.treatments.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Not sure what you need?</h2>
          <p className="text-ink-soft leading-relaxed">
            Book a consultation with Dr. Yasha or one of our dentists. We will assess your
            oral health and create a bespoke treatment plan just for you.
          </p>
          <Link
            href="/booking"
            className="btn-primary"
          >
            Book Consultation: £95
          </Link>
        </div>
      </section>

      <MeetExperts limit={8} columns={4} shape="circle" />

      <MembershipBanner />
    </>
  );
}
