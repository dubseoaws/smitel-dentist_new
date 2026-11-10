"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import GoogleG from "@/components/GoogleG";
import { SITE } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroMedia({
  id,
  title,
  speaker,
  duration,
}: {
  id: string;
  title: string;
  speaker: string;
  duration: string;
}) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const poster = `https://i.ytimg.com/vi/${id}/maxres2.jpg`;

  // Talk to the muted preview through the YouTube postMessage API so we can
  // reveal it only once playing (after YouTube's title overlay fades) and loop
  // it without reloading, which would bring the overlay back.
  useEffect(() => {
    let revealTimer: ReturnType<typeof setTimeout> | undefined;
    const send = (func: string, args: unknown[] = []) =>
      frame.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      let data: { event?: string; info?: { playerState?: number } };
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      const state = data?.info?.playerState;
      if (state === 1 && !revealTimer) {
        send("unloadModule", ["captions"]);
        revealTimer = setTimeout(() => setReady(true), 5000);
      }
      if (state === 0) {
        send("seekTo", [0, true]);
        send("playVideo");
      }
    };
    window.addEventListener("message", onMessage);
    const hello = setInterval(() => {
      frame.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: "hero-preview" }),
        "*"
      );
    }, 500);
    const fallback = setTimeout(() => setReady(true), 9000);
    return () => {
      window.removeEventListener("message", onMessage);
      clearInterval(hello);
      clearTimeout(fallback);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const preview = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1&disablekb=1&iv_load_policy=3&cc_load_policy=0&fs=0&enablejsapi=1`;

  return (
    <div className="relative px-5 sm:px-10 lg:px-0 lg:pl-8 pb-12 sm:pb-14 lg:pt-14 lg:pb-0 lg:pr-10">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.25 }}
        className="relative"
      >
        {/* Offset gold frame */}
        <div
          aria-hidden
          className="absolute -right-3 -bottom-3 sm:-right-5 sm:-bottom-5 h-full w-full border border-gold/50"
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Play video: ${title}`}
          className="group relative block aspect-video w-full overflow-hidden bg-ink text-left shadow-[0_40px_80px_-30px_rgba(27,24,21,0.55)] focus-visible:outline-offset-4"
        >
          <Image
            src={poster}
            alt=""
            fill
            priority
            className="origin-top scale-125 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.3]"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />

          <iframe
            ref={frame}
            src={preview}
            title={`${title} (muted preview)`}
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
            aria-hidden
            className={`pointer-events-none absolute left-[-12.5%] top-0 h-[125%] w-[125%] origin-top border-0 group-hover:scale-[1.04] ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            // Cropped from the top so the video's burned-in subtitles sit below the frame
            style={{ transition: "opacity 1s ease, transform 1.2s ease-out" }}
          />

          {/* Legibility gradients */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,24,21,0.94)_0%,rgba(27,24,21,0.6)_26%,rgba(27,24,21,0)_58%),linear-gradient(to_bottom,rgba(27,24,21,0.35),rgba(27,24,21,0)_22%)]" />

          {/* Top: preview indicator */}
          <div className="absolute right-3 top-3 sm:right-5 sm:top-5 flex items-center gap-2 rounded-full bg-ink/55 px-3 py-1.5 backdrop-blur-md">
            <span className="flex h-3 items-end gap-[2px]" aria-hidden>
              {[0, 0.2, 0.4].map((d) => (
                <span
                  key={d}
                  className="eq-bar w-[3px] bg-gold-bright"
                  style={{ animationDelay: `${d}s` }}
                />
              ))}
            </span>
            <span className="font-label text-[10px] font-semibold tracking-[0.18em] uppercase text-ivory/90">
              Now playing
            </span>
          </div>

          {/* Bottom bar: play + caption */}
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 sm:gap-4 p-3.5 sm:p-6">
            <span className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center">
              <span className="pulse-ring absolute inset-0 rounded-full border border-gold-bright/80" />
              <span
                className="pulse-ring absolute inset-0 rounded-full border border-gold-bright/50"
                style={{ animationDelay: "1.2s" }}
              />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gold shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-ivory">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 translate-x-0.5 fill-ink"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </span>
            <span className="min-w-0">
              <span className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-bright">
                {speaker}
              </span>
              <span className="mt-0.5 font-display text-[15px] sm:text-xl leading-snug text-ivory line-clamp-2">
                {title.split("|")[0].trim()}
              </span>
              <span className="mt-1 hidden sm:flex items-center gap-2 font-label text-[10px] tracking-[0.18em] uppercase text-ivory/60 transition-colors group-hover:text-ivory">
                Watch with sound <span aria-hidden className="h-px w-4 bg-current" /> {duration}
              </span>
            </span>
          </div>
        </button>

        {/* Floating: Google rating */}
        <motion.a
          href="#reviews"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="float-soft absolute -top-7 left-6 lg:-left-8 hidden sm:flex items-center gap-3 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(27,24,21,0.45)] ring-1 ring-ink/5"
        >
          <GoogleG className="h-7 w-7" />
          <span>
            <span className="flex items-center gap-1.5 font-display text-lg leading-none text-ink">
              {SITE.rating}
              <span className="text-[13px] tracking-tight text-[#FBBC05]" aria-hidden>
                ★★★★★
              </span>
            </span>
            <span className="mt-1 block font-label text-[10px] tracking-[0.14em] uppercase text-ink-soft">
              {SITE.reviewCount} Google reviews
            </span>
          </span>
        </motion.a>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="min-w-0 truncate font-display text-base sm:text-xl text-ivory">
                  {title}
                </p>
                <button
                  type="button"
                  onClick={close}
                  autoFocus
                  aria-label="Close video"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-gold hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl ring-1 ring-gold/30">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ivory/10 pt-5">
                <p className="text-center sm:text-left text-[15px] text-ivory/70">
                  Like what you see? Plan your new smile with our cosmetic team.
                </p>
                <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
                  <Link href="/booking" className="btn-gold" onClick={close}>
                    Book a Consultation <span aria-hidden>→</span>
                  </Link>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center justify-center border border-ivory/30 px-6 py-3 font-label text-[11px] font-semibold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
