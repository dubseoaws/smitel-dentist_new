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
};
