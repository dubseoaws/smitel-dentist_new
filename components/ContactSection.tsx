import Link from "next/link";
import { SITE, CLINICS } from "@/lib/site-data";

const MAP_QUERIES: Record<string, string> = {
  "south-kensington": "20 Old Brompton Road, South Kensington, London SW7 3DL",
  "city-of-london": "5 Ave Maria Lane, City of London, London EC4M 7AQ",
};

export default function ContactSection() {
  return (
    <section className="border-t border-ink/10">
      <div className="grid lg:grid-cols-2">
        {CLINICS.map((clinic, i) => (
          <article
            key={clinic.slug}
            className={`grid sm:grid-cols-2 bg-white ${i === 1 ? "lg:border-l lg:border-ink/10" : ""}`}
          >
          <div className="relative min-h-[240px]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                MAP_QUERIES[clinic.slug]
              )}&output=embed`}
              title={`Map to Smile Dentist ${clinic.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <div className="px-6 sm:px-8 py-10 space-y-5">
            {i === 0 && <p className="eyebrow">Our Clinics</p>}
            <h3 className="font-display text-2xl uppercase tracking-[0.06em]">
              {clinic.name}
            </h3>

            <ul className="space-y-3 text-sm text-ink-soft">
              <li className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-gold" aria-hidden>
                  <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>{clinic.address.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-gold" aria-hidden>
                  <path d="M4 3h16a1 1 0 0 1 1 1v3H3V4a1 1 0 0 1 1-1zm-1 6h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
                </svg>
                <span>{clinic.proximity}</span>
              </li>
              <li className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-gold" aria-hidden>
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.6a1 1 0 0 1-.25 1l-2.23 2.2Z" />
                </svg>
                <a href={SITE.phoneHref} className="hover:text-gold-deep transition-colors">
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="space-y-1.5 text-sm text-ink-soft border-t border-ink/10 pt-4">
              <p className="font-label text-[10px] tracking-[0.18em] uppercase text-gold-deep">
                Opening Hours
              </p>
              {clinic.footerHours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-ink">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  MAP_QUERIES[clinic.slug]
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Get Directions
                <span aria-hidden>→</span>
              </a>
              <Link href={`/${clinic.slug}`} className="link-underline self-center">
                View clinic <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          </article>
        ))}
      </div>
      <div className="glow-dark text-ivory px-6 sm:px-10 lg:px-12 py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <p className="eyebrow">Affordable Luxury Across Central London</p>
          <h2 className="text-3xl">Book My Appointment</h2>
          <p className="text-sm text-ivory/60 leading-relaxed">
            Book your consultation today and experience dentistry without fear.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/booking" className="btn-gold">
            Book My Appointment
            <span aria-hidden>→</span>
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="font-label text-[11px] tracking-[0.16em] uppercase text-ivory/70 hover:text-gold transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
