import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/faqs";

export default function FaqSection({
  items,
  eyebrow = "Common Questions",
  heading = "Frequently asked questions",
  jsonLd = true,
  className = "border-y border-ink/10",
}: {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  jsonLd?: boolean;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section
      id="faq"
      className={`scroll-mt-28 grid lg:grid-cols-[0.8fr_1.2fr] ${className}`}
    >
      {jsonLd && <JsonLd data={faqJsonLd(items)} />}
      <div className="glow-light flex flex-col justify-start px-5 sm:px-10 lg:px-12 py-14 lg:py-20">
        <div className="lg:sticky lg:top-28 space-y-5">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl tracking-tight">{heading}</h2>
          <Link href="/booking" className="btn-primary mt-3 inline-flex w-fit">
            Book My Appointment
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <div className="bg-white px-5 sm:px-10 lg:px-12 py-14 lg:py-20 lg:border-l border-ink/10">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-semibold text-ink transition-colors group-open:text-gold-deep">
                {item.q}
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-gold/50 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[68ch] text-[15px] text-ink-soft leading-[1.85]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
