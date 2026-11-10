import Image from "next/image";
import GoogleG from "@/components/GoogleG";
import { SITE } from "@/lib/site-data";

const LABEL =
  "text-center font-label text-[9px] sm:text-[10px] leading-tight tracking-[0.1em] sm:tracking-[0.14em] uppercase text-ink-soft";

export function GoogleReviewBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="#reviews"
      aria-label={`Rated ${SITE.rating} from ${SITE.reviewCount} Google reviews`}
      className={`inline-flex items-center gap-3 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-xl shadow-black/40 ring-1 ring-black/5 backdrop-blur transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <GoogleG className="h-7 w-7 shrink-0" />
      <span className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5">
          <span className="font-display text-lg leading-none text-ink">{SITE.rating}</span>
          <span className="text-[12px] leading-none tracking-tight text-[#FBBC05]" aria-hidden>
            ★★★★★
          </span>
        </span>
        <span className="font-label text-[9px] font-semibold leading-tight tracking-[0.14em] uppercase text-ink-soft">
          {SITE.reviewCount} Google Reviews
        </span>
      </span>
    </a>
  );
}

function GoogleCard({ className = "" }: { className?: string }) {
  return (
    <a
      href="#reviews"
      aria-label={`Rated ${SITE.rating} from ${SITE.reviewCount} Google reviews`}
      className={`flex flex-col items-center justify-center gap-1 bg-white px-2 py-3 transition-colors hover:bg-cream ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <GoogleG className="h-5 w-5" />
        <span className="font-display text-lg sm:text-xl leading-none text-ink">
          {SITE.rating}
        </span>
      </span>
      <span className="text-[11px] leading-none tracking-tight text-[#FBBC05]" aria-hidden>
        ★★★★★
      </span>
      <span className={LABEL}>{SITE.reviewCount} Google Reviews</span>
    </a>
  );
}

export default function TrustBadges({
  className = "",
  reviews = true,
}: {
  className?: string;
  /** "mobile" shows the Google card (before CQC) on phones only. */
  reviews?: boolean | "mobile";
}) {
  return (
    <div
      className={`grid ${reviews === "mobile" ? "grid-cols-3 sm:grid-cols-2" : reviews ? "grid-cols-3" : "grid-cols-2"} gap-px overflow-hidden border border-ink/10 bg-ink/10 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.6)] ${className}`}
    >
      <a
        href="https://www.gdc-uk.org/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="General Dental Council (GDC) registered"
        className="flex flex-col items-center justify-center gap-1.5 bg-white px-2 py-3 transition-colors hover:bg-cream"
      >
        <Image
          src="/gdc-new.png"
          alt="General Dental Council (GDC)"
          width={800}
          height={406}
          className="h-10 sm:h-12 w-auto max-w-full object-contain"
        />
        <span className={LABEL}>GDC Registered</span>
      </a>
      {reviews === "mobile" && <GoogleCard className="sm:hidden" />}
      <a
        href="https://www.cqc.org.uk/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Care Quality Commission (CQC) regulated"
        className="flex flex-col items-center justify-center gap-1.5 bg-white px-2 py-3 transition-colors hover:bg-cream"
      >
        <Image
          src="/cqc-new-logo.png"
          alt="Care Quality Commission (CQC)"
          width={2560}
          height={819}
          className="my-1 h-6 sm:h-7 w-auto max-w-full object-contain"
        />
        <span className={LABEL}>CQC Regulated</span>
      </a>
      {reviews === true && <GoogleCard />}
    </div>
  );
}
