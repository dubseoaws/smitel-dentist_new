import type { Metadata } from "next";
import Link from "next/link";
import { SITE, MEMBERSHIP } from "@/lib/site-data";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "50% Off On All Dental Treatment. All-in-One Dental Membership Only £20/month. Add family members for just £10/month.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Sign-up pause notice */}
      <section className="bg-ink text-ivory border-b border-ink/10 px-5 sm:px-10 lg:px-12 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[13px] leading-relaxed text-ivory/80 max-w-4xl">
            ❤️ We&rsquo;ve been overwhelmed by the love! Due to incredible demand, new
            membership sign-ups will pause from{" "}
            <span className="font-semibold text-gold">1 April</span>. Existing members —
            your 50% off isn&rsquo;t going anywhere. You can still join until then.
          </p>
          <Link
            href="/"
            className="font-label text-[11px] tracking-[0.16em] uppercase text-ivory/70 hover:text-gold transition-colors whitespace-nowrap"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-12 py-16 lg:py-20 space-y-6 flex flex-col justify-center">
          <p className="eyebrow">Exclusive Membership Plan</p>
          <h1 className="display-xl text-[2rem] sm:text-4xl lg:text-[3rem] max-w-[16ch]">
            50% Off <span className="italic text-gold-deep">On All Dental Treatment</span>
          </h1>
          <span className="block h-px w-16 bg-gold" aria-hidden />
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-xl">
            All-in-One Dental Membership Only £20/month* + Add Family Members For Just
            £10/Month
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={SITE.membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join As A Member Now
              <span aria-hidden>→</span>
            </a>
            <Link href="/booking" className="btn-outline">
              Book My Appointment
            </Link>
          </div>
        </div>

        <div className="glow-dark text-ivory border-t lg:border-t-0 lg:border-l border-ink/10 px-5 sm:px-10 lg:px-12 py-16 lg:py-20 flex flex-col justify-center gap-7">
          <div>
            <p className="eyebrow">Gold Member</p>
            <p className="mt-2 text-sm text-ivory/60">Access All Areas</p>
          </div>
          <p className="font-display text-6xl leading-none">
            £20<span className="text-lg text-ivory/60">/mo</span>
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-ivory/10 pb-3">
              <span className="text-ivory/70">Check-Ups</span>
              <span className="font-semibold">Included</span>
            </li>
            <li className="flex justify-between border-b border-ivory/10 pb-3">
              <span className="text-ivory/70">Treatments</span>
              <span className="font-semibold text-gold">50% OFF</span>
            </li>
            <li className="flex justify-between border-b border-ivory/10 pb-3">
              <span className="text-ivory/70">Family Add-On</span>
              <span className="font-semibold">£10/mo</span>
            </li>
          </ul>
          <a
            href={SITE.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold justify-center"
          >
            Join As A Member Now
          </a>
          <p className="text-xs text-ivory/50">*12 month contract</p>
        </div>
      </section>

      {/* What's included */}
      <section className="grid lg:grid-cols-[0.9fr_1.1fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-12 py-16 space-y-5">
          <p className="eyebrow">Affordable Luxury</p>
          <h2 className="text-3xl">Membership</h2>
          <p className="text-[15px] text-ink-soft leading-relaxed">
            At South Kensington Medical &amp; Dental Clinic, we believe high-quality
            dental care should be affordable and accessible. That&rsquo;s why we offer a
            simple, cost-effective membership plan that gives you access to dental
            services — all under one roof.
          </p>
          <p className="text-[15px] text-ink-soft leading-relaxed">
            This plan provides outstanding value for anyone looking to save on both
            everyday care and preventative health services.
          </p>
        </div>

        <div className="bg-white border-t lg:border-t-0 lg:border-l border-ink/10 px-5 sm:px-10 lg:px-12 py-16 space-y-7">
          <div className="space-y-3">
            <h3 className="font-display text-2xl">All-in-One Dental Membership</h3>
            <p className="font-display text-5xl leading-none">
              £20<span className="text-lg text-ink-soft">*/month</span>
            </p>
            <p className="text-[15px] text-ink-soft">
              + Add Family Members For Just £10/Month
            </p>
            <a
              href={SITE.membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-1"
            >
              Join As A Member Now
              <span aria-hidden>→</span>
            </a>
            <p className="text-[15px] text-ink-soft leading-relaxed pt-2">
              Our membership is designed for individuals and families who want reliable
              care at reduced prices. For just £20 a month, you&rsquo;ll enjoy:
            </p>
          </div>

          <div className="border border-ink/10 bg-cream p-7 space-y-3">
            <p className="font-label text-[12px] font-bold tracking-[0.16em] uppercase">
              50% off all dental treatments
            </p>
            <ul className="space-y-2 text-sm text-ink-soft">
              {MEMBERSHIP.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-2 text-sm text-ink-soft">
            {MEMBERSHIP.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sage shrink-0" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exclusions + pay as you go */}
      <section className="grid lg:grid-cols-2 border-b border-ink/10">
        <div className="bg-white px-5 sm:px-10 lg:px-12 py-16 space-y-5">
          <p className="eyebrow">Please Note</p>
          <h2 className="text-3xl">Exclusions — Not Covered by Membership</h2>
          <ul className="space-y-3 text-sm text-ink-soft pt-2">
            {MEMBERSHIP.exclusions.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-ink/8 pb-3">
                <span className="text-red-700/70 font-bold shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glow-light border-t lg:border-t-0 lg:border-l border-ink/10 px-5 sm:px-10 lg:px-12 py-16 space-y-6">
          <p className="eyebrow">No Commitment</p>
          <h2 className="text-3xl">Prefer Pay-As-You-Go?</h2>
          <p className="text-[15px] text-ink-soft leading-relaxed">
            No problem. Our standard fees apply, you can find them on our fee pages.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-ink/10 p-6">
              <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft mb-4">
                Standard Fees
              </p>
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
          <Link href="/booking" className="btn-primary">
            Book Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Ready to join */}
      <section className="glow-dark text-ivory px-5 sm:px-10 lg:px-12 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:items-center border-b border-ink/10">
        <div className="space-y-4">
          <p className="eyebrow">Join Today</p>
          <h2 className="text-3xl">Ready to Join?</h2>
          <p className="text-sm text-ivory/60 leading-relaxed max-w-xl">
            You can sign up easily by calling us or speaking with our team at your next
            visit. Your health, your way, with care that works for your lifestyle.
          </p>
        </div>
        <div className="space-y-5">
          <a
            href={SITE.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Join As A Member Now
            <span aria-hidden>→</span>
          </a>
          <p className="text-sm text-ivory/60 leading-relaxed">
            Membership is just £20/month — no hidden fees, 12-month contract.{" "}
            <Link href="/membership-terms" className="text-gold hover:underline">
              Full Terms &amp; Conditions
            </Link>
            .
          </p>
          <p className="text-xs text-ivory/40">
            20 Old Brompton Road, South Kensington, London
          </p>
        </div>
      </section>

      <CaseStudies />

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />

      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
