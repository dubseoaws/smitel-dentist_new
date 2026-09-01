import Image from "next/image";
import Link from "next/link";
import type { ContentBlock } from "@/lib/treatment-content";

function Eyebrow({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="eyebrow">{children}</p>;
}

function Heading({ children }: { children?: string }) {
  if (!children) return null;
  return <h2 className="text-3xl sm:text-4xl">{children}</h2>;
}

function Sub({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="text-ink-soft">{children}</p>;
}

function Prose({ block }: { block: Extract<ContentBlock, { kind: "prose" }> }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <Heading>{block.heading}</Heading>
      <Sub>{block.sub}</Sub>
      {block.paragraphs.map((p) => (
        <p key={p} className="text-ink-soft leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

function Cards({ block }: { block: Extract<ContentBlock, { kind: "cards" }> }) {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Sub>{block.sub}</Sub>
        {block.intro && (
          <p className="text-ink-soft leading-relaxed">{block.intro}</p>
        )}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <div key={item.title} className="border border-ink/10 bg-ivory p-7">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            {item.meta && (
              <p className="mt-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                {item.meta}
              </p>
            )}
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.body}</p>
            {item.bullets && (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {block.footer && (
        <p className="max-w-3xl text-ink-soft leading-relaxed">{block.footer}</p>
      )}
    </div>
  );
}

function Steps({ block }: { block: Extract<ContentBlock, { kind: "steps" }> }) {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Sub>{block.sub}</Sub>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item, i) => (
          <li key={item.title} className="border border-ink/10 bg-ivory p-7">
            <span className="inline-flex h-9 w-9 items-center justify-center border border-gold/50 font-display text-sm text-gold-deep">
              {item.meta ?? String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.body}</p>
          </li>
        ))}
      </ol>
      {block.note && (
        <p className="border border-gold/30 bg-cream p-6 text-sm text-ink-soft leading-relaxed">
          <span className="font-semibold text-ink">{block.note.title}: </span>
          {block.note.body}
        </p>
      )}
      {block.footer && (
        <p className="max-w-3xl text-ink-soft leading-relaxed">{block.footer}</p>
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
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Heading>{block.heading}</Heading>
        <Sub>{block.sub}</Sub>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map(([label, items]) => (
          <div key={label} className="border border-ink/10 bg-ivory p-7">
            <h3 className="font-label text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep">
              {label}
            </h3>
            <ul className="mt-5 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stories({ block }: { block: Extract<ContentBlock, { kind: "stories" }> }) {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Sub>{block.sub}</Sub>
        {block.note && (
          <p className="text-sm text-ink-soft leading-relaxed">{block.note}</p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {block.items.map((item) => (
          <article key={item.title} className="border border-ink/10 bg-ivory">
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
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 bg-ink/85 text-ivory px-2.5 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="p-7 space-y-4">
              {item.meta && (
                <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                  {item.meta}
                </p>
              )}
              <h3 className="font-semibold text-lg">{item.title}</h3>
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
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{body}</p>
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
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        <Sub>{block.sub}</Sub>
      </div>
      <div className="overflow-x-auto border border-ink/10">
        <table className="w-full min-w-[600px] text-sm">
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
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>{block.eyebrow}</Eyebrow>
        <Heading>{block.heading}</Heading>
        {block.intro && <p className="text-ink-soft leading-relaxed">{block.intro}</p>}
      </div>

      {block.rows && block.rows.length > 0 && (
        <div className="overflow-x-auto border border-gold/30">
          <table className="w-full text-left text-sm">
            <thead className="bg-cream">
              <tr>
                {(block.columns ?? ["Treatment", "Standard", "Member"]).map((c) => (
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
              {block.rows.map((row) => (
                <tr key={row.label} className="border-t border-ink/10">
                  <td className="px-5 py-4">{row.label}</td>
                  <td className="px-5 py-4 font-display text-base">{row.standard}</td>
                  <td className="px-5 py-4 font-display text-base text-gold-deep">
                    {row.member}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(block.includes || block.standard) && (
        <div className="grid gap-8 border border-gold/30 p-8 md:grid-cols-2">
          {block.includes && (
            <div>
              {block.includesTitle && (
                <h3 className="font-semibold text-lg">{block.includesTitle}</h3>
              )}
              <ul className="mt-5 space-y-3">
                {block.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.standard && (
            <div className="flex flex-col justify-center gap-6">
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft">
                    {block.standard.label}
                  </p>
                  <p className="font-display text-2xl">{block.standard.value}</p>
                </div>
                {block.member && (
                  <div>
                    <p className="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-gold-deep">
                      {block.member.label}
                    </p>
                    <p className="font-display text-2xl text-gold-deep">
                      {block.member.value}
                    </p>
                  </div>
                )}
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
            <div key={note.title} className="border border-ink/10 bg-ivory p-7">
              <h3 className="font-semibold">{note.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{note.body}</p>
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
      <Sub>{block.sub}</Sub>
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
            <span className="mt-2.5 h-1 w-1 shrink-0 bg-gold" aria-hidden />
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
      <Heading>{block.heading}</Heading>
      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {block.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold list-none">
              {item.q}
              <span className="text-gold-deep transition-transform group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.a}</p>
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
          className={`py-14 lg:py-20 ${i % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
              <p className="mx-auto max-w-3xl border border-gold/40 bg-cream p-6 text-sm text-ink-soft leading-relaxed">
                <span className="font-semibold text-ink">{block.label}: </span>
                {block.body}
              </p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
