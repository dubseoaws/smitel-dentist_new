"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
};

const NAV_BTN =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory ring-1 ring-ivory/25 backdrop-blur-md transition hover:bg-gold hover:text-ink hover:ring-gold sm:h-12 sm:w-12";

export default function Lightbox({ open, onClose, label, children, onPrev, onNext }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-xl sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory ring-1 ring-ivory/25 backdrop-blur-md transition hover:rotate-90 hover:bg-gold hover:text-ink hover:ring-gold sm:right-6 sm:top-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      {onPrev && (
        <button
          type="button"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className={`${NAV_BTN} left-2 sm:left-6`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {onNext && (
        <button
          type="button"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className={`${NAV_BTN} right-2 sm:right-6`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <div className="lightbox-panel relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}

/** YouTube player sized for the popup: portrait for Shorts, 16:9 otherwise. */
export function VideoLightbox({
  video,
  vertical = false,
  onClose,
}: {
  video: { id: string; title: string } | null;
  vertical?: boolean;
  onClose: () => void;
}) {
  return (
    <Lightbox open={Boolean(video)} onClose={onClose} label={video?.title ?? "Video"}>
      {video && (
        <figure className="flex flex-col items-center gap-4">
          <div
            className={`relative overflow-hidden bg-black shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-gold/40 ${
              vertical
                ? "aspect-[9/16] h-[min(82vh,calc((100vw-2rem)*16/9))] rounded-[1.6rem]"
                : "aspect-video w-[min(92vw,1100px,calc(78vh*16/9))] rounded-2xl"
            }`}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <figcaption className="max-w-xl text-center font-display text-base leading-snug text-ivory sm:text-lg">
            {video.title}
          </figcaption>
        </figure>
      )}
    </Lightbox>
  );
}
