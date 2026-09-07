import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import TeamGrid from "@/components/TeamGrid";
import TreatmentBlocks from "@/components/TreatmentBlocks";
import { CLOUDINARY, SITE } from "@/lib/site-data";
import type { ContentBlock } from "@/lib/treatment-content";

// Copy sourced from www.smiledentist.co.uk/cosmetic-dentistry-london
export const metadata: Metadata = {
  title: "Cosmetic Dentistry in London",
  description:
    "From subtle enhancements to comprehensive smile makeovers, our GDC-registered team uses digital planning and minimally invasive techniques to help you achieve the smile you want.",
};

const HERO_IMAGE = `${CLOUDINARY}/v1765805808/gum-contouring_k46rrb.jpg`;

const HERO_POINTS = [
  "Digital Smile Design: See your potential result before treatment.",
  "Finance available (subject to status, terms apply).",
];

const TRUST_POINTS = [
  "4.9/5 from Google Reviews",
  "South Kensington • Next to South Ken Station",
  "City of London • Ave Maria Lane, EC4",
];

const COSMETIC_CARDS = [
  {
    title: "Porcelain Veneers",
    subtitle: "Ceramic Shells",
    description:
      "Hand-crafted ceramic shells bonded to the front of teeth for long-lasting aesthetic improvement.",
    href: "/porcelain-veneers-london",
  },
  {
    title: "Smile Makeovers",
    subtitle: "Comprehensive Design",
    description:
      "Combining multiple treatments such as veneers, crowns, whitening, and bonding for a complete smile transformation.",
    href: "/smile-makeover-london",
  },
  {
    title: "Composite Bonding",
    subtitle: "Conservative Repair",
    description:
      "Repair chips, close gaps, and reshape teeth in a single visit with tooth-coloured composite material.",
    href: "/composite-bonding-london",
  },
  {
    title: "Tooth Contouring",
    subtitle: "Precision Polishing",
    description:
      "Gently smoothing jagged edges and reshaping teeth by polishing the outer enamel.",
    href: "/tooth-contouring-london",
  },
  {
    title: "Gum Contouring",
    subtitle: "Gum Reshaping",
    description:
      "Reshaping the gum line to reveal more tooth structure and create a balanced, symmetrical smile.",
    href: "/gum-contouring-london",
  },
  {
    title: "Teeth Whitening",
    subtitle: "Boutique Whitening",
    description:
      "Professional home whitening with custom trays for a brighter, more confident smile.",
    href: "/teeth-whitening-london",
  },
  {
    title: "Clear Aligners",
    subtitle: "Discreet Orthodontics",
    description:
      "Straighten teeth discreetly with custom-made clear aligners — no metal wires required.",
    href: "/pro-aligners-london",
  },
];

const FAQ: ContentBlock[] = [
  {
    kind: "faq",
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "How do I know which cosmetic treatment I need?",
        a: "During your consultation, we assess your teeth and discuss your goals. Often, a combination of conservative treatments (such as bonding and whitening) can achieve excellent results without the need for more invasive options like veneers. We always recommend the least invasive approach to achieve your desired outcome.",
      },
      {
        q: "Can I finance my cosmetic treatment?",
        a: "Yes. We offer finance plans to help you spread the cost of treatment. Finance is subject to status and terms apply. Details are provided during your consultation.",
      },
      {
        q: "Does cosmetic dentistry hurt?",
        a: "Most cosmetic treatments are designed to be as comfortable as possible. Bonding, whitening, and contouring typically require no anaesthetic. For veneers and crowns, we use local anaesthetic to ensure you remain comfortable throughout the procedure.",
      },
      {
        q: "How long do cosmetic treatments last?",
        a: "This depends on the treatment. Composite bonding typically lasts 5–10 years, porcelain veneers 10–15+ years, and teeth whitening results can last 1–3 years with maintenance. We discuss expected longevity and aftercare during your consultation.",
      },
      {
        q: "What is Digital Smile Design?",
        a: "Digital Smile Design uses advanced imaging to create a preview of your potential result before treatment begins. This allows you to see and approve the proposed design, and in some cases we can create a temporary mock-up so you can 'try before you commit'.",
      },
      {
        q: "Will my cosmetic treatment look natural?",
        a: "Our approach focuses on creating results that harmonise with your natural facial features. We avoid the uniform 'fake white' look and instead aim for subtle, realistic improvements that enhance your smile while looking authentic.",
      },
      {
        q: "Can cosmetic dentistry fix crooked teeth?",
        a: "It depends on the severity. Minor irregularities can sometimes be addressed with bonding or contouring. For more significant alignment issues, clear aligners are usually recommended before cosmetic treatment. We assess this during your consultation.",
      },
      {
        q: "How much does cosmetic dentistry cost?",
        a: "Costs vary depending on the treatment and complexity. Bonding starts from £395, veneers from £1,095, and whitening from £399. A full written quote is provided before any treatment begins.",
      },
    ],
  },
];

const APPROACH = [
  {
    title: "Digital Smile Design",
    body: "Using advanced imaging, we design your new smile on screen so you can see and approve the proposed result before we begin any treatment.",
  },
  {
    title: "Try Before You Commit",
    body: "For treatments like veneers, we can apply a temporary mock-up so you can preview the result in the mirror and approve the design before committing to permanent work.",
  },
  {
    title: "Minimally Invasive",
    body: "We always recommend the least invasive option to achieve your goal. Often, conservative treatments like bonding and whitening can deliver significant improvements without drilling.",
  },
];

const PATIENT_STORIES = [
  {
    title: "Conservative Smile Refinement",
    concern:
      "A patient was unhappy with gaps between her front teeth and jagged, uneven edges.",
    treatment:
      "Whitening was performed first, followed by tooth contouring to smooth the edges, and composite bonding to close the gaps — all completed conservatively.",
    outcome:
      "The patient was pleased with the improved symmetry and natural appearance of her smile.",
  },
  {
    title: "Full Smile Makeover",
    concern:
      "A patient with old, discoloured crowns felt self-conscious and wanted a more natural-looking smile.",
    treatment:
      "A comprehensive smile makeover was planned using Digital Smile Design. Old crowns were replaced with metal-free zirconia crowns and porcelain veneers.",
    outcome:
      "The patient reported feeling significantly more confident with a result she described as natural and balanced.",
  },
];

export default function CosmeticDentistryPage() {
  return (
    <>
      <section className="grid bg-ink text-ivory lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center gap-5 px-5 sm:px-10 lg:px-12 py-12 lg:py-14">
          <Link
            href="/treatments"
            className="w-fit font-label text-[10px] font-bold tracking-[0.28em] uppercase text-gold-bright hover:text-ivory transition-colors"
          >
            ← Back to Treatments
          </Link>
          <h1 className="display-xl text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.05] text-ivory">
            Cosmetic Dentistry in London
          </h1>
          <p className="font-display text-2xl text-gold-bright">Smile Design Services</p>
          <span className="block h-px w-20 bg-gold" aria-hidden />
          <p className="max-w-[52ch] text-[15px] sm:text-base leading-[1.85] text-ivory/70">
            From subtle enhancements to comprehensive smile makeovers, our GDC-registered
            team uses digital planning and minimally invasive techniques to help you
            achieve the smile you want.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ivory/60">
            {TRUST_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="space-y-2.5">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-ivory/75">
                <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 fill-gold" aria-hidden>
                  <path d="M8.7 14.4l-4-4 1.4-1.4 2.6 2.6 5.5-5.5 1.4 1.4-6.9 6.9z" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-4">
            <Link href="/booking" className="btn-gold">
              Book Consultation
            </Link>
            <a
              href={SITE.phoneHref}
              className="border border-ivory/30 px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>

        <div className="relative min-h-[300px] bg-ink sm:min-h-[420px] lg:min-h-full">
          <Image
            src={HERO_IMAGE}
            alt="Cosmetic Dentistry at Smile Dentist London"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span
            className="pointer-events-none absolute inset-4 border border-gold/40 lg:inset-6"
            aria-hidden
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl">Our Approach to Cosmetic Dentistry</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              Natural-Looking Results Through Conservative Techniques
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <div
                key={item.title}
                className="h-full border border-ink/10 bg-cream/40 p-7 space-y-4"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-gold/50 font-label text-[11px] font-semibold text-gold-deep">
                  {i + 1}
                </span>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl">Our Cosmetic Treatments</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              From subtle enhancements to comprehensive makeovers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COSMETIC_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex h-full flex-col border border-ink/10 bg-white p-7 transition-colors hover:border-gold"
              >
                <h3 className="text-xl group-hover:text-gold-deep transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 font-label text-[11px] font-bold tracking-[0.16em] uppercase text-gold-deep">
                  {card.subtitle}
                </p>
                <p className="mt-4 flex-grow text-[15px] text-ink-soft leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 border-t border-ink/10 pt-4">
                  <span className="flex items-center gap-2 font-label text-[11px] font-bold tracking-[0.16em] uppercase text-gold-deep">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl">Real Patient Stories</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              How cosmetic treatments have helped real patients.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PATIENT_STORIES.map((story) => (
              <article
                key={story.title}
                className="h-full border border-ink/10 p-7 space-y-4"
              >
                <h3 className="text-xl">{story.title}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  <strong className="font-semibold text-ink">Patient Concern:</strong>{" "}
                  {story.concern}
                </p>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  <strong className="font-semibold text-ink">Treatment:</strong>{" "}
                  {story.treatment}
                </p>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  <strong className="font-semibold text-ink">Outcome:</strong>{" "}
                  {story.outcome}
                </p>
                <p className="text-[13px] text-ink-soft/80 leading-relaxed">
                  Individual results may vary. A consultation is required to determine
                  suitability.
                </p>
              </article>
            ))}
          </div>
          <Link href="/results-london" className="btn-outline mt-10 w-fit">
            View before &amp; after gallery
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="bg-cream border-y border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl">Your Cosmetic Dental Team</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              GDC-registered professionals providing your care.
            </p>
          </div>
          <div className="mt-12">
            <TeamGrid limit={3} columns={3} />
          </div>
        </div>
      </section>

      <TreatmentBlocks blocks={FAQ} />

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />

      <section className="bg-cream border-y border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            <div className="border border-ink/10 bg-white p-8 space-y-5">
              <h2 className="text-2xl sm:text-3xl">
                Cosmetic Dentist London — Natural Smile Design
              </h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                At Smile Dentist in London, with clinics in South Kensington and the City
                of London, we offer a full range of cosmetic dental treatments including{" "}
                <Link href="/porcelain-veneers-london" className="link-underline">
                  porcelain veneers
                </Link>
                ,{" "}
                <Link href="/composite-bonding-london" className="link-underline">
                  composite bonding
                </Link>
                ,{" "}
                <Link href="/teeth-whitening-london" className="link-underline">
                  teeth whitening
                </Link>
                ,{" "}
                <Link href="/tooth-contouring-london" className="link-underline">
                  tooth contouring
                </Link>
                ,{" "}
                <Link href="/gum-contouring-london" className="link-underline">
                  gum contouring
                </Link>
                , and{" "}
                <Link href="/smile-makeover-london" className="link-underline">
                  smile makeovers
                </Link>
                .
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Our approach focuses on minimally invasive techniques that preserve your
                natural tooth structure wherever possible. We welcome patients from
                across Kensington, Chelsea, Fulham, Knightsbridge, and Central London. A
                written treatment plan is provided before any treatment begins.
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                All treatments are provided by General Dental Council (GDC)-registered
                dentists at our Care Quality Commission (CQC)-registered practice.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-ink p-8 text-ivory space-y-5">
              <h2 className="text-2xl sm:text-3xl">Book Your Consultation</h2>
              <p className="text-[15px] text-ivory/70 leading-relaxed">
                We will assess your needs, explain all options, and provide a written
                treatment plan with costs — no obligation.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/booking" className="btn-gold justify-center">
                  Book Your Cosmetic Consultation
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="btn-outline justify-center border-ivory/30 text-ivory hover:border-gold hover:text-gold"
                >
                  Call {SITE.phone}
                </a>
              </div>
              <p className="text-[13px] text-ivory/60">
                South Kensington (SW7) • City of London (EC4) • Same team, same prices
              </p>
            </div>

            <div className="border border-ink/10 bg-white p-8 space-y-4">
              <p className="eyebrow">Compliance &amp; Safety</p>
              <h2 className="text-2xl sm:text-3xl">Registered &amp; Regulated</h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Our team are fully registered and regulated for practice in the United
                Kingdom. Our patients should expect nothing less.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.gdc-uk.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  General Dental Council (GDC)
                </a>
                <a
                  href="https://www.cqc.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Care Quality Commission (CQC)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
