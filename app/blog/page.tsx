import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
import JsonLd, { JsonLdBlocks } from "@/components/JsonLd";
import { ALL_BLOG_POSTS } from "@/lib/blog-posts";
import { PAGE_JSONLD, SITE_URL, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/blog");

const collectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Dental Health Blog",
  description:
    "Expert dental health advice, tips, and insights about cosmetic dentistry, oral care, and dental treatments.",
  url: `${SITE_URL}/blog`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 25,
    itemListElement: ALL_BLOG_POSTS.slice(0, 25).map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
      image: post.image,
    })),
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={collectionPage} />
      <JsonLdBlocks blocks={PAGE_JSONLD["/blog"]} />
      <BlogListing />
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
