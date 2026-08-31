"use client";

import Image from "next/image";
import { useState } from "react";
import { VIDEOS, YOUTUBE_CHANNEL } from "@/lib/site-data";

function PlayButton({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-ivory/95 shadow-xl shadow-ink/20 transition-transform group-hover:scale-110 ${
        large ? "h-20 w-20" : "h-14 w-14"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={large ? "h-8 w-8 ml-1" : "h-5 w-5 ml-0.5"}
        fill="#1D5FD0"
        aria-hidden
      >
        <path d="M8 5.5v13l11-6.5-11-6.5z" />
      </svg>
    </span>
  );
}

function VideoTile({
  video,
  featured = false,
}: {
  video: (typeof VIDEOS)[number];
  featured?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative rounded-[1.6rem] overflow-hidden bg-ink ${
        featured ? "aspect-video" : "aspect-video"
      }`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title}`}
          className="group absolute inset-0 h-full w-full text-left"
        >
          <Image
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 640px) 100vw, 30vw"}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <PlayButton large={featured} />
          </span>
          <span
            className={`absolute bottom-0 left-0 right-0 p-5 text-ivory font-display font-bold leading-snug ${
              featured ? "text-lg sm:text-2xl sm:p-7" : "text-sm line-clamp-2"
            }`}
          >
            {video.title}
          </span>
        </button>
      )}
    </div>
  );
}

export default function VideoSection() {
  const [featured, ...rest] = VIDEOS;

  return (
    <section className="glow-dark text-ivory">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow !text-gold before:!bg-gold">From Our Clinic</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Watch real stories<span className="text-gold">.</span>
            </h2>
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

        <div className="grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <VideoTile video={featured} featured />
          </div>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {rest.slice(0, 2).map((video) => (
              <VideoTile key={video.id} video={video} />
            ))}
          </div>
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-3">
            {rest.slice(2).map((video) => (
              <VideoTile key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
