import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-shade">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Copy */}
          <div className="space-y-8">
            <p className="eyebrow fade-up">Affordable Luxury Across Central London</p>

            <h1 className="fade-up fade-up-1 font-display text-[2.9rem] leading-[0.98] sm:text-6xl lg:text-7xl font-bold tracking-tight">
              The new standard
              <br />
              for <span className="text-gold-deep">cosmetic</span>
              <br />
              dentistry<span className="text-gold">.</span>
            </h1>

            <p className="fade-up fade-up-2 max-w-md text-lg text-ink-soft leading-relaxed">
              Changing the face of modern dentistry — clinics in South Kensington and the
              City of London.
            </p>

            <div className="fade-up fade-up-2 flex flex-wrap items-center gap-3">
              <Link
                href="/booking"
                className="group rounded-full bg-ink text-ivory pl-7 pr-2 py-2 text-sm font-semibold hover:bg-gold-deep transition-colors inline-flex items-center gap-4"
              >
                Book my appointment
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/fees"
                className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
              >
                View fee guide
              </Link>
            </div>

            <div className="fade-up fade-up-3 flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              <div>
                <p className="font-display text-2xl font-bold">
                  {SITE.rating}
                  <span className="text-gold text-lg align-top ml-1">★</span>
                </p>
                <p className="font-label text-[10px] tracking-[0.18em] uppercase text-ink-soft">
                  {SITE.reviewCount} Google reviews
                </p>
              </div>
              <div className="h-8 w-px bg-ink/10" />
              <div>
                <p className="font-display text-2xl font-bold">2</p>
                <p className="font-label text-[10px] tracking-[0.18em] uppercase text-ink-soft">
                  Central London clinics
                </p>
              </div>
              <div className="h-8 w-px bg-ink/10" />
              <div>
                <p className="font-display text-2xl font-bold text-gold-deep">50%</p>
                <p className="font-label text-[10px] tracking-[0.18em] uppercase text-ink-soft">
                  Off for members
                </p>
              </div>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative fade-up fade-up-2">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-gold/20 blur-3xl" aria-hidden />

            <div className="relative grid grid-cols-5 gap-3">
              <figure className="relative col-span-3 h-[420px] sm:h-[500px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src={IMAGES.heroMain}
                  alt="Smile Makeover - dental treatment at Smile Dentist South Kensington"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </figure>
              <figure className="relative col-span-2 h-[300px] sm:h-[360px] self-end rounded-[2rem] overflow-hidden ring-4 ring-ivory">
                <Image
                  src={IMAGES.heroVeneers}
                  alt="Porcelain Veneers - dental treatment at Smile Dentist South Kensington"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-gold text-ink font-label text-[10px] font-bold tracking-[0.2em] px-4 py-2">
                  AFTER
                </figcaption>
              </figure>
            </div>

            {/* Floating clinician chip */}
            <div className="float-slow absolute -bottom-6 left-2 sm:left-6 glass rounded-3xl px-5 py-4 flex items-center gap-4 shadow-xl shadow-ink/10">
              <Image
                src={IMAGES.drYasha}
                alt="Dr. Yasha Y Shirazi - Principal Dentist and Clinical Director at Smile Dentist London"
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl object-cover object-top"
              />
              <div>
                <p className="text-sm font-semibold leading-tight">Dr. Yasha Y Shirazi</p>
                <p className="font-label text-[10px] tracking-[0.14em] uppercase text-ink-soft">
                  Principal Dentist · GDC 195843
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
