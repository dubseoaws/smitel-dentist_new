import GoogleG from "@/components/GoogleG";
import { SITE, REVIEWS, REVIEW_US_URL } from "@/lib/site-data";

function Stars({ className = "text-[15px]" }: { className?: string }) {
  return (
    <span className={`text-[#FBBC05] leading-none tracking-tight ${className}`} aria-hidden>
      ★★★★★
    </span>
  );
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
      <path
        fill="#1a73e8"
        d="M12 1.5l2.4 1.8 3-.3 1 2.9 2.6 1.6-1.1 2.8 1.1 2.8-2.6 1.6-1 2.9-3-.3-2.4 1.8-2.4-1.8-3 .3-1-2.9L3 13.1l1.1-2.8L3 7.5l2.6-1.6 1-2.9 3 .3z"
      />
      <path fill="#fff" d="M10.8 15.2l-3-3 1.3-1.3 1.7 1.7 4-4 1.3 1.3z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <article className="w-[80vw] sm:w-[46vw] lg:w-[30vw] max-w-[420px] shrink-0 bg-white border border-ink/10 p-7 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="relative shrink-0">
          {/* Google-hosted avatar: served straight from Google's CDN */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.avatar}
            alt=""
            referrerPolicy="no-referrer"
            className="h-12 w-12 rounded-full object-cover bg-cream"
          />
          <GoogleG className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white p-[1px]" />
        </span>
        <span className="min-w-0">
          <span className="flex items-center gap-2">
            <span className="font-label text-[13px] font-semibold text-ink truncate">
              {review.name}
            </span>
            <VerifiedBadge />
          </span>
          <span className="block text-[12px] text-ink-soft">{review.date}</span>
        </span>
      </div>

      <Stars className="text-lg" />

      <p className="text-[14px] leading-relaxed text-ink-soft line-clamp-3">{review.text}</p>

      <a
        href={REVIEW_US_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto font-label text-[12px] text-[#1a73e8] hover:underline"
      >
        Read more
      </a>
    </article>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-cream border-y border-ink/10 py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 flex flex-wrap items-end justify-between gap-8">
        <div className="space-y-2">
          <p className="eyebrow">What Our Patients Say</p>
          <div className="flex items-end gap-4">
            <p className="font-display text-4xl leading-none">{SITE.rating}</p>
            <div className="space-y-1 pb-0.5">
              <Stars className="text-base" />
              <p className="font-label text-[10px] tracking-[0.2em] uppercase text-ink-soft">
                {SITE.reviewCount} reviews on Google
              </p>
            </div>
          </div>
        </div>

        <a
          href={REVIEW_US_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 font-label text-[10px] tracking-[0.18em] uppercase text-ink-soft hover:text-ink transition-colors"
        >
          <GoogleG className="h-9 w-9" />
          Review us on Google
        </a>
      </div>

      <div className="marquee mt-10">
        <div className="marquee-track gap-6" style={{ animationDuration: "80s" }}>
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
