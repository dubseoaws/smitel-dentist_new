import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import HideOnContact from "@/components/HideOnContact";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import {
  OG_IMAGE,
  OG_LOCALE,
  PAGE_SEO,
  SEO_KEYWORDS,
  SITE_JSONLD,
  SITE_NAME,
  SITE_URL,
  TITLE_SUFFIX,
} from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const home = PAGE_SEO["/"];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: home.title,
    template: `%s${TITLE_SUFFIX}`,
  },
  description: home.description,
  keywords: SEO_KEYWORDS,
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: OG_LOCALE,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={SITE_JSONLD} />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <ReviewsSection />
        <HideOnContact>
          <ContactSection />
        </HideOnContact>
        <Footer />
      </body>
    </html>
  );
}
