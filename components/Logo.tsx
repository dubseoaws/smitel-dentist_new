export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="sd-grad" x1="0" y1="0" x2="44" y2="44">
          <stop offset="0%" stopColor="#1B3A63" />
          <stop offset="100%" stopColor="#0C2340" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="22" fill="url(#sd-grad)" />
      {/* Tooth glyph */}
      <path
        d="M28.6 10.5c-2.6 0-4 1.6-6.6 1.6s-4-1.6-6.6-1.6c-3.6 0-6.4 2.8-6.4 6.4 0 5 2.6 6.8 3.5 12 .4 2.6 1.3 4.6 3.1 4.6 2.3 0 1.8-4.1 4.9-4.1s2.6 4.1 4.9 4.1c1.8 0 2.7-2 3.1-4.6.9-5.2 3.5-7 3.5-12 0-3.6-2.8-6.4-6.4-6.4z"
        fill="#fff"
      />
      {/* Sparkle */}
      <path
        d="M33.2 6.2l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3z"
        fill="#C9A24E"
      />
    </svg>
  );
}

export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-[0.06em] uppercase ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          Smile Dentist
        </span>
        <span
          className={`block font-label text-[8.5px] font-semibold tracking-[0.32em] uppercase mt-1 ${
            light ? "text-gold" : "text-gold-deep"
          }`}
        >
          Cosmetic Dentistry
        </span>
      </span>
    </span>
  );
}
