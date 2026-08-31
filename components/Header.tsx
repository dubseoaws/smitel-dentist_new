"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import {
  NAV_LINKS,
  NAV_CLINIC_LINKS,
  TREATMENT_CATEGORIES,
  SITE,
} from "@/lib/site-data";

const RIGHT_LINKS = ["Membership", "Contact Us", "Fees", "Results", "Blog"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileTreatments, setMobileTreatments] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setMobileTreatments(false);
  };

  return (
    <>
      <div className="bg-ink text-ivory/90 text-center py-2 px-4 font-label text-[11px] tracking-[0.18em]">
        <Link href="/membership" className="hover:text-gold transition-colors">
          MEMBERS: 50% OFF · £20/MONTH
        </Link>
      </div>

      <header className="sticky top-3 z-50 px-3 sm:px-5">
        <div className="mx-auto max-w-6xl glass rounded-[2rem] lg:rounded-full shadow-lg shadow-ink/5">
          <div className="flex items-center justify-between pl-4 pr-2 py-2">
            <Link href="/" onClick={closeAll} aria-label="Smile Dentist home">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center">
              <Link
                href="/"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/team"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors"
              >
                Your Dentists
              </Link>

              {/* Treatments mega dropdown */}
              <div className="group relative">
                <Link
                  href="/treatments"
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors inline-flex items-center gap-1.5"
                >
                  Treatments
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                  <div className="w-[820px] rounded-[2rem] bg-white shadow-2xl shadow-ink/15 border border-ink/6 p-8">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-7">
                      {TREATMENT_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="space-y-2.5">
                          <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                            {cat.title}
                          </p>
                          <ul className="space-y-1">
                            {cat.treatments.map((t) => (
                              <li key={t.slug}>
                                <Link
                                  href={`/${t.slug}`}
                                  className="block text-[13px] text-ink-soft hover:text-gold-deep py-0.5 transition-colors"
                                >
                                  {t.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 pt-5 border-t border-ink/8 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {NAV_CLINIC_LINKS.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="rounded-full bg-cream px-4 py-2 text-xs font-semibold text-ink hover:bg-gold transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/treatments"
                        className="rounded-full bg-ink text-ivory px-5 py-2.5 text-xs font-bold hover:bg-gold-deep transition-colors"
                      >
                        View All Treatments →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations dropdown */}
              <div className="group/loc relative">
                <Link
                  href="/contact"
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors inline-flex items-center gap-1.5"
                >
                  Locations
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 transition-transform group-hover/loc:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="invisible opacity-0 translate-y-2 group-hover/loc:visible group-hover/loc:opacity-100 group-hover/loc:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                  <div className="w-72 rounded-3xl bg-white shadow-2xl shadow-ink/15 border border-ink/6 p-3">
                    {NAV_CLINIC_LINKS.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-cream transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {NAV_LINKS.filter((l) => RIGHT_LINKS.includes(l.label)).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={SITE.phoneHref}
                className="font-label text-xs tracking-wider text-ink-soft hover:text-ink transition-colors px-2"
              >
                {SITE.phone}
              </a>
              <Link
                href="/booking"
                className="rounded-full bg-ink text-ivory px-6 py-3 text-sm font-semibold hover:bg-gold-deep transition-colors"
              >
                Book Online
              </Link>
            </div>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-ink/5"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-ink transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-full bg-ink transition-transform ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden mx-auto max-w-6xl mt-2 glass rounded-3xl p-5 space-y-1 shadow-xl shadow-ink/10 max-h-[70vh] overflow-y-auto">
            <Link
              href="/"
              onClick={closeAll}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
            >
              Home
            </Link>
            <Link
              href="/team"
              onClick={closeAll}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
            >
              Your Dentists
            </Link>

            <button
              onClick={() => setMobileTreatments(!mobileTreatments)}
              aria-expanded={mobileTreatments}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
            >
              Treatments
              <span
                className={`transition-transform text-ink-soft ${
                  mobileTreatments ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {mobileTreatments && (
              <div className="ml-3 pl-4 border-l border-ink/10 space-y-4 py-2">
                {TREATMENT_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-1">
                    <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                      {cat.title}
                    </p>
                    {cat.treatments.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/${t.slug}`}
                        onClick={closeAll}
                        className="block py-1.5 text-sm text-ink-soft hover:text-gold-deep"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                ))}
                {NAV_CLINIC_LINKS.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={closeAll}
                    className="block py-1.5 text-sm font-semibold text-ink hover:text-gold-deep"
                  >
                    {c.label}
                  </Link>
                ))}
                <Link
                  href="/treatments"
                  onClick={closeAll}
                  className="block py-1.5 text-sm font-bold text-gold-deep"
                >
                  View All Treatments →
                </Link>
              </div>
            )}

            {NAV_LINKS.filter((l) => RIGHT_LINKS.includes(l.label)).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-ink/5"
              >
                {link.label}
              </Link>
            ))}

            <p className="px-4 pt-2 font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
              Locations
            </p>
            {NAV_CLINIC_LINKS.map((c) => (
              <Link
                key={`m-${c.href}`}
                href={c.href}
                onClick={closeAll}
                className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-ink/5"
              >
                {c.label}
              </Link>
            ))}

            <div className="pt-3 grid grid-cols-2 gap-2">
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-ink/15 text-center px-4 py-3 text-sm font-semibold"
              >
                Call us
              </a>
              <Link
                href="/booking"
                onClick={closeAll}
                className="rounded-full bg-ink text-ivory text-center px-4 py-3 text-sm font-semibold"
              >
                Book Online
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
