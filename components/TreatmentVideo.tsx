"use client";

import Image from "next/image";
import { useState } from "react";
import { VIDEOS, YOUTUBE_CHANNEL } from "@/lib/site-data";
import { CHANNEL_VIDEO_TITLES } from "@/lib/treatment-videos";

function VideoTile({
  video,
  className = "relative aspect-video border border-ivory/15",
  priority = false,
  fit = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  video: (typeof VIDEOS)[number];
  className?: string;
  priority?: boolean;
  fit?: string;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);
  // Not every upload has a 1280x720 thumbnail, so fall back to the standard one.
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${video.id}/${priority ? "maxresdefault" : "hqdefault"}.jpg`
  );

  return (
    <div className={`overflow-hidden bg-ink ${className}`}>
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
            src={thumb}
            alt={video.title}
            fill
            onError={() =>
              setThumb(`https://i.ytimg.com/vi/${video.id}/sddefault.jpg`)
            }
            className={`${fit} opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.03]`}
            sizes={sizes}
            priority={priority}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center border border-gold/60 bg-ink/70 transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-gold" aria-hidden>
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-0 left-0 right-0 p-6 font-display text-lg leading-snug text-ivory">
            {video.title}
          </span>
        </button>
      )}
    </div>
  );
}

export function HeroVideo({ id }: { id: string }) {
  const title =
    CHANNEL_VIDEO_TITLES[id] ?? VIDEOS.find((v) => v.id === id)?.title;
  if (!title) return null;

  return (
    <div className="relative bg-ink">
      <VideoTile
        video={{ id, title }}
        className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full lg:h-full"
        sizes="(max-width: 1024px) 100vw, 55vw"
        fit="object-contain"
        priority
      />
      <span
        className="pointer-events-none absolute inset-4 border border-gold/40 lg:inset-6"
        aria-hidden
      />
    </div>
  );
}

export default function TreatmentVideo({ ids }: { ids: string[] }) {
  const videos = VIDEOS.filter((v) => ids.includes(v.id));
  if (videos.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-ink text-ivory py-20 lg:py-28">
      <span
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 space-y-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow !text-gold before:!bg-gold">From Our Clinic</p>
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.12] text-ivory">
              Watch real stories
            </h2>
            <span className="block h-px w-16 bg-gold" aria-hidden />
            <p className="text-lg leading-relaxed text-ivory/70">
              Patient reviews, treatment explainers and behind-the-scenes from Dr. Yasha
              and the team.
            </p>
          </div>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border border-ivory/30 px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
          >
            Visit our YouTube channel →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <VideoTile key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
