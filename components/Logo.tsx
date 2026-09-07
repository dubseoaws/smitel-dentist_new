export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden>
      <path
        d="M29.8 8.5c-3 0-4.6 1.8-7.6 1.8s-4.6-1.8-7.6-1.8c-4.1 0-7.3 3.2-7.3 7.3 0 5.7 3 7.8 4 13.7.5 3 1.5 5.3 3.5 5.3 2.6 0 2.1-4.7 5.6-4.7s3 4.7 5.6 4.7c2 0 3-2.3 3.5-5.3 1-5.9 4-8 4-13.7 0-4.1-3.2-7.3-7.3-7.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M22 14.5v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 text-gold" />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.15rem] tracking-[0.28em] uppercase ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          Smile
        </span>
        <span
          className={`block font-display text-[0.95rem] tracking-[0.34em] uppercase mt-1.5 ${
            light ? "text-ivory/80" : "text-ink/70"
          }`}
        >
          Dentist
        </span>
      </span>
    </span>
  );
}
