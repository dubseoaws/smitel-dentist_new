import type { Metadata } from "next";
import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";
import { PAGE_JSONLD, pageMetadata } from "@/lib/seo";
import { JsonLdBlocks } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata("/booking");

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <JsonLdBlocks blocks={PAGE_JSONLD["/booking"]} />
      <Suspense>
        <BookingFlow preSelectedCategory={category} />
      </Suspense>
    </>
  );
}
