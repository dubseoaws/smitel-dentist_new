"use client";

import { useState } from "react";
import { SITE, REVIEWS } from "@/lib/site-data";

const REVIEW_US_URL =
  "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWdVpISndNV2Q1TlhvMVFtSlJiRUpwV2tSdWFVRRAB!2m1!1s0x0:0x930a792197128adf!3m1!1s2@1:CAIQACodChtycF9oOkVuZHJwMWd5NXo1QmJRbEJpWkRuaUE%7C%7C";

const AVATAR_COLORS = ["#4285F4", "#0F9D58", "#AB47BC"];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.2-3.9 6.6-9.6 6.6-16.3z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.6c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.2H4.2v5.8C7.8 40.9 15.3 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28c-.4-1.3-.7-2.6-.7-4s.3-2.7.7-4v-5.8H4.2C2.8 17.1 2 20.4 2 24s.8 6.9 2.2 9.8L11.6 28z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.3 30 2 24 2 15.3 2 7.8 7.1 4.2 14.2l7.4 5.8c1.7-5.3 6.6-9.2 12.4-9.2z"
      />
    </svg>
  );
}

function Stars({ className = "text-[15px]" }: { className?: string }) {
  return (
    <span className={`text-[#FBBC05] leading-none tracking-tight ${className}`} aria-hidden>
      ★★★★★
    </span>
  );
}

function ReviewCard({
  review,
  color,
}: {
  review: { name: string; text: string };
  color: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 160;

  return (
    <article className="rounded-2xl bg-white border border-ink/8 shadow-sm shadow-ink/5 p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full text-white font-semibold text-lg"
            style={{ backgroundColor: color }}
          >
            {review.name[0].toUpperCase()}
          </span>
          <div>
            <p className="text-[15px] font-semibold leading-tight">{review.name}</p>
            <Stars className="text-[13px]" />
          </div>
        </div>
        <GoogleG />
      </div>

      <p className="text-sm text-ink-soft leading-relaxed flex-1">
        {long && !expanded ? `${review.text.slice(0, 160).trimEnd()}…` : review.text}
        {long && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1.5 font-semibold text-[#4285F4] hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      <a
        href={REVIEW_US_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold text-[#4285F4] hover:underline"
      >
        View on Google
      </a>
    </article>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-ink/6">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 mb-10">
          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl">
              What Our Patients Say
            </h2>
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl font-bold leading-none">
                {SITE.rating}
              </span>
              <div>
                <Stars className="text-lg" />
                <p className="text-sm text-ink-soft mt-0.5 flex items-center gap-1.5">
                  {SITE.reviewCount} reviews on <GoogleG className="h-4 w-4" />
                  <span className="font-semibold text-ink">Google</span>
                </p>
              </div>
            </div>
          </div>

          <a
            href={REVIEW_US_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start rounded-full bg-[#4285F4] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#3367D6] transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <GoogleG className="h-3.5 w-3.5" />
            </span>
            Review us on Google
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ReviewCard
              key={review.name}
              review={review}
              color={AVATAR_COLORS[i % AVATAR_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
