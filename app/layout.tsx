import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { siteConfig } from "@/lib/siteConfig";
// import BuyPopup from "@/components/Buy";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Florystka Stanowice – Bukiety i Dekoracje | Rajski Ptak",
  description:
    "Florystka w Stanowicach – bukiety ślubne, dekoracje eventowe i poczta kwiatowa z dostawą do Czerwionki i Leszczyn. Zamów kwiaty z pasją!",

  openGraph: {
    title: "Florystka Stanowice – Bukiety i Dekoracje | Rajski Ptak",
    description:
      "Florystka w Stanowicach – bukiety ślubne, dekoracje eventowe i poczta kwiatowa z dostawą do Czerwionki i Leszczyn. Zamów kwiaty z pasją!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florystka Stanowice – Bukiety i Dekoracje | Rajski Ptak",
    description:
      "Florystka w Stanowicach – bukiety ślubne, dekoracje eventowe i poczta kwiatowa z dostawą do Czerwionki i Leszczyn. Zamów kwiaty z pasją!",
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
