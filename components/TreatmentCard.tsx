import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/lib/site-data";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={`/${treatment.slug}`}
      className="group relative block bg-white border border-ink/10 p-3 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/8 hover:border-gold/60 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={treatment.image}
          alt={`${treatment.name} - dental treatment at Smile Dentist South Kensington`}
          fill
          className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 right-3 flex items-baseline gap-1.5 bg-ink/85 backdrop-blur px-3.5 py-2 text-gold">
          <span className="font-label text-[10px] font-bold tracking-[0.14em]">MEMBER</span>
          <span className="font-display text-lg font-semibold leading-none">
            {treatment.member}
          </span>
        </span>
      </div>

      <div className="px-4 pt-5 pb-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-snug">{treatment.name}</h3>
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-ink/15 text-ink transition-all group-hover:bg-gold group-hover:border-gold">
            ↗
          </span>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">
          {treatment.description}
        </p>
        <div className="flex items-baseline justify-between gap-3 border-t border-ink/10 pt-3">
          <span className="font-label text-[11px] tracking-[0.12em] uppercase text-ink-soft">
            Standard <span className="text-ink font-display text-base font-semibold">{treatment.standard}</span>
          </span>
          <span className="font-display text-2xl font-semibold text-gold-deep">
            {treatment.member}
          </span>
        </div>
      </div>
    </Link>
  );
}
