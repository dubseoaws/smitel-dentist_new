"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Lightbox from "@/components/Lightbox";
import type { SmileCase } from "@/lib/smile-gallery";

export default function SmileGalleryGrid({
  cases,
  gridClassName,
  compactMobile = false,
}: {
  cases: SmileCase[];
  gridClassName: string;
  /** Hide cards beyond the sixth on phones. */
  compactMobile?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + cases.length) % cases.length)),
    [cases.length]
  );
  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);
  const current = active === null ? null : cases[active];

  return (
    <>
      <div className={`grid gap-5 lg:gap-6 ${gridClassName}`}>
        {cases.map((c, i) => (
          <article
            key={c.before}
            className={`group bg-white border border-ink/10 p-2.5 shadow-[0_20px_40px_-30px_rgba(27,24,21,0.35)] transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(27,24,21,0.45)] ${compactMobile && i >= 6 ? "max-sm:hidden" : ""}`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View ${c.category} before and after`}
              className="relative grid w-full grid-cols-2 gap-2 text-left"
            >
              {(["before", "after"] as const).map((side) => (
                <figure key={side} className="relative aspect-square overflow-hidden">
                  <Image
                    src={c[side]}
                    alt={`${side === "before" ? "Before" : "After"} ${c.category} at Smile Dentist London`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  />
                  <figcaption
                    className={`absolute bottom-2 left-2 font-label text-[9px] font-bold tracking-[0.18em] px-2.5 py-1 ${
                      side === "before" ? "bg-ink/85 backdrop-blur text-ivory" : "bg-gold text-ink"
                    }`}
                  >
                    {side.toUpperCase()}
                  </figcaption>
                </figure>
              ))}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/90 text-ink shadow-xl backdrop-blur">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </button>
            <div className="px-2 pt-3.5 pb-2 space-y-1.5">
              <h3 className="font-display text-lg font-semibold">{c.category}</h3>
              {c.caption ? (
                <p className="text-[13px] text-ink-soft leading-relaxed line-clamp-2">{c.caption}</p>
              ) : null}
              <p className="font-label text-[10px] font-bold tracking-[0.16em] uppercase text-gold-deep">
                {c.dentist}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        open={current !== null}
        onClose={close}
        label={current ? `${current.category} before and after` : "Smile gallery"}
        onPrev={cases.length > 1 ? prev : undefined}
        onNext={cases.length > 1 ? next : undefined}
      >
        {current && (
          <figure
            key={current.before}
            className="w-[min(86vw,1000px)] overflow-hidden rounded-2xl bg-ink ring-1 ring-gold/40 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
          >
            <div className="grid grid-cols-1 gap-1 bg-ink sm:grid-cols-2">
              {(["before", "after"] as const).map((side) => (
                <div key={side} className="relative aspect-[4/3] max-h-[34vh] w-full sm:aspect-square sm:max-h-[66vh]">
                  <Image
                    src={current[side]}
                    alt={`${side === "before" ? "Before" : "After"} ${current.category} at Smile Dentist London`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 86vw, 500px"
                  />
                  <span
                    className={`absolute left-3 top-3 font-label text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 ${
                      side === "before" ? "bg-ink/80 backdrop-blur text-ivory" : "bg-gold text-ink"
                    }`}
                  >
                    {side.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            <figcaption className="flex flex-col gap-1.5 px-5 py-4 text-ivory sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-5">
              <span className="space-y-1">
                <span className="block font-display text-xl sm:text-2xl">{current.category}</span>
                {current.caption && (
                  <span className="block text-[13px] leading-relaxed text-ivory/65">{current.caption}</span>
                )}
              </span>
              <span className="shrink-0 font-label text-[10px] font-bold tracking-[0.18em] uppercase text-gold-bright">
                {current.dentist} · {active! + 1} / {cases.length}
              </span>
            </figcaption>
          </figure>
        )}
      </Lightbox>
    </>
  );
}
