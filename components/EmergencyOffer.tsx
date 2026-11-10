import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function EmergencyOffer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-ink text-ivory border border-gold/40 ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-2 border border-gold/20 sm:inset-3"
        aria-hidden
      />
      <div className="relative grid gap-6 px-6 py-8 text-center sm:px-10 md:grid-cols-[1fr_auto] md:items-center md:text-left">
        <div className="space-y-2.5">
          <p className="font-label text-[10px] font-bold tracking-[0.28em] uppercase text-gold-bright">
            New Patients Only · In Pain?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl leading-tight text-ivory">
            New Patient Emergency Examination
          </h2>
          <p className="max-w-[56ch] text-sm leading-relaxed text-ivory/70 max-md:mx-auto">
            Same-day assessment for toothache, swelling, broken teeth or dental trauma —
            with a clear plan for pain relief before any treatment begins.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 max-sm:w-full md:items-end">
          <div className="flex flex-col items-center gap-1 md:items-end">
            <p className="flex items-baseline gap-3">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-gold">
                £30
              </span>
              <span className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-bright">
                Only
              </span>
            </p>
            <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-ivory/60">
              New patients only
            </p>
            <p className="text-[11px] text-ivory/50">
              X-rays not included · £20 each if clinically needed
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-sm:w-full max-sm:flex-col">
            <Link href="/booking?category=emergency" className="btn-gold btn-cta font-bold">
              Book Emergency Exam
            </Link>
            <a
              href={SITE.phoneHref}
              className="btn-cta border border-ivory/30 px-5 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
