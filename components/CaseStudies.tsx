import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/site-data";

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Transformations</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              Real people, real smiles
            </h2>
            <p className="text-ink-soft leading-relaxed">
              We take pride in changing lives, one smile at a time. Browse our gallery of
              recent case studies.
            </p>
          </div>
          <Link
            href="/results-london"
            className="border border-ink/20 px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:border-gold-deep hover:text-gold-deep transition-colors whitespace-nowrap self-start lg:self-auto"
          >
            View all case studies →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.title}
              className="bg-white border border-ink/10 p-3"
            >
              <div className="grid grid-cols-2 gap-2">
                <figure className="relative h-52 sm:h-64 overflow-hidden">
                  <Image
                    src={cs.before}
                    alt={`Before ${cs.title} - patient presentation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-3 left-3 bg-ink/85 backdrop-blur text-ivory font-label text-[10px] font-bold tracking-[0.2em] px-3.5 py-1.5">
                    BEFORE
                  </figcaption>
                </figure>
                <figure className="relative h-52 sm:h-64 overflow-hidden">
                  <Image
                    src={cs.after}
                    alt={`After ${cs.title} - dental transformation result`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-3 left-3 bg-gold text-ink font-label text-[10px] font-bold tracking-[0.2em] px-3.5 py-1.5">
                    AFTER
                  </figcaption>
                </figure>
              </div>
              <div className="px-4 pt-5 pb-4 space-y-2.5">
                <h3 className="font-display text-xl font-semibold">{cs.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">
                  {cs.description}
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
