import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TreatmentCard from "@/components/TreatmentCard";
import VideoSection from "@/components/VideoSection";
import TreatmentBlocks from "@/components/TreatmentBlocks";
import TeamGrid from "@/components/TeamGrid";
import SmileGallery from "@/components/SmileGallery";
import GoogleG from "@/components/GoogleG";
import {
  ALL_TREATMENTS,
  IMAGES,
  CASE_STUDIES,
  SITE,
  REVIEW_US_URL,
  HOME_VIDEOS,
} from "@/lib/site-data";
import type { ContentBlock } from "@/lib/treatment-content";

// Answers are verbatim copy already published elsewhere on the site.
const HOME_FAQ: ContentBlock[] = [
  {
    kind: "faq",
    eyebrow: "Common Questions",
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "How much is membership and what does it save me?",
        a: "Most private dentists in London have hidden costs. We have a simple membership. £20 a month gets you half-price treatment. No distinct tiers, no confusion. Just value.",
      },
      {
        q: "What does the membership include?",
        a: "50% off includes Check Ups, Cosmetic Dentistry (inc. whitening), Restorative Dentistry (fillings, crowns, bridges and dentures) and Invisible braces. 12-month contract. Terms apply.",
      },
      {
        q: "Which treatments are not covered by the membership discount?",
        a: "Dental implants, bone grafting and full-mouth rehabilitation are not included in the membership discount; full terms are on our membership page.",
      },
      {
        q: "Do you offer finance?",
        a: "Spread the cost of your treatment. We offer 0% finance options for treatment plans over £1,000 (subject to status).",
      },
      {
        q: "Where are your clinics?",
        a: "With clinics in South Kensington and the City of London, we are never far away. South Kensington: 20 Old Brompton Road, London, SW7 3DL — a 3-min walk from South Kensington Station. City of London: 5 Ave Maria Lane, London, EC4M 7AQ — a 3-min walk from St Paul's Station.",
      },
      {
        q: "I am nervous about visiting the dentist. Can you help?",
        a: "Anxious? We offer a judgment-free zone. From our relaxing lounge environment to our gentle approach and calming techniques, we ensure your visit is stress-free.",
      },
      {
        q: "Are your dentists registered and regulated?",
        a: "Our team are fully registered and regulated for practice in the United Kingdom. Our patients should expect nothing less.",
      },
    ],
  },
];

const FEATURED_SLUGS = [
  "smile-makeover-london",
  "porcelain-veneers-london",
  "composite-bonding-london",
  "teeth-whitening-london",
  "pro-aligners-london",
  "dental-implants-london",
];

// Icon paths are decorative only; copy below is verbatim site content.
const WHY_CARDS = [
  {
    title: "The Smile Dentist Standard",
    icon: "star",
    body: (
      <>
        Led by <strong className="font-semibold text-ink">Dr. Yasha Y Shirazi</strong>{" "}
        (Principal Dentist &amp; Clinical Director), our team combines artistic flair with
        medical rigor. We don&apos;t just fix teeth; we curate smiles using a bespoke
        approach that considers your unique facial features.
      </>
    ),
  },
  {
    title: "Transparent, Exclusive Pricing",
    icon: "shield",
    body: (
      <>
        Most private dentists in London have hidden costs. We have a simple membership.
        <strong className="font-semibold text-ink">
          {" "}£20 a month gets you half-price treatment.
        </strong>{" "}
        No distinct tiers, no confusion. Just value.
      </>
    ),
  },
  {
    title: "Digital Precision",
    icon: "scan",
    body: (
      <>
        We have ditched the uncomfortable gooey impressions. We use advanced{" "}
        <strong className="font-semibold text-ink">Intra Oral Dental Scanners</strong> and
        Digital X-rays for precise planning, faster results, and a more comfortable
        experience.
      </>
    ),
  },
  {
    title: "Nervous Patients Welcome",
    icon: "heart",
    body: (
      <>
        Anxious? We offer a judgment-free zone. From our relaxing lounge environment to our
        gentle approach and calming techniques, we ensure your visit is stress-free.
      </>
    ),
  },
];

const WHY_ICONS: Record<string, React.ReactNode> = {
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  scan: (
    <>
      <path d="M6 10a6 6 0 0112 0" />
      <path d="M9 11a3 3 0 016 0v3" />
      <path d="M12 11v6" />
      <path d="M6 13v3" />
      <path d="M18 13v3" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.4-7-9a3.6 3.6 0 016.2-2.5L12 9.6l.8-1.1A3.6 3.6 0 0119 11c0 4.6-7 9-7 9z" />
      <path d="M10 13l1.5 1.5L15 11" />
    </>
  ),
};

// Comfort promises, each phrase taken from our nervous-patient copy.
const COMFORT_POINTS = [
  "A judgment-free zone",
  "Relaxing lounge environment",
  "Gentle approach & calming techniques",
  "Stress-free visits, start to finish",
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map(
    (slug) => ALL_TREATMENTS.find((t) => t.slug === slug)!
  );

  return (
    <>
      <Hero />

      {/* Before & after strip */}
      <section className="bg-white border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {CASE_STUDIES.flatMap((study) => [
              { key: `${study.title}-before`, src: study.before, label: "Before", title: study.title },
              { key: `${study.title}-after`, src: study.after, label: "After", title: study.title },
            ]).map((shot, i) => (
              <figure key={shot.key} className={i === 2 ? "sm:border-l sm:border-ink/10 sm:pl-6" : ""}>
                <div className="relative h-28 sm:h-32 overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={`${shot.title} — ${shot.label.toLowerCase()} treatment at Smile Dentist`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 22vw"
                  />
                </div>
                <figcaption className="mt-3 text-center font-label text-[10px] font-semibold tracking-[0.24em] uppercase text-ink-soft">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="lg:max-w-[15rem] lg:border-l lg:border-ink/10 lg:pl-10 space-y-4">
            <p className="eyebrow">Transformations</p>
            <h2 className="font-display text-2xl leading-tight">Real People, Real Smiles</h2>
            <p className="text-[13px] text-ink-soft leading-relaxed">
              We take pride in changing lives, one smile at a time. Browse our gallery of
              recent case studies.
            </p>
            <Link href="/results-london" className="link-underline">
              View all case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome · philosophy */}
      <section className="grid lg:grid-cols-[1fr_1fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 lg:py-16 space-y-7">
          <p className="eyebrow">Welcome to SmileDentist</p>
          <h2 className="text-3xl sm:text-4xl">
            Changing the Face of{" "}
            <span className="text-gold-deep">Modern Dentistry.</span>
          </h2>
          <div className="space-y-4 text-[15px] text-ink-soft leading-relaxed">
            <p>
              Welcome to Smile Dentist, where we have reimagined the dental experience for
              the style-conscious Londoner. With clinics in South Kensington and the City
              of London, we believe a stunning, healthy smile is a truly worthwhile
              investment.
            </p>
            <p>
              Gone are the days of clinical, cold appointments. Step into our sanctuary of
              calm, designed with the warmth of a luxury hotel and the clinical precision
              of a modern dental facility.
            </p>
            <p>
              Our Philosophy: Affordable Luxury. We believe high-end cosmetic dentistry
              should be accessible. By joining our exclusive membership for just
              £20/month, you unlock 50% off most cosmetic and restorative dental
              treatments — for example Invisalign, Composite Bonding and Porcelain
              Veneers. Dental implants, bone grafting and full-mouth rehabilitation are
              not included in the membership discount; full terms are on our membership
              page.
            </p>
          </div>

        </div>

        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src={IMAGES.practice}
            alt="Dental treatment in progress at Smile Dentist, London"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Trust & authority */}
      <section className="bg-white border-b border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <p className="eyebrow">Trust &amp; Authority</p>
            <h2 className="text-3xl sm:text-4xl">Why London Chooses Smile Dentist</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              With clinics in South Kensington and the City of London, we are never far
              away. Here is why patients across London choose Dr. Yasha and the team:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="h-full border border-ink/10 bg-cream/40 p-7 space-y-5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center ${
                    i === 1 ? "bg-gold text-white" : "bg-gold/10 text-gold-deep"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden
                  >
                    {WHY_ICONS[card.icon]}
                  </svg>
                </span>
                <h3 className="text-xl">{card.title}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl space-y-4">
              <p className="eyebrow">Our Treatments</p>
              <h2 className="text-3xl sm:text-4xl">
                Signature Cosmetic Treatments
              </h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                We excel in creating natural, bespoke smiles using the latest digital
                technology. Below is a selection of our most popular smile-transforming
                procedures.
              </p>
            </div>
            <Link
              href="/cosmetic-dentistry-london"
              className="btn-outline self-start lg:self-auto"
            >
              Explore full cosmetic menu
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>

          <p className="mt-10 text-sm text-ink-soft">
            Looking for general dentistry?{" "}
            <Link href="/treatments" className="font-semibold text-gold-deep hover:underline">
              View all treatments
            </Link>
          </p>
        </div>
      </section>

      {/* Nervous patient care */}
      <section className="grid lg:grid-cols-[0.85fr_1fr_0.85fr] border-y border-ink/10">
        <div className="relative min-h-[300px]">
          <video
            src={HOME_VIDEOS.nervousPatient}
            poster={IMAGES.nervousPatient}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Comfort-focused dental care at Smile Dentist"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 lg:py-16 space-y-5">
          <p className="eyebrow">Nervous Patient Care</p>
          <h2 className="text-3xl sm:text-4xl">
            Comfort-Focused
            <br />
            Dentistry
          </h2>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-md">
            Feeling anxious about visiting the dentist? Our team specialises in gentle,
            reassuring care using modern techniques designed to make your treatment as
            comfortable as possible.
          </p>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-md">
            Book your consultation today and experience dentistry without fear.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/booking" className="btn-primary">
              Book My Appointment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/fees" className="btn-outline">
              View full fee guide
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <ul className="bg-white px-5 sm:px-10 lg:px-11 py-14 lg:py-16 space-y-6 border-l border-ink/10">
          {COMFORT_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/50">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-gold" aria-hidden>
                  <path d="M8.7 14.4l-4-4 1.4-1.4 2.6 2.6 5.5-5.5 1.4 1.4-6.9 6.9z" />
                </svg>
              </span>
              <p className="font-label text-[12px] font-medium tracking-[0.1em] uppercase leading-relaxed text-ink-soft pt-2">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Compliance & safety + the team */}
      <section className="grid lg:grid-cols-[0.8fr_1.6fr] border-b border-ink/10">
        <div className="flex flex-col">
          <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 lg:py-16 space-y-5">
            <p className="eyebrow">Compliance &amp; Safety</p>
            <h2 className="text-3xl">
              Registered &amp;
              <br />
              Regulated
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              Our team are fully registered and regulated for practice in the United
              Kingdom. Our patients should expect nothing less.
            </p>
          </div>

          <div className="px-5 sm:px-10 lg:px-12 py-10 flex flex-nowrap items-center gap-5">
            <a
              href="https://www.gdc-uk.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="General Dental Council (GDC) - UK dental regulatory body"
              className="shrink-0"
            >
              <Image
                src="/gdc-new.png"
                alt="General Dental Council (GDC) - UK dental regulatory body"
                width={800}
                height={406}
                className="h-9 w-auto"
              />
            </a>
            <a
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Care Quality Commission (CQC) - UK healthcare regulator"
              className="shrink-0"
            >
              <Image
                src="/cqc-new-logo.png"
                alt="Care Quality Commission (CQC) - UK healthcare regulator"
                width={2560}
                height={819}
                className="h-7 w-auto"
              />
            </a>
            <a
              href={REVIEW_US_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2.5 group"
            >
              <GoogleG className="h-7 w-7" />
              <span>
                <span className="block font-display text-lg leading-none">
                  {SITE.rating}
                  <span className="text-[#FBBC05] ml-1.5 text-sm" aria-hidden>
                    ★★★★★
                  </span>
                </span>
                <span className="mt-1 block font-label text-[8px] tracking-[0.14em] uppercase text-ink-soft group-hover:text-ink transition-colors">
                  {SITE.reviewCount} reviews on Google
                </span>
              </span>
            </a>
          </div>

          <div className="border-t border-ink/10 px-5 sm:px-10 lg:px-12 py-12 space-y-4">
            <p className="eyebrow">Book With Us</p>
            <h2 className="text-2xl sm:text-3xl">
              Ready to start your own transformation?
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              Book a consultation with Dr. Yasha today and let us design your dream smile.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-[15px] text-ink-soft hover:text-ink transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gold-deep"
                  aria-hidden
                >
                  <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z" />
                </svg>
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-[15px] text-ink-soft hover:text-ink transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gold-deep"
                  aria-hidden
                >
                  <path d="M3.5 5.5h17v13h-17z" />
                  <path d="M3.5 6.5l8.5 6 8.5-6" />
                </svg>
                {SITE.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/booking"
                className="flex flex-1 items-center justify-center gap-3 bg-ink px-8 py-5 font-label text-[14px] font-bold tracking-[0.14em] uppercase text-ivory shadow-xl shadow-ink/20 hover:bg-gold hover:text-ink transition-colors"
              >
                Book Now
                <span aria-hidden>→</span>
              </Link>
              <a href={SITE.phoneHref} className="btn-outline flex-1 justify-center">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 sm:px-10 lg:px-12 py-14 lg:py-16 border-l border-ink/10 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <p className="eyebrow">Expert Dental Care</p>
              <h2 className="text-3xl sm:text-4xl">Meet The Experts</h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Our hand-picked team of clinicians is dedicated to the art and science of
                your smile.
              </p>
            </div>
            <Link href="/team" className="link-underline">
              View all staff <span aria-hidden>→</span>
            </Link>
          </div>

          <TeamGrid limit={8} columns={4} shape="circle" />
        </div>
      </section>

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />

      <VideoSection />

      <TreatmentBlocks blocks={HOME_FAQ} />
    </>
  );
}
