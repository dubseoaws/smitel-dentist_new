import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import HideOnContact from "@/components/HideOnContact";
import ScrollProgress from "@/components/ScrollProgress";

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

export const metadata: Metadata = {
  title: {
    default: "Smile Dentist: The New Standard for Cosmetic Dentistry",
    template: "%s | Smile Dentist",
  },
  description:
    "Redefining dental care with affordable luxury. Two clinics across Central London — South Kensington and the City of London.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
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
