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
      <head>
        <meta name="apple-mobile-web-app-title" content="Rajski Ptak" />
        <meta
          name="google-site-verification"
          content="LRTb0uxY_v88Sy21Pozedau8ad80-FXT8qNUSSmRCRI"
        />
        <meta
          name="google-site-verification"
          content="bFbk-ARgE6IT7E_y3u_pyfE3pAeGzmOGXbR72pSz9zY"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased`}
      >
        {/* <BuyPopup /> */}
        {children}
      </body>
    </html>
  );
}
