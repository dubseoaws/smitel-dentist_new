"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, IMAGES } from "@/lib/site-data";

// Headline split into a gold lead and an ivory tail, mirroring the two-tone hero treatment.
const SLIDES = [
  {
    image: IMAGES.heroMain,
    alt: "Periodontal treatment - dental treatment at Smile Dentist South Kensington",
    lead: "The New Standard",
    tail: "For Cosmetic Dentistry",
  },
  {
    image: IMAGES.heroAligners,
    alt: "Invisalign clear aligners - dental treatment at Smile Dentist South Kensington",
    lead: "Changing The Face",
    tail: "Of Modern Dentistry",
  },
  {
    image: IMAGES.heroImplant,
    alt: "Gum contouring - dental treatment at Smile Dentist South Kensington",
    lead: "Affordable Luxury",
    tail: "Across Central London",
  },
];

const USP_ITEMS = [
  { top: `${SITE.rating} Google Rating`, bottom: `${SITE.reviewCount} Patient Reviews` },
  { top: "Two Central London", bottom: "Clinic Locations" },
  { top: "Exclusive Membership", bottom: "50% Off For Members" },
  { top: "Nervous Patients", bottom: "Very Welcome" },
];

function GoogleG({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.2-3.9 6.6-9.6 6.6-16.3z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.6c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.2H4.2v5.8C7.8 40.9 15.3 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28c-.4-1.3-.7-2.6-.7-4s.3-2.7.7-4v-5.8H4.2C2.8 17.1 2 20.4 2 24s.8 6.9 2.2 9.8L11.6 28z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.3 30 2 24 2 15.3 2 7.8 7.1 4.2 14.2l7.4 5.8c1.7-5.3 6.6-9.2 12.4-9.2z"
      />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <>
      <section className="relative bg-ink text-ivory overflow-hidden min-h-[86vh] flex items-center">
        {/* Slide imagery, anchored left and dissolving into the navy field */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.lead}
            className={`absolute inset-y-0 left-0 w-full lg:w-[62%] transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-top brightness-[1.02] contrast-[1.06] saturate-[1.08]"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </div>
        ))}
        <div className="hero-fade absolute inset-0" aria-hidden />

        {/* Copy block sits in the right half, as on a classic split hero */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 py-20">
          <div className="lg:ml-[52%] lg:max-w-lg">
            <p
              key={`eyebrow-${active}`}
              className="fade-up font-label text-[11px] font-semibold tracking-[0.22em] uppercase text-gold"
            >
              {SITE.name}
            </p>

            <h1
              key={`head-${active}`}
              className="fade-up fade-up-1 mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.14]"
            >
              <span className="text-gold">{SLIDES[active].lead}</span>{" "}
              {SLIDES[active].tail}
            </h1>

            <Link
              href="/results-london"
              className="fade-up fade-up-2 mt-7 flex items-center gap-3.5 group w-fit"
            >
              <GoogleG className="h-8 w-8 shrink-0" />
              <span>
                <span className="block text-gold text-sm leading-none tracking-[0.15em]" aria-hidden>
                  ★★★★★
                </span>
                <span className="mt-1.5 block text-sm text-ivory/85 group-hover:text-gold transition-colors">
                  {SITE.rating} Google rating with {SITE.reviewCount}+ reviews
                </span>
              </span>
            </Link>

            <Link
              href="/booking"
              className="btn-gold fade-up fade-up-3 mt-8 inline-block"
            >
              Book Online
            </Link>

            {/* Slide controls */}
            <div className="fade-up fade-up-3 mt-9 flex items-center gap-5">
              <button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="text-2xl leading-none text-ivory/50 hover:text-gold transition-colors"
              >
                ‹
              </button>
              <div className="flex gap-3">
                {SLIDES.map((slide, i) => (
                  <button
                    key={slide.lead}
                    onClick={() => setActive(i)}
                    aria-label={`${slide.lead} ${slide.tail}`}
                    aria-current={i === active}
                    className="group py-3"
                  >
                    <span className="block h-[3px] w-12 bg-ivory/25 overflow-hidden">
                      {i === active ? (
                        <span
                          key={`bar-${active}`}
                          className="slide-bar block h-full bg-gold-bright"
                        />
                      ) : (
                        <span className="block h-full w-0 bg-gold-bright transition-[width] duration-300 group-hover:w-full" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next slide"
                className="text-2xl leading-none text-ivory/50 hover:text-gold transition-colors"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#main-content"
          aria-label="Scroll to content"
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 h-12 w-12 items-center justify-center rounded-full border border-ivory/50 text-ivory hover:border-gold hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Vertical booking tab */}
        <Link
          href="/booking"
          className="btn-gold btn-gold-tab hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 [writing-mode:vertical-rl]"
        >
          Book Online
        </Link>
      </section>

      {/* USP strip */}
      <section id="main-content" className="bg-ink border-t border-ivory/10 text-ivory">
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
