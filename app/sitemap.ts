import type { MetadataRoute } from "next";
import { ALL_BLOG_POSTS, BLOG_PER_PAGE } from "@/lib/blog-posts";
import { PAGE_CONTENT } from "@/lib/page-content";
import { ALL_TREATMENTS, CLINICS, TEAM } from "@/lib/site-data";
import { PAGE_SEO, SITE_URL, canonicalUrl } from "@/lib/seo";

// Change frequencies and priorities mirror https://www.smiledentist.co.uk/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    "/membership",
    "/fees",
    "/booking",
    "/treatments",
    "/team",
    "/contact",
    "/results-london",
    ...CLINICS.map((c) => `/${c.slug}`),
    "/cosmetic-dentistry-london",
    ...ALL_TREATMENTS.map((t) => `/${t.slug}`),
    ...TEAM.map((m) => `/${m.slug}`),
    ...Object.keys(PAGE_CONTENT),
    "/blog",
  ].filter((path, i, all) => all.indexOf(path) === i && path in PAGE_SEO);

  const blogPageCount = Math.ceil(ALL_BLOG_POSTS.length / BLOG_PER_PAGE);
  const blogPages = Array.from({ length: Math.max(blogPageCount - 1, 0) }, (_, i) => i + 2);

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...paths.map((path) => ({
      url: canonicalUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPages.map((page) => ({
      url: `${SITE_URL}/blog/page/${page}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...ALL_BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
