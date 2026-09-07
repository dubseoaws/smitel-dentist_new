"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ALL_BLOG_POSTS,
  BLOG_AUTHOR,
  BLOG_CATEGORIES,
  BLOG_PER_PAGE,
} from "@/lib/blog-posts";

function pageWindow(current: number, total: number) {
  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  return [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
}

export default function BlogListing({ initialPage = 1 }: { initialPage?: number }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(initialPage);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_BLOG_POSTS.filter(
      (post) =>
        (category === "All" || post.category === category) &&
        (q === "" ||
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q))
    );
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PER_PAGE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * BLOG_PER_PAGE;
  const posts = filtered.slice(start, start + BLOG_PER_PAGE);

  const goto = (next: number) => {
    setPage(next);
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
  };

  const reset = (fn: () => void) => {
    fn();
    setPage(1);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <span
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-20 space-y-6">
          <p className="eyebrow !text-gold before:!bg-gold fade-up">Blog</p>
          <h1 className="display-xl text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] fade-up fade-up-1">
            Dental Health Blog
          </h1>
          <span className="block h-px w-20 bg-gold fade-up fade-up-2" aria-hidden />
          <p className="max-w-2xl text-lg leading-relaxed text-ivory/70 fade-up fade-up-3">
            Expert advice, tips, and insights about dental health, cosmetic dentistry,
            and oral care from our experienced team.
          </p>
        </div>
      </section>

      <div
        id="articles"
        className="sticky top-[72px] lg:top-[75px] z-30 scroll-mt-24 border-b border-ink/10 bg-ivory/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto">
            {["All", ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => reset(() => setCategory(cat))}
                className={`whitespace-nowrap border px-4 py-2 font-label text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  category === cat
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/15 text-ink-soft hover:border-gold hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative lg:w-80">
            <input
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full border border-ink/15 bg-white px-4 py-2.5 pr-10 text-sm outline-none transition-colors placeholder:text-ink-soft/70 focus:border-gold"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft">
              ⌕
            </span>
          </div>
        </div>
      </div>

      <section className="glow-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-10 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            {filtered.length === 0
              ? "No articles found"
              : `Showing ${start + 1}–${start + posts.length} of ${filtered.length} articles`}
          </p>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col bg-ivory transition-colors hover:bg-white"
              >
                <div className="relative h-52 overflow-hidden bg-cream">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={`${post.title} - dental health article`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {post.category && (
                    <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 font-label text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="font-label text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                    {post.date} · {BLOG_AUTHOR}
                  </p>
                  <h2 className="font-display text-lg font-bold leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-soft line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-3 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                    Read More →
                  </span>
                  <span
                    className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
            >
              <button
                onClick={() => goto(current - 1)}
                disabled={current === 1}
                className="border border-ink/15 px-4 py-2 font-label text-[11px] font-bold uppercase tracking-[0.16em] transition-colors hover:border-gold disabled:opacity-35 disabled:hover:border-ink/15"
              >
                ← Prev
              </button>
              {pageWindow(current, totalPages).map((p, i, arr) => (
                <span key={p} className="flex items-center gap-2">
                  {i > 0 && arr[i - 1] !== p - 1 && (
                    <span className="px-1 text-ink-soft">…</span>
                  )}
                  <button
                    onClick={() => goto(p)}
                    aria-current={p === current ? "page" : undefined}
                    className={`min-w-10 border px-3 py-2 text-sm transition-colors ${
                      p === current
                        ? "border-gold bg-gold text-ink"
                        : "border-ink/15 text-ink-soft hover:border-gold hover:text-ink"
                    }`}
                  >
                    {p}
                  </button>
                </span>
              ))}
              <button
                onClick={() => goto(current + 1)}
                disabled={current === totalPages}
                className="border border-ink/15 px-4 py-2 font-label text-[11px] font-bold uppercase tracking-[0.16em] transition-colors hover:border-gold disabled:opacity-35 disabled:hover:border-ink/15"
              >
                Next →
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
