import { SITE, MEMBERSHIP } from "@/lib/site-data";

export default function MembershipBanner() {
  return (
    <section className="glow-dark text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 px-5 sm:px-10 py-16 lg:py-24 items-center">
          <div className="space-y-6">
            <p className="eyebrow !text-gold before:!bg-gold">Exclusive Membership Plan</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.12]">
              50% off on all
              <br />
              dental treatment
            </h2>
            <p className="text-ivory/70 leading-relaxed max-w-md">
              All-in-One Dental Membership Only £20/month*. + Add Family Members For Just
              £10/Month.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.membershipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-ink px-8 py-4 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-ivory transition-colors"
              >
                Join as a member now
              </a>
              <a
                href={SITE.phoneHref}
                className="border border-ivory/30 px-8 py-4 font-label text-[11px] font-bold tracking-[0.18em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Call {SITE.phone}
              </a>
            </div>
            <p className="text-xs text-ivory/40">{MEMBERSHIP.terms}</p>
          </div>

          <div className="border border-gold/40 bg-ivory/5 p-8 space-y-5 backdrop-blur">
            <div className="flex items-baseline justify-between">
              <p className="font-label text-[11px] tracking-[0.22em] text-gold">GOLD MEMBER</p>
              <p className="font-display text-4xl font-semibold">
                £20<span className="text-base text-ivory/50 font-normal">/mo</span>
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/60">Check-Ups</span>
                <span className="font-semibold">Included</span>
              </li>
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/60">Treatments</span>
                <span className="font-semibold text-gold">50% OFF</span>
              </li>
              <li className="flex justify-between border-b border-ivory/10 pb-3">
                <span className="text-ivory/60">Family Add-On</span>
                <span className="font-semibold">£10/mo</span>
              </li>
            </ul>
            <p className="text-xs text-ivory/40">*12 month contract</p>
          </div>
      </div>
    </section>
  );
}
