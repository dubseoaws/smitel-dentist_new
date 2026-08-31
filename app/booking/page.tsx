import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your consultation today and experience dentistry without fear.",
};

export default function BookingPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center space-y-7">
        <p className="eyebrow">Book My Appointment</p>
        <h1 className="text-4xl sm:text-5xl tracking-tight">Book an Appointment</h1>
        <p className="text-ink-soft leading-relaxed">
          Book your consultation today and experience dentistry without fear. Call us or
          email — same number for both clinics.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SITE.phoneHref}
            className="rounded-full bg-ink text-ivory px-9 py-4 text-sm font-semibold hover:bg-gold-deep transition-colors"
          >
            Call {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full border border-ink/25 px-9 py-4 text-sm font-semibold hover:border-gold hover:text-gold-deep transition-colors"
          >
            {SITE.email}
          </a>
        </div>
        <p className="text-xs text-ink-soft">
          South Kensington (SW7) • City of London (EC4)
        </p>
      </div>
    </section>
  );
}
