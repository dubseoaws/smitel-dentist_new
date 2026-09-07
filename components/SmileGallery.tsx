import Image from "next/image";
import Link from "next/link";
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
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
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

        <div className={`grid gap-6 ${COLS[columns]}`}>
          {cases.map((c) => (
            <article key={c.before} className="bg-white border border-ink/10 p-3">
              <div className="grid grid-cols-2 gap-2">
                <figure className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={c.before}
                    alt={`Before ${c.category} at Smile Dentist London`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                  />
                  <figcaption className="absolute bottom-3 left-3 bg-ink/85 backdrop-blur text-ivory font-label text-[10px] font-bold tracking-[0.2em] px-3.5 py-1.5">
                    BEFORE
                  </figcaption>
                </figure>
                <figure className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={c.after}
                    alt={`After ${c.category} at Smile Dentist London`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                  />
                  <figcaption className="absolute bottom-3 left-3 bg-gold text-ink font-label text-[10px] font-bold tracking-[0.2em] px-3.5 py-1.5">
                    AFTER
                  </figcaption>
                </figure>
              </div>
              <div className="px-4 pt-5 pb-4 space-y-2">
                <h3 className="font-display text-lg font-semibold">{c.category}</h3>
                {c.caption ? (
                  <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">
                    {c.caption}
                  </p>
                ) : null}
                <p className="font-label text-[11px] font-bold tracking-[0.16em] uppercase text-gold-deep">
                  {c.dentist}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-soft max-w-xl">
          *Actual patient results. Individual results may vary. No treatment outcome is
          guaranteed. A full consultation is required before any treatment.
        </p>
      </div>
    </section>
  );
}
