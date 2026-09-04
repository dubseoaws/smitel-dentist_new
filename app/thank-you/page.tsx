import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site-data";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your appointment is confirmed, we're looking forward to welcoming you to the clinic.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ivory lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="eyebrow mb-4 text-gold">Appointment Confirmed</p>
          <h1 className="display-xl text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem]">
            Thank you for your booking
          </h1>
          <span className="mt-6 block h-px w-24 bg-gold" />
          <p className="mt-6 text-ivory/75 leading-relaxed">
            Your appointment is confirmed, we&apos;re looking forward to welcoming you
            to the clinic.
          </p>
          <p className="mt-4 text-ivory/75 leading-relaxed">
            You&apos;ll receive all the details shortly, and our team will be on hand to
            ensure everything runs smoothly on the day.
          </p>
        </div>
      </section>

      <section className="glow-light py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <div className="border border-ink/12 bg-white p-7">
            <p className="eyebrow mb-3">What happens next?</p>
            <p className="text-ink-soft leading-relaxed">
              Check your email for confirmation details and a medical questionnaire to
              complete before your visit.
            </p>
          </div>

          <div className="border border-ink/12 bg-white p-7">
            <p className="eyebrow mb-3">Find us</p>
            <p className="text-ink-soft leading-relaxed">
              20 Old Brompton Road, South Kensington, SW7 3DL — 2 mins from South
              Kensington Tube.
            </p>
          </div>

          <div>
            <p className="text-ink-soft leading-relaxed">
              If your appointment is urgent or you need to make a change, please
              don&apos;t hesitate to call us — we&apos;re always happy to help.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={SITE.phoneHref} className="btn-primary">
                {SITE.phone}
              </a>
              <Link href="/" className="btn-outline">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
