import Link from "next/link";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { TEAM } from "@/lib/site-data";
import type { PageBlock, PageContent, Rich } from "@/lib/page-content";

// Same rhythm as components/TreatmentPage.tsx so every page lines up on one grid.
const SHELL = "mx-auto max-w-[82rem] px-5 sm:px-8";
const BAND = "py-14 lg:py-20";

function RichText({ nodes }: { nodes: Rich }) {
  return (
    <>
      {nodes.map((node, i) => {
        if (node.t === "link" && node.href) {
          return (
            <Link key={i} href={node.href} className="link-underline">
              {node.text}
            </Link>
          );
        }
        if (node.t === "em") return <em key={i}>{node.text}</em>;
        if (node.t === "strong") return <strong key={i} className="text-ink">{node.text}</strong>;
        return <span key={i}>{node.text}</span>;
      })}
    </>
  );
}

function Paragraphs({ blocks, className }: { blocks: Rich[]; className?: string }) {
  if (!blocks.length) return null;
  return (
    <div className={`space-y-4 ${className ?? "text-[17px] leading-[1.8] text-ink-soft"}`}>
      {blocks.map((p, i) => (
        <p key={i}>
          <RichText nodes={p} />
        </p>
      ))}
    </div>
  );
}

function Bullets({ blocks }: { blocks: Rich[] }) {
  if (!blocks.length) return null;
  return (
    <ul className="space-y-2.5">
      {blocks.map((b, i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
          <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" aria-hidden />
          <span>
            <RichText nodes={b} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function BlockHead({ eyebrow, heading }: { eyebrow?: string; heading?: string }) {
  if (!eyebrow && !heading) return null;
  return (
    <div className="max-w-3xl space-y-5">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {heading && (
        <h2 className="display-xl text-[1.75rem] leading-[1.12] text-ink sm:text-[2.25rem] lg:text-[2.75rem]">
          {heading}
        </h2>
      )}
      <span className="block h-px w-16 bg-gold" aria-hidden />
    </div>
  );
}

function Section({ block, tone }: { block: Extract<PageBlock, { kind: "section" }>; tone: boolean }) {
  const columns =
    block.items.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : block.items.length === 2 ? "sm:grid-cols-2" : "";
  return (
    <section className={`${BAND} ${tone ? "bg-cream" : ""}`}>
      <div className={`${SHELL} space-y-10 lg:space-y-12`}>
        <BlockHead eyebrow={block.eyebrow} heading={block.heading} />
        <Paragraphs blocks={block.intro} />
        {block.bullets && <Bullets blocks={block.bullets} />}
        {block.tables?.map((table, ti) => (
          <div key={ti} className="space-y-4">
            {table.caption && (
              <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">{table.caption}</h3>
            )}
            <div className="overflow-x-auto border border-ink/10">
              <table className="w-full min-w-[40rem] text-left text-[15px]">
                {table.head.length > 0 && (
                  <thead className="bg-ink text-ivory">
                    <tr>
                      {table.head.map((h, i) => (
                        <th key={i} className="px-5 py-4 font-medium tracking-wide">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className="divide-y divide-ink/10">
                  {table.rows.map((row, i) => (
                    <tr key={i} className={i % 2 ? "bg-cream/60" : ""}>
                      {row.map((cell, j) => (
                        <td key={j} className={j === 0 ? "px-5 py-4 text-ink" : "px-5 py-4 text-ink-soft"}>
                          {cell.split("\n").map((line, k) => (
                            <span
                              key={k}
                              className={
                                k === 0 ? "block" : "mt-1 block text-[13px] leading-[1.7] text-ink-soft/80"
                              }
                            >
                              {line}
                            </span>
                          ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        {block.items.length > 0 && (
          <div className={`grid gap-px ${columns}`}>
            {block.items.map((item, i) => (
              <div
                key={i}
                className={`h-full space-y-4 p-6 outline outline-1 outline-ink/10 lg:p-8 ${tone ? "bg-cream" : "bg-ivory"}`}
              >
                {item.title && (
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">{item.title}</h3>
                )}
                <Paragraphs blocks={item.body} className="text-[15px] leading-[1.75] text-ink-soft" />
                <Bullets blocks={item.bullets} />
              </div>
            ))}
          </div>
        )}
        {block.note && (
          <p className="max-w-3xl text-sm italic text-ink-soft/80">
            <RichText nodes={block.note} />
          </p>
        )}
      </div>
    </section>
  );
}

function Faq({ block, tone }: { block: Extract<PageBlock, { kind: "faq" }>; tone: boolean }) {
  return (
    <section className={`${BAND} ${tone ? "bg-cream" : ""}`}>
      <div className={`${SHELL} space-y-10`}>
        <BlockHead eyebrow={block.eyebrow} heading={block.heading} />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {block.items.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-medium text-ink">
                {item.q}
                <span className="text-gold transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[16px] leading-[1.8] text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index({ block, tone }: { block: Extract<PageBlock, { kind: "index" }>; tone: boolean }) {
  return (
    <section className={`${BAND} ${tone ? "bg-cream" : ""}`}>
      <div className={`${SHELL} space-y-10 lg:space-y-12`}>
        <Paragraphs blocks={block.intro} />
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {block.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group space-y-3 p-6 outline outline-1 outline-ink/10 transition-colors lg:p-8 ${
                tone ? "bg-cream hover:bg-ivory" : "bg-ivory hover:bg-cream"
              }`}
            >
              {link.eyebrow && <p className="eyebrow">{link.eyebrow}</p>}
              <h2 className="font-[family-name:var(--font-display)] text-xl text-ink group-hover:text-gold-deep">
                {link.title}
              </h2>
              {link.description && (
                <p className="text-[15px] leading-[1.75] text-ink-soft">{link.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContentPage({ content }: { content: PageContent }) {
  return (
    <>
      <section className="bg-ink text-ivory">
        <div className={`${SHELL} py-16 lg:py-24`}>
          <div className="max-w-3xl space-y-5">
            {content.heroEyebrow && <p className="eyebrow">{content.heroEyebrow}</p>}
            <h1 className="display-xl text-[2rem] leading-[1.1] sm:text-[2.6rem] lg:text-[3.25rem]">
              {content.heroTitle}
            </h1>
            <span className="block h-px w-16 bg-gold" aria-hidden />
            {content.heroIntro && (
              <Paragraphs blocks={content.heroIntro} className="text-[17px] leading-[1.8] text-ivory/75" />
            )}
          </div>
        </div>
      </section>
      {content.blocks.map((block, i) =>
        block.kind === "faq" ? (
          <Faq key={i} block={block} tone={i % 2 === 1} />
        ) : block.kind === "index" ? (
          <Index key={i} block={block} tone={i % 2 === 1} />
        ) : block.kind === "component" ? (
          block.name === "experts" ? (
            <MeetExperts key={i} limit={TEAM.length} columns={4} tone={i % 2 === 1 ? "cream" : "ivory"} />
          ) : (
            <SmileGallery key={i} />
          )
        ) : (
          <Section key={i} block={block} tone={i % 2 === 1} />
        )
      )}
    </>
  );
}
