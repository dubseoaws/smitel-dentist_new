import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";
import { IMAGES, YASHA_FULL_BIO } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team dedicated to the art and science of your smile.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Expert Dental Care</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">Our Experts</h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            Meet the team dedicated to the art and science of your smile.
          </p>
        </div>
      </section>

      {/* Principal spotlight */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Image
              src={IMAGES.drYasha}
              alt="Dr. Yasha Y Shirazi - Principal Dentist & Clinical Director"
              width={640}
              height={760}
              className="rounded-2xl object-cover w-full object-top"
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl tracking-tight">Dr. Yasha Y Shirazi</h2>
              <p className="text-[11px] font-bold tracking-widest text-gold-deep uppercase mt-2">
                Principal Dentist &amp; Clinical Director
              </p>
            </div>
            <div className="space-y-4 text-ink-soft leading-relaxed text-[15px]">
              {YASHA_FULL_BIO.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex gap-10 border-t border-ink/10 pt-6">
              <div>
                <p className="font-display text-3xl text-gold-deep">20+</p>
                <p className="text-xs tracking-widest text-ink-soft uppercase">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-deep">195843</p>
                <p className="text-xs tracking-widest text-ink-soft uppercase">GDC Number</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/dr-yasha-shirazi-cosmetic-dentist"
                className="rounded-full border border-ink/25 px-7 py-3 text-xs font-bold tracking-widest hover:border-gold hover:text-gold-deep transition-colors"
              >
                VIEW FULL PROFILE
              </Link>
              <Link
                href="/booking"
                className="btn-primary"
              >
                BOOK MY APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical team */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-12">Clinical Team</h2>
          <TeamGrid />
        </div>
      </section>

      {/* Regulated */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-5">
          <p className="eyebrow">Compliance &amp; Safety</p>
          <h2 className="text-2xl sm:text-3xl tracking-tight">Registered &amp; Regulated</h2>
          <p className="text-ink-soft leading-relaxed">
            Our team are fully registered and regulated for practice in the United Kingdom.
            Our patients should expect nothing less.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <a
              href="https://www.gdc-uk.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep hover:underline"
            >
              General Dental Council (GDC)
            </a>
            <a
              href="https://www.cqc.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep hover:underline"
            >
              Care Quality Commission (CQC)
            </a>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-ink text-ivory py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Join Our Team</h2>
          <p className="text-ivory/70 leading-relaxed">
            We are always looking for exceptional talent to join our South Kensington
            clinic.
          </p>
          <a
            href="mailto:careers@smiledentist.co.uk"
            className="inline-block rounded-full border border-gold text-gold px-8 py-3.5 text-sm font-bold hover:bg-gold hover:text-ink transition-colors"
          >
            Send us your CV
          </a>
        </div>
      </section>
    </>
  );
}
