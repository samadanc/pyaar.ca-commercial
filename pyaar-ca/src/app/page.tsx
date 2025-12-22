import Link from "next/link";
import EzoicAd from "@/components/EzoicAd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Language Compatibility Test - Discover Your Love Language | Pyaar.ca",
  description: "Take our free love language compatibility quiz to discover how you and your partner express love. Find out if you're compatible through our comprehensive test based on the 5 love languages.",
  keywords: ["love language test", "compatibility quiz", "love language compatibility", "relationship test", "love quiz", "5 love languages", "relationship compatibility"],
  openGraph: {
    title: "Love Language Compatibility Test - Discover Your Love Language",
    description: "Take our free love language compatibility quiz to discover how you and your partner express love.",
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
    title: "Love Language Compatibility Test",
    description: "Discover your love language and relationship compatibility",
    images: ["https://pyaar.ca/og-image.png"],
  },
  alternates: {
    canonical: "https://pyaar.ca",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <main className="container mx-auto px-4 py-16">
        <article className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            Discover Your Love Language
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-4">
            Free Love Language Compatibility Test
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Take our comprehensive love language quiz to understand how you and your partner express and receive love. Based on Dr. Gary Chapman&apos;s 5 love languages theory, this test helps improve your relationship communication.
          </p>

          <EzoicAd placementId={101} className="my-8" />

          <Link
            href="/quiz"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            aria-label="Start the love language compatibility quiz"
          >
            Start Your Journey ❤️
          </Link>
        </article>

        <EzoicAd placementId={102} className="my-8" />

        <section className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4" aria-hidden="true">💬</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Words of Affirmation</h3>
            <p className="text-gray-600">Express love through verbal compliments, encouragement, and kind words that build up your partner</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4" aria-hidden="true">⏰</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Quality Time</h3>
            <p className="text-gray-600">Give undivided attention and create meaningful moments together without distractions</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4" aria-hidden="true">🎁</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Receiving Gifts</h3>
            <p className="text-gray-600">Show love through thoughtful presents and tokens that demonstrate care and consideration</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Acts of Service</h3>
            <p className="text-gray-600">Express care by doing helpful things for your partner that make their life easier</p>
          </article>
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4" aria-hidden="true">🤗</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Physical Touch</h3>
            <p className="text-gray-600">Connect through hugs, holding hands, kisses, and other forms of physical affection</p>
          </article>
        </section>

        <EzoicAd placementId={103} className="my-8 mt-16" />

        <section className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Take a Love Language Test?</h2>
          <p className="text-gray-600 mb-4">
            Understanding your love language helps you communicate better with your partner. When you know how your partner prefers to receive love, you can strengthen your relationship and avoid misunderstandings.
          </p>
          <p className="text-gray-600">
            Our free compatibility quiz takes just a few minutes and provides instant results showing your primary and secondary love languages, along with compatibility insights if you&apos;re taking it with a partner.
          </p>
        </section>
      </main>
    </div>
  );
}