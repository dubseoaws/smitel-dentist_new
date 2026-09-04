"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CLINICS, SITE } from "@/lib/site-data";
import {
  COL_SERVICES,
  SK_SERVICES,
  SK_TO_COL_SERVICE,
  filterProviders,
  providerName,
  weekendBlocked,
  type ColService,
  type ProviderSlots,
  type SkService,
} from "@/lib/booking-data";

type Clinic = "sk" | "col";
type SkSlot = { date: string; time: string; providerKey: string };
type ColSlot = { start: string; end: string; clinician_ids: string[] };
type ColDay = { date: string; available_slots: ColSlot[] };

const CLINIC_LABEL: Record<Clinic, string> = {
  sk: "South Kensington",
  col: "City of London",
};

function londonToday() {
  return new Date(
    `${new Date().toLocaleDateString("en-CA", { timeZone: "Europe/London" })}T00:00:00`,
  );
}

function iso(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
}

function toDmy(value: string) {
  const [y, m, d] = value.split("-");
  return `${d}-${m}-${y}`;
}

function longDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function PriceLabel({ label }: { label: string }) {
  if (label === "FREE")
    return (
      <span className="font-label text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
        FREE
      </span>
    );
  const match = label.match(/^(.*?)\s*\(was\s*(£[\d.]+)\)$/);
  if (!match)
    return <span className="text-sm font-medium text-ink">{label}</span>;
  return (
    <span className="text-sm font-medium text-ink">
      {match[1]}{" "}
      <span className="text-ink-soft/70 line-through">{match[2]}</span>
    </span>
  );
}

function ServiceButton({
  name,
  priceLabel,
  tag,
  note,
  duration,
  active,
  onClick,
}: {
  name: string;
  priceLabel: string;
  tag?: string;
  note?: string;
  duration: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full border px-5 py-5 text-left transition-colors ${
        active
          ? "border-gold bg-cream"
          : "border-ink/12 bg-white hover:border-gold/60"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg text-ink">{name}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <PriceLabel label={priceLabel} />
            <span className="font-label text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              {duration} min
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              No deposit
            </span>
          </div>
        </div>
        {tag && (
          <span className="bg-gold px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
            {tag}
          </span>
        )}
      </div>
      {note && <p className="mt-3 text-xs leading-relaxed text-ink-soft">{note}</p>}
    </button>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block text-ink">
        {label} <span className="text-gold-deep">*</span>
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold";

export default function BookingFlow({
  preSelectedCategory,
}: {
  preSelectedCategory?: string;
}) {
  const router = useRouter();

  const [service, setService] = useState<SkService | null>(null);
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [step, setStep] = useState(1);

  const [providers, setProviders] = useState<ProviderSlots[]>([]);
  const [mode, setMode] = useState<"fastest" | "dentist">("fastest");
  const [provider, setProvider] = useState<string | null>(null);
  const [skDate, setSkDate] = useState<string | null>(null);
  const [skSlot, setSkSlot] = useState<SkSlot | null>(null);

  const [colService, setColService] = useState<ColService | null>(null);
  const [colDays, setColDays] = useState<ColDay[]>([]);
  const [colDate, setColDate] = useState<string | null>(null);
  const [colSlot, setColSlot] = useState<ColSlot | null>(null);

  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
  });
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const goStep = useCallback((next: number) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!preSelectedCategory) return;
    const match = SK_SERVICES.find((s) => s.category === preSelectedCategory);
    if (match) setService(match);
  }, [preSelectedCategory]);

  useEffect(() => {
    if (step > 1 && step < 4) {
      const handler = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = "";
      };
      window.addEventListener("beforeunload", handler);
      return () => window.removeEventListener("beforeunload", handler);
    }
  }, [step]);

  const loadSkSlots = useCallback(async (chosen: SkService) => {
    setSlotsLoading(true);
    setSlotsError(null);
    const from = londonToday();
    const to = new Date(from);
    to.setDate(to.getDate() + 30);
    try {
      const res = await fetch("/api/booking/sk/slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceKey: chosen.serviceKey,
          fromDate: iso(from),
          toDate: iso(to),
        }),
      });
      if (!res.ok) throw new Error("slots");
      const data: ProviderSlots[] = await res.json();
      setProviders(filterProviders(data, chosen.id));
    } catch {
      setSlotsError("Unable to load available times. Please try again.");
    } finally {
      setSlotsLoading(false);
    }
  }, []);

  const loadColSlots = useCallback(async (chosen: ColService) => {
    setSlotsLoading(true);
    setSlotsError(null);
    setColDays([]);
    const base = londonToday();
    try {
      const ranges: [number, number][] = [
        [0, 13],
        [14, 27],
      ];
      const results = await Promise.all(
        ranges.map(async ([offsetFrom, offsetTo]) => {
          const from = new Date(base);
          from.setDate(from.getDate() + offsetFrom);
          const to = new Date(base);
          to.setDate(to.getDate() + offsetTo);
          const res = await fetch("/api/stpauls/slots", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              appointment_type_id: chosen.appointmentTypeId,
              role: chosen.role,
              date_from: iso(from),
              date_to: iso(to),
            }),
          });
          if (!res.ok) throw new Error("slots");
          return ((await res.json()).days ?? []) as ColDay[];
        }),
      );
      setColDays(results.flat());
    } catch {
      setSlotsError("Unable to load available times. Please try again.");
    } finally {
      setSlotsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (clinic === "sk" && service && step === 2) loadSkSlots(service);
  }, [clinic, service, step, loadSkSlots]);

  useEffect(() => {
    if (clinic === "col" && colService && step === 2) loadColSlots(colService);
  }, [clinic, colService, step, loadColSlots]);

  const skSlotsByDate = useMemo(() => {
    const map = new Map<string, SkSlot[]>();
    if (!service) return map;
    const source =
      mode === "dentist" && provider
        ? providers.filter((p) => p.providerKey === provider)
        : providers;
    source.forEach((p) =>
      p.slots.forEach((d) => {
        if (!d.slots.length || weekendBlocked(service.id, d.date)) return;
        const list = map.get(d.date) ?? [];
        d.slots.forEach((time) => {
          if (!list.some((s) => s.time === time))
            list.push({ date: d.date, time, providerKey: p.providerKey });
        });
        list.sort((a, b) => a.time.localeCompare(b.time));
        map.set(d.date, list);
      }),
    );
    return map;
  }, [providers, mode, provider, service]);

  const skDates = useMemo(
    () => [...skSlotsByDate.keys()].sort(),
    [skSlotsByDate],
  );

  const colDaysWithSlots = useMemo(
    () => colDays.filter((d) => (d.available_slots ?? []).length > 0),
    [colDays],
  );

  const detailsReady =
    patient.firstName &&
    patient.lastName &&
    patient.phone &&
    patient.email &&
    patient.dob &&
    patient.gender;

  const setDob = (d: string, m: string, y: string) => {
    setPatient((prev) => ({
      ...prev,
      dob: d && m && y ? `${y}-${m}-${d}` : "",
    }));
  };

  const resetService = (chosen: SkService) => {
    setService(chosen);
    setStep(2);
    setProviders([]);
    setProvider(null);
    setSkDate(null);
    setSkSlot(null);
    setMode("fastest");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const chooseClinic = (choice: Clinic) => {
    setClinic(choice);
    if (choice === "col" && service) {
      const colId = SK_TO_COL_SERVICE[service.id] ?? service.id;
      setColService(COL_SERVICES.find((s) => s.id === colId) ?? null);
    }
    goStep(2);
  };

  const sendConfirmation = async (details: {
    clinic: Clinic;
    serviceName: string;
    priceLabel: string;
    duration: number;
    dentist?: string;
    date: string;
    time: string;
  }) => {
    // Emails must never block a confirmed appointment.
    try {
      await fetch("/api/booking/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          firstName: patient.firstName,
          lastName: patient.lastName,
          email: patient.email,
          phone: patient.phone,
          dob: patient.dob,
          gender: patient.gender,
        }),
      });
    } catch {
      /* ignore */
    }
  };

  const bookSouthKensington = async () => {
    if (!service || !skSlot) return;
    setSubmitting(true);
    setBookingError(null);
    try {
      const res = await fetch("/api/booking/sk/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceKey: service.serviceKey,
          serviceName: service.serviceTitle,
          providerKey: skSlot.providerKey,
          deposit: service.deposit,
          inClinicPrice: service.inClinicPrice,
          patient: {
            firstName: patient.firstName,
            lastName: patient.lastName,
            dob: toDmy(patient.dob),
            mobile: patient.phone,
            email: patient.email,
          },
          dateStr: `${skSlot.date}T${skSlot.time}`,
          source: "smiledentist.co.uk",
        }),
      });
      if (!res.ok) throw new Error("booking");
      await sendConfirmation({
        clinic: "sk",
        serviceName: service.name,
        priceLabel: service.priceLabel,
        duration: service.duration,
        dentist: providerName(skSlot.providerKey),
        date: skSlot.date,
        time: skSlot.time,
      });
      router.push("/thank-you");
    } catch {
      setBookingError("Unable to complete booking. Please try again or call us.");
      setSubmitting(false);
    }
  };

  const bookCityOfLondon = async () => {
    if (!colService || !colSlot) return;
    setSubmitting(true);
    setBookingError(null);
    try {
      const res = await fetch("/api/stpauls/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient: {
            first_name: patient.firstName,
            last_name: patient.lastName,
            email: patient.email,
            phone: patient.phone,
            date_of_birth: patient.dob,
            gender: patient.gender.toLowerCase(),
          },
          appointment: {
            candidate_clinician_ids: colSlot.clinician_ids,
            start_date_time: colSlot.start.slice(0, 19),
            appointment_type_id: colService.appointmentTypeId,
            comments: colService.comments,
          },
        }),
      });
      if (res.status === 409) {
        setBookingError(
          "Sorry, that slot has just been taken. Please pick another time.",
        );
        setSubmitting(false);
        setColSlot(null);
        setStep(2);
        loadColSlots(colService);
        return;
      }
      if (!res.ok) throw new Error("booking");
      await sendConfirmation({
        clinic: "col",
        serviceName: colService.name,
        priceLabel: colService.priceLabel,
        duration: colService.duration,
        date: colSlot.start.slice(0, 10),
        time: colSlot.start.slice(11, 16),
      });
      router.push("/thank-you");
    } catch {
      setBookingError(
        `Unable to complete booking. Please try again or call us on ${SITE.phone}.`,
      );
      setSubmitting(false);
    }
  };

  const headerTitle =
    clinic === null ? "Book Online" : CLINIC_LABEL[clinic];

  const back = () => {
    setBookingError(null);
    if (step > 2) {
      goStep(step - 1);
      return;
    }
    const chosenService = clinic === "sk" ? service : colService;
    if (chosenService) {
      setService(null);
      setColService(null);
      setColDays([]);
      setColDate(null);
      setColSlot(null);
      setSkDate(null);
      setSkSlot(null);
      setProviders([]);
      setProvider(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setClinic(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showBack = clinic !== null;

  const summary = clinic === "sk" ? skSlot : colSlot;
  const summaryDate =
    clinic === "sk"
      ? skSlot && `${longDate(skSlot.date)} · ${skSlot.time}`
      : colSlot &&
        `${longDate(colSlot.start.slice(0, 10))} · ${colSlot.start.slice(11, 16)}`;

  return (
    <section className="glow-light">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-ink/10 pb-6">
          {showBack ? (
            <button
              type="button"
              onClick={back}
              className="font-label text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-gold-deep"
            >
              ← Back
            </button>
          ) : (
            <span />
          )}
          <p className="font-display text-lg text-ink">{headerTitle}</p>
          {clinic !== null ? (
            <div className="flex gap-1">
              {[2, 3].map((n) => (
                <span
                  key={n}
                  className={`h-1 w-8 ${step >= n ? "bg-gold" : "bg-ink/15"}`}
                />
              ))}
            </div>
          ) : (
            <span />
          )}
        </div>

        {/* Step: choose a clinic */}
        {clinic === null && (
          <div className="fade-up">
            <p className="eyebrow mb-3">Book My Appointment</p>
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem]">
              Choose your clinic
            </h2>
            <p className="mt-3 text-ink-soft">
              Select the clinic most convenient for you
            </p>

            <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2">
              {(
                [
                  { key: "sk" as Clinic, slug: "south-kensington" },
                  { key: "col" as Clinic, slug: "city-of-london" },
                ] as const
              ).map((c) => {
                const info = CLINICS.find((entry) => entry.slug === c.slug)!;
                return (
                  <div key={c.key} className="relative bg-white p-7">
                    <p className="font-display text-xl text-ink">{info.name}</p>
                    <p className="mt-2 text-sm text-ink-soft">
                      {info.address.join(", ")}
                    </p>
                    <div className="mt-6 border-t border-ink/10 pt-5">
                      <p className="text-sm text-ink-soft">{info.proximity}</p>
                      <p className="mt-2 text-sm text-ink-soft">{info.landmark}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => chooseClinic(c.key)}
                      className="btn-primary mt-6 w-full justify-center"
                    >
                      Book Here →
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-6">
              <p className="font-label text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                4.9/5 <span className="text-ink-soft/70">from 300+ Reviews</span>
              </p>
              <p className="font-label text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                GDC Registered Clinicians
              </p>
            </div>
          </div>
        )}

        {/* Step 2 – South Kensington: pick a treatment */}
        {clinic === "sk" && step === 2 && !service && (
          <div className="fade-up">
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem]">
              What brings you in?
            </h2>
            <p className="mt-3 text-ink-soft">
              Select the service you need at our South Kensington clinic
            </p>

            <div className="mt-8 grid gap-3">
              {SK_SERVICES.filter((s) => s.priceLabel !== "FREE").map((s) => (
                <ServiceButton
                  key={s.id}
                  name={s.name}
                  priceLabel={s.priceLabel}
                  tag={s.tag}
                  note={s.note}
                  duration={s.duration}
                  onClick={() => resetService(s)}
                />
              ))}
            </div>

            <p className="eyebrow mb-4 mt-10">Free Consultations</p>
            <div className="grid gap-3">
              {SK_SERVICES.filter((s) => s.priceLabel === "FREE").map((s) => (
                <ServiceButton
                  key={s.id}
                  name={s.name}
                  priceLabel={s.priceLabel}
                  tag={s.tag}
                  note={s.note}
                  duration={s.duration}
                  onClick={() => resetService(s)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 2 – City of London: pick a service if none carried over */}
        {clinic === "col" && step === 2 && !colService && (
          <div className="fade-up">
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem]">
              What brings you in?
            </h2>
            <p className="mt-3 text-ink-soft">
              Select the service you need at our City of London clinic
            </p>
            <div className="mt-8 grid gap-3">
              {COL_SERVICES.map((s) => (
                <ServiceButton
                  key={s.id}
                  name={s.name}
                  priceLabel={s.priceLabel}
                  tag={s.tag}
                  note={s.note}
                  duration={s.duration}
                  onClick={() => setColService(s)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 2 – pick your time */}
        {clinic !== null &&
          step === 2 &&
          (clinic === "sk" ? service : colService) && (
          <div className="fade-up">
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem]">
              Pick your time
            </h2>
            <p className="mt-3 text-ink-soft">
              Choose the most convenient slot for you
            </p>

            {slotsLoading && (
              <p className="mt-10 text-sm text-ink-soft">Loading available times...</p>
            )}

            {!slotsLoading && slotsError && (
              <div className="mt-10">
                <p className="text-sm text-ink">{slotsError}</p>
                <button
                  type="button"
                  onClick={() =>
                    clinic === "sk"
                      ? service && loadSkSlots(service)
                      : colService && loadColSlots(colService)
                  }
                  className="btn-outline mt-5"
                >
                  Try Again
                </button>
              </div>
            )}

            {!slotsLoading && !slotsError && clinic === "sk" && (
              <>
                <div className="mt-8 flex border border-ink/12">
                  {(["fastest", "dentist"] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setMode(m);
                        setSkDate(null);
                        setSkSlot(null);
                      }}
                      className={`flex-1 py-3 font-label text-[11px] uppercase tracking-[0.18em] transition-colors ${
                        mode === m ? "bg-ink text-ivory" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {m === "fastest" ? "Fastest Slot" : "Choose Dentist"}
                    </button>
                  ))}
                </div>

                {mode === "dentist" && (
                  <div className="mt-8">
                    <p className="eyebrow mb-4">Select Your Dentist</p>
                    <div className="flex flex-wrap gap-3">
                      {providers
                        .filter((p) => p.slots.some((d) => d.slots.length > 0))
                        .map((p) => (
                          <button
                            key={p.providerKey}
                            type="button"
                            onClick={() => {
                              setProvider(p.providerKey);
                              setSkDate(null);
                              setSkSlot(null);
                            }}
                            className={`border px-5 py-3 text-sm transition-colors ${
                              provider === p.providerKey
                                ? "border-gold bg-cream text-ink"
                                : "border-ink/12 bg-white text-ink-soft hover:border-gold/60"
                            }`}
                          >
                            {providerName(p.providerKey)}
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {skDates.length === 0 ? (
                  <div className="mt-10">
                    <p className="text-sm text-ink">
                      No online availability at our South Kensington clinic right now.
                    </p>
                    <a href={SITE.phoneHref} className="btn-primary mt-5">
                      {SITE.phone}
                    </a>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow mb-4 mt-10">
                      {skDate ? longDate(skDate) : "Select a Date"}
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {skDates.map((d) => {
                        const dt = new Date(`${d}T00:00:00`);
                        const active = skDate === d;
                        return (
                          <button
                            key={d}
                            type="button"
                            onClick={() => {
                              setSkDate(d);
                              setSkSlot(null);
                            }}
                            className={`min-w-[72px] shrink-0 border px-3 py-3 text-center transition-colors ${
                              active
                                ? "border-gold bg-ink text-ivory"
                                : "border-ink/12 bg-white hover:border-gold/60"
                            }`}
                          >
                            <span className="block font-label text-[10px] uppercase tracking-[0.16em]">
                              {dt.toLocaleDateString("en-GB", { weekday: "short" })}
                            </span>
                            <span className="block text-xl font-medium">
                              {dt.getDate()}
                            </span>
                            <span className="block font-label text-[10px] uppercase tracking-[0.16em]">
                              {dt.toLocaleDateString("en-GB", { month: "short" })}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {skDate && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {(skSlotsByDate.get(skDate) ?? []).map((slot) => (
                          <button
                            key={`${slot.time}-${slot.providerKey}`}
                            type="button"
                            onClick={() => setSkSlot(slot)}
                            className={`border px-5 py-3 text-sm transition-colors ${
                              skSlot?.time === slot.time && skSlot?.date === slot.date
                                ? "border-gold bg-ink text-ivory"
                                : "border-ink/12 bg-white text-ink-soft hover:border-gold/60"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {!slotsLoading && !slotsError && clinic === "col" && colService && (
              <>
                {colDaysWithSlots.length === 0 ? (
                  <div className="mt-10">
                    <p className="text-sm text-ink">
                      No online availability at our City of London clinic right now.
                    </p>
                    <a href={SITE.phoneHref} className="btn-primary mt-5">
                      {SITE.phone}
                    </a>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow mb-4 mt-10">
                      {colDate ? longDate(colDate) : "Select a Date"}
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {colDaysWithSlots.map((d) => {
                        const dt = new Date(`${d.date}T00:00:00`);
                        const active = colDate === d.date;
                        return (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => {
                              setColDate(d.date);
                              setColSlot(null);
                            }}
                            className={`min-w-[72px] shrink-0 border px-3 py-3 text-center transition-colors ${
                              active
                                ? "border-gold bg-ink text-ivory"
                                : "border-ink/12 bg-white hover:border-gold/60"
                            }`}
                          >
                            <span className="block font-label text-[10px] uppercase tracking-[0.16em]">
                              {dt.toLocaleDateString("en-GB", { weekday: "short" })}
                            </span>
                            <span className="block text-xl font-medium">
                              {dt.getDate()}
                            </span>
                            <span className="block font-label text-[10px] uppercase tracking-[0.16em]">
                              {dt.toLocaleDateString("en-GB", { month: "short" })}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {colDate && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {(
                          colDaysWithSlots.find((d) => d.date === colDate)
                            ?.available_slots ?? []
                        ).map((slot) => (
                          <button
                            key={slot.start}
                            type="button"
                            onClick={() => setColSlot(slot)}
                            className={`border px-5 py-3 text-sm transition-colors ${
                              colSlot?.start === slot.start
                                ? "border-gold bg-ink text-ivory"
                                : "border-ink/12 bg-white text-ink-soft hover:border-gold/60"
                            }`}
                          >
                            {slot.start.slice(11, 16)}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {summary && (
              <button
                type="button"
                onClick={() => goStep(3)}
                className="btn-primary mt-10 w-full justify-center sm:w-auto"
              >
                Continue to Details →
              </button>
            )}
          </div>
        )}

        {/* Step 3 – patient details */}
        {clinic !== null && step === 3 && (
          <div className="fade-up">
            <h2 className="display-xl text-[1.75rem] sm:text-[2.25rem]">
              Almost there!
            </h2>
            <p className="mt-3 text-ink-soft">
              Please fill in your details to complete the booking
            </p>

            <div className="mt-8 border border-ink/12 bg-white p-6">
              <p className="eyebrow mb-3">Your Booking</p>
              <p className="font-display text-lg text-ink">
                {clinic === "sk" ? service?.name : colService?.name}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{summaryDate}</p>
              <p className="mt-1 text-sm text-ink-soft">{CLINIC_LABEL[clinic]}</p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="First Name">
                <input
                  className={inputClass}
                  value={patient.firstName}
                  onChange={(e) =>
                    setPatient({ ...patient, firstName: e.target.value })
                  }
                />
              </Field>
              <Field label="Last Name">
                <input
                  className={inputClass}
                  value={patient.lastName}
                  onChange={(e) =>
                    setPatient({ ...patient, lastName: e.target.value })
                  }
                />
              </Field>
              <Field
                label="Mobile Number"
                hint="We'll send appointment reminders to this number"
              >
                <input
                  type="tel"
                  className={inputClass}
                  value={patient.phone}
                  onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
                />
              </Field>
              <Field
                label="Email Address"
                hint="Confirmation and medical forms will be sent here"
              >
                <input
                  type="email"
                  className={inputClass}
                  value={patient.email}
                  onChange={(e) => setPatient({ ...patient, email: e.target.value })}
                />
              </Field>
              <Field label="Date of Birth">
                <div className="grid grid-cols-3 gap-3">
                  <select
                    className={inputClass}
                    value={day}
                    onChange={(e) => {
                      setDay(e.target.value);
                      setDob(e.target.value, month, year);
                    }}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) =>
                      String(i + 1).padStart(2, "0"),
                    ).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select
                    className={inputClass}
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setDob(day, e.target.value, year);
                    }}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) =>
                      String(i + 1).padStart(2, "0"),
                    ).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    className={inputClass}
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                      setDob(day, month, e.target.value);
                    }}
                  >
                    <option value="">Year</option>
                    {Array.from(
                      { length: 100 },
                      (_, i) => new Date().getFullYear() - i,
                    ).map((y) => (
                      <option key={y} value={String(y)}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </Field>
              <Field label="Gender">
                <select
                  className={inputClass}
                  value={patient.gender}
                  onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Field>
            </div>

            {bookingError && (
              <p className="mt-6 border border-gold/40 bg-cream px-4 py-3 text-sm text-ink">
                {bookingError}
              </p>
            )}

            <button
              type="button"
              disabled={!detailsReady || submitting}
              onClick={clinic === "sk" ? bookSouthKensington : bookCityOfLondon}
              className="btn-primary mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {submitting ? "Confirming your appointment..." : "Confirm Appointment"}
            </button>

            <p className="mt-4 text-xs text-ink-soft">
              You will receive a Medical Questionnaire shortly—please fill this out
              before arrival.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
