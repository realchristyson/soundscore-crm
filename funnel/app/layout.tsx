import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* HYROS universal tracking */}
        <Script
          id="hyros-universal"
          strategy="afterInteractive"
          src="https://176298.t.hyros.com/v1/lst/universal-script?ph=b9976cfbb189e62e277f5352d34234ea16fe61baeaa280c2c8af03be39002811&tag=!clicked"
        />

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '600489591158996');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="bg-black text-off-white antialiased">
        {/* Facebook Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=600489591158996&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
