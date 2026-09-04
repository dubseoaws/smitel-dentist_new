import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";

export const metadata: Metadata = {
  title: "Dental Health Blog",
};

export default function BlogPage() {
  return (
    <>
      <BlogListing />
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
