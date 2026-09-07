import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { SITE, CLINICS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Two clinics across Central London. Same team, same prices, same exceptional care.",
};

const MAP_QUERIES: Record<string, string> = {
  "south-kensington": "20 Old Brompton Road, South Kensington, London SW7 3DL",
  "city-of-london": "5 Ave Maria Lane, City of London, London EC4M 7AQ",
};

export default function ContactPage() {
  const [southKen, cityOfLondon] = CLINICS;

  return (
    <>
      {/* Intro */}
      <section className="grid lg:grid-cols-[1fr_1fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-14 py-16 lg:py-20 flex flex-col justify-center space-y-6">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="display-xl text-[2rem] sm:text-4xl lg:text-[3rem]">Contact Us</h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-md">
            Two clinics across Central London. Same team, same prices, same exceptional
            care.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/booking" className="btn-primary">
              Book My Appointment
              <span aria-hidden>→</span>
            </Link>
            <a href={SITE.phoneHref} className="btn-outline">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="relative min-h-[340px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-ink/10">
          <Image
            src="https://res.cloudinary.com/da1zmp1ib/image/upload/v1765883125/southkenmd-about-img_iyiv4g.jpg"
            alt="Dental treatment in progress at Smile Dentist, London"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ivory/10">
          <div className="px-6 sm:px-10 py-10 space-y-2">
            <p className="font-label text-[13px] font-semibold tracking-[0.16em] uppercase">
              Phone
            </p>
            <p className="text-[15px] text-ivory/60">Same number for both clinics.</p>
            <a
              href={SITE.phoneHref}
              className="block font-display text-2xl text-gold hover:text-gold-bright transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
          <div className="px-6 sm:px-10 py-10 space-y-2">
            <p className="font-label text-[13px] font-semibold tracking-[0.16em] uppercase">
              Email
            </p>
            <p className="text-[15px] text-ivory/60">Send us a message anytime.</p>
            <a
              href={`mailto:${SITE.email}`}
              className="block font-display text-2xl text-gold hover:text-gold-bright transition-colors break-all"
            >
              {SITE.email}
            </a>
          </div>
          <div className="px-6 sm:px-10 py-10 space-y-2">
            <p className="font-label text-[13px] font-semibold tracking-[0.16em] uppercase">
              Visit
            </p>
            <p className="text-[15px] text-ivory/60">Two Central London locations</p>
            <p className="text-[15px] text-ivory">
              South Kensington (SW7) • City of London (EC4)
            </p>
          </div>
        </div>
      </section>

      {/* South Kensington */}
      <section className="grid lg:grid-cols-[1fr_1fr_0.8fr] border-b border-ink/10">
        <div className="relative min-h-[300px] border-b lg:border-b-0 lg:border-r border-ink/10">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              MAP_QUERIES["south-kensington"]
            )}&output=embed`}
            title="Map to Smile Dentist South Kensington"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 space-y-6">
          <p className="eyebrow">South Kensington Clinic</p>
          <h2 className="text-3xl">How To Find Us</h2>
          <p className="text-[15px] text-ink-soft">20 Old Brompton Road, London, SW7 3DL</p>

          <div className="space-y-5 border-t border-ink/10 pt-6">
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                Landmark
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                {southKen.landmark}
              </p>
            </div>
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                Tube
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">{southKen.tube}</p>
            </div>
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                Parking
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                {southKen.parking}
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              MAP_QUERIES["south-kensington"]
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Directions
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="bg-white px-5 sm:px-10 lg:px-11 py-14 border-l border-ink/10">
          <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep">
            Opening Hours
          </p>
          <div className="mt-5 text-sm">
            {southKen.hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-3 border-b border-ink/10 py-3"
              >
                <span className="text-ink-soft">{h.day}</span>
                <span className="flex items-center gap-3">
                  {h.note && (
                    <span className="bg-gold/15 px-2 py-0.5 font-label text-[9px] font-bold tracking-[0.14em] uppercase text-gold-deep">
                      {h.note}
                    </span>
                  )}
                  <span className="font-display text-base">{h.time}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City of London */}
      <section className="grid lg:grid-cols-[0.8fr_1fr_1fr] border-b border-ink/10">
        <div className="bg-white px-5 sm:px-10 lg:px-11 py-14 order-2 lg:order-none border-r border-ink/10">
          <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep">
            Opening Hours
          </p>
          <div className="mt-5 text-sm">
            {cityOfLondon.hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-3 border-b border-ink/10 py-3"
              >
                <span className="text-ink-soft">{h.day}</span>
                <span className="font-display text-base">{h.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-ink-soft leading-relaxed italic">
            Same team. Same prices. Same exceptional care — in the heart of the City.
          </p>
        </div>

        <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 space-y-6 order-1 lg:order-none">
          <p className="eyebrow">City of London Clinic</p>
          <h2 className="text-3xl">How To Find Us</h2>
          <p className="text-[15px] text-ink-soft">5 Ave Maria Lane, London, EC4M 7AQ</p>

          <div className="space-y-5 border-t border-ink/10 pt-6">
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                Landmark
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                2 minutes from St Paul&rsquo;s Cathedral.
              </p>
            </div>
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                By Tube
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                St Paul&rsquo;s Station (Central line) — 3-minute walk. Exit and head south
                past the Cathedral.
              </p>
              <p className="mt-1.5 text-[15px] text-ink-soft leading-relaxed">
                Blackfriars Station (District, Circle &amp; Thameslink) — 5-minute walk
                north.
              </p>
            </div>
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                By Rail
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                City Thameslink — 4-minute walk. Exit onto Ludgate Hill and walk east.
              </p>
              <p className="mt-1.5 text-[15px] text-ink-soft leading-relaxed">
                Farringdon Station (Elizabeth line) — 8-minute walk south.
              </p>
            </div>
            <div>
              <p className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep mb-1.5">
                By Bus
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Routes 4, 11, 15, 17, 23, 26, 76 stop on Ludgate Hill, Cheapside, and
                Newgate Street — all within a 3-minute walk.
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              MAP_QUERIES["city-of-london"]
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Directions
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative min-h-[300px] order-3 lg:order-none border-l border-ink/10">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              MAP_QUERIES["city-of-london"]
            )}&output=embed`}
            title="Map to Smile Dentist City of London"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
