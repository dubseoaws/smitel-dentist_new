import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";
import SmileGallery from "@/components/SmileGallery";
import GoogleG from "@/components/GoogleG";
import { IMAGES, YASHA_FULL_BIO, SITE, REVIEW_US_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team dedicated to the art and science of your smile.",
};

export default function TeamPage() {
  return (
    <>
      {/* Intro */}
      <section className="grid lg:grid-cols-[1fr_1fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-14 py-16 lg:py-20 flex flex-col justify-center space-y-6">
          <p className="eyebrow">Expert Dental Care</p>
          <h1 className="display-xl text-[2rem] sm:text-4xl lg:text-[3rem] max-w-[14ch]">
            Our Experts
          </h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-md">
            Meet the team dedicated to the art and science of your smile.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/booking" className="btn-primary">
              Book My Appointment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-ink/10 bg-ink">
          <iframe
            src="https://www.youtube-nocookie.com/embed/bLtSMhb60HI?autoplay=1&mute=1&loop=1&playlist=bLtSMhb60HI&controls=0&rel=0&playsinline=1&modestbranding=1"
            title="Smile Dentist — meet the team"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>

      {/* Principal spotlight */}
      <section className="grid lg:grid-cols-[0.9fr_1.1fr] border-b border-ink/10">
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src={IMAGES.drYasha}
            alt="Dr. Yasha Y Shirazi - Principal Dentist & Clinical Director"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        <div className="bg-white px-5 sm:px-10 lg:px-14 py-16 lg:py-20 border-l border-ink/10 space-y-6">
          <p className="eyebrow">Principal Dentist</p>
          <h2 className="text-3xl sm:text-4xl">Dr. Yasha Y Shirazi</h2>
          <p className="font-label text-[11px] font-bold tracking-[0.18em] uppercase text-gold-deep">
            Principal Dentist &amp; Clinical Director
          </p>
          <div className="space-y-4 text-[15px] text-ink-soft leading-relaxed">
            {YASHA_FULL_BIO.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="flex gap-12 border-t border-ink/10 pt-6">
            <div>
              <p className="font-display text-3xl text-gold-deep">20+</p>
              <p className="font-label text-[10px] tracking-[0.16em] uppercase text-ink-soft mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-deep">195843</p>
              <p className="font-label text-[10px] tracking-[0.16em] uppercase text-ink-soft mt-1">
                GDC Number
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/dr-yasha-shirazi-cosmetic-dentist" className="btn-outline">
              View full profile
              <span aria-hidden>→</span>
            </Link>
            <Link href="/booking" className="btn-primary">
              Book My Appointment
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical team */}
      <section className="bg-white border-b border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <p className="eyebrow">Expert Dental Care</p>
              <h2 className="text-3xl sm:text-4xl">Clinical Team</h2>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                Our hand-picked team of clinicians is dedicated to the art and science of
                your smile.
              </p>
            </div>
            <Link href="/booking" className="link-underline">
              Book My Appointment <span aria-hidden>→</span>
            </Link>
          </div>

          <TeamGrid columns={4} shape="circle" />
        </div>
      </section>

      {/* Registered & regulated */}
      <section className="grid lg:grid-cols-[0.8fr_1.2fr] border-b border-ink/10">
        <div className="glow-light px-5 sm:px-10 lg:px-12 py-14 lg:py-16 space-y-5">
          <p className="eyebrow">Compliance &amp; Safety</p>
          <h2 className="text-3xl">
            Registered &amp;
            <br />
            Regulated
          </h2>
          <p className="text-[15px] text-ink-soft leading-relaxed">
            Our team are fully registered and regulated for practice in the United
            Kingdom. Our patients should expect nothing less.
          </p>
        </div>

        <div className="bg-white border-l border-ink/10 px-5 sm:px-10 lg:px-12 py-14 lg:py-16 flex flex-wrap items-center gap-x-12 gap-y-8">
          <a
            href="https://www.gdc-uk.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="General Dental Council (GDC) - UK dental regulatory body"
          >
            <Image
              src="/gdc-new.png"
              alt="General Dental Council (GDC) - UK dental regulatory body"
              width={800}
              height={406}
              className="h-14 w-auto"
            />
          </a>
          <a
            href="https://www.cqc.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Care Quality Commission (CQC) - UK healthcare regulator"
          >
            <Image
              src="/cqc-new-logo.png"
              alt="Care Quality Commission (CQC) - UK healthcare regulator"
              width={2560}
              height={819}
              className="h-10 w-auto"
            />
          </a>
          <a
            href={REVIEW_US_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <GoogleG className="h-9 w-9" />
            <span>
              <span className="block font-display text-2xl leading-none">
                {SITE.rating}
                <span className="text-[#FBBC05] ml-2 text-lg" aria-hidden>
                  ★★★★★
                </span>
              </span>
              <span className="mt-1 block font-label text-[10px] tracking-[0.18em] uppercase text-ink-soft group-hover:text-ink transition-colors">
                {SITE.reviewCount} reviews on Google
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* Careers */}
      <section className="glow-dark text-ivory px-5 sm:px-10 lg:px-12 py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <p className="eyebrow">Careers</p>
          <h2 className="text-3xl">Join Our Team</h2>
          <p className="text-sm text-ivory/60 leading-relaxed">
            We are always looking for exceptional talent to join our South Kensington
            clinic.
          </p>
        </div>
        <a href="mailto:careers@smiledentist.co.uk" className="btn-gold w-fit">
          Send us your CV
          <span aria-hidden>→</span>
        </a>
      </section>

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
    </>
  );
}
