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
      items: { title: string; meta?: string; body: string }[];
    }
  | {
      kind: "steps";
      eyebrow?: string;
      heading?: string;
      sub?: string;
      items: { title: string; meta?: string; body: string }[];
      note?: { title: string; body: string };
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
        concern: string;
        treatment: string;
        outcome: string;
        before?: ContentImage;
        after?: ContentImage;
      }[];
      disclaimer?: string;
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
  | { kind: "faq"; heading?: string; items: { q: string; a: string }[] }
  | { kind: "callout"; label: string; body: string };

export type TreatmentContent = {
  h1: string;
  kicker: string;
  intro: string;
  badges?: string[];
  hero?: ContentImage;
  blocks: ContentBlock[];
};

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
};
