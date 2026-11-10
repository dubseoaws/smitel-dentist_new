import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_JSONLD, pageMetadata } from "@/lib/seo";
import { JsonLdBlocks } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata("/membership");

const JOIN_URL = (content: "hero" | "bottom") =>
  `https://dental.md.co.uk/membership?utm_source=smiledentist.co.uk&utm_medium=website&utm_campaign=membership-page&utm_content=${content}`;

const INCLUDES = [
  "Check Ups",
  "Cosmetic Dentistry (inc. whitening)",
  "Restorative Dentistry (fillings, crowns, bridges and dentures)",
];

const EXCLUSIONS = [
  "Dental implants, including All-on-4 and All-on-6 full-arch treatment and implant-retained restorations",
  "Pro-Aligners and invisible braces (clear aligner treatment)",
  "Bone grafting",
  "Sinus lifts",
  "Apicectomy (root-end surgery)",
  "Treatments involving gold, such as gold crowns and gold inlays or onlays",
  "Chrome-cobalt (metal-framed) dentures",
  "Any treatment carried out by a GDC-registered specialist",
  "Laboratory fees, prescription medicines and products retailed by the clinic",
];

const STEPS = [
  { title: "1. Join online", body: "Join online in about a minute." },
  {
    title: "2. Pay securely",
    body: "Pay securely by card (Stripe). The first payment is taken today.",
  },
  {
    title: "3. Book your first visit",
    body: "You are sent to our thank-you page, and from there to md.co.uk to book your first appointment. Your membership card is emailed to you.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <JsonLdBlocks blocks={PAGE_JSONLD["/membership"]} />

      {/* Sign-up pause notice */}
      <section className="bg-gold/15 border-b border-gold/30 px-5 sm:px-10 lg:px-12 py-4">
        <p className="mx-auto max-w-5xl text-center text-[13px] leading-relaxed text-ink">
          ❤️ Due to incredible demand, new membership sign-ups pause on{" "}
          <strong className="font-semibold">Sunday 18 October</strong>. Existing members —
          your 50% off isn&rsquo;t going anywhere. You can still join until then.
        </p>
      </section>

      {/* Hero */}
      <section className="glow-dark text-ivory border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-10 lg:px-12 py-14 lg:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6 max-lg:text-center">
            <Link
              href="/"
              className="inline-block font-label text-[11px] font-bold tracking-[0.18em] uppercase text-gold hover:text-ivory transition-colors"
            >
              ← Back to Home
            </Link>
            <p className="eyebrow !text-gold before:!bg-gold max-lg:justify-center">
              Exclusive Membership Plan
            </p>
            <h1 className="display-xl text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.05]">
              50% Off
              <span className="block italic text-gold">Most Treatments</span>
            </h1>
            <span className="block h-px w-16 bg-gold max-lg:mx-auto" aria-hidden />
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed">
                All-in-One Dental Membership £30 a month, or £240 a year*
              </p>
              <p className="text-sm text-ivory/60">
                Under-18s join through a parent or guardian at the clinic.
              </p>
            </div>
            <a
              href={JOIN_URL("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-cta font-bold"
            >
              Join now
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Gold Member card */}
          <div className="relative mx-auto w-full max-w-md border border-gold/40 bg-ink/60 p-8 sm:p-10 shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl text-ivory">Gold Member</h3>
                <p className="mt-1 font-label text-[11px] tracking-[0.18em] uppercase text-gold">
                  Access All Areas
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink text-lg" aria-hidden>
                ★
              </span>
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/70">Check-Ups</span>
                <span className="font-semibold">Included</span>
              </li>
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/70">Treatments</span>
                <span className="font-semibold text-gold">50% OFF</span>
              </li>
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/70">Contract</span>
                <span className="font-semibold">12 months</span>
              </li>
            </ul>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-5xl leading-none text-ivory">
                  £30<span className="text-lg text-ivory/60">/mo</span>
                </p>
                <p className="mt-2 text-sm text-ivory/70">or £240 a year</p>
              </div>
              <p className="text-xs text-ivory/50">*12 month contract</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 py-16 lg:py-24 space-y-12">
          <div className="max-w-3xl space-y-5 max-sm:text-center">
            <h2 className="text-3xl sm:text-4xl">Membership</h2>
            <span className="block h-px w-16 bg-gold max-sm:mx-auto" aria-hidden />
            <p className="text-[15px] text-ink-soft leading-relaxed">
              At South Kensington Medical &amp; Dental Clinic, we believe high-quality
              dental care should be affordable and accessible. That&rsquo;s why we offer a
              simple, cost-effective membership plan that gives you access to dental
              services — all under one roof.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Plan */}
            <div className="border border-ink/10 bg-cream p-7 sm:p-10 space-y-7">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
                <h3 className="font-display text-2xl">All-in-One Dental Membership</h3>
                <div className="text-right max-sm:text-left">
                  <p className="font-display text-5xl leading-none">
                    £30*<span className="text-lg text-ink-soft"> a month</span>
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">or £240 a year</p>
                </div>
              </div>
              <h4 className="font-display text-xl leading-snug">
                Our membership is designed for anyone who wants reliable care at reduced
                prices. For £30 a month, or £240 a year, you&rsquo;ll enjoy:
              </h4>
              <div className="border border-gold/40 bg-white p-6 space-y-4">
                <h5 className="font-label text-[12px] font-bold tracking-[0.16em] uppercase text-gold-deep">
                  50% off most treatments
                </h5>
                <ul className="space-y-2.5 text-sm text-ink-soft">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-gold-deep" aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Priority support with bookings and care coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Under-18s join through a parent or guardian at the clinic.
                </li>
              </ul>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                This plan provides outstanding value for anyone looking to save on both
                everyday care and preventative health services.
              </p>
            </div>

            {/* Exclusions */}
            <div className="border border-red-800/15 bg-red-50/40 dark:border-red-400/20 dark:bg-red-950/30 p-7 sm:p-10 space-y-5">
              <h5 className="font-display text-xl text-red-900 dark:text-red-200">
                Exclusions — Not Covered by Membership
              </h5>
              <ul className="space-y-3 text-sm text-red-900/80 dark:text-red-200/80">
                {EXCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-red-800/10 dark:border-red-400/15 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-red-700/80 dark:text-red-300/80 shrink-0" aria-hidden>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pay as you go */}
      <section className="glow-light border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-10 lg:px-12 py-16 lg:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5 max-sm:text-center">
            <h3 className="text-3xl sm:text-4xl">Prefer Pay-As-You-Go?</h3>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              No problem. Our standard fees apply, you can find them on our{" "}
              <Link href="/fees" className="text-gold-deep underline-offset-4 hover:underline">
                fee pages
              </Link>
              .
            </p>
            <Link href="/booking" className="btn-primary btn-cta">
              Book Now
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-ink/10 p-6">
              <h4 className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft mb-4">
                Standard Fees
              </h4>
              <div className="flex items-baseline justify-between border-b border-ink/8 pb-2 mb-2">
                <span className="text-sm">Dental Check ups</span>
                <span className="font-display text-3xl font-semibold">£95</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm">Hygienist</span>
                <span className="font-display text-3xl font-semibold">£89</span>
              </div>
            </div>
            <div className="glow-dark text-ivory p-6 flex flex-col justify-center">
              <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-2">
                Member Price
              </p>
              <p className="font-display text-5xl font-semibold text-gold">50% OFF</p>
              <p className="text-xs text-ivory/60 mt-1">The Prices Above</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="glow-dark text-ivory border-b border-ink/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-10 py-16 lg:py-20 text-center">
          <h3 className="display-xl text-[1.75rem] sm:text-[2.25rem]">How It Works</h3>
          <span className="mx-auto mt-5 block h-px w-16 bg-gold" aria-hidden />
          <ol className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.title} className="border border-ivory/10 bg-ivory/[0.03] p-6">
                <p className="font-display text-xl text-gold">{s.title}</p>
                <p className="mt-3 text-sm text-ivory/70 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <a
            href={JOIN_URL("bottom")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-cta mt-10 font-bold"
          >
            Join now
            <span aria-hidden>→</span>
          </a>
          <p className="mt-6 text-sm text-ivory/70 leading-relaxed">
            Membership is just <strong className="text-ivory">£30 a month, or £240 a year</strong>{" "}
            — no hidden fees, 12-month contract.{" "}
            <Link href="/membership-terms" className="text-gold hover:underline">
              Full Terms &amp; Conditions
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-ivory/40">
            20 Old Brompton Road, South Kensington, London
          </p>
        </div>
      </section>
    </>
  );
}
