import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/BlogListing";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { ALL_BLOG_POSTS, BLOG_PER_PAGE } from "@/lib/blog-posts";
import { OG_IMAGE, OG_LOCALE, SEO_KEYWORDS, SITE_NAME, SITE_URL, TITLE_SUFFIX } from "@/lib/seo";

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
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: title },
      description: ogDescription,
      images: [OG_IMAGE],
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

  return (
    <>
      <BlogListing initialPage={current} />
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
