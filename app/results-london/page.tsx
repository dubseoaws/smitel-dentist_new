import type { Metadata } from "next";
import CaseStudies from "@/components/CaseStudies";
import SmileGallery from "@/components/SmileGallery";
import MeetExperts from "@/components/MeetExperts";
import TreatmentBlocks from "@/components/TreatmentBlocks";
import type { ContentBlock } from "@/lib/treatment-content";

// Answers are verbatim copy already published elsewhere on the site.
const RESULTS_FAQ: ContentBlock[] = [
  {
    kind: "faq",
    eyebrow: "Common Questions",
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "How long does a smile makeover take?",
        a: "Typically 3–6 weeks depending on the treatments involved. Visit 1: Records, scans and digital design. Visit 2: Preparation and placement of temporary restorations. Visit 3: Final bonding of permanent ceramics. More complex cases involving implants or orthodontics may take longer. Your dentist will provide a detailed timeline during your consultation.",
      },
      {
        q: "Will my teeth look natural?",
        a: "Natural-looking results are our primary goal. We use digital smile design to preview your new smile before any treatment begins. We analyse your facial proportions, lip line, skin tone, and tooth characteristics to design restorations that harmonise with your features. You will have the opportunity to approve the design before we proceed.",
      },
      {
        q: "How long will my results last?",
        a: "With good care, porcelain veneers and crowns can last 10–20 years or more. Longevity depends on factors including oral hygiene, diet, and whether you grind your teeth. We provide detailed aftercare guidance and recommend regular check-ups to help maintain your results. Individual outcomes vary.",
      },
      {
        q: "Does a smile makeover hurt?",
        a: "We use local anaesthetic to ensure comfort during any preparatory work. Some patients experience mild sensitivity for a few days afterwards, which can typically be managed with over-the-counter painkillers. Individual experiences vary, and we discuss all aspects of comfort before beginning treatment.",
      },
      {
        q: "Am I too old for a smile makeover?",
        a: "There is no upper age limit. Many patients in their 50s, 60s, and beyond benefit from comprehensive smile rehabilitation. As teeth naturally wear down with age, restoring proper tooth length and function can have a significant positive impact. We assess each patient individually to determine suitability.",
      },
      {
        q: "Do you offer finance?",
        a: "Spread the cost of your treatment. We offer 0% finance options for treatment plans over £1,000 (subject to status).",
      },
      {
        q: "I am nervous about visiting the dentist. Can you help?",
        a: "Anxious? We offer a judgment-free zone. From our relaxing lounge environment to our gentle approach and calming techniques, we ensure your visit is stress-free.",
      },
      {
        q: "Are your dentists registered and regulated?",
        a: "Our team are fully registered and regulated for practice in the United Kingdom. Our patients should expect nothing less.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Real People, Real Smiles",
  description:
    "We take pride in changing lives, one smile at a time. Browse our gallery of recent case studies.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow mb-3">Transformations</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Real People, Real Smiles
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            We take pride in changing lives, one smile at a time. Browse our gallery of
            recent case studies.
          </p>
        </div>
      </section>
      <CaseStudies />
      <SmileGallery
        className="bg-cream border-y border-ink/10"
        eyebrow="Smile Gallery"
        title="All Results Before & After"
        intro="These are real, unedited photos of our patients' transformations."
        ctaHref=""
      />
      <MeetExperts limit={8} columns={4} shape="circle" />
      <TreatmentBlocks blocks={RESULTS_FAQ} />
    </>
  );
}
