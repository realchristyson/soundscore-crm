import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The $5/Day Method — Turn $5/Day Into 10,000+ Monthly Listeners",
  description:
    "The Meta Ads playbook for independent hip-hop and R&B artists tired of wasting money on Instagram boosts that don't work.",
  openGraph: {
    title: "The $5/Day Method",
    description:
      "Stop boosting. Start scaling. The Meta Ads playbook for indie artists.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-black text-off-white antialiased">{children}</body>
    </html>
  );
}
