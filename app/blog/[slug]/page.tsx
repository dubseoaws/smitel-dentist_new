import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { ALL_BLOG_POSTS, BLOG_AUTHOR } from "@/lib/blog-posts";
import { BLOG_SEO } from "@/lib/blog-seo";
import { SEO_KEYWORDS, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site-data";

const AUTHOR_ROLE = "Dental Care Team";
const AUTHOR_BIO =
  "Our team of experienced dental professionals is dedicated to providing the highest quality dental care in a comfortable, welcoming environment.";

async function readArticle(slug: string) {
  try {
    return await fs.readFile(
      path.join(process.cwd(), "content", "blog", `${slug}.html`),
      "utf8"
    );
  } catch {
    return null;
  }
}

const readingMinutes = (html: string) =>
  Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).length / 220));

export function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  // Mirrors the live article's <title> and meta description exactly (no site suffix).
  const seo = BLOG_SEO[post.slug];
  const title = seo?.title ?? post.title;
  const description = seo?.description ?? post.excerpt;
  return {
    title: { absolute: title },
    description,
    keywords: SEO_KEYWORDS,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: { absolute: title },
      description,
      url,
      type: "article",
      publishedTime: post.iso,
      authors: [BLOG_AUTHOR],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: title },
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  const body = post ? await readArticle(slug) : null;
  if (!post || !body) notFound();

  const related = ALL_BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);
  const latest = ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 10);

  const url = `${SITE_URL}/blog/${post.slug}`;
  const seo = BLOG_SEO[post.slug];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: seo?.title ?? post.title,
          description: seo?.description ?? post.excerpt,
          image: post.image,
          url,
          datePublished: post.iso,
          dateModified: post.iso,
          inLanguage: "en-GB",
          isAccessibleForFree: true,
          author: {
            "@type": "Person",
            name: BLOG_AUTHOR,
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Smile Dentist",
              url: SITE_URL,
            },
          },
          publisher: {
            "@type": "MedicalOrganization",
            name: "Smile Dentist",
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon-512.png`,
            },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }}
      />
      <article>
        <section className="relative overflow-hidden bg-ink text-ivory">
          <span
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8 py-14 lg:py-20 space-y-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-ivory/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-gold">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ivory/80">{post.category}</li>
              </ol>
            </nav>
            <h1 className="display-xl text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.1]">
              {post.title}
            </h1>
            <span className="block h-px w-20 bg-gold" aria-hidden />
            <p className="max-w-4xl text-lg leading-relaxed text-ivory/70">
              {post.excerpt}
            </p>
            <p className="font-label text-[11px] uppercase tracking-[0.18em] text-ivory/50">
              <time dateTime={post.iso}>{post.date}</time> · {BLOG_AUTHOR} ·{" "}
              {readingMinutes(body)} min read
            </p>
          </div>
        </section>

        <section className="glow-light py-16 lg:py-24">
          <div className="mx-auto grid max-w-[82rem] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div className="min-w-0">
              {post.image && (
                <div className="relative mb-12 aspect-[1200/630] w-full bg-ink/5">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Smile Dentist London dental blog`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <span
                    className="pointer-events-none absolute inset-4 border border-gold/40"
                    aria-hidden
                  />
                </div>
              )}

              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: body }} />

              <div className="mt-16 border border-ink/10 bg-ivory p-8">
                <p className="eyebrow mb-4">About the Author</p>
                <p className="font-display text-lg font-bold">
                  {BLOG_AUTHOR} — {AUTHOR_ROLE}
                </p>
                <p className="mt-2 leading-relaxed text-ink-soft">{AUTHOR_BIO}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/booking" className="btn-gold">
                  Book My Appointment
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="border border-ink/20 px-7 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold-deep"
                >
                  Call {SITE.phone}
                </a>
                <Link
                  href="/blog"
                  className="border border-ink/20 px-7 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold-deep"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-ink/10 bg-ivory">
                <p className="eyebrow border-b border-ink/10 px-6 py-5">Latest Articles</p>
                <ol className="divide-y divide-ink/10">
                  {latest.map((item) => (
                    <li key={item.slug} className="group relative">
                      <Link href={`/blog/${item.slug}`} className="flex gap-4 p-5">
                        {item.image && (
                          <span className="relative block h-16 w-20 shrink-0 overflow-hidden bg-cream">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="80px"
                            />
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block font-display text-[15px] font-bold leading-snug transition-colors group-hover:text-gold-deep">
                            {item.title}
                          </span>
                          <span className="mt-1.5 block font-label text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                            {item.date}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/blog"
                  className="block border-t border-ink/10 px-6 py-5 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:bg-cream"
                >
                  View all articles →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="border-y border-ink/10 bg-ivory py-16 lg:py-20">
          <div className="mx-auto max-w-[82rem] px-5 sm:px-8">
            <h2 className="display-xl mb-10 text-[1.75rem] sm:text-[2.25rem]">
              Related Articles
            </h2>
            <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="group relative flex flex-col bg-ivory transition-colors hover:bg-white"
                >
                  <div className="relative h-48 overflow-hidden bg-cream">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={`${item.title} - dental health article`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <p className="font-label text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                      {item.date}
                    </p>
                    <h3 className="font-display text-lg font-bold leading-snug">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
      <ContactSection />
    </>
  );
}
