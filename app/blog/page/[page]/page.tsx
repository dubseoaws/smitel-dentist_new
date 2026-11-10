import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/BlogListing";
import JsonLd from "@/components/JsonLd";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { ALL_BLOG_POSTS, BLOG_PER_PAGE } from "@/lib/blog-posts";
import { SEO_KEYWORDS, SITE_URL, TITLE_SUFFIX } from "@/lib/seo";

const TOTAL_PAGES = Math.ceil(ALL_BLOG_POSTS.length / BLOG_PER_PAGE);

export function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const title = `Dental Health Blog — Page ${page} | Smile Dentist London`;
  const url = `${SITE_URL}/blog/page/${page}`;
  const ogDescription =
    "Expert dental health advice, tips, and insights about cosmetic dentistry, oral care, and dental treatments.";
  return {
    title: { absolute: title + TITLE_SUFFIX },
    description: `Expert dental health advice, tips, and insights — page ${page}. Browse our dental blog for oral care guidance from our experienced London team.`,
    keywords: SEO_KEYWORDS,
    alternates: { canonical: url },
    openGraph: {
      title: { absolute: title },
      description: ogDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: { absolute: title },
      description: ogDescription,
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const current = Number(page);
  if (!Number.isInteger(current) || current < 1 || current > TOTAL_PAGES) notFound();

  const url = `${SITE_URL}/blog/page/${current}`;
  const name = `Dental Health Blog — Page ${current}`;
  const start = (current - 1) * BLOG_PER_PAGE;
  const posts = ALL_BLOG_POSTS.slice(start, start + BLOG_PER_PAGE);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name,
          description:
            "Expert dental health advice, tips, and insights about cosmetic dentistry, oral care, and dental treatments.",
          url,
          isPartOf: { "@type": "CollectionPage", url: `${SITE_URL}/blog`, name: "Dental Health Blog" },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: posts.length,
            itemListElement: posts.map((post, i) => ({
              "@type": "ListItem",
              position: start + i + 1,
              url: `${SITE_URL}/blog/${post.slug}`,
              name: post.title,
              image: post.image,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: `Page ${current}`, item: url },
          ],
        }}
      />
      <BlogListing initialPage={current} heading={name} />
      <SmileGallery limit={9} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
