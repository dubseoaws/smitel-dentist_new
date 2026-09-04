import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/site-data";

// Cloudinary h264 fallback for browsers without AV1 support
const mp4Of = (webm: string) =>
  webm.replace("/upload/", "/upload/f_mp4,vc_h264/").replace(/\.webm$/, ".mp4");

export default function TeamGrid({
  limit,
  columns = 3,
  shape = "card",
}: {
  limit?: number;
  columns?: 3 | 4;
  shape?: "card" | "circle";
}) {
  const members = limit ? TEAM.slice(0, limit) : TEAM;
  const initialsOf = (name: string) =>
    name
      .split(" ")
      .filter((w) => w !== "Dr.")
      .map((w) => w[0])
      .slice(0, 2)
      .join("");

  if (shape === "circle") {
    return (
      <div
        className={`grid gap-x-8 gap-y-12 grid-cols-2 ${
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/${member.slug}`}
            className="group block text-center"
          >
            <span className="relative mx-auto block aspect-square w-full max-w-[15rem] overflow-hidden rounded-full bg-cream ring-1 ring-ink/10 group-hover:ring-gold transition-all duration-300">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                  fill
                  className="object-cover object-[center_15%] group-hover:scale-[1.05] transition-transform duration-700"
                  sizes="(max-width: 640px) 45vw, 240px"
                />
              ) : member.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                  className="absolute inset-0 h-full w-full object-cover object-[center_15%] group-hover:scale-[1.05] transition-transform duration-700"
                >
                  <source src={mp4Of(member.video)} type="video/mp4" />
                  <source src={member.video} type="video/webm" />
                </video>
              ) : (
                <span className="flex h-full w-full items-center justify-center font-display text-5xl font-bold text-gold-deep/30">
                  {initialsOf(member.name)}
                </span>
              )}
            </span>
            <span className="mt-5 block font-display text-xl font-semibold group-hover:text-gold-deep transition-colors">
              {member.name}
            </span>
            <span className="mt-1.5 block font-label text-[10px] tracking-[0.18em] uppercase text-gold-deep">
              {member.role}
            </span>
            <span className="mt-1 block font-label text-[10px] tracking-[0.14em] text-ink-soft">
              GDC {member.gdc}
            </span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {members.map((member) => (
        <Link
          key={member.slug}
          href={`/${member.slug}`}
          className="group relative block overflow-hidden bg-white border border-ink/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/8 hover:border-gold/50 transition-all duration-300"
        >
          {member.image ? (
            <div className="relative aspect-[3/4] overflow-hidden bg-cream">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                fill
                className="object-cover object-[center_15%] group-hover:scale-[1.03] transition-transform duration-700"
                sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${
                  columns === 4 ? "25vw" : "33vw"
                }`}
              />
            </div>
          ) : member.video ? (
            <div className="relative aspect-[3/4] overflow-hidden bg-cream">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${member.name} - ${member.role} at Smile Dentist South Kensington`}
                className="absolute inset-0 h-full w-full object-cover object-[center_15%] group-hover:scale-[1.03] transition-transform duration-700"
              >
                <source src={mp4Of(member.video)} type="video/mp4" />
                <source src={member.video} type="video/webm" />
              </video>
            </div>
          ) : (
            <div className="aspect-[3/4] bg-cream flex items-center justify-center">
              <span className="font-display text-6xl font-bold text-gold-deep/30">
                {initialsOf(member.name)}
              </span>
            </div>
          )}

          <div className="p-6 space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                <p className="font-label text-[10px] tracking-[0.18em] uppercase text-gold-deep mt-1">
                  {member.role}
                </p>
              </div>
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-ink/15 transition-all group-hover:bg-gold group-hover:border-gold">
                ↗
              </span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">{member.bio}</p>
            <p className="font-label text-[10px] tracking-[0.14em] text-ink-soft">
              GDC {member.gdc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
