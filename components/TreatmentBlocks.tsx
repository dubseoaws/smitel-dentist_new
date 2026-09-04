import Image from "next/image";
import Link from "next/link";
import type { ContentBlock } from "@/lib/treatment-content";

function Eyebrow({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="eyebrow">{children}</p>;
}

function Heading({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-ink">
      {children}
    </h2>
  );
}

function Sub({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="text-lg text-ink-soft leading-relaxed">{children}</p>;
}

function Rule() {
  return <span className="block h-px w-16 bg-gold" aria-hidden />;
}

function Prose({ block }: { block: Extract<ContentBlock, { kind: "prose" }> }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <Heading>{block.heading}</Heading>
      <Rule />
      <Sub>{block.sub}</Sub>
      {block.paragraphs.map((p) => (
        <p key={p} className="text-[17px] text-ink-soft leading-[1.8]">
          {p}
        </p>
      ))}
    </div>
  );
}

function Cards({ block }: { block: Extract<ContentBlock, { kind: "cards" }> }) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
        <Sub>{block.sub}</Sub>
        {block.intro && (
          <p className="text-[17px] text-ink-soft leading-[1.8]">{block.intro}</p>
        )}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <div
            key={item.title}
            className="group relative border border-ink/10 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-ink/5"
          >
            <span
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden
            />
            <h3 className="font-display text-xl font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            {item.meta && (
              <p className="mt-2 font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                {item.meta}
              </p>
            )}
            {item.body && (
              <p className="mt-4 text-[15px] text-ink-soft leading-[1.75]">{item.body}</p>
            )}
            {item.bullets && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) =>
                  bullet.includes("£") ? (
                    <li
                      key={bullet}
                      className="flex items-baseline justify-between gap-3 border-t border-ink/10 pt-2 text-sm first:border-t-0 first:pt-0"
                    >
                      <span className="font-label text-[10px] font-bold tracking-[0.18em] uppercase text-ink-soft">
                        {bullet.slice(0, bullet.indexOf("£")).trim()}
                      </span>
                      <span className="font-display text-2xl font-semibold text-gold-deep">
                        {bullet.slice(bullet.indexOf("£"))}
                      </span>
                    </li>
                  ) : (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[15px] text-ink-soft leading-[1.75]"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                      {bullet}
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
      {block.footer && (
        <p className="max-w-3xl text-[17px] text-ink-soft leading-[1.8]">{block.footer}</p>
      )}
    </div>
  );
}

function Steps({ block }: { block: Extract<ContentBlock, { kind: "steps" }> }) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
        <Sub>{block.sub}</Sub>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item, i) => (
          <li
            key={item.title}
            className="group border border-ink/10 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-ink/5"
          >
            <span className="inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap border border-gold/50 bg-gold/10 px-3.5 py-2 font-display text-base text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink">
              {item.meta ?? String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] text-ink-soft leading-[1.75]">{item.body}</p>
          </li>
        ))}
      </ol>
      {block.note && (
        <p className="border-l-2 border-gold bg-gold/[0.08] px-7 py-6 text-[15px] text-ink-soft leading-[1.75]">
          <span className="font-semibold text-ink">{block.note.title}: </span>
          {block.note.body}
        </p>
      )}
      {block.footer && (
        <p className="max-w-3xl text-[17px] text-ink-soft leading-[1.8]">{block.footer}</p>
      )}
    </div>
  );
}

function DoAvoid({ block }: { block: Extract<ContentBlock, { kind: "doAvoid" }> }) {
  const columns: [string, string[]][] = [
    ["Do", block.dos],
    ["Avoid", block.avoids],
  ];
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Heading>{block.heading}</Heading>
        <Rule />
        <Sub>{block.sub}</Sub>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map(([label, items]) => {
          const isDo = label === "Do";
          return (
            <div
              key={label}
              className={`border p-8 ${
                isDo ? "border-gold/40 bg-gold/[0.06]" : "border-ink/12 bg-ivory"
              }`}
            >
              <h3
                className={`font-label text-[11px] font-bold tracking-[0.2em] uppercase ${
                  isDo ? "text-gold-deep" : "text-ink-soft"
                }`}
              >
                {label}
              </h3>
              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 text-[15px] text-ink-soft leading-[1.75]"
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
    </div>
  );
}

function Stories({ block }: { block: Extract<ContentBlock, { kind: "stories" }> }) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
        <Sub>{block.sub}</Sub>
        {block.note && (
          <p className="text-[15px] text-ink-soft leading-[1.75]">{block.note}</p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {block.items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden border border-ink/10 bg-ivory transition-all duration-300 hover:border-gold/60 hover:shadow-xl hover:shadow-ink/5"
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
                    <span className="absolute left-3 top-3 bg-ink/85 text-ivory px-2.5 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="p-8 space-y-4">
              {item.meta && (
                <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                  {item.meta}
                </p>
              )}
              <h3 className="font-display text-xl font-semibold leading-snug text-ink">
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
                  <div key={label}>
                    <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                      {label}
                    </p>
                    <p className="mt-1 text-[15px] text-ink-soft leading-[1.75]">{body}</p>
                  </div>
                ) : null,
              )}
            </div>
          </article>
        ))}
      </div>
      {block.disclaimer && (
        <p className="text-xs text-ink-soft/80">{block.disclaimer}</p>
      )}
    </div>
  );
}

function ComparisonTable({
  block,
}: {
  block: Extract<ContentBlock, { kind: "table" }>;
}) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
        <Sub>{block.sub}</Sub>
      </div>
      <div className="overflow-x-auto border border-ink/10">
        <table className="w-full min-w-[600px] text-[15px]">
          <thead>
            <tr className="bg-ink text-ivory">
              {block.columns.map((c) => (
                <th
                  key={c}
                  className="px-5 py-4 text-left font-label text-[11px] font-bold tracking-[0.16em] uppercase"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-t border-ink/10">
                <th scope="row" className="px-5 py-4 text-left font-semibold">
                  {row[0]}
                </th>
                <td className="px-5 py-4 text-ink-soft">{row[1]}</td>
                <td className="px-5 py-4 text-ink-soft">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Pricing({ block }: { block: Extract<ContentBlock, { kind: "pricing" }> }) {
  const rows = (block.rows ?? []).filter((row) => row.standard !== "POA");
  const standard = block.standard?.value === "POA" ? undefined : block.standard;
  return (
    <div className="space-y-12">
      <div className="max-w-3xl space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
        {block.intro && (
          <p className="text-[17px] text-ink-soft leading-[1.8]">{block.intro}</p>
        )}
      </div>

      {rows.length > 0 && (
        <div className="overflow-x-auto border border-gold/30">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink text-ivory">
              <tr>
                {(block.columns ?? ["Treatment", "Standard"]).slice(0, 2).map((c) => (
                  <th
                    key={c}
                    className="px-5 py-4 font-label text-[10px] font-bold tracking-[0.2em] uppercase"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-ink/10">
                  <td className="px-5 py-4 font-medium">{row.label}</td>
                  <td className="px-5 py-4 font-display text-2xl text-ink">
                    {row.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(block.includes || standard) && (
        <div className="grid gap-8 border border-gold/30 p-8 md:grid-cols-2">
          {block.includes && (
            <div>
              {block.includesTitle && (
                <h3 className="font-semibold text-lg">{block.includesTitle}</h3>
              )}
              <ul className="mt-6 space-y-4">
                {block.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 text-[15px] text-ink-soft leading-[1.7]"
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
            <div className="flex flex-col justify-center gap-6">
              <div className="flex flex-wrap items-stretch gap-px border border-gold/40 bg-gold/25">
                <div className="flex-1 min-w-[150px] bg-ivory px-6 py-5">
                  <p className="font-label text-[11px] font-bold tracking-[0.18em] uppercase text-ink-soft">
                    {standard.label}
                  </p>
                  <p className="mt-1.5 font-display text-4xl sm:text-5xl font-semibold text-ink">
                    {standard.value}
                  </p>
                </div>
              </div>
              <Link href="/booking" className="btn-primary w-fit">
                Book Consultation
              </Link>
            </div>
          )}
        </div>
      )}

      {block.footnote && <p className="text-xs text-ink-soft/80">{block.footnote}</p>}

      {block.notes && (
        <div className="grid gap-6 md:grid-cols-2">
          {block.notes.map((note) => (
            <div
              key={note.title}
              className="border border-ink/10 bg-ivory p-8 transition-colors hover:border-gold/60"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{note.title}</h3>
              <p className="mt-3 text-[15px] text-ink-soft leading-[1.75]">{note.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function List({ block }: { block: Extract<ContentBlock, { kind: "list" }> }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <Heading>{block.heading}</Heading>
      <Rule />
      <Sub>{block.sub}</Sub>
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3.5 border border-ink/10 bg-ivory p-5 text-[15px] text-ink-soft leading-[1.7]"
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
  );
}

function Faq({ block }: { block: Extract<ContentBlock, { kind: "faq" }> }) {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-5">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Rule />
      </div>
      <div className="space-y-3">
        {block.items.map((item) => (
          <details
            key={item.q}
            className="group border border-ink/10 bg-ivory px-6 py-5 transition-colors open:border-gold/50 open:bg-cream/60 hover:border-gold/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-5 text-[17px] font-semibold text-ink list-none">
              {item.q}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center border border-gold/50 text-gold-deep transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-[15px] text-ink-soft leading-[1.8]">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function TreatmentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <section
          key={i}
          className={`py-16 lg:py-24 ${i % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {block.kind === "prose" && <Prose block={block} />}
            {block.kind === "cards" && <Cards block={block} />}
            {block.kind === "steps" && <Steps block={block} />}
            {block.kind === "doAvoid" && <DoAvoid block={block} />}
            {block.kind === "stories" && <Stories block={block} />}
            {block.kind === "table" && <ComparisonTable block={block} />}
            {block.kind === "pricing" && <Pricing block={block} />}
            {block.kind === "list" && <List block={block} />}
            {block.kind === "faq" && <Faq block={block} />}
            {block.kind === "callout" && (
              <div className="mx-auto max-w-3xl border-l-2 border-gold bg-gold/[0.08] px-8 py-7">
                <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                  {block.label}
                </p>
                <p className="mt-3 text-[17px] text-ink-soft leading-[1.8]">{block.body}</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
