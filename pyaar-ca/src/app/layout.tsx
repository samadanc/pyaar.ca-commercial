import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pyaar.ca - Discover Your Love Language Compatibility",
  description: "Find out your love language and discover if you and your partner are truly compatible. Take our free compatibility quiz today!",
  keywords: ["love language", "relationship compatibility", "couples quiz", "love compatibility test"],
  openGraph: {
    title: "Pyaar.ca - Love Language Compatibility Test",
    description: "Discover your love language and find out if you're compatible with your partner",
    url: "https://pyaar.ca",
    siteName: "Pyaar.ca",
    type: "website",
    images: [
      {
        url: "https://pyaar.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "Love Language Compatibility Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyaar.ca - Love Language Compatibility Test",
    description: "Discover your love language and relationship compatibility",
    images: ["https://pyaar.ca/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          data-cfasync="false"
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
        />
        <Script
          data-cfasync="false"
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="//www.ezojs.com/ezoic/sa.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="ezoic-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}