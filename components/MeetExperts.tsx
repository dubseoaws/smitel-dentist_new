import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";

export default function MeetExperts({
  limit = 3,
  columns = 3,
  shape = "card",
  tone = "ivory",
}: {
  limit?: number;
  columns?: 3 | 4;
  shape?: "card" | "circle";
  tone?: "ivory" | "cream";
}) {
  return (
    <section className={`py-16 lg:py-24 ${tone === "cream" ? "bg-cream" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Expert Dental Care</p>
            <h2 className="text-3xl sm:text-4xl tracking-tight">Meet The Experts</h2>
            <span className="block h-px w-16 bg-gold" aria-hidden />
            <p className="text-ink-soft leading-relaxed">
              Our hand-picked team of clinicians is dedicated to the art and science of
              your smile.
            </p>
          </div>
          <Link
            href="/team"
            className="border border-ink/20 bg-white px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:border-gold-deep hover:text-gold-deep transition-colors whitespace-nowrap self-start lg:self-auto"
          >
            View all staff →
          </Link>
        </div>
        <TeamGrid limit={limit} columns={columns} shape={shape} />
      </div>
    </section>
  );
}
