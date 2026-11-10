import Link from "next/link";
import SmileGalleryGrid from "@/components/SmileGalleryGrid";
import { SMILE_GALLERY } from "@/lib/smile-gallery";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  category?: string;
  limit?: number;
  columns?: 2 | 3;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

const COLS: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

export default function SmileGallery({
  eyebrow = "Smile Gallery",
  title = "Before & After",
  intro = "Real transformations from real patients. Browse our collection of smile makeovers and see the life-changing results our dentists achieve every day.",
  category,
  limit,
  columns = 3,
  ctaHref = "/results-london",
  ctaLabel = "View all results →",
  className = "",
}: Props) {
  const cases = SMILE_GALLERY.filter(
    (c) => !category || c.category.toLowerCase() === category.toLowerCase()
  ).slice(0, limit ?? undefined);

  if (!cases.length) return null;

  return (
    <section id="smile-gallery" className={`scroll-mt-48 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
            {intro ? (
              <p className="text-ink-soft leading-relaxed">{intro}</p>
            ) : null}
          </div>
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="border border-ink/20 px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:border-gold-deep hover:text-gold-deep transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>

        <SmileGalleryGrid cases={cases} gridClassName={COLS[columns]} compactMobile={Boolean(limit)} />

        <p className="mt-8 text-xs text-ink-soft max-w-xl">
          *Actual patient results. Individual results may vary. No treatment outcome is
          guaranteed. A full consultation is required before any treatment.
        </p>
      </div>
    </section>
  );
}
