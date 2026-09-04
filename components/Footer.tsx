import Link from "next/link";
import Logo from "@/components/Logo";
import {
  SITE,
  CLINICS,
  FOOTER_TREATMENTS,
  FOOTER_QUICK_LINKS,
  YOUTUBE_CHANNEL,
} from "@/lib/site-data";

const SOCIALS = [
  {
    label: "Smile Dentist on YouTube",
    href: YOUTUBE_CHANNEL,
    icon: (
      <path d="M23 12s0-3.4-.4-5a2.6 2.6 0 0 0-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4A2.6 2.6 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.6 2.6 0 0 0 1.8 1.8c1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4A2.6 2.6 0 0 0 22.6 17c.4-1.6.4-5 .4-5zM9.8 15.4V8.6l6 3.4-6 3.4z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="glow-dark text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-5">
          <Logo light />
          <p className="text-sm text-ivory/55 leading-relaxed max-w-xs">{SITE.tagline}</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-label text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Quick Links
          </p>
          <ul className="space-y-2.5 text-sm">
            {FOOTER_QUICK_LINKS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-ivory/60 hover:text-gold transition-colors">
                  {t.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/membership" className="text-ivory/60 hover:text-gold transition-colors">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/results-london" className="text-ivory/60 hover:text-gold transition-colors">
                Smile Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ivory/60 hover:text-gold transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-label text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Treatments
          </p>
          <ul className="space-y-2.5 text-sm">
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
          <p className="font-label text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Contact Us
          </p>
          <ul className="space-y-4 text-sm text-ivory/60">
            {CLINICS.map((clinic) => (
              <li key={clinic.slug}>
                <Link href={`/${clinic.slug}`} className="hover:text-gold transition-colors">
                  {clinic.address.join(", ")}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.phoneHref} className="hover:text-gold transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-label text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-5">
            Opening Hours
          </p>
          <div className="space-y-5 text-sm">
            {CLINICS.map((clinic) => (
              <div key={clinic.slug} className="space-y-1.5">
                <p className="font-label text-[10px] tracking-[0.18em] uppercase text-ivory/80">
                  {clinic.name}
                </p>
                {clinic.footerHours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-ivory/55">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-8 space-y-4 text-xs text-ivory/40 leading-relaxed">
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
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p>© 2026 Smile Dentist. All rights reserved.</p>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
