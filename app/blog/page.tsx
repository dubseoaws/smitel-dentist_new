import type { Metadata } from "next";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/site-data";
import MeetExperts from "@/components/MeetExperts";

export const metadata: Metadata = {
  title: "Dental Health Blog",
};

export default function BlogPage() {
  return (
    <>
    <section className="hero-shade py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <p className="eyebrow mb-4">Blog</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Dental Health Blog<span className="text-gold">.</span>
        </h1>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.slug}
              href={`https://www.smiledentist.co.uk/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[2rem] bg-white border border-ink/6 p-3 shadow-sm shadow-ink/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 transition-all duration-300"
            >
              <div className="relative h-52 rounded-[1.6rem] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-4 pt-5 pb-4 flex items-start justify-between gap-3">
                <h2 className="font-display text-lg font-bold leading-snug">
                  {post.title}
                </h2>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 transition-all group-hover:bg-gold group-hover:border-gold">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    <MeetExperts limit={3} tone="cream" />
    </>
  );
}
