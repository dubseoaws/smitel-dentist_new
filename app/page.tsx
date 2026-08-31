import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TreatmentCard from "@/components/TreatmentCard";
import MembershipBanner from "@/components/MembershipBanner";
import CaseStudies from "@/components/CaseStudies";
import TeamGrid from "@/components/TeamGrid";
import VideoSection from "@/components/VideoSection";
import { ALL_TREATMENTS, IMAGES, FEE_SECTIONS } from "@/lib/site-data";

const FEATURED_SLUGS = [
  "smile-makeover-london",
  "porcelain-veneers-london",
  "composite-bonding-london",
  "teeth-whitening-london",
  "pro-aligners-london",
  "dental-implants-london",
];

const MARQUEE_ITEMS = [
  "Smile Makeover",
  "Porcelain Veneers",
  "Composite Bonding",
  "Teeth Whitening",
  "Pro-aligners",
  "Dental Implants",
  "Gum Contouring",
  "Dental Hygiene",
];

const WHY_CARDS = [
  {
    title: "The Smile Dentist Standard",
    body: "Led by Dr. Yasha Y Shirazi (Principal Dentist & Clinical Director), our team combines artistic flair with medical rigor. We don't just fix teeth; we curate smiles using a bespoke approach that considers your unique facial features.",
  },
  {
    title: "Transparent, Exclusive Pricing",
    body: "Most private dentists in London have hidden costs. We have a simple membership. £20 a month gets you half-price treatment. No distinct tiers, no confusion. Just value.",
  },
  {
    title: "Digital Precision",
    body: "We have ditched the uncomfortable gooey impressions. We use advanced Intra Oral Dental Scanners and Digital X-rays for precise planning, faster results, and a more comfortable experience.",
  },
  {
    title: "Nervous Patients Welcome",
    body: "Anxious? We offer a judgment-free zone. From our relaxing lounge environment to our gentle approach and calming techniques, we ensure your visit is stress-free.",
  },
];

const HOME_FEE_SECTION = FEE_SECTIONS.find((s) => s.title === "Cosmetic Dentistry")!;

export default function HomePage() {
  const featured = FEATURED_SLUGS.map(
    (slug) => ALL_TREATMENTS.find((t) => t.slug === slug)!
  );

  return (
    <>
      <Hero />

      {/* Marquee */}
      <div className="bg-ink text-ivory py-4 overflow-hidden" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-6 px-6 font-label text-xs tracking-[0.24em] uppercase whitespace-nowrap"
                >
                  {item}
                  <span className="text-gold text-base">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-[2.5rem] overflow-hidden">
              <Image
                src={IMAGES.drYasha}
                alt="Dr. Yasha Y Shirazi - Principal Dentist & Clinical Director at Smile Dentist South Kensington"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="glass absolute -bottom-6 right-4 sm:right-8 rounded-3xl px-6 py-4 shadow-xl shadow-ink/10">
              <Image
                src={IMAGES.signature}
                alt="Dr. Yasha Y Shirazi signature"
                width={130}
                height={44}
                className="h-9 w-auto"
              />
              <p className="font-label text-[10px] tracking-[0.16em] uppercase text-ink-soft mt-1">
                Principal Dentist &amp; Clinical Director
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow">Welcome to SmileDentist</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Changing the face of{" "}
              <span className="text-gold-deep">modern dentistry</span>
              <span className="text-gold">.</span>
            </h2>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              <p>
                Welcome to Smile Dentist, where we have reimagined the dental experience
                for the style-conscious Londoner. With clinics in South Kensington and the
                City of London, we believe a stunning, healthy smile is a truly worthwhile
                investment.
              </p>
              <p>
                Gone are the days of clinical, cold appointments. Step into our sanctuary
                of calm, designed with the warmth of a luxury hotel and the clinical
                precision of a modern dental facility.
              </p>
              <p>
                <strong className="text-ink">Our Philosophy: Affordable Luxury.</strong> We
                believe high-end cosmetic dentistry should be accessible. By joining our
                exclusive membership for just £20/month, you unlock 50% off most cosmetic
                and restorative dental treatments — for example Invisalign, Composite
                Bonding and Porcelain Veneers. Dental implants, bone grafting and
                full-mouth rehabilitation are not included in the membership discount;
                full terms are on our membership page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why — bento */}
      <section className="glow-light">
        <div className="mx-auto max-w-6xl px-5 sm:px-10 py-16 lg:py-24">
          <div className="max-w-2xl mb-12 space-y-4">
            <p className="eyebrow">Trust &amp; Authority</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Why London chooses
              <br />
              Smile Dentist<span className="text-gold">.</span>
            </h2>
            <p className="text-ink-soft leading-relaxed">
              With clinics in South Kensington and the City of London, we are never far
              away. Here is why patients across London choose Dr. Yasha and the team:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {WHY_CARDS.map((card, i) => (
              <article
                key={card.title}
                className={`rounded-[1.8rem] bg-white p-8 space-y-4 shadow-sm shadow-ink/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 transition-all duration-300 ${
                  i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 font-label text-sm font-bold text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold">{card.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-xl space-y-4">
              <p className="eyebrow">Our Treatments</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                Signature cosmetic
                <br />
                treatments<span className="text-gold">.</span>
              </h2>
              <p className="text-ink-soft leading-relaxed">
                We excel in creating natural, bespoke smiles using the latest digital
                technology. Below is a selection of our most popular smile-transforming
                procedures.
              </p>
            </div>
            <Link
              href="/treatments"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              Explore full menu →
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

      <MembershipBanner />

      {/* Nervous patients */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-10 text-center space-y-6">
          <p className="eyebrow justify-center before:hidden">Nervous Patient Care</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Comfort-focused dentistry<span className="text-gold">.</span>
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-xl mx-auto">
            Feeling anxious about visiting the dentist? Our team specialises in gentle,
            reassuring care using modern techniques designed to make your treatment as
            comfortable as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-ink text-ivory px-8 py-4 text-sm font-semibold hover:bg-gold-deep transition-colors"
            >
              Book my appointment
            </Link>
            <Link
              href="/fees"
              className="rounded-full border border-ink/15 px-8 py-4 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
            >
              View full fee guide
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="glow-light">
        <div className="mx-auto max-w-6xl px-5 sm:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl space-y-4">
              <p className="eyebrow">Expert Dental Care</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                Meet the experts<span className="text-gold">.</span>
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Our hand-picked team of clinicians is dedicated to the art and science of
                your smile.
              </p>
            </div>
            <Link
              href="/team"
              className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              View all staff →
            </Link>
          </div>
          <TeamGrid limit={6} />
        </div>
      </section>

      <VideoSection />

      {/* Fees preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-32">
            <p className="eyebrow">Cosmetic Price List</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Cosmetic &amp;
              <br />
              implant fees<span className="text-gold">.</span>
            </h2>
            <p className="text-ink-soft leading-relaxed">
              A curated list of our most popular cosmetic treatments. For general
              dentistry, hygiene, and diagnostics, please view the full guide.
            </p>
            <Link
              href="/fees"
              className="inline-block rounded-full bg-ink text-ivory px-8 py-4 text-sm font-semibold hover:bg-gold-deep transition-colors"
            >
              View full fee guide
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white border border-ink/6 overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] px-7 py-4 bg-ink text-ivory font-label text-[10px] tracking-[0.18em]">
              <span>TREATMENT</span>
              <span className="text-right">NON-MEMBER</span>
              <span className="text-right">MEMBER (50% OFF)</span>
            </div>
            {HOME_FEE_SECTION.rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[1.4fr_1fr_1fr] px-7 py-4 text-sm border-t border-ink/5 hover:bg-cream/50 transition-colors"
              >
                <span className="font-medium">{row.name}</span>
                <span className="text-right text-ink-soft">{row.standard}</span>
                <span className="text-right font-bold text-gold-deep">{row.member}</span>
              </div>
            ))}
            <p className="px-7 py-4 text-xs text-ink-soft bg-cream/40">
              *Prices represent starting from costs. Full treatment plan provided at
              consultation. Dental implants are not eligible for the membership discount.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />

      {/* Compliance */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-10 text-center space-y-5">
          <p className="eyebrow justify-center before:hidden">Compliance &amp; Safety</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Registered &amp; regulated<span className="text-gold">.</span>
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Our team are fully registered and regulated for practice in the United Kingdom.
            Our patients should expect nothing less.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.gdc-uk.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
            >
              General Dental Council (GDC)
            </a>
            <a
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:border-gold-deep hover:text-gold-deep transition-colors"
            >
              Care Quality Commission (CQC)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
