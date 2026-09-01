// All content sourced from www.smiledentist.co.uk — do not invent copy.

export const SITE = {
  name: "Smile Dentist",
  phone: "020 7183 2362",
  phoneHref: "tel:02071832362",
  email: "info@smiledentist.co.uk",
  bookingUrl: "/booking",
  membershipUrl: "https://membership.md.co.uk/",
  rating: "4.9",
  reviewCount: "437",
  tagline:
    "Redefining dental care with affordable luxury. Two clinics across Central London — South Kensington and the City of London.",
};

export const CLOUDINARY = "https://res.cloudinary.com/da1zmp1ib/image/upload";

export const IMAGES = {
  drYasha: "https://www.smiledentist.co.uk/dr_yasha_shirazi_new_wellcome_image%20copy.jpg",
  signature: `${CLOUDINARY}/v1767202746/signature_1_dbtcsj.png`,
  heroBefore: `${CLOUDINARY}/v1767564169/Dr_kamran_from_composite_bonding_before_mnfazs.webp`,
  heroAfter: `${CLOUDINARY}/v1767564170/Dr_kamran_from_composite_bonding_after_g08wod.webp`,
  heroMain: "/hero/periodontal-treatment.jpg",
  heroVeneers: `${CLOUDINARY}/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg`,
  heroAligners: `${CLOUDINARY}/v1765805892/proaligners-home_xasqw8.jpg`,
  heroImplant: "/hero/gum-contouring.jpg",
};

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  standard: string;
  member: string;
  image: string;
};

export type TreatmentCategory = {
  id: string;
  title: string;
  intro: string;
  treatments: Treatment[];
};

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    intro: "Enhance your smile with premium aesthetics and bespoke design.",
    treatments: [
      {
        slug: "smile-makeover-london",
        name: "Smile Makeover",
        description:
          "A comprehensive, bespoke treatment plan designed to address multiple aesthetic and functional issues simultaneously.",
        standard: "POA",
        member: "POA",
        image: "/treatments/smile-makeover.jpg",
      },
      {
        slug: "teeth-whitening-london",
        name: "Home Teeth Whitening",
        description:
          "Professional systems like Enlighten and Boutique for clinically proven brighter shades from home.",
        standard: "From £399",
        member: "From £199",
        image: `${CLOUDINARY}/v1765805811/teeth-whitening-hoome_xo3s4a.jpg`,
      },
      {
        slug: "composite-bonding-london",
        name: "Composite Bonding",
        description:
          "Artistic reshaping of teeth using resin to fix chips, gaps, and symmetry in one visit.",
        standard: "From £395",
        member: "From £197.50",
        image: `${CLOUDINARY}/v1765804836/composite-bonding-home_pm703h.jpg`,
      },
      {
        slug: "porcelain-veneers-london",
        name: "Porcelain Veneers",
        description: "Hand-crafted ceramic shells for a comprehensive smile makeover.",
        standard: "From £1095",
        member: "From £547.50",
        image: `${CLOUDINARY}/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg`,
      },
      {
        slug: "composite-veneers-london",
        name: "Composite Veneers",
        description:
          "Hand-sculpted composite resin veneers — a more affordable, minimally invasive alternative to porcelain.",
        standard: "From £595",
        member: "From £297.50",
        image: `${CLOUDINARY}/v1765804836/composite-bonding-home_pm703h.jpg`,
      },
      {
        slug: "dental-veneers-london",
        name: "Dental Veneers (Overview)",
        description:
          "Compare composite and porcelain veneers to find the option that may suit your goals.",
        standard: "From £595",
        member: "From £297.50",
        image: `${CLOUDINARY}/v1765871030/Full-Smile-Transformation-with-20-Porcelain-Veneers-after_gnkzev.jpg`,
      },
      {
        slug: "tooth-contouring-london",
        name: "Tooth Contouring",
        description:
          "Smooth jagged edges, reshape pointy teeth, and fix small chips in one comfortable visit.",
        standard: "From £150",
        member: "From £75",
        image: `${CLOUDINARY}/v1765805791/tooth-contouring_ex8lq0.jpg`,
      },
      {
        slug: "gum-contouring-london",
        name: "Gum Contouring",
        description: 'Sculpting to correct a "gummy smile" or uneven gum lines.',
        standard: "From £200",
        member: "From £100",
        image: `${CLOUDINARY}/v1765805808/gum-contouring_k46rrb.jpg`,
      },
      {
        slug: "pro-aligners-london",
        name: "Pro-aligners (Invisible Braces)",
        description:
          "Discreet teeth straightening using clear, removable aligners. A more affordable alternative to Invisalign.",
        standard: "From £2000",
        member: "From £1000",
        image: `${CLOUDINARY}/v1765805892/proaligners-home_xasqw8.jpg`,
      },
    ],
  },
  {
    id: "restorative",
    title: "Restorative & Implants",
    intro: "Rebuild your smile. Solutions for broken, damaged, or missing teeth.",
    treatments: [
      {
        slug: "missing-teeth-london",
        name: "Solutions for Missing Teeth",
        description:
          "Explore all options for missing teeth: Implants, Bridges, and Dentures in one place.",
        standard: "From £2950",
        member: "Not eligible",
        image: `${CLOUDINARY}/v1765805735/solutions-for-missing-teeth_z3layk.jpg`,
      },
      {
        slug: "dental-implants-london",
        name: "Dental Implants",
        description:
          "A highly regarded solution for replacing missing teeth. A titanium root with a zirconia crown.",
        standard: "From £2950",
        member: "Not eligible",
        image: `${CLOUDINARY}/v1765805822/dental-implant-home_gulsc0.jpg`,
      },
      {
        slug: "dental-crowns-london",
        name: "Crowns",
        description: "Ultra-strong, natural-looking crowns to restore damaged teeth.",
        standard: "From £995",
        member: "From £497.50",
        image: `${CLOUDINARY}/v1765805809/dental-crowns_pq0fvz.jpg`,
      },
      {
        slug: "dental-bridges-london",
        name: "Dental Bridges",
        description:
          "Bridge the gap created by one or more missing teeth with a fixed porcelain restoration.",
        standard: "From £995",
        member: "From £497.50",
        image: `${CLOUDINARY}/v1765805729/Dental-Bridges_ygwl9m.jpg`,
      },
      {
        slug: "maryland-bridge-london",
        name: "Maryland Bridge",
        description:
          "A minimally invasive, resin-bonded bridge for replacing a single missing tooth with little or no preparation.",
        standard: "From £1030",
        member: "From £515",
        image: `${CLOUDINARY}/v1765871028/Dental-Crown-and-Bridge-Restoration-after_cfgmgb.jpg`,
      },
      {
        slug: "dentures-london",
        name: "Acrylic & Flexi Dentures",
        description:
          "Modern, comfortable removable dentures to replace multiple missing teeth.",
        standard: "From £795",
        member: "From £397.50",
        image: `${CLOUDINARY}/v1765805793/acrylic-_-flexi-dentures_caf2u4.jpg`,
      },
      {
        slug: "full-dentures",
        name: "Full Dentures",
        description:
          "Complete upper or lower dentures to replace all missing teeth in an arch.",
        standard: "From £1095",
        member: "From £547.50",
        image: `${CLOUDINARY}/v1765805793/acrylic-_-flexi-dentures_caf2u4.jpg`,
      },
      {
        slug: "root-canal-london",
        name: "Root Canal Treatment",
        description:
          "Save an infected tooth from extraction by cleaning and sealing the root system.",
        standard: "From £495",
        member: "From £247.50",
        image: `${CLOUDINARY}/v1765805806/root-canal-treatment_t6kqrj.jpg`,
      },
    ],
  },
  {
    id: "general",
    title: "General Dentistry",
    intro:
      "The foundation of a healthy smile. Comprehensive care for your long-term oral health.",
    treatments: [
      {
        slug: "dental-examination-london",
        name: "Dental Examination",
        description:
          "A full assessment of your teeth, gums, and oral health including oral cancer screening.",
        standard: "From £95",
        member: "From £47.50",
        image: `${CLOUDINARY}/v1765805800/dental-examination_fdwzho.jpg`,
      },
      {
        slug: "white-fillings-london",
        name: "White Composite Fillings",
        description:
          "Invisible repair with mercury-free white composite. Replace old silver fillings seamlessly.",
        standard: "From £185",
        member: "From £92.50",
        image: `${CLOUDINARY}/v1765805809/composite-fillings_g5zpxk.jpg`,
      },
      {
        slug: "tooth-extraction-london",
        name: "Tooth Extraction",
        description:
          "Gentle removal of damaged or problematic teeth when restoration is not possible.",
        standard: "From £250",
        member: "From £125",
        image: `${CLOUDINARY}/v1765805807/tooth-extraction_efzra6.jpg`,
      },
      {
        slug: "wisdom-tooth-extraction-london",
        name: "Wisdom Tooth Removal",
        description:
          "Expert surgical removal of impacted wisdom teeth with same-day emergency appointments available.",
        standard: "From £650",
        member: "From £325",
        image: `${CLOUDINARY}/v1765805791/tooth-contouring_ex8lq0.jpg`,
      },
      {
        slug: "tmj-treatment-london",
        name: "TMJ Treatment",
        description:
          "Assessment and conservative management of jaw pain, clicking, and teeth grinding (bruxism).",
        standard: "From £595",
        member: "From £297.50",
        image: `${CLOUDINARY}/v1765805791/tooth-contouring_ex8lq0.jpg`,
      },
    ],
  },
  {
    id: "preventative",
    title: "Preventative Care",
    intro: "Stop problems before they start. Hygiene and maintenance for a lasting smile.",
    treatments: [
      {
        slug: "hygiene-london",
        name: "Dental Hygiene",
        description:
          "Premium cleaning using AirFlow technology to remove stains and plaque without scraping.",
        standard: "From £89",
        member: "From £44.50",
        image: `${CLOUDINARY}/v1765805807/dental-hygiene_nmtblc.jpg`,
      },
      {
        slug: "periodontal-london",
        name: "Periodontal Treatment",
        description:
          "Advanced gum care to treat gingivitis and gum disease, protecting your tooth roots.",
        standard: "From £850",
        member: "From £425",
        image: `${CLOUDINARY}/v1765805739/periodontal-treatment_xigiko.jpg`,
      },
      {
        slug: "childrens-dentistry-london",
        name: "Children's Dentistry",
        description: "Gentle check-ups and preventative care for our younger patients.",
        standard: "From £95",
        member: "From £47.50",
        image: `${CLOUDINARY}/v1765805801/children-dentistry_uc22fn.jpg`,
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Care",
    intro: "Urgent attention when you need it most. Same-day appointments available.",
    treatments: [
      {
        slug: "emergency-dental-london",
        name: "Emergency Dental",
        description:
          "Immediate diagnosis and pain relief for toothache, swelling, or accidents.",
        standard: "From £95",
        member: "From £47.50",
        image: `${CLOUDINARY}/v1765805792/emergency-dental_selpql.jpg`,
      },
    ],
  },
];

export const ALL_TREATMENTS = TREATMENT_CATEGORIES.flatMap((c) => c.treatments);

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  gdc: string;
  bio: string;
  image: string | null;
  video?: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "dr-yasha-shirazi-cosmetic-dentist",
    name: "Dr. Yasha Y Shirazi",
    role: "Principal Dentist & Clinical Director",
    gdc: "195843",
    bio: "Meticulous preventative care meets high-quality cosmetic dentistry. Yasha offers complicated surgical extractions, complex treatments, and smile makeovers.",
    image: IMAGES.drYasha,
  },
  {
    slug: "dr-kamran-yazdi-conservative-dentist",
    name: "Dr. Kamran Yazdi",
    role: "Implant Dentist",
    gdc: "197926",
    bio: "Conservative dentistry with postgraduate degrees from UCL Eastman. Believes in preserving as much natural tooth structure as possible.",
    image: `${CLOUDINARY}/v1765880757/dr-kamran-yazdi_image_z69snd.jpg`,
  },
  {
    slug: "dr-andreia-phipps-cosmetic-dentist",
    name: "Dr. Andreia Phipps",
    role: "Dentist",
    gdc: "229601",
    bio: "Friendly and enthusiastic dentist passionate about cosmetic and aesthetic restorative dentistry. Patient-centred care is at the heart of everything she does.",
    image: null,
    video: `${CLOUDINARY.replace("/image/", "/video/")}/v1767383564/dr_Andreia_3x4_ns1t8d.webm`,
  },
  {
    slug: "dr-reza-davari-prosthodontist",
    name: "Dr. Reza Davari",
    role: "Dentist",
    gdc: "302422",
    bio: "Award-winning dentist with the London Gold Medal. Combines advanced clinical skill with a calm, gentle manner.",
    image: null,
    video: `${CLOUDINARY.replace("/image/", "/video/")}/v1767444905/2026-01-03_12.52.35_vwvhgi.webm`,
  },
  {
    slug: "dr-narges-ameri-implant-dentist",
    name: "Dr. Narges Ameri",
    role: "Dentist",
    gdc: "325081",
    bio: "Specialist-trained prosthodontist and implantologist. Former Assistant Professor at Tehran University with expertise in complex restorative cases.",
    image: `${CLOUDINARY}/v1765880758/Dr-Narges-Ameri_gejrdv.jpg`,
  },
  {
    slug: "dr-ayman-mukhtar-dentist",
    name: "Dr. Ayman Mukhtar",
    role: "Dentist",
    gdc: "302583",
    bio: "King's College London graduate with expertise in oral surgery, extractions, and restorative dentistry. Known for a gentle, patient-centred approach.",
    image: `${CLOUDINARY}/v1770056149/Dentist-Aymen_Mukhtar_kathli.webp`,
  },
  {
    slug: "dr-elisabeth-lichtmannegger-dentist",
    name: "Dr. Elisabeth Lichtmannegger",
    role: "Dentist",
    gdc: "319325",
    bio: "Qualified from the University of Erlangen-Nuremberg in 2017. Experienced in preventive and restorative dentistry with a gentle, detail-oriented approach.",
    image: `${CLOUDINARY}/v1772277344/Dr._Elisabeth_Lichtmannegger-1_l33mng.webp`,
  },
  {
    slug: "dr-sam-parsno-implant-dentist",
    name: "Dr. Sam Parsno",
    role: "Implant Dentist",
    gdc: "72207",
    bio: "Over 30 years of implant experience. Trained at the Brånemark Centre, Royal College of Surgeons, and Karolinska Institute. Founder of the London College of Oral Implantology.",
    image: `${CLOUDINARY}/v1772017277/Dr_Sam_Parsno_fgykes.webp`,
  },
  {
    slug: "jack-button-dental-hygienist",
    name: "Jack Button",
    role: "Dental Hygienist & Dental Therapist",
    gdc: "244367",
    bio: "Clinical Director and only Dental Hygienist awarded Fellowship to the International Academy for Dental Facial Esthetics.",
    image: `${CLOUDINARY}/v1767691904/jack-button-mobile-image1_bpm24z_l0lxrf.jpg`,
  },
  {
    slug: "laila-alhussein-dental-hygienist",
    name: "Laila Alhussein",
    role: "Dental Hygienist",
    gdc: "328882",
    bio: "UCL-trained hygienist dedicated to promoting oral health in a warm, welcoming environment. Passionate about patient comfort and connection.",
    image: `${CLOUDINARY}/v1765880764/laila-alhussein_gdajal.webp`,
  },
];

export const YASHA_FULL_BIO = [
  "Having qualified from the University of Regensburg in Germany Yasha has worked as a dentist in both Germany as well as the UK. To Yasha, dentistry is very much a vocation and his calling. He is a firm believer in prevention being better than the cure and therefore is meticulous in spending time with patients educating them in the importance of good oral care. Yasha is an exceptionally competent dentist and has a wide range of skillsets. His calm and patient manner is reassuringly welcome and very much appreciated by his patients.",
  "Yasha believes that dentistry is not only about treating patients' teeth but also about caring for one's general wellbeing and respecting the individuality of each person. No two patients are ever the same. Yasha offers a full range of cosmetic and preventative/remedial dental treatment including complicated surgical extractions, complex treatments and smile makeovers, all with the highest quality dentistry as well as huge focus on aftercare to ensure the whole process is as comfortable as possible.",
  "Dr. Yasha founded Smile Dentist with a singular vision: to bring affordable luxury to South Kensington. With a special interest in cosmetic bonding and smile makeovers, Dr. Yasha combines artistic flair with rigorous medical standards.",
];

export type FeeRow = { name: string; standard: string; member: string };
export type FeeSection = { title: string; rows: FeeRow[] };

export const FEE_SECTIONS: FeeSection[] = [
  {
    title: "General Dentistry",
    rows: [
      { name: "Dental Examination", standard: "From £95", member: "From £47.50" },
      { name: "X-Ray", standard: "From £20", member: "From £10.00" },
      { name: "Dental Hygiene", standard: "From £89", member: "From £44.50" },
      { name: "Dental Hygiene with Airflow", standard: "From £142", member: "From £71.00" },
      { name: "Composite Filling", standard: "From £185", member: "From £92.50" },
      { name: "Emergency Dental", standard: "From £95", member: "From £47.50" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    rows: [
      { name: "Teeth Whitening", standard: "From £399", member: "From £199.50" },
      { name: "Composite Bonding (per tooth)", standard: "From £395", member: "From £197.50" },
      { name: "Composite Veneer", standard: "From £595", member: "From £297.50" },
      { name: "Porcelain Veneer", standard: "From £1,095", member: "From £547.50" },
      { name: "Gum Contouring", standard: "From £200", member: "From £100.00" },
    ],
  },
  {
    title: "Restorative Dentistry",
    rows: [
      { name: "Crowns", standard: "From £995", member: "From £497.50" },
      { name: "Inlays & Onlays", standard: "From £995", member: "From £497.50" },
      { name: "Bridge (per unit)", standard: "From £995", member: "From £497.50" },
      { name: "Maryland Bridge (Resin Bonded)", standard: "From £1,030", member: "From £515.00" },
      { name: "Dental Implants (inc. crown)", standard: "From £2,950", member: "Not eligible" },
      { name: "Root Canal (Front)", standard: "From £695", member: "From £347.50" },
      { name: "Root Canal (Molar)", standard: "From £895", member: "From £447.50" },
    ],
  },
  {
    title: "Orthodontics",
    rows: [
      { name: "Pro-aligners (Invisible Braces)", standard: "From £2,000", member: "From £1,000.00" },
      { name: "Removable Retainer (per arch)", standard: "From £300", member: "From £150.00" },
      { name: "Fixed Retainer (per arch)", standard: "From £350", member: "From £175.00" },
    ],
  },
  {
    title: "Dentures",
    rows: [
      { name: "Acrylic Denture Partial", standard: "From £795", member: "From £397.50" },
      { name: "Acrylic Denture Full", standard: "From £1,095", member: "From £547.50" },
      { name: "Cobalt-Chrome Denture", standard: "From £1,395", member: "From £697.50" },
      { name: "Valplast/Flexi Denture", standard: "From £895", member: "From £447.50" },
    ],
  },
  {
    title: "Children's Dentistry",
    rows: [
      { name: "Children's Check-up", standard: "From £95", member: "From £47.50" },
      { name: "Fissure Sealant (per tooth)", standard: "From £65", member: "From £32.50" },
      { name: "Fluoride Treatment", standard: "From £40", member: "From £20.00" },
    ],
  },
  {
    title: "Surgical & Other",
    rows: [
      { name: "Extraction (Simple)", standard: "From £250", member: "From £125.00" },
      { name: "Extraction (Complicated)", standard: "From £450", member: "From £225.00" },
      { name: "Extraction (Surgical)", standard: "From £650", member: "From £325.00" },
      { name: "Frenectomy", standard: "From £350", member: "From £175.00" },
      { name: "Mouthguards", standard: "From £595", member: "From £297.50" },
      { name: "Periodontal Treatment", standard: "From £880", member: "From £440.00" },
    ],
  },
];

export const CLINICS = [
  {
    slug: "south-kensington",
    name: "South Kensington",
    address: ["20 Old Brompton Road", "South Kensington", "London, SW7 3DL"],
    landmark: "Directly opposite the Lamborghini London Dealership.",
    tube: "3-minute walk from South Kensington Station (District, Circle, Piccadilly lines).",
    parking:
      "Pay-and-display street parking on Old Brompton Road and surrounding streets.",
    proximity: "3-min walk from South Kensington Station",
    hours: [
      { day: "Monday", time: "09:00 – 18:00" },
      { day: "Tuesday", time: "09:00 – 20:00", note: "LATE NIGHT" },
      { day: "Wednesday", time: "09:00 – 18:00" },
      { day: "Thursday", time: "09:00 – 20:00", note: "LATE NIGHT" },
      { day: "Friday", time: "09:00 – 17:00" },
      { day: "Saturday", time: "10:00 – 16:00" },
      { day: "Sunday", time: "10:00 – 16:00" },
    ],
    footerHours: [
      { day: "Mon, Wed", time: "09:00–18:00" },
      { day: "Tue, Thu", time: "09:00–20:00" },
      { day: "Friday", time: "09:00–17:00" },
      { day: "Sat & Sun", time: "10:00–16:00" },
    ],
  },
  {
    slug: "city-of-london",
    name: "City of London",
    address: ["5 Ave Maria Lane", "City of London", "London, EC4M 7AQ"],
    landmark: "2 minutes from St Paul's Cathedral.",
    tube: "St Paul's Station (Central line) — 3-minute walk. Exit and head south past the Cathedral. Blackfriars Station (District, Circle & Thameslink) — 5-minute walk north.",
    parking:
      "Routes 4, 11, 15, 17, 23, 26, 76 stop on Ludgate Hill, Cheapside, and Newgate Street — all within a 3-minute walk.",
    proximity: "3-min walk from St Paul's Station",
    hours: [
      { day: "Monday", time: "08:00 – 20:00" },
      { day: "Tuesday", time: "08:00 – 20:00" },
      { day: "Wednesday", time: "08:00 – 20:00" },
      { day: "Thursday", time: "08:00 – 20:00" },
      { day: "Friday", time: "08:00 – 20:00" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "Closed" },
    ],
    footerHours: [
      { day: "Mon – Fri", time: "08:00–20:00" },
      { day: "Sat & Sun", time: "Closed" },
    ],
  },
];

export const CASE_STUDIES = [
  {
    title: "Restoring a Chipped Front Tooth",
    description:
      "A patient attended our clinic for an emergency appointment after chipping her upper left front tooth. Fortunately, the tooth was not painful or sensitive, but the chip significantly affected the appearance of her smile.",
    before: `${CLOUDINARY}/v1765871029/Composite-Bonding-for-Chipped-Maxillary-Incisors-before_n04xwg.jpg`,
    after: `${CLOUDINARY}/v1765871045/WhatsApp_Image_2025-12-03_at_4.51.44_PM_1_y8s5dj.jpg`,
  },
  {
    title: "Transforming Discoloured & Chipped Teeth",
    description:
      "The patient attended a consultation unhappy with the appearance of her upper front teeth. Her upper right central incisor (UR1) was noticeably discoloured, and both central incisors had small chips affecting the overall aesthetics of her smile. She explained that she had fallen on her teeth when she was younger, which pushed the UR1 slightly backwards. Over time, the tooth became non-vital and eventually required root canal treatment. Although the tooth was symptomless, it still appeared darker than the neighbouring teeth.",
    before: `${CLOUDINARY}/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-before_zmahqo.jpg`,
    after: `${CLOUDINARY}/v1765871039/Transforming-Discoloured-and-Chipped-Front-Teeth-with-Composite-Bonding-after_h9lpac.jpg`,
  },
];

export const YOUTUBE_CHANNEL =
  "https://www.youtube.com/@SouthKensingtonMedicalDental";

export const VIDEOS = [
  {
    id: "n33iO5y6N0g",
    title: "\"I Can't Stop Smiling!\" | Composite Bonding Patient Review",
  },
  {
    id: "Huq5WJ2grKc",
    title: "Dental Implants Explained | A Premium Solution for Missing Teeth",
  },
  {
    id: "bLtSMhb60HI",
    title: "Private Dentist Appointment in South Kensington | Explained By Dr. Yasha Shirazi",
  },
  {
    id: "33u-MrdHaVU",
    title: "Full Mouth Rehabilitation in London | Transform Your Smile with Dr. Andreia Phipps",
  },
  {
    id: "lHx-p0FbocQ",
    title: "Saving £3,750 on Zirconia Teeth in London! | A Patient's Success Story",
  },
  {
    id: "JyjVdDbavkA",
    title: "Impacted Wisdom Tooth | The Hidden Problem at the Back of Your Mouth",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Your Dentists", href: "/team" },
  { label: "Membership", href: "/membership" },
  { label: "Contact Us", href: "/contact" },
  { label: "Fees", href: "/fees" },
  { label: "Results", href: "/results-london" },
  { label: "Blog", href: "/blog" },
];

export const NAV_CLINIC_LINKS = [
  { label: "South Kensington SW7 • Open Now", href: "/south-kensington" },
  { label: "City of London EC4 · St Paul's", href: "/city-of-london" },
];

export const REVIEWS = [
  {
    name: "james reilly",
    text: "Dr kamran Yazd and his assistant went the extra mile to solve the issue I had for which I’m very grateful, The reception staff very friendly and professional, Found this clinic online by chance but this clinic will be my first choice for any future treatments, Highly recommend",
  },
  {
    name: "Diana Osipova",
    text: "I had an appointmenrt today with Dr. Kamran, he was very kind, professional and explained everything very clearly. I would definitely recommend this dental practice to other!",
  },
  {
    name: "Olivia Heading",
    text: "Bernadetta was brilliant - my first dental hygienist appointment but she made me feel very at ease and explained each process throughout",
  },
];

const BLOG_CLOUDINARY = "https://res.cloudinary.com/dzsbm6dxa/image/upload";

export const BLOG_POSTS = [
  {
    slug: "how-many-teeth-do-you-need-for-pop-on-veneers",
    title: "How Many Teeth Do You Need for Pop-On Veneers?",
    image: `${BLOG_CLOUDINARY}/v1785226673/What_Does_the_First_Week_Feel_Like_After_Veneer_Placement_jr7seq.jpg`,
  },
  {
    slug: "how-many-teeth-can-have-composite-bonding",
    title: "How Many Teeth Can Have Composite Bonding? A Patient Guide",
    image: `${BLOG_CLOUDINARY}/v1784793043/Can_Composite_Bonding_Be_Combined_With_Tooth_Contouring_for_a_Subtler_Change_uhj8yc.jpg`,
  },
  {
    slug: "are-scuba-diving-and-swimming-safe-after-dental-implant-treatment",
    title: "Are Scuba Diving and Swimming Safe After Dental Implant Treatment?",
    image: `${BLOG_CLOUDINARY}/v1786440492/Can_I_Sleep_on_the_Side_Where_My_Implant_Was_Placed_lrubq7.jpg`,
  },
  {
    slug: "can-you-put-a-crown-on-a-broken-tooth",
    title: "Can You Put a Crown on a Broken Tooth?",
    image: `${BLOG_CLOUDINARY}/v1785088822/What_Are_the_Early_Signs_a_Dental_Crown_May_Be_Failing_oxqfu9.jpg`,
  },
  {
    slug: "what-is-implant-biocompatibility-and-why-does-it-matter",
    title: "What Is Implant Biocompatibility and Why Does It Matter?",
    image: `${BLOG_CLOUDINARY}/v1786187172/Why_Are_My_Gums_Slightly_Different_Around_My_Implant_t9ciqn.jpg`,
  },
  {
    slug: "is-acrylic-safe-for-dentures",
    title: "Is Acrylic Safe for Dentures?",
    image: `${BLOG_CLOUDINARY}/v1774847880/How_Long_Do_Flexible_Dentures_Last_sxaurv.jpg`,
  },
  {
    slug: "how-to-get-stains-off-composite-bonding",
    title: "How to Get Stains Off Composite Bonding",
    image: `${BLOG_CLOUDINARY}/v1785822737/Why_Does_Composite_Bonding_Feel_Different_at_First_bizkr2.jpg`,
  },
  {
    slug: "crown-vs-filling-when-do-you-need-one",
    title: "Crown vs Filling: When Do You Need One?",
    image: `${BLOG_CLOUDINARY}/v1785226672/How_Do_Dentists_Match_a_Crown_s_Shade_to_Surrounding_Teeth_q9doo7.jpg`,
  },
  {
    slug: "can-you-get-veneers-instead-of-braces",
    title: "Can You Get Veneers Instead of Braces?",
    image: `${BLOG_CLOUDINARY}/v1785692256/Can_a_Single_Veneer_Be_Matched_Successfully_to_the_Rest_of_a_Smile_tdr2lg.jpg`,
  },
];

export const FOOTER_TREATMENTS = [
  { label: "Dental Implants", href: "/dental-implants-london" },
  { label: "Composite Bonding", href: "/composite-bonding-london" },
  { label: "Porcelain Veneers", href: "/porcelain-veneers-london" },
  { label: "Smile Makeover", href: "/smile-makeover-london" },
  { label: "Teeth Whitening", href: "/teeth-whitening-london" },
  { label: "Emergency Dentist", href: "/emergency-dental-london" },
  { label: "Dentures", href: "/dentures-london" },
  { label: "Clear Aligners", href: "/pro-aligners-london" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "All Treatments", href: "/treatments" },
  { label: "Fees", href: "/fees" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const MEMBERSHIP = {
  headline: "50% Off On All Dental Treatment",
  subline:
    "All-in-One Dental Membership Only £20/month* + Add Family Members For Just £10/Month",
  terms:
    "*12-month contract. Terms apply. 50% off includes Check Ups, Cosmetic, Restorative, and more.",
  includes: [
    "Check Ups",
    "Cosmetic Dentistry (inc. whitening)",
    "Restorative Dentistry (fillings, crowns, bridges and dentures)",
    "Invisible braces",
  ],
  perks: [
    "Priority support with bookings and care coordination",
    "Add family members for just £10/month each",
  ],
  exclusions: [
    "Full Mouth Rehabilitation",
    "Dental Implants (single tooth, multiple implants and implant-supported restorations)",
    "All-on-X (All-on-4 / All-on-6) Implant Treatment",
    "Sinus Lift Procedures",
    "Bone Grafting",
  ],
};
