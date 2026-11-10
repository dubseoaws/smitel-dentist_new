"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CLINICS } from "@/lib/site-data";
import { COL_SERVICES, HIDDEN_PROVIDERS, SK_SERVICES, type ProviderSlots } from "@/lib/booking-data";

type Availability =
  | { state: "loading" }
  | { state: "today"; time: string }
  | { state: "later"; date: string; time: string }
  | { state: "none" };

const LOOKAHEAD_DAYS = 6;

function londonNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { date: `${get("year")}-${get("month")}-${get("day")}`, time: `${get("hour")}:${get("minute")}` };
}

function addDays(date: string, days: number) {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function earliest(slots: { date: string; time: string }[]): Availability {
  const now = londonNow();
  const next = slots
    .filter((s) => s.date > now.date || (s.date === now.date && s.time > now.time))
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))[0];
  if (!next) return { state: "none" };
  return next.date === now.date
    ? { state: "today", time: next.time }
    : { state: "later", date: next.date, time: next.time };
}

async function southKensington(): Promise<Availability> {
  const service = SK_SERVICES.find((s) => s.id === "emergency")!;
  const from = londonNow().date;
  const res = await fetch("/api/booking/sk/slots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      serviceKey: service.serviceKey,
      fromDate: from,
      toDate: addDays(from, LOOKAHEAD_DAYS),
    }),
  });
  if (!res.ok) throw new Error("slots");
  const data: ProviderSlots[] = await res.json();
  return earliest(
    data
      .filter((p) => !HIDDEN_PROVIDERS.includes(p.providerKey))
      .flatMap((p) => p.slots.flatMap((d) => d.slots.map((time) => ({ date: d.date, time })))),
  );
}

async function cityOfLondon(): Promise<Availability> {
  const service = COL_SERVICES.find((s) => s.id === "emergency")!;
  const from = londonNow().date;
  const res = await fetch("/api/stpauls/slots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      appointment_type_id: service.appointmentTypeId,
      role: service.role,
      date_from: from,
      date_to: addDays(from, LOOKAHEAD_DAYS),
    }),
  });
  if (!res.ok) throw new Error("slots");
  const data: { days?: { date: string; available_slots: { start: string }[] }[] } =
    await res.json();
  return earliest(
    (data.days ?? []).flatMap((d) =>
      d.available_slots.map((s) => ({ date: d.date, time: s.start.slice(11, 16) })),
    ),
  );
}

const LOADERS: Record<string, () => Promise<Availability>> = {
  "south-kensington": southKensington,
  "city-of-london": cityOfLondon,
};

function dayLabel(date: string) {
  const now = londonNow().date;
  if (date === addDays(now, 1)) return "Tomorrow";
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

function Status({
  availability,
  dark,
  short = false,
}: {
  availability: Availability;
  dark: boolean;
  /** Drop the "Live · " / "Next · " prefix on phones. */
  short?: boolean;
}) {
  const prefix = (label: string) => <span className={short ? "max-md:hidden" : ""}>{label} · </span>;
  if (availability.state === "today") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${dark ? "text-emerald-400" : "text-emerald-700"}`}>
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {prefix("Live")}Today {availability.time}
      </span>
    );
  }
  if (availability.state === "later") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${dark ? "text-gold-bright" : "text-gold-deep"}`}>
        <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
        {prefix("Next")}{dayLabel(availability.date)} {availability.time}
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1.5 ${dark ? "text-ivory/60" : "text-ink-soft"}`}>
      <span
        className={`h-2 w-2 rounded-full ${dark ? "bg-ivory/30" : "bg-ink/30"} ${availability.state === "loading" ? "animate-pulse" : ""}`}
        aria-hidden
      />
      {availability.state === "loading" ? "Checking…" : "Call to book"}
    </span>
  );
}

export default function ClinicLiveStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const icon = dark ? "fill-gold-bright" : "fill-gold-deep";
  const [status, setStatus] = useState<Record<string, Availability>>({});

  useEffect(() => {
    let active = true;
    const load = () =>
      CLINICS.forEach((c) => {
        const loader = LOADERS[c.slug];
        if (!loader) return;
        loader()
          .catch((): Availability => ({ state: "none" }))
          .then((a) => active && setStatus((prev) => ({ ...prev, [c.slug]: a })));
      });
    load();
    const timer = window.setInterval(load, 5 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const calendar = (cls: string) => (
    <svg viewBox="0 0 24 24" className={cls} aria-hidden>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm-9.6-2.2-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
    </svg>
  );
  const pin = (cls: string) => (
    <svg viewBox="0 0 24 24" className={cls} aria-hidden>
      <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );

  if (dark) {
    const chip = (c: (typeof CLINICS)[number], align: string) => (
      <Link
        key={c.slug}
        href="/booking"
        aria-label={`Book at ${c.name}`}
        className={`group flex w-full min-w-0 items-center justify-center gap-2.5 rounded-full bg-ivory/[0.04] px-3 py-1 sm:py-1.5 xl:w-fit ring-1 ring-ivory/10 transition hover:bg-gold/10 hover:ring-gold/50 xl:px-4 ${align}`}
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 max-xl:hidden">
          {pin("h-3.5 w-3.5 fill-gold-bright")}
        </span>
        <span className="flex min-w-0 flex-col items-center gap-0.5 md:flex-row md:gap-2.5 xl:gap-3">
          <span className="inline-flex items-center gap-1.5 truncate text-ivory transition-colors group-hover:text-gold-bright">
            {pin("h-3 w-3 shrink-0 fill-gold-bright xl:hidden")}
            {c.name}
          </span>
          <span className="hidden h-3 w-px bg-ivory/20 md:block" aria-hidden />
          <span aria-live="polite" className="text-[10px] xl:text-[11px]">
            <Status availability={status[c.slug] ?? { state: "loading" }} dark short />
          </span>
        </span>
        <span className="-ml-2.5 hidden max-w-0 overflow-hidden whitespace-nowrap text-gold-bright opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:max-w-[5rem] group-hover:opacity-100 xl:inline-block" aria-hidden>
          Book →
        </span>
      </Link>
    );
    return (
      <div className="mx-auto grid max-w-7xl gap-y-1 px-3 py-1.5 sm:gap-y-1.5 sm:py-2 font-label text-[10px] font-semibold tracking-[0.12em] uppercase sm:px-8 xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-x-4 xl:text-[11px]">
        <span className="flex items-center justify-center gap-2 font-bold tracking-[0.22em] text-gold-bright xl:order-2 xl:rounded-full xl:bg-gold/10 xl:px-4 xl:py-2 xl:ring-1 xl:ring-gold/40">
          {calendar("h-3.5 w-3.5 fill-gold-bright")}
          Open 7 Days a Week
        </span>
        <div className="grid grid-cols-2 gap-2 xl:contents">
          {CLINICS[0] && chip(CLINICS[0], "xl:order-1 xl:justify-self-start")}
          {CLINICS[1] && chip(CLINICS[1], "xl:order-3 xl:justify-self-end")}
        </div>
      </div>
    );
  }

  const clinic = (c: (typeof CLINICS)[number], align: string) => (
    <Link
      key={c.slug}
      href="/booking"
      aria-label={`Book at ${c.name}`}
      className={`group inline-flex items-center gap-2 whitespace-nowrap ${align}`}
    >
      <svg viewBox="0 0 24 24" className={`h-4 w-4 ${icon}`} aria-hidden>
        <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
      <span className={`transition-colors ${dark ? "text-ivory group-hover:text-gold-bright" : "text-ink group-hover:text-gold-deep"}`}>{c.name}</span>
      <span aria-live="polite">
        <Status availability={status[c.slug] ?? { state: "loading" }} dark={dark} />
      </span>
    </Link>
  );

  return (
    <div className="grid grid-cols-1 items-center justify-items-center gap-y-2 font-label text-[11px] font-semibold tracking-[0.12em] uppercase sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-[1fr_auto_1fr]">
      {CLINICS[0] && clinic(CLINICS[0], "order-2 sm:justify-self-start lg:order-none")}
      <span className={`inline-flex items-center gap-2 order-1 whitespace-nowrap font-bold tracking-[0.2em] ${dark ? "text-ivory" : "text-ink"} sm:col-span-2 lg:order-none lg:col-span-1`}>
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${icon}`} aria-hidden>
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm-9.6-2.2-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
        </svg>
        Open 7 Days a Week
      </span>
      {CLINICS[1] && clinic(CLINICS[1], "order-3 sm:justify-self-end lg:order-none")}
    </div>
  );
}
