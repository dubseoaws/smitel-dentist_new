import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
