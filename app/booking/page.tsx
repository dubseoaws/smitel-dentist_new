import type { Metadata } from "next";
import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";
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
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
