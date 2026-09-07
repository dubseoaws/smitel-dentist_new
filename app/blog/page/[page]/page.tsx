import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/BlogListing";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import { ALL_BLOG_POSTS, BLOG_PER_PAGE } from "@/lib/blog-posts";

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
  return { title: `Dental Health Blog – Page ${page}` };
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
