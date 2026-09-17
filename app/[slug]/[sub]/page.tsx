import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { JsonLdBlocks } from "@/components/JsonLd";
import { PAGE_CONTENT } from "@/lib/page-content";
import { PAGE_JSONLD, pageMetadata } from "@/lib/seo";

type Params = { slug: string; sub: string };

export function generateStaticParams(): Params[] {
  return Object.keys(PAGE_CONTENT)
    .map((path) => path.split("/").filter(Boolean))
    .filter((parts) => parts.length === 2)
    .map(([slug, sub]) => ({ slug, sub }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  return pageMetadata(`/${slug}/${sub}`);
}

export default async function SubPage({ params }: { params: Promise<Params> }) {
  const { slug, sub } = await params;
  const path = `/${slug}/${sub}`;
  const content = PAGE_CONTENT[path];
  if (!content) notFound();

  return (
    <>
      <JsonLdBlocks blocks={PAGE_JSONLD[path] ?? []} />
      <ContentPage content={content} />
    </>
  );
}
