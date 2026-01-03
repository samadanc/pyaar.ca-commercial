import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyaar.ca - Discover Your Love Language Compatibility",
  description: "Find out your love language and discover if you and your partner are truly compatible. Take our free compatibility quiz today!",
  keywords: ["love language", "relationship compatibility", "couples quiz", "love compatibility test"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
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
        <meta name="google-adsense-account" content="ca-pub-5569552195193368" />
      </head>
      <body>{children}</body>
    </html>
  );
}