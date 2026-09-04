import type { Metadata } from "next";
import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";
import MeetExperts from "@/components/MeetExperts";
import SmileGallery from "@/components/SmileGallery";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your consultation today and experience dentistry without fear.",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <Suspense>
        <BookingFlow preSelectedCategory={category} />
      </Suspense>
      <SmileGallery limit={6} className="bg-cream border-y border-ink/10" />
      <MeetExperts limit={8} columns={4} shape="circle" />
    </>
  );
}
