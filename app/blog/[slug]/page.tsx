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
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
      type: "article",
      publishedTime: post.iso,
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

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <span
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-14 lg:py-20 space-y-6">
          <Link
            href="/blog"
            className="inline-block font-label text-[11px] font-bold uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-gold"
          >
            ← Back to Blog
          </Link>
          {post.category && (
            <p className="eyebrow !text-gold before:!bg-gold">{post.category}</p>
          )}
          <h1 className="display-xl text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.1]">
            {post.title}
          </h1>
          <span className="block h-px w-20 bg-gold" aria-hidden />
          <p className="max-w-2xl text-lg leading-relaxed text-ivory/70">{post.excerpt}</p>
          <p className="font-label text-[11px] uppercase tracking-[0.18em] text-ivory/50">
            <time dateTime={post.iso}>{post.date}</time> · {BLOG_AUTHOR}
          </p>
        </div>
      </section>

      {post.image && (
        <div className="relative aspect-[1200/630] w-full bg-cream">
          <Image
            src={post.image}
            alt={`${post.title} - Smile Dentist London dental blog`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <section className="glow-light py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: body }} />

          <div className="mt-16 border border-ink/10 bg-ivory p-8">
            <p className="eyebrow mb-4">About the Author</p>
            <p className="font-display text-lg font-bold">
              {BLOG_AUTHOR} — {AUTHOR_ROLE}
            </p>
            <p className="mt-2 leading-relaxed text-ink-soft">{AUTHOR_BIO}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="btn-gold"
            >
              Book My Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="border border-ink/20 px-7 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold-deep"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-y border-ink/10 bg-ivory py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
