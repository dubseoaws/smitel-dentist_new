"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { SITE } from "@/lib/site-data";
import HeroMedia from "@/components/HeroMedia";
import GoogleG from "@/components/GoogleG";

const EASE = [0.22, 1, 0.36, 1] as const;

const POPULAR = [
  { label: "Dental Veneers", href: "/dental-veneers-london" },
  { label: "Composite Bonding", href: "/composite-bonding-london" },
  { label: "Invisible Braces", href: "/pro-aligners-london" },
  { label: "Smile Makeover", href: "/smile-makeover-london" },
];

const HEADLINE = ["Smile Dentist:", "The New Standard for", "Cosmetic Dentistry"];
const HEADLINE_GOLD = new Set([2]);

function HeadlineLines({ lines, gold }: { lines: string[]; gold: Set<number> }) {
  return lines.map((line, i) => (
    <span key={line} className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={`block ${gold.has(i) ? "text-gold-deep" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.1 }}
      >
        {line}
      </motion.span>
    </span>
  ));
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="main-content" className="hero-shade relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[0.92fr_1.08fr] lg:grid-rows-[1fr_auto_auto_1fr] gap-x-6">
          <div className="min-w-0 px-5 sm:px-10 lg:pr-6 max-sm:text-center pt-9 pb-10 sm:pt-12 sm:pb-20 lg:col-start-1 lg:row-start-2 lg:pt-12 lg:pb-16">
            <motion.p
              {...rise(0)}
              className="flex items-center max-sm:justify-center gap-3 font-label text-[11px] font-semibold tracking-[0.26em] uppercase text-gold-deep"
            >
              <span className="h-px w-8 bg-gold max-sm:w-5" aria-hidden />
              Cosmetic Dentistry · Central London
              <span className="h-px w-5 bg-gold sm:hidden" aria-hidden />
            </motion.p>

            <h1 className="display-xl mt-6 text-[2.15rem] min-[375px]:text-[2.5rem] sm:text-6xl lg:text-[2.3rem] xl:text-[2.75rem] 2xl:text-[3.5rem] lg:leading-[1.02]">
              <HeadlineLines lines={HEADLINE} gold={HEADLINE_GOLD} />
            </h1>

            <motion.p
              {...rise(0.55)}
              className="mt-6 max-w-md lg:max-w-xl max-sm:mx-auto text-[15px] sm:text-base lg:text-lg leading-relaxed text-ink-soft"
            >
              Whether it&apos;s a chipped tooth or a complete smile makeover, our gentle
              cosmetic team will help you feel confident every time you smile — at
              prices that make it possible.
            </motion.p>

            <motion.div {...rise(0.65)} className="mt-7 max-sm:text-center">
              <p className="font-label text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-soft">
                Popular cosmetic treatments
              </p>
              <div className="mt-3 flex flex-wrap max-sm:justify-center gap-2">
                {POPULAR.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-[13px] text-ink transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-md"
                  >
                    {t.label}
                    <span
                      aria-hidden
                      className="text-gold transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div {...rise(0.8)} className="mt-8 flex flex-wrap items-center max-sm:flex-col max-sm:items-stretch max-sm:mx-auto max-sm:max-w-[20rem] gap-3">
              <Link href="/booking" className="btn-primary">
                Book a Smile Makeover
                <span aria-hidden>→</span>
              </Link>
              <Link href="/fees" className="btn-outline">
                View Fee Guide
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile-only trust strip, shown above the video */}
          <motion.div {...rise(0.8)} className="min-w-0 px-5 pb-8 sm:hidden">
            <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 shadow-[0_20px_40px_-28px_rgba(27,24,21,0.35)]">
              <div className="grid grid-cols-3 gap-px">
                <a
                  href="https://www.gdc-uk.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="General Dental Council (GDC) registered"
                  className="flex flex-col items-center justify-center gap-1.5 bg-white/90 px-1.5 py-3"
                >
                  <Image
                    src="/gdc-new.png"
                    alt="General Dental Council (GDC)"
                    width={800}
                    height={406}
                    className="h-8 w-auto max-w-full object-contain"
                  />
                  <span className="text-center font-label text-[9px] leading-tight tracking-[0.08em] uppercase text-ink-soft">
                    GDC Registered
                  </span>
                </a>
                <a
                  href="https://www.cqc.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Care Quality Commission (CQC) regulated"
                  className="flex flex-col items-center justify-center gap-1.5 bg-white/90 px-1.5 py-3"
                >
                  <Image
                    src="/cqc-new-logo.png"
                    alt="Care Quality Commission (CQC)"
                    width={2560}
                    height={819}
                    className="h-6 my-1 w-auto max-w-full object-contain"
                  />
                  <span className="text-center font-label text-[9px] leading-tight tracking-[0.08em] uppercase text-ink-soft">
                    CQC Regulated
                  </span>
                </a>
                <a
                  href="#reviews"
                  aria-label={`Rated ${SITE.rating} from ${SITE.reviewCount} Google reviews`}
                  className="flex flex-col items-center justify-center gap-1 bg-white/90 px-1.5 py-3"
                >
                  <span className="flex items-center gap-1.5">
                    <GoogleG className="h-5 w-5" />
                    <span className="font-display text-lg leading-none text-ink">
                      {SITE.rating}
                    </span>
                  </span>
                  <span className="text-[11px] leading-none tracking-tight text-[#FBBC05]" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="text-center font-label text-[9px] leading-tight tracking-[0.08em] uppercase text-ink-soft">
                    {SITE.reviewCount} Reviews
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="min-w-0 lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:self-start">
            <HeroMedia
              id="xQ833zvg6XY"
              title="3 Things Your Dentist Notices That You Might Miss | Dr Nikki"
              speaker="Dr Nikki · South Kensington"
              duration="1:31"
            />
            {/* Trust bar: regulators */}
            <motion.div
              {...rise(1)}
              className="px-5 sm:px-10 lg:px-0 lg:pl-8 lg:pr-10 pb-10 lg:pt-10 lg:pb-14 max-sm:hidden"
            >
              <div className="overflow-hidden border border-ink/10 shadow-[0_24px_50px_-30px_rgba(27,24,21,0.35)]">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-white/85 px-6 py-4">
                  <p className="flex items-center gap-2 font-label text-[11px] font-semibold tracking-[0.2em] uppercase text-ink-soft">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold" aria-hidden>
                      <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z" />
                    </svg>
                    Registered &amp; regulated
                  </p>
                  <div className="flex items-center gap-4 min-[375px]:gap-6 sm:gap-8">
                    <a
                      href="https://www.gdc-uk.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="General Dental Council (GDC) registered"
                      className="shrink-0 py-1 opacity-90 transition-opacity hover:opacity-100"
                    >
                      <Image
                        src="/gdc-new.png"
                        alt="General Dental Council (GDC)"
                        width={800}
                        height={406}
                        className="h-14 w-auto"
                      />
                      <span className="mt-1 block font-label text-[10px] max-[374px]:tracking-[0.1em] tracking-[0.16em] uppercase text-ink-soft">
                        GDC Registered
                      </span>
                    </a>
                    <span className="h-12 w-px shrink-0 bg-ink/10" aria-hidden />
                    <a
                      href="https://www.cqc.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Care Quality Commission (CQC) regulated"
                      className="shrink-0 py-1 opacity-90 transition-opacity hover:opacity-100"
                    >
                      <Image
                        src="/cqc-new-logo.png"
                        alt="Care Quality Commission (CQC)"
                        width={2560}
                        height={819}
                        className="h-8 w-auto"
                      />
                      <span className="mt-2 block font-label text-[10px] max-[374px]:tracking-[0.1em] tracking-[0.16em] uppercase text-ink-soft">
                        CQC Regulated
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </MotionConfig>
  );
}
