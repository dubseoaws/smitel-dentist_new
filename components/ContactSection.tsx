import Link from "next/link";
import { SITE, CLINICS } from "@/lib/site-data";

const MAP_QUERIES: Record<string, string> = {
  "south-kensington": "20 Old Brompton Road, South Kensington, London SW7 3DL",
  "city-of-london": "5 Ave Maria Lane, City of London, London EC4M 7AQ",
};

export default function ContactSection() {
  return (
    <section className="glow-light">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Contact us<span className="text-gold">.</span>
            </h2>
            <p className="text-ink-soft leading-relaxed">
              Two clinics across Central London. Same team, same prices, same exceptional
              care.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-ink text-ivory px-7 py-3.5 text-sm font-semibold hover:bg-gold-deep transition-colors"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {CLINICS.map((clinic) => (
            <article
              key={clinic.slug}
              className="rounded-[2rem] bg-white border border-ink/6 p-3 shadow-sm shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 transition-shadow duration-300"
            >
              <div className="relative h-64 rounded-[1.6rem] overflow-hidden">
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
              <div className="px-5 pt-6 pb-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{clinic.name}</h3>
                    <p className="text-sm text-ink-soft mt-1">
                      {clinic.address.join(", ")}
                    </p>
                    <p className="font-label text-[11px] tracking-[0.14em] uppercase text-gold-deep mt-2">
                      {clinic.proximity}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      MAP_QUERIES[clinic.slug]
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-ink/10 px-5 py-2.5 text-xs font-bold hover:bg-gold hover:border-gold hover:text-ink transition-colors"
                  >
                    Directions ↗
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm border-t border-ink/6 pt-4">
                  {clinic.footerHours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-3 text-ink-soft">
                      <span>{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${clinic.slug}`}
                  className="inline-block font-label text-[11px] font-bold tracking-[0.18em] text-gold-deep hover:underline"
                >
                  VIEW CLINIC →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
