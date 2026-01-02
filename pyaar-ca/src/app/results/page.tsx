"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const scoresParam = searchParams.get("scores");

  const languageDetails = {
    words: { title: "Words of Affirmation", emoji: "💬", description: "You feel most loved through verbal expressions, compliments, and heartfelt communication" },
    time: { title: "Quality Time", emoji: "⏰", description: "You cherish undivided attention and meaningful moments spent together" },
    gifts: { title: "Receiving Gifts", emoji: "🎁", description: "Thoughtful presents and gestures make you feel valued and remembered" },
    service: { title: "Acts of Service", emoji: "🤝", description: "Actions speak louder than words - you appreciate when your partner helps and supports you" },
    touch: { title: "Physical Touch", emoji: "🤗", description: "Physical connection and affection are essential to feeling loved and secure" }
  };

  const scores = scoresParam
    ? scoresParam.split(',').map(pair => {
        const [language, percentage] = pair.split(':');
        return { language, percentage: parseInt(percentage) };
      }).sort((a, b) => b.percentage - a.percentage)
    : [];

  const topLanguage = scores[0]?.language;
  const topDetails = topLanguage ? languageDetails[topLanguage as keyof typeof languageDetails] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 text-center">
          <div className="text-6xl mb-4">{topDetails?.emoji}</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Your Primary Love Language
          </h1>
          <h2 className="text-3xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {topDetails?.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {topDetails?.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Your Complete Love Language Profile
          </h2>
          <div className="space-y-6">
            {scores.map((score) => {
              const details = languageDetails[score.language as keyof typeof languageDetails];
              return (
                <div key={score.language} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{details.emoji}</span>
                      <span className="font-semibold text-gray-800">{details.title}</span>
                    </div>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      {score.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${score.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Understanding Your Results
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Primary Love Language ({scores[0]?.percentage}%):</strong> This is how you most strongly prefer to receive love.
            </p>
            <p>
              <strong>Secondary Love Language{scores[1]?.percentage && scores[1].percentage > 15 ? 's' : ''}:</strong> {' '}
              {scores.slice(1, 3).filter(s => s.percentage > 15).length > 0
                ? `You also appreciate ${scores.slice(1, 3).filter(s => s.percentage > 15).map(s => languageDetails[s.language as keyof typeof languageDetails].title).join(' and ')}.`
                : 'Your preference is clearly focused on your primary love language.'
              }
            </p>
            <p className="text-sm italic">
              💡 Most people have a combination of love languages. Share your results with your partner and compare to understand each other better!
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            Take Quiz Again
          </Link>
          <p className="text-gray-700">
            Have your partner take the quiz to discover your compatibility!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Calculating your results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}