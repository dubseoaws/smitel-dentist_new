import Image from "next/image";
import Link from "next/link";
import { treatmentHref, type Treatment } from "@/lib/site-data";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={treatmentHref(treatment)}
      className="group relative flex h-full flex-col bg-white border border-ink/10 p-3 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/8 hover:border-gold/60 transition-all duration-300"
    >
      <div className="relative h-56 shrink-0 overflow-hidden">
        <Image
          src={treatment.image}
          alt={`${treatment.name} - dental treatment at Smile Dentist South Kensington`}
          fill
          className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-snug line-clamp-2 min-h-[3.5rem]">{treatment.name}</h3>
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-ink/15 text-ink transition-all group-hover:bg-gold group-hover:border-gold">
            ↗
          </span>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed line-clamp-2 min-h-[2.75rem]">
          {treatment.description}
        </p>
        <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-ink/10 pt-3">
          <span className="font-label text-[10px] tracking-[0.16em] uppercase text-ink-soft">
            Standard
          </span>
          {treatment.standard === "POA" ? (
            <span className="whitespace-nowrap font-display text-2xl text-ink">On request</span>
          ) : (
            <span className="font-display text-2xl text-ink">{treatment.standard}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
