// Long-form treatment page content transcribed from the live site (smiledentist.co.uk).
// Every string here is copied verbatim from the corresponding live page.

export type ContentImage = { src: string; alt: string };

export type ContentBlock =
  | {
      kind: "prose";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      paragraphs: string[];
    }
  | {
      kind: "cards";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      intro?: string;
      items: { title: string; meta?: string; body?: string; bullets?: string[] }[];
      footer?: string;
    }
  | {
      kind: "steps";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      items: { title: string; meta?: string; body: string }[];
      note?: { title: string; body: string };
      footer?: string;
    }
  | { kind: "doAvoid"; heading?: string; sub?: string; dos: string[]; avoids: string[] }
  | {
      kind: "stories";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      items: {
        title: string;
        meta?: string;
        concern?: string;
        treatment?: string;
        outcome?: string;
        before?: ContentImage;
        after?: ContentImage;
      }[];
      disclaimer?: string;
      note?: string;
    }
  | {
      kind: "list";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      items: string[];
    }
  | {
      kind: "table";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      columns: [string, string, string];
      rows: [string, string, string][];
    }
  | {
      kind: "pricing";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      includesTitle?: string;
      includes?: string[];
      columns?: [string, string, string];
      rows?: { label: string; standard: string; member: string }[];
      standard?: { label: string; value: string };
      member?: { label: string; value: string };
      footnote?: string;
      notes?: { title: string; body: string }[];
    }
  | { kind: "faq"; eyebrow?: string; heading?: string; items: { q: string; a: string }[] }
  | { kind: "callout"; label: string; body: string };

export type TreatmentContent = {
  h1: string;
  kicker?: string;
  intro: string;
  badges?: string[];
  hero?: ContentImage;
  blocks: ContentBlock[];
};

// The Smile Gallery section appears verbatim on several live treatment pages.
function smileGallery(note?: string): ContentBlock {
  return {
    kind: "stories",
    eyebrow: "Patient Results",
    heading: "Smile Gallery",
    sub: "Examples of treatments we have provided for our patients.",
    note,
    items: [
      {
        title: "Restoring a Chipped Front Tooth",
        meta: "Composite Bonding",
        before: {
          src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
          alt: "Before Restoring a Chipped Front Tooth",
        },
        after: {
          src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
          alt: "After Restoring a Chipped Front Tooth",
        },
      },
      {
        title: "Transforming Discoloured & Chipped Teeth",
        meta: "Composite Bonding",
        before: {
          src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
          alt: "Before Transforming Discoloured & Chipped Teeth",
        },
        after: {
          src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
          alt: "After Transforming Discoloured & Chipped Teeth",
        },
      },
    ],
    disclaimer:
      "Individual results may vary. These images show actual patients who consented to their photos being used. A clinical assessment is required to determine suitability for any treatment.",
  };
}

export const TREATMENT_CONTENT: Record<string, TreatmentContent> = {
  "teeth-whitening-london": {
    h1: "Professional Teeth Whitening in London",
    kicker: "Safe, Effective, Dentist-Prescribed",
    intro:
      "We use Boutique Whitening — a premium, dentist-prescribed home whitening system. Custom trays and professional-strength gels deliver predictable results in the comfort of your home, with your treatment supervised by a qualified dentist throughout.",
    badges: ["Dentist-prescribed", "2 min from South Ken tube", "Custom-fitted trays"],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805811/teeth-whitening-hoome_xo3s4a.jpg",
      alt: "Professional Teeth Whitening at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Our Preferred System",
        heading: "Why We Use Boutique Whitening",
        intro:
          "We use Boutique Whitening, a UK-formulated, dentist-prescribed system. Unlike single-session in-chair treatments that can dehydrate teeth, Boutique provides gradual, deep-penetrating results with built-in desensitising agents.",
        items: [
          {
            title: "Deep Penetration",
            body: "Releases oxygen into the enamel to break down deep-set stains, not just surface marks.",
          },
          {
            title: "Reduced Sensitivity",
            body: "Contains Potassium Nitrate, a desensitising agent designed to help minimise sensitivity during treatment.",
          },
          {
            title: "You Control It",
            body: "Unlike a one-off appointment, you control the shade. Stop when you reach your desired brightness.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Tailored to Your Lifestyle",
        items: [
          {
            title: "Boutique By Day",
            meta: "6% Hydrogen Peroxide",
            body: "Wear for just 1 hour per day. Designed for busy professionals or those who prefer not to sleep with trays in.",
          },
          {
            title: "Boutique By Night",
            meta: "10% or 16% Carbamide Peroxide",
            body: "Wear while you sleep. Suitable for those who prefer passive overnight treatment.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "From Impression to Brightness",
        sub: "A Simple 3-Step Process",
        items: [
          {
            title: "The Records Visit",
            meta: "20 Minutes",
            body: "We assess your dental health and take precision impressions for custom super-seal trays.",
          },
          {
            title: "Fit & Collection",
            meta: "1 Week Later",
            body: "We try in your trays, demonstrate how to apply the gel, and record your starting shade.",
          },
          {
            title: "The Whitening",
            meta: "2–3 Weeks",
            body: "Wear your trays at home according to the prescribed schedule. Results are typically visible within a few days. Keep your trays for convenient future top-ups.",
          },
        ],
      },
      {
        kind: "doAvoid",
        heading: "Aftercare & Maintaining Results",
        sub: "How to Keep Your Smile Bright",
        dos: [
          "Follow the “White Diet” during treatment — avoid staining foods and drinks",
          "Use a sensitive toothpaste before and during treatment",
          "Rinse trays with lukewarm water after each use",
          "Store your trays safely for future top-ups",
          "Maintain regular hygiene appointments for best results",
        ],
        avoids: [
          "Red wine, coffee, tea, curry, and beetroot during treatment",
          "Smoking — stains teeth and counteracts whitening",
          "Over-use of gel beyond prescribed schedule",
          "Acidic foods immediately after whitening (citrus, vinegar)",
          "Using non-prescribed whitening products alongside treatment",
        ],
      },
      {
        kind: "cards",
        heading: "Understanding the Risks",
        sub: "Balanced Information for Informed Decisions",
        items: [
          {
            title: "Tooth Sensitivity",
            body: "Some patients experience temporary sensitivity to hot and cold during the whitening period. This typically resolves within a few days of completing treatment. Desensitising toothpaste and adjusting the wearing schedule can help manage this.",
          },
          {
            title: "Gum Irritation",
            body: "If whitening gel comes into contact with the gums, it may cause temporary irritation or whitening of the soft tissue. Custom-fitted trays minimise this risk. If irritation occurs, contact us for advice.",
          },
          {
            title: "Uneven Results with Existing Restorations",
            body: "Whitening gel does not change the colour of existing crowns, veneers, fillings, or bonding. If you have visible restorations, they may need to be replaced after whitening to match your new shade. We discuss this before treatment begins.",
          },
          {
            title: "Results Vary",
            body: "The degree of whitening achieved depends on the natural shade, type of staining, and individual tooth structure. Some teeth respond more readily than others. We assess your suitability and provide realistic expectations during consultation.",
          },
        ],
      },
      {
        kind: "stories",
        heading: "Real Patient Stories",
        sub: "How whitening fits into broader treatment plans.",
        items: [
          {
            title: "The “Bleach, Then Bond” Approach",
            concern:
              "The patient wanted a brighter, more even smile but was unsure which treatment was right for them.",
            treatment:
              "A course of Boutique Whitening was completed first to lift the base shade. This was followed by invisible composite fillings to blend with the new, brighter colour.",
            outcome:
              "A natural, uniform result achieved with a conservative, non-invasive approach.",
          },
          {
            title: "Whitening Before Restorations",
            concern:
              "The patient had existing fillings that were visible. Fillings do not respond to whitening gel.",
            treatment:
              "Natural teeth were whitened first. After a 2-week stabilisation period, old fillings were replaced with composite matched to the new, brighter shade.",
            outcome: "A cohesive, uniform appearance with all teeth matching seamlessly.",
          },
        ],
        disclaimer:
          "Individual results may vary. A consultation is required to determine suitability.",
      },
      {
        kind: "prose",
        heading: "Safety: Why Professional Whitening Matters",
        sub: "Understanding the Difference",
        paragraphs: [
          "In the UK, only dental professionals are legally permitted to provide whitening products containing effective concentrations of hydrogen peroxide (up to 6%). Products available without a dental prescription are limited to lower concentrations that may be less effective.",
          "Professional whitening involves a dental health assessment before treatment, custom-fitted trays manufactured from precision impressions, and ongoing supervision throughout the whitening period. This helps ensure treatment is both safe and effective for your individual circumstances.",
        ],
      },
      {
        kind: "callout",
        label: "Important",
        body: "We advise against using whitening products purchased online or from non-dental providers. Some of these products contain acidic or abrasive ingredients that may damage tooth enamel. If you have used such products and experienced sensitivity or damage, please contact us for an assessment.",
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Boutique Whitening Package",
        intro:
          "Our comprehensive whitening package includes everything you need for a complete course of treatment.",
        includesTitle: "The Boutique Package Includes:",
        includes: [
          "Full dental health check",
          "Custom-made super-seal trays",
          "Full kit of Boutique whitening gels",
          "Desensitising toothpaste included",
          "Shade assessment and guidance",
        ],
        standard: { label: "Standard Price", value: "From £399.00" },
        member: { label: "Member Price", value: "From £199.50" },
        footnote:
          "A dental health assessment is required before whitening can begin. Pricing includes the full package as described above.",
        notes: [
          {
            title: "Membership Plan",
            body: "Join for £20/month and receive 50% off all treatments. Members also receive two check-ups and two hygiene visits per year included in their membership.",
          },
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Will my teeth look 'fake' white?",
            a: "No. Home whitening restores your teeth to their natural brightness (often shade B1). It removes the stains from coffee, tea, and ageing. It does not look opaque or 'Tipp-Ex' white — it looks translucent and healthy. You control the shade and can stop when you reach your desired result.",
          },
          {
            q: "Will whitening cause sensitivity?",
            a: "Some patients may experience temporary sensitivity during the whitening process. Boutique whitening contains Potassium Nitrate, a desensitising agent, to help minimise this. We also recommend using a sensitive toothpaste during the treatment period. If sensitivity becomes uncomfortable, you can pause treatment and resume later.",
          },
          {
            q: "How long do the results last?",
            a: "Results can be maintained long-term with periodic top-ups. Your teeth will naturally pick up stains over time from food and drink. Because you keep your custom trays, you can purchase a top-up syringe of gel (approximately £35) every 6–12 months to maintain your shade.",
          },
          {
            q: "Can I whiten if I have crowns or veneers?",
            a: "Whitening gel only works on natural enamel. It will not change the colour of crowns, veneers, or composite bonding. If you are planning restorations, we recommend whitening your natural teeth first, then matching new restorations to the brighter shade.",
          },
          {
            q: "What is the 'White Diet'?",
            a: "During the 2 weeks of whitening, your enamel pores are open. We advise avoiding foods and drinks that would stain a white t-shirt — red wine, curry, black coffee, beetroot, and similar. This helps achieve the most even, consistent result.",
          },
          {
            q: "Is teeth whitening safe?",
            a: "When prescribed and supervised by a dentist, teeth whitening is considered safe. In the UK, only dental professionals are legally permitted to provide whitening gels containing effective levels of hydrogen peroxide. Over-the-counter products and beauty salon treatments are not regulated to the same standard and may carry greater risks.",
          },
          {
            q: "Should I have a hygiene appointment first?",
            a: "Yes, we strongly recommend it. Professional cleaning removes plaque, tartar, and surface staining so the whitening gel can penetrate evenly. Clean enamel allows the gel to work more effectively and helps reduce the risk of uneven colour.",
          },
          {
            q: "How long does the whitening process take?",
            a: "The entire process typically takes 2–3 weeks. You will need two short appointments: one for impressions (20 minutes) and one to collect your trays and receive instructions (15 minutes). The whitening itself happens at home over the following 2 weeks.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Teeth Whitening London – Safe, Professional & Prescribed by a Dentist",
        paragraphs: [
          "If you are searching for professional teeth whitening in London, it is essential that treatment is prescribed and supervised by a qualified dentist. In the UK, only dental professionals are legally allowed to provide whitening gels containing safe and effective levels of hydrogen peroxide.",
          "At Smile Dentist in London, your whitening treatment is fully regulated, tailored to your dental health, and monitored for optimal results. With clinics in South Kensington and the City of London, we treat patients from across Kensington, Chelsea, Fulham, the Square Mile, and Central London who want predictable whitening without risk to their enamel.",
        ],
      },
      {
        kind: "prose",
        heading: "Whitening: The Foundation of Your Smile Makeover",
        sub: "Teeth whitening is often the first step in a larger cosmetic treatment plan.",
        paragraphs: [
          "Many patients choose to whiten before: Composite bonding, Porcelain veneers, Smile makeovers, Replacing old fillings.",
        ],
      },
      {
        kind: "prose",
        heading: "Should I Have a Hygiene Appointment Before Whitening?",
        sub: "Yes — we recommend it.",
        paragraphs: [
          "Professional cleaning removes plaque, tartar, and surface staining so the whitening gel can penetrate evenly. Many patients combine their whitening treatment with a visit to our hygiene team for optimal results.",
          "Clean enamel allows whitening gels to work more effectively and helps reduce the risk of uneven colour.",
          "All whitening treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice.",
        ],
      },
    ],
  },

  "composite-bonding-london": {
    h1: "Composite Bonding London: Natural Smile Enhancements",
    kicker: "Subtle Refinement, Lasting Confidence",
    intro:
      "Repair chips, close gaps, and reshape teeth with composite bonding in London. A conservative, minimally invasive approach to enhancing the natural appearance of your smile.",
    badges: [
      "Same Day Treatment",
      "Central London",
      "4.9/5 from Google Reviews",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765881695/IMG_2016_2_r5vjdp.jpg",
      alt: "Natural-looking composite bonding result at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Subtle Refinement, Lasting Confidence",
        heading: "Beautifully Natural — The Art of Composite Bonding",
        intro:
          "Not every smile concern requires extensive treatment. Sometimes, small imperfections — a chipped edge, a slight gap, an uneven contour — are all that stand between you and a smile that feels more balanced and confident. Composite bonding is a conservative approach that works with your natural teeth, refining what is already there rather than replacing it.",
        items: [
          {
            title: "Chipped or Worn Edges",
            body: "Over time, teeth can develop small chips or worn edges from everyday use, grinding, or minor trauma. Composite bonding may help restore the natural contour of affected teeth, creating a smoother, more uniform appearance without the need for extensive treatment.",
          },
          {
            title: "Small Gaps Between Teeth",
            body: "Where gaps are small and alignment is otherwise good, composite bonding may be used to build up the tooth edges slightly, reducing the visible space. Suitability depends on the size and location of the gap.",
          },
          {
            title: "Uneven Tooth Shape",
            body: "Teeth that appear slightly different in length, width, or proportion can affect the overall harmony of a smile. Composite material can be carefully applied and sculpted to improve symmetry between adjacent teeth.",
          },
          {
            title: "Areas of Discolouration",
            body: "Certain types of tooth discolouration — such as white spots, localised staining, or areas not improved by whitening — may respond well to composite bonding. Layering composite material can help create a more consistent shade across your teeth.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Suitability for composite bonding varies between individuals and depends on clinical assessment. Your dentist will advise on the most appropriate options for your situation.",
      },
      {
        kind: "steps",
        eyebrow: "Our Clinical Approach",
        heading: "A Structured Approach to Natural Results",
        sub: "Where clinically appropriate, a structured approach may help achieve more harmonious, longer-lasting results.",
        items: [
          {
            title: "Align",
            meta: "A",
            body: "Before bonding is placed, tooth positioning is assessed. If teeth are crowded or rotated, alignment may be recommended first. Addressing positioning can help bonding sit more naturally and distribute biting forces more evenly. Not every patient requires this step.",
          },
          {
            title: "Brighten",
            meta: "B",
            body: "Where appropriate, professional teeth whitening may be considered before bonding. Because composite material does not respond to whitening agents, establishing your preferred shade first allows accurate colour-matching.",
          },
          {
            title: "Contour",
            meta: "C",
            body: "Composite material is carefully hand-sculpted onto the tooth surfaces to refine shape, symmetry, and proportions. Your dentist builds up layers selecting from a range of opacities and shades to replicate natural enamel characteristics.",
          },
        ],
        note: {
          title: "Please note",
          body: "Not every patient requires all three stages. Your treatment plan will be tailored following a clinical assessment. There is no obligation to proceed with any stage you are not comfortable with.",
        },
      },
      {
        kind: "steps",
        eyebrow: "Step by Step",
        heading: "The Treatment Process",
        sub: "Understanding what to expect can help you feel more confident about your decision.",
        items: [
          {
            title: "Consultation and Assessment",
            meta: "1",
            body: "Your dentist examines your teeth, discusses your concerns and goals, and assesses whether composite bonding is suitable. This may include X-rays and photographs. A written treatment plan and estimate is provided.",
          },
          {
            title: "Shade Selection and Planning",
            meta: "2",
            body: "Composite shades are selected to closely match your natural teeth — or your desired shade if whitening has been completed first. The plan is discussed, including which teeth will be treated.",
          },
          {
            title: "Minimal or No Tooth Preparation",
            meta: "3",
            body: "In many cases, composite bonding requires little or no removal of natural tooth structure. The tooth surface is gently prepared to help the composite bond effectively. Anaesthetic is not always needed.",
          },
          {
            title: "Application and Sculpting",
            meta: "4",
            body: "Composite resin is applied in thin layers and carefully sculpted to achieve the desired shape. Each layer is set using a curing light. This layering technique builds up depth and translucency for a natural appearance.",
          },
          {
            title: "Polishing and Final Refinement",
            meta: "5",
            body: "The bonding is polished and refined to achieve a smooth, natural-looking finish. Your bite is checked and adjusted if necessary. Aftercare guidance is provided.",
          },
        ],
      },
      {
        kind: "doAvoid",
        heading: "Aftercare & Maintenance",
        sub: "Proper care helps maintain the appearance and longevity of your composite bonding.",
        dos: [
          "Brush twice daily with a non-abrasive toothpaste",
          "Floss daily around bonded teeth",
          "Attend regular dental check-ups and hygiene appointments",
          "Use a mouthguard if you grind your teeth at night",
          "Report any chips or rough edges to your dentist promptly",
        ],
        avoids: [
          "Biting directly into very hard foods (ice, boiled sweets, nuts in shell)",
          "Using teeth as tools (opening packages, biting nails)",
          "Excessive tea, coffee, red wine, or tobacco (can stain over time)",
          "Abrasive whitening toothpastes (can dull the polish)",
          "Skipping dental check-ups (early issues are easier to address)",
        ],
      },
      {
        kind: "cards",
        heading: "Risks & Considerations",
        intro:
          "As with any dental treatment, it is important to understand the limitations and potential considerations.",
        items: [
          {
            title: "Staining",
            body: "Composite resin can gradually stain over time, particularly with regular exposure to tea, coffee, red wine, or tobacco. Professional polishing can help.",
          },
          {
            title: "Chipping",
            body: "Composite material is not as strong as natural enamel or porcelain. It can chip if subjected to heavy biting forces or trauma. Repairs are usually straightforward.",
          },
          {
            title: "Longevity",
            body: "Composite bonding does not last as long as porcelain restorations. Periodic maintenance, polishing, or replacement may be needed over time.",
          },
          {
            title: "Suitability",
            body: "Not all cosmetic concerns can be addressed with bonding alone. Severe misalignment, large gaps, or structural damage may require alternative treatments.",
          },
        ],
      },
      {
        kind: "stories",
        heading: "Patient Experiences",
        sub: "Every patient's situation is unique. These examples illustrate how composite bonding has been used to address specific concerns.",
        items: [
          {
            title: "Restoring a Chipped Front Tooth",
            meta: "Chipped Tooth Repair",
            concern:
              "A patient attended following a chip to her upper left front tooth, which significantly affected the appearance of her smile.",
            treatment:
              "Composite material was shade-matched and carefully layered to rebuild the missing portion. The bite was checked and adjusted.",
            outcome:
              "The fractured portion was repaired. The patient subsequently chose complementary bonding on her adjacent front tooth for enhanced symmetry.",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
              alt: "Before — chipped front tooth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
              alt: "After — restored front tooth with composite bonding",
            },
          },
          {
            title: "Addressing Discolouration and Chipped Edges",
            meta: "Discolouration & Chips",
            concern:
              "The patient's upper right central incisor was noticeably discoloured following previous trauma and root canal treatment. Both central incisors had small chips.",
            treatment:
              "Composite material was carefully selected and layered to rebuild the chipped areas and improve the appearance of discolouration using a conservative, additive approach.",
            outcome:
              "The bonding addressed the chipped areas and helped improve the visible discolouration, enhancing overall symmetry.",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
              alt: "Before — discoloured and chipped front teeth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
              alt: "After — improved appearance with composite bonding",
            },
          },
        ],
        disclaimer:
          "Individual results may vary. A clinical assessment is required to determine suitability.",
      },
      {
        kind: "table",
        eyebrow: "Making an Informed Choice",
        heading: "Composite Bonding vs Porcelain Veneers",
        sub: "Both options can enhance the appearance of teeth but differ in approach, cost, and suitability. Your dentist will advise which is most appropriate.",
        columns: ["Factor", "Composite Bonding", "Porcelain Veneers"],
        rows: [
          ["Treatment Time", "Typically one appointment", "Usually two or more appointments"],
          [
            "Tooth Preparation",
            "Minimal or no removal of tooth structure",
            "Some enamel removal usually required",
          ],
          ["Reversibility", "Generally reversible", "Typically irreversible"],
          ["Cost", "Generally lower per tooth", "Generally higher per tooth"],
          ["Stain Resistance", "Can stain over time", "More stain-resistant"],
          [
            "Best Suited For",
            "Minor cosmetic improvements",
            "More extensive cosmetic changes",
          ],
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Pricing & Membership",
        intro:
          "A full written estimate is provided after your consultation. Our membership plan offers 50% off all treatment fees.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          {
            label: "Composite Bonding (Per Tooth)",
            standard: "From £395",
            member: "From £197.50",
          },
          {
            label: "Composite Veneer (Full Cover)",
            standard: "From £595",
            member: "From £297.50",
          },
          { label: "Smile Trial (Mock-up)*", standard: "From £250", member: "From £125" },
          { label: "Cosmetic Consultation", standard: "From £95", member: "From £47.50" },
        ],
        footnote:
          "A full written estimate is provided before treatment begins. *Smile Trial fee is deducted from the total treatment cost if you decide to proceed.",
        notes: [
          {
            title: "Membership Savings",
            body: "Join for £20/month and receive 50% off all treatments.",
          },
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Does composite bonding hurt?",
            a: "Composite bonding is generally a comfortable procedure. In many cases, little or no anaesthetic is needed as the process involves minimal tooth preparation. Your dentist will discuss your comfort throughout and can provide local anaesthetic if required. Sensitivity varies between individuals.",
          },
          {
            q: "Will bonding damage my teeth?",
            a: "Composite bonding is considered a conservative treatment because it typically involves minimal or no removal of natural tooth structure. Material is added to the tooth surface rather than filed away. This makes it one of the least invasive cosmetic dental options available, though suitability depends on clinical assessment.",
          },
          {
            q: "Is composite bonding a safe and reliable treatment?",
            a: "Composite bonding is a well-established dental treatment used widely across the UK. It uses biocompatible materials that are carefully matched to your natural tooth shade. As with all dental treatments, outcomes depend on individual factors, clinical technique, and ongoing maintenance including regular dental check-ups.",
          },
          {
            q: "How long does composite bonding last?",
            a: "With appropriate care and maintenance, composite bonding may last several years. Longevity depends on factors including oral hygiene habits, diet, and the location of the bonding. Regular dental check-ups and professional cleaning help maintain the treatment. Your dentist can advise on care specific to your situation.",
          },
          {
            q: "Will bonding stain over time?",
            a: "Composite resin can be susceptible to gradual staining from tea, coffee, red wine, and tobacco. Good oral hygiene and regular professional cleaning — such as routine dental hygiene appointments — can help maintain the appearance. Avoiding heavy staining habits also supports longevity.",
          },
          {
            q: "Do I need further treatment after bonding?",
            a: "Composite bonding may benefit from periodic polishing or minor repairs over time. Your dentist will advise on an appropriate maintenance schedule during your follow-up appointments. Regular check-ups allow your dentist to monitor the bonding and address any changes early.",
          },
          {
            q: "Can I eat normally after bonding?",
            a: "You can generally eat normally after composite bonding, though it is advisable to avoid biting directly into very hard foods with bonded teeth. Your dentist will provide specific aftercare guidance, including dietary recommendations, to help protect the bonding and support its longevity.",
          },
          {
            q: "How does composite bonding compare to porcelain veneers?",
            a: "Composite bonding is typically completed in one visit, involves minimal tooth preparation, and is generally more affordable. Porcelain veneers tend to be more stain-resistant and may last longer, but require more tooth preparation and multiple appointments. Your dentist will advise which option is most suitable for your situation.",
          },
        ],
      },
      {
        kind: "prose",
        paragraphs: [
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice.",
        ],
      },
    ],
  },

  "porcelain-veneers-london": {
    h1: "Porcelain Veneers London",
    kicker: "Understanding the Treatment",
    intro:
      "Porcelain veneers are custom-made ceramic shells designed to enhance the appearance of your smile. At our London practice, we create personalised veneers that aim to improve tooth shape, colour, and symmetry for a natural-looking result.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg",
      alt: "Porcelain veneers at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Are Porcelain Veneers?",
        intro:
          "Porcelain veneers are thin, custom-made shells that are placed over the front surface of teeth. They are designed to improve the shape, colour, and overall symmetry of your smile, and are one of the most widely used treatments in cosmetic dentistry.",
        items: [
          {
            title: "Custom-Made",
            body: "Each veneer is individually crafted to fit your teeth, taking into account the desired shape, shade, and proportion for a result that complements your natural appearance.",
          },
          {
            title: "Aesthetic Enhancement",
            body: "Veneers can address a range of cosmetic concerns, including discolouration, uneven tooth shape, and minor imperfections, to help improve the appearance of your smile.",
          },
          {
            title: "Porcelain Material",
            body: "Porcelain is chosen for its ability to replicate the translucency and appearance of natural tooth enamel. Once placed, veneers are designed to blend seamlessly with your surrounding teeth.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Is This Treatment for You?",
        heading: "Who Are Porcelain Veneers Suitable For?",
        sub: "Porcelain veneers may be suitable for patients looking to improve the appearance of their teeth. Common concerns that veneers can help address include:",
        items: [
          {
            title: "Discoloured Teeth",
            body: "Teeth with deep or intrinsic staining that may not respond to whitening treatments can often be improved with veneers.",
          },
          {
            title: "Worn or Uneven Teeth",
            body: "Veneers can help restore the shape and symmetry of teeth that have become worn, chipped, or uneven over time.",
          },
          {
            title: "Small Gaps",
            body: "Closing gaps between teeth is one of the cosmetic improvements that can be achieved with veneers, depending on the size and position of the spaces.",
          },
          {
            title: "Minor Alignment Concerns",
            body: "For patients with minor irregularities, veneers can improve the overall appearance. They may also form part of a broader smile makeover plan.",
          },
        ],
        note: {
          title: "Important",
          body: "Suitability for porcelain veneers depends on a clinical assessment of your teeth and gums. Your dentist will discuss all suitable options during your consultation.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Why Consider Veneers",
        heading: "Benefits of Porcelain Veneers",
        intro:
          "Porcelain veneers offer a number of potential benefits as a cosmetic treatment option. The outcome will depend on your individual clinical situation.",
        items: [
          {
            title: "Aesthetic Improvement",
            body: "Veneers can enhance the overall appearance of your smile by improving tooth shape, colour, and symmetry. Results are tailored to your individual goals and facial characteristics.",
          },
          {
            title: "Natural-Looking Results",
            body: "Porcelain is designed to replicate the translucency and characteristics of natural tooth enamel, helping veneers blend with your surrounding teeth for a natural appearance.",
          },
          {
            title: "Customised to Each Patient",
            body: "Every veneer is individually designed to suit your teeth, taking into account the shape, shade, and proportions that complement your smile and facial features.",
          },
          {
            title: "Long-Term Cosmetic Option",
            body: "With appropriate care and regular dental visits, porcelain veneers are designed to be a durable cosmetic option. Longevity varies between individuals and depends on ongoing care.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Porcelain Veneers Process",
        sub: "The porcelain veneers process follows a structured approach, with each stage carefully planned to achieve a result that suits you.",
        items: [
          {
            title: "Consultation & Smile Assessment",
            body: "Your dentist will assess your teeth, discuss your goals, and determine whether veneers are a suitable option for you.",
          },
          {
            title: "Treatment Planning",
            body: "A personalised treatment plan is developed, including shade selection and discussion of the expected approach and number of veneers.",
          },
          {
            title: "Preparation of Teeth",
            body: "Where required, a small amount of the tooth surface may be prepared to allow the veneer to sit naturally. This stage is carried out under local anaesthetic.",
          },
          {
            title: "Placement of Veneers",
            body: "Once your custom veneers are ready, they are carefully checked for fit, colour, and shape before being bonded to the front of your teeth.",
          },
          {
            title: "Final Adjustments",
            body: "Any fine adjustments are made to ensure comfort and a natural bite. Your dentist will provide guidance on caring for your veneers going forward.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Do Porcelain Veneers Last?",
        intro:
          "The lifespan of porcelain veneers varies between individuals and is influenced by a number of factors. With appropriate care, veneers are designed to be a long-lasting cosmetic option.",
        items: [
          {
            title: "Individual Variation",
            body: "How long veneers last depends on each patient's individual circumstances. Factors such as oral health, bite, and lifestyle all play a role in the longevity of the restoration.",
          },
          {
            title: "Care and Oral Habits",
            body: "Good oral hygiene, a balanced diet, and avoiding excessive force on the teeth can all help support the lifespan of porcelain veneers.",
          },
          {
            title: "Regular Maintenance",
            body: "Attending regular dental appointments allows your dentist to monitor the condition of your veneers and address any concerns early.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Longevity varies between individuals and cannot be guaranteed. Your dentist will discuss expected outcomes during your consultation.",
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Porcelain Veneers Cost London",
        intro:
          "The cost of porcelain veneers varies depending on the number of veneers required, the complexity of the case, and the personalised treatment plan developed for you. Full costs are provided before treatment begins.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Number of Veneers",
            body: "Whether you require a single veneer or multiple veneers will influence the overall cost of treatment.",
          },
          {
            title: "Complexity of the Case",
            body: "The extent of preparation needed and any additional cosmetic considerations can affect the treatment plan and costs.",
          },
          {
            title: "Personalised Treatment Plan",
            body: "A written treatment plan with itemised costs is provided following your consultation, giving you full clarity before any treatment begins.",
          },
          {
            title: "Membership Benefits",
            body: "Our membership plan offers reduced treatment fees for patients who wish to benefit from ongoing savings across all treatments.",
          },
        ],
      },
      {
        kind: "pricing",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          {
            label: "Porcelain Veneer (per tooth)",
            standard: "From £1,095",
            member: "From £547.50",
          },
          {
            label: "Composite Veneer (per tooth)",
            standard: "From £595",
            member: "From £297.50",
          },
        ],
        footnote:
          "Final costs depend on the number of veneers and complexity. A written treatment plan with full costs is provided before treatment begins.",
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        paragraphs: [
          "London practice with experience in cosmetic dentistry",
          "Focus on natural-looking, personalised results",
          "Personalised smile design approach for every patient",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Porcelain Veneers Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who are considering porcelain veneers. Whether you are searching for dental veneers near you or exploring cosmetic options, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are porcelain veneers?",
            a: "Porcelain veneers are thin, custom-made shells designed to fit over the front surface of teeth. They are used in cosmetic dentistry to improve the appearance of teeth by addressing concerns such as discolouration, uneven shape, or small gaps.",
          },
          {
            q: "Are porcelain veneers painful?",
            a: "Local anaesthetic is used during the preparation stage to ensure comfort. Some patients may experience mild sensitivity afterwards, which typically settles within a short period. Your dentist will discuss what to expect at each stage of treatment.",
          },
          {
            q: "How long do veneers last?",
            a: "The longevity of porcelain veneers varies between individuals and depends on factors such as oral hygiene, dietary habits, and general care. Regular dental visits and good home care can help support the lifespan of your veneers.",
          },
          {
            q: "Can veneers fix gaps between teeth?",
            a: "Porcelain veneers can be used to reduce the appearance of small gaps between teeth. During your consultation, your dentist will assess your teeth and discuss whether veneers are a suitable option for your specific concern.",
          },
          {
            q: "Are veneers suitable for everyone?",
            a: "Suitability for porcelain veneers depends on a number of factors, including the health of your teeth and gums. A thorough clinical assessment is needed to determine whether veneers are the most appropriate option for you.",
          },
        ],
      },
    ],
  },

  "smile-makeover-london": {
    h1: "Smile Makeover in London",
    kicker: "Comprehensive Cosmetic Rehabilitation",
    intro:
      "A Smile Makeover is a bespoke combination of cosmetic and restorative treatments, carefully planned to address multiple concerns simultaneously. We analyse your facial features, tooth proportions, and personal goals to create a treatment plan tailored to you.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805825/adobeStock_420986909-min_knbigb.jpg",
      alt: "Smile Makeover at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "Membership Advantage",
        body: "Members receive 50% off every treatment included in their makeover plan.",
      },
      {
        kind: "cards",
        eyebrow: "Bespoke Treatment Planning",
        heading: "What Is a Smile Makeover?",
        intro:
          "A Smile Makeover is not a single treatment — it is a comprehensive, personalised treatment plan designed to address multiple aesthetic and functional concerns simultaneously. At Smile Dentist, we analyse your facial features, skin tone, lip line, and tooth proportions to design a smile that looks natural and harmonious. Every plan is unique to the individual.",
        items: [
          { title: "Porcelain Veneers", body: "To refine shape and shade." },
          { title: "Dental Implants", body: "To replace missing teeth." },
          { title: "Gum Contouring", body: "To correct uneven gum lines." },
          { title: "Teeth Whitening", body: "To lift baseline colour." },
          { title: "Clear Aligners", body: "To align foundations." },
        ],
      },
      {
        kind: "cards",
        heading: "Who May Benefit from a Smile Makeover?",
        items: [
          {
            title: "Age-Related Wear",
            body: "As we age, teeth naturally wear down and darken. Restoring tooth length and brightness can help rejuvenate the overall appearance of the smile and face.",
          },
          {
            title: "Outdated Dental Work",
            body: "A mix of old crowns, mismatched fillings, and grey lines at the gum level from old metal-bonded restorations can be replaced with modern, natural-looking materials.",
          },
          {
            title: "Self-Consciousness",
            body: "Many patients who cover their mouth when laughing due to gaps, crowding, or severe discolouration find that comprehensive treatment addresses the root causes of their concerns.",
          },
          {
            title: "Erosion or Grinding Damage",
            body: "Teeth that have become short and flat due to acid erosion or bruxism can be rebuilt to restore proper function, bite balance, and aesthetics.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Your Smile Makeover Journey",
        sub: "A Structured, Step-by-Step Process",
        items: [
          {
            title: "Discovery",
            body: "We listen to your concerns and goals. We take digital scans, photographs, and X-rays to assess your dental health comprehensively.",
          },
          {
            title: "Digital Design",
            body: "Using advanced imaging, we design your new smile digitally. You see a preview of the proposed result before any treatment begins.",
          },
          {
            title: "Trial Smile",
            body: "We place temporary restorations that replicate the proposed design. You can assess the look and feel before committing to permanent ceramics.",
          },
          {
            title: "Transformation",
            body: "Your custom porcelain restorations are hand-crafted by a skilled dental technician and bonded securely in place. We check your bite meticulously.",
          },
        ],
        note: {
          title: "Written Treatment Plan",
          body: "Before any treatment begins, you will receive a detailed written treatment plan outlining all proposed procedures, costs, expected timelines, and alternative options. This is provided for your consideration with no obligation to proceed.",
        },
      },
      {
        kind: "stories",
        heading: "Real Patient Stories",
        sub: "See how comprehensive treatment plans have helped real patients.",
        items: [
          {
            title: "Comprehensive Rehabilitation",
            concern:
              "A lady in her late 50s felt her smile no longer reflected how she felt. Her old crowns were chipping and she was unhappy with their appearance.",
            treatment:
              "Full rehabilitation involving upper and lower porcelain restorations. A lighter, more natural shade was selected and edges were refined for improved aesthetics.",
            outcome:
              "The patient reported being very pleased with the overall improvement in her smile and facial appearance.",
          },
          {
            title: "Closing Gaps and Restoring Confidence",
            concern:
              "A patient was unhappy with gaps between teeth, previous failed bonding, and uneven shades across her smile.",
            treatment:
              "A comprehensive makeover using porcelain veneers. The bite was carefully aligned, gaps were closed, and a uniform, natural shade was selected.",
            outcome:
              "The patient was delighted with the symmetry and uniformity of her new smile.",
          },
        ],
        disclaimer:
          "Individual results may vary. A consultation is required to determine suitability.",
      },
      {
        kind: "doAvoid",
        heading: "Aftercare for Your Smile Makeover",
        sub: "Protecting Your Investment",
        dos: [
          "Brush twice daily with a non-abrasive fluoride toothpaste",
          "Floss daily — interdental brushes work well around restorations",
          "Wear your night guard if one has been provided",
          "Attend regular check-ups and hygiene appointments",
          "Use a mouthguard for contact sports",
        ],
        avoids: [
          "Biting directly into very hard foods (ice, hard sweets, bones)",
          "Using teeth as tools (opening packages, biting nails)",
          "Abrasive whitening toothpastes on porcelain",
          "Smoking — stains restorations and affects gum health",
          "Skipping follow-up appointments",
        ],
      },
      {
        kind: "cards",
        heading: "Understanding the Risks",
        intro: "Balanced Information for Informed Decisions",
        items: [
          {
            title: "Irreversibility of Preparation",
            body: "If veneers or crowns are part of your plan, tooth preparation involves removing a layer of enamel. This process cannot be reversed. We discuss this thoroughly before proceeding and always aim for minimally invasive approaches where clinically appropriate.",
          },
          {
            title: "Sensitivity",
            body: "Some patients experience temporary sensitivity to hot and cold after tooth preparation. This typically resolves within a few weeks as the teeth adapt to their new restorations. Your dentist will advise on management strategies.",
          },
          {
            title: "Maintenance Commitment",
            body: "A smile makeover is a long-term commitment. Porcelain restorations require ongoing care including regular hygiene visits, potential night guard use, and careful oral hygiene. Without proper maintenance, the lifespan of restorations may be reduced.",
          },
          {
            title: "Future Replacement",
            body: "No dental restoration lasts forever. Veneers and crowns may need replacement after 10–20 years depending on wear, care, and individual factors. We plan for long-term maintainability and discuss realistic expectations during your consultation.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Our Commitment",
        body: "We provide comprehensive information about all treatment options, including alternatives, risks, and expected outcomes, so you can make a fully informed decision. A detailed written treatment plan is provided before any work begins.",
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Smile Makeover Pricing",
        intro:
          "Every smile makeover is unique, so pricing depends on the specific treatments involved. Below are the individual treatment fees that may form part of your personalised plan. Members receive 50% off most treatment fees; dental implants are not included in the membership discount.",
        columns: ["Treatment Component", "Standard Price", "Member Price"],
        rows: [
          {
            label: "Consultation & Digital Scan",
            standard: "From £95.00",
            member: "From £47.50",
          },
          {
            label: "Porcelain Veneer (per tooth)",
            standard: "From £1,095.00",
            member: "From £547.50",
          },
          {
            label: "Zirconia Crown (per tooth)",
            standard: "From £995.00",
            member: "From £497.50",
          },
          {
            label: "Dental Implant (per tooth)",
            standard: "From £2,950.00",
            member: "Not eligible †",
          },
          {
            label: "Gum Contouring (per tooth)",
            standard: "From £200.00",
            member: "From £100.00",
          },
          {
            label: "Boutique Teeth Whitening",
            standard: "From £399.00",
            member: "From £199.50",
          },
        ],
        notes: [
          {
            title: "Membership Plan",
            body: "Join for £20/month and receive 50% off most treatment fees, two check-ups and two hygiene visits per year. † Dental implants, bone grafting, sinus lift and full-mouth rehabilitation are excluded from the membership discount.",
          },
          {
            title: "Finance Options",
            body: "We offer finance plans to help spread the cost of your smile makeover. Finance is subject to status; terms and conditions apply. Ask at your consultation for details and a personalised quote.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Dr. Yasha Y Shirazi",
        sub: "Principal Dentist — GDC: 195843",
        paragraphs: [
          "“A comprehensive smile makeover involves careful planning of both aesthetics and function. We ensure your bite is balanced so your new restorations are comfortable and long-lasting. Every case is unique, and we take the time to understand what matters most to you.”",
          "Views expressed are those of the individual clinician.",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long does a smile makeover take?",
            a: "Typically 3–6 weeks depending on the treatments involved. Visit 1: Records, scans and digital design. Visit 2: Preparation and placement of temporary restorations. Visit 3: Final bonding of permanent ceramics. More complex cases involving implants or orthodontics may take longer. Your dentist will provide a detailed timeline during your consultation.",
          },
          {
            q: "Does a smile makeover hurt?",
            a: "We use local anaesthetic to ensure comfort during any preparatory work. Some patients experience mild sensitivity for a few days afterwards, which can typically be managed with over-the-counter painkillers. Individual experiences vary, and we discuss all aspects of comfort before beginning treatment.",
          },
          {
            q: "Can I finance my smile makeover?",
            a: "Yes. We offer finance plans to help spread the cost of treatment. Finance is subject to status and terms apply. Our Membership Plan also gives 50% off most treatment fees; please note that dental implants, bone grafting, sinus lift and full-mouth rehabilitation are excluded from the membership discount. We provide a full written breakdown of costs before you commit to any treatment.",
          },
          {
            q: "How long will my results last?",
            a: "With good care, porcelain veneers and crowns can last 10–20 years or more. Longevity depends on factors including oral hygiene, diet, and whether you grind your teeth. We provide detailed aftercare guidance and recommend regular check-ups to help maintain your results. Individual outcomes vary.",
          },
          {
            q: "Will my teeth look natural?",
            a: "Natural-looking results are our primary goal. We use digital smile design to preview your new smile before any treatment begins. We analyse your facial proportions, lip line, skin tone, and tooth characteristics to design restorations that harmonise with your features. You will have the opportunity to approve the design before we proceed.",
          },
          {
            q: "Am I too old for a smile makeover?",
            a: "There is no upper age limit. Many patients in their 50s, 60s, and beyond benefit from comprehensive smile rehabilitation. As teeth naturally wear down with age, restoring proper tooth length and function can have a significant positive impact. We assess each patient individually to determine suitability.",
          },
          {
            q: "What if I need teeth extracted first?",
            a: "We plan comprehensively. If extractions are needed, we incorporate them into the overall treatment plan. In some cases, we can place dental implants at the time of extraction. The goal is to minimise the number of appointments and ensure you are never left without teeth during the process.",
          },
          {
            q: "Do I need a night guard afterwards?",
            a: "We often recommend a custom night guard (occlusal splint) to protect your investment, particularly if you grind or clench your teeth. Bruxism is one of the leading causes of damage to dental restorations. A night guard is a small investment that can significantly extend the life of your new smile.",
          },
        ],
      },
    ],
  },

  "tooth-contouring-london": {
    h1: "Tooth Contouring London",
    intro:
      "Tooth contouring is a subtle cosmetic procedure designed to refine small imperfections by gently reshaping the edges and surfaces of your teeth. Suitable for smoothing uneven lengths, minor chips, or slightly irregular shapes, it offers a conservative approach to enhancing your smile — here in London.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805791/tooth-contouring_ex8lq0.jpg",
      alt: "Tooth contouring treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Subtle Refinement",
        heading: "What Is Tooth Contouring?",
        intro:
          "Tooth contouring is a minimally invasive cosmetic procedure that involves reshaping small amounts of enamel to improve the overall shape and symmetry of your teeth. By carefully refining edges and surfaces, it can help create a more balanced and aesthetically pleasing appearance.",
        items: [
          {
            title: "Minimally Invasive",
            body: "A conservative approach that works within the outer enamel layer, preserving the natural structure of your tooth.",
          },
          {
            title: "Gentle Reshaping",
            body: "Only small amounts of enamel are adjusted, focusing on subtle improvements to tooth shape and proportion.",
          },
          {
            title: "Improved Symmetry",
            body: "Used to create a more harmonious smile line by addressing minor variations in tooth length or shape.",
          },
        ],
        footer:
          "Tooth contouring is one of several cosmetic dentistry treatments we offer at our London practice.",
      },
      {
        kind: "cards",
        eyebrow: "Suitability",
        heading: "Who Is Tooth Contouring Suitable For?",
        intro:
          "Tooth contouring is designed to address specific minor cosmetic concerns. Whether this treatment is right for you depends on the thickness of your enamel and the results of a clinical assessment.",
        items: [
          {
            title: "Slightly Uneven Tooth Edges",
            body: "If you notice that the edges of your front teeth appear rough or irregular, contouring may help smooth them into a more uniform shape.",
          },
          {
            title: "Minor Overlaps or Irregular Shapes",
            body: "Small irregularities in tooth shape or slight overlapping edges can sometimes be refined through careful enamel adjustment.",
          },
          {
            title: "Small Chips or Rough Edges",
            body: "Minor chips or roughness left by everyday wear can be smoothed to restore a cleaner, more polished appearance.",
          },
          {
            title: "Clinical Assessment Required",
            body: "Suitability depends on enamel thickness and the condition of your teeth. For concerns beyond minor imperfections, composite bonding may be a more appropriate option.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Advantages",
        heading: "Benefits of Tooth Contouring",
        intro:
          "Tooth contouring offers a number of advantages for patients seeking subtle aesthetic improvements to their smile.",
        items: [
          {
            title: "Minimally Invasive Approach",
            body: "The procedure is conservative by nature, working within the enamel layer to make gentle adjustments without the need for more extensive intervention.",
          },
          {
            title: "Subtle Aesthetic Improvements",
            body: "Rather than dramatic changes, tooth contouring focuses on refining small details that can meaningfully enhance the overall balance of your smile.",
          },
          {
            title: "Conservative Treatment",
            body: "The reshaping can be completed conservatively, preserving as much of your natural tooth structure as possible while still achieving a noticeable refinement.",
          },
          {
            title: "A More Balanced Smile",
            body: "By addressing irregularities in tooth shape or edge alignment, contouring helps create a more symmetrical and harmonious appearance.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Visit",
        heading: "The Tooth Contouring Process",
        sub: "The procedure follows a careful, step-by-step approach to ensure precise and conservative reshaping.",
        items: [
          {
            title: "Consultation and Smile Assessment",
            meta: "1",
            body: "Your dentist will examine your teeth, discuss your concerns, and assess whether tooth contouring is a suitable option for you. This includes evaluating the overall condition of your enamel and your cosmetic goals.",
          },
          {
            title: "Careful Evaluation of Enamel",
            meta: "2",
            body: "Before any reshaping takes place, the thickness and health of your enamel is carefully assessed. This step ensures that the treatment can be carried out conservatively and safely.",
          },
          {
            title: "Gentle Reshaping of Tooth Edges",
            meta: "3",
            body: "Using precision instruments, your dentist will gently reshape the areas identified during the assessment. Only small amounts of enamel are adjusted to refine the shape and proportion of the teeth.",
          },
          {
            title: "Smoothing and Polishing",
            meta: "4",
            body: "Once the reshaping is complete, the treated surfaces are carefully smoothed and polished. This creates a natural finish and ensures the teeth feel comfortable.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Does Tooth Contouring Last?",
        items: [
          {
            title: "Long-Lasting Results",
            body: "When performed appropriately, the results of tooth contouring are generally long-lasting. The reshaping itself is permanent, as enamel does not regenerate.",
          },
          {
            title: "Enamel Preservation Matters",
            body: "The longevity of results depends on how well the enamel is preserved during treatment and how your teeth respond to everyday wear over time.",
          },
          {
            title: "Ongoing Care Is Important",
            body: "Maintaining good oral hygiene and attending regular dental check-ups will help protect your teeth and support the results of your contouring treatment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Cost Guide",
        heading: "Tooth Contouring Cost London",
        intro:
          "The cost of tooth contouring varies depending on individual needs. A personalised treatment plan is provided following your consultation.",
        items: [
          {
            title: "Number of Teeth",
            body: "The total cost will depend on how many teeth require reshaping, which is determined during your clinical assessment.",
          },
          {
            title: "Complexity of Reshaping",
            body: "The extent of enamel adjustment required varies from patient to patient, which influences the overall treatment cost.",
          },
          {
            title: "Personalised Planning",
            body: "Each treatment plan is tailored to your individual needs. A written quote is provided before any treatment begins.",
          },
        ],
        footer: "For a full overview of our treatment fees, please visit our fees page.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        items: [
          {
            title: "London Practice",
            body: "Our practice is conveniently located in London, providing accessible care for patients seeking subtle cosmetic dental treatments.",
          },
          {
            title: "Experienced in Cosmetic Treatments",
            body: "Our team has experience in a range of subtle cosmetic procedures, including tooth contouring, ensuring careful and considered treatment at every stage.",
          },
          {
            title: "Natural-Looking Enhancements",
            body: "We focus on results that look and feel natural. Our approach prioritises subtle refinements that complement your existing features.",
          },
          {
            title: "Personalised Aesthetic Approach",
            body: "Every treatment plan is tailored to your individual goals and clinical needs, ensuring a considered and personalised experience.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Tooth Contouring Near You",
        paragraphs: [
          "Patients visit Smile Dentist from across London for subtle cosmetic treatments including tooth contouring. Whether you are searching for tooth contouring near me or exploring enamel reshaping options in the London area, our practice is well placed to help.",
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice. We welcome patients for a consultation to discuss whether tooth contouring may be suitable for their individual needs.",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is tooth contouring?",
            a: "Tooth contouring is a minimally invasive cosmetic procedure that involves carefully reshaping small amounts of enamel to improve the appearance of your teeth. It can address minor imperfections such as uneven edges, slight irregularities, or rough surfaces. Suitability depends on individual clinical assessment.",
          },
          {
            q: "Is tooth contouring painful?",
            a: "Tooth contouring is generally well tolerated by most patients. The procedure works within the outer enamel layer, which typically does not contain nerve endings. However, individual experiences may vary, and your dentist will discuss what to expect during your consultation.",
          },
          {
            q: "How long does tooth contouring last?",
            a: "The results of tooth contouring are generally long-lasting, as the reshaping involves the permanent structure of the enamel. How long the results remain depends on your oral care habits and the condition of your enamel. Regular dental check-ups help maintain the outcome.",
          },
          {
            q: "Can tooth contouring fix uneven teeth?",
            a: "Tooth contouring may help improve the appearance of mildly uneven teeth by refining edges and adjusting proportions. However, it is suited to minor imperfections only. For more significant alignment concerns, your dentist may recommend alternative treatments following a clinical assessment.",
          },
          {
            q: "Is tooth contouring suitable for everyone?",
            a: "Suitability for tooth contouring depends on several factors, including enamel thickness, the extent of reshaping required, and the overall health of your teeth. A thorough clinical assessment is necessary to determine whether this treatment is appropriate for your individual needs.",
          },
        ],
      },
    ],
  },

  "white-fillings-london": {
    h1: "White Fillings London",
    intro:
      "White fillings are tooth-coloured restorations used to treat decay and repair damaged teeth. Designed to blend with the natural appearance of your teeth, they offer a discreet alternative to traditional metal fillings — available at our London practice.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard Price From £185",
      "Member (50% off) From £92.50",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805809/composite-fillings_g5zpxk.jpg",
      alt: "White composite fillings at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Are White Fillings?",
        intro:
          "White fillings are made from a tooth-coloured composite material used to repair teeth affected by decay or damage. They are designed to blend with your natural teeth, providing both a functional restoration and an aesthetically pleasing result.",
        items: [
          {
            title: "Tooth-Coloured Material",
            body: "Composite resin is carefully shade-matched to blend with the natural colour of your surrounding teeth for a more discreet restoration.",
          },
          {
            title: "Functional Restoration",
            body: "White fillings restore the structure and function of a tooth, helping to protect it from further decay or damage.",
          },
          {
            title: "Cosmetic Consideration",
            body: "In addition to repairing teeth, white fillings can be used as part of a cosmetic approach, offering a natural-looking alternative to metal restorations.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Common Indications",
        heading: "When Are White Fillings Needed?",
        intro:
          "White fillings may be recommended in a range of clinical situations. Whether a filling is the right option depends on an individual assessment by your dentist.",
        items: [
          {
            title: "Tooth Decay (Cavities)",
            body: "When decay has created a cavity in a tooth, a white filling can be used to restore the affected area and help prevent further damage. A dental examination can help identify decay early.",
          },
          {
            title: "Minor Cracks or Damage",
            body: "Small cracks, chips, or areas of wear on a tooth may be repaired using composite material to restore the tooth's shape and function.",
          },
          {
            title: "Replacing Old Metal Fillings",
            body: "Existing amalgam fillings that are worn, cracked, or no longer functioning well can often be replaced with tooth-coloured composite restorations.",
          },
        ],
        footer:
          "Suitability for white fillings depends on a clinical assessment of the size, location, and condition of the affected tooth.",
      },
      {
        kind: "cards",
        eyebrow: "Advantages",
        heading: "Benefits of White Fillings",
        intro:
          "White fillings offer several advantages for patients seeking both functional and aesthetic dental restorations.",
        items: [
          {
            title: "Blend with Natural Teeth",
            body: "Composite material is shade-matched to your natural tooth colour, allowing the restoration to blend more discreetly than traditional metal alternatives.",
          },
          {
            title: "Preserve Tooth Structure",
            body: "In many cases, white fillings require less removal of healthy tooth structure compared to some traditional filling methods, helping to preserve more of your natural tooth.",
          },
          {
            title: "Functional Restoration",
            body: "White fillings restore the shape and function of a tooth, supporting your ability to eat and speak comfortably while protecting against further damage.",
          },
          {
            title: "Aesthetic Support",
            body: "By using tooth-coloured material, white fillings support both the function and appearance of your teeth, contributing to a more natural-looking smile.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Appointment",
        heading: "The White Filling Process",
        sub: "The procedure follows a careful approach to restore the affected tooth. For larger restorations, your dentist may recommend a dental crown as a more suitable alternative.",
        items: [
          {
            title: "Examination and Diagnosis",
            meta: "1",
            body: "Your dentist will examine the affected tooth and assess the extent of decay or damage. This may include imaging to determine the most appropriate treatment approach for your individual needs.",
          },
          {
            title: "Removal of Decay or Damaged Tissue",
            meta: "2",
            body: "The decayed or damaged portion of the tooth is carefully removed, preserving as much healthy tooth structure as possible. Local anaesthetic is used to help keep you comfortable.",
          },
          {
            title: "Placement of Composite Material",
            meta: "3",
            body: "Tooth-coloured composite resin is carefully applied in layers, with each layer shaped to recreate the natural form of the tooth. The material is shade-matched to blend with your surrounding teeth.",
          },
          {
            title: "Shaping and Polishing",
            meta: "4",
            body: "Once the composite has been placed, the filling is shaped to ensure a comfortable bite and polished for a smooth, natural finish.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Do White Fillings Last?",
        items: [
          {
            title: "Individual Variation",
            body: "The longevity of white fillings varies between individuals. Factors such as the size and location of the filling, and your bite, all play a role in how long a restoration lasts.",
          },
          {
            title: "Oral Hygiene Matters",
            body: "Maintaining good oral hygiene habits, including regular brushing, flossing, and avoiding excessive pressure on the filled tooth, helps support the lifespan of your restoration.",
          },
          {
            title: "Regular Dental Care",
            body: "Attending regular dental check-ups allows your dentist to monitor the condition of your fillings and identify any issues early, helping to maintain the results of your treatment.",
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Cost Guide",
        heading: "White Fillings Cost London",
        intro:
          "The cost of white fillings depends on the size, number, and complexity of the restorations required. Members receive 50% off all treatment fees.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Small Composite Filling", standard: "From £185.00", member: "From £92.50" },
          { label: "Medium Composite Filling", standard: "From £260.00", member: "From £130.00" },
          { label: "Large Composite Filling", standard: "From £305.00", member: "From £152.50" },
        ],
        notes: [
          {
            title: "Membership Plan",
            body: "Join for £20/month and receive 50% off all treatment fees. Members also receive two check-ups and two hygiene visits per year. A written quote is provided before any treatment begins.",
          },
        ],
        footnote: "For a full overview of our treatment fees, please visit our fees page.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        items: [
          {
            title: "London Practice",
            body: "Our practice is conveniently located in London, providing accessible dental care for patients across the city and surrounding areas.",
          },
          {
            title: "Restorative and Cosmetic Experience",
            body: "Our team has experience in a range of restorative and cosmetic dental treatments, delivering considered care tailored to each patient.",
          },
          {
            title: "Focus on Natural-Looking Results",
            body: "We take care to shade-match composite materials and shape fillings to achieve results that look and feel as natural as possible.",
          },
          {
            title: "Personalised Treatment Approach",
            body: "Every treatment plan is developed based on your individual clinical needs and goals, ensuring a considered and supportive experience throughout.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "White Fillings Near You",
        paragraphs: [
          "Patients visit Smile Dentist from across London for restorative and cosmetic dental care, including white composite fillings. Whether you are searching for white fillings near me or looking for a practice in London that can help with tooth decay or replacing old metal fillings, we are here to help.",
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice. We welcome patients for a consultation to discuss whether white fillings may be suitable for their individual needs.",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are white fillings?",
            a: "White fillings are tooth-coloured restorations made from composite resin. They are used to repair teeth affected by decay, minor damage, or to replace older metal fillings. The material is designed to blend with your natural teeth for a more discreet appearance.",
          },
          {
            q: "Are white fillings better than metal fillings?",
            a: "White fillings offer a more natural appearance and can preserve more tooth structure in many cases. However, both types have their place in dentistry. Your dentist will discuss which option is most appropriate based on the location and extent of the restoration required.",
          },
          {
            q: "How long do white fillings last?",
            a: "The longevity of white fillings varies between individuals and depends on factors such as oral hygiene, dietary habits, and the size and location of the filling. Regular dental check-ups help monitor the condition of your fillings and maintain their performance over time.",
          },
          {
            q: "Are white fillings noticeable?",
            a: "White fillings are designed to blend with your natural tooth colour. While no restoration is entirely undetectable, composite material is carefully shade-matched to achieve a discreet result. The outcome depends on factors such as size, location, and the skill of the clinician.",
          },
          {
            q: "Can old fillings be replaced with white fillings?",
            a: "In many cases, old amalgam fillings can be replaced with tooth-coloured composite restorations. Suitability depends on the size of the existing filling and the condition of the surrounding tooth structure. Your dentist will assess whether replacement is appropriate during a consultation.",
          },
        ],
      },
    ],
  },

  "tooth-extraction-london": {
    h1: "Tooth Extraction London",
    intro:
      "Tooth extraction is the careful removal of a tooth when it can no longer be preserved. Whether required due to damage, decay, or other clinical reasons, the procedure is carried out with the aim of protecting your overall oral health. Our London practice provides a calm and supportive environment throughout.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805791/tooth-contouring_ex8lq0.jpg",
      alt: "Tooth extraction care at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Procedure",
        heading: "What Is Tooth Extraction?",
        intro:
          "Tooth extraction is the removal of a tooth that cannot be preserved through other dental treatments. It is performed to protect the health of your surrounding teeth and gums, and is considered when alternative restorative options are no longer suitable.",
        items: [
          {
            title: "Protecting Oral Health",
            body: "Removing a tooth that cannot be saved helps protect the surrounding teeth and gums from further complications.",
          },
          {
            title: "Patient-Centred Care",
            body: "The procedure is carried out with careful consideration for your comfort, using local anaesthetic to help keep you at ease.",
          },
          {
            title: "Last Resort Approach",
            body: "Extraction is generally considered only when other treatment options have been explored and are no longer viable.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Clinical Reasons",
        heading: "When Is Tooth Extraction Needed?",
        intro:
          "Tooth extraction may be recommended in a number of clinical situations. Whether it is the right course of action depends on an individual assessment by your dentist.",
        items: [
          {
            title: "Severe Tooth Decay",
            body: "When decay has progressed significantly and the tooth structure can no longer support a restoration, extraction may be the most appropriate option to prevent further complications.",
          },
          {
            title: "Advanced Gum Disease",
            body: "Periodontal disease that has affected the bone and supporting structures around a tooth may require extraction to protect the health of the remaining teeth.",
          },
          {
            title: "Broken or Damaged Teeth",
            body: "Teeth that have sustained significant damage, such as fractures extending below the gum line, may not be restorable and may need to be removed.",
          },
          {
            title: "Impacted or Problematic Teeth",
            body: "Teeth that are unable to emerge properly or are causing issues for neighbouring teeth may need to be removed following a thorough clinical assessment.",
          },
        ],
        footer:
          "A clinical assessment is required to determine whether extraction is the most appropriate treatment for your individual situation.",
      },
      {
        kind: "cards",
        eyebrow: "Preserving Your Teeth",
        heading: "Alternatives to Tooth Extraction",
        intro:
          "Where possible, we aim to preserve natural teeth. Extraction is considered as a last resort when other restorative treatments are no longer suitable.",
        items: [
          {
            title: "Root Canal Treatment",
            body: "If the inner pulp of a tooth is infected but the surrounding structure remains sound, a root canal treatment may be able to preserve the tooth.",
          },
          {
            title: "Dental Crowns",
            body: "A crown can protect and strengthen a weakened tooth, covering the remaining structure to restore its shape and function.",
          },
          {
            title: "Other Restorative Options",
            body: "Depending on your situation, other treatments such as fillings or periodontal care may be explored before considering extraction.",
          },
        ],
        footer:
          "Your dentist will discuss all available options with you before recommending extraction.",
      },
      {
        kind: "steps",
        eyebrow: "Your Appointment",
        heading: "The Tooth Extraction Process",
        sub: "Understanding what to expect can help ease any concerns. The procedure follows a careful, step-by-step approach.",
        items: [
          {
            title: "Examination and Diagnosis",
            meta: "1",
            body: "Your dentist will carry out a thorough examination of the affected tooth and surrounding area. This may include imaging to assess the full extent of the issue and determine the most appropriate approach.",
          },
          {
            title: "Local Anaesthetic to Improve Comfort",
            meta: "2",
            body: "Local anaesthetic is used to help keep you comfortable throughout the procedure. Your dentist will ensure the area is sufficiently numb before proceeding, and you are welcome to let them know if you need more time or reassurance.",
          },
          {
            title: "Removal of the Tooth",
            meta: "3",
            body: "The tooth is carefully loosened and removed. You may feel some pressure during this stage, but you should not experience sharp pain. Your dentist will work gently and at a pace that feels manageable for you.",
          },
          {
            title: "Post-Treatment Care Guidance",
            meta: "4",
            body: "After the procedure, your dentist will provide detailed aftercare instructions to support the healing process. This guidance is tailored to your individual treatment.",
          },
        ],
        note: {
          title: "Support for Anxious Patients",
          body: "We understand that the prospect of tooth extraction can cause anxiety. Our team takes a calm and supportive approach, explaining each step clearly and working at a pace that suits you. Please let us know about any concerns before or during your appointment.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Recovery",
        heading: "Aftercare and Recovery",
        intro:
          "Following your aftercare guidance is important to support the healing process. Recovery varies between individuals and depends on the type of extraction performed.",
        items: [
          {
            title: "Mild Discomfort May Occur",
            body: "It is normal to experience some mild discomfort or swelling after the procedure. Your dentist will advise you on how best to manage this during your recovery.",
          },
          {
            title: "Recovery Varies",
            body: "How quickly you recover depends on several factors, including the complexity of the extraction and your individual healing response. Your dentist will provide realistic guidance.",
          },
          {
            title: "Aftercare Is Important",
            body: "Following the aftercare advice provided by your dentist carefully is important to protect the extraction site and support the healing process.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Restoration",
        heading: "Replacing a Missing Tooth After Extraction",
        intro:
          "After a tooth has been removed, replacing it is often recommended to help maintain the alignment of your remaining teeth and support your overall oral health.",
        items: [
          {
            title: "Dental Implants",
            body: "A dental implant is a fixed replacement option that is designed to look and function like a natural tooth. Suitability depends on a clinical assessment.",
          },
          {
            title: "Dental Bridges",
            body: "A bridge uses the adjacent teeth to support a replacement tooth, offering a fixed solution without the need for surgical placement.",
          },
          {
            title: "Other Restorative Options",
            body: "Depending on your individual needs and clinical assessment, other replacement options may be discussed. Your dentist will recommend the most appropriate solution.",
          },
        ],
        footer:
          "Replacing a missing tooth helps prevent neighbouring teeth from shifting and supports long-term oral health.",
      },
      {
        kind: "cards",
        eyebrow: "Cost Guide",
        heading: "Tooth Extraction Cost London",
        intro:
          "The cost of tooth extraction varies depending on individual clinical needs. A personalised treatment plan is provided following your consultation.",
        items: [
          {
            title: "Complexity of Extraction",
            body: "The type of extraction required — whether straightforward or more complex — influences the overall cost of your treatment.",
          },
          {
            title: "Type of Tooth",
            body: "The position and condition of the tooth being removed can affect the approach needed and the associated cost.",
          },
          {
            title: "Personalised Planning",
            body: "Each treatment plan is tailored to your needs. A written quote is provided before any treatment begins so you can make an informed decision.",
          },
        ],
      },
      {
        kind: "pricing",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Simple Extraction", standard: "From £250.00", member: "From £125.00" },
          { label: "Complicated Extraction", standard: "From £450.00", member: "From £225.00" },
          { label: "Surgical Extraction", standard: "From £650.00", member: "From £325.00" },
        ],
        notes: [
          {
            title: "Membership Plan",
            body: "Join for £20/month and receive 50% off all treatment fees. Members also receive two check-ups and two hygiene visits per year. A written quote is provided before any treatment begins.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        items: [
          {
            title: "London Practice",
            body: "Conveniently located in London, our practice provides accessible dental care for patients across the city and surrounding areas.",
          },
          {
            title: "Calm and Supportive Approach",
            body: "We understand that dental procedures can cause anxiety. Our team takes a calm, patient-centred approach, explaining each step and working at a pace that suits you.",
          },
          {
            title: "Experience in General Dentistry",
            body: "Our team has experience in a range of general and restorative dental treatments, providing considered care tailored to each patient.",
          },
          {
            title: "Personalised Care",
            body: "Every treatment plan is developed based on your individual clinical needs and personal circumstances, ensuring a considered and supportive experience.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Tooth Extraction Near You",
        paragraphs: [
          "Patients visit Smile Dentist from across London for general and restorative dental care, including tooth extraction. Whether you are searching for tooth extraction near me or looking for a dental practice in London that can help with a damaged or problematic tooth, we are here to support you.",
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice. We welcome patients for a consultation to assess your needs and discuss the most appropriate treatment options.",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is tooth extraction?",
            a: "Tooth extraction is the removal of a tooth that can no longer be preserved through other dental treatments. It is carried out to protect the health of surrounding teeth and gums. The procedure is performed under local anaesthetic, and your dentist will explain the process fully beforehand.",
          },
          {
            q: "Is tooth extraction painful?",
            a: "Local anaesthetic is used to help keep you comfortable during the procedure. While you may feel some pressure, you should not experience sharp pain. If you feel any discomfort at any point, your dentist can adjust the anaesthesia. Some mild soreness after the procedure is normal.",
          },
          {
            q: "How long does it take to recover?",
            a: "Recovery varies between individuals and depends on the type of extraction performed. Mild discomfort or swelling may occur in the days following treatment. Following the aftercare guidance provided by your dentist is important to support the healing process.",
          },
          {
            q: "When is extraction necessary?",
            a: "Extraction may be recommended when a tooth is severely decayed, damaged, or affected by advanced gum disease. It is generally considered when other treatment options are no longer suitable. A clinical assessment is required to determine whether extraction is the most appropriate course of action.",
          },
          {
            q: "What should I do after tooth extraction?",
            a: "Following your aftercare instructions carefully is important for recovery. This typically includes resting, avoiding vigorous rinsing, and eating soft foods initially. Your dentist will provide detailed guidance specific to your treatment to help support the healing process.",
          },
        ],
      },
    ],
  },

  "wisdom-tooth-extraction-london": {
    h1: "Wisdom Tooth Extraction London",
    intro:
      "Wisdom tooth extraction is the careful removal of one or more third molars when they are causing pain, infection, or other problems. Whether your wisdom teeth are impacted or creating discomfort, the procedure is carried out with the aim of relieving symptoms and protecting your oral health — here at our London practice.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805807/tooth-extraction_efzra6.jpg",
      alt: "Wisdom tooth extraction at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Procedure",
        heading: "What Is Wisdom Tooth Extraction?",
        intro:
          "Wisdom tooth extraction is the removal of one or more of your third molars — the last teeth to develop, usually at the back of the mouth. It is often required when these teeth are impacted, partially erupted, or causing problems for your surrounding teeth and gums. The procedure helps prevent further complications and supports your overall oral health.",
        items: [
          {
            title: "Preventing Complications",
            body: "Removing problematic wisdom teeth helps protect the health and alignment of your surrounding teeth and gums.",
          },
          {
            title: "Relieving Discomfort",
            body: "When wisdom teeth cause pain or infection, removal can help relieve persistent discomfort and support recovery.",
          },
          {
            title: "Clinically Assessed",
            body: "The decision to extract is always based on a thorough clinical assessment of your individual situation.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Recognising the Signs",
        heading: "Signs You May Need Wisdom Tooth Extraction",
        intro:
          "A number of symptoms may indicate that your wisdom teeth are causing problems. If you are experiencing any of the following, we would recommend a consultation to assess your situation.",
        items: [
          {
            title: "Pain at the Back of the Mouth",
            body: "Persistent or recurring pain in the area behind your back teeth may be a sign that a wisdom tooth is causing problems and may need to be assessed.",
          },
          {
            title: "Swelling or Inflammation",
            body: "Swelling, tenderness, or redness around the gum tissue near a wisdom tooth may indicate inflammation or the early stages of infection.",
          },
          {
            title: "Difficulty Opening the Mouth",
            body: "Jaw stiffness or reduced ability to open your mouth fully can sometimes be associated with problematic wisdom teeth and should be assessed.",
          },
          {
            title: "Infection or Repeated Discomfort",
            body: "Recurring episodes of pain, swelling, or infection around a wisdom tooth may suggest that removal is the most appropriate course of action.",
          },
        ],
        footer:
          "Symptoms vary between individuals and require a clinical diagnosis. If you are experiencing dental discomfort, please contact our team or visit our emergency dentist page for urgent care.",
      },
      {
        kind: "cards",
        eyebrow: "Key Concern",
        heading: "Impacted Wisdom Teeth",
        intro:
          "Impaction is one of the most common reasons wisdom teeth need to be removed. Understanding what this means can help you feel more informed about your treatment options.",
        items: [
          {
            title: "What Does Impaction Mean?",
            body: "A wisdom tooth is described as impacted when it is unable to emerge fully through the gum into its correct position. This can happen when there is insufficient space in the jaw or when the tooth is growing at an angle.",
          },
          {
            title: "How Wisdom Teeth May Not Erupt Properly",
            body: "Impacted wisdom teeth may remain fully beneath the gum, or they may only partially emerge, leaving a flap of gum tissue over the tooth. This partial eruption can make the area difficult to clean and more susceptible to problems.",
          },
          {
            title: "Potential Effects on Surrounding Teeth and Gums",
            body: "When a wisdom tooth is impacted, it may place pressure on neighbouring teeth, potentially affecting their alignment. It can also contribute to inflammation or infection in the surrounding gum tissue. A clinical assessment is needed to determine whether removal is advisable.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Appointment",
        heading: "The Wisdom Tooth Extraction Process",
        sub: "Understanding what to expect can help ease any concerns. The procedure follows a careful, step-by-step approach.",
        items: [
          {
            title: "Consultation and Assessment",
            meta: "1",
            body: "Your dentist will carry out a thorough examination of the affected area, discuss your symptoms, and assess whether extraction is the most appropriate option for your individual situation.",
          },
          {
            title: "Imaging if Required",
            meta: "2",
            body: "Depending on the position of the tooth, imaging may be used to provide a clearer picture of the area. This helps your dentist plan the most suitable approach for removal.",
          },
          {
            title: "Local Anaesthetic to Improve Comfort",
            meta: "3",
            body: "Local anaesthetic is used to help keep you comfortable throughout the procedure. Your dentist will ensure the area is sufficiently numb before proceeding, and you are welcome to let them know if you need more time or reassurance.",
          },
          {
            title: "Removal of the Tooth",
            meta: "4",
            body: "The wisdom tooth is carefully loosened and removed. You may feel some pressure during this stage, but you should not experience sharp pain. Your dentist will work gently and at a pace that feels manageable for you.",
          },
          {
            title: "Post-Treatment Care",
            meta: "5",
            body: "After the procedure, your dentist will provide detailed aftercare instructions to support the healing process. This guidance is tailored to your individual treatment.",
          },
        ],
        note: {
          title: "Support for Anxious Patients",
          body: "We understand that the prospect of wisdom tooth extraction can cause anxiety. Our team takes a calm and supportive approach, explaining each step clearly and working at a pace that suits you. Please let us know about any concerns before or during your appointment.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Recovery",
        heading: "Aftercare and Recovery",
        intro:
          "Following your aftercare guidance is important to support the healing process. Recovery varies between individuals and depends on the complexity of the extraction.",
        items: [
          {
            title: "Mild Swelling May Occur",
            body: "It is normal to experience some mild swelling or discomfort after the procedure. Your dentist will advise you on how best to manage this during your recovery.",
          },
          {
            title: "Recovery Varies",
            body: "How quickly you recover depends on several factors, including the position of the tooth and the complexity of the extraction. Your dentist will provide realistic guidance.",
          },
          {
            title: "Aftercare Supports Healing",
            body: "Following the aftercare advice provided by your dentist carefully is important to protect the extraction site and support the healing process.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Clinical Considerations",
        heading: "When Is Wisdom Tooth Extraction Necessary?",
        intro:
          "The decision to remove a wisdom tooth is always based on a clinical assessment. There are a number of common reasons why extraction may be recommended.",
        items: [
          {
            title: "Persistent Pain",
            body: "Ongoing or recurring pain in the wisdom tooth area that does not resolve with conservative treatment may indicate that removal is the most appropriate option.",
          },
          {
            title: "Recurrent Infection",
            body: "Repeated episodes of infection around a wisdom tooth suggest that the tooth is unlikely to settle on its own and may benefit from removal.",
          },
          {
            title: "Impact on Surrounding Teeth",
            body: "When a wisdom tooth is pressing against neighbouring teeth or contributing to alignment concerns, extraction may help protect the health of your other teeth.",
          },
          {
            title: "Limited Space in the Jaw",
            body: "When there is insufficient space for a wisdom tooth to emerge fully, it may become impacted. In such cases, removal is often recommended to prevent further complications.",
          },
        ],
        footer:
          "For more information about general tooth extraction, please visit our dedicated page.",
      },
      {
        kind: "pricing",
        eyebrow: "Cost Guide",
        heading: "Wisdom Tooth Extraction Cost London",
        intro:
          "The cost of wisdom tooth extraction varies depending on individual clinical needs. A personalised treatment plan is provided following your consultation.",
        columns: ["Extraction Type", "Standard", "Member"],
        rows: [
          { label: "Simple Extraction", standard: "From £250", member: "From £125" },
          { label: "Complicated Extraction", standard: "From £450", member: "From £225" },
          { label: "Surgical Extraction", standard: "From £650", member: "From £325" },
        ],
        notes: [
          {
            title: "Smile Plan Members Save 50%",
            body: "Our membership plan offers 50% off all treatments, including extractions. Visit our membership page to find out more.",
          },
        ],
        footnote:
          "The type of extraction required depends on the position and condition of your tooth. A written quote is provided following your consultation. For a full overview, visit our fees page.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        items: [
          {
            title: "London Practice",
            body: "Conveniently located in London, our practice provides accessible dental care for patients across the city and surrounding areas.",
          },
          {
            title: "Calm and Supportive Approach",
            body: "We understand that wisdom tooth extraction can cause anxiety. Our team takes a calm, patient-centred approach, explaining each step and working at a pace that suits you.",
          },
          {
            title: "Experience in General Dentistry",
            body: "Our team has experience in a range of general and restorative dental treatments, providing considered care tailored to each patient.",
          },
          {
            title: "Personalised Care",
            body: "Every treatment plan is developed based on your individual clinical needs and personal circumstances, ensuring a considered and supportive experience.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Wisdom Tooth Extraction Near You",
        paragraphs: [
          "Patients visit Smile Dentist from across London for general and restorative dental care, including wisdom tooth extraction. Whether you are searching for wisdom tooth extraction near me or looking for a dental practice in London that can help with impacted or problematic wisdom teeth, we are here to support you.",
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice. We welcome patients for a consultation to assess your needs and discuss the most appropriate treatment options.",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is wisdom tooth extraction?",
            a: "Wisdom tooth extraction is the removal of one or more third molars — the teeth at the very back of your mouth. It is commonly carried out when wisdom teeth are impacted, causing pain, or affecting the health of surrounding teeth. A clinical assessment determines whether removal is appropriate.",
          },
          {
            q: "Is wisdom tooth removal painful?",
            a: "Local anaesthetic is used to help keep you comfortable during the procedure. While you may feel some pressure, you should not experience sharp pain. Some mild discomfort or swelling may occur afterwards, and your dentist will provide guidance on managing this during recovery.",
          },
          {
            q: "How long does recovery take?",
            a: "Recovery varies between individuals and depends on the complexity of the extraction. Mild discomfort or swelling may occur in the days following treatment. Following the aftercare advice provided by your dentist is important to support the healing process.",
          },
          {
            q: "When should a wisdom tooth be removed?",
            a: "Removal may be recommended when a wisdom tooth is causing persistent pain, recurrent infection, or is affecting neighbouring teeth. The decision is always based on a thorough clinical assessment of your individual situation, including the position and condition of the tooth.",
          },
          {
            q: "What should I do after wisdom tooth extraction?",
            a: "Following your aftercare instructions carefully is important for recovery. This typically includes resting, avoiding vigorous rinsing, and eating soft foods initially. Your dentist will provide detailed guidance specific to your treatment to help support the healing process.",
          },
        ],
      },
    ],
  },

  "composite-veneers-london": {
    h1: "Composite Veneers London",
    intro:
      "Composite veneers are a minimally invasive cosmetic treatment in which tooth-coloured resin is hand-sculpted onto the front surface of the teeth to improve shape, colour, and overall smile appearance. At our London practice, every veneer is individually crafted to suit your smile.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard From £595 / tooth",
      "Member (50% off) From £297.50",
      "Personalised treatment plan with full costs provided",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg",
      alt: "Composite veneers cosmetic dentistry at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Are Composite Veneers?",
        intro:
          "Composite veneers are a cosmetic dental treatment in which tooth-coloured composite resin is layered and shaped directly onto the front of the teeth. They are used in cosmetic dentistry to help address concerns such as discolouration, minor chips, small gaps, and uneven tooth shape — typically without the need to alter significant natural tooth structure.",
        items: [
          {
            title: "Hand-Sculpted",
            body: "Each composite veneer is individually shaped and contoured by your dentist directly on the tooth, allowing fine adjustments to suit your facial features and smile line.",
          },
          {
            title: "Minimally Invasive",
            body: "Composite veneers typically require little or no removal of natural tooth structure, making them a more conservative cosmetic option for many patients.",
          },
          {
            title: "Often Single Visit",
            body: "Composite veneers can usually be completed in one appointment, as the resin is applied and shaped chair-side rather than being made in a laboratory.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Is This Treatment for You?",
        heading: "Who Are Composite Veneers Suitable For?",
        sub: "Composite veneers may be considered for patients seeking a minimally invasive way to enhance the appearance of their smile. Common cosmetic concerns that composite veneers can help address include:",
        items: [
          {
            title: "Discoloured or Stained Teeth",
            meta: "1",
            body: "Teeth with surface staining or discolouration that may not respond fully to whitening can sometimes be improved with composite veneers, which can be colour-matched to a brighter shade.",
          },
          {
            title: "Chipped or Worn Edges",
            meta: "2",
            body: "Composite veneers can be used to rebuild small chips and worn biting edges, helping to restore a more even tooth shape and overall smile line.",
          },
          {
            title: "Small Gaps Between Teeth",
            meta: "3",
            body: "Minor spaces between teeth can sometimes be reduced or closed using composite veneers, depending on the size and position of the gaps.",
          },
          {
            title: "Uneven Tooth Shape",
            meta: "4",
            body: "Composite resin can be sculpted to refine tooth proportions and improve symmetry, often as part of a wider smile makeover approach.",
          },
        ],
        note: {
          title: "Important",
          body: "Suitability for composite veneers depends on a clinical assessment of your teeth, gums, and bite. Your dentist will discuss all suitable options during your consultation.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Why Consider Composite Veneers",
        heading: "Benefits of Composite Veneers",
        intro:
          "Composite veneers offer a number of potential benefits as a cosmetic treatment option. The outcome depends on your individual clinical situation and personal goals.",
        items: [
          {
            title: "Conservative Approach",
            body: "Composite veneers typically require little to no preparation of the natural tooth, making them one of the more conservative cosmetic options available.",
          },
          {
            title: "Treatment in One Visit",
            body: "Because the resin is applied and shaped at the chairside, composite veneers can usually be completed in a single appointment, with no laboratory wait.",
          },
          {
            title: "Tailored Aesthetics",
            body: "The composite material is hand-sculpted in layers and colour-matched to your natural teeth, allowing the dentist to refine shape, shade, and translucency in real time.",
          },
          {
            title: "Repairable and Adjustable",
            body: "Composite veneers can usually be polished, repaired, or adjusted as needed over time, which can be a practical advantage compared with some alternative treatments.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Composite Veneers Process",
        sub: "The composite veneer process follows a structured approach. Each stage is carefully planned to help achieve a result that is appropriate for your individual smile.",
        items: [
          {
            title: "Consultation & Smile Assessment",
            meta: "Step 1",
            body: "Your dentist will examine your teeth and gums, discuss your goals, and confirm whether composite veneers are a suitable option for you.",
          },
          {
            title: "Treatment Planning",
            meta: "Step 2",
            body: "A personalised treatment plan is developed, including shade selection, the number of teeth to be treated, and the expected approach.",
          },
          {
            title: "Tooth Preparation",
            meta: "Step 3",
            body: "The tooth surface is gently cleaned and conditioned. Little or no removal of natural tooth structure is typically required.",
          },
          {
            title: "Layering & Sculpting",
            meta: "Step 4",
            body: "Composite resin is applied in thin layers, with each layer carefully shaped and hardened using a curing light to recreate natural tooth anatomy.",
          },
          {
            title: "Polishing & Final Check",
            meta: "Step 5",
            body: "The veneers are refined, contoured, and polished to a natural-looking finish, and your bite is checked to ensure comfort.",
          },
        ],
      },
      {
        kind: "table",
        eyebrow: "Compare Your Options",
        heading: "Composite vs Porcelain Veneers",
        sub: "Both composite and porcelain veneers can help improve smile appearance. The most appropriate option depends on your clinical situation, goals, and preferences. Your dentist can help you compare both during your consultation.",
        columns: ["Consideration", "Composite Veneers", "Porcelain Veneers"],
        rows: [
          ["Material", "Tooth-coloured composite resin", "Custom-made ceramic shells"],
          [
            "Tooth Preparation",
            "Little to no preparation typically required",
            "Some enamel preparation usually required",
          ],
          ["Treatment Time", "Often a single visit", "Usually two or more visits"],
          [
            "Longevity",
            "May typically last several years with care",
            "Generally tend to last longer than composite",
          ],
          [
            "Stain Resistance",
            "Can stain over time with certain habits",
            "Tends to be more stain-resistant",
          ],
          [
            "Reversibility",
            "Largely reversible in most cases",
            "Less reversible due to enamel preparation",
          ],
          ["Indicative Cost (per tooth)", "From £595", "From £1,095"],
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Do Composite Veneers Last?",
        intro:
          "The lifespan of composite veneers varies between individuals and is influenced by oral habits, oral hygiene, and routine maintenance. With appropriate care, composite veneers may typically last several years.",
        items: [
          {
            title: "Individual Variation",
            body: "Longevity differs from patient to patient. Bite forces, grinding habits, diet, and the location of the veneers all influence how long composite veneers last.",
          },
          {
            title: "Daily Care",
            body: "Good oral hygiene, gentle brushing, and limiting heavily staining substances such as coffee, tea, and red wine can help maintain the appearance of composite veneers.",
          },
          {
            title: "Regular Maintenance",
            body: "Routine dental visits and professional polishing can help support the long-term appearance of composite veneers and identify any maintenance needs early.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Longevity varies between individuals and cannot be guaranteed. Your dentist will discuss expected outcomes and care guidance during your consultation.",
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Composite Veneers Cost London",
        intro:
          "The cost of composite veneers depends on the number of teeth being treated, the complexity of the case, and your personalised treatment plan. Full costs are provided in writing before treatment begins.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Number of Teeth Treated",
            body: "Whether one or several teeth are being treated influences the overall cost of your composite veneer treatment.",
          },
          {
            title: "Complexity of the Case",
            body: "More extensive sculpting or smile-design considerations may affect the time and cost involved.",
          },
          {
            title: "Personalised Treatment Plan",
            body: "An itemised written treatment plan is provided after consultation, so you have full clarity on costs before agreeing to treatment.",
          },
          {
            title: "Membership Benefits",
            body: "Our membership plan offers reduced treatment fees for patients who wish to benefit from ongoing savings across all treatments.",
          },
        ],
      },
      {
        kind: "pricing",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Composite Veneer (per tooth)", standard: "From £595", member: "From £297.50" },
          { label: "Composite Bonding (per tooth)", standard: "From £395", member: "From £197.50" },
          { label: "Porcelain Veneer (per tooth)", standard: "From £1,095", member: "From £547.50" },
        ],
        footnote:
          "Final costs depend on the number of veneers and complexity. A written treatment plan with full costs is provided before treatment begins.",
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in cosmetic and minimally invasive dentistry",
          "Hand-sculpted, individually crafted composite veneers",
          "Personalised smile design approach for every patient",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Visit Our London Practice",
        heading: "Composite Veneers in South Kensington",
        paragraphs: [
          "Our South Kensington practice welcomes patients from across London and surrounding areas who are considering composite veneers as a minimally invasive cosmetic option. Whether you are exploring veneer treatment for the first time or comparing it with other cosmetic options, our team is here to provide clear, balanced information.",
          "20 Old Brompton Road, South Kensington, London SW7 3DL",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are composite veneers?",
            a: "Composite veneers are a cosmetic dental treatment in which tooth-coloured composite resin is applied directly to the front surface of the teeth and carefully sculpted by hand. They may be used to improve the shape, colour, or appearance of teeth, and are typically completed in a single appointment.",
          },
          {
            q: "How are composite veneers different from porcelain veneers?",
            a: "Composite veneers are made from layered resin material applied directly to the tooth, while porcelain veneers are custom-made ceramic shells crafted in a dental laboratory. Composite veneers are generally a more conservative and reversible option, while porcelain veneers tend to offer greater longevity. Suitability depends on individual clinical assessment.",
          },
          {
            q: "Are composite veneers painful?",
            a: "The composite veneer process is typically comfortable. Because little to no removal of natural tooth structure is usually required, local anaesthetic is often unnecessary. Some patients may notice mild sensitivity afterwards, which generally settles in a short time. Your dentist will discuss what to expect during your consultation.",
          },
          {
            q: "How long do composite veneers last?",
            a: "The longevity of composite veneers varies between individuals and is influenced by oral hygiene, dietary habits, bite forces, and general care. With appropriate maintenance and regular dental visits, composite veneers may typically last several years. Your dentist will discuss expected outcomes and care guidance during your consultation.",
          },
          {
            q: "Can composite veneers stain?",
            a: "Composite resin can be more susceptible to surface staining than porcelain over time, particularly with frequent consumption of staining substances such as coffee, tea, red wine, or tobacco. Good oral hygiene, regular hygiene appointments, and limiting staining habits can help maintain their appearance.",
          },
          {
            q: "Is the composite veneer treatment reversible?",
            a: "Composite veneers are generally considered a minimally invasive and largely reversible treatment, as little or no natural tooth structure is typically removed. They can also usually be repaired, polished, or replaced as needed over time. Suitability and the most appropriate option for your situation will be confirmed at clinical assessment.",
          },
        ],
      },
      {
        kind: "stories",
        eyebrow: "Patient Results",
        heading: "Smile Gallery",
        sub: "Examples of treatments we have provided for our patients.",
        note: "About these cases: Composite veneers and composite bonding use the same tooth-coloured composite resin and similar hand-sculpting techniques. The cases below are examples of composite work completed at our practice. Individual results vary and depend on clinical assessment.",
        items: [
          {
            title: "Restoring a Chipped Front Tooth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
              alt: "Before Restoring a Chipped Front Tooth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
              alt: "After Restoring a Chipped Front Tooth",
            },
          },
          {
            title: "Transforming Discoloured & Chipped Teeth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
              alt: "Before Transforming Discoloured & Chipped Teeth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
              alt: "After Transforming Discoloured & Chipped Teeth",
            },
          },
        ],
        disclaimer:
          "Individual results may vary. These images show actual patients who consented to their photos being used. A clinical assessment is required to determine suitability for any treatment.",
      },
    ],
  },

  "dental-veneers-london": {
    h1: "Dental Veneers London",
    intro:
      "Dental veneers are a cosmetic treatment used to help improve the appearance of healthy teeth. At our London practice we provide both composite and porcelain veneers, tailored to your individual clinical assessment and smile goals.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Composite Veneer From £595 / tooth",
      "Porcelain Veneer From £1,095",
      "Personalised treatment plan with full costs provided before treatment",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg",
      alt: "Dental veneers cosmetic dentistry at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Are Dental Veneers?",
        intro:
          "Dental veneers are thin, tooth-coloured coverings bonded to the visible front surface of the teeth. They form part of our cosmetic dentistry treatments and are used to help address concerns such as discolouration, minor chips, small gaps, and uneven tooth shape. Veneers are available in different materials to suit different clinical situations and preferences.",
        items: [
          {
            title: "Individually Designed",
            body: "Each veneer is individually shaped, shaded, and positioned to blend with your natural teeth and suit your facial features.",
          },
          {
            title: "Material Choice",
            body: "Veneers can be made from composite resin or porcelain. Each material has different characteristics in terms of preparation, treatment time, and longevity.",
          },
          {
            title: "Clinical Assessment First",
            body: "Veneers are not suitable for every patient or every situation. A full clinical assessment is always carried out before treatment is planned or recommended.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Our Veneer Options",
        heading: "Types of Dental Veneers",
        intro:
          "We offer two main types of veneers at our London practice. Your dentist will explain the differences in detail and help you decide which option is most appropriate for your situation.",
        items: [
          {
            title: "Composite Veneers",
            body: "Tooth-coloured composite resin is hand-sculpted and layered directly onto the front of the teeth, typically in a single visit. Often a minimally invasive option, with little to no preparation of natural tooth structure usually required.",
            bullets: [
              "Often completed in a single appointment",
              "Typically minimally invasive",
              "Usually repairable and adjustable over time",
              "Generally lower initial cost — from £595 per tooth",
            ],
          },
          {
            title: "Porcelain Veneers",
            body: "Custom-made ceramic shells are crafted in a dental laboratory and bonded to the front surface of the teeth. Some enamel preparation is usually required, and treatment typically takes two or more visits.",
            bullets: [
              "Custom-crafted ceramic material",
              "Tend to be more stain-resistant",
              "Generally tend to last longer than composite",
              "From £1,095 per tooth",
            ],
          },
        ],
      },
      {
        kind: "table",
        eyebrow: "Compare at a Glance",
        heading: "Composite vs Porcelain Veneers",
        sub: "Both options can help improve smile appearance in suitable cases. The most appropriate choice depends on individual clinical assessment.",
        columns: ["Consideration", "Composite Veneers", "Porcelain Veneers"],
        rows: [
          ["Material", "Tooth-coloured composite resin", "Custom-made ceramic shells"],
          [
            "Tooth Preparation",
            "Little to none typically required",
            "Some enamel preparation usually required",
          ],
          ["Treatment Time", "Often single visit", "Usually two or more visits"],
          ["Longevity", "May typically last several years", "Generally tend to last longer"],
          [
            "Stain Resistance",
            "Can stain with certain habits",
            "Tends to be more stain-resistant",
          ],
          [
            "Reversibility",
            "Largely reversible in most cases",
            "Less reversible due to preparation",
          ],
          ["Indicative Cost", "From £595 / tooth", "From £1,095 / tooth"],
        ],
      },
      {
        kind: "steps",
        eyebrow: "Is This Treatment for You?",
        heading: "Who Are Dental Veneers Suitable For?",
        sub: "Veneers may be considered for patients seeking to improve the appearance of healthy teeth with specific cosmetic concerns. Common reasons to explore veneers include:",
        items: [
          {
            title: "Discolouration",
            meta: "1",
            body: "Teeth with staining or discolouration that may not respond fully to whitening treatments.",
          },
          {
            title: "Small Chips or Worn Edges",
            meta: "2",
            body: "Minor chips or worn biting edges that affect the overall smile line.",
          },
          {
            title: "Small Gaps Between Teeth",
            meta: "3",
            body: "Minor spacing between teeth that you would like to reduce or close cosmetically.",
          },
          {
            title: "Uneven Tooth Shape",
            meta: "4",
            body: "Teeth that appear uneven, irregular, or out of proportion, often as part of a wider smile plan.",
          },
        ],
        note: {
          title: "Important",
          body: "Veneers are only suitable for patients with healthy teeth and gums. Underlying issues such as decay, gum disease, or significant bite problems should be addressed first. Suitability is always confirmed by clinical assessment. Alternatives may include whitening, composite bonding, or orthodontic treatment where appropriate.",
        },
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Dental Veneers Process",
        sub: "The exact process depends on the type of veneers chosen. In general, the pathway includes these key stages:",
        items: [
          {
            title: "Consultation",
            meta: "Step 1",
            body: "Discussion of your smile goals, clinical examination, and assessment of suitability.",
          },
          {
            title: "Treatment Planning",
            meta: "Step 2",
            body: "Personalised plan covering material choice, number of teeth, shade, and written costs.",
          },
          {
            title: "Tooth Preparation",
            meta: "Step 3",
            body: "Little or no preparation for composite; some enamel reduction is typically required for porcelain.",
          },
          {
            title: "Placement",
            meta: "Step 4",
            body: "Composite is layered and sculpted chairside; porcelain veneers are bonded after being made in a dental laboratory.",
          },
          {
            title: "Review & Polishing",
            meta: "Step 5",
            body: "Final polishing, bite check, and guidance on care and maintenance.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Do Veneers Last?",
        intro:
          "The lifespan of veneers varies between individuals and depends on the material, habits, oral hygiene, and maintenance.",
        items: [
          {
            title: "Material Matters",
            body: "Porcelain veneers generally tend to last longer than composite veneers, though both can provide good service with appropriate care. Outcomes vary between individuals.",
          },
          {
            title: "Daily Care",
            body: "Good oral hygiene, gentle brushing, limiting staining foods and drinks, and avoiding habits such as nail-biting can help preserve the appearance of your veneers.",
          },
          {
            title: "Regular Review",
            body: "Regular dental and hygiene visits allow your veneers to be monitored, polished, and any maintenance needs identified early.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Longevity varies between individuals and cannot be guaranteed. Your dentist will discuss expected outcomes and care guidance during your consultation.",
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        heading: "Dental Veneers Cost London",
        intro:
          "The overall cost of veneers depends on the material chosen, the number of teeth treated, and the complexity of the case. A written treatment plan with full costs is provided before treatment begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Composite Bonding (per tooth)", standard: "From £395", member: "From £197.50" },
          { label: "Composite Veneer (per tooth)", standard: "From £595", member: "From £297.50" },
          { label: "Porcelain Veneer (per tooth)", standard: "From £1,095", member: "From £547.50" },
        ],
        footnote:
          "Final costs depend on the number of veneers and case complexity. A written treatment plan is provided before treatment begins.",
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of our treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "Experienced in cosmetic and minimally invasive dentistry",
          "Both composite and porcelain veneer options available",
          "Personalised smile design approach based on clinical assessment",
          "Transparent written treatment plans and costs",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Visit Our London Practice",
        heading: "Dental Veneers in South Kensington",
        paragraphs: [
          "Our South Kensington practice welcomes patients from across London and surrounding areas who are considering dental veneers. Whether you are comparing composite and porcelain options for the first time, or exploring veneers as part of a wider smile plan, our team is here to provide clear, balanced information.",
          "20 Old Brompton Road, South Kensington, London SW7 3DL",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are dental veneers?",
            a: "Dental veneers are thin, tooth-coloured coverings bonded to the front surface of the teeth. They are used in cosmetic dentistry to help improve the shape, colour, or appearance of teeth. Veneers are most commonly made from composite resin or porcelain, each with its own characteristics.",
          },
          {
            q: "What is the difference between composite and porcelain veneers?",
            a: "Composite veneers are hand-sculpted directly onto the teeth using tooth-coloured resin, typically in a single visit. Porcelain veneers are custom-made ceramic shells crafted in a dental laboratory and usually require two or more visits. The most appropriate option depends on your clinical situation, goals, and preferences, and will be discussed during consultation.",
          },
          {
            q: "Who is suitable for veneers?",
            a: "Veneers may be considered for patients seeking to improve the appearance of healthy teeth with cosmetic concerns such as discolouration, small chips, minor gaps, or uneven shape. Suitability depends on a clinical assessment of your teeth, gums, and bite, and not every patient is a suitable candidate.",
          },
          {
            q: "How long do dental veneers last?",
            a: "The lifespan of veneers varies between individuals and is influenced by the material chosen, oral hygiene, habits such as grinding, and regular maintenance. Composite and porcelain veneers typically last several years with appropriate care. Your dentist will discuss expected outcomes and care guidance during your consultation.",
          },
          {
            q: "Do veneers damage your natural teeth?",
            a: "Veneers can involve minimal to moderate preparation of the natural tooth surface, depending on the type chosen. Composite veneers typically require little or no preparation, while porcelain veneers usually involve some enamel reduction. Your dentist will explain what is involved before treatment begins.",
          },
          {
            q: "Are veneers painful?",
            a: "The veneer process is typically comfortable. Local anaesthetic may be used where preparation of the tooth is required. Some patients may notice mild sensitivity for a short time afterwards, which usually settles. Your dentist will discuss what to expect at your consultation.",
          },
          {
            q: "Can veneers stain over time?",
            a: "Porcelain veneers tend to be more stain-resistant, while composite veneers can be more susceptible to surface staining over time, particularly with heavy consumption of staining substances such as coffee, tea, red wine, or tobacco. Good oral hygiene, regular hygiene appointments, and limiting staining habits can help maintain appearance.",
          },
          {
            q: "How do I choose between composite and porcelain veneers?",
            a: "The choice depends on several factors, including your cosmetic goals, clinical situation, budget, and preferences around preparation and longevity. During consultation, your dentist will compare the options in detail and help you make an informed decision based on your individual assessment.",
          },
        ],
      },
      {
        kind: "stories",
        eyebrow: "Patient Results",
        heading: "Smile Gallery",
        sub: "Examples of treatments we have provided for our patients.",
        note: "About these cases: The cases below show examples of cosmetic work completed at our practice. Individual results vary and depend on clinical assessment.",
        items: [
          {
            title: "Restoring a Chipped Front Tooth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
              alt: "Before Restoring a Chipped Front Tooth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
              alt: "After Restoring a Chipped Front Tooth",
            },
          },
          {
            title: "Transforming Discoloured & Chipped Teeth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
              alt: "Before Transforming Discoloured & Chipped Teeth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
              alt: "After Transforming Discoloured & Chipped Teeth",
            },
          },
        ],
        disclaimer:
          "Individual results may vary. These images show actual patients who consented to their photos being used. A clinical assessment is required to determine suitability for any treatment.",
      },
    ],
  },

  "gum-contouring-london": {
    h1: "Gum Contouring London",
    intro:
      "Gum contouring is a cosmetic procedure designed to reshape the gum line and improve the balance between your teeth and gums. At our London practice, treatment is carefully planned to create a more harmonious, natural-looking smile.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Gum Contouring (Per Tooth) From £200",
      "Member (50% off) From £100",
      "Membership £20/month",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805808/gum-contouring_k46rrb.jpg",
      alt: "Gum contouring treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Procedure",
        heading: "What Is Gum Contouring?",
        intro:
          "Gum contouring is a cosmetic dental procedure that involves carefully reshaping the gum line by removing small amounts of excess gum tissue. The goal is to reveal more of the natural tooth structure, creating a more balanced and proportionate appearance.",
        items: [
          {
            title: "Reshaping the Gum Line",
            body: "Excess gum tissue is gently removed to expose more of your natural tooth, helping to create a smoother, more even gum line.",
          },
          {
            title: "Revealing Natural Teeth",
            body: "Many patients have healthy tooth structure hidden beneath excess gum tissue. Gum contouring can help reveal this, improving the visible proportions of your smile.",
          },
          {
            title: "Patient-Friendly Approach",
            body: "Treatment is carried out under local anaesthetic to improve comfort, and the procedure is typically completed in a single appointment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Gummy Smile",
        heading: "Gummy Smile Treatment",
        items: [
          {
            title: "What Is a Gummy Smile?",
            body: "A gummy smile refers to excessive gum tissue being visible when you smile. This can make the teeth appear shorter or less prominent, even when the underlying tooth structure is a healthy size.",
          },
          {
            title: "How It Affects Appearance",
            body: "Excess gum display can affect the overall balance and symmetry of your smile. Many patients feel self-conscious about the proportion of gum tissue visible, which may influence their confidence when smiling.",
          },
        ],
        footer:
          "Gum contouring may help improve the appearance of a gummy smile by carefully reshaping the gum line. It can also be part of a broader smile makeover approach when combined with other cosmetic treatments. Suitability depends on your gum and bone structure, which is assessed during a consultation.",
      },
      {
        kind: "steps",
        eyebrow: "Suitability",
        heading: "Who Is Gum Contouring Suitable For?",
        sub: "Gum contouring may be suitable for patients who feel their gum line affects the appearance of their smile. A clinical assessment is required to determine whether this treatment is the right approach for you.",
        items: [
          {
            title: "Excessive Gum Display",
            body: "Patients who show a significant amount of gum tissue when smiling and wish to improve the balance between their teeth and gums.",
          },
          {
            title: "Uneven Gum Line",
            body: "An asymmetrical gum line can make teeth appear different sizes. Contouring can help create a more even, balanced appearance across the smile.",
          },
          {
            title: "Teeth Appearing Short",
            body: "When excess gum tissue covers part of the tooth, the teeth can appear shorter than they are. Contouring reveals more of the natural tooth structure.",
          },
          {
            title: "Preparation for Other Treatments",
            body: "Gum contouring is sometimes carried out before treatments such as composite bonding or veneers to create a symmetrical foundation for the best possible result.",
          },
        ],
        note: {
          title: "Important",
          body: "Suitability for gum contouring depends on the relationship between the gum tissue and underlying bone structure. A clinical assessment is required before treatment can be recommended.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Potential Benefits",
        heading: "Benefits of Gum Contouring",
        intro:
          "For suitable patients, gum contouring can offer a number of aesthetic improvements. Results vary depending on individual factors and are discussed during your consultation.",
        items: [
          {
            title: "Improved Smile Balance",
            body: "By reshaping the gum line, gum contouring can help create a more balanced and proportionate appearance between teeth and gums, contributing to a more harmonious smile.",
          },
          {
            title: "More Visible Tooth Structure",
            body: "Removing excess gum tissue reveals more of your natural tooth, which can make the teeth appear longer and more proportionate within your smile.",
          },
          {
            title: "Subtle Aesthetic Enhancement",
            body: "Gum contouring is a refined cosmetic procedure that can make a noticeable difference to the appearance of your smile, while maintaining a natural, understated result.",
          },
          {
            title: "Supporting Other Treatments",
            body: "When combined with treatments such as veneers or bonding, gum contouring can provide a more symmetrical foundation, helping to improve the overall result of your cosmetic treatment plan.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Journey",
        heading: "The Gum Contouring Process",
        sub: "Each stage is carefully managed to support a comfortable experience and the best possible outcome for your treatment.",
        items: [
          {
            title: "Consultation & Assessment",
            meta: "01",
            body: "Your dentist examines your gum line, assesses the underlying structure, and discusses your goals. Suitability for treatment is determined at this stage.",
          },
          {
            title: "Planning the Gum Line",
            meta: "02",
            body: "The new gum line shape is carefully planned, taking into account symmetry, proportion, and the relationship between your teeth and gums.",
          },
          {
            title: "Local Anaesthetic",
            meta: "03",
            body: "The treatment area is numbed with local anaesthetic to improve your comfort throughout the procedure.",
          },
          {
            title: "Careful Reshaping",
            meta: "04",
            body: "Excess gum tissue is gently and precisely removed to reveal more of the natural tooth structure, following the planned design.",
          },
          {
            title: "Review & Follow-Up",
            meta: "05",
            body: "The result is reviewed, and a follow-up appointment is arranged to monitor healing and ensure you are happy with the outcome.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Recovery",
        heading: "Recovery & Healing",
        intro:
          "Recovery following gum contouring varies between individuals. Your dentist will provide personalised aftercare guidance to support your healing.",
        items: [
          {
            title: "Recovery Varies",
            body: "Healing times differ from person to person. Many patients find that initial tenderness settles within a few days, though full healing continues over the following weeks.",
          },
          {
            title: "Mild Tenderness",
            body: "Some patients experience mild tenderness or sensitivity in the treated area. This can usually be managed with appropriate aftercare and over-the-counter pain relief if needed.",
          },
          {
            title: "Resuming Normal Activities",
            body: "Many patients are able to resume normal activities shortly after treatment. Your dentist will advise on any temporary precautions during the initial healing period.",
          },
          {
            title: "Ongoing Healing",
            body: "Healing continues over time, and your dentist will review your progress at a follow-up appointment. Maintaining good oral hygiene supports the healing process.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Gum Contouring Cost London",
        intro:
          "The cost of gum contouring depends on a number of factors, including the number of teeth being treated and the complexity of the procedure. A personalised treatment plan with costs is provided following your consultation.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Number of Teeth",
            body: "The cost is influenced by how many teeth require gum reshaping. Treating a single tooth will differ from a full smile gum line adjustment.",
          },
          {
            title: "Complexity of Treatment",
            body: "The extent of gum tissue to be reshaped and any additional planning required will be reflected in the overall cost of your treatment.",
          },
          {
            title: "Personalised Plan",
            body: "A full written treatment plan with itemised costs is provided following your consultation, so you know what to expect before treatment begins.",
          },
          {
            title: "Membership Plan",
            body: "Our membership plan is available for patients who wish to benefit from reduced treatment fees. Details are provided during your consultation.",
          },
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in cosmetic and gum treatments",
          "Focus on natural-looking, balanced results",
          "Personalised treatment planning for every patient",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Gum Contouring Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who are considering gum contouring or gummy smile treatment. Whether you are searching for gum contouring near you or an experienced cosmetic dentist in London, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is gum contouring?",
            a: "Gum contouring is a cosmetic dental procedure that reshapes the gum line by carefully removing small amounts of excess gum tissue. It is designed to reveal more of the natural tooth structure and improve the balance between teeth and gums. Suitability is determined by clinical assessment.",
          },
          {
            q: "Is gum contouring painful?",
            a: "The procedure is carried out under local anaesthetic, so you should not feel discomfort during treatment. Some patients experience mild tenderness or sensitivity afterwards, which typically settles within a few days. Your dentist will provide aftercare guidance to support your recovery.",
          },
          {
            q: "How long does gum contouring take to heal?",
            a: "Recovery varies between individuals. Many patients find that tenderness settles within a few days, with healing continuing over the following weeks. Your dentist will monitor your progress at a follow-up appointment and advise on care during the recovery period.",
          },
          {
            q: "Can gum contouring fix a gummy smile?",
            a: "Gum contouring may help improve the appearance of a gummy smile by removing excess gum tissue and revealing more of the natural tooth. However, suitability depends on the underlying gum and bone structure, which is assessed during your consultation.",
          },
          {
            q: "Is gum contouring permanent?",
            a: "In most cases, the results of gum contouring are long-lasting, as the removed tissue does not typically regrow. However, maintaining good oral hygiene is important to support the health of the treated area. Your dentist will discuss expected outcomes during your consultation.",
          },
        ],
      },
      {
        kind: "stories",
        eyebrow: "Patient Results",
        heading: "Smile Gallery",
        sub: "Examples of treatments we have provided for our patients.",
        items: [
          {
            title: "Restoring a Chipped Front Tooth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
              alt: "Before Restoring a Chipped Front Tooth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
              alt: "After Restoring a Chipped Front Tooth",
            },
          },
          {
            title: "Transforming Discoloured & Chipped Teeth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
              alt: "Before Transforming Discoloured & Chipped Teeth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
              alt: "After Transforming Discoloured & Chipped Teeth",
            },
          },
        ],
        disclaimer:
          "Individual results may vary. These images show actual patients who consented to their photos being used. A clinical assessment is required to determine suitability for any treatment.",
      },
    ],
  },

  "pro-aligners-london": {
    h1: "Pro-Aligners London",
    intro:
      "Clear, removable aligners for straightening teeth discreetly. Custom-made trays that gently guide teeth into alignment without traditional metal braces.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard From £2,000",
      "Member (50% off) From £1,000",
      "Finance options available (subject to status)",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805892/proaligners-home_xasqw8.jpg",
      alt: "Pro-Aligners clear invisible braces at Smile Dentist",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Clear Aligner Orthodontics",
        heading: "What Are Pro-Aligners?",
        intro:
          "Pro-aligners are a series of custom-made, clear plastic trays that fit over your teeth to gradually move them into the desired position. Each set is worn for approximately 1–2 weeks before progressing to the next. All treatment is planned using digital 3D scanning and supervised by your dentist with regular in-person check-ups.",
        items: [
          {
            title: "Discreet",
            body: "Clear plastic trays that are difficult to notice during conversation.",
          },
          {
            title: "Removable",
            body: "Take them out to eat, brush, and floss normally.",
          },
          {
            title: "Digital Planning",
            body: "3D intraoral scanning — no traditional putty impressions.",
          },
          {
            title: "Clinically Supervised",
            body: "Regular check-ups every 4–6 weeks at our practice.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "The Treatment Process",
        sub: "Three stages from consultation to completion.",
        items: [
          {
            title: "Digital Scan & Planning",
            meta: "1",
            body: "We use a 3D intraoral scanner to create a detailed digital model of your teeth. This is used to plan your treatment and show you a simulation of the expected outcome.",
          },
          {
            title: "Wearing Your Aligners",
            meta: "2",
            body: "You wear each set of custom aligners for approximately 1–2 weeks, for around 22 hours per day. Each set applies gentle pressure to gradually move your teeth.",
          },
          {
            title: "Monitoring & Retention",
            meta: "3",
            body: "We monitor your progress every 4–6 weeks. Once treatment is complete, retainers are provided to help maintain your results long-term.",
          },
        ],
      },
      {
        kind: "doAvoid",
        heading: "Aftercare & Retention",
        sub: "Retainers are essential to maintain your results.",
        dos: [
          "Wear aligners for approximately 22 hours per day",
          "Clean aligners daily with lukewarm water and a soft brush",
          "Brush and floss teeth before reinserting aligners",
          "Wear retainers as instructed after treatment is complete",
          "Attend all scheduled monitoring appointments",
        ],
        avoids: [
          "Eating or drinking (other than cool water) with aligners in",
          "Hot drinks with aligners in (can warp the plastic)",
          "Skipping aligners for extended periods (can slow progress)",
          "Cleaning aligners with hot water or abrasive products",
          "Stopping retainer use without consulting your dentist",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            title: "Removable Retainers",
            body: "Clear trays worn at night to maintain alignment. From £300 / From £150 member (per arch)",
          },
          {
            title: "Fixed Bonded Retainers",
            body: "A thin wire bonded to the back of the front teeth. From £350 / From £175 member (per arch)",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Risks & Considerations",
        sub: "Important information to consider before treatment.",
        items: [
          {
            title: "Compliance Required",
            body: "Aligners must be worn ~22 hours daily. Non-compliance can delay treatment or affect outcomes.",
          },
          {
            title: "Discomfort",
            body: "Some pressure and mild discomfort is normal with each new aligner, usually resolving within 1–2 days.",
          },
          {
            title: "Limitations",
            body: "Not suitable for all orthodontic cases. Severe malocclusion may require alternative treatment approaches.",
          },
          {
            title: "Relapse Risk",
            body: "Teeth may move back without long-term retainer wear. Retention is a lifelong commitment.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Why Clinical Supervision Matters",
        sub: "The importance of in-person dental oversight during orthodontic treatment.",
        items: [
          {
            title: "Dental Health Monitoring",
            body: "Moving teeth involves bone remodelling. We monitor gum health and tooth roots via X-rays throughout treatment.",
          },
          {
            title: "IPR When Needed",
            body: "Interproximal reduction creates small spaces (0.2mm) to help unravel crowded teeth safely. This requires in-person dental care.",
          },
          {
            title: "Attachments",
            body: 'Tooth-coloured composite "buttons" help aligners grip teeth for more complex movements. These are placed and removed in the practice.',
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Pro-Aligner Costs",
        intro:
          "Members receive 50% off all treatment fees. A written treatment plan with full costs is provided before treatment begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Pro-Aligners (Mild/Moderate)", standard: "From £2,000", member: "From £1,000" },
          { label: "Removable Retainers (Per Arch)", standard: "From £300", member: "From £150" },
          { label: "Fixed Bonded Retainer (Per Arch)", standard: "From £350", member: "From £175" },
          { label: "Consultation", standard: "From £95", member: "From £47.50" },
        ],
        footnote:
          "Final costs depend on the complexity and duration of treatment. A written treatment plan with full costs is provided before treatment begins. Finance available subject to status.",
        notes: [
          {
            title: "Membership",
            body: "Join for £20/month and receive 50% off all treatments.",
          },
        ],
      },
      {
        kind: "stories",
        heading: "Patient Experiences",
        items: [
          {
            title: "Addressing Crowding",
            outcome:
              "A patient with mild crowding in the lower arch completed a course of Pro-aligners over 5 months. Following treatment, fixed and removable retainers were fitted to help maintain the result. Individual results may vary. Treatment duration depends on the complexity of the case.",
          },
          {
            title: "Relapse Correction",
            outcome:
              "A patient who had orthodontic treatment as a teenager experienced relapse after not wearing retainers. Pro-aligners were used to re-align the teeth over 4 months, with bonded retainers placed to help maintain the correction. Individual results may vary. Retainer wear is essential for long-term stability.",
          },
        ],
      },
      {
        kind: "stories",
        eyebrow: "Patient Results",
        heading: "Smile Gallery",
        sub: "Examples of treatments we have provided for our patients.",
        items: [
          {
            title: "Restoring a Chipped Front Tooth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg",
              alt: "Before Restoring a Chipped Front Tooth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg",
              alt: "After Restoring a Chipped Front Tooth",
            },
          },
          {
            title: "Transforming Discoloured & Chipped Teeth",
            meta: "Composite Bonding",
            before: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg",
              alt: "Before Transforming Discoloured & Chipped Teeth",
            },
            after: {
              src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg",
              alt: "After Transforming Discoloured & Chipped Teeth",
            },
          },
        ],
        disclaimer:
          "Individual results may vary. These images show actual patients who consented to their photos being used. A clinical assessment is required to determine suitability for any treatment.",
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Am I a candidate for Pro-aligners?",
            a: "Pro-aligners are suitable for mild to moderate crowding, spacing, and relapse cases. For more complex bite issues, we will assess your suitability during a consultation and discuss whether a referral may be appropriate.",
          },
          {
            q: "How many hours a day must I wear them?",
            a: "Aligners should be worn for approximately 22 hours a day for effective results. They should only be removed for eating, drinking (anything other than cool water), and brushing.",
          },
          {
            q: "Is the treatment uncomfortable?",
            a: "You may feel a sensation of pressure or tightness for the first 1–2 days of each new aligner. This is normal and indicates the aligners are working. Most patients find this manageable and less uncomfortable than traditional braces.",
          },
          {
            q: "Will it affect my speech?",
            a: "You may notice a very slight lisp for the first 24 hours as your tongue adjusts. After that, speech typically returns to normal.",
          },
          {
            q: "Can I eat and drink with them in?",
            a: "You can drink cool water with aligners in. For all other food and drinks, including hot beverages, remove the aligners to prevent warping the plastic or trapping sugar against your teeth.",
          },
          {
            q: "How long does treatment take?",
            a: "Treatment duration varies depending on the complexity of the case. Mild to moderate cases typically take 6–9 months. Your dentist will provide an estimated timeline during your consultation.",
          },
          {
            q: "Do I need retainers afterwards?",
            a: "Yes. Retainers are essential to maintain your results. Teeth have a natural tendency to move back towards their original position. We recommend both fixed and removable retainers for long-term stability.",
          },
          {
            q: "How does this compare to other aligner brands?",
            a: "Pro-aligners follow the same principles as other clear aligner systems. The key difference is clinical supervision — all treatment is planned and monitored in-person by your dentist, with regular check-ups every 4–6 weeks.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Complete Your Smile Transformation",
        paragraphs: [
          "Many patients choose to combine Pro-aligners with other cosmetic treatments for a comprehensive result. Composite bonding can refine tooth shape and close minor gaps after alignment, while teeth whitening is often carried out once aligners are removed for a brighter, fresher finish.",
          "For patients seeking a more dramatic change, our smile makeover service combines multiple treatments into a single coordinated plan. Porcelain veneers may also be considered for teeth that cannot be fully corrected with alignment alone. Your dentist will discuss all options during your consultation.",
          "All orthodontic and cosmetic treatments at Smile Dentist are delivered by GDC-registered dentists at our CQC-registered practice. We follow CQC guidelines for clinical governance, patient consent, and ongoing treatment monitoring to ensure safe, effective results.",
        ],
      },
    ],
  },

  "missing-teeth-london": {
    h1: "Missing Teeth Solutions London",
    intro:
      "Replacing missing teeth can help restore both function and appearance. At our London practice, we offer a range of treatment options tailored to your individual needs, helping you eat, speak, and smile with confidence once again.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Personalised treatment plan with costs provided",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805735/solutions-for-missing-teeth_z3layk.jpg",
      alt: "Missing teeth solutions at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "Treatment Options",
        body: "We offer several approaches to replacing missing teeth, including dental implants, bridges, and other suitable options. The right solution depends on your clinical needs, which are assessed during a consultation.",
      },
      {
        kind: "cards",
        eyebrow: "Understanding the Impact",
        heading: "Why Replacing Missing Teeth Is Important",
        intro:
          "Missing teeth can affect more than your smile. Without replacement, a number of changes may occur over time that can impact your oral health and daily comfort.",
        items: [
          {
            title: "Chewing & Speech",
            body: "Missing teeth can make it more difficult to chew certain foods effectively and may affect speech clarity, particularly when front teeth are involved.",
          },
          {
            title: "Shifting of Teeth",
            body: "When a tooth is missing, the surrounding teeth may gradually shift into the gap. This can affect your bite alignment and create further dental concerns over time.",
          },
          {
            title: "Bone Changes",
            body: "The jawbone in the area of a missing tooth may begin to change over time without stimulation from a tooth root. This can affect facial structure and future treatment options.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Options",
        heading: "Treatment Options for Missing Teeth",
        sub: "There are several effective approaches to replacing missing teeth. The most suitable option depends on your individual clinical situation, which is assessed during a consultation.",
        items: [
          {
            title: "Dental Implants",
            meta: "1",
            body: "A long-term option where a small post is placed in the jawbone to support a replacement tooth. Dental implants are designed to function similarly to natural teeth and do not affect neighbouring teeth.",
          },
          {
            title: "Dental Bridges",
            meta: "2",
            body: "A fixed restoration where a replacement tooth is supported by the teeth on either side of the gap. Bridges do not require surgery and can be completed over a shorter timeframe.",
          },
          {
            title: "Other Suitable Options",
            meta: "3",
            body: "Depending on your clinical needs, other restorative options may be discussed during your consultation. Your dentist will explain all available approaches and help you understand which may be most appropriate.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Implant Option",
        heading: "Dental Implants for Missing Teeth",
        items: [
          {
            title: "What Are Dental Implants?",
            body: "Dental implants involve placing a small post into the jawbone, which acts as a foundation for a replacement tooth. Over time, the implant integrates with the bone to provide a secure, stable base.",
          },
          {
            title: "When May They Be Suitable?",
            body: "Implants may be suitable for patients with one or more missing teeth who have sufficient bone support and good general oral health. Suitability is determined through a thorough clinical assessment.",
          },
          {
            title: "General Benefits",
            bullets: [
              "Designed to function similarly to natural teeth for eating and speaking",
              "Do not require preparation of neighbouring healthy teeth",
              "May help maintain jawbone in the area of the missing tooth",
            ],
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Bridge Option",
        heading: "Dental Bridges for Missing Teeth",
        items: [
          {
            title: "What Are Dental Bridges?",
            body: "A dental bridge is a fixed restoration that fills the gap left by a missing tooth. The replacement tooth is supported by crowns placed on the teeth either side, creating a stable, natural-looking result.",
          },
          {
            title: "When May They Be Suitable?",
            body: "Bridges may be suitable when the teeth on either side of the gap are strong enough to support the restoration. They are a fixed option that does not require surgery, making them appropriate for a range of clinical situations.",
          },
          {
            title: "General Benefits",
            bullets: [
              "Fixed in place — no need to remove for cleaning",
              "Does not require surgical placement",
              "Can typically be completed over a shorter timeframe",
            ],
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Choosing Your Treatment",
        heading: "How to Choose the Right Treatment",
        intro:
          "The most suitable treatment for replacing missing teeth depends on a number of individual factors. A professional assessment is the best way to understand your options.",
        items: [
          {
            title: "Number of Missing Teeth",
            body: "Whether you are replacing a single tooth or several teeth will influence which treatment approaches are most appropriate for your situation.",
          },
          {
            title: "Bone Support & Oral Health",
            body: "The condition of your jawbone, gum health, and surrounding teeth all play an important role in determining which options are clinically viable for you.",
          },
          {
            title: "Personal Preferences",
            body: "Your goals, lifestyle, and preferences are important considerations. Your dentist will discuss all options so you can make an informed decision about your care.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Important",
        body: "The right treatment for you can only be determined through a thorough clinical assessment. Your dentist will explain all suitable options and provide a personalised recommendation.",
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Cost of Missing Teeth Solutions London",
        intro:
          "The cost of replacing missing teeth varies depending on the type of treatment, the number of teeth involved, and the complexity of your individual case. A personalised treatment plan with full costs is provided following your consultation.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Treatment Type",
            body: "Different approaches to replacing missing teeth carry different costs. Your dentist will explain the pricing for each suitable option during your consultation.",
          },
          {
            title: "Complexity & Number of Teeth",
            body: "The number of teeth being replaced and the overall complexity of your case will influence the treatment plan and associated costs.",
          },
          {
            title: "Personalised Planning",
            body: "A full written treatment plan with itemised costs is provided following your consultation, so you know exactly what to expect before treatment begins.",
          },
          {
            title: "Membership Benefits",
            body: "Our membership plan offers reduced treatment fees for patients who wish to benefit from ongoing savings across all treatments.",
          },
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in restorative dentistry",
          "Personalised treatment planning for every patient",
          "Focus on natural-looking, long-lasting results",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Missing Teeth Solutions Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who are looking for solutions for missing teeth. Whether you are searching for missing teeth treatment near you or exploring your replacement options, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are the options for replacing missing teeth?",
            a: "The main options include dental implants, dental bridges, and dentures. Each approach has different characteristics, and the most suitable option depends on factors such as the number of missing teeth, bone support, and your overall oral health. Your dentist will discuss all options during a consultation.",
          },
          {
            q: "Are dental implants better than bridges?",
            a: "Both dental implants and bridges are effective solutions for replacing missing teeth. Implants do not require preparation of neighbouring teeth, while bridges can be completed without surgery. The most appropriate option depends on your individual clinical situation and preferences, which your dentist will assess.",
          },
          {
            q: "How long do tooth replacement options last?",
            a: "The longevity of any tooth replacement varies between individuals and depends on factors such as oral hygiene, dietary habits, and regular dental care. Your dentist will discuss the expected lifespan of each option and advise on how to care for your restoration.",
          },
          {
            q: "Can I leave a missing tooth untreated?",
            a: "While it is possible to leave a gap, missing teeth can lead to changes over time, including shifting of surrounding teeth, bite alterations, and bone changes in the jaw. A clinical assessment can help you understand the potential implications and explore your options.",
          },
          {
            q: "Which option is right for me?",
            a: "The most suitable treatment depends on a number of factors including the number and position of missing teeth, your bone support, oral health, and personal preferences. A thorough clinical assessment is the best way to determine which approach is right for your individual situation.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "dental-implants-london": {
    h1: "Dental Implants London",
    intro:
      "Dental implants offer a long-term solution for replacing missing teeth, designed to restore both function and appearance. At our London practice, each implant treatment is carefully planned and tailored to the individual patient.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard Price From £2,950",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805822/dental-implant-home_gulsc0.jpg",
      alt: "Dental implant treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "Investment",
        body: "Cost depends on the number of implants, complexity of treatment, and any additional procedures required. A full treatment plan with costs is provided following your consultation. Our £20/month dental membership does not apply to dental implant treatment. Implant fees are the same whether or not you are a member.",
      },
      {
        kind: "cards",
        eyebrow: "Understanding Implants",
        heading: "What Are Dental Implants?",
        intro:
          "Dental implants are a long-term solution for replacing missing teeth. Small posts are placed into the jawbone to act as a secure foundation for replacement teeth. Over time, the implant integrates with the bone, providing a stable base that is designed to function similarly to a natural tooth root.",
        items: [
          {
            title: "Designed for Longevity",
            body: "Implants are designed as a long-term solution. Longevity varies depending on individual factors including oral hygiene, bone health, and regular dental care.",
          },
          {
            title: "Natural Function",
            body: "Replacement teeth supported by implants are designed to function similarly to natural teeth, allowing you to eat, speak, and smile with confidence.",
          },
          {
            title: "Fixed in Place",
            body: "Unlike removable options, implant-supported teeth are securely fixed and do not need to be taken out. They become a part of your everyday smile.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "The Importance of Replacement",
        heading: "Why Replace Missing Teeth?",
        items: [
          {
            title: "Chewing & Speech",
            body: "Missing teeth can affect the ability to chew food properly and may impact speech clarity. Replacing missing teeth can help restore normal function and comfort.",
          },
          {
            title: "Bite & Alignment",
            body: "When teeth are missing, surrounding teeth may gradually shift, leading to changes in bite alignment. This can create further dental concerns over time if left untreated.",
          },
          {
            title: "Bone Loss",
            body: "The jawbone in the area of a missing tooth may begin to recede over time. Dental implants are one option that may help maintain bone density in the treatment area.",
          },
          {
            title: "Confidence & Appearance",
            body: "Gaps in the smile can affect self-confidence and facial appearance. Replacing missing teeth helps restore a natural-looking smile and overall facial structure.",
          },
        ],
        footer:
          "If you are living with missing teeth, dental implants are one of several treatment options that may be suitable. A clinical assessment will help determine the most appropriate approach for you.",
      },
      {
        kind: "cards",
        eyebrow: "Suitability",
        heading: "Who Are Dental Implants Suitable For?",
        intro:
          "Dental implants may be suitable for adults who are missing one or more teeth and have sufficient bone support in the jaw. Suitability is always determined through a thorough clinical assessment.",
        items: [
          {
            title: "Missing Teeth",
            body: "Patients with one or more missing teeth who are looking for a fixed, long-term replacement option may benefit from implant treatment.",
          },
          {
            title: "Adequate Bone Support",
            body: "Sufficient jawbone is needed to support an implant. If bone levels are insufficient, further assessment and possible preparatory treatment may be discussed.",
          },
          {
            title: "Good Oral Health",
            body: "Healthy gums and a commitment to good oral hygiene are important factors in the long-term success of dental implant treatment.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Important",
        body: "Suitability for dental implants depends on individual clinical evaluation. Factors such as medical history, bone density, and oral health will be carefully assessed at your consultation.",
      },
      {
        kind: "steps",
        eyebrow: "Treatment Options",
        heading: "Types of Dental Implant Treatments",
        sub: "Dental implants can be used to replace a single tooth, several teeth, or to support larger restorations. Your dentist will recommend the most suitable approach based on your clinical needs.",
        items: [
          {
            title: "Single Tooth Implant",
            meta: "1",
            body: "A single implant post supports an individual replacement tooth. This option preserves the surrounding teeth, which do not need to be prepared or altered.",
          },
          {
            title: "Multiple Teeth Replacement",
            meta: "2",
            body: "When several adjacent teeth are missing, a smaller number of implants can support a bridge, replacing multiple teeth without affecting healthy neighbouring teeth.",
          },
          {
            title: "Implant-Supported Restorations",
            meta: "3",
            body: "For patients missing a larger number of teeth, implants can support more extensive fixed restorations. The number of implants required is determined by clinical assessment.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Your Journey",
        heading: "The Dental Implant Process",
        sub: "Each stage is carefully managed to support the best possible outcome for your treatment.",
        items: [
          {
            title: "Consultation & Assessment",
            meta: "01",
            body: "A thorough examination of your teeth, gums, and jawbone is carried out. Imaging may be used to assess bone levels and help plan the treatment.",
          },
          {
            title: "Treatment Planning",
            meta: "02",
            body: "A personalised treatment plan is created based on your clinical assessment. All options, timelines, and costs are discussed before any treatment begins.",
          },
          {
            title: "Implant Placement",
            meta: "03",
            body: "The implant post is carefully placed into the jawbone under local anaesthetic. The procedure is carried out with precision to support a stable foundation.",
          },
          {
            title: "Healing Period",
            meta: "04",
            body: "A period of healing follows, during which the implant integrates with the jawbone. The length of this phase varies between individuals.",
          },
          {
            title: "Final Restoration",
            meta: "05",
            body: "Once healing is complete, the final replacement tooth is carefully fitted to the implant, designed to match the appearance of your natural teeth.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Recovery",
        heading: "Healing & Recovery",
        intro:
          "Recovery following implant placement is an important part of the treatment process. Your dentist will provide detailed aftercare guidance tailored to your individual needs.",
        items: [
          {
            title: "Healing Times Vary",
            body: "The time required for the implant to integrate with the jawbone varies between individuals. Your dentist will monitor healing progress at follow-up appointments.",
          },
          {
            title: "Bone Integration",
            body: "A key part of the healing process involves the implant gradually bonding with the jawbone. This integration is essential for providing a stable, secure foundation.",
          },
          {
            title: "Follow-Up Care",
            body: "Regular follow-up appointments are an important part of your implant journey. Your dentist will review healing, answer questions, and advise when you are ready for the next stage.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Dental Implants Cost London",
        intro:
          "The cost of dental implant treatment depends on a number of factors, including the number of implants required, the complexity of the case, and whether any additional procedures are needed.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Number of Implants",
            body: "Replacing a single tooth requires one implant, while multiple missing teeth may need additional implants to provide adequate support.",
          },
          {
            title: "Treatment Complexity",
            body: "The overall complexity of your case, including bone density and the position of missing teeth, will influence the treatment plan and associated costs.",
          },
          {
            title: "Additional Procedures",
            body: "Some patients may require preparatory procedures before implant placement. These will be discussed and costed as part of your personalised treatment plan.",
          },
          {
            title: "Personalised Plan",
            body: "A full written treatment plan with itemised costs is provided following your consultation, so you know exactly what to expect before treatment begins.",
          },
          {
            title: "Implants are not included in our membership discount",
            body: "Dental implants — including bone grafting, sinus lift and All-on-X treatment — are excluded from the £20/month membership plan. Implant fees are the same whether or not you are a member; finance options may be available.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in implant dentistry",
          "Careful clinical assessment and personalised treatment planning",
          "Full written treatment plan with costs provided before treatment",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Dental Implants Near You",
        paragraphs: [
          "Our London dental practice welcomes patients from across the city and surrounding areas who are seeking implant treatment. Whether you are searching for dental implants near you or a trusted implant dentist in London, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are dental implants?",
            a: "Dental implants are small posts placed into the jawbone to support replacement teeth. They are designed to function and feel similar to natural teeth, providing a stable foundation for a crown, bridge, or other restoration. Suitability is determined by clinical assessment.",
          },
          {
            q: "Are dental implants painful?",
            a: "Implant placement is carried out under local anaesthetic, so you should not feel discomfort during the procedure. Some swelling and tenderness may occur in the days following treatment, which typically settles with appropriate aftercare. Your dentist will explain what to expect.",
          },
          {
            q: "How long do dental implants last?",
            a: "The longevity of dental implants varies between individuals and depends on factors such as oral hygiene, overall health, and attendance at regular dental appointments. With appropriate care, implants can provide many years of reliable function. Your dentist will advise on ongoing care.",
          },
          {
            q: "Can anyone get dental implants?",
            a: "Not everyone is suitable for dental implants. Sufficient jawbone support and good general oral health are important factors. Conditions such as uncontrolled diabetes or certain medications may affect suitability. A thorough clinical assessment is required to determine eligibility.",
          },
          {
            q: "Do implants look like natural teeth?",
            a: "The replacement teeth placed on dental implants are carefully designed to match the shade, shape, and translucency of your surrounding natural teeth. Metal-free materials are available to create a natural-looking appearance. Your dentist will colour-match the restoration during planning.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "dental-crowns-london": {
    h1: "Dental Crowns London",
    intro:
      "A dental crown is a custom-made restoration designed to cover a damaged or weakened tooth, restoring its strength, shape, and appearance. At our London practice, crowns are carefully planned and crafted using tooth-coloured materials to blend naturally with your smile.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Porcelain / Ceramic Crown From £995",
      "Member (50% off) From £497.50",
      "Membership £20/month",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805809/dental-crowns_pq0fvz.jpg",
      alt: "Dental crown treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "steps",
        eyebrow: "Understanding Dental Crowns",
        heading: "What Is a Dental Crown?",
        sub: "A dental crown is a custom-made covering that is placed over the entire visible portion of a tooth, from the gum line upwards. It is designed to restore the tooth's original shape, strength, and appearance when the remaining structure can no longer be adequately supported by a simpler restoration such as a filling. Crowns are made from tooth-coloured materials and are individually shaped to match the surrounding teeth in size, shade, and form. Once cemented in place, a crown functions and looks like a natural tooth, allowing you to eat, speak, and smile with confidence.",
        items: [
          {
            title: "Custom-Made",
            meta: "1",
            body: "Each crown is individually designed to match the shape, shade, and proportions of your natural teeth for a seamless result.",
          },
          {
            title: "Full Coverage",
            meta: "2",
            body: "A crown encases the entire visible tooth, providing structural support and protection to the weakened or damaged tooth beneath.",
          },
          {
            title: "Restored Function",
            meta: "3",
            body: "Once placed, a crown restores normal biting and chewing ability, allowing the tooth to function as it did before it was damaged.",
          },
        ],
        footer:
          "Not every damaged tooth requires a crown. Your dentist will assess the extent of the damage and recommend the most appropriate treatment for your situation.",
      },
      {
        kind: "cards",
        eyebrow: "Common Indications",
        heading: "When Is a Dental Crown Needed?",
        intro:
          "A dental crown may be recommended in a number of clinical situations where the tooth can no longer be adequately restored with a filling or other simpler treatment. Below are some of the most common reasons a crown is considered.",
        items: [
          {
            title: "Broken or Cracked Teeth",
            body: "A crown can hold together a tooth that has fractured or developed a crack, helping to prevent further damage and preserving the remaining structure.",
          },
          {
            title: "Teeth Weakened by Decay",
            body: "When decay has destroyed a large portion of the tooth, there may not be enough structure remaining to support a filling. A crown provides the necessary coverage and strength.",
          },
          {
            title: "After Root Canal Treatment",
            body: "A tooth that has undergone root canal treatment is often more brittle because the nerve and blood supply have been removed. A crown helps to protect the restored tooth from fracturing.",
          },
          {
            title: "Severely Worn Teeth",
            body: "Teeth that have become significantly worn down over time — due to grinding, acid erosion, or other factors — may benefit from crowns to restore their original shape and protect them from further wear.",
          },
        ],
        footer:
          "Whether a crown is the most suitable option depends on a clinical assessment. Your dentist will examine the tooth, discuss all available options, and recommend the approach best suited to your individual situation.",
      },
      {
        kind: "cards",
        eyebrow: "Crown Materials",
        heading: "Types of Dental Crowns",
        intro:
          "Several types of crown material are available, and the most appropriate choice will depend on the location of the tooth, the forces it needs to withstand, and your individual clinical needs. At Smile Dentist, we use metal-free, tooth-coloured materials to achieve a natural-looking result.",
        items: [
          {
            title: "Porcelain and Ceramic Crowns",
            body: "Designed to closely match the colour and translucency of natural teeth, making them a popular choice for visible teeth.",
          },
          {
            title: "Tooth-Coloured Options",
            body: "All crowns placed at our practice are tooth-coloured and metal-free, avoiding the dark margins sometimes seen with older metal-based crowns.",
          },
          {
            title: "Material Selected by Clinical Need",
            body: "Your dentist will recommend the most suitable material based on the tooth's position, the forces involved, and the desired aesthetic outcome.",
          },
        ],
        footer:
          "For primarily cosmetic concerns where the tooth structure is largely intact, porcelain veneers may be a more conservative alternative. Your dentist will discuss all suitable options during your consultation.",
      },
      {
        kind: "cards",
        eyebrow: "Advantages",
        heading: "Benefits of Dental Crowns",
        intro:
          "A well-placed dental crown can offer a number of functional and aesthetic benefits, helping to preserve a damaged tooth and restore your ability to eat, speak, and smile comfortably.",
        items: [
          {
            title: "Restores Strength",
            body: "A crown reinforces a weakened tooth, allowing it to withstand normal biting and chewing forces once again.",
          },
          {
            title: "Improves Appearance",
            body: "Tooth-coloured crowns can improve the appearance of damaged, discoloured, or misshapen teeth, blending naturally with surrounding teeth.",
          },
          {
            title: "Protects Tooth Structure",
            body: "By encasing the remaining tooth, a crown helps to protect it from further decay, fracture, or wear.",
          },
          {
            title: "Long-Term Preservation",
            body: "Crowns can support the long-term preservation of a tooth that might otherwise need to be extracted, helping you keep your natural teeth for longer.",
          },
        ],
        footer:
          "The benefits of a crown depend on individual clinical circumstances. Your dentist will discuss realistic expectations based on the condition of your tooth during your consultation.",
      },
      {
        kind: "steps",
        eyebrow: "The Treatment Process",
        heading: "How a Dental Crown Is Placed",
        sub: "The treatment process for a dental crown generally involves several stages, carried out over two or more appointments.",
        items: [
          {
            title: "Consultation and Assessment",
            meta: "1",
            body: "Your dentist will examine the affected tooth, take any necessary images, and assess whether a crown is the most suitable treatment option. A written treatment plan with costs is provided before any treatment begins.",
          },
          {
            title: "Preparation of the Tooth",
            meta: "2",
            body: "The tooth is carefully shaped under local anaesthetic to create space for the crown. A small amount of the outer surface is removed so that the crown can sit over the tooth without being too bulky.",
          },
          {
            title: "Impressions and Measurements",
            meta: "3",
            body: "Detailed impressions or digital scans are taken to create a precise model of the prepared tooth. This information is sent to the dental laboratory where your crown will be custom-made. A temporary crown is placed to protect the tooth in the meantime.",
          },
          {
            title: "Placement of the Crown",
            meta: "4",
            body: "Once the permanent crown is ready, it is carefully tried in and assessed for fit, bite, and appearance. When both you and your dentist are satisfied, the crown is cemented securely in place.",
          },
          {
            title: "Final Adjustments",
            meta: "5",
            body: "Minor adjustments may be made to ensure the crown sits comfortably and your bite feels natural. Your dentist will also provide guidance on how to care for the crown to support its longevity.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity and Care",
        heading: "How Long Do Dental Crowns Last?",
        intro:
          "The lifespan of a dental crown varies between individuals. Several factors influence how long a crown will continue to function well, and there is no fixed guarantee of longevity for any dental restoration.",
        items: [
          {
            title: "Oral Hygiene",
            body: "Thorough daily cleaning, including brushing around the crown and flossing, helps to protect the underlying tooth and surrounding gum tissue from decay and disease.",
          },
          {
            title: "Habits and Diet",
            body: "Avoiding excessively hard or sticky foods and habits such as teeth grinding can help reduce the risk of damage. A nightguard may be recommended for patients who grind their teeth.",
          },
          {
            title: "Regular Dental Care",
            body: "Attending routine dental check-ups and hygiene appointments allows your dentist to monitor the condition of the crown and the underlying tooth, addressing any concerns early.",
          },
        ],
        footer:
          "The longevity of a dental crown depends on individual factors. Your dentist will discuss realistic expectations and how to care for your crown during your consultation. All treatment outcomes are dependent on individual clinical circumstances.",
      },
      {
        kind: "pricing",
        eyebrow: "Cost Guide",
        heading: "Dental Crown Cost London",
        intro:
          "The cost of a dental crown in London varies depending on several factors, including the material used, the complexity of the preparation, and whether additional procedures — such as a core build-up — are required. A detailed, written treatment plan with costs is always provided before any work begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Porcelain / Ceramic Crown", standard: "From £995", member: "From £497.50" },
          { label: "Core Build-Up", standard: "From £154", member: "From £77" },
          { label: "Temporary Crown", standard: "Included", member: "Included" },
        ],
        notes: [
          {
            title: "Personalised planning",
            body: "Every treatment plan is tailored to the individual, ensuring you understand the costs involved before making a decision.",
          },
          {
            title: "Number of teeth",
            body: "If multiple crowns are needed, the total cost will reflect the number of teeth being treated.",
          },
          {
            title: "Membership Savings",
            body: "Join our membership for £20/month and receive 50% off all treatment fees.",
          },
        ],
        footnote:
          "Final costs depend on individual clinical factors. A full written estimate is provided before treatment begins.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist for Dental Crowns",
        intro:
          "At Smile Dentist, we take a personalised approach to restorative dentistry. Every treatment plan is developed following a thorough clinical assessment, ensuring that the recommended approach is appropriate for your individual needs.",
        items: [
          {
            title: "London Location",
            body: "Our practice is conveniently located in London, accessible for patients across the city and surrounding areas.",
          },
          {
            title: "Restorative Experience",
            body: "Our GDC-registered dentists have experience across a range of restorative treatments, including crowns, bridges, and implant-supported restorations.",
          },
          {
            title: "Natural-Looking Results",
            body: "We use metal-free, tooth-coloured materials that are shade-matched to your natural teeth, with the aim of creating a restoration that blends seamlessly with your smile.",
          },
          {
            title: "Personalised Planning",
            body: "Every patient receives a written treatment plan with transparent costs. We discuss all available options so you can make an informed decision about your care.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving Patients Across London",
        heading: "Dental Crowns Near You",
        paragraphs: [
          "We welcome patients from across London and the surrounding areas who are looking for a reliable solution to restore damaged or weakened teeth. Whether you are searching for a dental crown near you or have been referred by another dental professional, our team is here to help.",
          "Our practice is well connected by public transport and offers a calm, welcoming environment for patients seeking restorative dental care. All treatments are delivered by GDC-registered dentists at our CQC-registered practice.",
        ],
      },
      {
        kind: "faq",
        eyebrow: "Common Questions",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is a dental crown?",
            a: "A dental crown is a custom-made restoration that covers the entire visible portion of a tooth. It is designed to restore the tooth's shape, strength, and appearance when it can no longer be adequately supported by a filling. Suitability is determined by clinical assessment.",
          },
          {
            q: "Is getting a dental crown painful?",
            a: "The procedure is carried out under local anaesthetic, so you should not feel discomfort during preparation. Some patients experience mild sensitivity on the treated tooth for a few days afterwards, which typically settles on its own. Your dentist will explain what to expect.",
          },
          {
            q: "How long do dental crowns last?",
            a: "The longevity of a dental crown varies between individuals and depends on factors such as oral hygiene, dietary habits, and attendance at regular dental appointments. With appropriate care, crowns can provide many years of reliable function. Your dentist will advise on ongoing care.",
          },
          {
            q: "When is a crown needed instead of a filling?",
            a: "A crown may be recommended when a tooth has lost a significant amount of structure and a filling alone would not provide adequate support. This can occur after extensive decay, fracture, or root canal treatment. Your dentist will assess the remaining tooth structure to determine the most suitable option.",
          },
          {
            q: "Do crowns look like natural teeth?",
            a: "Modern tooth-coloured crowns are carefully designed to match the shade, shape, and translucency of your natural teeth. The materials used at our practice are metal-free, helping to create a natural-looking result. Your dentist will colour-match the crown during the planning stage.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "dental-bridges-london": {
    h1: "Dental Bridges London",
    intro:
      "A dental bridge is a fixed restoration designed to replace one or more missing teeth, helping to restore both the function and appearance of your smile. At our London practice, bridges are carefully planned and crafted to blend naturally with your existing teeth.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Zirconia / E-Max Bridge (Per Unit) From £995",
      "Member (50% off) From £497.50",
      "Membership £20/month",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805729/Dental-Bridges_ygwl9m.jpg",
      alt: "Dental bridge treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "steps",
        eyebrow: "Understanding Dental Bridges",
        heading: "What Is a Dental Bridge?",
        sub: "A dental bridge is a fixed restoration used to replace one or more missing teeth. It works by placing crowns on the teeth either side of the gap — known as the supporting teeth — with a replacement tooth attached between them to fill the space. Unlike a removable denture, a bridge is cemented in place and does not need to be taken out for cleaning. Bridges can be supported by natural teeth or, in some cases, by dental implants. They are designed to restore both function and appearance, allowing you to eat, speak, and smile with greater confidence.",
        items: [
          {
            title: "Supporting Teeth",
            meta: "1",
            body: "Crowns are placed on the teeth adjacent to the gap, providing a stable foundation for the bridge.",
          },
          {
            title: "Replacement Tooth",
            meta: "2",
            body: "A custom-made false tooth is attached between the crowns, filling the space where the tooth is missing.",
          },
          {
            title: "A Natural Result",
            meta: "3",
            body: "The completed bridge creates a continuous row of teeth, restoring your ability to chew and speak comfortably.",
          },
        ],
        footer:
          "Not all gaps are suitable for a bridge. Your dentist will assess the condition of the adjacent teeth and the size of the gap during your consultation to determine whether a bridge is the most appropriate option for your situation.",
      },
      {
        kind: "cards",
        eyebrow: "The Importance of Tooth Replacement",
        heading: "Why Replace Missing Teeth?",
        intro:
          "Losing a tooth affects more than appearance. Over time, the surrounding teeth may begin to shift into the empty space, which can lead to changes in your bite and the way your teeth come together. This can affect chewing efficiency and may place uneven pressure on other teeth.",
        items: [
          {
            title: "Chewing and Speech",
            body: "Missing teeth can make it more difficult to chew certain foods effectively and may affect the clarity of speech, particularly if front teeth are involved.",
          },
          {
            title: "Shifting Teeth",
            body: "When a tooth is lost, neighbouring teeth may gradually drift into the gap. This can create new spacing issues and make oral hygiene more difficult.",
          },
          {
            title: "Bite and Alignment",
            body: "Changes in tooth position can alter how your upper and lower teeth meet, potentially leading to discomfort or uneven wear on remaining teeth.",
          },
        ],
        footer:
          "A dental bridge is one of several options available for replacing missing teeth. Your dentist will discuss all suitable approaches during your consultation to help you make an informed decision.",
      },
      {
        kind: "list",
        eyebrow: "Suitability",
        heading: "Who Are Dental Bridges Suitable For?",
        sub: "Dental bridges may be considered for patients who are missing one or more teeth and have suitable supporting teeth on either side of the gap. They can also be an appropriate option for patients who prefer to avoid the surgical element associated with dental implants.",
        items: [
          "Patients missing one or more adjacent teeth",
          "Cases where the neighbouring teeth already have crowns or large fillings",
          "Patients who prefer a non-surgical tooth replacement option",
          "Those seeking a fixed restoration rather than a removable denture",
        ],
      },
      {
        kind: "callout",
        label: "Suitability",
        body: "Suitability for a dental bridge depends on a clinical assessment. Your dentist will examine the health of the supporting teeth and surrounding gum tissue before recommending a treatment plan.",
      },
      {
        kind: "cards",
        eyebrow: "Bridge Options",
        heading: "Types of Dental Bridges",
        intro:
          "There are several types of dental bridge, and the most appropriate design will depend on the location of the gap, the condition of the surrounding teeth, and your individual clinical needs.",
        items: [
          {
            title: "Traditional Bridge",
            body: "The most commonly used type. Crowns are placed on the teeth on either side of the gap, with a replacement tooth attached between them. This design provides excellent stability and is suitable for most situations where healthy supporting teeth are available.",
          },
          {
            title: "Cantilever Bridge",
            body: "Supported by a crown on one side of the gap only. This design may be considered in specific clinical situations where there is only one suitable supporting tooth adjacent to the space. It is less commonly used than a traditional bridge.",
          },
          {
            title: "Implant-Supported Bridge",
            body: "Instead of being supported by natural teeth, this type of bridge is anchored by dental implants placed in the jawbone. It may be recommended when several adjacent teeth are missing or when the neighbouring teeth are not suitable to act as supports.",
          },
        ],
        footer:
          "Your dentist will explain which type of bridge may be most appropriate for your situation and discuss all available options during your consultation.",
      },
      {
        kind: "steps",
        eyebrow: "The Treatment Process",
        heading: "How a Dental Bridge Is Placed",
        sub: "The treatment process for a dental bridge generally involves several stages, carried out over two or more appointments.",
        items: [
          {
            title: "Consultation and Assessment",
            meta: "1",
            body: "Your dentist will examine the gap and the surrounding teeth, take any necessary images, and discuss whether a bridge is a suitable option for your situation. A written treatment plan with costs is provided before any treatment begins.",
          },
          {
            title: "Preparation of Supporting Teeth",
            meta: "2",
            body: "The teeth on either side of the gap are carefully shaped under local anaesthetic to accommodate the bridge crowns. A small amount of enamel is removed to create space for the restoration.",
          },
          {
            title: "Impressions and Measurements",
            meta: "3",
            body: "Detailed impressions or digital scans are taken to create a precise model of your teeth. This information is sent to the dental laboratory where your bridge will be custom-made. A temporary bridge is placed to protect the prepared teeth.",
          },
          {
            title: "Placement of the Bridge",
            meta: "4",
            body: "Once the permanent bridge is ready, it is carefully tried in and assessed for fit, bite, and appearance. When both you and your dentist are satisfied, the bridge is cemented securely in place.",
          },
          {
            title: "Final Adjustments",
            meta: "5",
            body: "Minor adjustments may be made to ensure the bridge sits comfortably and your bite feels natural. Your dentist will also provide guidance on how to clean beneath and around the bridge to support its longevity.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity and Care",
        heading: "How Long Do Dental Bridges Last?",
        intro:
          "The lifespan of a dental bridge varies between individuals. Several factors influence how long a bridge will continue to function well, and there is no fixed guarantee of longevity for any dental restoration.",
        items: [
          {
            title: "Oral Hygiene",
            body: "Thorough daily cleaning, including brushing and cleaning beneath the bridge with interdental aids, helps to protect the supporting teeth and gum tissue.",
          },
          {
            title: "Dietary Habits",
            body: "Avoiding excessively hard or sticky foods can help reduce the risk of damage to the bridge. Your dentist will advise on any specific dietary considerations.",
          },
          {
            title: "Regular Dental Care",
            body: "Attending routine dental check-ups and hygiene appointments allows your dentist to monitor the condition of the bridge and address any concerns early.",
          },
        ],
        footer:
          "The longevity of a dental bridge depends on individual factors. Your dentist will discuss realistic expectations and how to care for your bridge during your consultation. All treatment outcomes are dependent on individual clinical circumstances.",
      },
      {
        kind: "pricing",
        eyebrow: "Cost Guide",
        heading: "Dental Bridge Cost London",
        intro:
          "The cost of a dental bridge in London varies depending on several factors, including the number of teeth being replaced, the type of bridge used, and the complexity of treatment. A detailed, written treatment plan with costs is always provided before any work begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Zirconia Bridge (Per Unit)", standard: "From £995", member: "From £497.50" },
          { label: "E-Max Bridge (Per Unit)", standard: "From £995", member: "From £497.50" },
          { label: "Temporary Bridge", standard: "POA", member: "POA" },
        ],
        notes: [
          {
            title: "Per-unit pricing",
            body: "Bridges are priced per unit — each crown on a supporting tooth and the replacement tooth itself count as individual units.",
          },
          {
            title: "Example",
            body: "Replacing one missing tooth with a traditional bridge typically involves three units (two supporting crowns and one replacement tooth).",
          },
          {
            title: "Membership Savings",
            body: "Join our membership for £20/month and receive 50% off all treatment fees.",
          },
        ],
        footnote:
          "Final costs depend on the number of units required and individual clinical factors. A full written estimate is provided before treatment begins.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist for Dental Bridges",
        intro:
          "At Smile Dentist, we take a personalised approach to restorative dentistry. Every treatment plan is developed following a thorough clinical assessment, ensuring that the recommended approach is appropriate for your individual needs.",
        items: [
          {
            title: "Central London Location",
            body: "Our practice is conveniently located in London, accessible for patients across the city and surrounding areas.",
          },
          {
            title: "Restorative Expertise",
            body: "Our GDC-registered dentists have experience in a range of restorative treatments, including dental bridges, crowns, and implant-supported restorations.",
          },
          {
            title: "Natural-Looking Results",
            body: "We use metal-free ceramic materials that are shade-matched to your natural teeth, with the aim of creating a restoration that blends seamlessly with your smile.",
          },
          {
            title: "Personalised Planning",
            body: "Every patient receives a written treatment plan with transparent costs. We discuss all available options so you can make an informed decision about your care.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving Patients Across London",
        heading: "Dental Bridges Near You",
        paragraphs: [
          "We welcome patients from across London and the surrounding areas who are looking for a fixed solution to replace missing teeth. Whether you are searching for a dental bridge near you or have been referred by another dental professional, our team is here to help.",
          "Our practice is well connected by public transport and offers a calm, welcoming environment for patients seeking restorative dental care. All treatments are delivered by GDC-registered dentists at our CQC-registered practice.",
        ],
      },
      {
        kind: "faq",
        eyebrow: "Common Questions",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is a dental bridge?",
            a: "A dental bridge is a fixed restoration used to replace one or more missing teeth. It is supported by crowns placed on the teeth either side of the gap, with a replacement tooth attached between them. Bridges are cemented in place and do not need to be removed. Suitability depends on a clinical assessment.",
          },
          {
            q: "Is getting a dental bridge painful?",
            a: "The preparation is carried out under local anaesthetic, so you should not feel discomfort during the procedure. Some patients experience mild sensitivity on the prepared teeth for a few days afterwards, which typically settles on its own. Your dentist will discuss what to expect at each stage.",
          },
          {
            q: "How long do dental bridges last?",
            a: "The longevity of a dental bridge varies between individuals and depends on factors such as oral hygiene, dietary habits, and attendance at regular dental appointments. With appropriate care, bridges can provide many years of reliable function. Your dentist will advise on how to care for your bridge.",
          },
          {
            q: "Are bridges better than implants?",
            a: "Neither option is universally better — the most suitable choice depends on your individual clinical circumstances. Bridges do not require surgery, while implants do not involve preparing adjacent teeth. Your dentist will discuss both options during your consultation and recommend the approach best suited to your situation.",
          },
          {
            q: "Do dental bridges look natural?",
            a: "Modern ceramic bridges are carefully designed to match the shade, shape, and translucency of your natural teeth. The materials used at our practice are metal-free, which helps to create a natural-looking result. Your dentist will colour-match the bridge during the planning stage.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "maryland-bridge-london": {
    h1: "Maryland Bridge London",
    intro:
      "A Maryland bridge — also known as a resin-bonded bridge — is a minimally invasive fixed option for replacing a single missing tooth. At our London practice, we provide carefully planned Maryland bridges as part of a personalised treatment plan.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard From £1,030",
      "Member (50% off) From £515",
      "Personalised treatment plan with full costs provided before treatment",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1777304825/AdobeStock_308192942_kuyxof.jpg",
      alt: "Maryland bridge treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Is a Maryland Bridge?",
        intro:
          "A Maryland bridge is a type of fixed dental bridge used to replace a missing tooth. It consists of a false tooth (pontic) with thin wings on one or both sides, which are bonded to the back surfaces of the adjacent natural teeth. It forms part of our wider range of dental bridge treatments and is particularly suitable where a conservative, minimally invasive approach is preferred.",
        items: [
          {
            title: "Minimally Invasive",
            body: "Maryland bridges typically require little or no preparation of the supporting natural teeth, making them one of the more conservative bridge options available.",
          },
          {
            title: "Fixed Tooth Replacement",
            body: "Unlike a removable denture, a Maryland bridge is cemented in place, helping to restore appearance and chewing function without the need to remove it for cleaning.",
          },
          {
            title: "Largely Reversible",
            body: "Because the supporting teeth are only minimally modified, Maryland bridges are generally considered a largely reversible treatment compared with conventional bridges.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Is This Treatment for You?",
        heading: "Who Are Maryland Bridges Suitable For?",
        sub: "Maryland bridges may be considered in specific clinical situations. Your dentist will always confirm suitability through a clinical assessment, and alternatives such as dental implants or conventional bridges will be discussed where appropriate.",
        items: [
          {
            title: "Single Missing Front Tooth",
            meta: "1",
            body: "Most commonly used for replacing a single missing tooth in the front of the mouth, where aesthetics and minimal preparation are priorities.",
          },
          {
            title: "Healthy Supporting Teeth",
            meta: "2",
            body: "Requires the adjacent teeth used for support to be healthy, structurally sound, and suitable for bonding the bridge wings.",
          },
          {
            title: "Conservative Preference",
            meta: "3",
            body: "Suitable for patients who prefer a more conservative option that avoids significant preparation of their natural teeth.",
          },
          {
            title: "Not Suitable for Implants",
            meta: "4",
            body: "Can be considered where dental implants are not an option due to bone quality, general health, timing, or personal preference.",
          },
        ],
        note: {
          title: "Important",
          body: "Maryland bridges are not suitable in every situation. Factors such as bite forces, tooth grinding, and the health of the supporting teeth all affect suitability. Your dentist will discuss all suitable options — including bridges, implants, and dentures — during your consultation.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Why Consider a Maryland Bridge",
        heading: "Benefits of Maryland Bridges",
        intro:
          "Maryland bridges offer several potential benefits for suitable patients. The outcome depends on individual clinical factors.",
        items: [
          {
            title: "Minimal Tooth Preparation",
            body: "Maryland bridges typically require little or no preparation of the natural teeth used for support, which can be an important advantage for patients who want to preserve tooth structure.",
          },
          {
            title: "Fewer Appointments",
            body: "Treatment is usually completed over two appointments — impressions and fitting — making it a relatively efficient option where suitable.",
          },
          {
            title: "Natural Aesthetic Potential",
            body: "The false tooth is shaped and shaded to match your adjacent teeth, which can help restore a natural-looking appearance to your smile.",
          },
          {
            title: "Non-Surgical Option",
            body: "A Maryland bridge is a non-surgical option for replacing a missing tooth, which may be particularly relevant for patients who are not suitable for, or do not wish to pursue, implant surgery.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Maryland Bridge Process",
        sub: "The process typically involves a small number of carefully planned appointments. Each stage is designed to help achieve a result that supports comfort, function, and appearance.",
        items: [
          {
            title: "Consultation & Assessment",
            meta: "Step 1",
            body: "Detailed examination of the missing-tooth area, adjacent teeth, gums, and bite to confirm suitability.",
          },
          {
            title: "Planning & Impressions",
            meta: "Step 2",
            body: "Shade selection and detailed impressions or digital scans are taken so the bridge can be custom-made in a dental laboratory.",
          },
          {
            title: "Bridge Fabrication",
            meta: "Step 3",
            body: "The bridge is crafted in the laboratory. This stage usually takes a short period of time while you continue with everyday life.",
          },
          {
            title: "Fitting & Bonding",
            meta: "Step 4",
            body: "The bridge is checked for fit, shade, and bite, then carefully bonded to the back of the adjacent teeth. Final polishing and a bite check complete the appointment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Longevity",
        heading: "How Long Do Maryland Bridges Last?",
        intro:
          "Longevity varies between individuals and depends on bite forces, habits, oral hygiene, and the health of the supporting teeth.",
        items: [
          {
            title: "Individual Variation",
            body: "Some patients keep a Maryland bridge in place for many years, while others may experience occasional debonding that requires re-cementing. Outcomes cannot be predicted with certainty in advance.",
          },
          {
            title: "Daily Care",
            body: "Good oral hygiene — including careful brushing and flossing around the bridge — is important. Avoiding habits such as biting hard objects can help protect the bond.",
          },
          {
            title: "Regular Review",
            body: "Regular dental and hygiene visits allow the bridge, supporting teeth, and gums to be monitored, and any issues addressed early.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Longevity varies between individuals and cannot be guaranteed. Debonding or the need for re-cementing is a known possibility with resin-bonded bridges. Your dentist will discuss expected outcomes and maintenance during your consultation.",
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        heading: "Maryland Bridge Cost London",
        intro:
          "The cost of a Maryland bridge depends on the case and the laboratory materials selected. A written treatment plan with full costs is always provided before treatment begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Maryland Bridge (Resin-Bonded)", standard: "From £1,030", member: "From £515" },
          { label: "Conventional Bridge (per unit)", standard: "From £995", member: "From £497.50" },
          { label: "Dental Implant (inc. crown)", standard: "From £2,950", member: "Not eligible" },
        ],
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of our treatment fees is available on our pricing page.",
          },
        ],
        footnote:
          "Final costs depend on case complexity and the materials used. A written treatment plan is provided before treatment begins.",
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "Experienced in restorative and minimally invasive dentistry",
          "Careful clinical assessment before any bridge treatment is planned",
          "Clear explanation of all suitable tooth-replacement options",
          "Transparent written treatment plans and costs",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Visit Our London Practice",
        heading: "Maryland Bridges in South Kensington",
        paragraphs: [
          "Our South Kensington practice welcomes patients from across London and surrounding areas who are considering options for replacing a single missing tooth. Whether you are comparing a Maryland bridge with an implant or a conventional bridge, our team is here to provide clear, balanced information.",
          "20 Old Brompton Road, South Kensington, London SW7 3DL",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is a Maryland bridge?",
            a: "A Maryland bridge (also known as a resin-bonded bridge) is a type of fixed dental bridge used to replace a missing tooth. It consists of a false tooth with thin wings on each side, which are bonded to the inner surface of the adjacent natural teeth. Because little to no preparation of the supporting teeth is typically required, it is considered a minimally invasive bridge option.",
          },
          {
            q: "Who are Maryland bridges suitable for?",
            a: "Maryland bridges may be considered for patients missing a single tooth — most commonly front teeth — where the adjacent teeth are healthy and strong enough to support the bridge. Suitability depends on a clinical assessment of your bite, gum health, and the condition of the supporting teeth. Not every patient or clinical situation is suitable.",
          },
          {
            q: "How is a Maryland bridge different from a conventional bridge?",
            a: "A conventional bridge typically requires crowns to be placed on the supporting teeth, which involves more preparation of the natural tooth. A Maryland bridge uses thin resin-bonded wings instead, which usually requires little or no tooth preparation. Your dentist will explain the differences and help determine which option may be more appropriate for your situation.",
          },
          {
            q: "How long do Maryland bridges last?",
            a: "The lifespan of a Maryland bridge varies between individuals and depends on bite forces, the health of the supporting teeth, oral hygiene, and habits such as grinding. With appropriate care, Maryland bridges may typically last several years. Occasional re-cementing or replacement may be needed over time.",
          },
          {
            q: "Is the Maryland bridge treatment reversible?",
            a: "Maryland bridges are generally considered a conservative, largely reversible option, as little or no natural tooth structure is typically removed. If a bridge debonds, it can often be re-bonded. Where long-term stability becomes a concern, alternative treatments such as a conventional bridge or dental implant may be discussed.",
          },
          {
            q: "Can a Maryland bridge replace more than one tooth?",
            a: "Maryland bridges are most commonly used to replace a single missing tooth. Replacing multiple teeth with a resin-bonded approach is possible in some cases but is less common, as longer spans may place more stress on the bonded wings. Your dentist will assess whether this is a suitable option for you.",
          },
          {
            q: "What are the alternatives to a Maryland bridge?",
            a: "Alternatives to replace a missing tooth may include a conventional bridge, a dental implant, or in some cases a removable partial denture. Each option has different benefits, risks, and costs. Your dentist will discuss the options that may be appropriate for you based on clinical assessment.",
          },
          {
            q: "Is the treatment painful?",
            a: "The Maryland bridge process is typically comfortable. Because little or no tooth preparation is usually required, local anaesthetic is often not needed. Some mild sensitivity may be noticed for a short time after fitting, which usually settles.",
          },
        ],
      },
    ],
  },

  "dentures-london": {
    h1: "Dentures London: Modern, Comfortable, Natural-Looking.",
    intro:
      "Whether you need to replace a few teeth or a full arch, modern dentures are designed to be lightweight, well-fitting, and natural in appearance. We offer four distinct types to suit every situation and budget.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Acrylic Dentures From £397.50",
      "Valplast Flexible From £447.50",
      "Cobalt-Chrome From £697.50",
      "Membership £20/month",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805793/acrylic-_-flexi-dentures_caf2u4.jpg",
      alt: "Modern dentures at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding Dentures",
        heading: "What Are Modern Dentures?",
        intro:
          "Dentures are removable prosthetic devices that replace missing teeth and the surrounding tissue. Modern dentures are designed with precision materials and digital scanning to achieve a comfortable fit and a natural appearance. At Smile Dentist, we offer four types of denture — each with distinct characteristics — so we can match the solution to your specific needs, lifestyle, and budget.",
        items: [
          {
            title: "Natural Appearance",
            body: "Teeth are shade-matched to your natural colour, and the gum base is hand-tinted to blend with your tissue.",
          },
          {
            title: "Precision Fit",
            body: "Multiple impressions and a try-in stage ensure the denture fits accurately and comfortably.",
          },
          {
            title: "Multiple Options",
            body: "From affordable acrylic to implant-retained solutions — we tailor the approach to your needs.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Your Denture Options",
        intro: "We offer four types of denture. Your dentist will help you decide which is most suitable.",
        items: [
          {
            title: "Valplast (Flexible)",
            meta: "1",
            bullets: [
              "Material: Flexible, medical-grade nylon resin.",
              "Benefits: Lightweight, flexible, and virtually unbreakable. No visible metal clasps — the hooks blend with your gum colour.",
              "Best For: Partial dentures replacing 1 to 3 teeth where aesthetics are a priority.",
              "Member Price From £447.50",
            ],
          },
          {
            title: "Cobalt-Chrome",
            meta: "2",
            bullets: [
              "Material: Custom-cast cobalt-chrome metal framework with acrylic teeth.",
              "Benefits: Thinner and stronger than acrylic. Often palate-free design for upper dentures, allowing better taste sensation.",
              "Best For: Patients missing multiple teeth who want a strong, thin, comfortable denture.",
              "Member Price From £697.50",
            ],
          },
          {
            title: "Acrylic",
            meta: "3",
            bullets: [
              "Material: Gum-coloured acrylic (plastic) base with resin or ceramic teeth.",
              "Benefits: The most affordable option. Easy to repair and adjust. A new tooth can be added if needed.",
              "Best For: Full dentures, immediate dentures, or when budget is a primary consideration.",
              "Member Price From £397.50",
            ],
          },
          {
            title: "Implant-Retained",
            meta: "4",
            bullets: [
              "Concept: 2 to 4 dental implants are placed in the jaw. The denture has attachments that clip onto the implants.",
              "Benefits: Significantly improved stability and chewing function. No adhesive needed. Helps preserve jawbone.",
              "Best For: Patients who want denture security without the movement or looseness of conventional dentures.",
            ],
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Denture Costs",
        intro:
          "A full written estimate is provided after your consultation so you know exactly what to expect before treatment begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Acrylic Denture (Partial)", standard: "From £795", member: "From £397.50" },
          { label: "Acrylic Denture (Full)", standard: "From £1,095", member: "From £547.50" },
          { label: "Valplast Flexible Denture", standard: "From £895", member: "From £447.50" },
          { label: "Cobalt-Chrome Denture", standard: "From £1,395", member: "From £697.50" },
          { label: "Denture Repair", standard: "From £202", member: "From £101" },
          { label: "Denture Reline", standard: "From £254", member: "From £127" },
        ],
        notes: [
          {
            title: "Membership Savings",
            body: "Join our membership for £20/month and receive 50% off all treatment fees.",
          },
        ],
        footnote: "A full written estimate is provided before treatment begins.",
      },
      {
        kind: "doAvoid",
        heading: "Caring for Your Dentures",
        sub: "Proper care will extend the life of your dentures and protect your oral health.",
        dos: [
          "Remove and rinse dentures after eating",
          "Brush daily with a soft denture brush and plain water",
          "Soak overnight in denture cleaning solution",
          "Remove dentures at night to rest your gums",
          "Handle over a soft surface in case of drops",
          "Attend regular dental check-ups",
        ],
        avoids: [
          "Regular toothpaste (too abrasive for denture surfaces)",
          "Hot or boiling water (can warp the material)",
          "Bleach-based cleaners",
          "DIY repairs with superglue",
          "Very hard or sticky foods",
          "Sleeping with dentures in place",
        ],
      },
      {
        kind: "stories",
        heading: "Patient Experiences",
        items: [
          {
            title: "Discreet Partial Denture",
            concern: "Patient had lost a visible tooth and was worried about a denture looking obvious.",
            treatment: "Valplast flexible partial denture with gum-coloured clasps.",
            outcome:
              "The patient found the denture comfortable and was pleased that the clasps were not visible when smiling.",
          },
          {
            title: "Palate-Free Comfort",
            concern:
              "Patient found their existing upper acrylic denture bulky and complained of reduced taste sensation due to palate coverage.",
            treatment: "Cobalt-chrome denture with a palate-free design.",
            outcome:
              "The patient reported improved comfort, better taste sensation, and a more secure fit compared to their previous denture.",
          },
        ],
        disclaimer:
          "Individual results may vary. A clinical assessment is required to determine suitability.",
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Will I need denture adhesive?",
            a: "A well-fitting denture should rely primarily on suction and muscle control. However, full lower dentures have less surface area for suction, and some patients find a small amount of adhesive helpful for added confidence. Implant-retained dentures clip onto implants and do not require adhesive.",
          },
          {
            q: "How many appointments does it take?",
            a: "Dentures typically require 3 to 4 appointments over 2 to 4 weeks: impressions, bite registration, try-in (where you preview the teeth in wax), and final fitting. The exact number depends on the type of denture and any adjustments needed.",
          },
          {
            q: "Can I sleep with my dentures in?",
            a: "We recommend removing dentures at night to allow your gum tissue to rest and to maintain good oral hygiene. Leaving dentures in overnight can promote fungal infections and gum irritation. Soak them in a denture cleaning solution while you sleep.",
          },
          {
            q: "Will my dentures look natural?",
            a: "Modern dentures are designed to look very natural. We select the tooth shape, size, and shade with you, and hand-tint the acrylic gum base to match your natural tissue colour. The goal is a result that looks like healthy natural teeth.",
          },
          {
            q: "Which type of denture is right for me?",
            a: "The best type depends on how many teeth you are missing, the condition of your remaining teeth and gums, your lifestyle, and your budget. Your dentist will discuss all options during your consultation and recommend the most suitable type for your situation.",
          },
          {
            q: "How do I clean my dentures?",
            a: "Remove your dentures and brush them daily with a soft denture brush and plain water or denture cleaning paste (not regular toothpaste, which can be too abrasive). Soak overnight in a denture cleaning solution. Rinse thoroughly before placing them back in your mouth. Also brush your gums, tongue, and any remaining teeth.",
          },
          {
            q: "Will I be able to eat normally?",
            a: "Most patients adjust to eating with dentures within a few weeks. Start with softer foods and gradually reintroduce firmer textures as you gain confidence. Very hard or sticky foods should be avoided as they can damage or dislodge the denture. Chrome and implant-retained dentures generally offer better chewing stability.",
          },
          {
            q: "What if my denture becomes loose over time?",
            a: "The jawbone naturally changes shape after teeth are lost, which can cause dentures to become loose over time. We can often reline (refit) the denture to restore a snug fit. In some cases, a new denture may be needed. Implant-retained dentures are less affected by bone changes.",
          },
        ],
      },
      smileGallery(),
      {
        kind: "prose",
        heading: "Explore Our Full Range of Denture Solutions",
        paragraphs: [
          "We offer a comprehensive range of denture types to suit different needs, including acrylic dentures for an affordable and effective solution, chrome dentures for a thinner and stronger fit, Valplast flexible dentures for discreet, clasp-free comfort, and implant-retained dentures for maximum stability without adhesive.",
          "If you are considering a fixed alternative to removable dentures, we also provide dental implants and dental bridges, which can permanently replace missing teeth without the need for a removable appliance. Your dentist will discuss all suitable options during your consultation.",
          "All denture treatments at Smile Dentist are provided by GDC-registered dentists at our CQC-registered practice. We follow strict CQC standards for infection control, patient safety, and clinical governance to ensure you receive the highest quality of care.",
        ],
      },
    ],
  },

  "full-dentures": {
    h1: "Full Dentures London",
    intro:
      "Full dentures are removable prosthetic appliances designed to replace all of the natural teeth in the upper or lower jaw. At our London practice, we provide carefully fitted full dentures as part of a personalised treatment plan tailored to your comfort, function, and appearance.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard From £1,095",
      "Member (50% off) From £547.50",
      "Personalised treatment plan with full costs provided before treatment",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805793/acrylic-_-flexi-dentures_caf2u4.jpg",
      alt: "Full dentures treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Are Full Dentures?",
        intro:
          "Full dentures (also known as complete dentures) are custom-made removable prosthetics used when all of the natural teeth in the upper or lower jaw are missing. Each denture consists of artificial teeth set into a gum-coloured acrylic base, designed to rest comfortably on the gums and supporting bone. Full dentures form part of our wider range of denture treatments available at the practice.",
        items: [
          {
            title: "Custom-Made",
            body: "Each full denture is individually designed using detailed impressions, bite records, and tooth selection, so the result is tailored to the shape of your mouth and facial features.",
          },
          {
            title: "Restores Appearance",
            body: "Full dentures can help restore the appearance of a complete smile and support the lips and cheeks, which may improve facial profile following long-term tooth loss.",
          },
          {
            title: "Supports Function",
            body: "Well-fitted full dentures may help support chewing and speech. Outcomes vary between individuals and can improve further as you adjust to wearing them.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Is This Treatment for You?",
        heading: "Who Are Full Dentures Suitable For?",
        sub: "Full dentures may be considered in a range of clinical situations. A thorough assessment is always carried out to confirm whether dentures, or an alternative such as implant-supported dentures, may be more appropriate for you.",
        items: [
          {
            title: "Loss of All Teeth in One or Both Jaws",
            meta: "1",
            body: "Full dentures are designed for patients who have lost, or will soon lose, all of the natural teeth in the upper jaw, lower jaw, or both.",
          },
          {
            title: "Replacing Older Dentures",
            meta: "2",
            body: "Existing dentures that have become loose, worn, or uncomfortable can sometimes be replaced with a new set that is better fitted to the current shape of your mouth.",
          },
          {
            title: "Patients Not Suitable for Implants",
            meta: "3",
            body: "For patients where dental implants are not a suitable option due to bone quality, general health, or personal preference, conventional full dentures remain a well-established alternative.",
          },
          {
            title: "Following Multiple Extractions",
            meta: "4",
            body: "Where remaining teeth have a poor long-term outlook and require removal, full dentures — or an immediate denture approach — can form part of the planned treatment.",
          },
        ],
        note: {
          title: "Important",
          body: "Suitability for full dentures depends on a clinical assessment of your gums, bone, oral tissues, and general health. Your dentist will discuss all suitable options during your consultation.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Options Available",
        heading: "Types of Full Dentures",
        intro:
          "Full dentures are available in different forms depending on your clinical needs, timing preferences, and the approach your dentist recommends after assessment.",
        items: [
          {
            title: "Conventional Full Dentures",
            body: "Made and fitted after any remaining teeth have been removed and the gums have healed. This allows for accurate impressions and careful fitting based on the final shape of the ridge.",
          },
          {
            title: "Immediate Full Dentures",
            body: "Prepared in advance and fitted on the same day any remaining teeth are removed, so you are not without a denture during healing. Relining or replacement may be needed as the gums settle.",
          },
          {
            title: "Implant-Supported Dentures",
            body: "Where clinically appropriate, implant-supported dentures use dental implants to help stabilise the denture. Suitability depends on bone quality, general health, and clinical assessment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Why Consider Full Dentures",
        heading: "Benefits of Full Dentures",
        intro:
          "Full dentures are a long-established treatment option for complete tooth loss. The outcome depends on your individual clinical situation and personal goals.",
        items: [
          {
            title: "Restored Smile Appearance",
            body: "Full dentures can help restore the appearance of a complete smile and provide support to the lips and cheeks, which may positively influence facial appearance.",
          },
          {
            title: "Non-Surgical Option",
            body: "Full dentures are a removable, non-surgical option for replacing missing teeth, which can be an important consideration for patients who are not suitable for, or do not wish to undergo, implant surgery.",
          },
          {
            title: "Customisable Aesthetics",
            body: "Tooth shade, shape, and positioning can be selected during the try-in stage, allowing the denture to be adjusted to suit your preferences before the final fit.",
          },
          {
            title: "Adjustable and Repairable",
            body: "Full dentures can usually be adjusted, relined, or repaired over time as the mouth changes, which can help extend their comfort and useful life.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Full Dentures Process",
        sub: "Making well-fitting full dentures typically involves several carefully planned appointments. Each stage helps ensure a result that supports comfort, function, and appearance.",
        items: [
          {
            title: "Consultation & Assessment",
            meta: "Step 1",
            body: "Your dentist will review your dental and medical history, examine your mouth, and discuss your goals and expectations.",
          },
          {
            title: "Impressions & Records",
            meta: "Step 2",
            body: "Detailed impressions of your gums are taken, along with bite records, to capture how your upper and lower jaws meet.",
          },
          {
            title: "Try-In Stage",
            meta: "Step 3",
            body: "A wax version of the denture is tried in so that fit, tooth position, shade, and overall appearance can be reviewed and adjusted.",
          },
          {
            title: "Fitting Appointment",
            meta: "Step 4",
            body: "The finished denture is carefully fitted, and your bite and comfort are checked. Minor adjustments may be made at this stage.",
          },
          {
            title: "Review & Adjustments",
            meta: "Step 5",
            body: "Follow-up visits allow your dentist to fine-tune the fit and address any sore spots as your mouth adjusts to the new denture.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Living With Full Dentures",
        heading: "Adjustment, Care & Longevity",
        intro:
          "Adapting to new full dentures takes time. Most patients notice gradual improvement in comfort, speech, and eating as the tissues and muscles adjust.",
        items: [
          {
            title: "Initial Adjustment",
            body: "Speech, eating, and comfort may feel different at first. This is normal and typically improves over the following weeks with practice and any minor adjustments.",
          },
          {
            title: "Daily Care",
            body: "Dentures should be cleaned daily using a denture brush and non-abrasive cleaner, and removed at night to allow the gums to rest.",
          },
          {
            title: "Longevity & Review",
            body: "Gums and bone gradually change shape over the years. Regular review appointments help monitor fit and oral health, and relining or replacement may be needed over time.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Longevity and comfort vary between individuals and cannot be guaranteed. Your dentist will discuss expected outcomes and care guidance during your consultation.",
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        heading: "Full Dentures Cost London",
        intro:
          "The cost of full dentures depends on the material selected, whether an upper, lower, or both arches are being treated, and the complexity of your case. A written treatment plan with full costs is provided before treatment begins.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Acrylic Full Denture", standard: "From £1,095", member: "From £547.50" },
          { label: "Valplast / Flexi Denture", standard: "From £895", member: "From £447.50" },
          { label: "Cobalt-Chrome Denture", standard: "From £1,395", member: "From £697.50" },
        ],
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of our treatment fees is available on our pricing page.",
          },
        ],
        footnote:
          "Final costs depend on case complexity and the materials used. A full written treatment plan is provided before treatment begins.",
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in restorative and prosthetic dentistry",
          "Carefully planned denture construction with dedicated try-in stage",
          "Personalised, patient-centred approach to comfort and appearance",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Visit Our London Practice",
        heading: "Full Dentures in South Kensington",
        paragraphs: [
          "Our South Kensington practice welcomes patients from across London and surrounding areas who are considering full dentures or exploring treatment options for complete tooth loss. Our team is here to provide clear, balanced information and a personalised plan based on clinical assessment.",
          "20 Old Brompton Road, South Kensington, London SW7 3DL",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What are full dentures?",
            a: "Full dentures — sometimes called complete dentures — are removable prosthetic appliances that replace all of the natural teeth in the upper jaw, the lower jaw, or both. They consist of artificial teeth set into a gum-coloured acrylic base, which rests on the gums and underlying ridge.",
          },
          {
            q: "Who are full dentures suitable for?",
            a: "Full dentures may be considered for patients who have lost all of their natural teeth in one or both jaws, or for patients whose remaining teeth have a poor long-term outlook and need to be removed. Suitability depends on a full clinical assessment of your oral health, bone levels, and personal preferences.",
          },
          {
            q: "How long does it take to get used to full dentures?",
            a: "An adjustment period is normal with new full dentures. Many patients find speech, eating, and comfort improve over the first few weeks as the oral tissues and muscles adapt. Small adjustments may be needed during follow-up appointments to help the denture fit and function well.",
          },
          {
            q: "How long do full dentures last?",
            a: "Full dentures typically last several years with appropriate care. Over time, the gums and underlying bone gradually change shape, and the denture may need adjusting, relining, or eventually replacing. Your dentist will discuss expected timelines and maintenance during your consultation.",
          },
          {
            q: "Can I eat normally with full dentures?",
            a: "Most patients can return to a varied diet with full dentures, though it often helps to start with softer foods and smaller pieces during the initial adjustment period. Some harder or very sticky foods may remain more challenging. Your dentist can offer practical guidance at review appointments.",
          },
          {
            q: "Are there alternatives to full dentures?",
            a: "Alternatives may include implant-supported or implant-retained dentures, which use dental implants to help stabilise the denture. Suitability for implants depends on bone quality, general health, and clinical assessment. Your dentist will explain all appropriate options and their relative benefits, risks, and costs.",
          },
          {
            q: "How should I care for my full dentures?",
            a: "Full dentures should be cleaned daily with a denture brush and non-abrasive cleaner, and removed at night to allow the gums to rest. Regular dental check-ups are important so your dentist can monitor your oral tissues and the fit of your denture.",
          },
        ],
      },
    ],
  },

  "root-canal-london": {
    h1: "Root Canal Treatment London",
    intro:
      "Root canal treatment is designed to address infection inside a tooth, helping to relieve symptoms and preserve your natural tooth. At our London practice, we provide a calm and supportive environment throughout the process.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard From £695",
      "Member (50% off) From £347.50",
      "Personalised treatment plan with full costs provided",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805806/root-canal-treatment_t6kqrj.jpg",
      alt: "Root canal treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Treatment",
        heading: "What Is Root Canal Treatment?",
        intro:
          "Root canal treatment — also known as endodontic treatment — is a procedure to remove infected or damaged tissue from inside a tooth. The root canals are then carefully cleaned and sealed to help preserve the natural tooth structure.",
        items: [
          {
            title: "Removing Infection",
            body: "The infected or damaged tissue (pulp) inside the tooth is carefully removed, and the internal surfaces are cleaned and disinfected to address the source of the problem.",
          },
          {
            title: "Cleaning & Sealing",
            body: "Once cleaned, the root canals are shaped and sealed with a filling material to help prevent further infection and support the remaining tooth structure.",
          },
          {
            title: "Preserving Your Tooth",
            body: "The aim of root canal treatment is to help preserve the natural tooth where possible, allowing it to continue functioning for biting and chewing.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Recognising the Signs",
        heading: "Signs You May Need Root Canal Treatment",
        sub: "A number of symptoms may indicate a problem with the tissue inside a tooth. If you are experiencing any of the following, it is important to seek a professional assessment.",
        items: [
          {
            title: "Persistent Tooth Pain",
            meta: "1",
            body: "Ongoing or recurring pain in a tooth — particularly if it comes on spontaneously — may indicate a problem with the tissue inside the tooth that requires assessment.",
          },
          {
            title: "Sensitivity to Hot or Cold",
            meta: "2",
            body: "Prolonged sensitivity to temperature that lingers after the stimulus is removed can sometimes be a sign that the nerve inside the tooth has been affected.",
          },
          {
            title: "Swelling or Tenderness",
            meta: "3",
            body: "Swelling in the gum near a tooth, or tenderness when biting, may suggest infection that warrants clinical investigation.",
          },
          {
            title: "Discolouration of the Tooth",
            meta: "4",
            body: "A tooth that has noticeably darkened may indicate changes to the tissue inside. This can sometimes occur gradually following an injury.",
          },
        ],
        note: {
          title: "Important",
          body: "Symptoms vary between individuals, and a clinical examination with X-rays is needed for an accurate diagnosis. If you are experiencing severe pain or swelling, our emergency dentist service is available for urgent assessment.",
        },
      },
      {
        kind: "cards",
        eyebrow: "When Treatment Is Needed",
        heading: "Why Root Canal Treatment May Be Needed",
        intro:
          "There are several reasons why the tissue inside a tooth may become damaged or infected. Root canal treatment aims to address the underlying cause and help preserve the natural tooth.",
        items: [
          {
            title: "Tooth Decay",
            body: "When decay extends deep enough to reach the pulp — the soft tissue inside the tooth — it can introduce bacteria that lead to infection. Treatment aims to remove the infected tissue and seal the tooth.",
          },
          {
            title: "Cracks or Damage",
            body: "A crack or fracture in a tooth can allow bacteria to reach the pulp, potentially leading to infection. Root canal treatment may be recommended to help save the affected tooth.",
          },
          {
            title: "Infection Inside the Tooth",
            body: "Infection within the tooth can cause pain, swelling, and sensitivity. By removing the infected tissue, root canal treatment aims to relieve symptoms and help preserve the natural tooth.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Root Canal Treatment Process",
        sub: "Root canal treatment follows a structured approach, with each stage carefully planned to address the infection and help restore the tooth.",
        items: [
          {
            title: "Consultation & Diagnosis",
            meta: "Step 1",
            body: "Your dentist will examine the tooth, take any necessary X-rays, and discuss the findings with you to confirm whether root canal treatment is appropriate.",
          },
          {
            title: "Local Anaesthetic",
            meta: "Step 2",
            body: "Local anaesthetic is used to help keep you comfortable throughout the procedure. Your dentist will ensure you are settled before beginning.",
          },
          {
            title: "Removal of Infected Tissue",
            meta: "Step 3",
            body: "The damaged or infected pulp tissue is carefully removed from inside the tooth using specialised instruments.",
          },
          {
            title: "Cleaning & Sealing",
            meta: "Step 4",
            body: "The root canals are cleaned, shaped, and sealed with a filling material to help prevent further infection.",
          },
          {
            title: "Restoration",
            meta: "Step 5",
            body: "The tooth is restored with a filling or, where recommended, a dental crown to help protect and strengthen it.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "After Treatment",
        heading: "Aftercare and Recovery",
        intro:
          "Understanding what to expect after root canal treatment can help you support your recovery and care for the treated tooth.",
        items: [
          {
            title: "Mild Discomfort",
            body: "Some patients may experience mild discomfort or tenderness after treatment. This is a normal response and typically improves over the following days.",
          },
          {
            title: "Symptoms Typically Improve",
            body: "The symptoms that led to treatment — such as pain or sensitivity — typically improve over time following the procedure. Your dentist will advise on what to expect.",
          },
          {
            title: "Following Aftercare Advice",
            body: "Your dentist will provide specific aftercare guidance. Following this advice — including attending any follow-up appointments — is an important part of supporting your recovery.",
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        heading: "Root Canal Cost London",
        intro:
          "The cost of root canal treatment varies depending on the tooth involved, the complexity of the case, and whether additional restoration is required. A personalised treatment plan with full costs is provided following your consultation.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Root Canal — Front Tooth", standard: "From £695", member: "From £347.50" },
          { label: "Root Canal — Molar", standard: "From £895", member: "From £447.50" },
          { label: "Crown (if required)", standard: "From £995", member: "From £497.50" },
        ],
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
        footnote:
          "Final costs depend on the complexity of the case. A written treatment plan with full costs is provided before treatment begins.",
      },
      {
        kind: "cards",
        eyebrow: "Your Options",
        heading: "Alternatives to Root Canal Treatment",
        intro:
          "Your dentist will discuss all suitable options with you. In some cases, an alternative approach may be more appropriate depending on your individual clinical situation.",
        items: [
          {
            title: "Tooth Extraction",
            body: "If a tooth cannot be saved, extraction may be recommended. Your dentist will discuss replacement options — such as an implant, bridge, or denture — to restore function and appearance.",
          },
          {
            title: "Preserving Your Natural Tooth",
            body: "Where clinically possible, preserving the natural tooth is generally considered a favourable outcome. Root canal treatment aims to achieve this by addressing the infection while keeping the tooth in place.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Important",
        body: "The most appropriate treatment for you can only be determined through a thorough clinical assessment. Your dentist will explain all suitable options and provide a personalised recommendation.",
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with experience in restorative treatments",
          "Calm and supportive approach for patients who may feel anxious",
          "Personalised treatment planning for every patient",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Root Canal Treatment Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who are seeking root canal treatment or assessment for tooth pain. Whether you are searching for root canal treatment near you or need help with dental discomfort, we are here to support you.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is root canal treatment?",
            a: "Root canal treatment is a procedure to remove infected or damaged tissue from inside a tooth. The root canals are then cleaned and sealed to help preserve the natural tooth. It is carried out under local anaesthetic to help keep you comfortable.",
          },
          {
            q: "Is root canal treatment painful?",
            a: "Local anaesthetic is used during the procedure to help keep you comfortable. Some patients may experience mild discomfort afterwards, which typically settles within a few days. Your dentist will discuss what to expect and how to manage any post-treatment sensitivity.",
          },
          {
            q: "How long does a root canal take?",
            a: "The length of treatment depends on the tooth involved and the complexity of the case. Treatment may be completed in one or more appointments. Your dentist will provide an estimated timeline as part of your personalised treatment plan.",
          },
          {
            q: "Can a root canal save my tooth?",
            a: "Root canal treatment aims to preserve the natural tooth by removing infection from inside it. In many cases, treatment can help retain a tooth that might otherwise need to be extracted. Outcomes depend on the individual clinical situation.",
          },
          {
            q: "What happens if I delay treatment?",
            a: "If an infection inside a tooth is left untreated, it may worsen over time and could affect the surrounding tissues. Early assessment allows your dentist to discuss the most appropriate options for your situation before the condition progresses.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "dental-examination-london": {
    h1: "Dental Examination London",
    intro:
      "A dental examination is a routine assessment of your teeth, gums, and overall oral health. Regular check-ups play an important role in preventative dental care, helping to monitor your oral health over time and identify potential concerns at an early stage. At our London practice, every examination is carried out by a GDC-registered dentist.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard Examination From £95",
      "Member (50% off) From £47.50",
      "New Patient Examination £30",
      "Membership £20/month",
    ],
    blocks: [
      {
        kind: "list",
        heading: "What to Expect",
        items: [
          "Assessment of teeth, gums, and soft tissues",
          "Discussion of your oral health and any concerns",
          "Checking for signs of decay or gum issues",
          "Personalised recommendations based on findings",
          "Written treatment plan if any issues are identified",
        ],
      },
      {
        kind: "steps",
        eyebrow: "Understanding Dental Examinations",
        heading: "What Is a Dental Examination?",
        sub: "A dental examination is a routine assessment of your teeth, gums, and the soft tissues of your mouth. It is carried out by a dentist and is designed to provide an overall picture of your current oral health. During the examination, your dentist will look for any signs of potential concerns — such as early decay, gum inflammation, or changes in the soft tissues — and discuss their findings with you. Where issues are identified, a written treatment plan with costs may be provided so you can make an informed decision about any recommended care. Regular dental examinations play an important role in helping to maintain long-term oral health by allowing your dentist to monitor changes over time and provide guidance on how to care for your teeth and gums at home.",
        items: [
          {
            title: "Routine Assessment",
            meta: "1",
            body: "A thorough check of your teeth, gums, and oral tissues, carried out by a GDC-registered dentist at each visit.",
          },
          {
            title: "Early Identification",
            meta: "2",
            body: "Helps identify potential concerns at an early stage, when they may be simpler to manage or address.",
          },
          {
            title: "Long-Term Monitoring",
            meta: "3",
            body: "Regular visits allow your dentist to track changes in your oral health over time and adjust recommendations accordingly.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Preventative Care",
        heading: "Why Regular Dental Check-Ups Are Important",
        intro:
          "Attending regular dental check-ups is one of the most effective ways to support your long-term oral health. These visits give your dentist the opportunity to monitor your teeth and gums over time and to discuss any changes that may benefit from attention.",
        items: [
          {
            title: "Monitoring Over Time",
            body: "Regular visits allow your dentist to observe how your oral health is changing, making it easier to spot trends or developing concerns before they progress.",
          },
          {
            title: "Identifying Early Signs",
            body: "Some dental conditions can develop without obvious symptoms. Routine examinations may help identify potential issues at an earlier stage, when they can often be addressed more simply.",
          },
          {
            title: "Preventative Approach",
            body: "A dental examination is an opportunity to discuss your oral hygiene routine and receive guidance on how to care for your teeth and gums between visits.",
          },
        ],
        footer:
          "Your dentist may also recommend a visit to the dental hygienist for a professional clean, which can complement your examination and support your oral health routine.",
      },
      {
        kind: "steps",
        eyebrow: "The Examination Process",
        heading: "What Happens During a Dental Examination",
        sub: "A dental examination is a structured assessment carried out by your dentist to evaluate the health of your teeth, gums, and surrounding tissues.",
        items: [
          {
            title: "Discussion of Your Concerns",
            meta: "1",
            body: "Your dentist will begin by asking about your general health, any concerns you may have, and your dental history. This helps to tailor the examination to your individual needs.",
          },
          {
            title: "Visual Assessment of Teeth",
            meta: "2",
            body: "Your dentist will visually examine each tooth, looking for signs of decay, wear, cracks, or any changes to existing restorations such as fillings or crowns.",
          },
          {
            title: "Checking Gums and Soft Tissues",
            meta: "3",
            body: "The health of your gums is assessed, including checking for signs of inflammation or gum disease. The soft tissues of your mouth — including your tongue, cheeks, and palate — are also examined.",
          },
          {
            title: "Discussion of Findings",
            meta: "4",
            body: "Your dentist will discuss their findings with you, explain any areas of concern, and answer any questions you may have. If further investigation or treatment is recommended, this will be outlined clearly.",
          },
          {
            title: "Personalised Recommendations",
            meta: "5",
            body: "Based on the assessment, your dentist will provide personalised advice on oral hygiene, suggest any recommended treatments, and advise on when your next check-up should be scheduled.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Frequency of Visits",
        heading: "How Often Should You Have a Dental Check-Up?",
        intro:
          "The recommended frequency of dental check-ups varies between individuals. There is no single interval that is right for everyone — the most appropriate schedule depends on your current oral health, any existing conditions, and your individual risk factors.",
        items: [
          {
            title: "Individual Assessment",
            body: "Your dentist will recommend a recall interval based on your specific oral health needs, taking into account factors such as gum health, decay risk, and general health.",
          },
          {
            title: "Adjusted Over Time",
            body: "The recommended interval may change over time as your oral health evolves. Your dentist will review and adjust their recommendation at each visit.",
          },
          {
            title: "Personalised Guidance",
            body: "Rather than applying a fixed schedule, your dentist will provide a personalised recommendation that reflects your current needs and oral health status.",
          },
        ],
        footer:
          "The appropriate interval between dental check-ups depends on individual clinical factors. Your dentist will advise on how often you should attend based on your oral health assessment.",
      },
      {
        kind: "cards",
        eyebrow: "Supporting Your Oral Health",
        heading: "Benefits of Regular Dental Examinations",
        intro:
          "Attending regular dental examinations is an important part of looking after your oral health. While no examination can guarantee the detection of every condition, routine visits provide a number of benefits.",
        items: [
          {
            title: "Supports Oral Health",
            body: "Regular check-ups help you stay informed about the current condition of your teeth and gums, supporting your overall oral health.",
          },
          {
            title: "Early Identification",
            body: "Some dental concerns can develop without obvious symptoms. Routine examinations may help identify potential issues at an earlier stage.",
          },
          {
            title: "Professional Guidance",
            body: "Your dentist can provide tailored advice on brushing, flossing, and diet — helping you to care for your teeth and gums more effectively at home.",
          },
          {
            title: "Informed Decisions",
            body: "Understanding the current state of your oral health allows you to make informed decisions about any recommended care or treatment.",
          },
        ],
        footer:
          "The benefits of regular dental examinations depend on individual clinical circumstances. No examination can guarantee the detection of all conditions. Your dentist will discuss any findings and recommendations with you.",
      },
      {
        kind: "pricing",
        eyebrow: "Examination Fees",
        heading: "Dental Examination Cost London",
        intro:
          "The cost of a dental examination may vary depending on the type of assessment carried out and whether any additional checks — such as X-rays — are clinically required. A new patient examination is available at a reduced introductory fee.",
        columns: ["Service", "Standard", "Member"],
        rows: [
          { label: "Comprehensive Examination", standard: "From £95", member: "From £47.50" },
          { label: "New Patient Examination", standard: "£30", member: "" },
          { label: "Small X-Ray (each)", standard: "From £20", member: "From £10" },
        ],
        notes: [
          {
            title: "Personalised recommendations",
            body: "Your dentist will advise on any additional assessments or follow-up care based on your individual needs.",
          },
          {
            title: "No obligation",
            body: "If treatment is recommended, a written plan with costs is provided. There is no obligation to proceed on the day.",
          },
          {
            title: "Membership Plan",
            body: "Our membership plan (£20/month) includes examinations and offers a reduction on treatment fees.",
          },
        ],
        footnote:
          "X-rays are taken only when clinically indicated and charged separately. Final costs depend on individual assessment.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist for Your Dental Examination",
        intro:
          "At Smile Dentist, we take a calm, patient-focused approach to dental examinations. Every assessment is carried out by a GDC-registered dentist, and our team is committed to making your visit as comfortable and informative as possible.",
        items: [
          {
            title: "London Location",
            body: "Our practice is conveniently located in London, accessible for patients across the city and surrounding areas.",
          },
          {
            title: "Focus on Preventative Care",
            body: "We believe in a preventative approach to dentistry, with regular examinations forming the foundation of good oral health management.",
          },
          {
            title: "Calm and Patient-Focused",
            body: "We understand that visiting the dentist can feel daunting. Our team takes a calm, gentle approach and will go at your pace throughout the appointment.",
          },
          {
            title: "Personalised Assessments",
            body: "Every examination is tailored to your individual needs. We listen to your concerns, assess your oral health, and provide recommendations specific to your situation.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving Patients Across London",
        heading: "Dental Check-Ups Near You",
        paragraphs: [
          "We welcome patients from across London and the surrounding areas who are looking for a thorough and professional dental check-up. Whether you are searching for a dentist check-up near you or are registering with a new practice, our team is here to help.",
          "Our practice is well connected by public transport and offers a calm, welcoming environment for patients of all ages. All examinations are carried out by GDC-registered dentists at our CQC-registered practice.",
        ],
      },
      {
        kind: "faq",
        eyebrow: "Common Questions",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What happens during a dental examination?",
            a: "A dental examination involves a visual assessment of your teeth, gums, and soft tissues. Your dentist will check for signs of decay, gum disease, and other concerns. Findings are discussed with you, and a written treatment plan may be provided if any issues are identified.",
          },
          {
            q: "Is a dental check-up painful?",
            a: "A routine dental check-up is generally comfortable. It involves a visual and gentle physical assessment of your teeth and gums. If any tenderness is experienced, let your dentist know and they will adjust their approach. Most patients find the process straightforward.",
          },
          {
            q: "How long does a dental exam take?",
            a: "The length of a dental examination depends on individual needs and what is being assessed. A routine check-up typically takes around 20 to 30 minutes, though this may vary. Your dentist will ensure adequate time is allocated for a thorough assessment.",
          },
          {
            q: "How often should I visit the dentist?",
            a: "The recommended frequency of dental visits varies between individuals. Your dentist will advise on an appropriate interval based on your oral health needs. Some patients may benefit from more frequent visits, while others may be seen less often.",
          },
          {
            q: "Do I need a check-up if I have no symptoms?",
            a: "Yes, regular check-ups are recommended even if you have no symptoms. Some dental conditions can develop without obvious signs, and a routine examination allows your dentist to monitor your oral health and identify any concerns at an early stage.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "tmj-treatment-london": {
    h1: "TMJ Treatment London",
    intro:
      "Assessment and conservative management of temporomandibular joint (TMJ) symptoms — including jaw discomfort, clicking, and bruxism-related muscle tension — delivered at our London practice as part of a personalised care plan.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Consultation From £95",
      "Splint Therapy From £595",
      "Personalised treatment plan with full costs provided before treatment",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1777304430/tmj_hff8cu.jpg",
      alt: "TMJ assessment and treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "cards",
        eyebrow: "Understanding the Condition",
        heading: "What Is TMJ Disorder?",
        intro:
          "The temporomandibular joint (TMJ) is the hinge joint that connects the lower jaw to the skull, just in front of each ear. Temporomandibular disorder (TMD) is a collective term for a range of conditions affecting this joint and the surrounding muscles. TMD can cause jaw discomfort, clicking or popping sounds, stiffness, and other related symptoms. For a detailed overview of symptoms and causes, see our TMD / TMJ pain condition page.",
        items: [
          {
            title: "Jaw Joint & Muscles",
            body: "TMD typically involves the joint itself, the surrounding muscles used for chewing, and the nerves supplying this region. Symptoms may come from any of these structures.",
          },
          {
            title: "Multifactorial",
            body: "Symptoms are often linked to a combination of factors — including bruxism, stress, bite imbalances, and previous injury — rather than a single cause.",
          },
          {
            title: "Usually Manageable",
            body: "For many patients, TMD symptoms can often be reduced or managed through conservative measures. Your dentist will discuss realistic, evidence-informed options.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Important",
        body: "This page is general information only and is not medical advice. Similar symptoms can arise from other conditions. If you are experiencing severe pain, sudden inability to open or close your mouth, or associated symptoms such as facial swelling, please seek prompt professional advice.",
      },
      {
        kind: "cards",
        eyebrow: "Recognising the Signs",
        heading: "Common TMJ Symptoms",
        intro:
          "TMD presents differently from person to person. You do not need to have every symptom below for a clinical assessment to be worthwhile.",
        items: [
          {
            title: "Jaw Pain or Tenderness",
            body: "Aching or tenderness in the jaw joint, the muscles around the jaw, or in the temples, particularly on waking or during chewing.",
          },
          {
            title: "Clicking or Popping",
            body: "Audible clicks or pops from the jaw joint during opening, closing, or chewing — see also our page on jaw clicking and popping.",
          },
          {
            title: "Restricted Jaw Movement",
            body: "A feeling that the jaw does not open as fully as usual, or a sense of stiffness in the morning or after periods of stress.",
          },
          {
            title: "Headaches or Earache",
            body: "Some patients experience tension-type headaches, temple pain, or earache that may be associated with TMJ-related muscle tension.",
          },
          {
            title: "Tooth Wear or Sensitivity",
            body: "Worn, flattened, or sensitive teeth can suggest night-time grinding or clenching (bruxism), which can contribute to TMJ symptoms.",
          },
          {
            title: "Facial Muscle Fatigue",
            body: "A feeling of tiredness or aching in the muscles of the face and jaw, especially later in the day or after stress.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Note",
        body: "These symptoms are not exclusive to TMD and can arise from other dental or medical conditions. Professional assessment is important before assuming a cause or starting treatment.",
      },
      {
        kind: "cards",
        eyebrow: "Why TMD Develops",
        heading: "Possible Causes & Contributing Factors",
        intro:
          "TMD is typically multifactorial. Identifying the likely contributing factors helps guide a more tailored management plan.",
        items: [
          {
            title: "Teeth Grinding & Clenching (Bruxism)",
            body: "Grinding or clenching — often during sleep — can place sustained load on the jaw muscles and joint, and is commonly associated with TMD symptoms.",
          },
          {
            title: "Stress & Muscle Tension",
            body: "Emotional or physical stress may increase activity in the jaw muscles, contributing to fatigue, tenderness, and headache-type symptoms.",
          },
          {
            title: "Bite Imbalances",
            body: "Changes in how the teeth meet — from tooth loss, wear, or previous dental work — may sometimes contribute to altered joint loading and muscle strain.",
          },
          {
            title: "Injury or Joint Conditions",
            body: "Previous trauma to the jaw or underlying joint conditions such as arthritis can affect how the joint moves and may contribute to symptoms.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Our Management Approach",
        heading: "How We Approach TMJ Treatment",
        intro:
          "We focus on conservative, evidence-informed management. The aim is to help reduce symptoms and support day-to-day comfort, not to promise a cure.",
        items: [
          {
            title: "Comprehensive Assessment",
            body: "Your dentist will take a detailed history, examine your jaw, muscles, bite, and teeth, and may take photographs or imaging where clinically indicated. This helps identify likely contributing factors.",
          },
          {
            title: "Custom Occlusal Splint (Night Guard)",
            body: "Where clinically appropriate, a custom-made splint worn at night may help protect teeth from grinding forces and may reduce muscle tension for some patients. Suitability depends on assessment.",
          },
          {
            title: "Self-Care & Lifestyle Guidance",
            body: "Advice may cover jaw relaxation techniques, diet modification during flare-ups, posture, and stress-management strategies. These measures can play an important role in symptom control.",
          },
          {
            title: "Addressing Dental Contributing Factors",
            body: "If dental factors such as tooth wear or missing teeth appear to be contributing, your dentist will discuss any relevant restorative options and their potential role within your overall plan.",
          },
          {
            title: "Onward Referral Where Needed",
            body: "For symptoms that are severe, long-standing, or not responding to conservative care, your dentist may recommend onward referral — for example to your GP, a physiotherapist with a jaw interest, or specialist services.",
          },
        ],
      },
      {
        kind: "callout",
        label: "Please note",
        body: "Response to TMD treatment varies between individuals, and no specific outcome can be guaranteed. Your dentist will discuss realistic expectations based on your assessment.",
      },
      {
        kind: "steps",
        eyebrow: "Your Pathway",
        heading: "What to Expect",
        sub: "A typical pathway involves several stages, each designed to build a clear picture of your symptoms and inform a personalised plan.",
        items: [
          {
            title: "Initial Assessment",
            meta: "Step 1",
            body: "Detailed history and clinical examination, including the jaw joint, muscles, bite, and teeth.",
          },
          {
            title: "Discussion & Plan",
            meta: "Step 2",
            body: "Your dentist will explain findings, possible contributing factors, and discuss suitable options in plain language.",
          },
          {
            title: "Management Phase",
            meta: "Step 3",
            body: "May include a custom splint, self-care guidance, dental factors, and review of progress over time.",
          },
          {
            title: "Review & Refine",
            meta: "Step 4",
            body: "Follow-up appointments help monitor response, adjust the plan, or consider onward referral if needed.",
          },
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Pricing",
        heading: "TMJ Treatment Cost London",
        intro:
          "The cost of TMJ-related care depends on the assessment findings and the management approach agreed with your dentist. A personalised written treatment plan is provided before any treatment begins.",
        columns: ["Service", "Standard", "Member"],
        rows: [
          {
            label: "Dental Examination / TMJ Assessment",
            standard: "From £95",
            member: "Included with membership",
          },
          {
            label: "Custom Occlusal Splint (Night Guard)",
            standard: "From £595",
            member: "From £297.50",
          },
          { label: "Follow-Up Review", standard: "From £95", member: "Reduced with membership" },
        ],
        notes: [
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of our treatment fees is available on our pricing page.",
          },
        ],
        footnote:
          "Additional restorative or dental treatment, where indicated, is costed separately and confirmed in writing before treatment begins.",
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "Careful, structured assessment of jaw and bite-related symptoms",
          "Conservative, evidence-informed management approach",
          "Custom-made occlusal splints where clinically appropriate",
          "Onward referral to GP or specialist services when needed",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Visit Our London Practice",
        heading: "TMJ Assessment in South Kensington",
        paragraphs: [
          "Our South Kensington practice welcomes patients from across London and surrounding areas who are seeking assessment and management of TMJ-related symptoms. Our aim is to provide clear, balanced information and a personalised plan based on your clinical assessment.",
          "20 Old Brompton Road, South Kensington, London SW7 3DL",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is TMJ treatment?",
            a: "TMJ treatment refers to the management of symptoms relating to the temporomandibular joint (TMJ) and surrounding jaw muscles — a group of conditions known collectively as temporomandibular disorder (TMD). Treatment aims to help reduce symptoms such as jaw discomfort, muscle tension, and clicking, rather than to cure an underlying medical condition. A clinical assessment is carried out to understand your individual situation before any treatment is recommended.",
          },
          {
            q: "What are the common symptoms of TMJ disorder?",
            a: "Common symptoms can include jaw pain or tenderness, clicking or popping sounds when opening or closing the mouth, stiffness, limited jaw movement, facial muscle ache, and in some cases headaches or earache. Symptoms vary between individuals, and similar symptoms can sometimes be caused by other conditions, which is why professional assessment is important.",
          },
          {
            q: "What causes TMJ problems?",
            a: "Several factors may contribute to TMJ symptoms, including teeth grinding or clenching (bruxism), stress-related muscle tension, jaw injury, bite imbalances, and joint-related conditions such as arthritis. In many cases more than one factor is involved, and the relative contribution varies between patients.",
          },
          {
            q: "Can TMJ problems be cured?",
            a: "TMD is a long-term condition that cannot always be cured in the traditional sense. However, for many patients, symptoms can often be managed or reduced through a combination of conservative measures, such as splint therapy, self-care advice, and addressing contributing factors. Your dentist will discuss realistic expectations based on your individual assessment.",
          },
          {
            q: "Will I need a night guard or splint?",
            a: "A custom-made occlusal splint (night guard) is one of the most commonly used management options where clinically appropriate, particularly when teeth grinding or clenching appears to be contributing to symptoms. It is not suitable or necessary in every case. Your dentist will advise whether a splint may be helpful for you.",
          },
          {
            q: "Does TMJ treatment involve surgery?",
            a: "At our practice, management focuses on conservative, non-surgical approaches such as assessment, splint therapy, bite-related guidance, and referral where appropriate. Surgical intervention for TMD is uncommon and is typically considered only in specific cases by specialist services when conservative options have not provided adequate relief.",
          },
          {
            q: "How long does TMJ treatment take to help?",
            a: "Response to treatment varies between individuals and depends on the nature and duration of the symptoms, contributing factors, and the approach agreed with your dentist. Some people may notice changes within a few weeks, while others may need a longer period of management and review. Your dentist will discuss expected timelines and follow-up care.",
          },
          {
            q: "Can my GP or physiotherapist also help?",
            a: "Yes. TMD can benefit from a joined-up approach. Where appropriate, your dentist may recommend discussing symptoms with your GP, or seeking input from a physiotherapist with an interest in jaw disorders. If symptoms are severe, unusual, or fail to respond to initial management, onward referral to specialist services may be suggested.",
          },
        ],
      },
    ],
  },

  "hygiene-london": {
    h1: "Dental Hygiene London",
    kicker: "First-Time Patient: £49 Introductory Offer",
    intro:
      "Professional teeth cleaning is an important part of maintaining good oral health. A hygiene appointment helps to remove plaque and tartar build-up, supports gum health, and contributes to fresher breath. At our London practice, all hygiene treatments are carried out by registered dental professionals.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "First-Time Patient £49",
      "Hygiene Appointment From £89",
      "Member (50% off) From £44.50",
      "Membership £20/month",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805807/dental-hygiene_nmtblc.jpg",
      alt: "Professional dental hygiene appointment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "steps",
        eyebrow: "Understanding Dental Hygiene",
        heading: "What Is Dental Hygiene?",
        sub: "Dental hygiene refers to the professional cleaning and care of your teeth and gums, carried out by a qualified dental hygienist. The primary aim is to remove plaque and tartar — hardened deposits that build up on teeth over time and cannot be fully removed by brushing and flossing alone. A hygiene appointment also provides an opportunity for your hygienist to assess the health of your gums, identify any areas that may need additional attention, and offer tailored advice on how to maintain your oral hygiene routine at home. Regular professional cleaning supports overall oral health and helps to keep your teeth and gums in good condition.",
        items: [
          {
            title: "Professional Cleaning",
            meta: "1",
            body: "Thorough removal of plaque and tartar from all tooth surfaces, including areas that are difficult to reach with a toothbrush.",
          },
          {
            title: "Plaque and Tartar Removal",
            meta: "2",
            body: "Tartar is hardened plaque that forms on teeth over time. Once it has formed, it can only be removed by a dental professional using specialist instruments.",
          },
          {
            title: "Supports Oral Health",
            meta: "3",
            body: "Regular hygiene appointments help to support the long-term health of your teeth and gums, complementing your daily oral care routine.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Preventative Care",
        heading: "Why Regular Hygiene Appointments Are Important",
        intro:
          "Even with a thorough home care routine, plaque and tartar can gradually accumulate in areas that are difficult to clean. Regular hygiene appointments help to manage this build-up and support the ongoing health of your teeth and gums.",
        items: [
          {
            title: "Preventing Build-Up",
            body: "Professional cleaning removes plaque and tartar deposits before they have the chance to contribute to more significant oral health concerns.",
          },
          {
            title: "Supporting Gum Health",
            body: "Tartar build-up along and below the gum line can contribute to gum inflammation. Regular cleaning helps to support healthier gums over time.",
          },
          {
            title: "Long-Term Maintenance",
            body: "Consistent hygiene appointments form part of a long-term approach to oral health, helping you maintain the condition of your teeth and gums over the years.",
          },
        ],
        footer:
          "If signs of gum inflammation are identified during your appointment, your hygienist may recommend further assessment. You can learn more about how we support patients with gum disease on our dedicated page.",
      },
      {
        kind: "steps",
        eyebrow: "Your Appointment",
        heading: "What Happens During a Hygiene Appointment",
        sub: "A hygiene appointment typically involves several steps, each designed to support the cleanliness and health of your teeth and gums.",
        items: [
          {
            title: "Assessment of Teeth and Gums",
            meta: "1",
            body: "Your hygienist will begin by assessing the current condition of your teeth and gums, checking for any signs of plaque build-up, tartar, or gum inflammation. This helps to tailor the appointment to your individual needs.",
          },
          {
            title: "Removal of Plaque and Tartar",
            meta: "2",
            body: "Using specialist instruments, your hygienist will carefully remove plaque and tartar deposits from all tooth surfaces, including areas above and below the gum line that are difficult to reach with a toothbrush.",
          },
          {
            title: "Polishing of Teeth",
            meta: "3",
            body: "After the cleaning, your teeth are polished to remove surface staining and leave them feeling smooth and clean. Polishing also makes it more difficult for plaque to adhere to tooth surfaces in the short term.",
          },
          {
            title: "Oral Hygiene Advice",
            meta: "4",
            body: "Your hygienist will provide personalised guidance on how to care for your teeth and gums at home, including brushing technique, interdental cleaning, and any areas that may benefit from additional attention. We also recommend attending a routine dental examination alongside your hygiene appointments.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Frequency of Visits",
        heading: "How Often Should You See a Hygienist?",
        intro:
          "The recommended frequency of hygiene appointments varies between individuals. There is no single schedule that suits everyone — the most appropriate interval depends on your current oral health, gum condition, and individual risk factors.",
        items: [
          {
            title: "Varies Between Individuals",
            body: "Some patients benefit from more frequent visits, while others may need appointments less often. Your hygienist will recommend an interval based on your needs.",
          },
          {
            title: "Based on Oral Health Needs",
            body: "Factors such as gum health, the rate of tartar build-up, and your home care routine all influence how frequently professional cleaning is recommended.",
          },
          {
            title: "Personalised Recommendation",
            body: "Your hygienist will provide a personalised recommendation at each visit, adjusting the recall interval as your oral health evolves over time.",
          },
        ],
        footer:
          "The appropriate interval between hygiene appointments depends on individual clinical factors. Your hygienist or dentist will advise on how often you should attend based on your oral health assessment.",
      },
      {
        kind: "cards",
        eyebrow: "Supporting Your Oral Health",
        heading: "Benefits of Dental Hygiene",
        intro:
          "Regular dental hygiene appointments offer a number of benefits that contribute to the ongoing health and comfort of your teeth and gums. While outcomes depend on individual circumstances, professional cleaning can play a valuable role in your overall oral care.",
        items: [
          {
            title: "Supports Gum Health",
            body: "Removing plaque and tartar from along the gum line helps to reduce the factors that can contribute to gum inflammation and discomfort.",
          },
          {
            title: "Helps Maintain Clean Teeth",
            body: "Professional cleaning reaches areas that are difficult to access with a toothbrush, helping to keep your teeth cleaner between appointments.",
          },
          {
            title: "Contributes to Fresh Breath",
            body: "Bacteria in plaque and tartar can contribute to bad breath. Removing these deposits can help to improve the freshness of your breath.",
          },
          {
            title: "Encourages Preventative Care",
            body: "Regular hygiene visits reinforce the importance of preventative care and provide an opportunity to receive professional guidance on your home routine.",
          },
        ],
        footer:
          "The benefits of dental hygiene treatment depend on individual oral health and circumstances. Your hygienist will discuss what you can expect based on your specific needs.",
      },
      {
        kind: "pricing",
        eyebrow: "Treatment Fees",
        heading: "Dental Hygiene Cost London",
        intro:
          "The cost of a dental hygiene appointment may vary depending on the type and extent of cleaning required. If additional care — such as more intensive cleaning or follow-up appointments — is recommended, this will be discussed with you beforehand.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Hygiene Appointment", standard: "From £89", member: "From £44.50" },
          { label: "Hygiene with Airflow", standard: "From £142", member: "From £71" },
          { label: "Periodontal Treatment", standard: "From £880", member: "From £440" },
        ],
        notes: [
          {
            title: "Personalised planning",
            body: "Your hygienist will explain the recommended treatment and associated costs based on your individual needs.",
          },
          {
            title: "No surprises",
            body: "Where applicable, a written treatment plan with costs is provided before treatment begins.",
          },
          {
            title: "Membership Plan",
            body: "Our membership plan (£20/month) includes hygiene appointments and offers a reduction on treatment fees.",
          },
        ],
        footnote:
          "Final costs depend on individual treatment needs. All fees are confirmed before treatment begins.",
      },
      {
        kind: "cards",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist for Dental Hygiene",
        intro:
          "At Smile Dentist, we believe that preventative care is the foundation of good oral health. Our hygiene team is committed to providing thorough, patient-focused care in a calm and comfortable environment.",
        items: [
          {
            title: "London Location",
            body: "Our practice is conveniently located in London, accessible for patients across the city and surrounding areas.",
          },
          {
            title: "Focus on Preventative Dentistry",
            body: "We take a preventative approach, with regular hygiene appointments forming a key part of how we help patients maintain their oral health over time.",
          },
          {
            title: "Calm and Patient-Focused",
            body: "We understand that dental visits can feel daunting. Our hygienists take a gentle, reassuring approach and are experienced in working with nervous patients.",
          },
          {
            title: "Personalised Hygiene Advice",
            body: "Every patient receives tailored guidance on how to care for their teeth and gums at home, including brushing technique, interdental cleaning, and product recommendations.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving Patients Across London",
        heading: "Dental Hygiene Near You",
        paragraphs: [
          "We welcome patients from across London and the surrounding areas who are looking for a professional and thorough hygiene appointment. Whether you are searching for dental hygiene near you or are looking for a new hygienist, our team is here to help.",
          "Our practice is well connected by public transport and offers a calm, welcoming environment. All hygiene treatments are carried out by GDC-registered dental hygienists at our CQC-registered practice.",
        ],
      },
      {
        kind: "faq",
        eyebrow: "Common Questions",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What does a dental hygienist do?",
            a: "A dental hygienist carries out professional cleaning of your teeth and gums, removing plaque and tartar that cannot be removed by brushing alone. They also provide personalised advice on how to care for your teeth and gums at home. Suitability for specific treatments depends on individual assessment.",
          },
          {
            q: "Is teeth cleaning painful?",
            a: "Most patients find professional teeth cleaning comfortable. Some sensitivity may be experienced, particularly if there is significant tartar build-up or gum inflammation. If you have any concerns, your hygienist can adjust their approach to help keep you comfortable throughout.",
          },
          {
            q: "How long does a hygiene appointment take?",
            a: "The length of a hygiene appointment depends on individual needs and the amount of cleaning required. A typical appointment may last around 30 to 45 minutes, though this can vary. Your hygienist will ensure adequate time is allocated for a thorough clean.",
          },
          {
            q: "How often should I have my teeth cleaned?",
            a: "The recommended frequency of hygiene appointments varies between individuals. Your hygienist or dentist will advise on an appropriate interval based on your oral health needs. Some patients may benefit from more frequent visits, while others may be seen less often.",
          },
          {
            q: "Does dental hygiene help with gum disease?",
            a: "Professional cleaning plays an important role in managing gum health by removing plaque and tartar that contribute to gum inflammation. Regular hygiene appointments, combined with good home care, can support the management of gum disease. Individual outcomes depend on clinical circumstances.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "periodontal-london": {
    h1: "Periodontal Treatment London",
    intro:
      "Periodontal treatment focuses on managing gum disease and supporting long-term gum health. At our London practice, we provide thorough assessment and personalised care to help protect your teeth and the structures that support them.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Personalised treatment plan with costs provided",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805739/periodontal-treatment_xigiko.jpg",
      alt: "Periodontal treatment at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "Gum Health Assessment",
        body: "A comprehensive assessment of your gum health is the first step. Your dentist will evaluate the condition of your gums, discuss any concerns, and outline suitable treatment options.",
      },
      {
        kind: "cards",
        eyebrow: "Understanding Gum Disease",
        heading: "What Is Periodontal Disease?",
        intro:
          "Periodontal disease is an infection that affects the gums and the structures that support the teeth. It begins with inflammation of the gums — a stage known as gingivitis — and, if not addressed, can progress to periodontitis, where the infection extends below the gum line.",
        items: [
          {
            title: "Gingivitis",
            body: "The early stage of gum disease, characterised by inflammation of the gums. At this stage, the condition is often manageable with professional care and improved oral hygiene.",
          },
          {
            title: "Periodontitis",
            body: "A more advanced stage where infection spreads below the gum line and can begin to affect the bone and structures that support the teeth. Treatment aims to stabilise the condition.",
          },
          {
            title: "Impact on Oral Health",
            body: "Without appropriate care, periodontal disease may lead to increased tooth mobility, changes in bite, and potential tooth loss. Early assessment can help manage the condition more effectively.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Recognising the Signs",
        heading: "Signs of Gum Disease",
        sub: "Gum disease can develop gradually and is not always accompanied by pain. Being aware of the common signs can help you seek assessment at an early stage.",
        items: [
          {
            title: "Bleeding Gums",
            meta: "1",
            body: "Gums that bleed during brushing or flossing may indicate gum inflammation. This is one of the most common early signs of gum disease.",
          },
          {
            title: "Red or Swollen Gums",
            meta: "2",
            body: "Healthy gums are typically firm and pale pink. Gums that appear red, swollen, or tender may be showing signs of inflammation.",
          },
          {
            title: "Persistent Bad Breath",
            meta: "3",
            body: "Ongoing bad breath that does not improve with regular brushing may be related to bacteria accumulating below the gum line.",
          },
          {
            title: "Gum Recession",
            meta: "4",
            body: "Teeth that appear longer than before may indicate the gum tissue is receding, exposing more of the tooth surface.",
          },
        ],
        note: {
          title: "Important",
          body: "Symptoms can vary between individuals and a clinical assessment is needed for diagnosis. Regular visits to a dental hygienist can help identify early signs of gum disease.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Protecting Your Oral Health",
        heading: "Why Periodontal Treatment Is Important",
        intro:
          "Addressing gum disease at any stage can help protect your teeth and the structures that support them. Periodontal treatment plays an important role in managing the condition and supporting long-term oral health.",
        items: [
          {
            title: "Managing Progression",
            body: "Treatment aims to help manage gum disease and reduce the risk of further progression, supporting the stability of the teeth and surrounding structures.",
          },
          {
            title: "Protecting Your Teeth",
            body: "By addressing infection and inflammation, periodontal treatment helps protect the teeth and the bone that holds them in place, supporting long-term dental health.",
          },
          {
            title: "Long-Term Oral Health",
            body: "Ongoing periodontal care, combined with regular dental examinations, supports the long-term health of your gums and teeth.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Treatment Approaches",
        heading: "Types of Periodontal Treatment",
        sub: "The type of treatment recommended will depend on the stage and severity of your gum disease. Your dentist will explain the most suitable approach following a thorough assessment.",
        items: [
          {
            title: "Professional Cleaning",
            meta: "1",
            body: "Scaling and root planing involves the careful removal of bacteria and deposits from the tooth surfaces and below the gum line. This deep cleaning of teeth and gums is a key part of periodontal care.",
          },
          {
            title: "Ongoing Maintenance",
            meta: "2",
            body: "Following initial treatment, regular maintenance appointments help monitor gum health and ensure the condition remains stable. The frequency of visits is tailored to each patient.",
          },
          {
            title: "Personalised Care",
            meta: "3",
            body: "Every patient's gum health is different. Your treatment plan is developed around your individual needs, taking into account the severity of the condition and your overall oral health.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "What to Expect",
        heading: "The Periodontal Treatment Process",
        sub: "Periodontal treatment follows a structured approach, beginning with a thorough assessment and progressing through treatment and ongoing care.",
        items: [
          {
            title: "Assessment of Gum Health",
            meta: "Step 1",
            body: "Your dentist will carry out a detailed assessment of your gum health, measuring pocket depths and evaluating the condition of the supporting structures.",
          },
          {
            title: "Treatment Planning",
            meta: "Step 2",
            body: "Based on the findings, a personalised treatment plan is developed outlining the recommended approach and expected number of appointments.",
          },
          {
            title: "Deep Cleaning",
            meta: "Step 3",
            body: "Professional cleaning of the teeth and gums, including scaling and root planing below the gum line, to remove bacteria and deposits.",
          },
          {
            title: "Follow-Up & Maintenance",
            meta: "Step 4",
            body: "Review appointments are arranged to assess healing and monitor progress. Ongoing maintenance visits may be recommended to help keep the condition stable.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "After Treatment",
        heading: "Recovery and Maintenance",
        intro:
          "Understanding what to expect after periodontal treatment can help you support your recovery and maintain the health of your gums in the longer term.",
        items: [
          {
            title: "Mild Sensitivity",
            body: "Some patients may experience mild sensitivity or tenderness after treatment. This is a normal response and typically settles within a few days.",
          },
          {
            title: "Ongoing Care",
            body: "Maintaining good oral hygiene at home is an important part of supporting your gum health after treatment. Your dentist will provide guidance tailored to your needs.",
          },
          {
            title: "Regular Hygiene Visits",
            body: "Regular professional cleaning appointments may be recommended following treatment. The frequency of visits will depend on your individual gum health and response to treatment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Periodontal Treatment Cost London",
        intro:
          "The cost of periodontal treatment varies depending on the severity of the condition, the type of treatment required, and the number of appointments needed. A personalised treatment plan with full costs is provided following your assessment.",
        sub: "What Affects the Cost?",
        items: [
          {
            title: "Severity of Gum Disease",
            body: "The extent and severity of the condition will influence the type and duration of treatment needed, which affects the overall cost.",
          },
          {
            title: "Number of Visits",
            body: "A course of periodontal treatment may involve multiple appointments. The number of visits required depends on your individual treatment plan.",
          },
          {
            title: "Personalised Planning",
            body: "A written treatment plan with itemised costs is provided after your assessment, so you have full clarity before treatment begins.",
          },
          {
            title: "Membership Benefits",
            body: "Our membership plan offers reduced treatment fees for patients who wish to benefit from ongoing savings across all treatments.",
          },
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice with a focus on gum health and preventative care",
          "Supportive and personalised approach to periodontal treatment",
          "Ongoing maintenance guidance to support long-term gum health",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Periodontal Treatment Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who are seeking support for gum health concerns. Whether you are looking for gum disease treatment near you or exploring periodontal care options, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is periodontal treatment?",
            a: "Periodontal treatment focuses on managing infection and inflammation of the gums and the structures that support the teeth. It typically involves professional cleaning below the gum line, assessment of gum health, and ongoing maintenance to help stabilise the condition.",
          },
          {
            q: "Can gum disease be reversed?",
            a: "Gingivitis, the early stage of gum disease, can often be resolved with professional cleaning and improved oral hygiene. Periodontitis, the more advanced stage, cannot be fully reversed but can be managed and stabilised with appropriate treatment and ongoing care.",
          },
          {
            q: "Is periodontal treatment painful?",
            a: "Local anaesthetic is used to ensure comfort during treatment. Some patients may experience mild sensitivity or tenderness afterwards, which typically resolves within a few days. Your dentist will discuss what to expect at each stage.",
          },
          {
            q: "How long does treatment take?",
            a: "The length of treatment depends on the severity and extent of gum disease. A course of treatment may involve multiple appointments over several weeks. Your dentist will provide a personalised treatment plan outlining the expected timeline.",
          },
          {
            q: "What happens if gum disease is left untreated?",
            a: "Without treatment, gum disease may progress and affect the supporting structures of the teeth. Over time, this can lead to increased tooth mobility and potential tooth loss. Early assessment and treatment can help manage the condition more effectively.",
          },
        ],
      },
      smileGallery(),
    ],
  },

  "childrens-dentistry-london": {
    h1: "Children's Dentistry in London",
    kicker: "Gentle Care for Growing Smiles",
    intro:
      "We believe a visit to the dentist should be a positive experience for children. Our team uses a patient, child-friendly approach to build confidence and establish healthy habits that last a lifetime.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Standard Exam From £95.00",
      "Member (50% off) From £47.50",
      "New Patient (Under 16) From £30.00",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805801/children-dentistry_uc22fn.jpg",
      alt: "Children's Dentistry at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "New Patient (Under 16) From £30.00",
        body: "First visit only. Includes full examination and oral health advice.",
      },
      {
        kind: "cards",
        eyebrow: "Building Confidence for Life",
        heading: "Our Child-Friendly Approach",
        intro:
          "Dental anxiety often starts in childhood. At Smile Dentist, our goal is to break that cycle by introducing your child to the dental environment gradually, at their own pace.",
        items: [
          {
            title: "Tell-Show-Do",
            body: "We explain each step in child-friendly language, show the tools, and then proceed gently. No surprises.",
          },
          {
            title: "Positive Reinforcement",
            body: "Every patient receives praise and encouragement to build confidence and create positive associations with dental visits.",
          },
          {
            title: "No Forced Treatment",
            body: "We never force treatment. If a child is not ready, we take a step back and try again at the next visit.",
          },
        ],
      },
      {
        kind: "cards",
        heading: "Preventive Treatments",
        intro: "Protecting your child's teeth before problems develop.",
        items: [
          {
            title: "Fissure Sealants",
            body: "A thin, invisible protective coating painted over deep molar grooves to seal them against decay. Quick, painless, and requires no drilling.",
            bullets: ["Standard From £65.00", "Member From £32.50"],
          },
          {
            title: "Fluoride Varnish",
            body: "A high-concentration fluoride varnish applied to tooth surfaces to strengthen enamel and help protect against sugar and acid attacks.",
            bullets: ["Standard From £40.00", "Member From £20.00"],
          },
          {
            title: "Orthodontic Screening",
            body: "We monitor jaw growth and tooth development. Early detection of crowding or bite issues allows for timely intervention.",
            bullets: ["Included in Examination"],
          },
        ],
      },
      {
        kind: "cards",
        heading: "When Should My Child First Visit?",
        items: [
          {
            title: "\u201CFirst Tooth, First Visit\u201D",
            body: "The British Society of Paediatric Dentistry (BSPD) recommends seeing a dentist as soon as the first milk tooth appears (usually around 6 months), or by their first birthday.",
          },
          {
            title: "Why so early?",
            body: "It allows us to check for early signs of decay (such as \u201CBaby Bottle Decay\u201D) and helps your child get used to the sights, sounds, and smells of the dental clinic before they ever need treatment.",
          },
        ],
      },
      {
        kind: "doAvoid",
        heading: "Oral Health Tips for Parents",
        sub: "Simple steps to protect your child's smile at home.",
        dos: [
          "Brush twice daily with a fluoride toothpaste appropriate for their age",
          "Supervise brushing until at least age 7",
          "Encourage drinking water and milk rather than sugary drinks",
          "Book regular dental check-ups every 6 months",
          "Use a mouthguard for contact sports",
        ],
        avoids: [
          "Putting babies to bed with bottles of milk or juice (can cause decay)",
          "Frequent snacking on sugary foods between meals",
          "Sharing spoons or cutlery (cavity-causing bacteria can be transferred)",
          "Using adult toothpaste for children under 3 (too much fluoride)",
          "Rinsing with water immediately after brushing (let the fluoride work)",
        ],
      },
      {
        kind: "pricing",
        eyebrow: "Transparent Pricing",
        heading: "Children's Dental Fees",
        intro:
          "We believe quality dental care should be accessible for families. Members receive 50% off all treatments.",
        columns: ["Treatment", "Standard", "Member"],
        rows: [
          { label: "Child Examination (Under 16)", standard: "From £95.00", member: "From £47.50" },
          { label: "New Patient First Visit (Under 16)", standard: "From £30.00", member: "" },
          { label: "Fissure Sealant (per tooth)", standard: "From £65.00", member: "From £32.50" },
          { label: "Fluoride Treatment", standard: "From £40.00", member: "From £20.00" },
          { label: "Emergency Appointment", standard: "From £95.00", member: "From £47.50" },
        ],
        notes: [
          {
            title: "Family Membership",
            body: "Adult membership: £20/month. Add a child: just £10/month. Members receive 50% off all treatment fees, plus two check-ups and two hygiene visits per year.",
          },
        ],
        footnote:
          "A written treatment plan with exact costs is provided before any treatment begins.",
      },
      {
        kind: "callout",
        label: "Dr. Yasha Y Shirazi — GDC: 195843",
        body: "\u201COur goal is for children to feel comfortable and safe at the dentist. By taking our time and making visits as positive as possible, we aim to help them develop good oral health habits that last a lifetime.\u201D This reflects the clinical team's approach. Individual experiences may vary.",
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "My child is terrified of the dentist. Can you help?",
            a: "Yes. We allow extra time for nervous children and use a gentle, step-by-step approach. For very young or anxious children, we can perform the check-up while they sit on your lap (a 'Knee-to-Knee' exam). We never force treatment — building trust comes first.",
          },
          {
            q: "When should my child first visit the dentist?",
            a: "The British Society of Paediatric Dentistry (BSPD) recommends seeing a dentist as soon as the first milk tooth appears (usually around 6 months), or by their first birthday. Early visits help your child become familiar with the dental environment before they ever need treatment.",
          },
          {
            q: "Why do baby teeth matter if they fall out?",
            a: "Baby teeth act as 'pathfinders' for adult teeth. If they are lost too early due to decay, the adult teeth can come in crooked. Toothache also affects a child's eating, sleep, and school performance. Keeping baby teeth healthy is essential for overall development.",
          },
          {
            q: "Do you treat teenagers?",
            a: "Yes. We offer clear aligners and cosmetic bonding for older children and teenagers who may be self-conscious about their smile. We discuss all options with both the patient and parent.",
          },
          {
            q: "What are fissure sealants?",
            a: "Fissure sealants are thin, invisible protective coatings painted over the deep grooves of molar teeth. They seal off areas where bacteria and food can become trapped, helping to prevent decay. The procedure is quick, painless, and requires no drilling.",
          },
          {
            q: "Is fluoride varnish safe for children?",
            a: "Yes. Fluoride varnish is widely recommended by dental professionals and NHS guidelines for children. It is applied in a very thin layer to the surface of teeth and helps strengthen enamel, making it more resistant to decay from sugar and acid.",
          },
          {
            q: "How often should my child visit the dentist?",
            a: "We generally recommend check-ups every 6 months for children, though some children may benefit from more frequent visits depending on their risk of decay. Regular visits help us monitor development and catch any issues early.",
          },
          {
            q: "How much does a children's dental check-up cost?",
            a: "A children's examination is £95 (£47.50 for members). New patients under 16 can book a first visit from £30, which includes a full examination and oral health advice. A written treatment plan is provided before any additional treatment.",
          },
        ],
      },      smileGallery(),
      {
        kind: "prose",
        heading: "Children's Dentist London — Gentle Family Care",
        paragraphs: [
          "At Smile Dentist in London, with clinics in South Kensington and the City of London, we provide gentle, child-friendly dental care for children of all ages. From first visits and preventive treatments like fissure sealants and fluoride varnish, through to extractions and orthodontic screening, our GDC-registered team is experienced in caring for young patients.",
          "We welcome families from across Kensington, Chelsea, Fulham, Knightsbridge, and Central London. Our goal is to make dental visits a positive experience so that children grow up with healthy teeth and a confident attitude towards dental care.",
          "All treatments are provided by General Dental Council (GDC)-registered dentists at our Care Quality Commission (CQC)-registered practice.",
        ],
      },
    ],
  },

  "emergency-dental-london": {
    h1: "Emergency Dentist London",
    intro:
      "If you are experiencing dental pain, injury, or another urgent concern, our London practice is here to help. We offer prompt assessment and care in a calm, supportive environment — so you can get the attention you need when it matters most.",
    badges: [
      "4.9/5 from Google Reviews",
      "South Kensington • Next to South Ken Station",
      "City of London • Ave Maria Lane, EC4",
      "Treatment costs explained before proceeding",
    ],
    hero: {
      src: "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765805792/emergency-dental_selpql.jpg",
      alt: "Emergency dentist at Smile Dentist London",
    },
    blocks: [
      {
        kind: "callout",
        label: "Urgent Care",
        body: "Same-day appointments may be available for urgent dental concerns. Contact us so we can assess your situation and arrange appropriate care.",
      },
      {
        kind: "cards",
        eyebrow: "Understanding Urgent Care",
        heading: "What Is a Dental Emergency?",
        intro:
          "A dental emergency is any situation involving significant dental pain, infection, trauma, or damage that requires prompt professional attention. This may include sudden toothache, swelling, a broken or knocked-out tooth, or other concerns that affect your comfort or oral health.",
        items: [
          {
            title: "Pain-Related Concerns",
            body: "Severe or persistent toothache, throbbing pain, or sensitivity that does not improve with over-the-counter relief may indicate an underlying issue that requires clinical assessment.",
          },
          {
            title: "Trauma or Injury",
            body: "Accidents, falls, or impacts that result in a broken, chipped, or knocked-out tooth should be assessed promptly. Quick action can sometimes make a significant difference to the outcome.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Common Concerns",
        heading: "Common Dental Emergencies",
        items: [
          {
            title: "Severe Toothache",
            meta: "1",
            body: "Persistent or intense tooth pain can have a number of causes, including decay, infection, or damage to the tooth. A clinical assessment helps identify the source and determine the appropriate treatment. In some cases, root canal treatment may be recommended.",
          },
          {
            title: "Broken or Chipped Tooth",
            meta: "2",
            body: "A tooth that has been broken or chipped through trauma or biting can often be treated to restore its shape and function. Saving any tooth fragments and contacting us promptly is advisable.",
          },
          {
            title: "Knocked-Out Tooth",
            meta: "3",
            body: "If a permanent tooth has been knocked out, handle it by the crown, keep it moist, and contact us as soon as possible. Prompt attention may improve the chance of saving the tooth.",
          },
          {
            title: "Swelling or Infection",
            meta: "4",
            body: "Facial swelling, a dental abscess, or signs of infection should be assessed promptly. Your dentist will examine the area and discuss the most appropriate course of action.",
          },
          {
            title: "Lost Filling or Crown",
            meta: "5",
            body: "A lost filling or crown can leave the tooth exposed and sensitive. Contact us to arrange an assessment — the tooth may be protected with a temporary or permanent restoration.",
          },
        ],
        note: {
          title: "Not sure if it's urgent?",
          body: "Call us on 020 7183 2362 and our team will advise you.",
        },
      },
      {
        kind: "cards",
        eyebrow: "Knowing When to Act",
        heading: "When Should You See an Emergency Dentist?",
        intro:
          "If you are unsure whether your situation requires urgent attention, the following indicators may help. A clinical assessment will determine the appropriate level of care.",
        items: [
          {
            title: "Persistent or Worsening Pain",
            body: "Dental pain that does not settle or continues to worsen may indicate an issue that benefits from prompt assessment rather than waiting for a routine appointment.",
          },
          {
            title: "Signs of Infection",
            body: "Swelling, an unpleasant taste, or a raised temperature alongside dental pain may suggest an infection. Contacting us allows your dentist to assess and advise on the most suitable next steps.",
          },
          {
            title: "Dental Trauma",
            body: "If a tooth has been knocked out, loosened, or broken due to an impact or fall, seeking prompt dental attention is important. Quick assessment can sometimes improve the outcome.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Practical Guidance",
        heading: "What to Do in a Dental Emergency",
        intro:
          "While every situation is different, the following general guidance may help while you arrange an appointment with us.",
        items: [
          {
            title: "Contact Us Promptly",
            body: "Call 020 7183 2362 or book online so we can understand your concern and arrange an appropriate appointment as soon as possible.",
          },
          {
            title: "Manage Discomfort",
            body: "Over-the-counter pain relief, taken as directed, may help manage discomfort while you wait for your appointment. A cold compress can help with swelling.",
          },
          {
            title: "Preserve Any Fragments",
            body: "If a tooth has broken, save any pieces. For a knocked-out tooth, keep it moist — ideally in milk — and bring it with you to the appointment.",
          },
          {
            title: "Avoid Self-Treatment",
            body: "Avoid applying medications directly to the gums or attempting to repair dental work at home. Professional assessment ensures the most appropriate care for your situation.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Treatments Available",
        heading: "Emergency Dental Treatments",
        intro:
          "The treatment recommended will depend on the nature and severity of your dental concern. Your dentist will explain all options and costs before any treatment begins.",
        items: [
          {
            title: "Pain Management",
            body: "The initial priority is to address your discomfort. This may involve assessment, local anaesthetic, or other appropriate measures to help you feel more comfortable.",
          },
          {
            title: "Temporary or Definitive Treatment",
            body: "Depending on the issue, treatment may involve a temporary dressing, a filling, or a more definitive restoration. In some cases, tooth extraction may be discussed as part of the treatment plan.",
          },
          {
            title: "Stabilising Dental Issues",
            body: "Where immediate full treatment is not possible, your dentist may stabilise the issue and arrange follow-up care to complete the treatment at a subsequent appointment.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Availability",
        heading: "Same-Day Appointments",
        intro:
          "We understand that dental emergencies do not always happen at convenient times. Same-day appointments may be available depending on your circumstances and current clinic availability.",
        items: [
          {
            title: "Priority for Urgent Cases",
            body: "We prioritise patients with urgent dental concerns and aim to see you as quickly as possible. Contacting us early in the day can help with same-day availability.",
          },
          {
            title: "Call to Arrange",
            body: "Please call 020 7183 2362 or book online so our team can understand your concern and arrange the most appropriate appointment time for you.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Pricing",
        heading: "Emergency Dentist Cost London",
        intro:
          "The cost of emergency dental treatment varies depending on the nature and complexity of the issue. Your dentist will carry out an assessment and explain all costs before any treatment begins.",
        sub: "What Determines the Cost?",
        items: [
          {
            title: "Nature of the Concern",
            body: "The type of dental emergency — whether it involves pain relief, infection management, or trauma repair — will influence the treatment and associated cost.",
          },
          {
            title: "Treatment Required",
            body: "Some emergencies can be resolved in a single visit, while others may require follow-up treatment. Costs are explained at each stage of your care.",
          },
          {
            title: "Assessment First",
            body: "A thorough assessment is carried out to understand the issue before any treatment costs are discussed. You will know what to expect before proceeding.",
          },
          {
            title: "Membership Benefits",
            body: "Members of our dental plan receive reduced fees across all treatments, including emergency care. Membership is available for £20 per month.",
          },
          {
            title: "View Our Full Fee Guide",
            body: "A transparent breakdown of treatment fees is available on our pricing page.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Our Approach",
        heading: "Why Choose Smile Dentist",
        sub: "Dr. Yasha Y Shirazi — GDC: 195843",
        items: [
          "London practice offering calm, responsive urgent dental care",
          "Focus on patient comfort and reassurance throughout your visit",
          "Full treatment plan with costs explained before any treatment begins",
          "GDC-registered dentists at a CQC-registered practice",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Serving London",
        heading: "Emergency Dentist Near You",
        paragraphs: [
          "Our London practice welcomes patients from across the city and surrounding areas who need urgent dental care. Whether you are searching for an emergency dentist near you or same-day dental care in London, we are here to help.",
          "Conveniently located in London with excellent transport links",
        ],
      },
      {
        kind: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is considered a dental emergency?",
            a: "A dental emergency includes severe toothache, dental infection or swelling, a broken or knocked-out tooth, or a lost filling or crown. If you are in significant discomfort or have experienced dental trauma, we recommend contacting us promptly for an assessment.",
          },
          {
            q: "Can I see a dentist the same day?",
            a: "Same-day appointments may be available depending on the nature of your concern and current availability. We prioritise urgent cases and aim to see patients as quickly as possible. Please contact us so we can assess your situation and arrange an appointment.",
          },
          {
            q: "What should I do if I have severe tooth pain?",
            a: "If you are experiencing severe tooth pain, contact us as soon as possible to arrange an assessment. Over-the-counter pain relief taken as directed may help manage discomfort in the meantime. Avoid very hot or cold foods on the affected area until you are seen.",
          },
          {
            q: "How quickly should I seek treatment?",
            a: "This depends on the nature of the issue. Dental infections, knocked-out teeth, and uncontrolled bleeding should be assessed promptly. For other concerns, contacting us at your earliest convenience allows us to advise on the appropriate urgency of your appointment.",
          },
          {
            q: "Can a knocked-out tooth be saved?",
            a: "In some cases, a knocked-out permanent tooth can be replanted if treated quickly. Handle the tooth by the crown, keep it moist in milk if possible, and contact us immediately. The outcome depends on factors including time elapsed and the condition of the tooth.",
          },
        ],
      },
      smileGallery(),
    ],
  },
};
