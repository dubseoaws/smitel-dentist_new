"use client";

import Image from "next/image";
import { useState } from "react";
import { VideoLightbox } from "@/components/Lightbox";
import { STORY_SHORTS, YOUTUBE_CHANNEL } from "@/lib/site-data";

function PlayButton() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/95 shadow-xl shadow-ink/30 transition-transform duration-300 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="#0C2340" aria-hidden>
        <path d="M8 5.5v13l11-6.5-11-6.5z" />
      </svg>
    </span>
  );
}

export default function VideoSection() {
  const [playing, setPlaying] = useState<string | null>(null);
  // Fall back to the standard thumbnail if the vertical one is unavailable.
  const [fallback, setFallback] = useState<Record<string, boolean>>({});

  return (
    <section className="glow-dark text-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8 lg:mb-10">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow !text-gold before:!bg-gold">From Our Clinic</p>
            <h2 className="font-display text-4xl sm:text-5xl">Watch real stories</h2>
            <p className="text-ivory/60 leading-relaxed">
              Patient reviews, treatment explainers and behind-the-scenes from Dr. Yasha
              and the team.
            </p>
          </div>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold hover:border-gold hover:text-gold transition-colors whitespace-nowrap self-start lg:self-auto"
          >
            Visit our YouTube channel →
          </a>
        </div>

        {/* Swipeable on phones and tablets, 5-up grid on desktop */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none]">
          {STORY_SHORTS.map((video) => {
            return (
              <li
                key={video.id}
                className="relative aspect-[9/16] w-[68%] shrink-0 snap-center sm:w-[38%] lg:w-auto overflow-hidden rounded-[1.4rem] bg-ink ring-1 ring-ivory/10 shadow-2xl shadow-black/40"
              >
                  <button
                    onClick={() => setPlaying(video.id)}
                    aria-label={`Play video: ${video.title}`}
                    className="group absolute inset-0 h-full w-full text-left"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/${fallback[video.id] ? "hqdefault" : "oar2"}.jpg`}
                      alt={video.title}
                      fill
                      onError={() => setFallback((f) => ({ ...f, [video.id]: true }))}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 68vw, (max-width: 1024px) 38vw, 220px"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/20" />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/60 px-3 py-1 font-label text-[9.5px] font-bold tracking-[0.16em] uppercase text-gold backdrop-blur">
                      {video.tag}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <PlayButton />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 p-4 font-display text-base leading-snug text-ivory line-clamp-3">
                      {video.title}
                    </span>
                  </button>
              </li>
            );
          })}
        </ul>
        <VideoLightbox
          video={STORY_SHORTS.find((v) => v.id === playing) ?? null}
          vertical
          onClose={() => setPlaying(null)}
        />
      </div>
    </section>
  );
}
