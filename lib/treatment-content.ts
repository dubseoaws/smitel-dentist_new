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
      items: { title: string; meta?: string; body: string; bullets?: string[] }[];
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
  | { kind: "faq"; heading?: string; items: { q: string; a: string }[] }
  | { kind: "callout"; label: string; body: string };

export type TreatmentContent = {
  h1: string;
  kicker?: string;
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
};
