import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MembershipBanner from "@/components/MembershipBanner";
import TreatmentBlocks from "@/components/TreatmentBlocks";
import TreatmentCard from "@/components/TreatmentCard";
import {
  ALL_TREATMENTS,
  TREATMENT_CATEGORIES,
  TEAM,
  CLINICS,
  SITE,
  YASHA_FULL_BIO,
} from "@/lib/site-data";
import { TREATMENT_CONTENT } from "@/lib/treatment-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...ALL_TREATMENTS.map((t) => ({ slug: t.slug })),
    ...TEAM.map((m) => ({ slug: m.slug })),
    ...CLINICS.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = ALL_TREATMENTS.find((t) => t.slug === slug);
  if (treatment) return { title: treatment.name, description: treatment.description };
  const member = TEAM.find((m) => m.slug === slug);
  if (member) return { title: member.name, description: member.bio };
  const clinic = CLINICS.find((c) => c.slug === slug);
  if (clinic) return { title: `${clinic.name} Clinic` };
  return {};
}

export default async function DetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const treatment = ALL_TREATMENTS.find((t) => t.slug === slug);
  if (treatment) return <TreatmentDetail slug={slug} />;

  const member = TEAM.find((m) => m.slug === slug);
  if (member) return <TeamDetail slug={slug} />;

  const clinic = CLINICS.find((c) => c.slug === slug);
  if (clinic) return <ClinicDetail slug={slug} />;

  notFound();
}

function TreatmentDetail({ slug }: { slug: string }) {
  const treatment = ALL_TREATMENTS.find((t) => t.slug === slug)!;
  const category = TREATMENT_CATEGORIES.find((c) =>
    c.treatments.some((t) => t.slug === slug)
  )!;
  const related = category.treatments.filter((t) => t.slug !== slug).slice(0, 3);
  const content = TREATMENT_CONTENT[slug];

  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">{content?.kicker ?? category.title}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              {content?.h1 ?? treatment.name}
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">
              {content?.intro ?? treatment.description}
            </p>

            {content?.badges && (
              <div className="flex flex-wrap gap-3">
                {content.badges.map((badge) => (
                  <span
                    key={badge}
                    className="border border-ink/15 px-4 py-2 font-label text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-soft"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-8 border-t border-ink/10 pt-6">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-ink-soft">
                  Standard
                </p>
                <p className="font-display text-2xl">{treatment.standard}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold-deep">
                  Member&rsquo;s Price
                </p>
                <p className="font-display text-2xl text-gold-deep">{treatment.member}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="btn-primary"
              >
                Book My Appointment
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn-outline"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
          <Image
            src={content?.hero?.src ?? treatment.image}
            alt={
              content?.hero?.alt ??
              `${treatment.name} - professional dental treatment in South Kensington`
            }
            width={720}
            height={560}
            className="rounded-2xl object-cover w-full h-80 lg:h-[460px]"
            priority
          />
        </div>
      </section>

      {content && <TreatmentBlocks blocks={content.blocks} />}

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Not sure what you need?</h2>
          <p className="text-ink-soft leading-relaxed">
            Book a consultation with Dr. Yasha or one of our dentists. We will assess your
            oral health and create a bespoke treatment plan just for you.
          </p>
          <Link
            href="/booking"
            className="btn-primary"
          >
            Book Consultation: £95
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 className="text-3xl tracking-tight">More {category.title}</h2>
              <Link
                href="/treatments"
                className="text-xs font-bold tracking-widest text-gold-deep hover:underline whitespace-nowrap"
              >
                ALL TREATMENTS →
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <MembershipBanner />
    </>
  );
}

function TeamDetail({ slug }: { slug: string }) {
  const member = TEAM.find((m) => m.slug === slug)!;
  const isYasha = slug === "dr-yasha-shirazi-cosmetic-dentist";

  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                width={640}
                height={760}
                className="rounded-2xl object-cover w-full object-top"
                priority
              />
            ) : member.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                className="rounded-2xl w-full object-cover object-top"
              >
                <source
                  src={member.video
                    .replace("/upload/", "/upload/f_mp4,vc_h264/")
                    .replace(/\.webm$/, ".mp4")}
                  type="video/mp4"
                />
                <source src={member.video} type="video/webm" />
              </video>
            ) : (
              <div className="rounded-2xl bg-white border border-ink/8 h-96 flex items-center justify-center">
                <span className="font-display text-7xl text-gold/40">
                  {member.name
                    .split(" ")
                    .filter((w) => w !== "Dr.")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-3">Expert Dental Care</p>
              <h1 className="text-4xl sm:text-5xl tracking-tight">{member.name}</h1>
              <p className="text-[11px] font-bold tracking-widest text-gold-deep uppercase mt-3">
                {member.role}
              </p>
              <p className="text-sm text-ink-soft mt-1">GDC: {member.gdc}</p>
            </div>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              {isYasha ? (
                YASHA_FULL_BIO.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{member.bio}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="btn-primary"
              >
                Book My Appointment
              </Link>
              <Link
                href="/team"
                className="btn-outline"
              >
                Meet Full Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MembershipBanner />
    </>
  );
}

function ClinicDetail({ slug }: { slug: string }) {
  const clinic = CLINICS.find((c) => c.slug === slug)!;

  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Our Clinics</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            {clinic.name} Clinic
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            {clinic.address.join(", ")} — {clinic.proximity}.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white border border-ink/8 p-8 space-y-5">
            <h2 className="font-display text-2xl">How To Find Us</h2>
            <p className="text-ink-soft">{clinic.address.join(", ")}</p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                  Landmark
                </p>
                <p className="text-ink-soft">{clinic.landmark}</p>
              </div>
              <div>
                <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                  Getting Here
                </p>
                <p className="text-ink-soft">{clinic.tube}</p>
              </div>
              <div>
                <p className="font-bold text-[11px] tracking-widest uppercase text-gold-deep mb-1">
                  {clinic.slug === "south-kensington" ? "Parking" : "By Bus"}
                </p>
                <p className="text-ink-soft">{clinic.parking}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-ink/8 p-8">
            <h2 className="font-display text-2xl mb-5">Opening Hours</h2>
            <div className="space-y-2.5 text-sm">
              {clinic.hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center border-b border-ink/6 pb-2.5">
                  <span>{h.day}</span>
                  <span className="flex items-center gap-3">
                    {"note" in h && h.note && (
                      <span className="rounded-full bg-gold/15 text-gold-deep text-[10px] font-bold tracking-wider px-2.5 py-0.5">
                        {h.note}
                      </span>
                    )}
                    <span className="font-semibold">{h.time}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 flex flex-wrap gap-4">
          <Link
            href="/booking"
            className="btn-primary"
          >
            Book My Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="btn-outline"
          >
            Call {SITE.phone}
          </a>
        </div>
      </section>

      <MembershipBanner />
    </>
  );
}
