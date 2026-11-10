import type { Metadata } from "next";
import Link from "next/link";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import TreatmentBlocks from "@/components/TreatmentBlocks";
import TreatmentCard from "@/components/TreatmentCard";
import ClinicLiveStrip from "@/components/ClinicLiveStrip";
import TrustBadges, { GoogleReviewBadge } from "@/components/TrustBadges";
import { HeroVideo } from "@/components/TreatmentVideo";
import { ALL_TREATMENTS, SITE } from "@/lib/site-data";
import { heroVideoFor } from "@/lib/treatment-videos";
import { PAGE_JSONLD, pageMetadata } from "@/lib/seo";
import { JsonLdBlocks } from "@/components/JsonLd";
import type { ContentBlock } from "@/lib/treatment-content";

// Copy sourced from www.smiledentist.co.uk/cosmetic-dentistry-london
export const metadata: Metadata = pageMetadata("/cosmetic-dentistry-london");

const HERO_POINTS = [
  "Digital Smile Design: See your potential result before treatment.",
  "Finance available (subject to status, terms apply).",
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
        a: "Costs vary depending on the treatment and complexity. Bonding starts from £395 (£197.50 for members), veneers from £1,095 (£547.50 for members), and whitening from £199 as a current offer. A full written quote is provided before any treatment begins.",
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

const INLINE_LINK =
  "font-medium text-gold-deep underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold";
const SHELL = "mx-auto max-w-[82rem] px-5 sm:px-8";
const BAND = "py-14 lg:py-20 scroll-mt-40";

const JUMP_LINKS = [
  { id: "approach", label: "Our Approach" },
  { id: "treatments", label: "Cosmetic Treatments" },
  { id: "stories", label: "Patient Stories" },
  { id: "faqs", label: "FAQs" },
  { id: "book", label: "Book" },
];

function Head({
  eyebrow,
  heading,
  sub,
  tone = "light",
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`display-xl text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.12] ${
          tone === "dark" ? "text-ivory" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      <span className="mx-auto block h-px w-16 bg-gold" aria-hidden />
      {sub && (
        <p className={`text-lg leading-relaxed ${tone === "dark" ? "text-ivory/70" : "text-ink-soft"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

export default function CosmeticDentistryPage() {
  const treatments = COSMETIC_CARDS.map((card) =>
    ALL_TREATMENTS.find((t) => `/${t.slug}` === card.href)
  ).filter((t) => t !== undefined);

  return (
    <>
      <JsonLdBlocks blocks={PAGE_JSONLD["/cosmetic-dentistry-london"]} />

      <div className="sticky top-[67px] z-40 border-b border-gold/25 bg-gradient-to-r from-ink via-[#2a241d] to-ink text-ivory shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)] sm:top-[70px]">
        <ClinicLiveStrip tone="dark" />
      </div>

      <section className="grid grid-cols-[minmax(0,1fr)] bg-ink text-ivory lg:grid-cols-[1fr_1fr]">
        <div className="min-w-0 flex flex-col justify-center gap-5 px-5 sm:px-10 lg:px-12 py-12 lg:py-14 max-sm:items-center max-sm:text-center">
          <Link
            href="/treatments"
            className="fade-up w-fit font-label text-[10px] font-bold tracking-[0.28em] uppercase text-gold-bright hover:text-ivory transition-colors"
          >
            ← Back to Treatments
          </Link>
          <h1 className="fade-up fade-up-1 display-xl text-[1.875rem] min-[375px]:text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.05] text-ivory">
            Cosmetic Dentistry in London
          </h1>
          <p className="fade-up fade-up-1 font-display text-xl sm:text-2xl text-gold-bright">
            Smile Design Services
          </p>
          <span className="fade-up fade-up-1 block h-px w-20 bg-gold" aria-hidden />
          <p className="fade-up fade-up-2 max-w-[52ch] text-[15px] sm:text-base leading-[1.85] text-ivory/70">
            From subtle enhancements to comprehensive smile makeovers, our GDC-registered
            team uses digital planning and minimally invasive techniques to help you
            achieve the smile you want.
          </p>
          <TrustBadges reviews="mobile" className="fade-up fade-up-2 w-full max-w-sm" />
          <ul className="fade-up fade-up-2 grid gap-2.5 max-sm:hidden">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] leading-snug text-ivory/80">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[11px] font-bold text-gold-bright"
                  aria-hidden
                >
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="fade-up fade-up-3 mt-2 flex flex-wrap gap-4 max-sm:w-full max-sm:flex-col max-sm:items-stretch max-sm:gap-3">
            <Link href="/booking" className="btn-gold btn-cta font-bold">
              Book Consultation
            </Link>
            <a
              href={SITE.phoneHref}
              className="btn-cta border border-ivory/30 px-7 py-3.5 text-center font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
        <div className="relative grid min-w-0">
          <HeroVideo id={heroVideoFor("cosmetic-dentistry-london")} />
          <GoogleReviewBadge className="absolute left-8 top-8 z-10 max-sm:hidden lg:left-10 lg:top-10" />
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-[143px] sm:top-[152px] md:top-[135px] xl:top-[126px] z-30 border-b border-ink/10 bg-ivory/95 backdrop-blur"
      >
        <div className={`flex gap-7 overflow-x-auto py-4 ${SHELL}`}>
          {JUMP_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap font-label text-[10px] font-bold tracking-[0.18em] uppercase text-ink-soft transition-colors hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="approach" className={BAND}>
        <div className={`${SHELL} space-y-10 lg:space-y-12`}>
          <Head
            eyebrow="Our Approach"
            heading="Our Approach to Cosmetic Dentistry"
            sub="Natural-Looking Results Through Conservative Techniques"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <div
                key={item.title}
                className="group relative h-full overflow-hidden border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl hover:shadow-ink/8 max-sm:text-center"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gold/0 transition-colors group-hover:bg-gold" aria-hidden />
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 font-display text-xl text-gold-deep max-sm:mx-auto">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="treatments" className={`bg-cream border-y border-ink/10 ${BAND}`}>
        <div className={`${SHELL} space-y-10 lg:space-y-12`}>
          <Head
            eyebrow="Treatments"
            heading="Our Cosmetic Treatments"
            sub="From subtle enhancements to comprehensive makeovers."
          />
          <div className="flex flex-wrap justify-center gap-6">
            {treatments.map((t) => (
              <div
                key={t.slug}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <TreatmentCard treatment={t} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/fees" className="btn-outline">
              View full fee guide <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="stories" className={BAND}>
        <div className={`${SHELL} space-y-10 lg:space-y-12`}>
          <Head
            eyebrow="Real Patients"
            heading="Real Patient Stories"
            sub="How cosmetic treatments have helped real patients."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {PATIENT_STORIES.map((story) => (
              <article
                key={story.title}
                className="flex h-full flex-col border border-ink/10 bg-white shadow-[0_20px_40px_-32px_rgba(0,0,0,0.5)]"
              >
                <h3 className="border-b border-ink/10 bg-ink px-7 py-5 font-display text-xl text-ivory">
                  {story.title}
                </h3>
                <dl className="flex-1 divide-y divide-ink/10 px-7">
                  {(
                    [
                      ["Patient Concern", story.concern],
                      ["Treatment", story.treatment],
                      ["Outcome", story.outcome],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label} className="py-4">
                      <dt className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-deep">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-[15px] text-ink-soft leading-relaxed">{text}</dd>
                    </div>
                  ))}
                </dl>
                <p className="border-t border-ink/10 px-7 py-4 text-[12px] text-ink-soft/80 leading-relaxed">
                  Individual results may vary. A consultation is required to determine
                  suitability.
                </p>
              </article>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/results-london" className="btn-outline">
              View before &amp; after gallery <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SmileGallery limit={9} className="bg-cream border-y border-ink/10" />

      <div id="faqs" className="scroll-mt-40">
        <TreatmentBlocks blocks={FAQ} />
      </div>

      <section id="book" className={`bg-cream border-y border-ink/10 ${BAND}`}>
        <div className={SHELL}>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            <div className="space-y-5 border border-ink/10 bg-white p-8">
              <p className="eyebrow">Smile Design</p>
              <h2 className="font-display text-2xl sm:text-[1.75rem] leading-snug">
                Cosmetic Dentist London — Natural Smile Design
              </h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                At Smile Dentist in London, with clinics in South Kensington and the City
                of London, we offer a full range of cosmetic dental treatments including{" "}
                <Link href="/porcelain-veneers-london" className={INLINE_LINK}>
                  porcelain veneers
                </Link>
                ,{" "}
                <Link href="/composite-bonding-london" className={INLINE_LINK}>
                  composite bonding
                </Link>
                ,{" "}
                <Link href="/teeth-whitening-london" className={INLINE_LINK}>
                  teeth whitening
                </Link>
                ,{" "}
                <Link href="/tooth-contouring-london" className={INLINE_LINK}>
                  tooth contouring
                </Link>
                ,{" "}
                <Link href="/gum-contouring-london" className={INLINE_LINK}>
                  gum contouring
                </Link>
                , and{" "}
                <Link href="/smile-makeover-london" className={INLINE_LINK}>
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

            <div className="relative flex flex-col justify-center space-y-5 overflow-hidden bg-ink p-8 text-ivory shadow-2xl shadow-ink/20 max-sm:text-center">
              <span className="pointer-events-none absolute inset-3 border border-gold/30" aria-hidden />
              <p className="eyebrow relative">Book A Consultation</p>
              <h2 className="relative font-display text-2xl sm:text-[1.75rem]">Book Your Consultation</h2>
              <p className="relative text-[15px] text-ivory/70 leading-relaxed">
                We will assess your needs, explain all options, and provide a written
                treatment plan with costs — no obligation.
              </p>
              <div className="relative flex flex-col gap-3">
                <Link href="/booking" className="btn-gold btn-cta justify-center font-bold">
                  Book Your Cosmetic Consultation
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="btn-cta border border-ivory/30 px-7 py-3.5 text-center font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
                >
                  Call {SITE.phone}
                </a>
              </div>
              <p className="relative text-[13px] text-ivory/60">
                South Kensington (SW7) • City of London (EC4) • Same team, same prices
              </p>
            </div>

            <div className="space-y-5 border border-ink/10 bg-white p-8">
              <p className="eyebrow">Compliance &amp; Safety</p>
              <h2 className="font-display text-2xl sm:text-[1.75rem]">Registered &amp; Regulated</h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Our team are fully registered and regulated for practice in the United
                Kingdom. Our patients should expect nothing less.
              </p>
              <TrustBadges reviews={false} />
            </div>
          </div>
        </div>
      </section>

      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
