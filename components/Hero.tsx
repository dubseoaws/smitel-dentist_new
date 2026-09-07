import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES, YOUTUBE_CHANNEL } from "@/lib/site-data";

const USP_ITEMS = [
  {
    top: `${SITE.rating}/5`,
    bottom: "from Google Reviews",
    icon: (
      <path d="M12 3l2.6 5.6L21 9.4l-4.5 4.4 1.1 6.2L12 17.1 6.4 20l1.1-6.2L3 9.4l6.4-.8L12 3z" />
    ),
  },
  {
    top: "South Kensington",
    bottom: "Next to South Ken Station",
    icon: (
      <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    top: "City of London",
    bottom: "Ave Maria Lane, EC4",
    icon: (
      <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    top: "Members: 50% Off",
    bottom: "£20/Month",
    icon: (
      <path d="M12 21s-8-4.6-8-10a4.6 4.6 0 0 1 8-3.1A4.6 4.6 0 0 1 20 11c0 5.4-8 10-8 10z" />
    ),
  },
];

export default function Hero() {
  return (
    <>
      <section className="hero-shade relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.05fr] items-stretch">
          <div className="px-5 sm:px-10 lg:pr-16 py-16 lg:py-24 self-center">
            <p className="eyebrow fade-up max-w-[18rem] leading-relaxed">
              Affordable Luxury Across Central London
            </p>

            <h1 className="display-xl fade-up fade-up-1 mt-6 max-w-[13ch] text-[2rem] sm:text-4xl lg:text-[3.15rem]">
              Smile Dentist: The New Standard for Cosmetic Dentistry
            </h1>

            <p className="fade-up fade-up-2 mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft">
              {SITE.tagline}
            </p>

            <div className="fade-up fade-up-3 mt-9 flex flex-wrap items-center gap-3">
              <Link href="/booking" className="btn-primary">
                Book My Appointment
                <span aria-hidden>→</span>
              </Link>
              <Link href="/fees" className="btn-outline">
                View Fee Guide
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] sm:min-h-[520px] lg:min-h-[660px]">
            <Image
              src={IMAGES.drYasha}
              alt="Dr. Yasha Y Shirazi - Principal Dentist and Clinical Director at Smile Dentist London"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch patient stories on our YouTube channel"
              className="group absolute left-4 sm:left-0 lg:-left-14 top-1/2 -translate-y-1/2 flex h-28 w-28 items-center justify-center"
            >
              <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path
                    id="hero-badge-arc"
                    d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-ink/70 font-label text-[9px] tracking-[0.32em] uppercase">
                  <textPath href="#hero-badge-arc" startOffset="0%">
                    Watch patient stories · Watch patient stories ·
                  </textPath>
                </text>
              </svg>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory shadow-lg shadow-ink/20 transition-colors group-hover:bg-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-ink" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </a>

            <div className="glass absolute bottom-6 left-6 max-w-[19rem] px-5 py-3.5 border border-gold/30">
              <Image
                src={IMAGES.signature}
                alt="Dr. Yasha Y Shirazi signature"
                width={130}
                height={44}
                className="h-8 w-auto"
              />
              <p className="font-label text-[9px] tracking-[0.18em] uppercase text-ink-soft mt-1">
                Dr. Yasha Y Shirazi &middot; Principal Dentist &amp; Clinical Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section id="main-content" className="bg-ink text-ivory">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-ivory/10">
          {USP_ITEMS.map((item) => (
            <div key={item.top} className="flex items-start gap-4 px-6 sm:px-10 py-9">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-gold"
                aria-hidden
              >
                {item.icon}
              </svg>
              <div>
                <p className="font-label text-[13px] font-semibold tracking-[0.16em] uppercase">
                  {item.top}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">
                  {item.bottom}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}



