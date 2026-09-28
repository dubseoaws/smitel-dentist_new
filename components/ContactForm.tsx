"use client";

import { useState } from "react";
import { CLINICS, SITE } from "@/lib/site-data";

const FIELD =
  "w-full border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-gold";
const LABEL =
  "block font-label text-[10px] font-bold uppercase tracking-[0.18em] text-gold-deep";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        `We couldn't send your message. Please call ${SITE.phone} or email ${SITE.email}.`
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-gold/40 bg-white p-8 lg:p-10">
        <p className="eyebrow">Message Sent</p>
        <h3 className="mt-4 font-display text-2xl">Thank you for getting in touch</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          We&rsquo;ve emailed you a copy of your message. A member of the team will reply
          as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={LABEL} htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            className={FIELD}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <label className={LABEL} htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            className={FIELD}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className={LABEL} htmlFor="contact-phone">
            Phone <span className="text-ink-soft/70">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            className={FIELD}
            placeholder="07…"
          />
        </div>
        <div className="space-y-2">
          <label className={LABEL} htmlFor="contact-clinic">
            Preferred clinic
          </label>
          <select id="contact-clinic" name="clinic" className={FIELD} defaultValue="">
            <option value="">No preference</option>
            {CLINICS.map((clinic) => (
              <option key={clinic.slug} value={clinic.name}>
                {clinic.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className={LABEL} htmlFor="contact-subject">
          Subject <span className="text-ink-soft/70">(optional)</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          maxLength={120}
          className={FIELD}
          placeholder="What is your enquiry about?"
        />
      </div>

      <div className="space-y-2">
        <label className={LABEL} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          className={`${FIELD} resize-y`}
          placeholder="Tell us how we can help."
        />
      </div>

      {error && (
        <p role="alert" className="border border-ink/15 bg-cream px-4 py-3 text-[14px] text-ink">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary">
          {status === "sending" ? "Sending…" : "Send Message"}
          <span aria-hidden>→</span>
        </button>
        <p className="text-[13px] text-ink-soft">
          Or call{" "}
          <a href={SITE.phoneHref} className="link-underline">
            {SITE.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
