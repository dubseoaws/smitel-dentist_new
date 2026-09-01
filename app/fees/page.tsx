import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FEE_SECTIONS, SITE, IMAGES } from "@/lib/site-data";
import MeetExperts from "@/components/MeetExperts";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Transparent Pricing. Exclusive Value. Private dentistry in South Kensington doesn't have to cost a fortune. Join our membership and save 50% instantly.",
};

export default function FeesPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Fees &amp; Membership</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl">
            Transparent Pricing. <span className="italic text-gold-deep">Exclusive Value.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            Private dentistry in South Kensington doesn&rsquo;t have to cost a fortune.
            Join our membership and save 50% instantly.
          </p>
          <a
            href={SITE.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 btn-primary"
          >
            JOIN MEMBERSHIP NOW
          </a>
        </div>
      </section>

      {/* No-brainer math */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              The &ldquo;No-Brainer&rdquo; Math
            </h2>
            <p className="text-ink-soft leading-relaxed">
              Why pay full price? Our membership is designed to pay for itself—often in a
              single visit.
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold" /> £20/Month Membership
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold" /> Add family for £10/Month
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold" /> Instant 50% Savings
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-ink text-ivory p-8 lg:p-10 space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-gold">
              EXAMPLE: PORCELAIN VENEER
            </p>
            <div className="flex justify-between text-sm border-b border-ivory/10 pb-3">
              <span className="text-ivory/70">Non-Member Price</span>
              <span className="line-through decoration-ivory/40">From £1,095.00</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-ivory/10 pb-3">
              <span className="text-sm text-ivory/70">Member&rsquo;s Price</span>
              <span className="font-display text-3xl text-gold">From £547.50</span>
            </div>
            <p className="inline-block bg-gold px-4 py-2 font-display text-xl text-ink">
              You Save £547.50 Instantly
            </p>
            <p className="text-xs text-ivory/60">
              That savings alone pays for over 2 years of membership!
            </p>
          </div>
        </div>
      </section>

      {/* Fee tables */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-3 px-6 py-4 bg-ink text-ivory text-[11px] font-bold tracking-widest rounded-xl">
            <span>TREATMENT</span>
            <span className="text-right">NON-MEMBER</span>
            <span className="text-right text-gold">MEMBER (50% OFF)</span>
          </div>
          {FEE_SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl bg-white border border-ink/8 overflow-hidden">
              <p className="px-6 py-4 font-display text-xl bg-cream/60">{section.title}</p>
              {section.rows.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-3 items-baseline px-6 py-3.5 text-sm border-t border-ink/6"
                >
                  <span className="font-medium">{row.name}</span>
                  <span className="text-right text-ink-soft">{row.standard}</span>
                  <span
                    className={`text-right ${
                      row.member === "Not eligible"
                        ? "text-ink-soft"
                        : "font-display text-lg text-gold-deep"
                    }`}
                  >
                    {row.member}
                  </span>
                </div>
              ))}
            </div>
          ))}
          <p className="text-xs text-ink-soft">
            *Prices represent starting from costs. Full treatment plan provided at
            consultation. Dental implants are not eligible for the membership discount.
          </p>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
          <blockquote className="font-display text-2xl sm:text-3xl leading-snug">
            &ldquo;My goal is to make high-quality dentistry accessible. We don&rsquo;t
            hide costs. Our membership plan is transparent, simple, and immediately
            rewarding.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image
              src={IMAGES.drYasha}
              alt="Dr. Yasha Y Shirazi - Principal Dentist & Clinical Director"
              width={56}
              height={56}
              className="rounded-full h-14 w-14 object-cover object-top"
            />
            <div className="text-left text-sm">
              <p className="font-semibold">Dr. Yasha Y Shirazi</p>
              <p className="text-ink-soft text-xs">Principal Dentist &amp; Clinical Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl tracking-tight">
              Finance &amp; Payment Options
            </h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              We want to make your dream smile as accessible as possible.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white border border-ink/8 p-8 space-y-3">
              <h3 className="font-display text-xl">All Major Cards Accepted</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                We accept Visa, Mastercard, and American Express with no extra fees.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink/8 p-8 space-y-3">
              <h3 className="font-display text-xl">0% Interest Finance</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Spread the cost of your treatment. We offer 0% finance options for
                treatment plans over £1,000 (subject to status).
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className="text-xs font-bold tracking-widest text-gold-deep hover:underline"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </section>

      <MeetExperts limit={3} tone="cream" />
    </>
  );
}
