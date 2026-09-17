import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { PAGE_JSONLD, pageMetadata } from "@/lib/seo";
import { JsonLdBlocks } from "@/components/JsonLd";

const SLUG = "smile-makeover-london";

export const metadata: Metadata = pageMetadata(`/${SLUG}`);

export default function SmileMakeoverPage() {
  return (
    <>
      <JsonLdBlocks blocks={PAGE_JSONLD[`/${SLUG}`]} />
      <TreatmentPage slug={SLUG} hideMembership />
    </>
  );
}
