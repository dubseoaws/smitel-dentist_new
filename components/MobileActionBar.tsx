"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_TREATMENTS, SITE } from "@/lib/site-data";

const HIDDEN_ON = ["/booking", "/thank-you"];

export default function MobileActionBar() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  const treatment = ALL_TREATMENTS.find((t) => `/${t.slug}` === pathname);
  const price = treatment && /£/.test(treatment.standard) ? treatment.standard : null;

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the page */}
      <div className="h-[calc(5rem+env(safe-area-inset-bottom))] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-ivory/10 bg-ink/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-2.5 px-3 py-3">
          <a
            href={SITE.phoneHref}
            aria-label={`Call us on ${SITE.phone}`}
            className="flex min-h-14 items-center justify-center gap-2.5 border border-ivory/30 px-2 text-ivory active:bg-ivory/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gold" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.6a1 1 0 0 1-.25 1l-2.23 2.2Z" />
            </svg>
            <span className="flex flex-col items-start leading-none">
              <span className="font-label text-[11px] font-bold tracking-[0.12em] uppercase">Call Us</span>
              <span className="mt-1.5 whitespace-nowrap text-[13px] font-semibold tracking-wide text-gold">{SITE.phone}</span>
            </span>
          </a>
          <Link
            href="/booking"
            className="flex min-h-14 flex-col items-center justify-center bg-gold px-2 text-ink shadow-lg shadow-gold/20 active:bg-gold-bright"
          >
            <span className="font-label text-[13px] font-bold leading-none tracking-[0.12em] uppercase">
              Book Now
            </span>
            {price && (
              <span className="mt-1.5 whitespace-nowrap text-[13px] font-semibold leading-none">
                {price}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
