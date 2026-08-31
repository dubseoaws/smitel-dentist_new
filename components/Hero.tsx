import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/site-data";

const USP_ITEMS = [
  { top: `${SITE.rating} Google Rating`, bottom: `${SITE.reviewCount} Patient Reviews` },
  { top: "Two Central London", bottom: "Clinic Locations" },
  { top: "Exclusive Membership", bottom: "50% Off For Members" },
  { top: "Nervous Patients", bottom: "Very Welcome" },
];

export default function Hero() {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden bg-ink">
        <Image
          src={IMAGES.heroMain}
          alt="Smile Makeover - dental treatment at Smile Dentist South Kensington"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-10 py-28 text-center text-ivory">
          <p className="fade-up font-label text-[11px] sm:text-xs font-semibold tracking-[0.42em] uppercase text-gold">
            Dentist in London
          </p>

          <h1 className="fade-up fade-up-1 mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.08]">
            The New Standard for
            <br />
            <span className="text-gold">Cosmetic Dentistry</span>
          </h1>

          <p className="fade-up fade-up-2 ornament mt-8 mx-auto max-w-xl font-label text-[11px] tracking-[0.3em] uppercase text-ivory/80">
            Affordable Luxury Across Central London
          </p>

          <p className="fade-up fade-up-2 mt-5 mx-auto max-w-xl text-sm sm:text-base text-ivory/70 leading-relaxed">
            Changing the face of modern dentistry — clinics in South Kensington and the
            City of London.
          </p>

          <div className="fade-up fade-up-3 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="bg-gold text-ink px-9 py-4 font-label text-xs font-bold tracking-[0.22em] uppercase hover:bg-ivory transition-colors"
            >
              Book Online
            </Link>
            <Link
              href="/fees"
              className="border border-ivory/40 px-9 py-4 font-label text-xs font-bold tracking-[0.22em] uppercase text-ivory hover:border-gold hover:text-gold transition-colors"
            >
              View Fee Guide
            </Link>
          </div>

          <div className="fade-up fade-up-3 mt-12 inline-flex items-center gap-3 border border-ivory/20 bg-ink/40 backdrop-blur px-6 py-3">
            <span className="text-gold text-base leading-none" aria-hidden>
              ★★★★★
            </span>
            <span className="font-label text-[11px] tracking-[0.2em] uppercase text-ivory/85">
              {SITE.rating} Google Rating · {SITE.reviewCount}+ Reviews
            </span>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="bg-ink border-t border-ivory/10 text-ivory">
        <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-ivory/10">
          {USP_ITEMS.map((item) => (
            <div key={item.top} className="px-4 py-7 text-center">
              <p className="font-label text-[11px] font-bold tracking-[0.2em] uppercase text-gold">
                {item.top}
              </p>
              <p className="font-label text-[11px] tracking-[0.2em] uppercase text-ivory/70 mt-1.5">
                {item.bottom}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
