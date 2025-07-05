import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import BuyPopup from "@/components/Buy";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Strona Dla Florystki - Bartosz Chmielecki",
  description: "Strona One Page DEMO, dla florystki.",

  openGraph: {
    title: "Strona Dla Florystki - Bartosz Chmielecki",
    description: "Strona One Page DEMO, dla florystki.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strona Dla Florystki - Bartosz Chmielecki",
    description: "Strona One Page DEMO, dla florystki.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased`}
      >
        {/* <BuyPopup /> */}
        {children}
      </body>
    </html>
  );
}
