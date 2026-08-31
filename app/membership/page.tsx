import type { Metadata } from "next";
import Link from "next/link";
import { SITE, MEMBERSHIP } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "50% Off On All Dental Treatment. All-in-One Dental Membership Only £20/month. Add family members for just £10/month.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="bg-ink text-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-7">
          <p className="eyebrow !text-gold">Exclusive Membership Plan</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            50% Off <span className="italic text-gold">On All Dental Treatment</span>
          </h1>
          <p className="text-lg text-ivory/80 max-w-2xl mx-auto">
            All-in-One Dental Membership Only £20/month* + Add Family Members For Just
            £10/Month
          </p>
          <a
            href={SITE.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold text-ink px-9 py-4 text-sm font-bold hover:bg-ivory transition-colors"
          >
            Join As A Member Now
          </a>
        </div>
      </section>

      {/* Gold member card */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-3xl sm:text-4xl tracking-tight">Membership</h2>
            <p className="text-ink-soft leading-relaxed">
              At South Kensington Medical &amp; Dental Clinic, we believe high-quality
              dental care should be affordable and accessible. That&rsquo;s why we offer a
              simple, cost-effective membership plan that gives you access to dental
              services — all under one roof.
            </p>

            <div className="space-y-4">
              <h3 className="font-display text-2xl">All-in-One Dental Membership</h3>
              <p className="text-ink-soft leading-relaxed">
                Our membership is designed for individuals and families who want reliable
                care at reduced prices. For just £20 a month, you&rsquo;ll enjoy:
              </p>
              <div className="rounded-2xl bg-cream p-7 space-y-3">
                <p className="font-semibold">50% off all dental treatments</p>
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
              <p className="text-ink-soft leading-relaxed">
                This plan provides outstanding value for anyone looking to save on both
                everyday care and preventative health services.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 p-7 space-y-3">
              <h3 className="font-display text-xl">
                Exclusions — Not Covered by Membership
              </h3>
              <ul className="space-y-2 text-sm text-ink-soft">
                {MEMBERSHIP.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-700/70 font-bold shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="rounded-2xl bg-ink text-ivory p-8 space-y-6">
              <div>
                <p className="text-[11px] font-bold tracking-widest text-gold">GOLD MEMBER</p>
                <p className="text-sm text-ivory/60 mt-1">Access All Areas</p>
              </div>
              <p className="font-display text-5xl">
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
                className="block rounded-full bg-gold text-ink text-center px-6 py-3.5 text-sm font-bold hover:bg-ivory transition-colors"
              >
                Join As A Member Now
              </a>
              <p className="text-xs text-ivory/50 text-center">*12 month contract</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Pay as you go */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Prefer Pay-As-You-Go?</h2>
          <p className="text-ink-soft leading-relaxed">
            No problem. Our standard fees apply, you can find them on our fee pages.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
            <div className="rounded-2xl bg-white border border-ink/8 p-6">
              <p className="text-[11px] font-bold tracking-widest text-ink-soft mb-3">
                STANDARD FEES
              </p>
              <div className="flex justify-between text-sm border-b border-ink/6 pb-2 mb-2">
                <span>Dental Check ups</span>
                <span className="font-semibold">£95</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hygienist</span>
                <span className="font-semibold">£89</span>
              </div>
            </div>
            <div className="rounded-2xl bg-ink text-ivory p-6 flex flex-col justify-center">
              <p className="text-[11px] font-bold tracking-widest text-gold mb-2">
                MEMBER PRICE
              </p>
              <p className="font-display text-2xl">50% OFF</p>
              <p className="text-xs text-ivory/60 mt-1">The Prices Above</p>
            </div>
          </div>
          <Link
            href="/booking"
            className="inline-block rounded-full bg-ink text-ivory px-8 py-3.5 text-sm font-semibold hover:bg-gold-deep transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Ready to join */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Ready to Join?</h2>
          <p className="text-ink-soft leading-relaxed">
            You can sign up easily by calling us or speaking with our team at your next
            visit. Your health, your way, with care that works for your lifestyle.
          </p>
          <a
            href={SITE.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold text-ink px-9 py-4 text-sm font-bold hover:bg-gold-deep hover:text-ivory transition-colors"
          >
            Join As A Member Now
          </a>
          <p className="text-sm text-ink-soft">
            Membership is just £20/month — no hidden fees, 12-month contract.{" "}
            <Link href="/membership-terms" className="text-gold-deep font-semibold hover:underline">
              Full Terms &amp; Conditions
            </Link>
            .
          </p>
          <p className="text-xs text-ink-soft">
            20 Old Brompton Road, South Kensington, London
          </p>
        </div>
      </section>
    </>
  );
}
