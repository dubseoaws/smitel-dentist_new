import Image from "next/image";
import Link from "next/link";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import TreatmentVideo, { HeroVideo } from "@/components/TreatmentVideo";
import TreatmentCard from "@/components/TreatmentCard";
import { ALL_TREATMENTS, TREATMENT_CATEGORIES, SITE, CLOUDINARY } from "@/lib/site-data";
import { heroVideoFor } from "@/lib/treatment-videos";
import { TREATMENT_CONTENT, type ContentBlock } from "@/lib/treatment-content";

const anchor = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Treatment names that appear in copy and have their own detail page.
const TREATMENT_LINKS: { match: RegExp; slug: string }[] = [
  { match: /porcelain veneer/i, slug: "porcelain-veneers-london" },
  { match: /composite veneer/i, slug: "composite-veneers-london" },
  { match: /composite bonding/i, slug: "composite-bonding-london" },
  { match: /dental implant/i, slug: "dental-implants-london" },
  { match: /gum contouring/i, slug: "gum-contouring-london" },
  { match: /tooth contouring/i, slug: "tooth-contouring-london" },
  { match: /teeth whitening/i, slug: "teeth-whitening-london" },
  { match: /clear aligners|aligners/i, slug: "pro-aligners-london" },
  { match: /bridge/i, slug: "dental-bridges-london" },
  { match: /denture/i, slug: "dentures-london" },
  { match: /crown/i, slug: "dental-crowns-london" },
];

const MEMBERSHIP = /member/i;

// One shared rhythm for every block so sections line up on the same grid.
const SHELL = "mx-auto max-w-[82rem] px-5 sm:px-8";
const BAND = "py-14 lg:py-20";
const STACK = "space-y-10 lg:space-y-12";

// Picks the column count that leaves the fewest empty cells in the last row.
const gridCols = (count: number, max = 3) => {
  let best = 1;
  let bestGap = Infinity;
  for (let c = Math.min(count, max); c >= 2; c--) {
    const gap = (c - (count % c)) % c;
    if (gap < bestGap) {
      bestGap = gap;
      best = c;
    }
  }
  return ["", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"][best];
};

// Additional channel videos shown in a band further down the page.
const EXTRA_VIDEOS: Record<string, string[]> = {
  "missing-teeth-london": ["lHx-p0FbocQ", "33u-MrdHaVU"],
};

// Slugs with no matching channel video use a still image in the hero instead.
const HERO_IMAGES: Record<string, string> = {
  "dentures-london": `${CLOUDINARY}/v1765805793/acrylic-_-flexi-dentures_caf2u4.jpg`,
  "dental-veneers-london": `${CLOUDINARY}/v1788768870/IMG_5726_csrkco.jpg`,
  "pro-aligners-london": `${CLOUDINARY}/v1772026575/how_long_do_braces_take_to_straighten_teeth_1_prh7fp.png`,
  "maryland-bridge-london": `${CLOUDINARY}/v1765881712/IMG_2042_2_lq57r0.jpg`,
  "tooth-extraction-london": `${CLOUDINARY}/v1765880910/WhatsApp_Image_2025-12-03_at_3.55.59_PM_2_bvu5q7.jpg`,
};

// Drops any sentence promoting the membership plan.
const stripMembership = (text?: string) =>
  text
    ?.split(/(?<=\.)\s+/)
    .filter((sentence) => !MEMBERSHIP.test(sentence))
    .join(" ")
    .trim() || undefined;

type Ctx = { slug: string; hideMembership: boolean };

const treatmentHref = (label: string, ctx: Ctx) => {
  const hit = TREATMENT_LINKS.find((l) => l.match.test(label));
  if (!hit || hit.slug === ctx.slug) return null;
  return ALL_TREATMENTS.some((t) => t.slug === hit.slug) ? `/${hit.slug}` : null;
};

function SectionHead({
  eyebrow,
  heading,
  sub,
  intro,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  heading?: string;
  sub?: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  if (!eyebrow && !heading && !sub && !intro) return null;
  return (
    <div
      className={`space-y-5 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {heading && (
        <h2
          className={`display-xl text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.12] ${
            tone === "dark" ? "text-ivory" : "text-ink"
          }`}
        >
          {heading}
        </h2>
      )}
      <span
        className={`block h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {sub && (
        <p
          className={`text-lg leading-relaxed ${
            tone === "dark" ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {sub}
        </p>
      )}
      {intro && (
        <p
          className={`text-[17px] leading-[1.8] ${
            tone === "dark" ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function Callout({ block }: { block: Extract<ContentBlock, { kind: "callout" }> }) {
  return (
    <aside className="relative overflow-hidden bg-ink text-ivory border-y border-ink/10">
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-12 text-center space-y-4">
        <p className="font-label text-[10px] font-bold tracking-[0.28em] uppercase text-gold-bright">
          {block.label}
        </p>
        <p className="font-display text-xl sm:text-2xl leading-[1.5] text-ivory/90">
          {block.body}
        </p>
      </div>
    </aside>
  );
}

function Cards({
  block,
  index,
  ctx,
}: {
  block: Extract<ContentBlock, { kind: "cards" }>;
  index: number;
  ctx: Ctx;
}) {
  const count = block.items.length;
  // Equal-width columns; a short last row is left aligned rather than stretched.
  const cols = gridCols(count);
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 ${index === 0 ? "pt-10 lg:pt-12" : "pt-14 lg:pt-20"} pb-14 lg:pb-20 ${index % 2 === 1 ? "glow-light border-y border-ink/10" : ""}`}
    >
      <div className={`${SHELL} ${STACK}`}>
        <SectionHead
          eyebrow={block.eyebrow}
          heading={block.heading}
          sub={block.sub}
          intro={block.intro}
        />
        <div className={`grid sm:grid-cols-2 ${cols} border-l border-t border-ink/10`}>
          {block.items.map((item, i) => {
            const href = treatmentHref(item.title, ctx);
            return (
              <article
                key={item.title}
                className="group relative flex flex-col border-r border-b border-ink/10 bg-ivory p-8 transition-colors duration-300 hover:bg-white"
              >
                <span className="font-display text-5xl leading-none text-gold/25 transition-colors duration-300 group-hover:text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">
                  {href ? (
                    <Link
                      href={href}
                      className="after:absolute after:inset-0 hover:text-gold-deep transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.meta && (
                  <p className="mt-2 font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                    {item.meta}
                  </p>
                )}
                {item.body && (
                  <p className="mt-4 text-[15px] text-ink-soft leading-[1.8]">{item.body}</p>
                )}
                {item.bullets && (
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] text-ink-soft leading-[1.75]"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
        {block.footer && (
          <p className="max-w-3xl text-[17px] text-ink-soft leading-[1.8]">
            {block.footer}
          </p>
        )}
      </div>
    </section>
  );
}

function Steps({ block }: { block: Extract<ContentBlock, { kind: "steps" }> }) {
  const cols = gridCols(block.items.length, 4);
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 relative overflow-hidden bg-ink text-ivory ${BAND}`}
    >
      <span
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className={`relative ${SHELL} ${STACK}`}>
        <SectionHead
          eyebrow={block.eyebrow}
          heading={block.heading}
          sub={block.sub}
          tone="dark"
        />
        <ol className={`relative grid gap-10 sm:grid-cols-2 ${cols}`}>
          <span
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-ivory/15 lg:block"
            aria-hidden
          />
          {block.items.map((item, i) => (
            <li key={item.title} className="relative">
              <span className="relative z-10 flex min-h-14 min-w-14 items-center justify-center whitespace-nowrap border border-gold/50 bg-ink px-3 font-display text-lg text-gold-bright">
                {item.meta ?? String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ivory">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-ivory/65">{item.body}</p>
            </li>
          ))}
        </ol>
        {block.note && (
          <div className="border-l-2 border-gold bg-ivory/[0.06] px-8 py-7 max-w-3xl">
            <p className="font-label text-[10px] font-bold tracking-[0.24em] uppercase text-gold-bright">
              {block.note.title}
            </p>
            <p className="mt-3 text-[15px] leading-[1.8] text-ivory/70">
              {block.note.body}
            </p>
          </div>
        )}
        {block.footer && (
          <p className="max-w-3xl text-[17px] leading-[1.8] text-ivory/70">
            {block.footer}
          </p>
        )}
      </div>
    </section>
  );
}

function Stories({
  block,
  index,
}: {
  block: Extract<ContentBlock, { kind: "stories" }>;
  index: number;
}) {
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 ${BAND} ${index % 2 === 1 ? "glow-light border-y border-ink/10" : ""}`}
    >
      <div className={`${SHELL} ${STACK}`}>
        <SectionHead
          eyebrow={block.eyebrow}
          heading={block.heading}
          sub={block.sub}
          intro={block.note}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden border border-ink/10 bg-white transition-colors duration-300 hover:border-gold/50"
            >
              {item.before && item.after && (
                <div className="grid grid-cols-2">
                  {(
                    [
                      ["Before", item.before],
                      ["After", item.after],
                    ] as const
                  ).map(([label, img]) => (
                    <div key={label} className="relative aspect-[4/3] bg-cream">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <span
                        className={`absolute left-3 top-3 px-2.5 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase ${
                          label === "After" ? "bg-gold text-ink" : "bg-ink/85 text-ivory"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex-1 p-9 space-y-5">
                {item.meta && (
                  <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                    {item.meta}
                  </p>
                )}
                <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                {(
                  [
                    ["Patient Concern", item.concern],
                    ["Treatment", item.treatment],
                    ["Outcome", item.outcome],
                  ] as const
                ).map(([label, body]) =>
                  body ? (
                    <div key={label} className="border-t border-ink/10 pt-4">
                      <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                        {label}
                      </p>
                      <p className="mt-2 text-[15px] text-ink-soft leading-[1.8]">
                        {body}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            </article>
          ))}
        </div>
        {block.disclaimer && (
          <p className="text-xs text-ink-soft/80 max-w-3xl">{block.disclaimer}</p>
        )}
      </div>
    </section>
  );
}

function DoAvoid({ block }: { block: Extract<ContentBlock, { kind: "doAvoid" }> }) {
  const columns: [string, string[]][] = [
    ["Do", block.dos],
    ["Avoid", block.avoids],
  ];
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className="scroll-mt-32 grid border-y border-ink/10 lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="glow-light flex flex-col justify-center px-5 sm:px-10 lg:px-12 py-16 lg:py-24">
        <SectionHead heading={block.heading} sub={block.sub} />
      </div>
      <div className="grid sm:grid-cols-2">
        {columns.map(([label, items]) => {
          const isDo = label === "Do";
          return (
            <div
              key={label}
              className={`px-8 py-14 lg:px-12 ${
                isDo ? "bg-white" : "bg-cream"
              } border-t border-ink/10 sm:border-t-0 sm:border-l`}
            >
              <h3
                className={`font-label text-[11px] font-bold tracking-[0.24em] uppercase ${
                  isDo ? "text-gold-deep" : "text-ink-soft"
                }`}
              >
                {label}
              </h3>
              <ul className="mt-8 space-y-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[15px] text-ink-soft leading-[1.75]"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[11px] font-bold ${
                        isDo ? "bg-gold text-ink" : "bg-ink/10 text-ink"
                      }`}
                      aria-hidden
                    >
                      {isDo ? "✓" : "✕"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Pricing({
  block,
  ctx,
}: {
  block: Extract<ContentBlock, { kind: "pricing" }>;
  ctx: Ctx;
}) {
  const rows = (block.rows ?? []).filter((row) => row.standard !== "POA");
  const standard = block.standard?.value === "POA" ? undefined : block.standard;
  const notes = (block.notes ?? []).filter(
    (note) => !ctx.hideMembership || !MEMBERSHIP.test(`${note.title} ${note.body}`)
  );
  const intro = ctx.hideMembership ? stripMembership(block.intro) : block.intro;
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 glow-light border-y border-ink/10 ${BAND}`}
    >
      <div className={`${SHELL} ${STACK}`}>
        <SectionHead eyebrow={block.eyebrow} heading={block.heading} intro={intro} />
        {rows.length > 0 && (
          <div className="border border-ink/10 bg-white">
            {rows.map((row) => {
              const href = treatmentHref(row.label, ctx);
              return (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 px-6 py-6 last:border-b-0 transition-colors hover:bg-cream/60 sm:px-9"
                >
                  <span className="font-display text-lg text-ink">
                    {href ? (
                      <Link href={href} className="link-underline hover:text-gold-deep">
                        {row.label}
                      </Link>
                    ) : (
                      row.label
                    )}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-gold-deep">
                    {row.standard}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        {(block.includes || standard) && (
          <div className="grid gap-px bg-ink/10 md:grid-cols-2">
            {block.includes && (
              <div className="bg-white p-9">
                {block.includesTitle && (
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {block.includesTitle}
                  </h3>
                )}
                <ul className="mt-6 space-y-4">
                  {block.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3.5 text-[15px] text-ink-soft leading-[1.75]"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-gold text-[11px] font-bold text-ink"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {standard && (
              <div className="flex flex-col justify-center gap-6 bg-ivory p-9">
                <div>
                  <p className="font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ink-soft">
                    {standard.label}
                  </p>
                  <p className="mt-1.5 font-display text-4xl sm:text-5xl font-semibold text-gold-deep">
                    {standard.value}
                  </p>
                </div>
                <Link href="/booking" className="btn-primary w-fit">
                  Book Consultation
                </Link>
              </div>
            )}
          </div>
        )}
        {block.footnote && <p className="text-xs text-ink-soft/80">{block.footnote}</p>}
        {notes.length > 0 && (
          <div className="grid gap-px bg-ink/10 md:grid-cols-2">
            {notes.map((note) => (
              <div key={note.title} className="bg-ivory p-9">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {note.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft leading-[1.8]">{note.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ComparisonTable({
  block,
  index,
}: {
  block: Extract<ContentBlock, { kind: "table" }>;
  index: number;
}) {
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 ${BAND} ${index % 2 === 1 ? "glow-light border-y border-ink/10" : ""}`}
    >
      <div className={`${SHELL} ${STACK}`}>
        <SectionHead
          eyebrow={block.eyebrow}
          heading={block.heading}
          sub={block.sub}
        />
        <div className="overflow-x-auto border border-ink/10 bg-white">
          <table className="w-full min-w-[600px] text-[15px]">
            <thead>
              <tr className="bg-ink text-ivory">
                {block.columns.map((c) => (
                  <th
                    key={c}
                    className="px-6 py-5 text-left font-label text-[10px] font-bold tracking-[0.2em] uppercase"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row[0]}
                  className="border-t border-ink/10 transition-colors hover:bg-cream/60"
                >
                  <th
                    scope="row"
                    className="px-6 py-5 text-left font-display text-lg font-semibold text-ink"
                  >
                    {row[0]}
                  </th>
                  <td className="px-6 py-5 text-ink-soft leading-[1.75]">{row[1]}</td>
                  <td className="px-6 py-5 text-ink-soft leading-[1.75]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Checklist({
  block,
  index,
}: {
  block: Extract<ContentBlock, { kind: "list" }>;
  index: number;
}) {
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 ${BAND} ${index % 2 === 1 ? "glow-light border-y border-ink/10" : ""}`}
    >
      <div className={`${SHELL} ${STACK}`}>
        <SectionHead eyebrow={block.eyebrow} heading={block.heading} sub={block.sub} />
        <ul className="grid sm:grid-cols-2 border-l border-t border-ink/10">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 border-r border-b border-ink/10 bg-ivory p-7 text-[15px] text-ink-soft leading-[1.75]"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-gold text-[11px] font-bold text-ink"
                aria-hidden
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Quote({ block }: { block: Extract<ContentBlock, { kind: "prose" }> }) {
  const [lead, ...rest] = block.paragraphs;
  return (
    <section className={`relative overflow-hidden bg-ink text-ivory ${BAND}`}>
      <span
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <span className="font-display text-7xl leading-none text-gold/40" aria-hidden>
          &ldquo;
        </span>
        <p className="mt-4 font-display text-2xl sm:text-[2rem] leading-[1.45] text-ivory/90">
          {lead}
        </p>
        <span className="mx-auto mt-10 block h-px w-16 bg-gold" aria-hidden />
        {block.heading && (
          <p className="mt-8 font-display text-xl text-ivory">{block.heading}</p>
        )}
        {block.sub && (
          <p className="mt-2 font-label text-[10px] font-bold tracking-[0.24em] uppercase text-gold-bright">
            {block.sub}
          </p>
        )}
        {rest.map((p) => (
          <p key={p} className="mt-6 text-xs text-ivory/50">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Prose({
  block,
  index,
}: {
  block: Extract<ContentBlock, { kind: "prose" }>;
  index: number;
}) {
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className={`scroll-mt-32 ${BAND} ${index % 2 === 1 ? "glow-light border-y border-ink/10" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-6">
        <SectionHead eyebrow={block.eyebrow} heading={block.heading} sub={block.sub} />
        {block.paragraphs.map((p) => (
          <p key={p} className="text-[17px] text-ink-soft leading-[1.8]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Faq({ block }: { block: Extract<ContentBlock, { kind: "faq" }> }) {
  return (
    <section
      id={block.heading ? anchor(block.heading) : undefined}
      className="scroll-mt-32 grid border-y border-ink/10 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div className="glow-light flex flex-col justify-start px-5 sm:px-10 lg:px-12 py-16 lg:py-24">
        <div className="lg:sticky lg:top-28">
          <SectionHead eyebrow={block.eyebrow} heading={block.heading} />
          <Link href="/booking" className="btn-primary mt-8 inline-flex w-fit">
            Book My Appointment
          </Link>
        </div>
      </div>
      <div className="bg-white px-5 sm:px-10 lg:px-12 py-16 lg:py-24">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {block.items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-semibold text-ink transition-colors group-open:text-gold-deep">
                {item.q}
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-gold/50 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[68ch] text-[15px] text-ink-soft leading-[1.85]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TreatmentPage({
  slug,
  hideMembership = false,
}: {
  slug: string;
  hideMembership?: boolean;
}) {
  const ctx: Ctx = { slug, hideMembership };
  const content = TREATMENT_CONTENT[slug];
  const treatment = ALL_TREATMENTS.find((t) => t.slug === slug)!;
  const category = TREATMENT_CATEGORIES.find((c) =>
    c.treatments.some((t) => t.slug === slug)
  )!;
  const related = category.treatments.filter((t) => t.slug !== slug).slice(0, 3);
  const heroVideoId = heroVideoFor(slug);
  const heroImage = HERO_IMAGES[slug];
  const extraVideoIds = EXTRA_VIDEOS[slug] ?? [];

  const badges = (content?.badges ?? []).filter((badge) => !MEMBERSHIP.test(badge));
  const blocks = (content?.blocks ?? []).filter(
    (b) =>
      !(hideMembership && b.kind === "callout" && MEMBERSHIP.test(`${b.label} ${b.body}`))
  );
  const jumpLinks = blocks
    .filter(
      (b): b is Extract<ContentBlock, { heading?: string }> =>
        "heading" in b && Boolean(b.heading)
    )
    .map((b) => b.heading!)
    .slice(0, 6);
  const hasGallery = blocks.some(
    (b) => b.kind === "stories" && b.heading === "Smile Gallery"
  );

  return (
    <>
      <section className="grid bg-ink text-ivory lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center gap-5 px-5 sm:px-10 lg:px-12 py-12 lg:py-14">
          <p className="fade-up font-label text-[10px] font-bold tracking-[0.28em] uppercase text-gold-bright">
            {content?.kicker ?? category.title}
          </p>
          <h1 className="fade-up fade-up-1 display-xl text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.05] text-ivory">
            {content?.h1 ?? treatment.name}
          </h1>
          <span className="fade-up fade-up-1 block h-px w-20 bg-gold" aria-hidden />
          <p className="fade-up fade-up-2 max-w-[52ch] text-[15px] sm:text-base leading-[1.85] text-ivory/70">
            {content?.intro ?? treatment.description}
          </p>
          {badges.length > 0 && (
            <div className="fade-up fade-up-2 flex flex-wrap gap-2.5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="border border-ivory/20 px-4 py-2 font-label text-[10px] font-bold tracking-[0.16em] uppercase text-ivory/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <div className="fade-up fade-up-3 mt-2 flex flex-wrap gap-4">
            <Link href="/booking" className="btn-gold">
              Book My Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="border border-ivory/30 px-7 py-3.5 font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ivory transition-colors hover:border-gold hover:text-gold-bright"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
        {heroImage ? (
          <div className="relative min-h-[300px] bg-ink sm:min-h-[420px] lg:min-h-full">
            <Image
              src={heroImage}
              alt={content?.h1 ?? treatment.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="pointer-events-none absolute inset-4 border border-gold/40 lg:inset-6"
              aria-hidden
            />
          </div>
        ) : (
          <HeroVideo id={heroVideoId} />
        )}
      </section>

      {jumpLinks.length > 0 && (
        <nav
          aria-label="On this page"
          className="sticky top-[72px] lg:top-[75px] z-30 border-b border-ink/10 bg-ivory/95 backdrop-blur"
        >
          <div className={`flex gap-7 overflow-x-auto py-4 ${SHELL}`}>
            {jumpLinks.map((heading) => (
              <a
                key={heading}
                href={`#${anchor(heading)}`}
                className="whitespace-nowrap font-label text-[10px] font-bold tracking-[0.18em] uppercase text-ink-soft transition-colors hover:text-gold-deep"
              >
                {heading}
              </a>
            ))}
          </div>
        </nav>
      )}

      {blocks.map((block, i) => {
        switch (block.kind) {
          case "callout":
            return <Callout key={i} block={block} />;
          case "cards":
            return <Cards key={i} block={block} index={i} ctx={ctx} />;
          case "steps":
            return <Steps key={i} block={block} />;
          case "stories":
            return block.heading === "Smile Gallery" ? (
              <SmileGallery
                key={i}
                limit={6}
                className="bg-cream border-y border-ink/10"
              />
            ) : (
              <Stories key={i} block={block} index={i} />
            );
          case "doAvoid":
            return <DoAvoid key={i} block={block} />;
          case "pricing":
            return <Pricing key={i} block={block} ctx={ctx} />;
          case "table":
            return <ComparisonTable key={i} block={block} index={i} />;
          case "list":
            return <Checklist key={i} block={block} index={i} />;
          case "prose":
            // Clinician quotes are pulled out; everything else reads as body copy.
            return block.paragraphs[0]?.startsWith("\u201C") ? (
              <Quote key={i} block={block} />
            ) : (
              <Prose key={i} block={block} index={i} />
            );
          case "faq":
            return <Faq key={i} block={block} />;
          default:
            return null;
        }
      })}

      {extraVideoIds.length > 0 && <TreatmentVideo ids={extraVideoIds} />}

      {!hasGallery && (
        <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      )}

      <MeetExperts limit={8} columns={4} shape="circle" />

      <section className="glow-light border-y border-ink/10 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center space-y-5">
          <p className="eyebrow">Book A Consultation</p>
          <h2 className="display-xl text-[1.75rem] sm:text-[2rem]">
            Not sure what you need?
          </h2>
          <p className="text-[15px] text-ink-soft leading-relaxed">
            Book a consultation with Dr. Yasha or one of our dentists. We will assess your
            oral health and create a bespoke treatment plan just for you.
          </p>
          <Link href="/booking" className="btn-primary">
            Book Consultation: £95
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className={SHELL}>
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 className="display-xl text-[1.75rem] sm:text-[2rem]">
                More {category.title}
              </h2>
              <Link
                href="/treatments"
                className="text-xs font-bold tracking-widest text-gold-deep hover:underline whitespace-nowrap"
              >
                ALL TREATMENTS →
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
