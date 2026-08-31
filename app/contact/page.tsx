import type { Metadata } from "next";
import Link from "next/link";
import { SITE, CLINICS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Two clinics across Central London. Same team, same prices, same exceptional care.",
};

export default function ContactPage() {
  const [southKen, cityOfLondon] = CLINICS;

  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">Contact Us</h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            Two clinics across Central London. Same team, same prices, same exceptional
            care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white border border-ink/8 p-8 text-center space-y-2">
            <h2 className="font-display text-xl">Phone</h2>
            <p className="text-sm text-ink-soft">Same number for both clinics.</p>
            <a
              href={SITE.phoneHref}
              className="block text-lg font-semibold text-gold-deep hover:underline"
            >
              {SITE.phone}
            </a>
          </div>
          <div className="rounded-2xl bg-white border border-ink/8 p-8 text-center space-y-2">
            <h2 className="font-display text-xl">Email</h2>
            <p className="text-sm text-ink-soft">Send us a message anytime.</p>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-lg font-semibold text-gold-deep hover:underline"
            >
              {SITE.email}
            </a>
          </div>
          <div className="rounded-2xl bg-white border border-ink/8 p-8 text-center space-y-2">
            <h2 className="font-display text-xl">Visit</h2>
            <p className="text-sm text-ink-soft">Two Central London locations</p>
            <p className="text-sm font-semibold">
              South Kensington (SW7) • City of London (EC4)
            </p>
          </div>
        </div>
      </section>

      {/* South Kensington */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-10">
            South Kensington Clinic
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white border border-ink/8 p-8 space-y-6">
              <div>
                <h3 className="font-display text-xl mb-2">How To Find Us</h3>
                <p className="text-ink-soft">20 Old Brompton Road, London, SW7 3DL</p>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    Landmark
                  </p>
                  <p className="text-ink-soft">{southKen.landmark}</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    Tube
                  </p>
                  <p className="text-ink-soft">{southKen.tube}</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    Parking
                  </p>
                  <p className="text-ink-soft">{southKen.parking}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-ink/8 p-8">
              <h3 className="font-display text-xl mb-5">Opening Hours</h3>
              <div className="space-y-2.5 text-sm">
                {southKen.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-ink/6 pb-2.5">
                    <span>{h.day}</span>
                    <span className="flex items-center gap-3">
                      {h.note && (
                        <span className="rounded-full bg-gold/15 text-gold-deep text-[10px] font-bold tracking-wider px-2.5 py-0.5">
                          {h.note}
                        </span>
                      )}
                      <span className="font-semibold">{h.time}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City of London */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-10">City of London Clinic</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white border border-ink/8 p-8 space-y-6">
              <div>
                <h3 className="font-display text-xl mb-2">How To Find Us</h3>
                <p className="text-ink-soft">5 Ave Maria Lane, London, EC4M 7AQ</p>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    Landmark
                  </p>
                  <p className="text-ink-soft">2 minutes from St Paul&rsquo;s Cathedral.</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    By Tube
                  </p>
                  <p className="text-ink-soft">
                    St Paul&rsquo;s Station (Central line) — 3-minute walk. Exit and head
                    south past the Cathedral.
                  </p>
                  <p className="text-ink-soft mt-1">
                    Blackfriars Station (District, Circle &amp; Thameslink) — 5-minute walk
                    north.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    By Rail
                  </p>
                  <p className="text-ink-soft">
                    City Thameslink — 4-minute walk. Exit onto Ludgate Hill and walk east.
                  </p>
                  <p className="text-ink-soft mt-1">
                    Farringdon Station (Elizabeth line) — 8-minute walk south.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                    By Bus
                  </p>
                  <p className="text-ink-soft">
                    Routes 4, 11, 15, 17, 23, 26, 76 stop on Ludgate Hill, Cheapside, and
                    Newgate Street — all within a 3-minute walk.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-ink/8 p-8 flex flex-col">
              <h3 className="font-display text-xl mb-5">Opening Hours</h3>
              <div className="space-y-2.5 text-sm flex-1">
                {cityOfLondon.hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-ink/6 pb-2.5">
                    <span>{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-ink-soft italic">
                Same team. Same prices. Same exceptional care — in the heart of the City.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Ready to visit?</h2>
          <Link
            href="/booking"
            className="inline-block rounded-full bg-gold text-ink px-9 py-4 text-sm font-bold hover:bg-ivory transition-colors"
          >
            Book My Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
