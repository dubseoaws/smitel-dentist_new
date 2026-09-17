// SEO data mirrored verbatim from https://www.smiledentist.co.uk (do not edit by hand).
import type { Metadata } from "next";

export const SITE_URL = "https://www.smiledentist.co.uk";
export const SITE_NAME = "Smile Dentist London";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_LOCALE = "en_GB";
export const TITLE_SUFFIX = " | Smile Dentist London";

export const SEO_KEYWORDS: string[] = [
  "dentist london",
  "dentist south kensington",
  "dentist city of london",
  "cosmetic dentistry london",
  "dental implants london",
  "smile makeover london",
  "teeth whitening london",
  "emergency dentist london",
  "porcelain veneers london",
  "composite bonding london",
  "dental hygienist london",
  "affordable dentist london",
  "private dentist sw7",
  "private dentist ec4",
  "dentist near me"
];

export type PageSeo = {
  /** Title without the " | Smile Dentist London" suffix (also used for og:title / twitter:title). */
  title: string;
  description: string;
  noindex?: boolean;
  /** Overrides the site-wide keyword list. */
  keywords?: string[];
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {"title": "Smile Dentist London | Cosmetic, Implants & Smile Makeover Dentist", "description": "Smile Dentist London — affordable luxury cosmetic dentistry across two Central London clinics in South Kensington (SW7) and the City of London (EC4). 50% off treatments for members. Book today."},
  "/membership": {"title": "Dental Membership Plan London | Save 50% Instantly", "description": "Join our exclusive dental membership for just £20/month. Get 50% off all treatments instantly. Includes check-ups and family add-ons."},
  "/fees": {"title": "Dental Fees & Pricing London | Transparent Cost Guide | Smile Dentist", "description": "Transparent dental fees. See our member vs non-member prices. Check-ups from £47.50, Hygiene from £44.50. No hidden costs."},
  "/booking": {"title": "Book a Dentist Appointment in London | Smile Dentist", "description": "Book your dental appointment online at Smile Dentist London. Two clinics in South Kensington (SW7) and the City of London (EC4). Same-week availability for new and existing patients."},
  "/treatments": {"title": "Dental Treatments London | Full Range of Services", "description": "Explore our full range of dental treatments including cosmetic dentistry, dental implants, teeth whitening, and emergency dental care in South Kensington."},
  "/team": {"title": "Meet Our Dentists | Smile Dentist London Team", "description": "Meet our expert team of dentists and hygienists. Led by Dr Yasha Shirazi. GDC registered and CQC regulated professionals."},
  "/contact": {"title": "Contact Smile Dentist London | South Kensington & City of London", "description": "Visit us at 20 Old Brompton Road, SW7. Open late & weekends. Opposite Lamborghini London. Call 020 70434314."},
  "/results-london": {"title": "Before & After Gallery | Real Patient Results", "description": "View our gallery of real patient results. See the transformations we have achieved with cosmetic dentistry, veneers, bonding, and smile makeovers."},
  "/cosmetic-dentistry-london": {"title": "Cosmetic Dentist London | Veneers, Bonding & Makeovers", "description": "Enhance your smile with Dr Yasha. Expert cosmetic dentistry including Porcelain Veneers, Composite Bonding and Smile Makeovers."},
  "/thank-you": {"title": "Thank You", "description": "Thank you for your booking at Smile Dentist London. Your appointment is confirmed.", "noindex": true},
  "/blog": {"title": "Dental Health Blog | Expert Tips & Advice | Smile Dentist London", "description": "Expert dental health advice, tips, and insights about cosmetic dentistry, oral care, and dental treatments from our experienced team in London."},
  "/south-kensington": {"title": "Dentist South Kensington SW7 | Veneers, Implants & Cosmetic Dentistry", "description": "Smile Dentist South Kensington — private cosmetic dentist at 20 Old Brompton Road, SW7. Veneers from £547.50 and teeth whitening from £199.50 for members; dental implants from £2,950. CQC registered. 3 min from South Kensington Station. Open 7 days."},
  "/city-of-london": {"title": "Dentist City of London | Private & Cosmetic Dentist", "description": "Private and cosmetic dentist in the City of London at 5 Ave Maria Lane, near St Paul’s. Explore treatments, meet our team and book your appointment."},
  "/smile-makeover-london": {"title": "Smile Makeover London | Comprehensive Cosmetic Dentistry", "description": "Transform your smile with a bespoke smile makeover in London. Veneers, bonding, whitening & implants combined. GDC-registered team. Members save 50%."},
  "/teeth-whitening-london": {"title": "Teeth Whitening London From £199.50 | Dentist Supervised Kits", "description": "Teeth whitening in London by an experienced whitening dentist in Central London. Custom trays & safe home kits from £199.50. Book today."},
  "/composite-bonding-london": {"title": "Composite Bonding London | Natural Smile Enhancements | Smile Dentist", "description": "Repair chips, close gaps and reshape teeth with composite bonding in London. Natural-looking results from just £197 per tooth."},
  "/porcelain-veneers-london": {"title": "Porcelain Veneers London | Premium Smile Makeover | Smile Dentist", "description": "Enhance your smile with hand-crafted porcelain veneers in Central London. Premium quality from £547.50 with our plan. 0% finance available. Book today!"},
  "/composite-veneers-london": {"title": "Composite Veneers London | Cosmetic Smile Treatment | Smile Dentist", "description": "Hand-sculpted composite veneers in Central London. A minimally invasive cosmetic option from £297.50 with our membership plan. Book a consultation today."},
  "/dental-veneers-london": {"title": "Dental Veneers London | Composite & Porcelain Options | Smile Dentist", "description": "Composite and porcelain dental veneers in Central London. Personalised cosmetic treatment from £297.50 with our membership plan. Book a consultation today."},
  "/tooth-contouring-london": {"title": "Tooth Contouring London | Reshape Your Smile", "description": "Smooth jagged edges and reshape teeth in one painless visit at Smile Dentist London. No drilling, no anaesthetic. From £75 for members. Book today."},
  "/gum-contouring-london": {"title": "Gum Contouring London | Fix Gummy Smile", "description": "Expert gum contouring in London to fix a gummy smile and uneven gum lines. Precise laser sculpting by GDC-registered dentists. From £100 for members."},
  "/pro-aligners-london": {"title": "Invisible Braces London | Clear Aligners from £1000", "description": "Straighten teeth discreetly with clear aligners in London. Affordable Invisalign alternative from £1,000 for members. Free consultation. Book today."},
  "/missing-teeth-london": {"title": "Missing Teeth Solutions London | Implants, Bridges & Dentures", "description": "Explore all options for replacing missing teeth in London — dental implants, bridges and dentures. GDC-registered team. Members save 50%. Book today."},
  "/dental-implants-london": {"title": "Dental Implants London | Long-Lasting Tooth Replacement", "description": "Dental implants in London from £2,950, including the implant, abutment and zirconia crown. Long-lasting, natural-looking tooth replacement by GDC-registered implant dentists. Our membership discount does not apply to implants. Book a consultation."},
  "/dental-crowns-london": {"title": "Dental Crowns London | Restore Damaged Teeth", "description": "Dental crowns in London — natural-looking porcelain and zirconia crowns to restore damaged teeth. GDC-registered team. From £497.50 for members."},
  "/dental-bridges-london": {"title": "Dental Bridges London | Fixed Tooth Replacement", "description": "Fixed dental bridges in London to replace missing teeth. Natural-looking porcelain bridges by GDC-registered dentists. Members save 50%. Book today."},
  "/maryland-bridge-london": {"title": "Maryland Bridge London | Resin-Bonded Tooth Replacement | Smile Dentist", "description": "Minimally invasive Maryland (resin-bonded) bridges in Central London. Replace a single missing tooth from £515 with our membership plan. Book a consultation today."},
  "/dentures-london": {"title": "Dentures London | Modern Removable Teeth", "description": "Modern dentures in London — acrylic, chrome, Valplast and implant-retained options. Comfortable, natural-looking fit from £397.50 for members."},
  "/full-dentures": {"title": "Full Dentures London | Complete Tooth Replacement | Smile Dentist", "description": "Custom-made full dentures in Central London. Carefully fitted removable prosthetics from £547.50 with our membership plan. Book a consultation today."},
  "/root-canal-london": {"title": "Root Canal Treatment London | Save Your Tooth", "description": "Expert root canal treatment in London to save infected teeth and relieve pain. GDC-registered endodontic care from £247.50 for members. Book today."},
  "/dental-examination-london": {"title": "Dental Check Up London | £30 New Patient Offer | Smile Dentist SW7", "description": "A thorough dental exam in London. Digital X-rays & Cancer Screening. Just £30 for New Patients. Clinics in South Kensington & the City of London."},
  "/white-fillings-london": {"title": "White Fillings London | Composite Filling Cost | From £92.50 | Smile Dentist", "description": "Replace old metal fillings with invisible White Composite Fillings in Central London. Safe, aesthetic & mercury-free. Members pay just £92.50. Book today!"},
  "/tooth-extraction-london": {"title": "Tooth Extraction London | Wisdom Tooth Removal Cost | From £125", "description": "Tooth extraction in London from £125 for members. Gentle simple and surgical extractions including wisdom teeth. Same-day emergency slots. Book today."},
  "/wisdom-tooth-extraction-london": {"title": "Wisdom Tooth Extraction London | From £325 | Same-Day Appointments", "description": "Wisdom tooth extraction in London from £325 for members. Same-day appointments, gentle anaesthesia, no hospital referral needed. 4.9★ rated. Book today.", "keywords": ["wisdom tooth extraction London", "wisdom tooth removal London", "wisdom tooth extraction cost London", "wisdom tooth removal cost UK", "impacted wisdom tooth removal", "surgical wisdom tooth extraction", "wisdom teeth removal near me", "emergency wisdom tooth extraction", "same day wisdom tooth removal", "wisdom tooth extraction London", "wisdom tooth extraction city of london", "wisdom tooth pain London", "private wisdom tooth extraction", "wisdom tooth surgery London", "wisdom tooth removal SW7", "pericoronitis treatment London", "infected wisdom tooth removal", "wisdom tooth extraction price London", "affordable wisdom tooth extraction London", "top rated wisdom tooth removal London", "wisdom tooth extraction without hospital", "wisdom tooth specialist London", "impacted molar extraction", "third molar extraction London", "wisdom tooth removal recovery", "comfortable wisdom tooth extraction"]},
  "/tmj-treatment-london": {"title": "TMJ Treatment London | Jaw Pain & Bruxism Assessment | Smile Dentist", "description": "TMJ and TMD assessment and conservative management in Central London. Custom occlusal splints, bite review, and referral where needed. Book an assessment today."},
  "/hygiene-london": {"title": "Dental Hygienist London | Professional Teeth Cleaning", "description": "Professional dental hygienist in London using AirFlow technology for deep cleaning, stain removal and gum health. GDC-registered. From £44.50 for members."},
  "/periodontal-london": {"title": "Periodontal Treatment London | Gum Disease Specialist", "description": "Periodontal treatment in London for gingivitis and gum disease. Protect your teeth with specialist gum care by GDC-registered dentists. Book today."},
  "/childrens-dentistry-london": {"title": "Children's Dentist London | Kids Dental Care", "description": "Children's dentist in London offering gentle, child-friendly dental care. Fissure sealants, fluoride varnish and check-ups. GDC-registered team. Book today."},
  "/emergency-dental-london": {"title": "Emergency Dentist London | Same Day Appointments | SW7 & EC4", "description": "Emergency dentist in London — same-day appointments for toothache, broken teeth and dental trauma. SW7 & EC4 clinics. Call 020 70434314. Open 7 days."},
  "/dr-yasha-shirazi-cosmetic-dentist": {"title": "Dr. Yasha Y Shirazi | Principal Dentist & Clinical Director | Smile Dentist", "description": "Meticulous preventative care meets high-quality cosmetic dentistry. Yasha offers complicated surgical extractions, complex treatments, and smile makeovers."},
  "/dr-kamran-yazdi-conservative-dentist": {"title": "Dr. Kamran Yazdi | Implant Dentist | Smile Dentist", "description": "Conservative dentistry with postgraduate degrees from UCL Eastman. Believes in preserving as much natural tooth structure as possible."},
  "/dr-andreia-phipps-cosmetic-dentist": {"title": "Dr. Andreia Phipps | Dentist | Smile Dentist", "description": "Friendly and enthusiastic dentist passionate about cosmetic and aesthetic restorative dentistry. Patient-centred care is at the heart of everything she does."},
  "/dr-reza-davari-prosthodontist": {"title": "Dr. Reza Davari | Dentist | Smile Dentist", "description": "Award-winning dentist with the London Gold Medal. Combines advanced clinical skill with a calm, gentle manner."},
  "/dr-narges-ameri-implant-dentist": {"title": "Dr. Narges Ameri | Dentist | Smile Dentist", "description": "Specialist-trained prosthodontist and implantologist. Former Assistant Professor at Tehran University with expertise in complex restorative cases."},
  "/dr-ayman-mukhtar-dentist": {"title": "Dr. Ayman Mukhtar | Dentist | Smile Dentist", "description": "King's College London graduate with expertise in oral surgery, extractions, and restorative dentistry. Known for a gentle, patient-centred approach."},
  "/dr-elisabeth-lichtmannegger-dentist": {"title": "Dr. Elisabeth Lichtmannegger | Dentist | Smile Dentist", "description": "Qualified from the University of Erlangen-Nuremberg in 2017. Experienced in preventive and restorative dentistry with a gentle, detail-oriented approach."},
  "/dr-sam-parsno-implant-dentist": {"title": "Dr. Sam Parsno | Implant Dentist | Smile Dentist", "description": "Over 30 years of implant experience. Trained at the Brånemark Centre, Royal College of Surgeons, and Karolinska Institute. Founder of the London College of Oral Implantology."},
  "/jack-button-dental-hygienist": {"title": "Jack Button | Dental Hygienist & Dental Therapist | Smile Dentist", "description": "Clinical Director and only Dental Hygienist awarded Fellowship to the International Academy for Dental Facial Esthetics."},
  "/laila-alhussein-dental-hygienist": {"title": "Laila Alhussein | Dental Hygienist | Smile Dentist", "description": "UCL-trained hygienist dedicated to promoting oral health in a warm, welcoming environment. Passionate about patient comfort and connection."},
  "/acrylic-dentures-london": {"title": "Acrylic Dentures London | Affordable Removable Teeth", "description": "Affordable acrylic dentures in London for full or partial tooth replacement. Lightweight, natural-looking and custom-fitted. From £397.50 for members."},
  "/chrome-dentures-london": {"title": "Chrome Dentures London | Strong Metal Framework", "description": "Chrome cobalt dentures in London — strong, slim metal framework for a secure fit and lasting comfort. GDC-registered team. From £697.50 for members."},
  "/compare-treatments": {"title": "Compare Dental Treatments London | Smile Dentist", "description": "Compare dental treatments side by side. Understand key differences between popular options to make an informed decision. Book a consultation at Smile Dentist London."},
  "/compare-treatments/airflow-cleaning-vs-scaling-polishing": {"title": "Airflow Cleaning vs Scaling & Polishing | Cost & Differences", "description": "Compare airflow cleaning vs scaling and polishing. Understand the differences in technique, comfort, stain removal, cost, and which professional teeth cleaning method is right for you."},
  "/compare-treatments/all-on-4-vs-all-on-6-dental-implants": {"title": "All-on-4 vs All-on-6 Implants London | Key Differences", "description": "Compare All-on-4 vs All-on-6 dental implants in London. Understand the key differences in cost, stability, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/all-on-4-vs-traditional-implants": {"title": "All-on-4 vs Traditional Implants London | Full Comparison", "description": "Compare All-on-4 vs traditional dental implants in London. Understand the key differences in cost, treatment time, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/dental-crowns-vs-fillings": {"title": "Dental Crowns vs Fillings | Cost & Differences", "description": "Compare dental crowns vs fillings for repairing damaged teeth. Understand the differences in coverage, strength, cost, and longevity to decide which restoration is right for you."},
  "/compare-treatments/dental-crowns-vs-onlays": {"title": "Dental Crowns vs Onlays | Cost & Differences", "description": "Compare dental crowns vs onlays for restoring damaged teeth. Understand the differences in coverage, tooth preservation, cost, and longevity to decide which restoration is right for you."},
  "/compare-treatments/dental-crowns-vs-veneers": {"title": "Dental Crowns vs Veneers | Cost & Differences", "description": "Compare dental crowns vs veneers for restoring your smile. Understand the differences in purpose, coverage, cost, and aesthetics to decide which option is right for you."},
  "/compare-treatments/dental-fillings-vs-inlays": {"title": "Dental Fillings vs Inlays | Cost & Differences", "description": "Compare dental fillings vs inlays for repairing tooth damage. Understand the differences in strength, cost, longevity, and suitability to choose the right restoration."},
  "/compare-treatments/dental-implants-vs-bridges": {"title": "Dental Implants vs Bridges London | Cost & Differences", "description": "Compare dental implants vs bridges in London. Understand the key differences in cost, longevity, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/dental-implants-vs-crowns": {"title": "Dental Implants vs Crowns London | Which Do You Need?", "description": "Compare dental implants vs crowns in London. Understand when each is appropriate, key differences in cost, longevity, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/dental-implants-vs-dentures": {"title": "Dental Implants vs Dentures London | Honest Comparison", "description": "Compare dental implants vs dentures in London. Understand the key differences in cost, longevity, stability, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/dental-implants-vs-partial-dentures": {"title": "Implants vs Partial Dentures London | Key Differences", "description": "Compare dental implants vs partial dentures in London. Understand key differences in stability, cost, longevity, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/dentist-whitening-vs-over-the-counter-whitening": {"title": "Dentist Whitening vs Over-the-Counter Whitening London | Key Differences", "description": "Compare dentist-supervised whitening vs over-the-counter whitening in London. Understand the key differences in safety, results, cost, and longevity. Book a consultation at Smile Dentist."},
  "/compare-treatments/gum-treatment-vs-tooth-extraction": {"title": "Gum Treatment vs Tooth Extraction | Cost & Differences", "description": "Compare gum treatment vs tooth extraction for managing gum disease. Understand the differences in approach, outcomes, cost, and when each option is most appropriate."},
  "/compare-treatments/implant-supported-dentures-vs-regular-dentures": {"title": "Implant Dentures vs Regular Dentures London | Compared", "description": "Compare implant-supported dentures vs regular dentures in London. Understand key differences in stability, comfort, cost, and longevity. Book a consultation at Smile Dentist."},
  "/compare-treatments/mini-implants-vs-standard-implants": {"title": "Mini vs Standard Implants London | Pros, Cons & Cost", "description": "Compare mini dental implants vs standard implants in London. Understand key differences in size, stability, longevity, and cost. Book a consultation at Smile Dentist."},
  "/compare-treatments/periodontal-treatment-vs-hygiene-cleaning": {"title": "Periodontal Treatment vs Hygiene Cleaning | Cost & Differences", "description": "Compare periodontal treatment vs hygiene cleaning. Understand the differences in depth, purpose, cost, and suitability to decide which approach is right for your gum health."},
  "/compare-treatments/porcelain-veneers-vs-composite-veneers": {"title": "Porcelain Veneers vs Composite Veneers London | Key Differences", "description": "Compare porcelain veneers vs composite veneers in London. Understand the key differences in cost, longevity, aesthetics, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/professional-whitening-vs-home-kits": {"title": "Professional Whitening vs Home Kits London | Key Differences", "description": "Compare professional dentist-supervised whitening vs home whitening kits in London. Understand the key differences in customisation, safety, cost, and results. Book a consultation at Smile Dentist."},
  "/compare-treatments/root-canal-vs-dental-implant": {"title": "Root Canal vs Dental Implant | Cost & Differences", "description": "Compare root canal treatment vs dental implants. Understand the differences in tooth preservation, cost, longevity, and suitability to decide whether to save or replace your tooth."},
  "/compare-treatments/root-canal-vs-tooth-extraction": {"title": "Root Canal vs Tooth Extraction | Cost & Differences", "description": "Compare root canal treatment vs tooth extraction. Understand the differences in tooth preservation, cost, recovery, and long-term outcomes to decide which is right for you."},
  "/compare-treatments/same-day-implants-vs-traditional-implants": {"title": "Same-Day vs Traditional Implants London | Compared", "description": "Compare same-day dental implants vs traditional implants in London. Understand key differences in treatment time, healing, cost, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/smile-makeover-vs-orthodontics": {"title": "Smile Makeover vs Orthodontics London | Key Differences", "description": "Compare smile makeovers vs orthodontics in London. Understand the key differences in approach, cost, treatment time, and results. Book a consultation at Smile Dentist."},
  "/compare-treatments/smile-makeover-vs-veneers": {"title": "Smile Makeover vs Veneers London | Key Differences", "description": "Compare smile makeovers vs veneers in London. Understand the key differences in scope, cost, longevity, and results. Book a consultation at Smile Dentist."},
  "/compare-treatments/surgical-extraction-vs-simple-extraction": {"title": "Surgical Extraction vs Simple Extraction | Cost & Differences", "description": "Compare surgical extraction vs simple tooth extraction. Understand the key differences in procedure, recovery time, cost, and when each type is needed. Book a consultation."},
  "/compare-treatments/teeth-whitening-vs-scaling-polishing": {"title": "Teeth Whitening vs Scaling & Polishing London | Key Differences", "description": "Compare teeth whitening vs scaling and polishing in London. Understand the key differences in purpose, cost, results, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/veneers-vs-braces": {"title": "Veneers vs Braces London | Which Is Better for Straightening?", "description": "Compare veneers vs braces in London. Understand the key differences in purpose, cost, treatment time, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/veneers-vs-composite-bonding": {"title": "Veneers vs Composite Bonding London | Key Differences & Cost", "description": "Compare porcelain veneers vs composite bonding in London. Understand the key differences in cost, longevity, aesthetics, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/veneers-vs-lumineers": {"title": "Veneers vs Lumineers London | Key Differences & Suitability", "description": "Compare veneers vs Lumineers in London. Understand the key differences in thickness, tooth preparation, aesthetics, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/veneers-vs-teeth-whitening": {"title": "Veneers vs Teeth Whitening London | Which Is Better for You?", "description": "Compare veneers vs teeth whitening in London. Understand the key differences in cost, longevity, stain effectiveness, and suitability. Book a consultation at Smile Dentist."},
  "/compare-treatments/white-fillings-vs-silver-fillings": {"title": "White Fillings vs Silver Fillings | Cost & Differences", "description": "Compare white composite fillings vs silver amalgam fillings. Understand the differences in appearance, strength, cost, and longevity to choose the right filling material."},
  "/complaints": {"title": "Complaints Procedure | Smile Dentist London", "description": "Our complaints procedure outlines how to raise concerns about your care at Smile Dentist. We are committed to resolving issues promptly and fairly."},
  "/composite-bonding-london/composite-bonding-cost": {"title": "Composite Bonding Cost London | £395 per Tooth", "description": "Composite bonding in London at £395 per tooth (£197.50 with membership). Hand-sculpted by GDC-registered dentists, no drilling, completed in one appointment. SW7 and EC4 clinics."},
  "/conditions": {"title": "Dental Conditions | Smile Dentist London", "description": "Learn about common dental conditions including toothache, bleeding gums, cavities, and more. Understand symptoms and when professional assessment may help."},
  "/conditions/bad-breath-halitosis": {"title": "Bad Breath (Halitosis) Treatment | Smile Dentist London", "description": "Learn about the causes of bad breath (halitosis), oral health factors, and when professional dental assessment may help manage persistent breath odour."},
  "/conditions/bad-taste-in-mouth": {"title": "Bad Taste in Mouth (Dental Causes) | Smile Dentist London", "description": "A persistent bad taste in the mouth may be linked to dental problems. Learn possible oral causes and when dental assessment may help."},
  "/conditions/bite-feels-off-malocclusion": {"title": "Bite Feels Off (Malocclusion) | Smile Dentist London", "description": "Learn why your bite may feel uneven or uncomfortable, possible malocclusion causes, and when professional dental assessment may help."},
  "/conditions/bleeding-gums": {"title": "Bleeding Gums When Brushing | Smile Dentist London", "description": "Gums bleeding when brushing may indicate gum inflammation. Learn common causes and when dental assessment may help."},
  "/conditions/broken-denture": {"title": "Broken Denture Repair | Smile Dentist London", "description": "Learn common causes of broken dentures, potential effects on comfort and chewing, and when professional dental assessment may help."},
  "/conditions/broken-tooth": {"title": "Broken Tooth Treatment London | Same-Day Emergency Care", "description": "Broken a tooth? Learn about causes, risks, and restoration options including crowns, fillings, and emergency stabilisation at Smile Dentist in South Kensington, London."},
  "/conditions/cavities": {"title": "Cavities Treatment | Smile Dentist London", "description": "Learn what cavities are, their causes and symptoms, and how dental fillings and other treatments may restore teeth following professional assessment."},
  "/conditions/chipped-tooth": {"title": "Chipped Tooth Repair | Smile Dentist London", "description": "Chipped a tooth? Learn causes, risks and restoration options including composite bonding and cosmetic contouring in London."},
  "/conditions/cracked-tooth-syndrome": {"title": "Cracked Tooth Syndrome Diagnosis & Treatment | London", "description": "Cracked tooth syndrome can cause pain when biting. Learn symptoms, diagnosis, imaging and restoration options in London."},
  "/conditions/craze-lines": {"title": "Craze Lines on Teeth | Smile Dentist London", "description": "Fine lines on teeth may be craze lines in enamel. Learn what causes them and when dental assessment may be recommended."},
  "/conditions/crooked-teeth": {"title": "Crooked Teeth | Causes & Treatment Options London", "description": "Learn what causes crooked teeth, associated concerns, and treatment options available after professional dental assessment in London."},
  "/conditions/crossbite": {"title": "Crossbite Treatment | Smile Dentist London", "description": "Learn what a crossbite is, possible causes, and when professional dental assessment may help evaluate bite alignment concerns."},
  "/conditions/crowded-teeth": {"title": "Crowded Teeth Treatment | Smile Dentist London", "description": "Learn what causes crowded teeth, possible oral health effects, and when professional dental assessment may help evaluate alignment concerns."},
  "/conditions/dark-tooth": {"title": "Dark Tooth or Grey Tooth | Smile Dentist London", "description": "A tooth turning grey may indicate internal tooth changes or trauma. Learn possible causes and how dentists assess tooth discolouration."},
  "/conditions/dental-abscess": {"title": "Dental Abscess: Causes & Treatment | Smile Dentist London", "description": "A dental abscess is a bacterial infection requiring professional care. Learn symptoms, risks and treatment options in London."},
  "/conditions/dry-mouth-xerostomia": {"title": "Dry Mouth (Xerostomia) Treatment | Smile Dentist London", "description": "Learn about the causes of dry mouth (xerostomia), oral health risks, and when professional dental assessment may help manage reduced saliva flow."},
  "/conditions/dry-socket-after-extraction": {"title": "Dry Socket After Extraction | Smile Dentist London", "description": "Learn about dry socket after tooth extraction, possible causes, symptoms, and when professional dental assessment may be appropriate."},
  "/conditions/enamel-erosion": {"title": "Enamel Erosion (Acid Wear) | Smile Dentist London", "description": "Learn about enamel erosion, its causes, symptoms, and how dentists assess acid wear on teeth to help protect and manage tooth structure."},
  "/conditions/gaps-between-teeth": {"title": "Gaps Between Teeth (Diastema) | Smile Dentist London", "description": "Learn about gaps between teeth (diastema), common causes of spacing, and when professional dental assessment may help evaluate treatment options."},
  "/conditions/gingivitis": {"title": "Gingivitis (Bleeding Gums) | Smile Dentist London", "description": "Bleeding gums may indicate gingivitis. Learn causes, symptoms and how dentists assess and manage early gum disease."},
  "/conditions/gum-boil": {"title": "Gum Boil (Parulis) Treatment | Smile Dentist London", "description": "Notice a gum boil or pimple on the gum? Learn possible causes, infection risks, and treatment options following professional dental assessment."},
  "/conditions/gum-disease": {"title": "Gum Disease Treatment | Smile Dentist London", "description": "Learn about gum disease, its symptoms and causes, and how dentists assess and manage gingivitis and periodontal conditions."},
  "/conditions/jaw-clenching": {"title": "Jaw Clenching Treatment | Smile Dentist London", "description": "Learn about jaw clenching, possible causes, and when professional dental assessment may help manage jaw tension and protect oral health."},
  "/conditions/jaw-clicking-popping": {"title": "Jaw Clicking or Popping | Smile Dentist London", "description": "Learn about jaw clicking or popping sounds, possible TMJ causes, and when professional dental assessment may help manage jaw joint symptoms."},
  "/conditions/loose-crown": {"title": "Loose Crown or Fallen Crown | Smile Dentist London", "description": "Lost or loose dental crown? Learn possible causes and how crowns may be re-cemented or replaced following professional dental assessment."},
  "/conditions/loose-denture-denture-sores": {"title": "Loose Denture or Denture Sores | Smile Dentist London", "description": "Learn why dentures may become loose or cause sore spots, possible causes of irritation, and when professional dental assessment may help."},
  "/conditions/loose-tooth-adult": {"title": "Loose Tooth in Adults | Smile Dentist London", "description": "Learn possible causes of a loose tooth in adults, potential oral health concerns, and when professional dental assessment may be appropriate."},
  "/conditions/lost-filling": {"title": "Lost Filling Replacement | Smile Dentist London", "description": "Lost a filling? Learn why fillings fall out, possible risks, and when a replacement filling may be needed in London."},
  "/conditions/missing-tooth": {"title": "Missing Tooth Solutions | Smile Dentist London", "description": "Learn about common causes of missing teeth, possible oral health effects, and when professional dental assessment may help explore restoration options."},
  "/conditions/mouth-ulcers-aphthous-ulcers": {"title": "Mouth Ulcers (Aphthous Ulcers) | Smile Dentist London", "description": "Learn about the causes of mouth ulcers (aphthous ulcers), symptoms, and when professional dental assessment may help manage recurring oral ulcers."},
  "/conditions/open-bite": {"title": "Open Bite Treatment | Smile Dentist London", "description": "Learn what an open bite is, possible causes, and when professional dental assessment may help evaluate bite alignment concerns."},
  "/conditions/oral-thrush-mouth-yeast-infection": {"title": "Oral Thrush Treatment | Smile Dentist London", "description": "Learn about oral thrush (mouth yeast infection), possible causes, symptoms, and when professional dental assessment may help manage the condition."},
  "/conditions/overbite": {"title": "Overbite Treatment | Smile Dentist London", "description": "Learn what an overbite is, possible causes, and when professional dental assessment may help manage bite alignment concerns."},
  "/conditions/overjet": {"title": "Overjet (Buck Teeth) Treatment | Smile Dentist London", "description": "Learn what an overjet is, possible causes of protruding front teeth, and when professional dental assessment may help evaluate bite alignment."},
  "/conditions/pain-after-filling": {"title": "Pain After Filling | Smile Dentist London", "description": "Learn why sensitivity or discomfort may occur after a dental filling and when professional dental assessment may be helpful."},
  "/conditions/pain-when-biting": {"title": "Pain When Biting Tooth | Smile Dentist London", "description": "Pain when biting may indicate a cracked tooth, infection, or bite issue. Learn possible causes and treatment options following dental assessment."},
  "/conditions/periodontitis": {"title": "Periodontitis Treatment | Smile Dentist London", "description": "Learn about periodontitis, its causes, symptoms and how dentists assess and manage advanced gum disease affecting teeth and bone."},
  "/conditions/receding-gums": {"title": "Receding Gums Treatment | Smile Dentist London", "description": "Receding gums may expose tooth roots and increase sensitivity. Learn common causes and when dental assessment may be recommended."},
  "/conditions/sore-tongue-burning-mouth": {"title": "Sore Tongue (Burning Mouth Symptoms) | Smile Dentist London", "description": "Learn about sore tongue and burning mouth symptoms, possible causes, and when professional dental assessment may help identify underlying factors."},
  "/conditions/swollen-face-jaw-tooth": {"title": "Swollen Face from Tooth Infection | London Dentist", "description": "Facial or jaw swelling from a tooth may indicate infection. Learn causes, risks and when urgent dental assessment is needed."},
  "/conditions/swollen-gums": {"title": "Swollen Gums Causes & Treatment | Smile Dentist London", "description": "Swollen gums may indicate inflammation or gum disease. Learn common causes and when dental assessment may be recommended."},
  "/conditions/teeth-grinding-bruxism": {"title": "Teeth Grinding (Bruxism) Treatment | Smile Dentist London", "description": "Learn about teeth grinding (bruxism), possible causes, and when professional dental assessment may help protect teeth and manage symptoms."},
  "/conditions/temporomandibular-disorder-tmj-pain": {"title": "TMJ Pain (TMD) Treatment | Smile Dentist London", "description": "Learn about temporomandibular disorder (TMD), common causes of TMJ pain, and when professional dental assessment may help manage jaw discomfort."},
  "/conditions/tooth-decay": {"title": "Tooth Decay Treatment | Smile Dentist London", "description": "Learn about tooth decay, its causes, symptoms and treatment options including fillings and preventive care following professional dental assessment."},
  "/conditions/tooth-discolouration": {"title": "Tooth Discolouration & Stains | Smile Dentist London", "description": "Learn what causes tooth discolouration and stains, common symptoms, and how dentists assess tooth colour changes."},
  "/conditions/tooth-sensitivity": {"title": "Tooth Sensitivity to Hot or Cold | Smile Dentist London", "description": "Sensitive teeth when eating hot or cold foods? Learn possible causes such as enamel wear or gum recession and how dentists assess tooth sensitivity."},
  "/conditions/toothache": {"title": "Toothache Treatment | Smile Dentist London", "description": "Learn common causes of toothache, possible risks, and when to seek professional dental assessment in London."},
  "/conditions/underbite": {"title": "Underbite Treatment | Smile Dentist London", "description": "Learn what an underbite is, possible causes, and when professional dental assessment may help evaluate bite alignment concerns."},
  "/conditions/white-spots-on-teeth": {"title": "White Spots on Teeth | Smile Dentist London", "description": "White spots on teeth may indicate enamel changes or early decay. Learn possible causes and how dentists assess these changes."},
  "/conditions/wisdom-tooth-pain-pericoronitis": {"title": "Wisdom Tooth Pain (Pericoronitis) | London Dentist", "description": "Wisdom tooth pain may be caused by pericoronitis. Learn symptoms, risks, and when emergency dental assessment is needed."},
  "/conditions/worn-teeth": {"title": "Worn Teeth (Attrition) Treatment | Smile Dentist London", "description": "Learn about worn teeth caused by grinding or tooth attrition, common symptoms, and how dentists assess and manage tooth wear."},
  "/dental-crowns-london/dental-crown-cost": {"title": "Dental Crown Cost London | £995 per Crown", "description": "Dental crowns in London at £995 per tooth (£497.50 with our £20/month membership). High-strength zirconia or E-max ceramic crowns by GDC-registered dentists. SW7 and EC4 clinics."},
  "/dental-implants-london/dental-implant-cost": {"title": "Dental Implants Cost London | £2,950 inc. Crown", "description": "Dental implants in London — single tooth implant from £2,950 including the implant, abutment and zirconia crown. Placed by GDC-registered implant dentists with 30+ years of experience. SW7 and EC4 clinics."},
  "/dental-veneers-london/veneers-cost": {"title": "Dental Veneers Cost London | From £595 per Tooth", "description": "Dental veneers cost in London: composite veneers from £595 per tooth, porcelain veneers from £1,095 per tooth. 50% off with our £20/month membership. By GDC-registered dentists at our SW7 and EC4 clinics."},
  "/dentures-london/dentures-cost": {"title": "Dentures Cost London | Partial £795 · Full £1,095", "description": "Dentures in London from £795. Acrylic partial £795, full acrylic £1,095, cobalt-chrome £1,395, Valplast/Flexi £895. 50% off with our £20/month membership. GDC-registered dentists at our CQC-regulated South Kensington (SW7) clinic."},
  "/implant-dentures-london": {"title": "Implant Dentures London | Secure Fixed Dentures", "description": "Implant-retained dentures in London — secure, fixed dentures anchored by dental implants. No slipping, no adhesive. Consultations available. Book today."},
  "/membership-terms": {"title": "Dental Membership Terms | Smile Dentist London", "description": "Dental membership policy, terms and conditions for the Smile Dentist membership programme. Clear, fair, and transparent terms."},
  "/privacy-policy": {"title": "Privacy Policy | Smile Dentist London", "description": "Read our privacy policy to understand how Smile Dentist collects, uses, and protects your personal data in accordance with UK GDPR."},
  "/root-canal-london/root-canal-cost-london": {"title": "Root Canal Cost London | From £695 Front · £895 Molar", "description": "Root canal treatment in London from £695 (front tooth) to £895 (molar). 50% off with our £20/month membership. Single-visit where clinically possible, by GDC-registered dentists at our CQC-regulated SW7 clinic."},
  "/teeth-whitening-london/teeth-whitening-cost": {"title": "Teeth Whitening Cost London | £199 Limited Offer", "description": "Teeth whitening in London now £199 for everyone (limited-time offer, usually £399). Dentist-prescribed Boutique home whitening with custom trays. No hidden fees. SW7 & EC4 clinics."},
  "/terms": {"title": "Terms & Conditions | Smile Dentist London", "description": "Terms and conditions for Smile Dentist services, membership, and website usage."},
  "/valplast-dentures-london": {"title": "Valplast Dentures London | Flexible Partial Dentures", "description": "Valplast flexible partial dentures in London — metal-free, lightweight and virtually invisible. Ideal for front teeth. From £497.50 for members."},
  "/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost": {"title": "Wisdom Tooth Extraction Cost London | From £250", "description": "Wisdom tooth extraction in London from £250 (simple) up to £650 (full surgical). Transparent fees, GDC-registered surgical dentists, same-day emergency appointments. SW7 & EC4 clinics."},
};

/** Structured data rendered on every page (both clinics). */
export const SITE_JSONLD: unknown = [
  {
    "@type": "Dentist",
    "@id": "https://www.smiledentist.co.uk/#dentist-south-kensington",
    "name": "Smile Dentist South Kensington",
    "url": "https://www.smiledentist.co.uk",
    "image": [
      "https://www.smiledentist.co.uk/dr_yasha_shirazi_new_wellcome_image%20copy.jpg"
    ],
    "description": "Smile Dentist in South Kensington, London offering cosmetic dentistry, dental implants, smile makeovers, and general dental care. 50% off treatments for members.",
    "telephone": "+44 20 70434314",
    "email": "info@smiledentist.co.uk",
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "medicalSpecialty": "Dentistry",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 Old Brompton Road",
      "addressLocality": "South Kensington",
      "addressRegion": "London",
      "postalCode": "SW7 3DL",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4948,
      "longitude": -0.1842
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Wednesday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Thursday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "@id": "https://www.southkenmd.co.uk/#organization",
      "name": "South Kensington Medical and Dental",
      "url": "https://www.southkenmd.co.uk",
      "telephone": "+44 20 70434314",
      "priceRange": "££",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765881695/IMG_2016_2_r5vjdp.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Old Brompton Road",
        "addressLocality": "South Kensington",
        "addressRegion": "London",
        "postalCode": "SW7 3DL",
        "addressCountry": "GB"
      }
    }
  },
  {
    "@type": "Dentist",
    "@id": "https://www.smiledentist.co.uk/#dentist-city-of-london",
    "name": "Smile Dentist City of London",
    "url": "https://www.smiledentist.co.uk",
    "image": [
      "https://www.smiledentist.co.uk/dr_yasha_shirazi_new_wellcome_image%20copy.jpg"
    ],
    "description": "Smile Dentist in City of London, London offering cosmetic dentistry, dental implants, smile makeovers, and general dental care. 50% off treatments for members.",
    "telephone": "+44 20 70434314",
    "email": "info@smiledentist.co.uk",
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "medicalSpecialty": "Dentistry",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 Ave Maria Lane",
      "addressLocality": "City of London",
      "addressRegion": "London",
      "postalCode": "EC4M 7AQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5146,
      "longitude": -0.1035
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "@id": "https://www.southkenmd.co.uk/#organization",
      "name": "South Kensington Medical and Dental",
      "url": "https://www.southkenmd.co.uk",
      "telephone": "+44 20 70434314",
      "priceRange": "££",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765881695/IMG_2016_2_r5vjdp.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Old Brompton Road",
        "addressLocality": "South Kensington",
        "addressRegion": "London",
        "postalCode": "SW7 3DL",
        "addressCountry": "GB"
      }
    }
  }
];

/** Page-specific structured data, mirrored from the live site. */
export const PAGE_JSONLD: Record<string, unknown[]> = {
  "/": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Smile Dentist",
      "url": "https://www.smiledentist.co.uk",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "300",
        "reviewCount": "300"
      }
    }
  ],
  "/membership": [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dental Membership Plan",
      "provider": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": [
        {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "GBP",
          "description": "Standard Price"
        },
        {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "GBP",
          "description": "Member Price (50% off)"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Membership",
          "item": "https://www.smiledentist.co.uk/membership"
        }
      ]
    }
  ],
  "/fees": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fees",
          "item": "https://www.smiledentist.co.uk/fees"
        }
      ]
    }
  ],
  "/booking": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Book Appointment",
          "item": "https://www.smiledentist.co.uk/booking"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Smile Dentist London",
      "url": "https://www.smiledentist.co.uk",
      "telephone": "+44 20 70434314",
      "medicalSpecialty": "Dentistry",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.smiledentist.co.uk/booking",
          "actionPlatform": [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Dental Appointment"
        }
      }
    }
  ],
  "/treatments": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        }
      ]
    }
  ],
  "/team": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        }
      ]
    }
  ],
  "/contact": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.smiledentist.co.uk/contact"
        }
      ]
    }
  ],
  "/results-london": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Results",
          "item": "https://www.smiledentist.co.uk/results-london"
        }
      ]
    }
  ],
  "/cosmetic-dentistry-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Cosmetic Dentistry",
      "description": "Enhance your smile with Dr Yasha. Expert cosmetic dentistry including Porcelain Veneers, Composite Bonding and Smile Makeovers.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cosmetic Dentistry",
          "item": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        }
      ]
    }
  ],
  "/thank-you": [],
  "/blog": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.smiledentist.co.uk/blog"
        }
      ]
    }
  ],
  "/south-kensington": [
    {
      "@type": "Dentist",
      "@id": "https://www.smiledentist.co.uk/#dentist-south-kensington",
      "name": "Smile Dentist South Kensington",
      "url": "https://www.smiledentist.co.uk",
      "image": [
        "https://www.smiledentist.co.uk/dr_yasha_shirazi_new_wellcome_image%20copy.jpg"
      ],
      "description": "Smile Dentist in South Kensington, London offering cosmetic dentistry, dental implants, smile makeovers, and general dental care. 50% off treatments for members.",
      "telephone": "+44 20 70434314",
      "email": "info@smiledentist.co.uk",
      "priceRange": "££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": [
        "Cash",
        "Credit Card",
        "Debit Card"
      ],
      "medicalSpecialty": "Dentistry",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Old Brompton Road",
        "addressLocality": "South Kensington",
        "addressRegion": "London",
        "postalCode": "SW7 3DL",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.4948,
        "longitude": -0.1842
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Wednesday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Tuesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "parentOrganization": {
        "@type": "MedicalOrganization",
        "@id": "https://www.southkenmd.co.uk/#organization",
        "name": "South Kensington Medical and Dental",
        "url": "https://www.southkenmd.co.uk",
        "telephone": "+44 20 70434314",
        "priceRange": "££",
        "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765881695/IMG_2016_2_r5vjdp.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20 Old Brompton Road",
          "addressLocality": "South Kensington",
          "addressRegion": "London",
          "postalCode": "SW7 3DL",
          "addressCountry": "GB"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "South Kensington",
          "item": "https://www.smiledentist.co.uk/south-kensington"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Smile Dentist South Kensington NHS or private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist is a private dental practice. We offer transparent pricing with no hidden fees. Our membership plan gives patients 50% off all treatments for just £20 per month, making private dentistry accessible and affordable."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a dental check-up cost in South Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A comprehensive dental examination costs £95 for non-members, or just £47.50 for members. This includes a full assessment of your teeth, gums, and oral health, plus oral cancer screening. X-rays are £20 each (£10 for members)."
          }
        },
        {
          "@type": "Question",
          "name": "How much do porcelain veneers cost at Smile Dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porcelain veneers start from £1,095 per tooth for non-members, or from £547.50 per tooth for members. We use high-quality, lab-crafted ceramic veneers designed for natural aesthetics and long-term durability. A full consultation is required before any treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Is Smile Dentist CQC registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Smile Dentist South Kensington is fully registered with the Care Quality Commission under Medical and Dental Limited (Provider ID: 1-20629579981). All our dentists are registered with the General Dental Council (GDC). You can verify our registration on the CQC website."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get to Smile Dentist from South Kensington Station?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are a 3-minute walk from South Kensington Station (District, Circle, and Piccadilly lines). Exit the station, turn left onto Old Brompton Road, and we are located at number 20 — directly opposite the Lamborghini London dealership. Pay-and-display parking is also available on surrounding streets."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency dental appointments in South Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer same-day emergency dental appointments. Whether you have a toothache, broken tooth, lost filling, or dental abscess, call us on 020 70434314 and we will aim to see you as quickly as possible. Emergency consultations cost £95 (£47.50 for members)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer payment plans or finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept all major credit and debit cards including Visa, Mastercard, and American Express. For larger treatments such as veneers, implants, and smile makeovers, we can discuss payment options during your consultation. Our membership plan also halves the cost of all treatments."
          }
        },
        {
          "@type": "Question",
          "name": "What are your opening hours in South Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open 7 days a week. Monday, Wednesday: 9am–6pm. Tuesday, Thursday: 9am–8pm (late nights). Friday: 9am–5pm. Saturday and Sunday: 10am–4pm. Late-evening appointments are ideal for patients who work during the day."
          }
        }
      ]
    }
  ],
  "/city-of-london": [
    {
      "@type": "Dentist",
      "@id": "https://www.smiledentist.co.uk/#dentist-city-of-london",
      "name": "Smile Dentist City of London",
      "url": "https://www.smiledentist.co.uk",
      "image": [
        "https://www.smiledentist.co.uk/dr_yasha_shirazi_new_wellcome_image%20copy.jpg"
      ],
      "description": "Smile Dentist in City of London, London offering cosmetic dentistry, dental implants, smile makeovers, and general dental care. 50% off treatments for members.",
      "telephone": "+44 20 70434314",
      "email": "info@smiledentist.co.uk",
      "priceRange": "££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": [
        "Cash",
        "Credit Card",
        "Debit Card"
      ],
      "medicalSpecialty": "Dentistry",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 Ave Maria Lane",
        "addressLocality": "City of London",
        "addressRegion": "London",
        "postalCode": "EC4M 7AQ",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5146,
        "longitude": -0.1035
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "parentOrganization": {
        "@type": "MedicalOrganization",
        "@id": "https://www.southkenmd.co.uk/#organization",
        "name": "South Kensington Medical and Dental",
        "url": "https://www.southkenmd.co.uk",
        "telephone": "+44 20 70434314",
        "priceRange": "££",
        "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765881695/IMG_2016_2_r5vjdp.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "20 Old Brompton Road",
          "addressLocality": "South Kensington",
          "addressRegion": "London",
          "postalCode": "SW7 3DL",
          "addressCountry": "GB"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "City of London",
          "item": "https://www.smiledentist.co.uk/city-of-london"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is your City of London clinic located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our City of London clinic is at 5 Ave Maria Lane, London EC4M 7AQ — just off Ludgate Hill and around two minutes’ walk from St Paul’s Cathedral, in the heart of the Square Mile."
          }
        },
        {
          "@type": "Question",
          "name": "What is the nearest Tube station to the clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "St Paul’s Station (Central line) is the closest, around a 3-minute walk away. Exit the station and head south past St Paul’s Cathedral; 5 Ave Maria Lane is just off Ludgate Hill."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get to the clinic from Blackfriars or other stations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Blackfriars Station (District, Circle & Thameslink) is a 5-minute walk to the north of the clinic. City Thameslink is a 4-minute walk — exit onto Ludgate Hill and walk east. Farringdon Station (Elizabeth line) is around an 8-minute walk. Bus routes 4, 11, 15, 17, 23, 26 and 76 stop on Ludgate Hill, Cheapside and Newgate Street, all within a 3-minute walk."
          }
        },
        {
          "@type": "Question",
          "name": "What are the opening hours of the City of London clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The City of London clinic is open Monday to Thursday, 8am to 6pm, and Friday, 8am to 5pm — early-morning starts designed around City working schedules. The clinic is closed at weekends, but patients are welcome at our South Kensington clinic on Saturdays and Sundays."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available at the City of London clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a full range of private and cosmetic dentistry, including porcelain veneers, composite bonding, teeth whitening, smile makeovers, dental implants, crowns, bridges, root canal treatment, dentures, clear aligners (Pro-Aligners), dental examinations, hygiene appointments and emergency dental care. Suitability for any treatment is confirmed following a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book online through the booking page on our website, call us on 020 70434314, or email info@smiledentist.co.uk. Same-day emergency appointments are subject to availability."
          }
        },
        {
          "@type": "Question",
          "name": "What happens at my first appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your first visit includes a full dental examination with one of our GDC-registered dentists, a discussion of your concerns and goals, and a personalised treatment plan with clear pricing. A dental examination costs £95 (£47.50 for members)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency dental appointments in the City of London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer same-day emergency dental appointments at the City of London clinic, subject to availability. An emergency consultation costs £95 (£47.50 for members). Call 020 70434314 as early as possible so we can fit you in."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my Smile Dentist membership at the City of London clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Smile Dentist Membership is valid at both the South Kensington and City of London clinics. For £20 per month, members receive 50% off most treatments (dental implants are excluded from the membership discount)."
          }
        },
        {
          "@type": "Question",
          "name": "Are the same dentists available as at South Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The same team of GDC-registered dentists and hygienists works across our South Kensington and City of London clinics, led by Dr. Yasha Y Shirazi (GDC: 195843), our Principal Dentist and Clinical Director."
          }
        }
      ]
    }
  ],
  "/smile-makeover-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Smile Makeover",
      "description": "Comprehensive smile makeover combining multiple cosmetic treatments for a complete transformation.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Smile Makeover",
          "item": "https://www.smiledentist.co.uk/smile-makeover-london"
        }
      ]
    }
  ],
  "/teeth-whitening-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Teeth Whitening",
      "description": "Professional teeth whitening in London by experienced GDC-registered dentists. Custom trays & safe home kits from £199. Book today.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "399",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Teeth Whitening",
          "item": "https://www.smiledentist.co.uk/teeth-whitening-london"
        }
      ]
    }
  ],
  "/composite-bonding-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Composite Bonding",
      "description": "Repair chips, close gaps and reshape teeth with composite bonding in London. Natural-looking results from just £197 per tooth.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "395",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Composite Bonding",
          "item": "https://www.smiledentist.co.uk/composite-bonding-london"
        }
      ]
    }
  ],
  "/porcelain-veneers-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Porcelain Veneers",
      "description": "Enhance your smile with hand-crafted porcelain veneers in London. Premium quality from £547.50 with our plan. 0% finance available. Book today!",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "1095",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Porcelain Veneers",
          "item": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        }
      ]
    }
  ],
  "/composite-veneers-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Composite Veneers",
      "description": "Hand-sculpted composite veneers in London. A minimally invasive cosmetic treatment to help improve the shape, colour and appearance of teeth, often completed in a single visit where clinically appropriate. From £297.50 with membership.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "595",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Composite Veneers",
          "item": "https://www.smiledentist.co.uk/composite-veneers-london"
        }
      ]
    }
  ],
  "/dental-veneers-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Veneers",
      "description": "Dental veneers in London — thin, tooth-coloured coverings bonded to the front of the teeth to help improve shape, colour, and overall smile appearance. Composite and porcelain veneer options are available, with the most suitable choice confirmed by clinical assessment.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "595",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Veneers",
          "item": "https://www.smiledentist.co.uk/dental-veneers-london"
        }
      ]
    }
  ],
  "/tooth-contouring-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Tooth Contouring",
      "description": "Smooth jagged edges and reshape teeth in one comfortable visit. From £75 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tooth Contouring",
          "item": "https://www.smiledentist.co.uk/tooth-contouring-london"
        }
      ]
    }
  ],
  "/gum-contouring-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Gum Contouring",
      "description": "Gum sculpting to correct a gummy smile and uneven gum lines. From £100 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "200",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gum Contouring",
          "item": "https://www.smiledentist.co.uk/gum-contouring-london"
        }
      ]
    }
  ],
  "/pro-aligners-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Clear Aligners",
      "description": "Straighten teeth discreetly with clear aligners. Affordable alternative to Invisalign from £1000 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "2000",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pro Aligners",
          "item": "https://www.smiledentist.co.uk/pro-aligners-london"
        }
      ]
    }
  ],
  "/missing-teeth-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Missing Teeth Solutions",
      "description": "Explore all options for replacing missing teeth including implants, bridges, and dentures.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Missing Teeth",
          "item": "https://www.smiledentist.co.uk/missing-teeth-london"
        }
      ]
    }
  ],
  "/dental-implants-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "description": "Long-lasting, natural-looking dental implants. A leading solution for missing teeth, from £2,950 including the implant, abutment and zirconia crown.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "2950",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants",
          "item": "https://www.smiledentist.co.uk/dental-implants-london"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dental implants cost at Smile Dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single dental implant including the implant, abutment, and zirconia crown starts from £2,950. Our £20/month membership discount does not apply to dental implants; implant fees are the same whether or not you are a member. A full written treatment plan with costs is provided after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Is implant surgery painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant placement is carried out under local anaesthetic, so you should not feel pain during the procedure. Many patients report less discomfort than expected. Some swelling and tenderness are normal for a few days afterwards and can usually be managed with over-the-counter painkillers."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental implants last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With good oral hygiene and regular dental check-ups, implants can last 20 years or longer. However, longevity depends on individual factors including bone quality, oral hygiene, smoking status, and general health."
          }
        },
        {
          "@type": "Question",
          "name": "Am I suitable for dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most adults with healthy gums and sufficient jawbone are suitable candidates. Factors that can affect suitability include smoking, uncontrolled diabetes, certain medications, and insufficient bone volume. A CT scan at your consultation will assess your bone levels."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the full treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From implant placement to final crown, the process typically takes 3–6 months. Most of this time is the healing phase (osseointegration) where the implant fuses with your jawbone. You wear a temporary tooth during this period."
          }
        },
        {
          "@type": "Question",
          "name": "What is the success rate of dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants have a well-documented success rate, typically reported at around 95% over 10 years in clinical studies. Individual outcomes depend on factors including oral hygiene, smoking, bone quality, and overall health."
          }
        }
      ]
    }
  ],
  "/dental-crowns-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Crowns",
      "description": "Ultra-strong, natural-looking crowns to restore damaged teeth. From £497.50 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "995",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns",
          "item": "https://www.smiledentist.co.uk/dental-crowns-london"
        }
      ]
    }
  ],
  "/dental-bridges-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Bridges",
      "description": "Fixed porcelain bridges for missing teeth. Natural-looking, long-lasting solution.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "995",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Bridges",
          "item": "https://www.smiledentist.co.uk/dental-bridges-london"
        }
      ]
    }
  ],
  "/maryland-bridge-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Maryland Bridge",
      "description": "Maryland bridges (resin-bonded bridges) in London — a minimally invasive, fixed option for replacing a single missing tooth. The false tooth is bonded to the back of adjacent natural teeth using thin wings, typically requiring little or no preparation of the supporting teeth.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "1030",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Maryland Bridge",
          "item": "https://www.smiledentist.co.uk/maryland-bridge-london"
        }
      ]
    }
  ],
  "/dentures-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dentures",
      "description": "Modern, comfortable dentures to replace multiple missing teeth. From £397.50 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "795",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dentures",
          "item": "https://www.smiledentist.co.uk/dentures-london"
        }
      ]
    }
  ],
  "/full-dentures": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Full Dentures",
      "description": "Custom-made full (complete) dentures in London. Removable prosthetic appliances that replace all of the natural teeth in the upper jaw, lower jaw, or both. From £547.50 with membership.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "1095",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Full Dentures",
          "item": "https://www.smiledentist.co.uk/full-dentures"
        }
      ]
    }
  ],
  "/root-canal-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Root Canal Treatment",
      "description": "Save infected teeth with expert root canal treatment. From £247.50 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "495",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Root Canal",
          "item": "https://www.smiledentist.co.uk/root-canal-london"
        }
      ]
    }
  ],
  "/dental-examination-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Examination",
      "description": "A thorough dental exam in London. Digital X-rays & Cancer Screening. Just £30 for New Patients. Clinics in South Kensington & the City of London.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "60",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Examination",
          "item": "https://www.smiledentist.co.uk/dental-examination-london"
        }
      ]
    }
  ],
  "/white-fillings-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "White Fillings",
      "description": "Replace old metal fillings with invisible White Composite Fillings in Central London. Safe, aesthetic & mercury-free. Members pay just £92.50. Book today!",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "185",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Fillings",
          "item": "https://www.smiledentist.co.uk/white-fillings-london"
        }
      ]
    }
  ],
  "/tooth-extraction-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Tooth Extraction",
      "description": "Comfortable tooth extraction and wisdom tooth removal in London. Surgical expertise from Dr. Yasha. Members pay from just £125.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "250",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tooth Extraction",
          "item": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ]
    }
  ],
  "/wisdom-tooth-extraction-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Wisdom Tooth Extraction",
      "description": "Expert wisdom tooth extraction and surgical removal in London. Specialist care for impacted, infected, and problematic wisdom teeth from Dr. Yasha Y Shirazi with same-day emergency appointments available. Advanced digital X-ray imaging, computer-controlled anaesthesia (The Wand®), and minimally invasive surgical techniques. No hospital referral required. Simple extractions from £125 (members), surgical extractions from £325 (members).",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "325",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wisdom Tooth Removal",
          "item": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london"
        }
      ]
    }
  ],
  "/tmj-treatment-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "TMJ Treatment",
      "description": "Assessment and conservative management of temporomandibular joint (TMJ) and temporomandibular disorder (TMD) symptoms, including jaw pain, clicking, and bruxism-related muscle tension. Care may include clinical assessment, custom occlusal splints, self-care guidance, and onward referral where appropriate.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "595",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "TMJ Treatment",
          "item": "https://www.smiledentist.co.uk/tmj-treatment-london"
        }
      ]
    }
  ],
  "/hygiene-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Hygiene",
      "description": "Premium dental hygiene using AirFlow technology. From £44.50 for members.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "89",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hygiene",
          "item": "https://www.smiledentist.co.uk/hygiene-london"
        }
      ]
    }
  ],
  "/periodontal-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Periodontal Treatment",
      "description": "Advanced gum care to treat gingivitis and gum disease. Protect your teeth from gum disease.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "850",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Periodontal",
          "item": "https://www.smiledentist.co.uk/periodontal-london"
        }
      ]
    }
  ],
  "/childrens-dentistry-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Children's Dentistry",
      "description": "Gentle dental care for children. Making dentist visits a positive experience for young patients.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "95",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Children's Dentistry",
          "item": "https://www.smiledentist.co.uk/childrens-dentistry-london"
        }
      ]
    }
  ],
  "/emergency-dental-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Emergency Dental Care",
      "description": "Urgent dental care when you need it. Same-day emergency appointments available. Call 020 70434314.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "95",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Emergency",
          "item": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ]
    }
  ],
  "/dr-yasha-shirazi-cosmetic-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Yasha Y Shirazi",
      "jobTitle": "Principal Dentist & Clinical Director",
      "identifier": "195843",
      "image": "/dr_yasha_shirazi_new_wellcome_image copy.jpg",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-yasha-shirazi-cosmetic-dentist",
      "description": "Meticulous preventative care meets high-quality cosmetic dentistry. Yasha offers complicated surgical extractions, complex treatments, and smile makeovers."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Yasha Y Shirazi",
          "item": "https://www.smiledentist.co.uk/dr-yasha-shirazi-cosmetic-dentist"
        }
      ]
    }
  ],
  "/dr-kamran-yazdi-conservative-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Kamran Yazdi",
      "jobTitle": "Implant Dentist",
      "identifier": "197926",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765880757/dr-kamran-yazdi_image_z69snd.jpg",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-kamran-yazdi-conservative-dentist",
      "description": "Conservative dentistry with postgraduate degrees from UCL Eastman. Believes in preserving as much natural tooth structure as possible."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Kamran Yazdi",
          "item": "https://www.smiledentist.co.uk/dr-kamran-yazdi-conservative-dentist"
        }
      ]
    }
  ],
  "/dr-andreia-phipps-cosmetic-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Andreia Phipps",
      "jobTitle": "Dentist",
      "identifier": "229601",
      "image": "https://res.cloudinary.com/da1zmp1ib/video/upload/v1767383564/dr_Andreia_3x4_ns1t8d.webm",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-andreia-phipps-cosmetic-dentist",
      "description": "Friendly and enthusiastic dentist passionate about cosmetic and aesthetic restorative dentistry. Patient-centred care is at the heart of everything she does."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Andreia Phipps",
          "item": "https://www.smiledentist.co.uk/dr-andreia-phipps-cosmetic-dentist"
        }
      ]
    }
  ],
  "/dr-reza-davari-prosthodontist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Reza Davari",
      "jobTitle": "Dentist",
      "identifier": "302422",
      "image": "https://res.cloudinary.com/da1zmp1ib/video/upload/v1767444905/2026-01-03_12.52.35_vwvhgi.webm",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-reza-davari-prosthodontist",
      "description": "Award-winning dentist with the London Gold Medal. Combines advanced clinical skill with a calm, gentle manner."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Reza Davari",
          "item": "https://www.smiledentist.co.uk/dr-reza-davari-prosthodontist"
        }
      ]
    }
  ],
  "/dr-narges-ameri-implant-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Narges Ameri",
      "jobTitle": "Dentist",
      "identifier": "325081",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765880758/Dr-Narges-Ameri_gejrdv.jpg",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-narges-ameri-implant-dentist",
      "description": "Specialist-trained prosthodontist and implantologist. Former Assistant Professor at Tehran University with expertise in complex restorative cases."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Narges Ameri",
          "item": "https://www.smiledentist.co.uk/dr-narges-ameri-implant-dentist"
        }
      ]
    }
  ],
  "/dr-ayman-mukhtar-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Ayman Mukhtar",
      "jobTitle": "Dentist",
      "identifier": "302583",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1770056149/Dentist-Aymen_Mukhtar_kathli.webp",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-ayman-mukhtar-dentist",
      "description": "King's College London graduate with expertise in oral surgery, extractions, and restorative dentistry. Known for a gentle, patient-centred approach."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Ayman Mukhtar",
          "item": "https://www.smiledentist.co.uk/dr-ayman-mukhtar-dentist"
        }
      ]
    }
  ],
  "/dr-elisabeth-lichtmannegger-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Elisabeth Lichtmannegger",
      "jobTitle": "Dentist",
      "identifier": "319325",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1772277344/Dr._Elisabeth_Lichtmannegger-1_l33mng.webp",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-elisabeth-lichtmannegger-dentist",
      "description": "Qualified from the University of Erlangen-Nuremberg in 2017. Experienced in preventive and restorative dentistry with a gentle, detail-oriented approach."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Elisabeth Lichtmannegger",
          "item": "https://www.smiledentist.co.uk/dr-elisabeth-lichtmannegger-dentist"
        }
      ]
    }
  ],
  "/dr-sam-parsno-implant-dentist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr. Sam Parsno",
      "jobTitle": "Implant Dentist",
      "identifier": "72207",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1772017277/Dr_Sam_Parsno_fgykes.webp",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/dr-sam-parsno-implant-dentist",
      "description": "Over 30 years of implant experience. Trained at the Brånemark Centre, Royal College of Surgeons, and Karolinska Institute. Founder of the London College of Oral Implantology."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Sam Parsno",
          "item": "https://www.smiledentist.co.uk/dr-sam-parsno-implant-dentist"
        }
      ]
    }
  ],
  "/jack-button-dental-hygienist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Jack Button",
      "jobTitle": "Dental Hygienist & Dental Therapist",
      "identifier": "244367",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1767691904/jack-button-mobile-image1_bpm24z_l0lxrf.jpg",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/jack-button-dental-hygienist",
      "description": "Clinical Director and only Dental Hygienist awarded Fellowship to the International Academy for Dental Facial Esthetics."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jack Button",
          "item": "https://www.smiledentist.co.uk/jack-button-dental-hygienist"
        }
      ]
    }
  ],
  "/laila-alhussein-dental-hygienist": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Laila Alhussein",
      "jobTitle": "Dental Hygienist",
      "identifier": "328882",
      "image": "https://res.cloudinary.com/da1zmp1ib/image/upload/v1765880764/laila-alhussein_gdajal.webp",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "GDC Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "General Dental Council",
          "url": "https://www.gdc-uk.org"
        }
      },
      "worksFor": {
        "@type": "Dentist",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "url": "https://www.smiledentist.co.uk/laila-alhussein-dental-hygienist",
      "description": "UCL-trained hygienist dedicated to promoting oral health in a warm, welcoming environment. Passionate about patient comfort and connection."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://www.smiledentist.co.uk/team"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Laila Alhussein",
          "item": "https://www.smiledentist.co.uk/laila-alhussein-dental-hygienist"
        }
      ]
    }
  ],
  "/acrylic-dentures-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Acrylic Dentures",
      "description": "Comfortable acrylic dentures for tooth replacement.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "795",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Acrylic Dentures",
          "item": "https://www.smiledentist.co.uk/acrylic-dentures-london"
        }
      ]
    }
  ],
  "/chrome-dentures-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Chrome Dentures",
      "description": "Durable cobalt-chrome framework dentures for long-lasting wear.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "1295",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chrome Dentures",
          "item": "https://www.smiledentist.co.uk/chrome-dentures-london"
        }
      ]
    }
  ],
  "/compare-treatments": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        }
      ]
    }
  ],
  "/compare-treatments/airflow-cleaning-vs-scaling-polishing": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Airflow vs Scaling & Polishing",
          "item": "https://www.smiledentist.co.uk/compare-treatments/airflow-cleaning-vs-scaling-polishing"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is airflow better than scaling and polishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither method is universally better — they serve different purposes. Airflow cleaning is particularly effective at removing surface stains and biofilm using a gentle jet of air, water, and fine powder. Scaling and polishing is well-suited for removing hardened tartar (calculus) that has built up on the teeth. Your dental hygienist will recommend the most appropriate method, or a combination of both, based on your individual clinical needs."
          }
        },
        {
          "@type": "Question",
          "name": "Which removes stains better — airflow or scaling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airflow cleaning is generally considered more effective at removing surface stains caused by tea, coffee, red wine, and smoking. The fine powder particles reach areas that traditional polishing may not access as easily. However, for heavy tartar deposits, scaling may be needed first before airflow can address the underlying staining. Your hygienist will advise on the best approach."
          }
        },
        {
          "@type": "Question",
          "name": "Is airflow cleaning safe for teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, airflow cleaning is considered a safe and minimally abrasive method of removing stains and biofilm. The fine powder used is gentler on tooth enamel than some traditional polishing pastes. It is suitable for use on natural teeth, implants, crowns, veneers, and orthodontic brackets. Your hygienist will assess suitability during your appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Which is more comfortable — airflow or scaling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many patients find airflow cleaning more comfortable than traditional scaling, particularly those with sensitive teeth. Airflow uses a gentle jet rather than direct contact with metal instruments. However, comfort levels vary between individuals. If you have dental anxiety or sensitivity, let your hygienist know so they can adjust the approach accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "How often should professional teeth cleaning be done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most dental professionals recommend professional cleaning every six months as part of a routine preventative care programme. However, the frequency may vary depending on your individual oral health needs. Patients with gum disease or a higher risk of plaque build-up may benefit from more frequent appointments. Your hygienist will recommend a schedule tailored to your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Is airflow suitable for sensitive teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airflow cleaning is often well-tolerated by patients with sensitive teeth as it uses a gentle jet of air and water rather than direct contact with metal instruments. The fine powder is less abrasive than some traditional polishing methods. However, suitability depends on the cause and severity of your sensitivity, which your hygienist will assess during your appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Does airflow remove stains better than polishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airflow cleaning is generally more effective at removing surface stains, particularly those caused by tea, coffee, red wine, and tobacco. The pressurised jet of fine powder can reach areas between teeth and around the gumline that traditional polishing paste may not access as easily. For the best results, your hygienist may combine airflow with scaling where needed."
          }
        }
      ]
    }
  ],
  "/compare-treatments/all-on-4-vs-all-on-6-dental-implants": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "All-on-4 vs All-on-6",
          "item": "https://www.smiledentist.co.uk/compare-treatments/all-on-4-vs-all-on-6-dental-implants"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is All-on-6 better than All-on-4?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better. All-on-6 uses two additional implants which may offer greater load distribution, while All-on-4 can be suitable where bone volume is more limited. The most appropriate option depends on your individual clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — All-on-4 or All-on-6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both solutions are designed to be long-lasting. Longevity depends on factors including oral hygiene, bone quality, and regular dental care rather than the number of implants alone. Your dentist will discuss realistic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you need more bone for All-on-6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-6 generally requires adequate bone density across a wider area to support the additional implants. All-on-4 uses angled posterior implants which may utilise available bone more efficiently. A CT scan during your consultation will assess your suitability."
          }
        },
        {
          "@type": "Question",
          "name": "Is All-on-4 enough for full mouth teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-4 is a well-established full-arch solution that supports a complete set of teeth on four implants per arch. For many patients it provides sufficient stability and function. Suitability depends on individual bone density and clinical factors."
          }
        },
        {
          "@type": "Question",
          "name": "Which option is more stable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-6 may offer additional stability due to the extra implant points. However, both systems are designed to provide a stable, fixed full-arch restoration. The best option for you depends on your jaw structure and clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How much do All-on-4 and All-on-6 cost in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs vary depending on individual needs and clinical complexity. In the UK, full-arch implant treatments typically range from several thousand pounds. A personalised written quote is provided following your consultation. Visit our fees page for more information."
          }
        }
      ]
    }
  ],
  "/compare-treatments/all-on-4-vs-traditional-implants": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "All-on-4 vs Traditional Implants",
          "item": "https://www.smiledentist.co.uk/compare-treatments/all-on-4-vs-traditional-implants"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between All-on-4 and traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-4 uses four strategically placed implants to support a full arch of fixed teeth. Traditional implants involve placing individual implants — typically one per missing tooth — each supporting a single crown or a short bridge. The best option depends on the number of teeth being replaced and your clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — All-on-4 or traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options are designed to be long-lasting with proper care. Traditional individual implants may offer greater flexibility for future maintenance as each unit is independent. Longevity depends on factors including oral hygiene, bone quality, and regular dental reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Is All-on-4 faster than traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-4 typically involves fewer surgical stages and may allow provisional teeth on the same day. Traditional implants often require a staged approach over several months, particularly if bone grafting is needed. Treatment timelines are confirmed after your clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How many implants are used in each method?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All-on-4 uses four implants per arch to support a full set of fixed teeth. Traditional implants use one implant per missing tooth, so replacing a full arch could require six to ten or more implants. The number recommended depends on your individual case."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options can achieve natural-looking results. Traditional implants closely replicate individual natural teeth emerging from the gum. All-on-4 provides a full-arch restoration designed to look and function like natural teeth. Your dentist will discuss aesthetic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Are traditional implants better for full mouth replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional implants may be preferred when only a few teeth need replacing, as each implant functions independently. For full mouth replacement, All-on-4 is often considered due to fewer implants being needed and potentially shorter treatment time. The best approach depends on your individual clinical assessment."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-crowns-vs-fillings": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns vs Fillings",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-crowns-vs-fillings"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a crown better than a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is inherently better — they serve different purposes. A filling is typically appropriate for smaller areas of decay or minor damage, while a crown is designed to restore and protect a tooth that has been more extensively damaged or weakened. Your dentist will recommend whichever option is most clinically appropriate based on the condition of the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — a crown or a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental crowns generally have a longer expected lifespan than fillings. A well-maintained crown can last many years — often 10 to 15 years or more — while composite fillings typically last 5 to 10 years, depending on the size of the filling, its location, and individual factors such as bite forces and oral hygiene. Both require regular dental check-ups to monitor their condition over time."
          }
        },
        {
          "@type": "Question",
          "name": "When is a crown needed instead of a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crown is typically recommended when a tooth has lost a significant amount of its structure — for example, following a large area of decay, a fracture, or root canal treatment. If a filling would not provide enough structural support to protect the remaining tooth, a crown offers full coverage and greater strength. Your dentist will assess the extent of the damage and advise accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Are fillings strong enough for back teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modern composite fillings can be suitable for back teeth, particularly for small to moderate areas of decay. However, back teeth (molars) bear the greatest chewing forces, so larger cavities in these teeth may be better restored with a crown or an inlay/onlay, which provides greater structural support. Your dentist will recommend the most appropriate option based on the size and location of the cavity."
          }
        },
        {
          "@type": "Question",
          "name": "Can a filling be replaced with a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If a filling has become worn, damaged, or if further decay has developed around it, your dentist may recommend replacing it with a crown — particularly if the remaining tooth structure has become weakened. This is a common and clinically appropriate progression when a filling alone can no longer adequately protect the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Do crowns and fillings look natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both modern dental crowns and composite fillings are designed to match the natural colour and appearance of your teeth. White composite fillings are tooth-coloured and blend seamlessly with natural enamel. Crowns made from materials such as zirconia or e-max porcelain are also carefully shade-matched for a natural-looking result. Your dentist will discuss the aesthetic options available for your specific case."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-crowns-vs-onlays": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns vs Onlays",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-crowns-vs-onlays"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is an onlay better than a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is inherently better — they are designed for different levels of damage. An onlay is a more conservative restoration that preserves more natural tooth structure, making it preferable when sufficient healthy tooth remains. A crown provides full coverage and is more appropriate when a tooth is heavily damaged or weakened. Your dentist will recommend whichever option is most clinically suitable based on the condition of your tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — a crown or an onlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both dental crowns and onlays can last many years with good oral care — typically 10 to 15 years or more. Longevity depends on factors such as the material used, the location of the tooth, bite forces, and how well oral hygiene is maintained. In some cases, onlays may be slightly easier to repair or replace than crowns because less of the original tooth has been altered."
          }
        },
        {
          "@type": "Question",
          "name": "Do onlays preserve more tooth structure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. One of the main advantages of an onlay is that it requires less removal of natural tooth structure compared to a crown. An onlay covers only the damaged portion of the tooth — including one or more cusps — while a crown requires reshaping the entire visible tooth. Where clinically appropriate, preserving more natural tooth is generally considered beneficial for long-term dental health."
          }
        },
        {
          "@type": "Question",
          "name": "When is a crown needed instead of an onlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crown is typically recommended when a tooth has lost a significant amount of its structure — for example, following extensive decay, a large fracture, or root canal treatment. If the remaining tooth is too weakened to support an onlay, a crown provides the full-coverage protection needed to restore function and prevent further breakdown. Your dentist will assess the extent of damage and advise accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Are onlays suitable for large cavities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Onlays can be suitable for moderately large cavities — particularly when the damage extends over one or more cusps of the tooth but sufficient healthy structure remains to support the restoration. However, for very large cavities where the tooth has been significantly weakened, a crown may be the more clinically appropriate option. Your dentist will determine which approach provides the best outcome for your specific case."
          }
        },
        {
          "@type": "Question",
          "name": "What materials are used for onlays and crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both onlays and crowns can be made from high-quality materials such as porcelain, zirconia, or e-max ceramic. These materials are carefully shade-matched to blend naturally with your existing teeth. The choice of material depends on the location of the tooth, the forces it needs to withstand, and aesthetic considerations. Your dentist will discuss the most appropriate material for your restoration."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-crowns-vs-veneers": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns vs Veneers",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-crowns-vs-veneers"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When do you need a crown instead of a veneer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crown is typically recommended when a tooth has been significantly weakened or damaged — for example, following extensive decay, a large fracture, or root canal treatment. Because a crown encases the entire tooth, it provides structural reinforcement that a veneer cannot. Veneers are designed for cosmetic improvement on teeth that are fundamentally healthy but have aesthetic concerns such as discolouration, minor chips, or gaps. Your dentist will assess the condition of the tooth and recommend whichever option is most clinically appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — crowns or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both crowns and porcelain veneers are designed to last many years with proper care — typically 10 to 15 years or more. Longevity depends on factors such as the material used, the location of the tooth, bite forces, and how well oral hygiene is maintained. Crowns may have a slight edge in durability on back teeth where biting forces are greater, while veneers perform excellently on front teeth where aesthetic demands are highest."
          }
        },
        {
          "@type": "Question",
          "name": "Are crowns stronger than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crowns provide greater structural strength because they cover the entire tooth, reinforcing it from all sides. This makes them more suitable for teeth that have been significantly weakened. Veneers are bonded to the front surface only, so they are not designed to provide structural reinforcement — their primary role is cosmetic enhancement. For front teeth that are structurally sound, a veneer may be all that is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more natural — crowns or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both modern crowns and porcelain veneers can achieve excellent, natural-looking results when crafted from high-quality materials such as zirconia, e-max, or feldspathic porcelain. Veneers are specifically designed with cosmetic outcomes as the primary goal and are often the preferred choice for smile makeovers. Crowns can also be made to look very natural, particularly when aesthetic ceramics are used. Your dentist will discuss the best material for your specific case."
          }
        },
        {
          "@type": "Question",
          "name": "Can you have both crowns and veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. It is not uncommon for patients to have a combination of crowns and veneers as part of a comprehensive treatment plan. For example, a damaged back tooth may require a crown for strength, while front teeth may benefit from veneers for cosmetic improvement. Your dentist will design a plan that uses the most appropriate restoration for each tooth based on its individual needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do crowns and veneers require the same amount of tooth preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Crowns require more tooth preparation because the entire tooth must be reshaped to accommodate the full-coverage restoration. Veneers are more conservative — typically requiring only a thin layer of enamel to be removed from the front surface of the tooth. This is one of the key advantages of veneers when the tooth is structurally healthy and the goal is cosmetic improvement."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-fillings-vs-inlays": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Fillings vs Inlays",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-fillings-vs-inlays"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is an inlay better than a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is inherently better — they are designed for different situations. A composite filling is typically the most appropriate and cost-effective option for small to moderate cavities. An inlay is a stronger, laboratory-crafted restoration better suited to moderate to large cavities where a filling may not provide adequate long-term support. Your dentist will recommend the option that is most clinically appropriate based on the size and location of the cavity."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — a filling or an inlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inlays are generally expected to last longer than composite fillings. A well-maintained inlay can last 10 to 15 years or more, while composite fillings typically last 5 to 10 years — though this depends on factors such as the size and location of the restoration, bite forces, and oral hygiene. Both require regular dental check-ups to monitor their condition over time."
          }
        },
        {
          "@type": "Question",
          "name": "Are inlays stronger than fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, inlays are typically stronger than composite fillings. Because they are fabricated in a dental laboratory from materials such as porcelain or ceramic, inlays are harder and more resistant to wear. This makes them particularly suitable for larger restorations in back teeth where biting forces are greater. However, for smaller cavities, the strength of a composite filling is usually more than sufficient."
          }
        },
        {
          "@type": "Question",
          "name": "When is a filling not enough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A filling may not be sufficient when the cavity is too large for the composite to reliably support the remaining tooth structure — particularly in back teeth that bear heavy biting forces. If a filling would cover more than approximately half the biting surface, your dentist may recommend an inlay (or in some cases a crown) to provide a stronger, longer-lasting restoration. Your dentist will assess this during your examination."
          }
        },
        {
          "@type": "Question",
          "name": "Are inlays suitable for back teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Inlays are particularly well-suited to back teeth (premolars and molars) because these teeth bear the greatest chewing forces. The strength and durability of a laboratory-crafted inlay make it an excellent option for moderate to large cavities in these areas, where a composite filling may be more prone to wear or fracture over time."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an inlay and an onlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An inlay sits within the cusps (raised points) of a tooth — filling the cavity between them. An onlay extends over one or more cusps, providing greater coverage. Both are laboratory-crafted restorations, but onlays are used when the damage extends beyond the central area of the tooth. Your dentist will determine whether an inlay, onlay, or alternative restoration is most appropriate."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-implants-vs-bridges": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants vs Bridges",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-implants-vs-bridges"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are implants better than bridges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better. Dental implants are a standalone solution that does not affect adjacent teeth and is designed for long-term use. Bridges can be an effective and quicker option but require preparation of neighbouring teeth. The most suitable choice depends on your individual clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — implants or bridges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are generally considered a longer-lasting solution, often lasting many years with proper care. Bridges typically last between 10 and 15 years before they may need replacement. Longevity depends on oral hygiene, regular dental visits, and individual factors."
          }
        },
        {
          "@type": "Question",
          "name": "Are implants more painful than bridges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant placement is a surgical procedure carried out under local anaesthetic, so you should not feel pain during treatment. Some post-operative discomfort is normal and typically managed with over-the-counter pain relief. Bridge preparation is generally less invasive. Your dentist will discuss what to expect during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from a bridge to an implant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. If a bridge fails or you prefer a longer-term solution, your dentist can assess whether a dental implant is suitable. This depends on the condition of the underlying bone and surrounding teeth. A clinical examination is required to determine suitability."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options can achieve natural-looking results. Implants closely replicate a natural tooth as they emerge individually from the gum. Bridges can also look very natural, particularly when crafted from high-quality ceramic materials. Your dentist will discuss aesthetic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do implants damage surrounding teeth compared to bridges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants do not require any preparation of adjacent teeth — they are placed directly into the jawbone as a standalone unit. Traditional bridges require the teeth either side of the gap to be filed down to support the restoration. This is a key clinical distinction your dentist will discuss with you."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-implants-vs-crowns": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants vs Crowns",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-implants-vs-crowns"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a dental implant better than a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is inherently better — they serve different purposes. An implant replaces a missing tooth entirely, whilst a crown restores a damaged tooth that is still present. The most suitable option depends on whether the natural tooth can be saved, which is determined after a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "When do you need an implant instead of a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An implant is typically recommended when a tooth is missing or cannot be saved. If the natural tooth root is healthy enough to support a restoration, a crown may be more appropriate. Your dentist will assess the condition of the tooth and recommend the best approach after examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can a crown replace a missing tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standalone crown cannot replace a missing tooth — it requires an existing tooth or implant to sit on. However, a crown can be part of a bridge that spans a gap, or it can be placed on top of a dental implant to replace a missing tooth. Your dentist will explain the available options during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — implants or crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are generally considered the longer-lasting option, designed to function for many years with proper care. Crowns typically last 10–15 years before they may need replacement, depending on the material used and oral hygiene. Longevity varies between individuals."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more natural — an implant or a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can achieve excellent, natural-looking results when crafted from high-quality ceramic or porcelain materials. A crown preserves the natural tooth root and gum line. An implant closely replicates the appearance of a natural tooth emerging from the gum. Your dentist will discuss aesthetic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Are crowns or implants more durable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implants are generally considered more durable as the titanium post integrates with the jawbone and is designed for long-term use. Crowns are durable but may need replacement over time due to wear. Durability depends on the individual, materials used, and oral hygiene habits."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-implants-vs-dentures": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants vs Dentures",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-implants-vs-dentures"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are dental implants better than dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is inherently better — it depends on your individual circumstances. Implants offer a fixed, long-term replacement that closely mimics natural teeth, whilst dentures are a removable, non-surgical option that can be more affordable. The most suitable choice depends on factors such as bone density, the number of missing teeth, budget, and overall oral health, which are assessed during a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — dental implants or dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are generally considered the longer-lasting option, designed to function for many years with proper care. Dentures typically last 5–10 years before they may need relining, adjusting, or replacing due to changes in the jawbone and gum tissue over time. Longevity varies between individuals."
          }
        },
        {
          "@type": "Question",
          "name": "Are dentures uncomfortable compared to implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some denture wearers experience initial discomfort or difficulty with fit, particularly as the jawbone changes shape over time. Modern dentures have improved significantly in comfort and aesthetics. Implants are fixed in place and generally feel more like natural teeth, but they require surgical placement. Comfort depends on the individual and the quality of the restoration."
          }
        },
        {
          "@type": "Question",
          "name": "Can dentures be replaced with implants later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Patients who currently wear dentures may be candidates for dental implants, provided there is adequate bone density to support the implant. If bone loss has occurred, bone grafting may be an option. A clinical assessment is needed to determine suitability for implant treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural — implants or dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can achieve good aesthetic results with modern materials and techniques. Implants closely replicate the appearance of natural teeth as they emerge from the gum individually. Dentures can also look natural but may shift slightly during eating or speaking. Your dentist will discuss aesthetic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which is cheaper — implants or dentures in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dentures are generally more affordable upfront than dental implants. However, implants are designed for long-term use and may not require the ongoing maintenance, relining, or replacement that dentures typically need over the years. The long-term cost comparison depends on individual circumstances and is discussed during your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dental-implants-vs-partial-dentures": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants vs Partial Dentures",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dental-implants-vs-partial-dentures"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are dental implants better than partial dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is inherently better — it depends on your individual circumstances. Implants offer a fixed, long-term replacement that does not affect neighbouring teeth, whilst partial dentures are a removable, non-surgical option that can be more affordable. The most suitable choice depends on bone density, the number and position of missing teeth, budget, and overall oral health, assessed during a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — dental implants or partial dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are generally considered the longer-lasting option, designed to function for many years with proper care. Partial dentures typically last 5–10 years before they may need relining, adjusting, or replacing due to changes in the jawbone and remaining teeth over time. Longevity varies between individuals."
          }
        },
        {
          "@type": "Question",
          "name": "Are partial dentures uncomfortable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modern partial dentures are designed for comfort, but some wearers experience an initial adjustment period. Fit may change over time as the jawbone and gum tissue change shape. Metal-based (cobalt-chrome) and flexible (Valplast) options tend to offer a better fit than acrylic. Implants are fixed in place and generally feel more like natural teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Can partial dentures be replaced with implants later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Patients who currently wear partial dentures may be candidates for dental implants, provided there is adequate bone density to support the implant. If bone loss has occurred, bone grafting may be an option. A clinical assessment is needed to determine suitability for implant treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural — implants or partial dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can achieve good aesthetic results with modern materials. Implants closely replicate natural teeth as they emerge individually from the gum. Partial dentures can also look natural but may have visible metal clasps depending on the type chosen. Flexible and valplast dentures offer a more discreet alternative. Your dentist will discuss aesthetic options during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which is cheaper — implants or partial dentures in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partial dentures are generally more affordable upfront than dental implants. However, implants are designed for long-term use and may not require the ongoing adjustments, relining, or replacement that partial dentures typically need over the years. The long-term cost comparison depends on individual circumstances."
          }
        }
      ]
    }
  ],
  "/compare-treatments/dentist-whitening-vs-over-the-counter-whitening": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dentist Whitening vs OTC Whitening",
          "item": "https://www.smiledentist.co.uk/compare-treatments/dentist-whitening-vs-over-the-counter-whitening"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is dentist whitening better than over-the-counter options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dentist-supervised whitening may offer advantages for many patients, as it is tailored to individual needs and provided under professional guidance. Over-the-counter products can also produce results, but the outcome depends on the product, the individual's teeth, and how closely instructions are followed. The most suitable option depends on your individual circumstances, which your dentist can assess during a consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Are over-the-counter whitening products safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTC whitening products sold in the UK must comply with regulations limiting the concentration of hydrogen peroxide. When used as directed, they are generally considered safe for most people. However, they are not tailored to your individual dental health — pre-existing conditions such as untreated decay, gum disease, or worn enamel may make them unsuitable. A dental examination before whitening can help identify any concerns."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — dentist whitening or OTC whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, dentist-supervised whitening may produce longer-lasting results because the treatment is tailored to your teeth and uses professionally prescribed concentrations. OTC products may require more frequent reapplication to maintain results. Longevity depends on individual factors including diet, oral hygiene, and lifestyle habits such as smoking or coffee consumption."
          }
        },
        {
          "@type": "Question",
          "name": "Are OTC whitening products as effective as dentist whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results vary depending on the product, the individual, and the nature of the discolouration. OTC products use lower concentrations of whitening agents and are not customised, which may limit their effectiveness for some patients. Dentist-supervised whitening uses custom-made trays and professionally guided concentrations, which can allow for a more controlled and tailored approach. Your dentist can advise on the most appropriate option after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which option is suitable for sensitive teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have sensitive teeth, a dentist-supervised approach may be more appropriate, as your dentist can adjust the concentration and recommend desensitising protocols tailored to your needs. OTC products offer a one-size-fits-all approach, which may not account for individual sensitivity. A clinical assessment is recommended before starting any whitening treatment if you experience tooth sensitivity."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a dental check-up before whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental examination is recommended before any whitening treatment — whether dentist-supervised or OTC. This allows your dentist to identify any underlying issues such as decay, gum disease, or enamel erosion that may need to be addressed first. Whitening on compromised teeth can cause discomfort or may not produce the desired results."
          }
        }
      ]
    }
  ],
  "/compare-treatments/gum-treatment-vs-tooth-extraction": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gum Treatment vs Tooth Extraction",
          "item": "https://www.smiledentist.co.uk/compare-treatments/gum-treatment-vs-tooth-extraction"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can gum disease be treated without extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. Early and moderate gum disease can often be managed with periodontal treatment such as deep cleaning (scaling and root planing), improved oral hygiene, and regular maintenance appointments. The goal of gum treatment is to control the infection and preserve as many natural teeth as possible. However, in advanced cases where teeth have lost significant bone support, extraction may be the most clinically appropriate option. Your dentist will assess this during a thorough examination."
          }
        },
        {
          "@type": "Question",
          "name": "When is extraction necessary for gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extraction may be recommended when a tooth has lost so much bone and gum support that it can no longer function properly, or when the infection around the tooth poses a risk to surrounding teeth and overall oral health. This is typically considered a last resort after other treatment options have been explored. Your dentist will only recommend extraction when it is clinically justified."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth be saved with gum treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many teeth affected by gum disease can be saved with appropriate periodontal treatment, particularly when the condition is identified early. Deep cleaning, improved home care, and regular professional maintenance can help stabilise the condition and preserve teeth. However, outcomes depend on the severity of the disease, the patient's oral hygiene, and individual clinical factors. Your dentist will give you an honest assessment of what is achievable."
          }
        },
        {
          "@type": "Question",
          "name": "Which option is better for long-term oral health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where clinically possible, preserving natural teeth through gum treatment is generally considered preferable for long-term oral health. Natural teeth maintain jawbone density and function in ways that replacements may not fully replicate. However, when a tooth is severely compromised, extraction followed by appropriate replacement can protect the health of surrounding teeth and prevent the spread of infection. The best approach depends entirely on your individual case."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after tooth extraction for gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After extraction, the socket typically heals over a period of one to two weeks. Your dentist will discuss replacement options such as dental implants, bridges, or dentures to restore function and appearance. It is important to address the underlying gum disease to prevent further tooth loss. Ongoing periodontal maintenance is usually recommended alongside any replacement treatment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does gum treatment cost compared to extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal treatment and extraction costs vary depending on the complexity of the case. Gum treatment may involve multiple sessions of deep cleaning and ongoing maintenance, while extraction is typically a single procedure but may require additional cost for tooth replacement. Your dentist will provide a full written estimate before any treatment begins, so you can make an informed decision."
          }
        }
      ]
    }
  ],
  "/compare-treatments/implant-supported-dentures-vs-regular-dentures": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Implant-Supported Dentures vs Regular Dentures",
          "item": "https://www.smiledentist.co.uk/compare-treatments/implant-supported-dentures-vs-regular-dentures"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are implant-supported dentures better than regular dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is inherently better — it depends on your individual circumstances. Implant-supported dentures offer significantly improved stability and chewing ability as they are anchored to dental implants. Regular dentures are non-surgical, more affordable, and accessible to most patients. The most suitable choice depends on bone density, overall health, budget, and personal preferences, assessed during a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Do implant dentures move like regular dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — implant-supported dentures are secured to implants placed in the jawbone, which means they do not slip or move during eating or speaking. Regular dentures rest on the gums and may shift, particularly as the jawbone changes shape over time. This improved stability is one of the primary reasons patients choose implant-supported options."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — implant dentures or regular dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The implant posts are designed for long-term use with proper care. The denture prosthesis attached to them may need periodic replacement, typically every 10–15 years. Regular dentures typically last 5–10 years before they need relining or replacing. Longevity depends on the individual and their oral hygiene habits."
          }
        },
        {
          "@type": "Question",
          "name": "Are implant-supported dentures more comfortable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many patients find implant-supported dentures more comfortable because they are fixed in place and do not press against the gums in the same way. They also allow for improved chewing ability. However, comfort depends on the individual, and implant placement requires a surgical procedure with a healing period."
          }
        },
        {
          "@type": "Question",
          "name": "Are implant-supported dentures suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all patients are suitable candidates. Implant-supported dentures require adequate jawbone density to support the implants. If bone loss has occurred, bone grafting may be needed first. Certain medical conditions may also affect suitability. A clinical assessment is required to determine whether this option is appropriate for you."
          }
        },
        {
          "@type": "Question",
          "name": "How much do implant-supported dentures cost compared to regular dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant-supported dentures have a higher upfront cost due to the surgical placement of implants. Regular dentures are more affordable initially but may require ongoing costs for adjustments, relining, and replacement over time. Final costs depend on individual clinical needs and are confirmed after consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/mini-implants-vs-standard-implants": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mini Implants vs Standard Implants",
          "item": "https://www.smiledentist.co.uk/compare-treatments/mini-implants-vs-standard-implants"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are mini implants as strong as standard implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mini implants are smaller in diameter and are generally not as strong as standard implants for heavy load-bearing restorations. They may be suitable for stabilising dentures or replacing smaller teeth in specific cases. Standard implants offer greater long-term stability for most tooth replacement needs. Suitability depends on the individual case and is assessed during a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — mini implants or standard implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard implants are designed for long-term use, often lasting decades with proper care. Mini implants may have a shorter functional lifespan depending on placement, bone quality, and the forces applied to them. Longevity depends on individual factors including oral hygiene and regular dental reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Are mini implants suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all patients are suitable candidates for mini implants. They may be considered for patients with limited bone density who cannot undergo bone grafting, or for stabilising existing dentures. A clinical assessment is required to determine whether mini implants or standard implants are more appropriate for your situation."
          }
        },
        {
          "@type": "Question",
          "name": "Are mini implants less invasive than standard implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, yes. Mini implants are smaller in diameter and can often be placed with a less invasive procedure, sometimes without the need for incisions or stitches. This may result in a shorter recovery period. However, the suitability of the procedure depends on individual clinical circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both mini and standard implants can support natural-looking restorations. However, standard implants typically offer more options for crown and bridge restorations that closely replicate natural teeth. Mini implants are more commonly used to stabilise dentures rather than support individual crowns. The aesthetic outcome depends on the individual case."
          }
        },
        {
          "@type": "Question",
          "name": "How much do mini implants cost compared to standard implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mini implants generally have a lower per-implant cost than standard implants due to the simpler placement procedure. However, multiple mini implants may be needed, and they may require replacement sooner. Final costs depend on individual clinical needs and are confirmed after consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/periodontal-treatment-vs-hygiene-cleaning": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Periodontal Treatment vs Hygiene Cleaning",
          "item": "https://www.smiledentist.co.uk/compare-treatments/periodontal-treatment-vs-hygiene-cleaning"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is hygiene cleaning enough for gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Routine hygiene cleaning is designed for preventative maintenance and is effective at removing plaque and surface tartar. However, if gum disease has already developed — particularly if there are deep pockets between the teeth and gums — hygiene cleaning alone may not be sufficient. Periodontal treatment involves deeper cleaning beneath the gumline to address the infection directly. Your dentist or hygienist will assess whether routine cleaning is adequate or whether more targeted treatment is needed."
          }
        },
        {
          "@type": "Question",
          "name": "When is periodontal treatment needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal treatment is typically recommended when gum disease has progressed beyond the early stages (gingivitis) to periodontitis, where the infection has affected the deeper tissues and bone supporting the teeth. Signs may include persistent bleeding gums, receding gums, loose teeth, or deep periodontal pockets. Your dentist will determine whether periodontal treatment is appropriate following a thorough clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Which is more effective — periodontal treatment or hygiene cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They serve different purposes, so a direct comparison is not straightforward. Hygiene cleaning is highly effective for routine maintenance and preventing gum disease. Periodontal treatment is specifically designed to manage existing gum disease that routine cleaning cannot address. For patients with healthy gums, regular hygiene cleaning is typically all that is needed. For those with gum disease, periodontal treatment is the more clinically appropriate option."
          }
        },
        {
          "@type": "Question",
          "name": "How often should hygiene cleaning be done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most dental professionals recommend routine hygiene cleaning every six months as part of a preventative care programme. However, the frequency may vary depending on your individual oral health needs. Patients with a history of gum disease or those prone to heavy plaque build-up may benefit from more frequent appointments — typically every three to four months. Your hygienist will recommend a schedule tailored to your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Does periodontal treatment hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal treatment is carried out under local anaesthetic, so you should not feel pain during the procedure. Some post-treatment sensitivity and mild discomfort are normal and typically resolve within a few days. Your dentist will discuss what to expect and provide aftercare instructions to help manage any temporary discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from hygiene cleaning to periodontal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your dentist identifies signs of gum disease during a routine appointment, they may recommend transitioning from standard hygiene cleaning to periodontal treatment. Once the gum disease has been stabilised, you would typically return to a more frequent maintenance schedule that may include elements of both. Your dentist will guide you through the appropriate treatment pathway."
          }
        }
      ]
    }
  ],
  "/compare-treatments/porcelain-veneers-vs-composite-veneers": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Porcelain Veneers vs Composite Veneers",
          "item": "https://www.smiledentist.co.uk/compare-treatments/porcelain-veneers-vs-composite-veneers"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are porcelain veneers better than composite veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — the most suitable type depends on your individual needs, goals, and clinical assessment. Porcelain veneers may offer advantages in terms of longevity and stain resistance, while composite veneers can be a more conservative and affordable option for certain cases. Your dentist can advise on which approach is most appropriate after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which type of veneer lasts longer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, porcelain veneers may last longer than composite veneers. Porcelain veneers can typically last 10 to 15 years or more with proper care, while composite veneers generally last around 5 to 7 years. Longevity depends on individual factors including oral hygiene, diet, and whether you grind or clench your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Are composite veneers cheaper than porcelain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — composite veneers are generally more affordable than porcelain veneers. At our London practice, composite veneers start from £595 per tooth, while porcelain veneers start from £1,095 per tooth. The final cost depends on the number of teeth being treated and the complexity of each case. A personalised quote is provided after consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more natural — porcelain or composite veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both types of veneers can achieve a natural-looking result when placed by an experienced dentist. Porcelain veneers are often considered to have a slight advantage in mimicking the translucency and light-reflecting properties of natural enamel, particularly for more complex cases. Composite veneers can also produce excellent results, especially for minor cosmetic improvements. The outcome depends on the individual case and the skill of the clinician."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers are not suitable for all patients. A clinical assessment is required to determine whether veneers are appropriate for your teeth, gums, and bite. Patients with significant tooth decay, advanced gum disease, or insufficient enamel may need alternative treatments. Your dentist will discuss the most appropriate options after examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can composite veneers be replaced with porcelain later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, composite veneers can be replaced with porcelain veneers at a later stage if desired. Since composite veneers generally require less tooth preparation, this transition may be straightforward — though it depends on the individual case. Your dentist can advise on long-term options during your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/professional-whitening-vs-home-kits": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Professional Whitening vs Home Kits",
          "item": "https://www.smiledentist.co.uk/compare-treatments/professional-whitening-vs-home-kits"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is professional whitening better than home kits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dentist-supervised whitening may offer advantages for many patients, as it is tailored to individual needs and provided under professional guidance. However, the most suitable option depends on your individual circumstances — including the type of discolouration, your dental health, and your goals. Your dentist can advise on the most appropriate approach after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Are home whitening kits safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home whitening kits sold in the UK must comply with regulations limiting the concentration of hydrogen peroxide to 0.1%. When used as directed, they are generally considered safe for most people. However, they are not tailored to your individual dental health — pre-existing conditions such as untreated decay, gum disease, or worn enamel may make them unsuitable. A dental examination before whitening is recommended to identify any concerns."
          }
        },
        {
          "@type": "Question",
          "name": "Which whitening option lasts longer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, dentist-supervised whitening may produce longer-lasting results because the treatment is tailored to your teeth and uses professionally prescribed concentrations. Home kits may require more frequent reapplication to maintain results. Longevity depends on individual factors including diet, oral hygiene, and lifestyle habits such as smoking or coffee consumption."
          }
        },
        {
          "@type": "Question",
          "name": "Are home kits as effective as dentist whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results vary depending on the product, the individual, and the nature of the discolouration. Home kits use lower concentrations of whitening agents and are not customised, which may limit their effectiveness for some patients. Dentist-supervised whitening uses custom-made trays and professionally guided concentrations, which can allow for a more controlled and tailored approach. Your dentist can advise on the most appropriate option after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which option is more suitable for sensitive teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have sensitive teeth, a dentist-supervised approach may be more appropriate, as your dentist can adjust the concentration and recommend desensitising protocols tailored to your needs. Home kits offer a one-size-fits-all approach, which may not account for individual sensitivity. A clinical assessment is recommended before starting any whitening treatment if you experience tooth sensitivity."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to see a dentist before using a home whitening kit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental examination is recommended before any whitening treatment — whether dentist-supervised or from a home kit. This allows your dentist to identify any underlying issues such as decay, gum disease, or enamel erosion that may need to be addressed first. Whitening on compromised teeth can cause discomfort or may not produce the desired results."
          }
        }
      ]
    }
  ],
  "/compare-treatments/root-canal-vs-dental-implant": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Root Canal vs Dental Implant",
          "item": "https://www.smiledentist.co.uk/compare-treatments/root-canal-vs-dental-implant"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a root canal better than an implant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the condition of the tooth. Where a tooth has enough healthy structure remaining and the infection can be resolved, root canal treatment is generally the preferred option — it preserves your natural tooth, is less invasive, and costs less. However, if the tooth is too damaged to save, or if a previous root canal has failed, a dental implant may provide a more reliable long-term solution. Your dentist will assess your case and recommend whichever option offers the best clinical outcome."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — a root canal or an implant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both can last many years with proper care. A successfully treated root canal tooth, restored with a crown, can last 10 to 15 years or more. Dental implants are designed to be a long-term solution — the titanium root can last decades, while the implant crown may need replacing after 10 to 15 years due to normal wear. Longevity for both depends on oral hygiene, regular check-ups, and individual factors such as bite forces and bone health."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to save a tooth or replace it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where clinically possible, preserving your natural tooth is generally considered the better option. A natural tooth maintains bone density, bite function, and the natural feel of your smile — advantages that even the best implant cannot fully replicate. However, if the tooth is too damaged to be saved reliably, or if keeping it risks further complications, replacing it with a dental implant can provide a strong, functional, and long-lasting alternative."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a root canal fails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment has a high success rate, but in a small number of cases, the tooth may become re-infected or develop new problems. If this happens, your dentist may recommend retreatment (a second root canal), an apicoectomy (a minor surgical procedure), or — if the tooth is no longer saveable — extraction followed by replacement with a dental implant, bridge, or denture. Your dentist will discuss all options and help you choose the most appropriate course of action."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants more durable than root canal treated teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are generally considered very durable — the titanium root integrates with the jawbone and is designed to last for many years. A root canal treated tooth can also be very durable when restored with a crown, but it may be more susceptible to fracture over time, particularly if a significant amount of tooth structure was lost. Both options require good oral hygiene and regular dental check-ups to maintain long-term function."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a dental implant if I have a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. If root canal treatment is successful and the tooth is adequately restored with a crown, there is no need for an implant — your natural tooth can continue to function normally. An implant only becomes relevant if the tooth cannot be saved, if root canal treatment fails, or if the tooth has already been extracted. Your dentist will only recommend an implant when it is clinically appropriate."
          }
        }
      ]
    }
  ],
  "/compare-treatments/root-canal-vs-tooth-extraction": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Root Canal vs Tooth Extraction",
          "item": "https://www.smiledentist.co.uk/compare-treatments/root-canal-vs-tooth-extraction"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a root canal better than extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, saving a natural tooth through root canal treatment is the preferred clinical approach — provided the tooth has enough healthy structure remaining. Root canal treatment preserves your natural bite, prevents neighbouring teeth from shifting, and avoids the need for a replacement. However, if the tooth is too severely damaged, fractured below the gum line, or the infection cannot be resolved, extraction may be the more appropriate option. Your dentist will recommend whichever treatment is best for your specific situation."
          }
        },
        {
          "@type": "Question",
          "name": "Which is more painful — root canal or extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both treatments are carried out under local anaesthetic, so you should not feel pain during either procedure. Root canal treatment has an undeserved reputation for being painful — in reality, the procedure relieves the pain caused by infection. Some patients experience mild tenderness or sensitivity after either treatment, which typically subsides within a few days and can be managed with standard pain relief. Your dentist will ensure you are fully comfortable throughout."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — root canal or extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A successfully treated root canal tooth, typically restored with a crown, can last many years — often 10 to 15 years or more with good oral hygiene and regular check-ups. Once a tooth is extracted, the gap must be managed — either by leaving it (which can cause adjacent teeth to shift) or by replacing it with an implant, bridge, or denture, each with their own expected lifespans. In terms of long-term oral health, preserving the natural tooth is generally considered advantageous where clinically possible."
          }
        },
        {
          "@type": "Question",
          "name": "When is extraction the only option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extraction may be necessary when a tooth is too severely damaged to be saved — for example, if it is fractured vertically below the gum line, if the root canals cannot be accessed or treated, if there is extensive bone loss around the tooth, or if the infection has not responded to previous root canal treatment. Wisdom teeth that are impacted or causing recurrent problems may also require extraction. Your dentist will only recommend extraction when saving the tooth is no longer clinically viable."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after a tooth is removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After extraction, the socket heals over several weeks. Your dentist will provide aftercare instructions to support healing and minimise discomfort. Once healed, you will need to consider how to manage the gap — leaving it long-term can cause neighbouring teeth to shift and affect your bite. Replacement options include dental implants, bridges, or dentures. Your dentist will discuss the most suitable approach based on the location of the tooth and your overall dental health."
          }
        },
        {
          "@type": "Question",
          "name": "Can a tooth always be saved with root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. Root canal treatment is highly successful for many infected or damaged teeth, but it is not suitable in every case. If the tooth has insufficient healthy structure remaining, if the root is fractured, or if there is severe bone loss, the tooth may not be saveable. Your dentist will assess the tooth thoroughly — including X-rays — before recommending whether root canal treatment or extraction is the most appropriate course of action."
          }
        }
      ]
    }
  ],
  "/compare-treatments/same-day-implants-vs-traditional-implants": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Same-Day Implants vs Traditional Implants",
          "item": "https://www.smiledentist.co.uk/compare-treatments/same-day-implants-vs-traditional-implants"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are same-day implants better than traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is inherently better — it depends on the individual. Same-day implants offer the convenience of a temporary tooth on the day of surgery, while traditional implants follow a staged approach with a dedicated healing period. Both can achieve excellent long-term outcomes in suitable candidates. Your dentist will recommend the most appropriate approach after clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Are same-day implants safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day implants are a well-documented procedure when performed on carefully selected patients. Suitability depends on factors including bone quality, the position of the tooth, and overall health. A thorough clinical assessment is required to determine whether immediate placement and loading is appropriate for your case."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — same-day implants or traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both same-day and traditional implants use the same titanium implant posts and are designed for long-term use. Longevity depends on individual factors including oral hygiene, bone quality, and regular dental reviews — not the timing of when the implant was loaded. With proper care, both approaches can last for many years."
          }
        },
        {
          "@type": "Question",
          "name": "Who is suitable for same-day implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same-day implants may be suitable for patients with good bone quality, healthy gums, and no active infection at the implant site. They are often considered when a tooth is being extracted and conditions allow for immediate placement. Not all patients are suitable candidates — a clinical assessment is required to determine the best approach."
          }
        },
        {
          "@type": "Question",
          "name": "Do same-day implants heal differently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The biological healing process (osseointegration) is the same for both approaches — the implant integrates with the jawbone over several months. The key difference is that same-day implants have a temporary restoration fitted immediately, while traditional implants heal under the gum before the final restoration is placed. Both require careful aftercare during the healing period."
          }
        },
        {
          "@type": "Question",
          "name": "How much do same-day implants cost compared to traditional implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost is generally similar as both use the same implant components. Same-day implants may include an additional charge for the temporary restoration fitted on the day of surgery. Final costs depend on individual clinical needs and are confirmed after consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/smile-makeover-vs-orthodontics": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Smile Makeover vs Orthodontics",
          "item": "https://www.smiledentist.co.uk/compare-treatments/smile-makeover-vs-orthodontics"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a smile makeover better than orthodontics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — they serve different purposes. A smile makeover focuses on cosmetic improvements such as colour, shape, and proportion, while orthodontics addresses the alignment and position of your teeth. The most appropriate option depends on your individual clinical needs and aesthetic goals, which your dentist will assess during a consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can orthodontics improve appearance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. By correcting the alignment, spacing, and bite of your teeth, orthodontics can significantly improve the overall appearance of your smile. Straighter teeth are often easier to clean and may also improve long-term oral health. However, orthodontics does not change the colour, shape, or size of individual teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Is orthodontics part of a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can be. In some cases, orthodontic treatment is recommended as a first step before cosmetic procedures to ensure the teeth are in the correct position. Aligning the teeth first can lead to more predictable and aesthetically pleasing results from treatments such as veneers or bonding. Your dentist will advise whether a combined approach is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Which takes longer — a smile makeover or orthodontics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orthodontic treatment typically takes longer, often ranging from 6 to 18 months depending on the complexity of the case. A smile makeover using cosmetic treatments such as bonding or veneers can often be completed in fewer appointments over a shorter timeframe. However, treatment duration varies depending on individual circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "Which gives better long-term results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both approaches can deliver lasting results when properly maintained. Orthodontics addresses the underlying position of the teeth, which is a permanent structural change (provided retainers are worn as advised). Cosmetic treatments may require maintenance or replacement over time. The best long-term outcome depends on your specific needs and how well you maintain your results."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine orthodontics with a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many patients benefit from a phased approach — straightening the teeth first with orthodontics, then refining the appearance with cosmetic treatments such as whitening, bonding, or veneers. This combined approach can deliver comprehensive results. Your dentist will recommend whether this is appropriate during your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/smile-makeover-vs-veneers": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Smile Makeover vs Veneers",
          "item": "https://www.smiledentist.co.uk/compare-treatments/smile-makeover-vs-veneers"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a smile makeover better than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is universally better — they serve different purposes. A smile makeover is a comprehensive treatment plan that may include veneers alongside other procedures such as whitening, bonding, and gum contouring. Veneers alone address the shape, colour, and surface appearance of individual teeth. The most appropriate option depends on your specific concerns and clinical needs, which your dentist will assess during a consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are included in a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A smile makeover is a personalised plan that combines two or more cosmetic treatments. Depending on your needs, it may include porcelain or composite veneers, teeth whitening, composite bonding, gum contouring, or other cosmetic procedures. The exact combination is tailored to your individual goals and clinical situation."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers be part of a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Veneers are one of the most common components of a smile makeover. Many patients combine veneers with other treatments such as whitening or bonding to achieve a more comprehensive result. Your dentist will advise whether veneers alone or a broader makeover plan would be most appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — a smile makeover or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porcelain veneers are one of the longer-lasting cosmetic treatments, typically lasting 10–15 years or more with proper care. The longevity of a smile makeover depends on which treatments are included — some components such as whitening may need periodic refreshing, while veneers and bonding have different maintenance profiles. Your dentist will discuss realistic expectations during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which gives better results — smile makeover or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This depends on the scope of your concerns. If you have multiple aesthetic issues — such as discolouration, uneven teeth, gaps, and gum irregularities — a smile makeover addresses all of these in a coordinated plan. If your primary concern is the shape or colour of specific front teeth, veneers alone may deliver the result you are looking for. Your dentist will recommend the most appropriate approach."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a smile makeover cost compared to veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a smile makeover varies depending on which treatments are included and how many teeth are involved. Veneers at our practice start from £595 for composite and £1,095 for porcelain per tooth. A personalised written quote is always provided following your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/surgical-extraction-vs-simple-extraction": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Surgical vs Simple Extraction",
          "item": "https://www.smiledentist.co.uk/compare-treatments/surgical-extraction-vs-simple-extraction"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a surgical extraction more painful than a simple extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both procedures are carried out under local anaesthetic, so you should not feel pain during either procedure. Surgical extractions may involve more post-operative discomfort due to the nature of the procedure, but this is typically manageable with over-the-counter pain relief and usually resolves within a few days. Your dentist will discuss pain management options during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to recover from a surgical extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery from a simple extraction typically takes a few days, while surgical extraction recovery may take one to two weeks depending on the complexity of the procedure. Your dentist will provide specific aftercare instructions following your treatment. Swelling and minor discomfort are normal and should gradually improve."
          }
        },
        {
          "@type": "Question",
          "name": "Do all wisdom teeth require surgical extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all wisdom teeth require surgical extraction. If a wisdom tooth has fully erupted and is accessible, it may be removed with a simple extraction. However, impacted, partially erupted, or angled wisdom teeth typically require a surgical approach. Your dentist will assess this during a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know which type of extraction I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The type of extraction required depends on the position, condition, and root structure of the tooth. Your dentist will determine this following a thorough clinical examination, which may include dental X-rays. A simple extraction is used for visible, accessible teeth, while a surgical extraction is needed when the tooth is impacted, broken, or has complex root anatomy."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after a tooth is extracted — do I need a replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whether you need a replacement depends on the location and function of the extracted tooth. Wisdom teeth generally do not require replacement. For other teeth, your dentist will discuss options such as dental implants, bridges, or dentures. Leaving a gap can lead to shifting of surrounding teeth, so replacement is often recommended. Your dentist will explain your options during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can a surgical extraction be done under sedation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, sedation options may be available for patients who experience dental anxiety or for more complex surgical extractions. Your dentist will discuss sedation options during your consultation and recommend the most appropriate approach based on your individual needs and the complexity of the procedure."
          }
        }
      ]
    }
  ],
  "/compare-treatments/teeth-whitening-vs-scaling-polishing": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Teeth Whitening vs Scaling & Polishing",
          "item": "https://www.smiledentist.co.uk/compare-treatments/teeth-whitening-vs-scaling-polishing"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does scaling and polishing whiten teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scaling and polishing removes plaque, tartar, and surface stains, which can make teeth appear cleaner and slightly brighter. However, it does not change the underlying colour of your teeth. If your teeth appear discoloured beyond surface staining, dentist-supervised whitening may be more appropriate — your dentist can advise after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which treatment lasts longer — whitening or scaling and polishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, the colour improvement from dentist-supervised whitening may last longer than the cosmetic effects of a scale and polish, depending on individual factors such as diet, oral hygiene, and lifestyle habits. Scaling and polishing is typically recommended every 6 to 12 months as part of ongoing oral health maintenance. Whitening results can be maintained with periodic top-ups."
          }
        },
        {
          "@type": "Question",
          "name": "Is teeth cleaning the same as whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Professional teeth cleaning (scaling and polishing) is a preventative hygiene treatment that removes plaque, tartar, and surface stains to support oral health. Whitening is a cosmetic treatment that uses a bleaching agent to lighten the natural colour of your teeth. They serve different purposes and are often complementary — your dentist can recommend the most suitable approach after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which is better for stains — whitening or polishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the type of staining. Surface stains caused by tea, coffee, or smoking are often effectively addressed by scaling and polishing. Deeper, intrinsic discolouration — such as age-related yellowing or staining from within the tooth — may respond better to dentist-supervised whitening. Your dentist can determine the type of staining and recommend the most appropriate treatment."
          }
        },
        {
          "@type": "Question",
          "name": "How often should scaling and polishing be done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most dental professionals recommend scaling and polishing every 6 to 12 months, depending on your individual oral health needs. Patients who are more prone to plaque or tartar build-up, or those with gum disease, may benefit from more frequent visits. Your dentist or hygienist will advise on the ideal frequency after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have both whitening and scaling and polishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — in fact, many patients benefit from having a scale and polish before whitening. Removing surface stains and tartar first can help ensure the whitening gel makes even contact with the tooth surface, which may improve results. Your dentist can recommend the best sequence based on your individual needs."
          }
        }
      ]
    }
  ],
  "/compare-treatments/veneers-vs-braces": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Veneers vs Braces",
          "item": "https://www.smiledentist.co.uk/compare-treatments/veneers-vs-braces"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are veneers better than braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — the most suitable choice depends on your individual needs and clinical assessment. Veneers are a cosmetic treatment that improves the appearance of teeth without moving them, while braces and aligners are orthodontic treatments that physically reposition teeth. Your dentist can advise on the most appropriate approach after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers fix crooked teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers may be suitable for improving the appearance of mildly misaligned teeth by creating the illusion of a straighter smile. However, veneers do not move or straighten teeth — they mask cosmetic irregularities only. For moderate to severe alignment issues, orthodontic treatment such as braces or clear aligners is generally more appropriate. A clinical assessment is required to determine the best approach."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — veneers or braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The results of orthodontic treatment can be permanent when supported by retainer wear, as the teeth are physically moved into their correct positions. Porcelain veneers typically last 10 to 15 years before they may need replacing, while composite veneers generally last 5 to 7 years. The longevity of either approach depends on individual factors including oral care, lifestyle, and compliance with aftercare recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Are braces more effective than veneers for alignment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For correcting actual tooth alignment, braces and aligners are generally more effective than veneers. Orthodontic treatment moves the teeth into their correct positions, addressing the underlying structural issue. Veneers only change the visible appearance without altering tooth position. In many cases, a combination of both — alignment first, followed by veneers — may produce the most comprehensive result."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both treatments can produce natural-looking results when carried out by an experienced clinician. Braces achieve a natural result by moving your own teeth into better positions, while veneers achieve a natural appearance through custom-crafted shells that replicate tooth shape and colour. The most natural-looking outcome depends on the individual case and the specific concern being addressed."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers a substitute for braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers are not a direct substitute for braces. While veneers can mask the appearance of mildly crooked teeth, they do not correct the underlying alignment. Patients with bite issues, significant crowding, or spacing may require orthodontic treatment to achieve a stable, long-term result. Your dentist will recommend the most suitable approach after a thorough clinical examination."
          }
        }
      ]
    }
  ],
  "/compare-treatments/veneers-vs-composite-bonding": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Veneers vs Composite Bonding",
          "item": "https://www.smiledentist.co.uk/compare-treatments/veneers-vs-composite-bonding"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are veneers better than composite bonding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — the most suitable treatment depends on your individual needs, goals, and clinical assessment. Porcelain veneers may offer advantages in terms of longevity and stain resistance, while composite bonding can be a more conservative and affordable option for certain cases. Your dentist can advise on the most appropriate approach after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — veneers or composite bonding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, porcelain veneers last longer than composite bonding. Porcelain veneers can typically last 10 to 15 years or more with proper care, while composite bonding generally lasts around 5 to 7 years. Longevity depends on individual factors including oral hygiene, diet, and whether you grind or clench your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Is composite bonding cheaper than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — composite bonding is generally more affordable than porcelain veneers. At our London practice, composite bonding starts from £395 per tooth, while porcelain veneers start from £1,095 per tooth. The final cost depends on the number of teeth being treated and the complexity of each case. A personalised quote is provided after consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more natural — veneers or composite bonding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both treatments can achieve a natural-looking result when carried out by an experienced dentist. Porcelain veneers are often considered to have a slight advantage in mimicking the translucency and light-reflecting properties of natural enamel, particularly for more complex cases. Composite bonding can also produce excellent results, especially for minor cosmetic improvements. The outcome depends on the individual case and the skill of the clinician."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers are not suitable for all patients. A clinical assessment is required to determine whether veneers are appropriate for your teeth, gums, and bite. Patients with significant tooth decay, advanced gum disease, or insufficient enamel may need alternative treatments. Your dentist will discuss the most appropriate options after examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can I upgrade from composite bonding to veneers later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, composite bonding can be replaced with porcelain veneers at a later stage if desired. Since composite bonding generally requires minimal or no tooth preparation, this transition may be straightforward — though it depends on the individual case. Your dentist can advise on long-term options during your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/veneers-vs-lumineers": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Veneers vs Lumineers",
          "item": "https://www.smiledentist.co.uk/compare-treatments/veneers-vs-lumineers"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are Lumineers better than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — the most suitable choice depends on your individual needs, goals, and clinical assessment. Lumineers may offer advantages in terms of minimal tooth preparation, while traditional porcelain veneers can address a broader range of cosmetic concerns and may produce a more transformative result. Your dentist can advise on the most appropriate approach after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Do Lumineers last as long as veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, Lumineers can last a comparable length of time to traditional veneers — typically around 10 to 15 years with proper care. However, longevity depends on individual factors including oral hygiene, diet, bite forces, and whether you grind or clench your teeth. Your dentist will discuss expected outcomes based on your individual case."
          }
        },
        {
          "@type": "Question",
          "name": "Are Lumineers thinner than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Lumineers are an ultra-thin veneer system, typically around 0.2–0.3mm thick, compared to approximately 0.5–0.7mm for traditional porcelain veneers. This reduced thickness is what allows Lumineers to be placed with minimal or no tooth preparation in selected cases. However, the thinner profile may not be suitable for all cosmetic situations, particularly where significant colour or shape changes are required."
          }
        },
        {
          "@type": "Question",
          "name": "Do Lumineers require tooth preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lumineers are designed to require minimal or no enamel removal in many cases, which is one of their key advantages. However, some tooth preparation may still be necessary depending on the individual case — for example, to ensure a natural-looking result or to accommodate the additional thickness on the tooth surface. Your dentist will assess whether preparation is needed after examination."
          }
        },
        {
          "@type": "Question",
          "name": "Are Lumineers suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lumineers are not suitable for all patients. Their ultra-thin design means they work best for patients who need minor cosmetic improvements and have naturally light-coloured teeth. Patients with significant discolouration, misalignment, or those requiring major shape changes may benefit more from traditional porcelain veneers. A clinical assessment is required to determine which option is most appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Can Lumineers be removed later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because Lumineers typically require minimal or no enamel removal, they may be considered a more reversible option than traditional veneers in some cases. However, reversibility depends on the individual case and the degree of preparation carried out. Your dentist can discuss the long-term implications during your consultation."
          }
        }
      ]
    }
  ],
  "/compare-treatments/veneers-vs-teeth-whitening": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Veneers vs Teeth Whitening",
          "item": "https://www.smiledentist.co.uk/compare-treatments/veneers-vs-teeth-whitening"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are veneers better than teeth whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither option is universally better — the most suitable choice depends on your individual needs and the nature of the concern you would like to address. Veneers can change the colour, shape, and alignment of your teeth, while whitening focuses specifically on lightening your natural tooth shade. Your dentist will recommend the most appropriate option after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — veneers or whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porcelain veneers typically last 10 to 15 years or more with proper care, while professional teeth whitening results generally last between 6 and 18 months depending on individual factors such as diet and oral hygiene. Top-up treatments can help maintain whitening results. Longevity depends on the individual case."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth whitening remove all stains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional teeth whitening is generally effective for extrinsic (surface) stains caused by food, drink, or smoking. However, intrinsic (internal) stains — such as those caused by medication, trauma, or developmental factors — may not respond well to whitening. In many cases, veneers may be a more suitable option for intrinsic discolouration. Results depend on the type of staining."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers are not suitable for all patients. Candidates generally need to have sufficient enamel, healthy gums, and no significant bite issues. Patients who grind or clench their teeth may need to discuss this with their dentist, as it can affect veneer longevity. A clinical assessment is required to determine suitability."
          }
        },
        {
          "@type": "Question",
          "name": "Which option looks more natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both options can look very natural when carried out by an experienced dentist. Porcelain veneers are custom-designed to match surrounding teeth and closely mimic natural enamel. Professional whitening enhances your existing natural tooth colour. The most natural-looking result depends on the individual case and the outcome you are seeking."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have whitening and veneers together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, whitening may be carried out before veneers are placed. This allows your dentist to lighten your natural teeth first, then match the veneers to the brighter shade for a consistent result. However, veneers themselves cannot be whitened once placed. Your dentist will advise on the most appropriate sequence after assessment."
          }
        }
      ]
    }
  ],
  "/compare-treatments/white-fillings-vs-silver-fillings": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare Treatments",
          "item": "https://www.smiledentist.co.uk/compare-treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Fillings vs Silver Fillings",
          "item": "https://www.smiledentist.co.uk/compare-treatments/white-fillings-vs-silver-fillings"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are white fillings better than silver fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is universally better — they are suited to different situations. White (composite) fillings offer a natural, tooth-coloured appearance and bond directly to the tooth, making them the preferred choice for visible teeth and patients who want a mercury-free option. Silver (amalgam) fillings are stronger under heavy biting forces and have a long clinical track record, making them suitable for large restorations in back teeth. Your dentist will recommend whichever material is most appropriate based on the size and location of the cavity."
          }
        },
        {
          "@type": "Question",
          "name": "Which lasts longer — white fillings or silver fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver amalgam fillings have traditionally been considered longer-lasting — typically 10 to 15 years or more. White composite fillings have improved significantly and now typically last 5 to 10 years, with some lasting longer depending on the size and location of the restoration and the patient's oral hygiene. For smaller cavities and front teeth, composite fillings perform very well. For large restorations in back teeth under heavy biting forces, amalgam may still offer greater longevity in some cases."
          }
        },
        {
          "@type": "Question",
          "name": "Are silver fillings safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver amalgam fillings have been used safely in dentistry for over 150 years. They contain mercury, which is bound within the amalgam alloy and is considered safe by major dental and health organisations including the British Dental Association. However, some patients prefer mercury-free alternatives for personal or aesthetic reasons. From July 2018, EU regulations restricted the use of amalgam in children under 15 and in pregnant or breastfeeding women as a precautionary measure. Your dentist can discuss the options available to you."
          }
        },
        {
          "@type": "Question",
          "name": "Can silver fillings be replaced with white fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many patients choose to replace old silver amalgam fillings with tooth-coloured composite fillings for aesthetic reasons or when the amalgam filling is deteriorating and needs replacing. However, it is generally not recommended to remove amalgam fillings solely for the purpose of replacement if they are still intact and functioning well — unnecessary removal can weaken the tooth. Your dentist will advise whether replacement is clinically appropriate in your case."
          }
        },
        {
          "@type": "Question",
          "name": "Which looks more natural — white or silver fillings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "White composite fillings are specifically designed to match the colour of your natural teeth, making them virtually invisible once placed. They are the clear choice for front teeth and any visible areas. Silver amalgam fillings are metallic in colour and are visible when you smile or open your mouth wide, which is why many patients now prefer composite fillings — particularly for teeth that are visible when speaking or smiling."
          }
        },
        {
          "@type": "Question",
          "name": "Are white fillings strong enough for back teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modern composite materials have improved considerably and are now suitable for many back teeth restorations, particularly for small to moderate cavities. However, for very large cavities in back teeth that bear heavy biting forces, your dentist may recommend an alternative such as an inlay, onlay, or crown for greater long-term durability. Your dentist will assess the size of the cavity and recommend the most appropriate material."
          }
        }
      ]
    }
  ],
  "/complaints": [],
  "/composite-bonding-london/composite-bonding-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Composite Bonding",
      "alternateName": [
        "Dental Bonding",
        "Cosmetic Bonding",
        "Composite Edge Bonding"
      ],
      "description": "Composite bonding (cosmetic dental bonding) in London. Hand-sculpted high-aesthetic resin applied directly to the tooth to repair chips, close small gaps, lengthen worn edges or refine shape — typically with little or no removal of natural tooth structure. £395 per tooth (£197.50 with our £20/month membership). Carried out by GDC-registered dentists at Smile Dentist London (South Kensington, SW7).",
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Teeth",
      "url": "https://www.smiledentist.co.uk/composite-bonding-london/composite-bonding-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/composite-bonding-london/composite-bonding-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "Composite Bonding — per tooth",
        "price": "395.00",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smiledentist.co.uk/composite-bonding-london/composite-bonding-cost",
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "395.00",
          "priceCurrency": "GBP",
          "unitText": "per tooth",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "tooth"
          }
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Composite Bonding",
          "item": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/composite-bonding-london/composite-bonding-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/composite-bonding-london/composite-bonding-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does composite bonding cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, composite bonding is £395 per tooth. Members of our £20/month dental plan pay £197.50 per tooth (50% off). A separate clinical examination is required first to confirm suitability — £30 for new patients or £95 for returning patients (£47.50 with membership). The final fee is always confirmed in a written treatment plan after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a full set of composite bonding cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most \"smile transformation\" cases involve bonding the upper 6 front teeth (£2,370), the upper 8 teeth (£3,160), or the upper 10 teeth (£3,950). With membership, the same cases are £1,185, £1,580 and £1,975 respectively. The exact number of teeth required is decided after a clinical assessment and discussion of your goals — bonding fewer teeth may be entirely appropriate and is often preferable clinically."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the £395 per-tooth fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The £395 per-tooth fee covers shade selection, gentle preparation of the tooth surface, hand-layered application and sculpting of high-quality composite resin, bite check and adjustment, final polishing, and written aftercare. A short review appointment to check the bonding has settled is included where clinically appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A clinical assessment is required before any bonding can be planned. New patients pay £30 for the first examination; returning patients pay £95 (£47.50 with membership). Diagnostic x-rays are only taken when clinically indicated and are quoted to you in writing before any radiographs are taken — £30 for a small periapical film."
          }
        },
        {
          "@type": "Question",
          "name": "How long does composite bonding last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With appropriate care — good oral hygiene, regular hygiene appointments, avoiding biting on very hard items and minimising staining drinks — composite bonding may last several years before needing polishing or minor repair. Longevity varies between individuals; your dentist will discuss realistic expectations during your consultation. Bonding may benefit from periodic re-polishing, which is charged separately."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between composite bonding and composite veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Composite bonding usually refers to small to moderate additions of resin to repair chips, close small gaps or reshape edges. Composite veneers are larger additions of resin that cover most of the front surface of the tooth to change shape, length and colour. The technique and material are similar, but veneers typically use more material per tooth and take longer to sculpt. Your dentist will recommend the approach best suited to your goals and the existing condition of your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation you will receive an itemised written treatment plan listing every tooth to be bonded and the total fee. Treatment only begins after you have signed informed consent. If your dentist identifies a separate issue that should be addressed first (for example a hygiene visit, replacement of a leaking filling, or whitening to lighten the underlying colour before bonding), those fees would be quoted to you separately in writing for your approval."
          }
        },
        {
          "@type": "Question",
          "name": "Are prices the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Composite bonding is £395 per tooth at both our South Kensington (SW7) clinic and our City of London (EC4) clinic."
          }
        },
        {
          "@type": "Question",
          "name": "Is composite bonding available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. Composite bonding for purely cosmetic reasons is not routinely available on the NHS; it is typically only provided under NHS terms where there is a clinical need (for example to repair fractured tooth structure). Patients who prefer the longer appointment times, choice of dentist and choice of materials associated with private treatment are welcome to book with us."
          }
        }
      ]
    }
  ],
  "/conditions": [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        }
      ]
    }
  ],
  "/conditions/bad-breath-halitosis": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Bad Breath (Halitosis)",
      "description": "Halitosis is the clinical term for persistent unpleasant breath odour. Causes often relate to bacteria in the mouth, gum disease, dry mouth, and other dental conditions. Professional assessment can help identify underlying causes and guide appropriate care.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent unpleasant breath odour"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Dry mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum bleeding or swelling"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible plaque or tartar build-up"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bad Breath (Halitosis)",
          "item": "https://www.smiledentist.co.uk/conditions/bad-breath-halitosis"
        }
      ]
    }
  ],
  "/conditions/bad-taste-in-mouth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Bad Taste in Mouth (Dental Causes)",
      "description": "A persistent unpleasant taste in the mouth may be linked to dental conditions including gum disease, dental infection, tooth decay, or plaque accumulation. Professional dental assessment can help identify whether an oral health condition is responsible.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent unpleasant taste"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Metallic or bitter taste sensation"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad breath accompanying the taste"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum swelling or bleeding"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth pain or sensitivity"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bad Taste in Mouth",
          "item": "https://www.smiledentist.co.uk/conditions/bad-taste-in-mouth"
        }
      ]
    }
  ],
  "/conditions/bite-feels-off-malocclusion": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Bite Feels Off (Malocclusion Symptoms)",
      "description": "A bite that feels uneven or uncomfortable may be linked to tooth wear, grinding, missing teeth, dental restorations, or jaw joint changes. Professional dental assessment can help identify the underlying cause and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bite feels uneven or uncomfortable"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty chewing comfortably"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort or muscle tension"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth sensitivity from uneven pressure"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Teeth not fitting together properly"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bite Feels Off (Malocclusion)",
          "item": "https://www.smiledentist.co.uk/conditions/bite-feels-off-malocclusion"
        }
      ]
    }
  ],
  "/conditions/bleeding-gums": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Bleeding Gums When Brushing",
      "description": "Bleeding gums during brushing or flossing are a common oral health concern often indicating gum inflammation caused by plaque bacteria. Professional dental assessment can determine the cause and guide appropriate care including professional cleaning and periodontal treatment.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Contouring",
          "url": "https://www.smiledentist.co.uk/gum-contouring-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding during brushing or flossing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Red or swollen gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tenderness around the gumline"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent bad breath"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum irritation or discomfort"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bleeding Gums",
          "item": "https://www.smiledentist.co.uk/conditions/bleeding-gums"
        }
      ]
    }
  ],
  "/conditions/broken-denture": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Broken Denture",
      "description": "A broken denture is a dental prosthesis that has sustained damage such as cracks, fractures, broken teeth, warping, or loose components. Professional repair or replacement may be needed to restore comfort, function, and appearance.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dentures",
          "url": "https://www.smiledentist.co.uk/dentures-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Implant-Retained Dentures",
          "url": "https://www.smiledentist.co.uk/implant-dentures-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Bridges",
          "url": "https://www.smiledentist.co.uk/dental-bridges-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Implants",
          "url": "https://www.smiledentist.co.uk/dental-implants-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Missing Teeth",
          "url": "https://www.smiledentist.co.uk/missing-teeth-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible crack or fracture in the denture base"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Broken or missing denture tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Denture feels loose or unstable"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort or sore spots when wearing the denture"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty chewing or speaking with the denture"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Broken Denture",
          "item": "https://www.smiledentist.co.uk/conditions/broken-denture"
        }
      ]
    }
  ],
  "/conditions/broken-tooth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Broken Tooth",
      "description": "A broken tooth refers to structural damage where part of the tooth's enamel or dentine has fractured, chipped, or cracked. Treatment options include composite bonding, dental crowns, root canal therapy, or extraction depending on severity.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot and cold"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible crack or chip"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Broken Tooth",
          "item": "https://www.smiledentist.co.uk/conditions/broken-tooth"
        }
      ]
    }
  ],
  "/conditions/cavities": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Cavities",
      "description": "Cavities are areas of permanent damage in tooth enamel caused by acid-producing bacteria in dental plaque. Professional dental assessment helps identify cavities and determine the most appropriate treatment, which may include dental fillings, crowns, root canal treatment, or extraction.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot, cold, or sweet foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible dark spots or holes in teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when chewing or biting"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Occasional toothache"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Food frequently becoming trapped in the same area"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cavities",
          "item": "https://www.smiledentist.co.uk/conditions/cavities"
        }
      ]
    }
  ],
  "/conditions/chipped-tooth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chipped Tooth",
      "description": "A chipped tooth occurs when a small fragment of enamel breaks away. Treatment options include composite bonding, cosmetic contouring, dental crowns, or porcelain veneers depending on the extent of the damage.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot and cold"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible crack or chip"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chipped Tooth",
          "item": "https://www.smiledentist.co.uk/conditions/chipped-tooth"
        }
      ]
    }
  ],
  "/conditions/cracked-tooth-syndrome": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Cracked Tooth Syndrome",
      "description": "Cracked tooth syndrome involves incomplete fractures of a tooth that can cause intermittent pain when biting. Diagnosis may require specialised examination techniques. Treatment options include monitoring, composite stabilisation, dental crowns, root canal treatment, or extraction depending on severity.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sharp pain when biting or chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain on release of biting pressure"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to cold"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty identifying the exact tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Intermittent symptoms that worsen over time"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cracked Tooth Syndrome",
          "item": "https://www.smiledentist.co.uk/conditions/cracked-tooth-syndrome"
        }
      ]
    }
  ],
  "/conditions/craze-lines": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Craze Lines on Teeth",
      "description": "Craze lines are small, superficial cracks that appear in tooth enamel. They are common and often develop gradually over time as a result of normal enamel wear. These fine lines usually affect only the outer enamel surface and do not typically cause pain or sensitivity. Professional dental assessment helps determine whether the lines are superficial craze lines or associated with deeper structural damage requiring treatment.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Fine vertical lines on the surface of teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Lines visible under certain lighting conditions"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Slight changes in tooth appearance"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Usually no pain or sensitivity"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Craze Lines on Teeth",
          "item": "https://www.smiledentist.co.uk/conditions/craze-lines"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are craze lines on teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Craze lines are very fine, shallow cracks that appear in the outer enamel layer of a tooth. They are extremely common and usually develop gradually over many years as a result of normal wear and everyday use. In most cases, craze lines affect only the enamel surface and do not extend into deeper structures such as the dentine or pulp. They are generally considered a cosmetic change rather than a structural concern, and many people have craze lines without being aware of them."
          }
        },
        {
          "@type": "Question",
          "name": "Are craze lines harmful to my teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the vast majority of cases, craze lines are not harmful and do not affect the structural integrity of the tooth. Because they are confined to the enamel surface, they typically do not cause pain, sensitivity, or functional problems. However, if you notice a crack that appears to be deepening, widening, or is accompanied by symptoms such as pain when biting or temperature sensitivity, it is advisable to arrange a professional dental assessment. Your dentist can determine whether the line is a superficial craze line or a more significant fracture."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between craze lines and a cracked tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Craze lines are superficial cracks that affect only the outermost enamel layer and generally do not cause symptoms. A cracked tooth, by contrast, involves a fracture that extends deeper into the tooth structure — potentially reaching the dentine or the inner pulp. Cracked teeth may cause pain when biting or chewing, sensitivity to hot or cold, and in some cases may require restorative treatment. Professional examination, sometimes with the aid of magnification or special lighting, helps distinguish between the two conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Can craze lines be treated or removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment for craze lines is not usually necessary from a dental health perspective, as they are typically a cosmetic concern. If the appearance of craze lines is a concern, options such as dental bonding or tooth polishing may be discussed with your dentist. In some cases, craze lines may pick up surface staining over time, which professional cleaning or whitening may help address. Treatment depends on individual clinical findings and preferences, and your dentist can advise on the most appropriate approach."
          }
        },
        {
          "@type": "Question",
          "name": "Do craze lines get worse over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Craze lines may become more noticeable over time, particularly if they accumulate surface staining from foods, drinks, or tobacco. However, they do not typically progress into deeper cracks on their own. That said, teeth with existing craze lines may be more susceptible to further damage if subjected to excessive biting forces, grinding, or trauma. Maintaining good oral hygiene and attending regular dental examinations can help monitor any changes."
          }
        },
        {
          "@type": "Question",
          "name": "Should I see a dentist about craze lines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If craze lines are not causing any pain, sensitivity, or functional concerns, they may simply be monitored during routine dental examinations. However, professional assessment is advisable if you notice a crack that appears to be deepening, if pain develops when biting, if the tooth becomes sensitive to temperature changes, or if you are concerned about the cosmetic appearance of the lines. Your dentist can evaluate the extent of the lines and recommend any appropriate management."
          }
        }
      ]
    }
  ],
  "/conditions/crooked-teeth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Crooked Teeth",
      "description": "Crooked or misaligned teeth are a common dental concern affecting both appearance and function. Teeth may appear crowded, rotated, overlapping, or unevenly spaced. Professional dental assessment can help determine the extent of misalignment and appropriate treatment options.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Pro Aligners",
          "url": "https://www.smiledentist.co.uk/pro-aligners-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Smile Makeover",
          "url": "https://www.smiledentist.co.uk/smile-makeover-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Teeth appearing uneven, rotated, or crowded"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty cleaning between misaligned teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bite irregularities affecting chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Self-consciousness about smile appearance"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crooked Teeth",
          "item": "https://www.smiledentist.co.uk/conditions/crooked-teeth"
        }
      ]
    }
  ],
  "/conditions/crossbite": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Crossbite",
      "description": "A crossbite is a type of bite misalignment where certain upper teeth sit inside the lower teeth when the mouth is closed. Professional dental assessment can evaluate bite position, identify contributing factors, and determine appropriate management options.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven or uncomfortable chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Signs of uneven tooth wear"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort or muscle strain"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Noticeably irregular bite alignment"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crossbite",
          "item": "https://www.smiledentist.co.uk/conditions/crossbite"
        }
      ]
    }
  ],
  "/conditions/crowded-teeth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Crowded Teeth",
      "description": "Crowded teeth occur when there is insufficient space in the jaw for all teeth to align properly. Teeth may overlap, twist, or appear uneven, which can affect oral hygiene and function. Professional dental assessment can evaluate alignment and determine appropriate care.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Teeth overlapping or appearing uneven"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty cleaning between crowded teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum irritation around misaligned teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven tooth wear"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crowded Teeth",
          "item": "https://www.smiledentist.co.uk/conditions/crowded-teeth"
        }
      ]
    }
  ],
  "/conditions/dark-tooth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dark Tooth or Grey Tooth",
      "description": "A tooth turning grey or darker than surrounding teeth can indicate internal changes within the tooth, often related to trauma or nerve damage. Professional dental assessment helps determine the cause and appropriate management, which may include root canal treatment, internal whitening, or dental crowns.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Teeth Whitening",
          "url": "https://www.smiledentist.co.uk/teeth-whitening-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "A single tooth becoming darker than surrounding teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Grey, brown, or dark colour change"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Possible sensitivity or discomfort"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in smile appearance"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dark Tooth",
          "item": "https://www.smiledentist.co.uk/conditions/dark-tooth"
        }
      ]
    }
  ],
  "/conditions/dental-abscess": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dental Abscess",
      "description": "A dental abscess is a localised bacterial infection that forms as a collection of pus at the root of a tooth or in surrounding gum tissue. Treatment options include professional drainage, root canal treatment, periodontal treatment, or tooth extraction depending on severity.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent or throbbing toothache"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Swelling of gum, face, or jaw"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to pressure when biting"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Fever or feeling generally unwell"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Abscess",
          "item": "https://www.smiledentist.co.uk/conditions/dental-abscess"
        }
      ]
    }
  ],
  "/conditions/dry-mouth-xerostomia": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dry Mouth (Xerostomia)",
      "description": "Dry mouth (xerostomia) is a common oral health condition where saliva production is reduced, potentially affecting comfort, speech, and oral health. Professional dental assessment can help identify underlying causes and guide appropriate management to protect teeth and oral tissues.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent dry or sticky feeling in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty swallowing, speaking, or tasting"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sore or irritated oral tissues"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Increased tooth sensitivity or dental decay"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dry Mouth (Xerostomia)",
          "item": "https://www.smiledentist.co.uk/conditions/dry-mouth-xerostomia"
        }
      ]
    }
  ],
  "/conditions/dry-socket-after-extraction": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Dry Socket After Extraction",
      "description": "Dry socket (alveolar osteitis) is a post-extraction condition that occurs when the protective blood clot in the extraction site is lost or fails to form properly. Professional dental assessment can help evaluate symptoms and support healing through appropriate clinical management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Increasing pain two to four days after tooth extraction"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible empty socket without a blood clot"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Unpleasant taste or odour from the extraction site"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain radiating toward the ear, jaw, or temple"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dry Socket After Extraction",
          "item": "https://www.smiledentist.co.uk/conditions/dry-socket-after-extraction"
        }
      ]
    }
  ],
  "/conditions/enamel-erosion": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Enamel Erosion (Acid Wear)",
      "description": "Enamel erosion occurs when acids gradually wear away the protective outer layer of teeth. Professional dental assessment helps identify enamel erosion and determine appropriate management, which may include preventive advice, fluoride treatments, protective restorations, or dental crowns.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Increased tooth sensitivity to hot, cold, or sweet foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Teeth appearing thinner or more translucent"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Yellowish appearance as dentine becomes visible"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Small indentations or rounded edges on teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Enamel Erosion",
          "item": "https://www.smiledentist.co.uk/conditions/enamel-erosion"
        }
      ]
    }
  ],
  "/conditions/gaps-between-teeth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Gaps Between Teeth (Diastema)",
      "description": "Gaps between teeth, or diastema, are a common dental spacing variation. Professional dental assessment can evaluate the cause of tooth spacing, determine whether treatment may be appropriate, and discuss options including composite bonding, porcelain veneers, dental crowns, and orthodontic treatment.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible space between two or more teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Food frequently becoming trapped in gaps"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gap appearing to widen over time"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite alignment or tooth positioning"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gaps Between Teeth (Diastema)",
          "item": "https://www.smiledentist.co.uk/conditions/gaps-between-teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are gaps between teeth normal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, gaps between teeth are a common dental variation. Many people naturally have some degree of spacing, particularly between the upper front teeth. In some cases, gaps are simply a feature of tooth size relative to jaw size and do not require treatment. However, if spacing changes over time, affects oral health, or causes concern, a dental assessment can help determine whether any action may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Can gaps between teeth close on their own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In children, gaps between baby teeth are common and often close naturally as the permanent teeth develop and emerge. In adults, gaps do not typically close on their own and may in some cases widen over time due to factors such as gum disease or habits that place pressure on the teeth. If you notice a gap changing in size, professional assessment is advisable."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best treatment for a gap between front teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most suitable treatment depends on the size of the gap, the underlying cause, and your individual goals. Options may include composite bonding for smaller gaps, porcelain veneers for a more comprehensive cosmetic improvement, or orthodontic treatment to reposition the teeth. Your dentist can assess your specific situation and discuss which approach may be most appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Is composite bonding suitable for closing gaps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Composite bonding is often considered for closing small to moderate gaps between teeth. It involves applying tooth-coloured composite resin to the sides of the teeth to reduce the visible space. The procedure is minimally invasive and typically does not require removal of natural tooth structure. Suitability depends on the size of the gap and the overall condition of the teeth, which your dentist can assess."
          }
        },
        {
          "@type": "Question",
          "name": "Can a gap between teeth cause dental problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While many gaps do not cause dental problems, spacing between teeth may allow food to become trapped more easily, which could contribute to plaque accumulation if not managed with thorough oral hygiene. In some cases, gaps may also be associated with underlying issues such as gum disease or bite alignment concerns. A dental examination can help evaluate whether any oral health factors are involved."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to fix a gap between my teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. If the gap does not affect your oral health, bite function, or confidence, treatment may not be required. Many people live comfortably with naturally spaced teeth. However, if the gap is widening, causing food trapping, or if you would like to improve the appearance of your smile, a professional assessment can help you understand the options available."
          }
        }
      ]
    }
  ],
  "/conditions/gingivitis": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Gingivitis (Bleeding Gums)",
      "description": "Gingivitis is the earliest stage of gum disease, caused by plaque bacteria irritating and inflaming the gum tissue. Professional dental assessment helps determine the extent of gum inflammation, and treatment may include professional cleaning, oral hygiene advice, and periodontal maintenance.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Disease Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding gums when brushing or flossing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Red or swollen gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tender gums"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent bad breath"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum irritation around certain teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gingivitis (Bleeding Gums)",
          "item": "https://www.smiledentist.co.uk/conditions/gingivitis"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is gingivitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gingivitis is inflammation of the gum tissue caused by the accumulation of plaque bacteria along the gumline. It is the earliest stage of gum disease and is characterised by redness, swelling, and bleeding of the gums — particularly during brushing or flossing. Unlike more advanced periodontal disease, gingivitis does not involve permanent damage to the bone or supporting structures of the teeth, and with appropriate care it is generally considered reversible."
          }
        },
        {
          "@type": "Question",
          "name": "Is bleeding when brushing normal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Occasional minor bleeding may occur if you have not brushed or flossed for some time, but regular or persistent bleeding during brushing is not considered normal. It is often one of the earliest signs of gingivitis and suggests that the gum tissue is inflamed. If you notice frequent bleeding, professional dental assessment can help determine the cause and guide appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "Can gingivitis be reversed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, gingivitis may be reversed with appropriate oral hygiene improvements and professional dental cleaning. Because the condition affects only the gum tissue and has not progressed to involve the bone, early intervention can help restore gum health. However, outcomes depend on individual circumstances, and your dentist can advise on the most appropriate approach following clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How is gingivitis treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment typically begins with professional dental cleaning to remove plaque and tartar that cannot be effectively addressed by brushing alone. Your dental team may also provide personalised advice on brushing technique, interdental cleaning, and any other factors contributing to gum inflammation. In some cases, follow-up appointments may be recommended to monitor gum health and ensure the inflammation is resolving."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if gingivitis is left untreated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If gingivitis is not addressed, there is a possibility that the inflammation may progress to periodontitis — a more advanced form of gum disease that affects the bone and connective tissue supporting the teeth. Periodontitis is not reversible and may lead to tooth mobility or tooth loss in severe cases. This is one reason why early professional assessment of bleeding gums is considered important."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I visit the dentist if I have gingivitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The recommended frequency of dental visits depends on the severity of the gum inflammation and your individual risk factors. Your dentist or hygienist may suggest more frequent appointments initially to monitor progress and ensure the gum health is improving. Once the inflammation is under control, routine visits at intervals recommended by your dental team are generally appropriate."
          }
        }
      ]
    }
  ],
  "/conditions/gum-boil": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Gum Boil (Parulis)",
      "description": "A gum boil (parulis) is a small swelling on the gum that often indicates drainage from an underlying dental infection. Professional assessment helps identify the source of infection, and treatment may include root canal treatment, abscess drainage, or tooth extraction depending on clinical findings.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "A small swelling or pimple on the gum"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tenderness in the surrounding gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste due to drainage"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity or discomfort in the affected tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Occasional swelling of nearby tissues"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gum Boil (Parulis)",
          "item": "https://www.smiledentist.co.uk/conditions/gum-boil"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a gum boil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A gum boil — medically known as a parulis — is a small raised swelling or pimple-like bump that appears on the gum tissue. It typically forms when infection from a tooth or surrounding structures drains through a pathway called a sinus tract. The boil itself is not the source of infection but rather a sign that an underlying dental problem may be present."
          }
        },
        {
          "@type": "Question",
          "name": "Can a gum boil go away on its own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A gum boil may appear to resolve temporarily as fluid drains from the area, but this does not mean the underlying infection has cleared. In many cases, the boil returns because the source of infection — often within or around a tooth — remains. Professional dental assessment is advisable to identify and address the underlying cause."
          }
        },
        {
          "@type": "Question",
          "name": "Is a gum boil a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While a gum boil alone may not always constitute an emergency, it indicates that an underlying infection is likely present. If the boil is accompanied by severe pain, facial swelling, fever, or difficulty swallowing, prompt dental assessment is recommended. Even without these symptoms, arranging professional evaluation is advisable to prevent the infection from progressing."
          }
        },
        {
          "@type": "Question",
          "name": "What causes a gum boil to form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gum boils most commonly form as a result of a dental abscess — an infection that develops within or around a tooth. This may be caused by untreated decay that has reached the tooth pulp, infection around the root tip of a tooth, advanced gum disease, or bacteria entering through a crack or damage in the tooth structure."
          }
        },
        {
          "@type": "Question",
          "name": "How is a gum boil treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment focuses on addressing the underlying infection rather than the boil itself. Depending on clinical findings, treatment may include root canal treatment to remove infection from within the tooth, drainage and management of a dental abscess, or tooth extraction if the tooth cannot be restored. Your dentist will determine the most appropriate approach following examination."
          }
        },
        {
          "@type": "Question",
          "name": "Should I try to pop or drain a gum boil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Attempting to pop, squeeze, or drain a gum boil at home is not recommended. This may introduce further bacteria into the area, worsen the infection, or cause damage to the surrounding tissue. Professional dental assessment is the appropriate course of action to safely manage the underlying infection."
          }
        }
      ]
    }
  ],
  "/conditions/gum-disease": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Gum Disease (Periodontal Disease)",
      "description": "Gum disease is an inflammatory condition affecting the gums and supporting structures of the teeth. It ranges from gingivitis (early, reversible inflammation) to periodontitis (advanced disease affecting bone and tissue). Treatment may include professional cleaning, periodontal care, and ongoing monitoring.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding gums during brushing or flossing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Red or swollen gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent bad breath"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum recession or teeth appearing longer"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Loose teeth in more advanced cases"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gum Disease",
          "item": "https://www.smiledentist.co.uk/conditions/gum-disease"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gum disease is an inflammatory condition affecting the gums and the structures that support the teeth. It is caused by the build-up of bacterial plaque along the gumline. In its early stage — gingivitis — the condition typically causes redness, swelling, and bleeding. If left untreated, it may progress to periodontitis, which can affect the deeper supporting tissues and bone."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between gingivitis and periodontitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gingivitis is the earliest stage of gum disease, involving inflammation of the gum tissue without permanent damage to the bone or tooth support. With appropriate care, gingivitis is often considered reversible. Periodontitis is a more advanced stage where the infection has spread to deeper tissues and bone, potentially leading to gum recession, bone loss, and tooth mobility. Periodontitis is not reversible but can be managed and stabilised with professional treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Can gum disease be cured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gingivitis — the early stage — may often be reversed with improved oral hygiene and professional cleaning. However, periodontitis involves permanent changes to the supporting structures that cannot be fully reversed. The aim of treatment in more advanced stages is to manage the condition, control inflammation, and help prevent further progression. Outcomes depend on individual circumstances and are assessed through clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "How is gum disease treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the stage and severity of the condition. It typically begins with professional dental cleaning to remove plaque and tartar, followed by personalised oral hygiene advice. More advanced cases may require periodontal treatment to address infection below the gumline. Ongoing monitoring and maintenance appointments are often recommended to support long-term gum health."
          }
        },
        {
          "@type": "Question",
          "name": "Is bleeding when brushing a sign of gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bleeding during brushing or flossing is one of the most common early signs of gum inflammation. While occasional minor bleeding may not always indicate a significant problem, regular or persistent bleeding is not considered normal and may suggest that gingivitis or an early stage of gum disease is developing. Professional assessment can help determine the cause."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prevent gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Effective prevention includes brushing teeth at least twice daily with fluoride toothpaste, cleaning between the teeth daily using floss or interdental brushes, attending regular dental examinations and hygiene appointments, and avoiding tobacco products. Your dental team can provide personalised advice on maintaining optimal gum health."
          }
        }
      ]
    }
  ],
  "/conditions/jaw-clenching": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Jaw Clenching",
      "description": "Jaw clenching involves sustained tightening of the jaw muscles, pressing the upper and lower teeth together with excessive force. It may occur during the day or during sleep and can affect the teeth, jaw muscles, and temporomandibular joints.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw pain or stiffness"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth wear or sensitivity"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tension headaches"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Facial muscle fatigue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "TMJ discomfort"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Morning jaw stiffness"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jaw Clenching",
          "item": "https://www.smiledentist.co.uk/conditions/jaw-clenching"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is jaw clenching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaw clenching involves sustained tightening of the jaw muscles, pressing the upper and lower teeth together with excessive force. It may occur during the day — often in response to stress or concentration — or during sleep. Some individuals are unaware they clench until symptoms such as jaw discomfort, tooth wear, or headaches develop."
          }
        },
        {
          "@type": "Question",
          "name": "Is jaw clenching the same as teeth grinding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaw clenching and teeth grinding (bruxism) are related but distinct behaviours. Clenching involves pressing the teeth together without lateral movement, while grinding involves moving the jaw side to side with the teeth in contact. Both may occur together and can place considerable strain on the teeth and jaw structures. Professional assessment can help distinguish between the two and guide appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "What causes jaw clenching at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nocturnal jaw clenching is often associated with sleep-related muscle activity and may be influenced by stress, anxiety, certain medications, caffeine or alcohol consumption, and bite imbalances. Because it occurs during sleep, many people are unaware of the habit until a sleeping partner notices or symptoms such as morning jaw stiffness or tooth sensitivity develop."
          }
        },
        {
          "@type": "Question",
          "name": "Can jaw clenching damage teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prolonged or forceful jaw clenching may contribute to gradual tooth wear, micro-cracks in the enamel, increased tooth sensitivity, and in some cases fracture of weakened teeth or dental restorations. The effects tend to develop gradually over time, which is why regular dental examinations are valuable for detecting early signs of wear or damage."
          }
        },
        {
          "@type": "Question",
          "name": "How is jaw clenching treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the underlying cause and severity. Your dentist may recommend a custom-made night guard or occlusal splint to protect the teeth and reduce the strain on jaw muscles. Advice on jaw relaxation techniques, lifestyle modifications, and stress management may also be provided. In cases where tooth wear has already occurred, restorative treatment options may be discussed."
          }
        },
        {
          "@type": "Question",
          "name": "Should I see a dentist about jaw clenching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional dental assessment may be appropriate if you experience jaw discomfort or stiffness, notice signs of tooth wear, have frequent headaches — particularly in the morning — or if your jaw movement becomes uncomfortable. A dentist can evaluate your teeth and jaw, identify contributing factors, and recommend appropriate care to help manage the condition."
          }
        }
      ]
    }
  ],
  "/conditions/jaw-clicking-popping": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Jaw Clicking or Popping",
      "description": "Jaw clicking or popping refers to audible sounds produced during jaw movement, typically originating from the temporomandibular joint (TMJ). These sounds may occur when speaking, chewing, or yawning and can be associated with disc displacement, muscle tension, or bite imbalances.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Clicking or popping sounds during jaw movement"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw pain or discomfort"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Limited jaw opening"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw locking"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Headaches or facial discomfort"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite alignment"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jaw Clicking or Popping",
          "item": "https://www.smiledentist.co.uk/conditions/jaw-clicking-popping"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes jaw clicking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaw clicking is typically produced by movement of the disc within the temporomandibular joint (TMJ). This small disc of cartilage normally cushions the joint during jaw movement. When the disc shifts slightly out of its usual position, it may produce an audible click or pop as the jaw opens or closes. Contributing factors may include jaw muscle tension, teeth grinding, bite imbalances, or previous jaw trauma."
          }
        },
        {
          "@type": "Question",
          "name": "Is jaw clicking serious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaw clicking is relatively common and, in many cases, occurs without pain or any significant impact on jaw function. However, if clicking is accompanied by persistent pain, limited jaw movement, jaw locking, or difficulty chewing, professional assessment may be appropriate to evaluate the underlying cause and determine whether management is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can jaw clicking go away on its own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, jaw clicking may resolve without intervention — particularly if it is related to temporary factors such as stress or muscle tension. However, persistent or worsening clicking, especially when accompanied by discomfort or changes in jaw movement, may benefit from professional evaluation to identify whether contributing factors require attention."
          }
        },
        {
          "@type": "Question",
          "name": "Should I see a dentist about jaw clicking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional dental assessment may be helpful if jaw clicking is persistent, accompanied by pain or discomfort, associated with limited jaw movement or locking, or if you notice changes in how your teeth meet. A dentist can evaluate the temporomandibular joint and surrounding structures to help determine the cause and recommend appropriate management."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available for jaw clicking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the underlying cause and severity. Options may include custom-made bite guards or occlusal splints to reduce strain on the joint, jaw relaxation techniques, lifestyle modifications, and monitoring. In cases where bite imbalances or tooth wear are contributing factors, restorative dental treatment may also be considered. The appropriate approach is determined through clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth grinding cause jaw clicking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teeth grinding (bruxism) and jaw clenching can place sustained pressure on the temporomandibular joint, potentially contributing to disc displacement or muscle tension that produces clicking sounds. If grinding is identified as a contributing factor, your dentist may recommend a protective night guard or occlusal splint to help reduce the strain on the joint."
          }
        }
      ]
    }
  ],
  "/conditions/loose-crown": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Loose Crown or Fallen Crown",
      "description": "A dental crown may become loose or detach completely due to cement weakening, tooth decay, trauma, or teeth grinding. The exposed tooth may be more vulnerable to sensitivity or damage. Professional assessment determines whether the crown can be re-cemented or requires replacement.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Crown feels loose or moves when chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Crown has completely detached"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity in the exposed tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort or pain when biting"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible gap where the crown was placed"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite alignment"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loose Crown",
          "item": "https://www.smiledentist.co.uk/conditions/loose-crown"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I do if my crown falls off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your crown falls off, keep the crown in a clean, safe place and bring it to your dental appointment. Avoid chewing on the affected side and try not to eat sticky or very hard foods. Maintain gentle oral hygiene around the exposed tooth and arrange a professional dental assessment as soon as it is convenient. Do not attempt to re-cement the crown yourself, as this may cause complications."
          }
        },
        {
          "@type": "Question",
          "name": "Can a fallen crown be re-cemented?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, if the crown and the underlying tooth structure remain in good condition, the crown may be cleaned and re-cemented during a professional dental appointment. However, the suitability of re-cementation depends on clinical assessment — factors such as the fit of the crown, the condition of the tooth beneath, and whether any decay is present will influence the decision."
          }
        },
        {
          "@type": "Question",
          "name": "Why did my dental crown come loose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental crowns may loosen for several reasons, including gradual weakening of the bonding cement over time, tooth decay developing beneath the crown, trauma or biting on hard foods, teeth grinding or clenching, or changes in the underlying tooth structure. In some cases, the original fit of the crown may have been compromised. Professional assessment can help identify the specific cause."
          }
        },
        {
          "@type": "Question",
          "name": "Is a loose crown a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While a loose or fallen crown is not always considered a dental emergency, it is generally advisable to arrange professional assessment within a reasonable timeframe. The exposed tooth may be more vulnerable to sensitivity, discomfort, or further damage. If you experience significant pain, swelling, or signs of infection, seeking prompt dental care may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "How long can I wait with a loose crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is generally advisable to seek professional assessment relatively promptly after a crown becomes loose or detaches. The underlying tooth may be weakened and more susceptible to sensitivity, decay, or fracture without the protective crown. However, if immediate care is not available, following temporary precautions — such as avoiding chewing on the affected side — may help manage the situation in the short term."
          }
        },
        {
          "@type": "Question",
          "name": "Will I need a new crown or can the old one be reused?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whether the existing crown can be reused depends on clinical assessment. If the crown is undamaged, fits well, and the underlying tooth is in suitable condition, re-cementation may be possible. If the crown is cracked, worn, or no longer fits accurately — or if decay or structural changes have occurred in the tooth — a replacement crown may be recommended. Your dentist will advise based on examination findings."
          }
        }
      ]
    }
  ],
  "/conditions/loose-denture-denture-sores": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Loose Denture or Denture Sores",
      "description": "Loose dentures occur when a denture no longer fits securely against the gums. Denture sores refer to areas of irritation or discomfort caused by denture contact. These issues may result from natural changes in the gums and jawbone, wear of the denture base, or pressure points where the denture rubs against the tissue.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dentures",
          "url": "https://www.smiledentist.co.uk/dentures-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Implants",
          "url": "https://www.smiledentist.co.uk/dental-implants-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Denture feels loose or shifts during eating"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sore spots on the gums beneath the denture"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum redness or irritation under the denture"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty speaking clearly due to denture movement"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort when wearing dentures"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in denture fit over time"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loose Denture or Denture Sores",
          "item": "https://www.smiledentist.co.uk/conditions/loose-denture-denture-sores"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do dentures become loose over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dentures may become loose as the gums and jawbone naturally change shape over time. After teeth are removed, the underlying bone gradually remodels and may reduce in volume — a process sometimes referred to as bone resorption. As the ridge shape changes, the denture base may no longer match the contours of the mouth as closely, leading to looseness. Regular dental assessments help monitor these changes."
          }
        },
        {
          "@type": "Question",
          "name": "What causes sore spots from dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Denture sores typically develop where the denture places excessive pressure on a specific area of gum tissue. This may occur due to changes in the fit of the denture, uneven bite forces, rough or worn areas on the denture surface, or debris trapped beneath the denture. New dentures may also cause temporary soreness while the tissues adjust. Professional assessment can identify the cause and guide adjustments."
          }
        },
        {
          "@type": "Question",
          "name": "How often should dentures be checked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular dental examinations are generally recommended for denture wearers, even if no immediate problems are noticed. Your dentist can assess the fit of the dentures, the health of the gums and underlying tissues, and identify any changes that may benefit from adjustment. The frequency of assessments may vary depending on individual circumstances and clinical advice."
          }
        },
        {
          "@type": "Question",
          "name": "Can loose dentures be repaired or adjusted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, loose dentures can be improved through professional adjustment, relining, or rebasing. Relining involves adding new material to the fitting surface of the denture to improve contact with the gums. In some cases, a new denture may be recommended if the existing one is significantly worn or the mouth has changed considerably. The appropriate approach depends on clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Should I use denture adhesive for loose dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Denture adhesive may provide temporary improvement in stability for some individuals. However, if dentures consistently require adhesive to feel secure, this may indicate that the fit has changed and professional assessment could be beneficial. Adhesive is not a substitute for a well-fitting denture, and your dentist can advise on whether adjustment, relining, or replacement may be more appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Are implant-retained dentures an option?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant-retained dentures use dental implants placed in the jawbone to provide additional support and stability for a denture. This option may be suitable for some individuals who experience persistent looseness with conventional dentures. Suitability depends on factors including bone volume, general health, and individual clinical assessment. Your dentist can discuss whether this approach may be appropriate."
          }
        }
      ]
    }
  ],
  "/conditions/loose-tooth-adult": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Loose Tooth in Adults",
      "description": "A loose tooth in an adult refers to noticeable mobility of a permanent tooth beyond the very slight natural flex that healthy teeth may have. Tooth mobility may result from gum disease, trauma, teeth grinding, bite-related forces, or changes in the supporting bone. Professional assessment can help identify the underlying cause and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "A permanent tooth feels loose or wobbly"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum swelling or tenderness around the affected tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain or discomfort when biting or chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding from the gums around the loose tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "The tooth has shifted position in the bite"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Progressive loosening over time"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loose Tooth in Adults",
          "item": "https://www.smiledentist.co.uk/conditions/loose-tooth-adult"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why would an adult tooth become loose?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adult teeth may become loose for a number of reasons. Gum disease (periodontal disease) is one of the most common contributing factors, as it can affect the tissues and bone that support the teeth. Other possible causes include trauma or injury to the tooth, teeth grinding or clenching (bruxism), bite-related forces, or changes in the bone that supports the teeth. A professional dental assessment can help identify the underlying cause."
          }
        },
        {
          "@type": "Question",
          "name": "Can a loose adult tooth tighten back up on its own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, a tooth that has become slightly mobile — for example, following minor trauma — may stabilise over time as the surrounding tissues heal. However, looseness caused by gum disease or progressive bone changes is unlikely to resolve without professional intervention. The outcome depends on the underlying cause, the degree of mobility, and how promptly appropriate care is initiated."
          }
        },
        {
          "@type": "Question",
          "name": "Is a loose tooth always a sign of gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. While gum disease is a common cause of tooth mobility in adults, other factors may also contribute — including injury, teeth grinding, bite problems, or localised bone changes. A thorough dental examination, which may include X-rays and gum assessment, can help determine the specific cause in each case."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a loose tooth is left untreated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The outcome depends on the underlying cause. If the looseness is related to progressive gum disease or ongoing bone loss, delaying assessment may allow the condition to advance further, potentially affecting the long-term outlook for the tooth and neighbouring teeth. Early professional evaluation generally provides more options for management and may improve the chances of preserving the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How is a loose tooth assessed by a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assessment typically involves a clinical examination of the tooth, the surrounding gum tissues, and the bite. Your dentist may check the degree of tooth mobility, measure the gum pockets around the tooth, and take X-rays to evaluate the condition of the supporting bone. These findings help determine the cause of the looseness and guide appropriate management."
          }
        },
        {
          "@type": "Question",
          "name": "Can a loose tooth be saved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, professional treatment can help stabilise a loose tooth or address the underlying cause of the mobility. The outlook depends on factors including the degree of looseness, the amount of supporting bone remaining, and the specific cause. Treatment options may include periodontal therapy, splinting, bite adjustment, or other approaches depending on clinical findings. Your dentist can discuss the most appropriate options based on individual assessment."
          }
        }
      ]
    }
  ],
  "/conditions/lost-filling": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lost Filling",
      "description": "A lost filling is a dental restoration that has become loose, cracked, or completely detached from the tooth. The exposed cavity may lead to sensitivity, food trapping, further decay, or structural weakening. Professional assessment determines whether replacement with a white filling, crown, or other restoration is appropriate.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Filling has fallen out or feels loose"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot, cold, or sweet foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible hole or gap in the tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Food trapping in the cavity"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort or pain when biting"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lost Filling",
          "item": "https://www.smiledentist.co.uk/conditions/lost-filling"
        }
      ]
    }
  ],
  "/conditions/missing-tooth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Missing Tooth",
      "description": "A missing tooth refers to the absence of a natural tooth in the dental arch. Tooth loss may result from advanced decay, gum disease, trauma, previous extraction, or developmental absence. Missing teeth may affect appearance, chewing ability, and bite balance, and surrounding teeth may shift over time. Professional assessment can help evaluate oral health and explore restoration options.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Implants",
          "url": "https://www.smiledentist.co.uk/dental-implants-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Bridges",
          "url": "https://www.smiledentist.co.uk/dental-bridges-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Absence of a natural tooth in the dental arch"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible gap in the smile"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty chewing on the affected side"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Surrounding teeth shifting into the gap"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite alignment"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bone changes in the area of the missing tooth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Missing Tooth",
          "item": "https://www.smiledentist.co.uk/conditions/missing-tooth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the main causes of missing teeth in adults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common causes of tooth loss in adults include advanced tooth decay, gum disease (periodontal disease), and dental trauma or injury. Previous dental extractions — for example, to remove a severely damaged or infected tooth — are also a frequent reason. In some cases, certain teeth may be developmentally absent, meaning they never formed. A professional dental assessment can help determine the cause and discuss appropriate options."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to replace a missing back tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While a missing back tooth may not be immediately visible, it still plays an important role in chewing and bite balance. Over time, surrounding teeth may gradually shift into the gap, and the opposing tooth may begin to over-erupt. Whether replacement is recommended depends on individual circumstances, including the location of the missing tooth, the health of the remaining teeth, and any symptoms you may be experiencing. Your dentist can advise based on clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How soon should I see a dentist after losing a tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a tooth is lost due to injury or trauma, prompt dental assessment is generally recommended, as early intervention may increase the options available. If a tooth has been missing for some time, it is still worthwhile to arrange an assessment — your dentist can evaluate the current situation and discuss whether any changes have occurred that may benefit from attention."
          }
        },
        {
          "@type": "Question",
          "name": "What options are available for replacing a missing tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common options for replacing a missing tooth include dental implants, dental bridges, and partial dentures. The most appropriate option depends on factors such as the number and location of missing teeth, the health of the surrounding teeth and gums, bone volume, and individual preferences. Your dentist can discuss the advantages and considerations of each approach based on your specific circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "Can missing teeth affect my overall oral health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Missing teeth may contribute to changes in oral health over time. Surrounding teeth may shift position, bite alignment may change, and chewing patterns may be altered. In some cases, bone in the area of the missing tooth may gradually reduce in volume. The extent of these effects varies between individuals and depends on factors including the number and location of missing teeth. Regular dental assessments can help monitor any changes."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to replace teeth that have been missing for a long time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, teeth that have been missing for an extended period can still be replaced. However, changes may have occurred in the surrounding teeth, gums, and bone that could influence the available options. For example, bone volume may have reduced over time, which could affect suitability for certain treatments such as dental implants. A thorough clinical assessment, which may include X-rays, can help evaluate the current situation and identify the most appropriate approach."
          }
        }
      ]
    }
  ],
  "/conditions/mouth-ulcers-aphthous-ulcers": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Mouth Ulcers (Aphthous Ulcers)",
      "description": "Aphthous ulcers are small, round or oval sores that develop on the soft tissues inside the mouth. They typically appear with a white or yellow centre and a red border, and may cause discomfort during eating or speaking. Causes may include minor injury, stress, nutritional factors, or irritation from sharp tooth edges or dental appliances. Most heal naturally, but recurrent or persistent ulcers may benefit from professional assessment.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Small round or oval sores inside the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "White or yellow centre with a red border"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tenderness or pain when eating or speaking"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Recurrent episodes of oral ulcers"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Irritation on cheeks, lips, tongue, or gums"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty eating or drinking due to discomfort"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mouth Ulcers (Aphthous Ulcers)",
          "item": "https://www.smiledentist.co.uk/conditions/mouth-ulcers-aphthous-ulcers"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are aphthous ulcers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aphthous ulcers — commonly known as mouth ulcers — are small, round or oval sores that develop on the soft tissues inside the mouth. They typically appear with a white or yellow centre surrounded by a red border. They are not contagious and are one of the most common types of oral ulcer. Most aphthous ulcers heal naturally within one to two weeks, though recurrent episodes may benefit from professional assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What causes mouth ulcers to keep coming back?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recurrent mouth ulcers may be associated with a range of factors, including stress, fatigue, nutritional deficiencies, hormonal changes, or minor trauma to the mouth. In some cases, sharp tooth edges, damaged restorations, or poorly fitting dental appliances may cause repeated irritation. If ulcers recur frequently, a dental assessment can help identify potential contributing factors and explore appropriate management options."
          }
        },
        {
          "@type": "Question",
          "name": "When should I see a dentist about a mouth ulcer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional assessment may be appropriate if a mouth ulcer persists for longer than two to three weeks, if ulcers recur frequently, if the sores are unusually large or painful, or if you experience difficulty eating, drinking, or speaking. Your dentist can evaluate the ulcer, check for potential sources of irritation in the mouth, and advise on appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "Can dental problems cause mouth ulcers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, dental factors may contribute to mouth ulcer development. Sharp or rough tooth edges, broken or worn fillings, and ill-fitting dentures or orthodontic appliances can irritate the soft tissues of the mouth and may trigger ulcer formation. Professional dental assessment can help identify and address these potential sources of trauma."
          }
        },
        {
          "@type": "Question",
          "name": "Are mouth ulcers a sign of something serious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The majority of mouth ulcers are minor and heal naturally without treatment. However, ulcers that persist for an extended period, recur frequently, or are accompanied by other symptoms may occasionally be associated with underlying health conditions. If you are concerned about a mouth ulcer, professional assessment can help provide clarity and appropriate guidance."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce the frequency of mouth ulcers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maintaining good oral hygiene, attending regular dental examinations, and addressing any sources of irritation in the mouth — such as sharp tooth edges or poorly fitting appliances — may help reduce the frequency of ulcers in some individuals. Avoiding known dietary triggers, managing stress, and ensuring adequate nutrition may also be beneficial. Your dentist can provide personalised advice based on your individual circumstances."
          }
        }
      ]
    }
  ],
  "/conditions/open-bite": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Open Bite",
      "description": "An open bite is a type of malocclusion where certain upper and lower teeth do not make contact when the mouth is closed. It may affect the front teeth, back teeth, or both. Causes may include natural jaw development, genetic factors, childhood habits, tongue posture, or changes in tooth position over time. Professional assessment can help evaluate bite alignment and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Upper and lower teeth not touching when the mouth closes"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty biting into certain foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven tooth wear patterns"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in chewing efficiency"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw fatigue or discomfort during chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible gap between front teeth when biting"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Open Bite",
          "item": "https://www.smiledentist.co.uk/conditions/open-bite"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an open bite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An open bite is a type of malocclusion — or bite misalignment — where certain upper and lower teeth do not make contact when the mouth is closed. The gap may occur between the front teeth (anterior open bite) or the back teeth (posterior open bite). The degree of separation varies between individuals, and some open bites are mild while others may affect chewing or speech."
          }
        },
        {
          "@type": "Question",
          "name": "What causes an open bite in adults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An open bite in adults may result from a combination of factors, including natural jaw growth and development patterns, genetic influences on jaw structure, and habits such as tongue thrusting. In some cases, changes in tooth position over time — including tooth wear, loss, or shifting — may contribute to the development or worsening of an open bite. Professional assessment can help identify the specific factors involved."
          }
        },
        {
          "@type": "Question",
          "name": "Can an open bite get worse over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, an open bite may change gradually over time. Factors such as ongoing tongue habits, tooth wear, tooth loss, or changes in the jaw joints may influence bite alignment. Regular dental assessments allow your dentist to monitor any changes and discuss whether intervention may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Does an open bite always need treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all open bites require treatment. Some individuals have a mild open bite that causes no significant functional problems or discomfort. Whether treatment is recommended depends on the degree of the open bite, its effects on chewing, speech, and oral health, and individual circumstances. Your dentist can advise on whether monitoring or active management may be appropriate based on clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How is an open bite assessed by a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assessment typically involves a clinical examination of the teeth, bite alignment, and jaw function. Your dentist may evaluate how the upper and lower teeth meet, check for signs of uneven wear, and assess jaw movement. In some cases, dental X-rays or impressions may be taken to provide more detailed information about tooth position and jaw structure. These findings help guide appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "What treatment options may be available for an open bite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment options for an open bite depend on the underlying cause, the severity, and individual clinical findings. Options may include orthodontic treatment to adjust tooth positions, restorative approaches such as dental crowns or composite bonding to improve how the teeth meet, or monitoring if the open bite is mild and not causing functional problems. Your dentist can discuss the most appropriate options based on your individual assessment."
          }
        }
      ]
    }
  ],
  "/conditions/oral-thrush-mouth-yeast-infection": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Oral Thrush (Mouth Yeast Infection)",
      "description": "Oral thrush — also known as oral candidiasis — is a fungal infection caused by an overgrowth of Candida yeast in the mouth. The condition may affect the tongue, inner cheeks, gums, or palate and can cause white patches, soreness, or discomfort. Contributing factors may include reduced immunity, certain medications, dry mouth, denture hygiene, smoking, or underlying medical conditions. Professional assessment can help confirm the diagnosis and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "White or creamy patches on the tongue, cheeks, or palate"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Soreness, burning, or irritation in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Altered taste or a cotton-like feeling in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Redness or cracking at the corners of the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort when eating, drinking, or swallowing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Symptoms that persist, worsen, or recur"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oral Thrush (Mouth Yeast Infection)",
          "item": "https://www.smiledentist.co.uk/conditions/oral-thrush-mouth-yeast-infection"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is oral thrush?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oral thrush — also known as oral candidiasis — is a fungal infection caused by an overgrowth of Candida yeast in the mouth. Candida is naturally present in small amounts in most people's mouths, but certain factors may allow it to multiply excessively, leading to infection. The condition typically appears as white or creamy patches on the tongue, inner cheeks, gums, or palate."
          }
        },
        {
          "@type": "Question",
          "name": "Is oral thrush contagious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oral thrush is generally not considered highly contagious between adults. It develops due to an overgrowth of Candida yeast that is already naturally present in the mouth, rather than being acquired from another person. However, certain individuals — such as those with reduced immunity — may be more susceptible. If you are concerned, professional assessment can provide personalised guidance."
          }
        },
        {
          "@type": "Question",
          "name": "What causes oral thrush in adults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oral thrush in adults may be associated with a range of factors, including reduced immunity, certain medications (such as antibiotics, corticosteroids, or inhaled steroids), dry mouth, smoking, wearing dentures — particularly if hygiene is inadequate — and medical conditions that affect the body's natural balance of microorganisms. Multiple factors may contribute simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "How is oral thrush diagnosed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oral thrush is often diagnosed through clinical examination of the mouth. Your dentist or doctor can assess the appearance of the oral tissues and evaluate any white patches, redness, or irritation. In some cases, a swab may be taken from the affected area for laboratory analysis to confirm the presence of Candida. Professional assessment helps ensure an accurate diagnosis and appropriate management."
          }
        },
        {
          "@type": "Question",
          "name": "Can oral thrush come back after treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oral thrush may recur in some individuals, particularly if underlying contributing factors are not addressed. For example, if dry mouth, denture hygiene issues, or medication-related factors continue, the infection may return. Professional assessment can help identify contributing factors and provide guidance on reducing the likelihood of recurrence."
          }
        },
        {
          "@type": "Question",
          "name": "Should I see a dentist or a doctor for oral thrush?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either a dentist or a doctor can assess oral thrush. A dentist is well-placed to evaluate the oral tissues, check for dental contributing factors — such as denture fit or oral hygiene concerns — and provide or recommend appropriate treatment. If the thrush is thought to be related to a systemic health condition or medication, your dentist may recommend coordinating care with your GP."
          }
        }
      ]
    }
  ],
  "/conditions/overbite": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Overbite",
      "description": "An overbite describes the vertical overlap of the upper front teeth over the lower front teeth. A small degree of overlap is normal, but a pronounced overbite may affect bite alignment, chewing, speech, and jaw comfort. Causes may include natural jaw development, genetic factors, childhood habits, tooth loss, teeth grinding, or changes in tooth position over time. Professional assessment can help evaluate bite position and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Upper front teeth significantly overlapping the lower front teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bite feels uncomfortable or uneven"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible or noticeable tooth wear on biting edges"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort, aching, or muscle strain"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty chewing certain foods comfortably"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in speech clarity"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Overbite",
          "item": "https://www.smiledentist.co.uk/conditions/overbite"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an overbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An overbite describes the vertical overlap of the upper front teeth over the lower front teeth when the mouth is closed. A small degree of overlap is considered normal, but when the upper teeth cover a significant portion of the lower teeth — sometimes referred to as a deep bite — it may affect bite alignment, tooth wear, or jaw comfort. The degree of overbite varies between individuals."
          }
        },
        {
          "@type": "Question",
          "name": "What causes an overbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An overbite may result from a combination of factors, including natural jaw development and genetic influences on jaw size or tooth position. Childhood habits such as thumb sucking may also play a role. In adults, tooth loss, long-term tooth wear, teeth grinding, and gradual changes in tooth position over time may contribute to the development or worsening of an overbite."
          }
        },
        {
          "@type": "Question",
          "name": "Is an overbite the same as an overjet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An overbite and an overjet are related but describe different aspects of bite alignment. An overbite refers to the vertical overlap — how much the upper teeth cover the lower teeth from top to bottom. An overjet refers to the horizontal distance — how far forward the upper teeth sit relative to the lower teeth. Both may occur together, but they are assessed separately during a dental examination."
          }
        },
        {
          "@type": "Question",
          "name": "Does an overbite always need treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all overbites require treatment. A mild overbite that does not cause discomfort, tooth wear, or functional problems may simply be monitored during routine dental examinations. Whether treatment is recommended depends on the degree of the overbite, its effects on chewing, speech, and oral health, and individual circumstances. Your dentist can advise based on a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How is an overbite assessed by a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assessment typically involves a clinical examination of the teeth, bite alignment, and jaw function. Your dentist may evaluate how the upper and lower teeth meet, check for signs of uneven wear, and assess jaw movement. In some cases, dental X-rays or impressions may be taken to provide more detailed information about tooth position and jaw structure. These findings help guide appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "What treatment options may be available for an overbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment options for an overbite depend on the underlying cause, the severity, and individual clinical findings. Options may include orthodontic treatment to adjust tooth positions, restorative approaches such as dental crowns or composite bonding to improve how the teeth meet, or monitoring if the overbite is mild and not causing functional problems. Your dentist can discuss the most appropriate options based on your individual assessment."
          }
        }
      ]
    }
  ],
  "/conditions/overjet": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Overjet (Buck Teeth)",
      "description": "An overjet describes the horizontal distance between the upper and lower front teeth, where the upper teeth extend significantly forward compared to the lower teeth. It is sometimes referred to as buck teeth. Causes may include genetic factors, jaw development differences, childhood habits, tongue posture, or tooth loss. Professional assessment can help evaluate bite position and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Upper front teeth extending significantly forward of the lower teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible protrusion of the front teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty biting into certain foods comfortably"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven or accelerated tooth wear"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort or bite imbalance"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in speech clarity"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Overjet (Buck Teeth)",
          "item": "https://www.smiledentist.co.uk/conditions/overjet"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an overjet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An overjet describes the horizontal distance between the upper and lower front teeth — specifically, how far forward the upper front teeth sit relative to the lower teeth. A small degree of forward positioning is considered normal, but when the gap is more pronounced, it may be described as an increased or excessive overjet. In everyday language, this is sometimes referred to as 'buck teeth.'"
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an overjet and an overbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An overjet and an overbite are related but describe different aspects of bite alignment. An overjet refers to the horizontal distance — how far forward the upper teeth sit relative to the lower teeth. An overbite refers to the vertical overlap — how much the upper teeth cover the lower teeth from top to bottom. Both may be present at the same time, but they are assessed separately during a dental examination."
          }
        },
        {
          "@type": "Question",
          "name": "What causes protruding front teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Protruding front teeth may result from a combination of factors, including genetic influences on jaw size and tooth position, differences in how the upper and lower jaws develop, childhood habits such as thumb sucking or prolonged dummy use, tongue posture or tongue thrusting habits, and tooth loss that alters bite balance. In many cases, more than one factor contributes."
          }
        },
        {
          "@type": "Question",
          "name": "Does an overjet always need treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all overjets require treatment. A mild overjet that does not cause discomfort, tooth wear, or functional problems may simply be monitored during routine dental examinations. Whether treatment is recommended depends on the degree of the overjet, its effects on chewing, speech, and oral health, and individual circumstances. Your dentist can advise based on a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can an overjet increase the risk of dental injury?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Front teeth that protrude further forward may be more exposed during physical activity, sports, or accidental impact. Some studies suggest that a more pronounced overjet may be associated with an increased likelihood of dental trauma to the front teeth, though individual risk varies. Professional assessment can help evaluate the degree of the overjet and discuss any relevant precautions."
          }
        },
        {
          "@type": "Question",
          "name": "What treatment options may be available for an overjet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment options for an overjet depend on the underlying cause, the severity, and individual clinical findings. Options may include orthodontic treatment to adjust tooth positions, restorative approaches such as composite bonding, dental crowns, or porcelain veneers to improve how the teeth meet and their appearance, or monitoring if the overjet is mild and not causing functional problems. Your dentist can discuss the most appropriate options based on your individual assessment."
          }
        }
      ]
    }
  ],
  "/conditions/pain-after-filling": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pain After Filling / Sensitivity After Dental Work",
      "description": "Some people experience temporary sensitivity or mild discomfort after a dental filling or other dental work. This may occur as the tooth adjusts following treatment and can involve sensitivity to temperature, pressure, or sweet foods. Common causes include temporary inflammation, bite pressure from a slightly high filling, dentine sensitivity, and the depth of the original cavity. Professional assessment can help evaluate persistent symptoms and guide appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot or cold after a filling"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain or discomfort when biting down on the treated tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Lingering sensitivity that does not improve over time"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Throbbing or aching around the treated tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Swelling near the treated tooth or gum area"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sharp pain when consuming sweet foods or drinks"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pain After Filling",
          "item": "https://www.smiledentist.co.uk/conditions/pain-after-filling"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it normal to have pain after a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some degree of sensitivity or mild discomfort after a dental filling is relatively common and may occur as the tooth adjusts following treatment. In many cases, the sensation improves gradually over a short period. However, if pain persists for more than a few weeks, becomes more intense, or occurs specifically when biting, professional assessment may be appropriate to evaluate the cause."
          }
        },
        {
          "@type": "Question",
          "name": "How long does sensitivity after a filling usually last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The duration of post-filling sensitivity varies between individuals and depends on factors such as the size and depth of the filling, the type of material used, and individual tooth sensitivity. Many people find that sensitivity reduces within a few days to a few weeks. If sensitivity persists beyond this period or worsens, a dental review may help identify whether any adjustment or further care is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my tooth hurt when I bite down after a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain when biting down on a recently filled tooth may indicate that the filling surface is slightly high — meaning it contacts the opposing tooth before the surrounding teeth do. This can place uneven pressure on the treated tooth during chewing. A minor adjustment to the filling surface by your dentist may help resolve this type of discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "Should I go back to the dentist if my filling hurts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If discomfort after a filling persists for several weeks, becomes more intense, or is accompanied by swelling, it may be appropriate to arrange a review appointment. Your dentist can examine the treated tooth, assess the bite alignment, and determine whether any adjustment or further treatment may be needed. Persistent symptoms should not be ignored."
          }
        },
        {
          "@type": "Question",
          "name": "Can a filling cause sensitivity to hot and cold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, temporary sensitivity to hot and cold temperatures is relatively common after a filling, particularly if the cavity was deep or close to the nerve of the tooth. The inner layers of the tooth — including the dentine — may respond more strongly to temperature changes during the healing period. In most cases, this sensitivity reduces as the tooth settles. If it persists or worsens, professional evaluation may be helpful."
          }
        },
        {
          "@type": "Question",
          "name": "What can I do to manage sensitivity after a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While mild sensitivity often resolves on its own, you may find it helpful to avoid very hot, cold, or sweet foods and drinks for a short period after treatment. Avoiding placing excessive biting pressure on the treated tooth may also help. Maintaining careful oral hygiene around the area supports healing. If symptoms persist or worsen, arranging a dental review is recommended rather than attempting self-treatment."
          }
        }
      ]
    }
  ],
  "/conditions/pain-when-biting": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Pain When Biting / Pain When Chewing",
      "description": "Pain when biting or chewing is a symptom that can arise from several dental conditions. The discomfort may be sharp, dull, or pressure-related, and may occur when biting down or when releasing pressure from the tooth. Possible causes include cracked or fractured teeth, dental infection affecting the tooth pulp, high or uneven restorations, bite misalignment, or tooth decay that has weakened the tooth structure. Professional dental assessment helps identify the underlying cause and determine appropriate care.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sharp pain when biting down on a specific tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity or pain when releasing pressure from the tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain localised to one particular tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort when chewing harder or crunchier foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Occasional swelling or tenderness around the affected tooth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pain When Biting",
          "item": "https://www.smiledentist.co.uk/conditions/pain-when-biting"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does my tooth hurt when I bite down?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain when biting down can arise from several dental conditions, including a cracked or fractured tooth, dental infection, a high or uneven filling, bite misalignment, or tooth decay that has weakened the tooth structure. The discomfort may be sharp or dull and may occur when pressure is applied or when it is released. Professional dental assessment helps identify the specific cause and determine appropriate care."
          }
        },
        {
          "@type": "Question",
          "name": "Can a cracked tooth cause pain when biting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a cracked tooth is one of the more common causes of pain when biting. The crack may not always be visible to the naked eye, but when pressure is applied during chewing, the crack may flex slightly, causing sharp or sudden pain. In some cases, the pain is felt when releasing the bite rather than when biting down. Professional examination — sometimes involving special tests or imaging — can help identify cracks."
          }
        },
        {
          "@type": "Question",
          "name": "Is pain when biting always a sign of a serious problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Pain when biting can range from a minor issue — such as a slightly high filling that places uneven pressure on one tooth — to a more significant concern such as a cracked tooth or infection. Even mild symptoms should be evaluated professionally if they persist, as early assessment may help prevent the issue from progressing."
          }
        },
        {
          "@type": "Question",
          "name": "What does it mean if my tooth hurts when I release the bite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain that occurs specifically when releasing pressure from a tooth — rather than when biting down — is sometimes referred to as 'rebound pain' and may suggest a crack in the tooth. When the bite is released, the segments of the tooth may move apart slightly, irritating the nerve. This symptom is a common indicator that professional assessment is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Should I avoid chewing on a tooth that hurts when biting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a general precaution, it is sensible to avoid placing excessive pressure on a tooth that hurts when biting. Chewing on the opposite side and avoiding very hard or crunchy foods may help reduce discomfort while professional assessment is arranged. However, this is a temporary measure — the underlying cause should be evaluated by a dentist."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available for pain when biting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends entirely on the underlying cause, which is determined through professional examination. Options may include bite adjustment if a restoration is slightly high, a dental filling for minor structural damage or decay, a dental crown to strengthen a cracked or weakened tooth, root canal treatment if infection has reached the tooth pulp, or in some cases extraction if the tooth cannot be restored. Your dentist will recommend the most appropriate care based on clinical findings."
          }
        }
      ]
    }
  ],
  "/conditions/periodontitis": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Periodontitis (Advanced Gum Disease)",
      "description": "Periodontitis is an advanced stage of gum disease that affects the tissues and bone supporting the teeth. It usually develops from untreated gingivitis, when bacterial plaque beneath the gumline leads to inflammation and damage to supporting structures. Over time, the condition may affect gum attachment and bone levels around teeth. Professional dental assessment helps determine the severity of periodontal disease and appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Disease Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent gum inflammation and redness"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum recession causing teeth to appear longer"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding gums during brushing or flossing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent bad breath (halitosis)"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Loose or shifting teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite alignment or tooth position"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Periodontitis",
          "item": "https://www.smiledentist.co.uk/conditions/periodontitis"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between gingivitis and periodontitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gingivitis is the earliest stage of gum disease, involving inflammation of the gum tissue without permanent damage to the bone or tooth support. With appropriate care, gingivitis is often considered reversible. Periodontitis is a more advanced stage where the infection has spread beneath the gumline to affect deeper tissues and bone, potentially leading to gum recession, bone loss, and tooth mobility. Periodontitis is not reversible but can be managed and stabilised with professional treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Can periodontitis be cured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontitis involves permanent changes to the supporting structures of the teeth that cannot be fully reversed. However, with appropriate professional treatment and ongoing maintenance, the condition can typically be managed and stabilised to help prevent further progression. The aim of treatment is to control inflammation, reduce bacterial accumulation, and support the long-term health of the remaining gum and bone tissue."
          }
        },
        {
          "@type": "Question",
          "name": "What are the early signs of periodontitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early signs may include persistent gum inflammation, bleeding during brushing or flossing, gum recession that causes teeth to appear longer, persistent bad breath, and a change in how the teeth fit together when biting. Some patients may also notice increased spacing between teeth or a feeling that teeth are slightly loose. Because periodontitis can progress gradually, professional assessment is important if any of these symptoms are noticed."
          }
        },
        {
          "@type": "Question",
          "name": "Does periodontitis always lead to tooth loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. While advanced periodontitis is a leading cause of tooth loss in adults, early detection and appropriate management can help stabilise the condition and support the retention of affected teeth. The outcome depends on the severity of the disease at the time of diagnosis, the patient's response to treatment, and their commitment to ongoing maintenance and oral hygiene."
          }
        },
        {
          "@type": "Question",
          "name": "How is periodontitis treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment typically begins with professional periodontal cleaning to remove plaque and tartar from above and below the gumline. Deep cleaning procedures — sometimes called root surface debridement — may be used to treat deeper gum pockets. Following initial treatment, ongoing supportive periodontal therapy is usually recommended to monitor gum and bone health and manage the condition long-term. Treatment is guided by clinical findings specific to each individual."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I see my dentist if I have periodontitis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients with periodontitis typically require more frequent professional care than the standard six-monthly schedule. Depending on the severity and stability of the condition, your dentist or hygienist may recommend appointments every three to four months. These maintenance visits help monitor gum health, remove bacterial deposits, and assess whether the condition is remaining stable or requires further intervention."
          }
        }
      ]
    }
  ],
  "/conditions/receding-gums": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Receding Gums (Gum Recession)",
      "description": "Gum recession occurs when the gum tissue surrounding teeth gradually pulls back, exposing more of the tooth surface or root. This process may increase tooth sensitivity and affect gum health. Receding gums may develop gradually and often go unnoticed in early stages. Common causes include gum disease, aggressive brushing, plaque accumulation, teeth grinding, and natural ageing. Professional dental assessment helps determine the cause and appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Disease Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Teeth appearing longer than usual"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth sensitivity to hot or cold foods and drinks"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible root surfaces near the gumline"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Notches or indentations felt near the gumline"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Gum tenderness or irritation around receded areas"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Receding Gums",
          "item": "https://www.smiledentist.co.uk/conditions/receding-gums"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes gums to recede?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gum recession can result from a number of factors, including periodontal (gum) disease, aggressive brushing techniques, plaque and tartar accumulation, teeth grinding or clenching, and the natural ageing process. Periodontal disease is one of the most common underlying causes, as the bacterial infection can damage the gum tissue and bone supporting the teeth. Your dentist can assess the specific cause through a clinical examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can receding gums grow back?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once gum tissue has receded, it does not typically regenerate on its own. However, professional treatment can help manage the condition, address underlying causes such as gum disease, and support the health of the remaining gum tissue. The aim of treatment is to stabilise the condition and help prevent further recession rather than to reverse existing tissue loss. Your dentist can discuss the most appropriate management based on your individual situation."
          }
        },
        {
          "@type": "Question",
          "name": "Is gum recession serious?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gum recession itself is not always a cause for immediate concern, particularly if it is mild and stable. However, progressive recession may expose tooth root surfaces — which lack the protective enamel covering — leading to increased sensitivity and a higher risk of root decay. In more advanced cases, recession may affect tooth stability. Professional assessment can help determine the severity of the recession and whether treatment is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "How can I tell if my gums are receding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs include teeth appearing longer than usual, visible root surfaces near the gumline, increased sensitivity to hot or cold foods and drinks, notches or indentations that can be felt near the gumline, and gum tenderness or irritation. Because gum recession often develops gradually, changes may not be immediately obvious. Regular dental examinations can help detect recession in its earlier stages."
          }
        },
        {
          "@type": "Question",
          "name": "Can brushing too hard cause gum recession?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, aggressive brushing is a recognised contributing factor for gum recession. Using a hard-bristled toothbrush or applying excessive pressure when brushing can wear away the gum tissue over time, particularly along the outer surfaces of the teeth. Using a soft-bristled toothbrush and gentle circular or sweeping motions can help reduce the risk of brushing-related recession."
          }
        },
        {
          "@type": "Question",
          "name": "How is gum recession treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the cause and severity of the recession. Options may include professional cleaning to remove plaque and tartar, periodontal treatment to manage underlying gum disease, guidance on improved brushing techniques, and ongoing monitoring during routine dental visits. Treatment aims to address contributing factors, stabilise gum health, and help prevent further recession. Your dentist will recommend the most appropriate approach based on clinical findings."
          }
        }
      ]
    }
  ],
  "/conditions/sore-tongue-burning-mouth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Sore Tongue (Burning Mouth Symptoms)",
      "description": "A sore tongue or burning sensation in the mouth can affect daily comfort, with symptoms ranging from mild irritation and tingling to a persistent burning feeling. The tongue, lips, palate, or other oral tissues may be affected. In some cases symptoms may occur without visible changes in the mouth. Common causes include irritation from sharp tooth edges or restorations, dry mouth, nutritional deficiencies, reactions to oral care products, stress, hormonal changes, and medical conditions affecting oral tissues. Professional dental assessment can help identify possible underlying causes.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent burning, scalding, or tingling sensation in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tongue soreness or irritation"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Dryness or changes in taste perception"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Symptoms without visible changes in the oral tissues"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Discomfort that may worsen throughout the day"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sore Tongue (Burning Mouth Symptoms)",
          "item": "https://www.smiledentist.co.uk/conditions/sore-tongue-burning-mouth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does burning mouth syndrome feel like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Burning mouth symptoms are typically described as a persistent sensation of heat, tingling, or scalding in the mouth — most commonly affecting the tongue, but sometimes extending to the lips, palate, or other oral tissues. Some people experience the discomfort throughout the day, while others notice it worsening in the afternoon or evening. Changes in taste or a feeling of dryness may also be present. The intensity can vary from mild irritation to significant discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "What causes a persistently sore tongue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A persistently sore tongue can result from several factors. These may include irritation from sharp tooth edges or dental restorations, dry mouth (reduced saliva flow), nutritional deficiencies, reactions to certain oral care products, hormonal changes, stress, or medical conditions affecting oral tissues. In some cases, multiple factors may contribute simultaneously. Professional dental assessment can help identify possible underlying causes specific to your situation."
          }
        },
        {
          "@type": "Question",
          "name": "Should I see a dentist for a sore tongue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional assessment may be appropriate if a sore tongue or burning sensation persists for an extended period, interferes with eating or speaking, occurs alongside dry mouth or taste changes, or develops without an obvious cause. A dentist can examine the oral tissues, assess whether structural or dental factors may be contributing, and provide guidance on appropriate management."
          }
        },
        {
          "@type": "Question",
          "name": "Can dental work cause a sore tongue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, rough tooth surfaces, sharp edges on dental restorations, or ill-fitting dental appliances may irritate the tongue or other oral tissues. If irritation from dental work is suspected, your dentist can assess the area and, where appropriate, make adjustments to help reduce tissue contact or friction. This is one reason why professional assessment can be valuable when tongue discomfort develops."
          }
        },
        {
          "@type": "Question",
          "name": "Can dry mouth cause a burning sensation in the tongue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, reduced saliva flow — commonly known as dry mouth — can increase sensitivity and discomfort in the oral tissues, including the tongue. Saliva plays a protective role in keeping the mouth moist and comfortable. When saliva production is reduced, the oral tissues may become more vulnerable to irritation, which can contribute to burning or sore sensations. Your dentist can help assess whether dry mouth may be a contributing factor."
          }
        },
        {
          "@type": "Question",
          "name": "How is a sore tongue or burning mouth managed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Management depends on identifying the underlying cause through professional assessment. Approaches may include adjustments to dental restorations or appliances that may be causing irritation, advice on oral care products that are less likely to aggravate symptoms, guidance on maintaining oral hydration, and monitoring of oral health through regular dental examinations. Your dentist will recommend the most appropriate approach based on clinical findings."
          }
        }
      ]
    }
  ],
  "/conditions/swollen-face-jaw-tooth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Swollen Face or Jaw from a Tooth",
      "description": "Facial or jaw swelling caused by dental infection, abscess, advanced gum disease, or impacted teeth. The swelling occurs when infection spreads from the tooth to surrounding tissues, triggering an inflammatory response. Professional assessment and infection management are essential.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Wisdom Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible swelling of the face, cheek, or jaw"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Severe or worsening toothache"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty opening the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Fever or feeling generally unwell"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to pressure or biting"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Swollen Face or Jaw from a Tooth",
          "item": "https://www.smiledentist.co.uk/conditions/swollen-face-jaw-tooth"
        }
      ]
    }
  ],
  "/conditions/swollen-gums": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Swollen Gums",
      "description": "Swollen gums occur when the gum tissue becomes inflamed or irritated, causing the gums to appear red, enlarged, or tender. Gum swelling is often linked to plaque accumulation along the gumline, though other factors such as gingivitis, food debris, irritation from dental appliances, and hormonal changes may also contribute. Professional dental assessment helps identify the underlying cause and determine appropriate care.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Contouring",
          "url": "https://www.smiledentist.co.uk/gum-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Gum Disease Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Enlarged or puffy gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Redness around the gumline"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tenderness when brushing or eating"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bleeding gums during brushing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent bad breath"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Swollen Gums",
          "item": "https://www.smiledentist.co.uk/conditions/swollen-gums"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes swollen gums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swollen gums are most commonly caused by the accumulation of bacterial plaque along the gumline, which triggers an immune response leading to inflammation. Other contributing factors may include tartar build-up, food debris trapped between teeth, irritation from dental appliances, hormonal changes, and certain medications. In some cases, gum swelling may indicate early gum disease (gingivitis) or a more advanced periodontal condition. Professional assessment can help identify the specific cause."
          }
        },
        {
          "@type": "Question",
          "name": "Are swollen gums a sign of gum disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swollen gums can be an early sign of gum disease, particularly gingivitis — the earliest and most reversible stage. However, gum swelling can also result from other factors such as food impaction, irritation from dental work, or hormonal changes. The key distinguishing factor is whether the swelling is persistent and accompanied by other symptoms such as bleeding or tenderness. Professional dental assessment can help determine whether gum disease is present."
          }
        },
        {
          "@type": "Question",
          "name": "How long should I wait before seeing a dentist for swollen gums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If gum swelling persists for more than a few days, is accompanied by bleeding, pain, or bad breath, or if the swelling appears to be spreading, it may be appropriate to arrange a professional dental assessment. While mild, temporary swelling may resolve with improved oral hygiene, persistent symptoms are worth having evaluated to identify and address any underlying cause."
          }
        },
        {
          "@type": "Question",
          "name": "Can swollen gums go away on their own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mild gum swelling caused by temporary irritation — such as food trapped between teeth or a minor brushing injury — may resolve on its own within a few days. However, swelling caused by plaque accumulation, tartar build-up, or early gum disease typically requires professional intervention alongside improved oral hygiene to address the underlying cause. Persistent swelling should be evaluated by a dentist."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prevent swollen gums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive measures include brushing teeth twice daily with fluoride toothpaste using a soft-bristled toothbrush, cleaning between teeth daily using floss or interdental brushes, attending regular dental examinations, and maintaining professional hygiene appointments. These practices help reduce plaque accumulation along the gumline — the primary trigger for gum inflammation. Your dentist or hygienist can provide personalised guidance on the most effective oral hygiene techniques."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available for swollen gums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the underlying cause, which is determined through professional examination. Options may include professional dental cleaning to remove plaque and tartar, periodontal treatment if gum disease is identified, guidance on improved brushing and interdental cleaning techniques, and ongoing monitoring during routine dental visits. Treatment aims to address the cause of inflammation and support long-term gum health."
          }
        }
      ]
    }
  ],
  "/conditions/teeth-grinding-bruxism": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Teeth Grinding (Bruxism)",
      "description": "Teeth grinding, also known as bruxism, involves involuntary clenching or grinding of the teeth. It may occur during sleep or while awake. Bruxism may affect tooth structure, jaw muscles, and overall oral comfort. Common causes include stress and anxiety, sleep-related factors, bite imbalances, certain medications, lifestyle factors, and medical conditions affecting muscle activity. Professional assessment can help identify underlying causes and determine appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth wear or flattened biting surfaces"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw pain or stiffness, particularly upon waking"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Frequent headaches, especially in the temple area"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Increased tooth sensitivity"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Cracked or chipped teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Teeth Grinding (Bruxism)",
          "item": "https://www.smiledentist.co.uk/conditions/teeth-grinding-bruxism"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is bruxism?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bruxism refers to the involuntary grinding or clenching of the teeth. It may occur during sleep (sleep bruxism) or during waking hours (awake bruxism). Many people are unaware they grind their teeth until symptoms such as tooth wear, jaw pain, or headaches develop. A dental examination can help identify signs of bruxism and determine whether any management or protection is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "What causes teeth grinding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teeth grinding may result from a combination of factors. Common contributors include stress and anxiety, sleep-related factors, bite imbalances or misaligned teeth, certain medications, and lifestyle factors such as caffeine or alcohol consumption. In some cases, medical conditions affecting muscle activity may also play a role. Professional assessment can help identify which factors may be contributing to your symptoms."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I grind my teeth at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Since sleep bruxism occurs unconsciously, many people are unaware of the habit. Common indicators include waking with jaw stiffness or pain, tooth sensitivity, headaches — particularly upon waking — and a partner noticing grinding sounds during the night. Your dentist may also identify characteristic patterns of tooth wear during a routine examination that suggest nocturnal grinding."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth grinding damage my teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over time, persistent teeth grinding may contribute to gradual tooth wear, enamel erosion, and in some cases, cracked or chipped teeth. The extent of any damage depends on the frequency and intensity of grinding, as well as how early the condition is identified and managed. Regular dental examinations help monitor for signs of wear and allow timely intervention where appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available for bruxism?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Management of bruxism depends on the underlying cause and severity, determined through professional assessment. Options may include custom-made night guards or occlusal splints to protect the teeth during sleep, advice on stress management or sleep habits, monitoring of tooth wear during regular dental visits, and restorative treatment for any teeth that have already been affected. Your dentist will recommend the most appropriate approach based on clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "Can stress cause teeth grinding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stress and anxiety are considered significant contributing factors in many cases of bruxism. Periods of heightened stress may increase the likelihood of clenching or grinding, particularly during sleep. While addressing stress alone may not fully resolve bruxism, stress management techniques may form part of a broader approach to managing the condition alongside professional dental care."
          }
        }
      ]
    }
  ],
  "/conditions/temporomandibular-disorder-tmj-pain": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Temporomandibular Disorder (TMD/TMJ Pain)",
      "description": "Temporomandibular disorder (TMD) affects the jaw joint and surrounding muscles. The temporomandibular joint (TMJ) allows the jaw to move during speaking, chewing, and yawning. Symptoms may include jaw pain, clicking sounds, stiffness, or difficulty opening the mouth fully. Common causes include teeth grinding, jaw muscle strain, injury, bite misalignment, stress-related tension, and arthritis. Professional assessment can help identify possible causes and appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw pain or tenderness"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Clicking, popping, or grating sounds when opening the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty or discomfort when chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Stiffness or limited jaw movement"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Headaches, particularly in the temple area"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain radiating to the face, ears, or neck"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Temporomandibular Disorder (TMD/TMJ Pain)",
          "item": "https://www.smiledentist.co.uk/conditions/temporomandibular-disorder-tmj-pain"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is temporomandibular disorder (TMD)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Temporomandibular disorder (TMD) is a term used to describe conditions affecting the temporomandibular joint (TMJ) — the joint that connects the lower jaw to the skull — and the surrounding muscles. Symptoms may include jaw pain, clicking or popping sounds, stiffness, difficulty opening the mouth fully, and in some cases headaches or facial discomfort. TMD may be caused by a range of factors, and professional dental assessment can help identify the underlying cause."
          }
        },
        {
          "@type": "Question",
          "name": "What causes TMJ pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TMJ pain may result from several contributing factors. Common causes include teeth grinding or clenching (bruxism), jaw muscle strain, injury or trauma to the jaw, misalignment of the teeth or bite changes, stress-related muscle tension, and arthritis affecting the jaw joint. In many cases, multiple factors may contribute simultaneously. Professional assessment can help determine which factors may be relevant to your symptoms."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I have TMD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs of TMD include pain or tenderness in the jaw area, clicking or popping sounds when opening or closing the mouth, difficulty or discomfort when chewing, stiffness or limited movement of the jaw, headaches — particularly in the temple area — and pain that may extend to the face, ears, or neck. If you experience any of these symptoms persistently, professional dental assessment can help determine whether TMD may be a contributing factor."
          }
        },
        {
          "@type": "Question",
          "name": "When should I see a dentist for jaw pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional assessment may be appropriate if jaw pain persists or worsens over time, clicking or popping sounds occur frequently, difficulty opening or closing the mouth develops, pain spreads to the face, ears, or head, or if jaw symptoms are affecting your ability to eat or speak comfortably. A dental examination can help identify possible causes and determine the most appropriate management approach."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments are available for TMD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Management of TMD depends on the underlying cause and severity, determined through professional assessment. Options may include custom-made occlusal splints or bite guards to reduce pressure on the jaw joint, advice on jaw relaxation techniques and muscle care, monitoring of symptoms during regular dental visits, and in some cases, restorative treatment to address bite-related factors. Your dentist will recommend the most appropriate approach based on clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth grinding cause TMJ problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, teeth grinding (bruxism) is considered one of the more common contributing factors in temporomandibular disorder. The repetitive grinding or clenching places significant pressure on the jaw joint and surrounding muscles, which may lead to pain, stiffness, and joint dysfunction over time. Where bruxism is identified as a contributing factor, your dentist may recommend a night guard or occlusal splint to help reduce the forces on the jaw joint."
          }
        }
      ]
    }
  ],
  "/conditions/tooth-decay": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Tooth Decay",
      "description": "Tooth decay is a process where the enamel and dentine of the tooth are gradually damaged by acid-producing bacteria in dental plaque. It occurs when bacteria feed on sugars from food and drink, producing acids that dissolve the minerals in the tooth surface. Without treatment, decay can progress deeper into the tooth structure, potentially reaching the inner pulp. Professional dental assessment helps identify decay at various stages and determine appropriate treatment.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Tooth sensitivity to hot, cold, or sweet foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible dark spots or holes in teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when chewing or biting"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent toothache"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste or bad breath"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tooth Decay",
          "item": "https://www.smiledentist.co.uk/conditions/tooth-decay"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is tooth decay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth decay is a process where the hard outer layer of the tooth (enamel) and the underlying layer (dentine) are gradually damaged by acids produced by bacteria in dental plaque. When bacteria feed on sugars from food and drink, they produce acids that dissolve the minerals in the tooth surface. Over time, this repeated acid exposure can weaken the enamel and form cavities. Professional dental assessment can identify decay at various stages and determine appropriate treatment."
          }
        },
        {
          "@type": "Question",
          "name": "What are the early signs of tooth decay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In its earliest stages, tooth decay may not cause any noticeable symptoms. As it progresses, common signs may include sensitivity to hot, cold, or sweet foods and drinks, visible dark spots or discolouration on the tooth surface, pain when biting or chewing, and a persistent toothache. In some cases, bad breath or an unpleasant taste may develop. If you notice any of these signs, professional dental assessment can help determine whether decay is present."
          }
        },
        {
          "@type": "Question",
          "name": "Can tooth decay be reversed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In its very earliest stages — before a cavity has formed — the process of enamel demineralisation may be slowed or potentially reversed through improved oral hygiene, fluoride application, and dietary changes. However, once a cavity has developed in the tooth structure, the damage cannot repair itself and typically requires professional treatment such as a filling. This is one reason why regular dental examinations are important for early identification."
          }
        },
        {
          "@type": "Question",
          "name": "How is tooth decay treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment depends on the stage and extent of the decay, determined through professional examination. Options may include preventive care such as fluoride application for early enamel changes, dental fillings to repair cavities, dental crowns if a large area of tooth structure is affected, root canal treatment if infection reaches the tooth pulp, or in some cases extraction if the tooth cannot be restored. Your dentist will recommend the most appropriate approach based on clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prevent tooth decay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive measures include brushing teeth twice daily with fluoride toothpaste, cleaning between teeth daily using floss or interdental brushes, reducing the frequency of sugary foods and drinks, and attending regular dental examinations. Professional hygiene appointments can also help remove plaque and tartar from areas that are difficult to clean at home. Your dentist can provide personalised guidance on the most effective preventive care for your situation."
          }
        },
        {
          "@type": "Question",
          "name": "Does tooth decay always cause pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Tooth decay in its early stages often causes no pain or noticeable symptoms, which is why it can progress without the person being aware. Pain typically develops when the decay has progressed deeper into the tooth, reaching the more sensitive dentine layer or the inner pulp. This is one reason why regular dental check-ups are important — your dentist can identify decay before symptoms develop and recommend timely treatment."
          }
        }
      ]
    }
  ],
  "/conditions/tooth-discolouration": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Tooth Discolouration",
      "description": "Tooth discolouration refers to changes in the natural colour of teeth. It may present as yellowing, browning, greying, or darkening and can result from extrinsic surface staining or intrinsic changes within the tooth structure. Common contributing factors include diet, smoking, ageing, certain medications, dental trauma, and plaque or tartar accumulation. Professional dental assessment helps identify the type and cause of discolouration and determine the most appropriate management approach.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Teeth Whitening",
          "url": "https://www.smiledentist.co.uk/teeth-whitening-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Yellow, brown, or grey tooth colour"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Dark patches or surface staining on enamel"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven colour between teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes affecting smile appearance"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tooth Discolouration",
          "item": "https://www.smiledentist.co.uk/conditions/tooth-discolouration"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes tooth discolouration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth discolouration may result from a range of factors. Surface (extrinsic) stains are commonly caused by regular consumption of tea, coffee, red wine, or other deeply pigmented foods and drinks, as well as smoking or tobacco use. Internal (intrinsic) staining may occur due to dental trauma, certain medications taken during tooth development, excessive fluoride exposure, or the natural ageing process. In many cases, multiple factors contribute to changes in tooth colour."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between extrinsic and intrinsic tooth staining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extrinsic stains occur on the outer enamel surface of the tooth and are typically caused by external factors such as food, drink, or tobacco. These stains may often be improved through professional cleaning or whitening. Intrinsic stains occur within the internal structure of the tooth and may be linked to trauma, medication, developmental factors, or ageing. The type of staining influences which management approach may be most appropriate, which is why professional assessment is recommended."
          }
        },
        {
          "@type": "Question",
          "name": "Can professional cleaning remove tooth stains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional cleaning can be effective at removing many surface (extrinsic) stains caused by food, drink, and tobacco deposits. A dental hygienist uses specialised instruments to remove plaque, tartar, and surface staining from the teeth. However, intrinsic staining — which occurs within the tooth structure — may not respond to cleaning alone and may require alternative approaches such as whitening or restorative treatment. Your dentist can advise on the most appropriate option following assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Is tooth discolouration a sign of a dental problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Many instances of tooth discolouration are related to lifestyle factors such as diet or smoking and do not indicate an underlying dental condition. However, in some cases, discolouration — particularly if a single tooth becomes noticeably darker — may indicate trauma, nerve damage, or internal changes within the tooth. Professional assessment can help determine whether discolouration is a cosmetic concern or may indicate an underlying dental issue that warrants further investigation."
          }
        },
        {
          "@type": "Question",
          "name": "Can teeth whitening treat all types of discolouration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional teeth whitening may improve the appearance of many types of tooth discolouration, but results depend on the type and cause of the staining. Extrinsic stains typically respond well to whitening treatments. Intrinsic staining may be more challenging to address with whitening alone, and alternative approaches such as dental bonding or porcelain veneers may be considered. Your dentist can assess the type of staining and recommend the most appropriate approach based on clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prevent my teeth from becoming stained?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive measures include maintaining good oral hygiene with twice-daily brushing and interdental cleaning, limiting consumption of staining foods and drinks such as coffee, tea, and red wine, avoiding smoking and tobacco use, rinsing the mouth with water after consuming staining substances, and attending regular dental examinations and hygiene appointments. While some degree of natural colour change may occur with ageing, these measures can help minimise the accumulation of surface stains."
          }
        }
      ]
    }
  ],
  "/conditions/tooth-sensitivity": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Tooth Sensitivity",
      "description": "Tooth sensitivity is a common dental complaint affecting many adults, often presenting as sharp discomfort when consuming hot, cold, or sweet foods and drinks. It may occur when the protective enamel or gum tissue no longer fully shields the inner tooth structure, allowing stimuli to reach the dentine and trigger nerve responses. Professional dental assessment helps determine the cause — which may include enamel wear, gum recession, tooth decay, or cracked teeth — and the most appropriate management approach.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sharp discomfort when drinking cold liquids"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when consuming hot beverages"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to sweet or acidic foods"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Brief pain when brushing certain teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Localised sensitivity affecting one tooth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tooth Sensitivity",
          "item": "https://www.smiledentist.co.uk/conditions/tooth-sensitivity"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes tooth sensitivity to hot and cold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth sensitivity to hot and cold typically occurs when the inner layer of the tooth — known as dentine — becomes exposed. Dentine contains microscopic channels (tubules) that connect to the tooth nerve, and when stimuli such as temperature reach these tubules, they can trigger a sharp, brief pain response. Common reasons for dentine exposure include enamel wear from brushing or acidic foods, gum recession that exposes the root surface, tooth decay, cracked teeth, or recent dental procedures. In many cases, several factors may contribute simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Is tooth sensitivity a sign of a serious problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth sensitivity is not always a sign of a serious dental problem. In many cases, it may be related to temporary factors such as recent dental treatment or minor enamel wear. However, persistent or worsening sensitivity — particularly if it affects a specific tooth — may indicate an underlying issue such as decay, a crack in the tooth, or gum recession that warrants professional assessment. If sensitivity interferes with eating or drinking, or does not improve over time, arranging a dental examination is advisable."
          }
        },
        {
          "@type": "Question",
          "name": "Can sensitive teeth be treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The management of tooth sensitivity depends on the underlying cause, which is determined through professional clinical examination. Treatment may include desensitising applications or fluoride varnishes to help protect exposed dentine, dental fillings if decay is contributing, treatment for gum recession if root surfaces are exposed, or bite adjustments if tooth wear or grinding is a factor. Your dentist will assess the cause of your sensitivity and recommend the most appropriate approach based on clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "Do desensitising toothpastes help with tooth sensitivity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desensitising toothpastes may help reduce sensitivity for some patients, particularly when the sensitivity is related to minor enamel wear or temporary dentine exposure. These products typically work by blocking the transmission of sensation through the dentine tubules. However, they are not a substitute for professional dental assessment, as the underlying cause of sensitivity should be identified to determine whether further treatment may be appropriate. Your dentist can advise whether a specific product may be suitable as part of your care plan."
          }
        },
        {
          "@type": "Question",
          "name": "Why is only one of my teeth sensitive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sensitivity affecting a single tooth may indicate a localised issue such as a small area of decay, a crack or fracture in the tooth, a receding gumline exposing the root surface, or a recent dental restoration. Single-tooth sensitivity is often more specific in its cause than generalised sensitivity affecting multiple teeth. Professional examination can help identify the underlying reason and determine whether treatment is needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can tooth sensitivity go away on its own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some forms of tooth sensitivity may improve over time without treatment, particularly if the cause is temporary — such as sensitivity following a recent dental procedure or minor, early-stage enamel changes. However, sensitivity that persists, worsens, or is associated with other symptoms such as pain when biting should be assessed professionally. Early identification of the underlying cause may help prevent the issue from progressing and allow for more conservative management."
          }
        }
      ]
    }
  ],
  "/conditions/toothache": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Toothache",
      "description": "A toothache is pain in or around a tooth, typically caused by dental decay, infection, a cracked tooth, gum disease, or other dental conditions. Treatment depends on the underlying cause and may include fillings, root canal treatment, dental crowns, periodontal treatment, or extraction.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment",
          "url": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Persistent or throbbing tooth pain"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Sensitivity to hot, cold, or sweet stimuli"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain when biting or chewing"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Swelling of the gum or face"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste in the mouth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Toothache",
          "item": "https://www.smiledentist.co.uk/conditions/toothache"
        }
      ]
    }
  ],
  "/conditions/underbite": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Underbite",
      "description": "An underbite is a form of malocclusion where the lower teeth sit in front of the upper teeth when the mouth is closed. The degree of misalignment varies between individuals and may be related to jaw size, tooth position, or a combination of both factors. Bite alignment differences may affect appearance, chewing mechanics, and the distribution of pressure across the teeth. Professional dental assessment helps evaluate bite position and determine appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry",
          "url": "https://www.smiledentist.co.uk/cosmetic-dentistry-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Composite Bonding",
          "url": "https://www.smiledentist.co.uk/composite-bonding-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Porcelain Veneers",
          "url": "https://www.smiledentist.co.uk/porcelain-veneers-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Contouring",
          "url": "https://www.smiledentist.co.uk/tooth-contouring-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Lower teeth extending in front of upper teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Chewing discomfort or inefficiency"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven tooth wear"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort or muscle tension"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in speech or bite function"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Underbite",
          "item": "https://www.smiledentist.co.uk/conditions/underbite"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an underbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An underbite is a form of malocclusion where the lower teeth sit in front of the upper teeth when the mouth is closed. The degree of misalignment varies between individuals — some underbites are mild and cause few noticeable symptoms, while more pronounced cases may affect chewing, speech, or tooth wear. An underbite may be related to the size or position of the jaw, the alignment of the teeth, or a combination of both factors."
          }
        },
        {
          "@type": "Question",
          "name": "What causes an underbite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An underbite may develop due to a combination of factors. Genetic influences play a significant role, as jaw size and shape are largely inherited. Natural jaw growth patterns during childhood and adolescence may result in the lower jaw growing more prominently than the upper jaw. Childhood habits, tooth loss affecting bite balance, and gradual changes in tooth position over time may also contribute. In many cases, several factors are involved simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Can an underbite cause dental problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the degree of misalignment, an underbite may contribute to uneven pressure on certain teeth, which can lead to gradual wear over time. The jaw muscles may also work harder during chewing, which may contribute to muscle tension or discomfort. However, not everyone with an underbite experiences problems. Professional dental assessment can help evaluate whether your bite alignment is contributing to any oral health concerns and determine whether management may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "How is an underbite assessed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental examination allows your dentist to evaluate bite alignment, jaw function, and tooth position. This may involve visual examination, assessment of how the teeth come together when biting, and evaluation of any signs of tooth wear or jaw discomfort. In some cases, dental imaging may be recommended to assess the underlying jaw structure. The findings inform whether monitoring, preventive measures, or active treatment may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Can an underbite be corrected in adults?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Management options for an underbite in adults depend on the cause and severity of the misalignment, as determined through professional clinical assessment. Options may include orthodontic approaches, restorative treatments to improve bite balance, or in some cases referral for specialist evaluation. The most appropriate approach depends on individual clinical findings, and your dentist can discuss the options that may be suitable for your situation."
          }
        },
        {
          "@type": "Question",
          "name": "Does an underbite always need treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Mild underbites that do not cause functional problems, discomfort, or significant tooth wear may simply be monitored during routine dental examinations. Treatment is generally considered when the misalignment contributes to symptoms such as difficulty chewing, jaw discomfort, speech changes, or progressive tooth wear. Your dentist can advise whether active treatment or ongoing monitoring may be more appropriate based on your individual circumstances."
          }
        }
      ]
    }
  ],
  "/conditions/white-spots-on-teeth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "White Spots on Teeth",
      "description": "White spots on teeth are areas where the enamel appears lighter or chalkier than surrounding tooth structure. These spots may indicate early enamel demineralisation, fluorosis, developmental enamel changes, or the early stages of tooth decay. Professional dental assessment helps determine the underlying cause and appropriate management approach.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Hygiene",
          "url": "https://www.smiledentist.co.uk/hygiene-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Teeth Whitening",
          "url": "https://www.smiledentist.co.uk/teeth-whitening-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "White or chalky patches on tooth surface"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Uneven tooth colour"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Spots near gumline or around orthodontic brackets"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in enamel appearance over time"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Spots on Teeth",
          "item": "https://www.smiledentist.co.uk/conditions/white-spots-on-teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes white spots on teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "White spots on teeth may result from several different causes. The most common is enamel demineralisation, where acids produced by plaque bacteria dissolve minerals from the tooth surface, creating a chalky white appearance. Other causes include dental fluorosis — which occurs when excess fluoride is absorbed during tooth development in childhood — poor oral hygiene during orthodontic treatment, and developmental changes in enamel formation. Professional dental assessment can help identify which factor is most likely involved."
          }
        },
        {
          "@type": "Question",
          "name": "Are white spots on teeth a sign of decay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "White spots may represent the earliest visible stage of enamel demineralisation, which can precede cavity formation if left unaddressed. However, not all white spots indicate active decay. Some white spots are related to fluorosis or developmental enamel changes and may have been present since childhood without progressing. Professional examination is the most reliable way to determine whether a white spot represents early decay or another cause, and whether any intervention may be appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Can white spots on teeth be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The management of white spots depends on the underlying cause, as determined through professional clinical assessment. In some cases, fluoride treatments or improved oral hygiene may help support enamel remineralisation and reduce the appearance of early demineralisation lesions. For cosmetic concerns, options such as microabrasion or professional whitening may be discussed with your dentist. The most appropriate approach depends on individual clinical findings, and your dentist can advise on suitable options."
          }
        },
        {
          "@type": "Question",
          "name": "Why do white spots appear after braces are removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "White spots after orthodontic treatment are typically the result of enamel demineralisation that occurred around the brackets during treatment. Brackets and wires can make thorough cleaning more difficult, allowing plaque to accumulate on the enamel surface around the bonded areas. The acids produced by plaque bacteria dissolve minerals from the enamel, leaving lighter, chalky patches when the brackets are removed. Careful oral hygiene during orthodontic treatment is important to help reduce this risk."
          }
        },
        {
          "@type": "Question",
          "name": "Can white spots on teeth go away on their own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some cases, very early-stage demineralisation may partially improve over time through natural remineralisation — a process supported by saliva, fluoride exposure, and good oral hygiene. However, established white spots — particularly those related to fluorosis or developmental changes — are unlikely to resolve without professional management. If you notice white spots developing or changing, professional assessment can help determine whether the spots may benefit from intervention or monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "How can I prevent white spots on my teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive measures include maintaining good oral hygiene with twice-daily brushing using fluoride toothpaste, cleaning between teeth daily, limiting sugary snacks and acidic drinks, and attending regular dental examinations and hygiene appointments. During orthodontic treatment, extra care with cleaning around brackets and wires is particularly important. Your dentist or hygienist can provide personalised advice on maintaining enamel health and reducing the risk of white spot formation."
          }
        }
      ]
    }
  ],
  "/conditions/wisdom-tooth-pain-pericoronitis": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Wisdom Tooth Pain (Pericoronitis)",
      "description": "Pericoronitis is inflammation of the gum tissue around a partially erupted wisdom tooth, caused by bacterial accumulation beneath the gum flap. Symptoms include localised pain, swelling, difficulty opening the mouth, and in severe cases, spreading infection. Management may include professional cleaning, infection control, and wisdom tooth extraction if recurrent.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Emergency Dental Care",
          "url": "https://www.smiledentist.co.uk/emergency-dental-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Wisdom Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Tooth Extraction",
          "url": "https://www.smiledentist.co.uk/tooth-extraction-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Periodontal Treatment",
          "url": "https://www.smiledentist.co.uk/periodontal-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Pain at the back of the mouth around the wisdom tooth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Swollen or tender gum tissue"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Difficulty opening the mouth (trismus)"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Bad taste or odour in the mouth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Jaw discomfort or facial swelling"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wisdom Tooth Pain (Pericoronitis)",
          "item": "https://www.smiledentist.co.uk/conditions/wisdom-tooth-pain-pericoronitis"
        }
      ]
    }
  ],
  "/conditions/worn-teeth": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Worn Teeth (Attrition)",
      "description": "Tooth attrition refers to the gradual wearing down of tooth surfaces through direct tooth-to-tooth contact. This type of wear often occurs when teeth repeatedly rub against each other during chewing or grinding. Over time, attrition may reduce tooth height and affect the protective enamel layer. Professional dental assessment helps identify tooth wear and determine appropriate management.",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Tooth"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Dental Examination",
          "url": "https://www.smiledentist.co.uk/dental-examination-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Dental Crowns",
          "url": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "MedicalProcedure",
          "name": "White Fillings",
          "url": "https://www.smiledentist.co.uk/white-fillings-london"
        }
      ],
      "signOrSymptom": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Flattened or shortened teeth"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Increased tooth sensitivity"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Changes in bite or chewing comfort"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Rough or uneven tooth edges"
        },
        {
          "@type": "MedicalSignOrSymptom",
          "name": "Visible wear on tooth surfaces"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conditions",
          "item": "https://www.smiledentist.co.uk/conditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Worn Teeth (Attrition)",
          "item": "https://www.smiledentist.co.uk/conditions/worn-teeth"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is tooth attrition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth attrition is a type of tooth wear caused by direct tooth-to-tooth contact. It occurs when opposing tooth surfaces rub against each other during chewing, grinding, or clenching. Over time, this repeated mechanical contact can gradually reduce the height and shape of the teeth. Attrition is distinct from other forms of tooth wear such as erosion — which is caused by acid — and abrasion — which results from external forces such as aggressive brushing. Many people experience some degree of attrition as a natural part of ageing, though certain habits and conditions can accelerate the process."
          }
        },
        {
          "@type": "Question",
          "name": "What causes teeth to wear down?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teeth may wear down due to a combination of factors. Bruxism — the habit of grinding or clenching the teeth, often during sleep — is one of the most common causes of accelerated tooth wear. Bite misalignment can cause uneven pressure distribution, leading to localised wear on certain teeth. Age-related changes in enamel also contribute, as the protective outer layer naturally becomes thinner over time. Lifestyle factors such as chewing habits and dietary choices may play a supporting role. In many cases, several contributing factors are involved simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Can worn teeth be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The management of worn teeth depends on the extent of wear and the underlying cause, as determined through professional clinical assessment. For mild to moderate wear, dental bonding or composite fillings may be used to restore tooth shape and protect exposed surfaces. In cases where more significant structural support is needed, dental crowns may be recommended. Protective night guards can help reduce further wear in patients who grind their teeth. Your dentist can advise on the most appropriate approach based on your individual clinical findings."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my teeth are worn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs of tooth wear may develop gradually and can include teeth that appear shorter or flatter than before, increased sensitivity to hot or cold temperatures, rough or uneven edges on the biting surfaces, changes in how the teeth come together when biting, and visible wear patterns on the tooth surfaces. Some patients notice these changes themselves, while others may first become aware of tooth wear during a routine dental examination. Regular dental check-ups allow your dentist to monitor tooth surfaces and identify wear patterns early."
          }
        },
        {
          "@type": "Question",
          "name": "Will a night guard help with tooth wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A night guard — also known as an occlusal splint — is a custom-made protective appliance worn during sleep. It creates a barrier between the upper and lower teeth, helping to distribute biting forces and reduce direct tooth-to-tooth contact. For patients who grind or clench their teeth during sleep, a night guard may help protect tooth surfaces from further wear. However, a night guard addresses the mechanical aspect of grinding rather than the underlying cause. Your dentist can assess whether a night guard may be appropriate as part of a broader management plan."
          }
        },
        {
          "@type": "Question",
          "name": "Is some tooth wear normal with age?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, some degree of tooth wear is a natural part of ageing. Over a lifetime of chewing, the enamel on tooth surfaces gradually becomes thinner, and subtle changes in tooth shape may occur. This natural wear is typically slow and evenly distributed. However, when tooth wear progresses more rapidly than expected, becomes localised to certain teeth, or begins to cause symptoms such as sensitivity or changes in bite, professional assessment may be appropriate. Your dentist can evaluate whether the degree of wear is within normal limits or may benefit from management."
          }
        }
      ]
    }
  ],
  "/dental-crowns-london/dental-crown-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Crown",
      "alternateName": [
        "Tooth Crown",
        "Zirconia Crown",
        "E-max Crown",
        "Ceramic Crown",
        "Cap"
      ],
      "description": "Dental crowns in London — full-contour zirconia or E-max lithium disilicate ceramic crowns. A custom crown covers a tooth that is fractured, heavily filled or root-treated to restore strength, shape and appearance. £995 per tooth (£497.50 with our £20/month membership). Carried out by GDC-registered dentists at Smile Dentist London (South Kensington, SW7).",
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Teeth",
      "howPerformed": "Under local anaesthetic, the damaged tooth is conservatively prepared. A digital scan or conventional impression is taken and a custom zirconia or E-max ceramic crown is made by a UK dental laboratory. A temporary crown is worn for typically 1–2 weeks. At the second appointment the final crown is fitted and bonded.",
      "url": "https://www.smiledentist.co.uk/dental-crowns-london/dental-crown-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-crowns-london/dental-crown-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "Dental Crown — per tooth (zirconia or E-max)",
        "price": "995.00",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smiledentist.co.uk/dental-crowns-london/dental-crown-cost",
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "995.00",
          "priceCurrency": "GBP",
          "unitText": "per crown",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "crown"
          }
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns",
          "item": "https://www.smiledentist.co.uk/dental-crowns-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/dental-crowns-london/dental-crown-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-crowns-london/dental-crown-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a dental crown cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, a dental crown costs £995 per tooth. Members of our £20/month dental plan pay £497.50 per crown (50% off). A clinical examination is required first — £30 for new patients or £95 for returning patients (£47.50 with membership). The final fee is always confirmed in a written treatment plan after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the £995 crown fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The £995 fee covers tooth preparation, shade selection, digital or conventional impressions, a high-quality temporary crown to wear between visits, laboratory fabrication of your custom zirconia or E-max ceramic crown by a UK dental laboratory, fitting and bonding, bite check and final adjustment, and a follow-up review where clinically appropriate. Examinations and any clinically indicated x-rays are charged separately."
          }
        },
        {
          "@type": "Question",
          "name": "What materials do you use for dental crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We typically use full-contour zirconia or E-max lithium disilicate ceramic crowns. Zirconia is exceptionally strong and is often selected for back teeth and patients who grind. E-max offers excellent translucency and aesthetics and is often selected for visible front teeth. Your dentist will recommend the most appropriate material for the specific tooth, your bite and your goals after a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental crowns last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With appropriate care — good oral hygiene, regular hygiene appointments, a night guard if you grind, and avoiding biting on very hard items — many crowns remain functional for in excess of 10–15 years. The crown itself does not decay, but the natural tooth supporting it can, so professional care of the gum margin is important. Longevity varies between individuals and we do not guarantee a specific lifespan; your dentist will discuss realistic expectations for your case."
          }
        },
        {
          "@type": "Question",
          "name": "Will having a crown damage my tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A crown requires conservative reduction of the natural tooth so that the ceramic crown can sit flush with your bite. This preparation is irreversible. Crowns are usually recommended where there is already substantial damage to the tooth (large fillings, fracture, after root canal treatment) and the alternative — leaving the tooth as it is — would carry a higher risk of fracture or further loss. Your dentist will discuss the preparation needed for your specific case and the alternatives before any irreversible work is started."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a root canal before my crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. A crown is required where the tooth structure is too damaged to be reliably restored with a filling. Root canal treatment is a separate procedure that is needed only when the nerve of the tooth is irreversibly inflamed or infected. Some teeth need both; some need only one. Your dentist will explain which procedures your tooth requires after clinical and radiographic assessment, and each is quoted to you separately in writing."
          }
        },
        {
          "@type": "Question",
          "name": "How many appointments does a crown take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A conventional crown is usually completed across two appointments: tooth preparation and impressions / digital scan at the first appointment (with a temporary crown to wear in between), and fitting of the final crown at the second appointment, typically 1–2 weeks later."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients pay £30 for the first examination; returning patients pay £95 (£47.50 with membership). Diagnostic x-rays are only taken when clinically indicated and are quoted in writing before any radiographs are taken — £30 for a small periapical film."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation you will receive an itemised written treatment plan listing the tooth (or teeth) to be crowned, the material chosen, and the total fee. Treatment only begins after you have signed informed consent. If a separate procedure is required first (for example a hygiene visit, replacement of a leaking filling, or root canal treatment), those fees would be quoted to you separately in writing for your approval."
          }
        },
        {
          "@type": "Question",
          "name": "Are crowns available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. NHS-funded crowns are available where there is a clinical need; private crowns offer a wider choice of high-aesthetic materials such as full-contour zirconia and E-max ceramic, longer appointment times, and a choice of clinician. Patients who prefer these benefits are welcome to book with us."
          }
        },
        {
          "@type": "Question",
          "name": "Are crown prices the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — a dental crown is £995 per tooth at both our South Kensington (SW7) and City of London (EC4) clinics."
          }
        }
      ]
    }
  ],
  "/dental-implants-london/dental-implant-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "alternateName": [
        "Single Tooth Implant",
        "Titanium Dental Implant",
        "Implant-Supported Crown",
        "Endosseous Implant"
      ],
      "description": "Dental implant treatment in London. A titanium implant fixture is placed into the jawbone to replace the root of a missing tooth and restored with a custom zirconia crown. £2,950 per single tooth implant — fee includes the implant, abutment and crown. Placed by GDC-registered implant dentists at Smile Dentist London (South Kensington, SW7). Our £20/month dental membership does not apply to implant treatment.",
      "procedureType": "https://schema.org/SurgicalProcedure",
      "bodyLocation": "Jaw",
      "howPerformed": "Under local anaesthetic (with optional IV sedation for anxious patients), a titanium implant fixture is placed into the jawbone. After a healing period of typically 3–6 months during which the bone integrates with the implant, an abutment and a custom zirconia crown are fitted.",
      "url": "https://www.smiledentist.co.uk/dental-implants-london/dental-implant-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-implants-london/dental-implant-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "£££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "Single Tooth Dental Implant — including titanium fixture, abutment and zirconia crown",
        "price": "2950.00",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smiledentist.co.uk/dental-implants-london/dental-implant-cost",
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "2950.00",
          "priceCurrency": "GBP",
          "unitText": "per single tooth implant (including crown)",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "implant"
          }
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Implants",
          "item": "https://www.smiledentist.co.uk/dental-implants-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/dental-implants-london/dental-implant-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-implants-london/dental-implant-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a single dental implant cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, a single tooth dental implant costs £2,950 — and this fee includes the titanium implant, the abutment, and a custom zirconia crown. A clinical assessment (new patient examination £30 or returning patient £95) and a CBCT 3D scan when clinically indicated (£250) are charged separately. The final, all-in fee for your case is always confirmed in a written treatment plan after your consultation. Please note that our £20/month dental membership does not apply to implant treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Does the £2,950 implant fee include the crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The £2,950 fee covers the full single-tooth implant treatment: surgical placement of the titanium implant fixture, the abutment that connects to the crown, and a custom zirconia crown made by a UK dental laboratory. It does not include the consultation, CBCT 3D scan, or any preparatory procedures that may be clinically required (such as a tooth extraction, bone graft or sinus lift) — these are quoted separately in writing."
          }
        },
        {
          "@type": "Question",
          "name": "How much do multiple dental implants cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each fully restored single implant is £2,950. When several adjacent teeth are missing, your dentist may recommend an implant-supported bridge — for example two implants supporting a 3-unit bridge — which is usually more cost-effective than one implant per tooth. Larger reconstructions (such as implant-retained overdentures or full-arch fixed bridges) involve additional components and laboratory work, and are quoted individually after a clinical and radiographic assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What additional procedures might I need, and how much do they cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some patients require preparatory treatment before an implant can be placed. Typical additional fees include: tooth extraction (from £250); CBCT 3D scan (£250); bone graft (from £500); sinus lift (from £1,200); IV sedation if requested (from £450). Whether you need any of these is decided after clinical and radiographic assessment and is always quoted to you in writing before treatment is agreed."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental implants last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants are designed to be a long-lasting solution; with appropriate care, good oral hygiene, regular hygiene appointments and management of risk factors such as smoking and gum disease, many implants remain functional in excess of 10 to 15 years. The crown attached to the implant may need replacement over time. Longevity varies between individuals and we do not guarantee any specific lifespan; your dentist will discuss realistic expectations for your case during consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Is the implant procedure painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant placement is performed under local anaesthetic so the surgical area is fully numb during the procedure. IV sedation can be arranged for anxious patients (additional fee). Most patients describe the experience as comparable to having a tooth removed and report only mild to moderate discomfort in the days that follow, managed with standard over-the-counter painkillers. Your dentist will explain the realistic surgical and recovery experience for your case."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer membership discounts on dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our £20/month dental membership offers 50% off many routine and cosmetic treatments, but it does not apply to dental implant treatment. Implant fees are the same whether or not you are a member."
          }
        },
        {
          "@type": "Question",
          "name": "Who will place my dental implant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All implant treatment at Smile Dentist London is carried out by GDC-registered dentists with documented postgraduate training in implant dentistry. Dr Sam Parsno (GDC 72207) has over 30 years of implant experience, trained at the Brånemark Implant Centre, holds a Royal College of Surgeons Diploma in Implant Dentistry and an MSc in Implant Dentistry, and is the founder and course director of the London College of Oral Implantology. Dr Narges Ameri (GDC 325081) is a prosthodontist and implantologist with four-year specialist training and seven years as an Assistant Professor managing complex restorative and implant cases."
          }
        },
        {
          "@type": "Question",
          "name": "Are implants available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. Dental implants are not routinely available on the NHS — they are typically only provided under NHS terms in exceptional clinical circumstances. Most UK implant treatment is provided privately. Patients who prefer the longer appointment times, choice of clinician and choice of implant system associated with private treatment are welcome to book with us."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer finance for dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — finance options are available for eligible patients to help spread the cost of implant treatment over manageable monthly payments. Finance is provided by a third-party finance provider; your application is subject to status and credit checks. Full written information about the available finance plans (including representative APR and total amount payable) is provided on request and before any agreement is signed."
          }
        },
        {
          "@type": "Question",
          "name": "Are implant prices the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — implant fees are identical at both our South Kensington (SW7) and City of London (EC4) clinics."
          }
        }
      ]
    }
  ],
  "/dental-veneers-london/veneers-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dental Veneers",
      "alternateName": [
        "Porcelain Veneers",
        "Composite Veneers",
        "Ceramic Veneers",
        "Dental Laminates"
      ],
      "description": "Dental veneers in London — both composite and porcelain options. Veneers are thin facings applied to the front of the tooth to improve shape, colour, length and alignment. Composite veneers £595 per tooth (£297.50 with our £20/month membership). Porcelain veneers £1,095 per tooth (£547.50 with membership). Carried out by GDC-registered dentists at Smile Dentist London (South Kensington, SW7).",
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Teeth",
      "url": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "£££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "595.00",
        "highPrice": "1095.00",
        "offerCount": 2,
        "url": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
        "availability": "https://schema.org/InStock",
        "offers": [
          {
            "@type": "Offer",
            "name": "Composite Veneer — per tooth",
            "price": "595.00",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
            "seller": {
              "@type": "Dentist",
              "name": "Smile Dentist London",
              "url": "https://www.smiledentist.co.uk"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "595.00",
              "priceCurrency": "GBP",
              "unitText": "per tooth",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": 1,
                "unitText": "tooth"
              }
            }
          },
          {
            "@type": "Offer",
            "name": "Porcelain Veneer — per tooth",
            "price": "1095.00",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
            "seller": {
              "@type": "Dentist",
              "name": "Smile Dentist London",
              "url": "https://www.smiledentist.co.uk"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "1095.00",
              "priceCurrency": "GBP",
              "unitText": "per tooth",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": 1,
                "unitText": "tooth"
              }
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Veneers",
          "item": "https://www.smiledentist.co.uk/dental-veneers-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dental-veneers-london/veneers-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dental veneers cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, composite veneers are £595 per tooth and porcelain veneers are £1,095 per tooth. With our £20/month dental membership, members pay £297.50 per composite veneer and £547.50 per porcelain veneer (50% off). A clinical examination is required first — £30 for new patients or £95 for returning patients (£47.50 with membership). Final fees are confirmed in a written treatment plan after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a full set of veneers cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneer cases are usually planned across the upper 6, 8 or 10 front teeth. Worked examples (standard fees): 6 composite veneers £3,570; 8 composite veneers £4,760; 10 composite veneers £5,950. 6 porcelain veneers £6,570; 8 porcelain veneers £8,760; 10 porcelain veneers £10,950. Member prices are 50% of these figures. The exact number of teeth recommended is decided after a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between composite and porcelain veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Composite veneers are hand-sculpted onto your teeth in a single appointment using high-quality resin and typically require little or no preparation of the natural tooth. Porcelain veneers are individually crafted by a dental laboratory from ceramic, usually require a small amount of conservative tooth preparation, and are bonded in place at a second appointment. Porcelain tends to offer greater stain resistance and longevity; composite tends to be more affordable, faster and more reversible. Your dentist will recommend the option best suited to your goals after a clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the per-veneer fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Composite veneer fees include shade selection, gentle tooth preparation where required, hand-layered application and sculpting of composite, bite check and final polishing. Porcelain veneer fees include smile design and shade selection, conservative tooth preparation, digital or conventional impressions, laboratory fabrication of the ceramic veneer, temporary veneers between visits, fitting and bonding, and a follow-up review. Examinations and any clinically indicated x-rays are charged separately and quoted in writing before treatment."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental veneers last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With appropriate care, porcelain veneers may last in excess of 10 years — one of our published patient cases is still functioning well 11 years after placement. Composite veneers typically last for several years before benefitting from re-polishing, repair or replacement. Longevity is individual and depends on oral hygiene, diet, grinding habits and trauma; your dentist will discuss realistic expectations for your case during consultation. Veneers are not guaranteed for a specific number of years."
          }
        },
        {
          "@type": "Question",
          "name": "Will veneers damage my natural teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Composite veneers are considered minimally invasive and often require little or no removal of natural tooth tissue. Porcelain veneers usually require a small amount of conservative tooth preparation — generally less than for a crown — and this is irreversible. Your dentist will discuss the preparation needed for your specific case, why it is being recommended, and the alternatives (including whitening, bonding or no treatment) before any irreversible work is started."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients pay £30 for the first examination; returning patients pay £95 (£47.50 with membership). Diagnostic x-rays are only taken when clinically indicated and are quoted to you in writing before any radiographs are taken — £30 for a small periapical film."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation you will receive an itemised written treatment plan listing each tooth to be veneered, the material chosen, and the total fee. Treatment only begins after you have signed informed consent. If a separate issue should be addressed first (for example a hygiene visit, replacement of a leaking filling, or whitening to lighten the underlying shade), those fees would be quoted to you separately in writing for your approval."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneer prices the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — composite veneers are £595 per tooth and porcelain veneers are £1,095 per tooth at both our South Kensington (SW7) and City of London (EC4) clinics."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. Veneers for purely cosmetic reasons are not routinely available on the NHS; they are typically only provided under NHS terms where there is a clinical need. Patients who prefer the longer appointment times, choice of dentist and choice of materials associated with private treatment are welcome to book with us."
          }
        }
      ]
    }
  ],
  "/dentures-london/dentures-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Dentures",
      "alternateName": [
        "False Teeth",
        "Removable Dentures",
        "Acrylic Dentures",
        "Cobalt-Chrome Dentures",
        "Valplast Flexible Dentures"
      ],
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Mouth",
      "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
      "howPerformed": "Removable dentures are custom-made by a UK dental laboratory across a series of impressions, bite registrations and a tooth try-in. The finished denture replaces missing teeth and supporting gum tissue and is designed to be comfortable, retentive and aesthetically natural.",
      "preparation": "A clinical examination is required to assess remaining teeth, gum health, bite and suitability. Any necessary extractions or hygiene treatment are completed before the denture is made and are quoted separately in writing.",
      "followup": "Written aftercare instructions are provided. A short review is included where clinically appropriate; relines and adjustments may be required in the months and years after fitting and are quoted separately.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "795.00",
        "highPrice": "1395.00",
        "offerCount": 4,
        "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "City",
          "name": "London"
        },
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk",
          "telephone": "+442070434314"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Acrylic Denture — Partial",
            "price": "795.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Valplast / Flexi Denture",
            "price": "895.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Acrylic Denture — Full",
            "price": "1095.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Cobalt-Chrome Denture",
            "price": "1395.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dentures",
          "item": "https://www.smiledentist.co.uk/dentures-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/dentures-london/dentures-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/dentures-london/dentures-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dentures cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, an acrylic partial denture starts from £795, a full acrylic denture is £1,095, a cobalt-chrome metal-framework partial is £1,395 and a Valplast/Flexi flexible partial is £895. Members of our £20/month dental plan pay 50% off the denture fee. A clinical consultation is required first — £30 for new patients or £95 for returning patients (£47.50 with membership). The final fee is always confirmed in a written treatment plan after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the denture fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fee covers all clinical appointments to design and fit the denture — primary impressions, secondary impressions on a custom tray, bite registration, tooth try-in to check shade and position, fitting of the finished denture, written aftercare and a short follow-up review where clinically appropriate. Laboratory fabrication of the denture by a UK dental laboratory is also included. Examinations and any clinically indicated x-rays are charged separately."
          }
        },
        {
          "@type": "Question",
          "name": "Which type of denture is right for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single best denture. Acrylic partial dentures are the most affordable and easiest to add teeth to in the future. Cobalt-chrome partials use a slim, strong metal framework that relies less on the gums for support. Valplast/Flexi dentures are metal-free and use flexible nylon clasps, often preferred where appearance is important. Full acrylic dentures replace all teeth in an upper or lower arch. Implant-retained dentures are the most stable option where suitable. Your dentist will discuss the realistic advantages and limitations of each option for your individual situation."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dentures last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With good care and regular check-ups, many dentures remain functional for in excess of 5–10 years. The mouth changes shape over time as gum and bone naturally remodel, so dentures may need to be relined, adjusted or eventually remade. Longevity varies between individuals; your dentist will discuss realistic expectations and aftercare."
          }
        },
        {
          "@type": "Question",
          "name": "How many appointments are needed for dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A conventional denture is typically completed across four to five appointments — consultation, primary impressions, secondary impressions and bite registration, tooth try-in, and fitting. Most patients complete treatment within 6–10 weeks. More complex cases (immediate dentures after extractions, full upper and lower, or implant-retained) may require additional visits."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer immediate dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where appropriate, immediate dentures can be fitted on the same day that natural teeth are extracted, so that you are not without teeth. Because the gum and bone change shape rapidly in the months after extraction, an immediate denture is usually planned as a transitional appliance — a soft reline or a definitive new denture is usually required after healing. Suitability and any additional fees are discussed and agreed in writing in advance."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients pay £30 for the first examination; returning patients pay £95 (£47.50 with membership). Diagnostic x-rays are only taken when clinically indicated and are quoted in writing — £30 for a small periapical film."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation you will receive an itemised written treatment plan listing the denture type, the teeth to be replaced and the total fee. Treatment only begins after you have signed informed consent. Any additional procedures (extractions, hygiene treatment, soft reline, or replacement of a denture lost or broken outside of normal wear and tear) would be quoted separately in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Can my denture be supported by dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — implant-retained dentures clip onto two or more dental implants, providing significantly improved stability, especially for the lower jaw. Implant treatment is quoted separately and is not covered by our £20/month dental membership. See our dedicated implant-retained dentures page for details."
          }
        },
        {
          "@type": "Question",
          "name": "Are dentures available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. NHS-funded dentures are available where there is a clinical need; private dentures offer a wider choice of materials and aesthetics (including cobalt-chrome and Valplast), longer appointment times, and a choice of clinician. Patients who prefer these benefits are welcome to book with us."
          }
        },
        {
          "@type": "Question",
          "name": "Are denture prices the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — denture fees are identical at both our South Kensington (SW7) and City of London (EC4) clinics."
          }
        }
      ]
    }
  ],
  "/implant-dentures-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Implant Supported Dentures",
      "description": "Secure dentures anchored by dental implants for enhanced stability.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Implant Dentures",
          "item": "https://www.smiledentist.co.uk/implant-dentures-london"
        }
      ]
    }
  ],
  "/membership-terms": [],
  "/privacy-policy": [],
  "/root-canal-london/root-canal-cost-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Root Canal Treatment",
      "alternateName": [
        "Endodontic Treatment",
        "Endodontics",
        "Root Canal Therapy"
      ],
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Tooth",
      "url": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london",
      "howPerformed": "Under local anaesthetic and rubber-dam isolation, the inflamed or infected pulp tissue is removed, the root canals are cleaned and shaped using nickel-titanium rotary instruments and irrigated with antimicrobial solutions, then sealed three-dimensionally with gutta-percha and a biocompatible sealer. The tooth is then restored with a core filling and, where indicated, a crown.",
      "preparation": "A clinical examination and a diagnostic radiograph are required to confirm the diagnosis (irreversible pulpitis or apical periodontitis), assess root anatomy and discuss the realistic alternatives (root canal, extraction with replacement, or in some cases monitoring).",
      "followup": "Mild tenderness for a few days is normal. A short post-operative review is included where clinically appropriate. The tooth must be definitively restored — usually with a permanent filling or crown — to protect it from fracture and to seal it against bacterial contamination.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "695.00",
        "highPrice": "895.00",
        "offerCount": 2,
        "url": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "City",
          "name": "London"
        },
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk",
          "telephone": "+442070434314"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Root Canal — Front Tooth (Anterior)",
            "price": "695.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Root Canal — Molar (Back Tooth)",
            "price": "895.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Root Canal",
          "item": "https://www.smiledentist.co.uk/root-canal-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/root-canal-london/root-canal-cost-london",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a root canal cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, root canal treatment costs £695 for a front (anterior) tooth and £895 for a back (molar) tooth. Members of our £20/month dental plan pay £347.50 and £447.50 respectively (50% off). A clinical examination is required first — £30 for new patients or £95 for returning patients (£47.50 with membership). The final fee is always confirmed in a written treatment plan after your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Why is a molar root canal more expensive than a front tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Front teeth (incisors and canines) typically have one root canal, while back teeth — premolars and especially molars — have two, three or four canals that all need to be cleaned, shaped and sealed. Molar treatment takes significantly longer clinical time and is technically more demanding, which is reflected in the higher fee."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the root canal fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fee covers all clinical appointments needed to complete the root canal: local anaesthetic, isolation with a rubber dam, access to the tooth, cleaning and shaping of all root canals using modern rotary instruments, irrigation, three-dimensional sealing of the canals (obturation), and a temporary or permanent core filling at the end. A diagnostic x-ray to plan treatment and a working-length x-ray during treatment are included. Examinations and any pre-treatment radiographs are charged separately."
          }
        },
        {
          "@type": "Question",
          "name": "Will I need a crown after my root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, especially for back teeth (premolars and molars) and any tooth where significant tooth structure has been lost, a crown is recommended after root canal treatment to protect the tooth from fracture. A crown is a separate procedure quoted at £995 (£497.50 with membership). For front teeth where the access cavity is small and the tooth is otherwise intact, a high-quality filling alone may be sufficient — your dentist will discuss the most appropriate restoration for your tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a root canal take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many root canals can be completed in a single appointment of approximately 60–90 minutes for a front tooth, or 90–120 minutes for a molar. Some teeth — for example those with severe infection, complex anatomy, or where treatment is being re-done — may need two appointments with a medication dressing between visits. Your dentist will explain the expected number of visits after assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Is a root canal painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modern root canal treatment is carried out under local anaesthetic and is generally no more uncomfortable than having a filling. Most patients are surprised at how comfortable the procedure is. Mild tenderness in the tooth for a few days afterwards is normal and is usually managed with ordinary painkillers. Severe or prolonged pain is uncommon and should be reported so we can review the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How successful is root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment has high published success rates — survival of the treated tooth for many years is common when the treatment is well executed, the tooth is restored promptly with an appropriate filling or crown, and the patient maintains good oral hygiene. Outcomes vary depending on the starting condition of the tooth, the anatomy of the root canals, and any pre-existing infection. No dental treatment is guaranteed, and your dentist will discuss the realistic prognosis for your specific tooth before treatment."
          }
        },
        {
          "@type": "Question",
          "name": "What are the alternatives to root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main alternative is extraction of the tooth, which may then need replacement with a dental implant, a bridge or a denture. Where a tooth has very poor long-term prognosis (severe fracture, advanced gum disease, or unrestorable decay), extraction may be the more predictable option. Your dentist will explain the realistic alternatives, including the costs and trade-offs of each, before treatment is agreed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you use a rubber dam and modern equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All root canal treatments are carried out under rubber-dam isolation (a soft sheet that keeps the tooth dry and prevents saliva and bacteria entering the canals) — this is recommended by the British Endodontic Society and the European Society of Endodontology. We use modern rotary nickel-titanium instruments, electronic apex locators and digital radiography to keep treatment as predictable and comfortable as possible."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A diagnostic x-ray taken during the root canal appointment to plan and verify the treatment is included in the fee. The pre-treatment consultation is charged separately — £30 for new patients, or £95 for returning patients (£47.50 with membership). Additional periapical x-rays taken outside the root canal appointment are £30 (£15 with membership) where clinically indicated."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation you will receive an itemised written treatment plan listing the tooth, the number of canals, the expected number of visits and the total fee. Treatment only begins after you have signed informed consent. If a separate procedure is required (for example a final crown, a post and core, or treatment of an unrelated tooth), that fee would be quoted separately in writing."
          }
        },
        {
          "@type": "Question",
          "name": "Are root canals available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. NHS-funded root canals are available where there is a clinical need; private root canal treatment offers longer appointment times, the use of modern rotary instruments and apex locators, and a choice of clinician. Patients who prefer these benefits are welcome to book with us."
          }
        }
      ]
    }
  ],
  "/teeth-whitening-london/teeth-whitening-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Teeth Whitening",
      "description": "Dentist-prescribed Boutique home teeth whitening in London. Custom-fitted upper and lower trays, prescribed whitening gel, written aftercare. Provided by GDC-registered dentists at Smile Dentist London (SW7 and EC4). Currently £199 for everyone as a limited-time offer (usually £399).",
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Teeth",
      "url": "https://www.smiledentist.co.uk/teeth-whitening-london/teeth-whitening-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/teeth-whitening-london/teeth-whitening-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "Boutique Home Whitening — Full Course (Limited-Time Offer)",
        "price": "199.00",
        "priceCurrency": "GBP",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.smiledentist.co.uk/teeth-whitening-london/teeth-whitening-cost",
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "199.00",
          "priceCurrency": "GBP",
          "referencePrice": {
            "@type": "PriceSpecification",
            "price": "399.00",
            "priceCurrency": "GBP",
            "description": "Standard list price"
          }
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Teeth Whitening",
          "item": "https://www.smiledentist.co.uk/teeth-whitening-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/teeth-whitening-london/teeth-whitening-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/teeth-whitening-london/teeth-whitening-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does teeth whitening cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, a full course of Boutique home whitening is currently £199 for everyone as a limited-time offer (usually £399). The fee includes consultation review, digital impressions, custom upper and lower trays, prescribed whitening gel and written aftercare. A separate clinical examination is required first."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the £199 whitening fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The £199 promotional fee covers the dentist review of suitability, digital intra-oral scans, custom-fit super-seal upper and lower trays, one full course of Boutique whitening gel (Day or Night), and written take-home aftercare."
          }
        },
        {
          "@type": "Question",
          "name": "Is the examination charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A clinical assessment is required before whitening can be prescribed. New patients pay £30 for their first examination; returning patients pay £95, or £47.50 with membership."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden costs for teeth whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. There are no hidden charges. If your dentist identifies an existing dental issue that must be addressed before whitening, those treatment fees would be quoted separately in writing for your approval before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "How much is a top-up whitening syringe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For existing patients who already have custom whitening trays, a top-up syringe of Boutique gel is £35. It is supplied on prescription following a brief clinical review."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer finance for teeth whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The current £199 promotional whitening price applies to everyone and does not require membership. Smile Dentist also offers a monthly dental membership at £20 per month which includes routine examinations and hygiene appointments and gives discounts on most other treatments."
          }
        }
      ]
    }
  ],
  "/terms": [],
  "/valplast-dentures-london": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Valplast Dentures",
      "description": "Flexible, metal-free partial dentures for enhanced comfort.",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist",
        "url": "https://www.smiledentist.co.uk"
      },
      "offers": {
        "@type": "Offer",
        "price": "995",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Valplast Dentures",
          "item": "https://www.smiledentist.co.uk/valplast-dentures-london"
        }
      ]
    }
  ],
  "/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Wisdom Tooth Extraction",
      "alternateName": [
        "Wisdom Tooth Removal",
        "Third Molar Extraction"
      ],
      "description": "Surgical and non-surgical removal of wisdom teeth (third molars) in London. Carried out by GDC-registered dentists with hospital-based oral surgery experience at Smile Dentist London (SW7 and EC4). Fees range from £250 for a simple extraction up to £650 for a full surgical removal, depending on clinical complexity assessed by x-ray.",
      "procedureType": "https://schema.org/SurgicalProcedure",
      "bodyLocation": "Third Molar (Wisdom Tooth)",
      "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
      "availableService": {
        "@type": "MedicalBusiness",
        "name": "Smile Dentist London",
        "url": "https://www.smiledentist.co.uk",
        "telephone": "+442070434314",
        "priceRange": "££",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "300",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "offers": {
        "@type": "AggregateOffer",
        "name": "Wisdom Tooth Extraction — Fee Range",
        "priceCurrency": "GBP",
        "lowPrice": "250.00",
        "highPrice": "650.00",
        "offerCount": 3,
        "availability": "https://schema.org/InStock",
        "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
        "seller": {
          "@type": "Dentist",
          "name": "Smile Dentist London",
          "url": "https://www.smiledentist.co.uk"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Simple wisdom tooth extraction (fully erupted)",
            "price": "250.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Complicated wisdom tooth extraction (partially erupted / curved roots)",
            "price": "450.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Surgical wisdom tooth extraction (impacted / requires incision)",
            "price": "650.00",
            "priceCurrency": "GBP",
            "url": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.smiledentist.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://www.smiledentist.co.uk/treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wisdom Tooth Extraction",
          "item": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cost",
          "item": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntityOfPage": "https://www.smiledentist.co.uk/wisdom-tooth-extraction-london/wisdom-tooth-extraction-cost",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does wisdom tooth extraction cost in London?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Smile Dentist London, wisdom tooth extraction is priced according to clinical complexity: a simple non-surgical removal is £250, a complicated extraction is £450, and a full surgical removal (impacted or buried wisdom tooth) is £650. A separate clinical examination with x-rays is required first to confirm which category applies. Members of our monthly plan pay 50% of the standard fee."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between simple, complicated and surgical wisdom tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple extraction (£250) is used when the wisdom tooth has fully erupted into the mouth and can be loosened and removed with forceps. A complicated extraction (£450) is needed when the tooth is partially erupted, broken down or has curved roots requiring additional time and technique. A surgical extraction (£650) is required when the tooth is impacted in bone or under the gum and a small incision and/or tooth-sectioning is needed. Your dentist will confirm which applies after reviewing your x-rays."
          }
        },
        {
          "@type": "Question",
          "name": "Are x-rays and the consultation charged separately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A clinical assessment is required before any extraction can be planned. New patients pay £30 for the first examination; returning patients pay £95 (£47.50 with membership). Diagnostic x-rays — usually a panoramic OPG or small periapical films — are charged on top: a small x-ray is £30 and an OPG (full jaw) is £75. These fees are quoted in writing before any radiographs are taken."
          }
        },
        {
          "@type": "Question",
          "name": "Is wisdom tooth extraction available on the NHS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smile Dentist London is a private dental practice and does not provide NHS care. NHS wisdom tooth extraction is available through NHS dentists and, for complex impacted cases, by referral to an NHS oral and maxillofacial hospital department; eligibility is determined by NICE guidance. Patients who prefer to be treated privately for shorter waiting times, longer appointments or specific clinical preferences are welcome to book with us."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer same-day or emergency wisdom tooth removal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where clinically appropriate and there is space in the day list, we aim to offer same-day or next-day appointments for patients in pain. Same-day extraction depends on a successful clinical assessment, x-ray review and the patient being medically fit; in some cases a separate surgical appointment is safer. Please call 020 70434314 to discuss availability."
          }
        },
        {
          "@type": "Question",
          "name": "Is the price the same at both clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our wisdom tooth extraction fees are identical at our South Kensington (SW7) and City of London (EC4) clinics."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges or extras?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. After your consultation and x-rays you will receive an itemised written treatment plan listing the extraction fee, any sedation or referral fees if recommended, and post-operative review. Treatment only begins after you have signed informed consent. If your dentist identifies a separate issue (for example untreated infection requiring antibiotics or a referral for IV sedation), the costs of those services are quoted to you in writing for your approval before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer finance or membership discounts for wisdom tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients on our £20/month dental membership pay 50% of the standard extraction fees (£125 simple, £225 complicated, £325 surgical). The plan also includes routine examinations and hygiene appointments. Please ask reception for the current membership terms and joining conditions."
          }
        }
      ]
    }
  ],
};

export function canonicalUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildMetadata(path: string, seo: PageSeo): Metadata {
  const url = canonicalUrl(path);
  const absoluteTitle = path === "/" ? seo.title : seo.title + TITLE_SUFFIX;
  return {
    title: { absolute: absoluteTitle },
    description: seo.description,
    keywords: seo.keywords ?? SEO_KEYWORDS,
    robots: seo.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: { absolute: seo.title },
      description: seo.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: seo.title },
      description: seo.description,
      images: [OG_IMAGE],
    },
  };
}

/** Metadata for a path listed in PAGE_SEO. */
export function pageMetadata(path: string): Metadata {
  const seo = PAGE_SEO[path];
  if (!seo) return {};
  return buildMetadata(path, seo);
}
