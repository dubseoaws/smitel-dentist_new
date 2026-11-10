"use client";

import Image from "next/image";
import { useState } from "react";
import { VideoLightbox } from "@/components/Lightbox";
import { VIDEOS, YOUTUBE_CHANNEL } from "@/lib/site-data";
import { CHANNEL_VIDEO_TITLES, SHORT_THUMB_FRAME, VERTICAL_VIDEOS } from "@/lib/treatment-videos";

function VideoTile({
  video,
  className = "relative aspect-video border border-ivory/15",
  priority = false,
  fit = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  thumbs: thumbsProp,
  vertical = false,
  compact = false,
}: {
  video: (typeof VIDEOS)[number];
  className?: string;
  priority?: boolean;
  fit?: string;
  sizes?: string;
  thumbs?: string[];
  vertical?: boolean;
  compact?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  // Not every upload has the larger thumbnails, so step down until one loads.
  const thumbs = thumbsProp ?? (priority
    ? ["maxresdefault", "sddefault", "hqdefault"]
    : ["hqdefault"]);
  const [thumbIndex, setThumbIndex] = useState(0);

  return (
    <div className={`overflow-hidden bg-ink ${className}`}>
      <VideoLightbox
        video={playing ? video : null}
        vertical={vertical}
        onClose={() => setPlaying(false)}
      />
      <button
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${video.title}`}
        className="group absolute inset-0 h-full w-full text-left"
      >
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/${thumbs[thumbIndex]}.jpg`}
          alt={video.title}
          fill
          onError={() =>
            setThumbIndex((i) => Math.min(i + 1, thumbs.length - 1))
          }
          className={`${fit} ${vertical ? "" : "opacity-90 group-hover:opacity-100"} transition-all duration-500 group-hover:scale-[1.03]`}
          sizes={sizes}
          priority={priority}
        />
        {vertical ? (
          <>
            <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className={`flex items-center justify-center rounded-full bg-gold/95 shadow-xl shadow-black/40 ring-ivory/20 transition-transform duration-300 group-hover:scale-110 ${compact ? "h-12 w-12 ring-4 lg:h-16 lg:w-16 lg:ring-8" : "h-[72px] w-[72px] ring-8"}`}>
                <svg viewBox="0 0 24 24" className={`ml-1 fill-ink ${compact ? "h-5 w-5 lg:h-6 lg:w-6" : "h-7 w-7"}`} aria-hidden>
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
            </span>
            <span className={`absolute inset-x-0 bottom-0 space-y-1.5 ${compact ? "p-3 lg:p-5" : "p-5"}`}>
              <span className={`${compact ? "max-lg:hidden" : ""} block font-label text-[10px] font-bold tracking-[0.22em] uppercase text-gold-bright`}>
                ▶ Watch the video
              </span>
              <span className={`block font-display leading-snug text-ivory ${compact ? "text-[13px] lg:text-base" : "text-base"}`}>
                {video.title}
              </span>
            </span>
          </>
        ) : (
        <>
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
        </>
        )}
      </button>
    </div>
  );
}

export function HeroVideo({ id, extraIds = [] }: { id: string; extraIds?: string[] }) {
  const titleFor = (v: string) =>
    CHANNEL_VIDEO_TITLES[v] ?? VIDEOS.find((x) => x.id === v)?.title;
  const title = titleFor(id);
  if (!title) return null;

  if (VERTICAL_VIDEOS.has(id)) {
    const shorts = [id, ...extraIds].filter((v) => VERTICAL_VIDEOS.has(v) && titleFor(v));
    const pair = shorts.length > 1;
    const frameFor = (v: string) => SHORT_THUMB_FRAME[v] ?? "oar3";
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-ink px-6 ${pair ? "pt-10 pb-10 sm:pt-24 lg:pt-28 lg:pb-14" : "py-10 sm:pt-24 lg:py-14"}`}
      >
        <Image
          src={`https://i.ytimg.com/vi/${id}/${frameFor(id)}.jpg`}
          alt=""
          fill
          aria-hidden
          className="scale-110 object-cover opacity-30 blur-3xl"
          sizes="50vw"
        />
        <span className="pointer-events-none absolute inset-4 border border-gold/40 lg:inset-6" aria-hidden />
        <div className={`relative flex justify-center ${pair ? "w-full gap-3 sm:gap-5" : ""}`}>
          {shorts.map((v) => (
            <VideoTile
              key={v}
              video={{ id: v, title: titleFor(v)! }}
              className={`relative aspect-[9/16] ring-1 ring-ivory/15 shadow-2xl shadow-black/60 ${
                pair
                  ? "w-[min(42vw,260px)] rounded-2xl lg:w-auto lg:h-[min(62vh,500px)]"
                  : "w-[min(78vw,340px)] rounded-[1.6rem] lg:w-auto lg:h-[min(76vh,620px)]"
              }`}
              sizes={pair ? "260px" : "340px"}
              priority
              thumbs={[frameFor(v), ...["oar3", "oar1", "oar2"].filter((f) => f !== frameFor(v)), "hqdefault"]}
              vertical
              compact={pair}
            />
          ))}
        </div>
      </div>
    );
  }

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
