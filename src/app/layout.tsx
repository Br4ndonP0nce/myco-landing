// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import {
  Inter as FontSans,
  Merriweather as FontSerif,
  Playfair_Display as FontDisplay,
} from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myco Farms | Premium Medicinal Mushroom Cultivation",
  description:
    "Cultivation of premium medicinal mushrooms, specializing in Lion's Mane and Cordyceps with Food Grade Certificate (FSA certified) and nutraceutical applications.",
  keywords: [
    "medicinal mushrooms",
    "Lion's Mane",
    "Cordyceps",
    "Food grade",
    "mushroom cultivation",
    "nutraceuticals",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-myco-light font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
          fontDisplay.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
