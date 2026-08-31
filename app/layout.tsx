import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
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
