import Link from "next/link";
import Logo from "@/components/Logo";
import {
  SITE,
  CLINICS,
  FOOTER_TREATMENTS,
  FOOTER_QUICK_LINKS,
} from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="glow-dark text-ivory">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-14 text-center space-y-6 border-b border-ivory/10">
        <p className="ornament font-label text-[11px] font-semibold tracking-[0.32em] uppercase text-gold">
          Become a patient
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
          Book your consultation
        </h2>
        <p className="text-ivory/60 max-w-xl mx-auto">
          Book your consultation today and experience dentistry without fear.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/booking"
            className="bg-gold text-ink px-8 py-4 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-ivory transition-colors"
          >
            Book my appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="border border-ivory/30 px-8 py-4 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo light />
          <p className="text-sm text-ivory/60 leading-relaxed">{SITE.tagline}</p>
          <div className="space-y-1.5 text-sm">
            <a href={SITE.phoneHref} className="block hover:text-gold transition-colors">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="block hover:text-gold transition-colors">
              {SITE.email}
            </a>
          </div>
        </div>

        {CLINICS.map((clinic) => (
          <div key={clinic.slug} className="space-y-4">
            <h3 className="font-label text-xs tracking-[0.22em] uppercase text-gold">
              {clinic.name}
            </h3>
            <p className="text-sm text-ivory/60 leading-relaxed">
              {clinic.address.join(", ")}
            </p>
            <p className="text-xs text-ivory/40">{clinic.proximity}</p>
            <div className="text-sm space-y-1">
              {clinic.footerHours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 text-ivory/60">
                  <span>{h.day}</span>
                  <span className="font-label text-xs pt-0.5">{h.time}</span>
                </div>
              ))}
            </div>
            <Link
              href={`/${clinic.slug}`}
              className="inline-block font-label text-[11px] tracking-[0.2em] text-gold hover:text-ivory transition-colors"
            >
              VIEW CLINIC →
            </Link>
          </div>
        ))}

        <div className="space-y-8">
          <div>
            <p className="font-label text-xs tracking-[0.22em] uppercase text-ivory/40 mb-3">
              Treatments
            </p>
            <ul className="space-y-1.5 text-sm">
              {FOOTER_TREATMENTS.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-ivory/60 hover:text-gold transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-label text-xs tracking-[0.22em] uppercase text-ivory/40 mb-3">
              Quick links
            </p>
            <ul className="space-y-1.5 text-sm">
              {FOOTER_QUICK_LINKS.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-ivory/60 hover:text-gold transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 space-y-3 text-xs text-ivory/40 leading-relaxed">
          <p>CQC Registered – Provider: Medical and Dental Limited 1-20629579981</p>
          <p>
            All dentists are registered with the{" "}
            <a
              href="https://www.gdc-uk.org/"
              className="underline hover:text-gold"
              rel="noopener noreferrer"
              target="_blank"
            >
              General Dental Council
            </a>
            . The title &ldquo;Dr&rdquo; is used as a courtesy title. Our dentists are dental
            practitioners, not medical doctors.
          </p>
          <p>
            0% finance is subject to status and affordability. Credit is provided by a
            third-party lender. Representative example available on request. Smile Dentist
            acts as a credit broker, not a lender.
          </p>
          <p>
            Individual results may vary. All clinical images show actual patients. No
            treatment outcome is guaranteed.
          </p>
          <p>© 2026 Smile Dentist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
