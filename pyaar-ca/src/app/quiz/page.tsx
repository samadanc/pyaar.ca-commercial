"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Question bank organized by theme and love language focus
const questionBank = {
  // Initial questions (everyone sees these)
  initial: [
    {
      id: "init-1",
      question: "When you've had a tough day, what helps you feel better?",
      options: [
        { text: "Hearing supportive and encouraging words from your partner", value: "words", followUp: "words-focused" },
        { text: "Having your partner sit with you and really listen", value: "time", followUp: "time-focused" },
        { text: "Receiving a surprise that shows they were thinking of you", value: "gifts", followUp: "gifts-focused" },
        { text: "Your partner taking care of tasks so you can relax", value: "service", followUp: "service-focused" },
        { text: "A long hug or physical comfort", value: "touch", followUp: "touch-focused" }
      ]
    },
    {
      id: "init-2",
      question: "What would hurt your feelings the most?",
      options: [
        { text: "Your partner criticizing you or not acknowledging your efforts", value: "words", followUp: "conflict" },
        { text: "Your partner constantly being distracted when you're together", value: "time", followUp: "conflict" },
        { text: "Forgetting important dates like birthdays or anniversaries", value: "gifts", followUp: "conflict" },
        { text: "Your partner not helping when you really need it", value: "service", followUp: "conflict" },
        { text: "Lack of physical affection for an extended period", value: "touch", followUp: "conflict" }
      ]
    }
  ],

  // Words of Affirmation focused questions
  "words-focused": [
    {
      id: "words-1",
      question: "How important are compliments and praise to you?",
      options: [
        { text: "Extremely important - I need to hear them regularly", value: "words", followUp: "communication" },
        { text: "Very important, but I also value other gestures", value: "words", followUp: "mixed-preference" },
        { text: "Somewhat important, but actions matter more", value: "service", followUp: "service-focused" },
        { text: "Not as important as quality time together", value: "time", followUp: "time-focused" },
        { text: "Nice to have, but physical touch means more", value: "touch", followUp: "touch-focused" }
      ]
    },
    {
      id: "words-2",
      question: "When receiving a text from your partner, what makes you smile most?",
      options: [
        { text: "'I love you' or 'I'm thinking of you' messages", value: "words", followUp: "celebration" },
        { text: "Making plans to spend time together soon", value: "time", followUp: "time-focused" },
        { text: "A photo of something that reminded them of you", value: "gifts", followUp: "gifts-focused" },
        { text: "'I picked up groceries for us' or 'I'll handle that'", value: "service", followUp: "daily-life" },
        { text: "Any message that leads to seeing them in person", value: "touch", followUp: "touch-focused" }
      ]
    }
  ],

  // Quality Time focused questions
  "time-focused": [
    {
      id: "time-1",
      question: "What does 'quality time' mean to you?",
      options: [
        { text: "Deep conversations where we really connect", value: "time", followUp: "communication" },
        { text: "Doing activities together, even in silence", value: "time", followUp: "activities" },
        { text: "Doesn't matter what we do, as long as we're together", value: "time", followUp: "celebration" },
        { text: "Time spent with meaningful words exchanged", value: "words", followUp: "words-focused" },
        { text: "Time that includes physical closeness", value: "touch", followUp: "touch-focused" }
      ]
    },
    {
      id: "time-2",
      question: "Your partner has a free evening. What would you most want?",
      options: [
        { text: "Them canceling other plans to be with you", value: "time", followUp: "priorities" },
        { text: "A surprise date or activity they planned", value: "gifts", followUp: "gifts-focused" },
        { text: "Them asking what you'd like to do together", value: "time", followUp: "mixed-preference" },
        { text: "Them handling chores so you can both relax", value: "service", followUp: "service-focused" },
        { text: "Cuddling on the couch watching a movie", value: "touch", followUp: "touch-focused" }
      ]
    }
  ],

  // Receiving Gifts focused questions
  "gifts-focused": [
    {
      id: "gifts-1",
      question: "What makes a gift meaningful to you?",
      options: [
        { text: "The thought and effort behind finding it", value: "gifts", followUp: "thoughtfulness" },
        { text: "That they remembered something I mentioned", value: "gifts", followUp: "celebration" },
        { text: "The time we spend together enjoying it", value: "time", followUp: "time-focused" },
        { text: "When it comes with a heartfelt note", value: "words", followUp: "words-focused" },
        { text: "Something practical that helps my daily life", value: "service", followUp: "service-focused" }
      ]
    },
    {
      id: "gifts-2",
      question: "Which surprise would touch your heart most?",
      options: [
        { text: "Finding little gifts or notes hidden around the house", value: "gifts", followUp: "daily-life" },
        { text: "A planned surprise date or experience", value: "time", followUp: "activities" },
        { text: "Your partner taking care of everything you were stressed about", value: "service", followUp: "service-focused" },
        { text: "A heartfelt letter or poem they wrote for you", value: "words", followUp: "words-focused" },
        { text: "A spa day or massage from your partner", value: "touch", followUp: "touch-focused" }
      ]
    }
  ],

  // Acts of Service focused questions
  "service-focused": [
    {
      id: "service-1",
      question: "What action from your partner feels most like love?",
      options: [
        { text: "Doing chores or tasks without being asked", value: "service", followUp: "daily-life" },
        { text: "Taking something off your to-do list", value: "service", followUp: "stress-relief" },
        { text: "Making time in their busy schedule for you", value: "time", followUp: "priorities" },
        { text: "Planning and organizing things for both of you", value: "service", followUp: "mixed-preference" },
        { text: "Taking care of you when you're not feeling well", value: "touch", followUp: "touch-focused" }
      ]
    },
    {
      id: "service-2",
      question: "When you're overwhelmed, what helps most?",
      options: [
        { text: "Your partner stepping in to help with tasks", value: "service", followUp: "stress-relief" },
        { text: "Hearing 'You've got this' and words of support", value: "words", followUp: "words-focused" },
        { text: "Your partner clearing their schedule to be with you", value: "time", followUp: "time-focused" },
        { text: "A thoughtful gift to cheer you up", value: "gifts", followUp: "gifts-focused" },
        { text: "Physical comfort like a massage or hug", value: "touch", followUp: "touch-focused" }
      ]
    }
  ],

  // Physical Touch focused questions
  "touch-focused": [
    {
      id: "touch-1",
      question: "How important is physical affection in your relationship?",
      options: [
        { text: "Essential - I need it daily to feel connected", value: "touch", followUp: "connection" },
        { text: "Very important, but words of love matter too", value: "words", followUp: "words-focused" },
        { text: "Important, but quality time together is equally vital", value: "time", followUp: "mixed-preference" },
        { text: "Somewhat important, but I value actions more", value: "service", followUp: "service-focused" },
        { text: "Nice to have, but thoughtfulness matters most", value: "gifts", followUp: "gifts-focused" }
      ]
    },
    {
      id: "touch-2",
      question: "In public, how do you prefer to show affection?",
      options: [
        { text: "Holding hands or light touches constantly", value: "touch", followUp: "daily-life" },
        { text: "Standing close together, occasional touches", value: "touch", followUp: "connection" },
        { text: "Not much physically, but checking in verbally", value: "words", followUp: "communication" },
        { text: "Just being present together is enough", value: "time", followUp: "time-focused" },
        { text: "Small gestures like offering to carry things", value: "service", followUp: "service-focused" }
      ]
    }
  ],

  // Conflict resolution questions
  conflict: [
    {
      id: "conflict-1",
      question: "During an argument, what helps you reconcile?",
      options: [
        { text: "A sincere apology with words that show understanding", value: "words", followUp: "communication" },
        { text: "Sitting down together to talk things through calmly", value: "time", followUp: "time-focused" },
        { text: "A peace offering or gesture that shows they care", value: "gifts", followUp: "gifts-focused" },
        { text: "Your partner taking action to fix what went wrong", value: "service", followUp: "service-focused" },
        { text: "Physical reassurance like holding hands or a hug", value: "touch", followUp: "touch-focused" }
      ]
    },
    {
      id: "conflict-2",
      question: "After resolving a disagreement, what reassures you most?",
      options: [
        { text: "Verbal commitment that it won't happen again", value: "words", followUp: "words-focused" },
        { text: "Spending quality time reconnecting", value: "time", followUp: "activities" },
        { text: "A thoughtful gesture or makeup gift", value: "gifts", followUp: "celebration" },
        { text: "Seeing changed behavior and actions", value: "service", followUp: "daily-life" },
        { text: "Physical closeness and affection", value: "touch", followUp: "connection" }
      ]
    }
  ],

  // Communication style questions
  communication: [
    {
      id: "comm-1",
      question: "What's your ideal way to communicate with your partner?",
      options: [
        { text: "Frequent 'I love you' and check-in messages", value: "words", followUp: "daily-life" },
        { text: "Long, meaningful conversations", value: "time", followUp: "priorities" },
        { text: "Sending each other photos and little surprises", value: "gifts", followUp: "thoughtfulness" },
        { text: "Coordinating schedules and helping each other", value: "service", followUp: "stress-relief" },
        { text: "In-person, with physical presence", value: "touch", followUp: "connection" }
      ]
    }
  ],

  // Celebration questions
  celebration: [
    {
      id: "celeb-1",
      question: "How do you prefer to celebrate special occasions?",
      options: [
        { text: "With heartfelt words and meaningful cards or letters", value: "words", followUp: "final" },
        { text: "Spending quality time doing something special together", value: "time", followUp: "final" },
        { text: "Exchanging thoughtful gifts that show you know each other", value: "gifts", followUp: "final" },
        { text: "Having your partner plan everything so you can just enjoy", value: "service", followUp: "final" },
        { text: "Lots of physical closeness and intimacy", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Mixed preference exploration
  "mixed-preference": [
    {
      id: "mixed-1",
      question: "If you had to choose between two, which matters more?",
      options: [
        { text: "Hearing 'I love you' vs. spending time together", value: "words", followUp: "priorities" },
        { text: "Spending time together vs. hearing 'I love you'", value: "time", followUp: "priorities" },
        { text: "Thoughtful gifts vs. acts of service", value: "gifts", followUp: "thoughtfulness" },
        { text: "Acts of service vs. thoughtful gifts", value: "service", followUp: "stress-relief" },
        { text: "Physical touch vs. quality time", value: "touch", followUp: "connection" }
      ]
    }
  ],

  // Daily life questions
  "daily-life": [
    {
      id: "daily-1",
      question: "In your daily routine, what makes you feel most loved?",
      options: [
        { text: "Good morning/goodnight messages", value: "words", followUp: "final" },
        { text: "Making time for each other despite busy schedules", value: "time", followUp: "final" },
        { text: "Little surprises throughout the day", value: "gifts", followUp: "final" },
        { text: "Help with daily tasks and responsibilities", value: "service", followUp: "final" },
        { text: "Quick hugs and kisses throughout the day", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Priorities questions
  priorities: [
    {
      id: "prior-1",
      question: "What shows you that you're a priority to your partner?",
      options: [
        { text: "They tell you frequently how important you are", value: "words", followUp: "final" },
        { text: "They make time for you even when busy", value: "time", followUp: "final" },
        { text: "They remember the little things you mention", value: "gifts", followUp: "final" },
        { text: "They adjust their schedule to help you", value: "service", followUp: "final" },
        { text: "They're physically affectionate in all situations", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Activities questions
  activities: [
    {
      id: "activ-1",
      question: "What's your ideal weekend activity with your partner?",
      options: [
        { text: "Deep conversations over coffee or dinner", value: "time", followUp: "final" },
        { text: "Exploring new places together", value: "time", followUp: "final" },
        { text: "Trying new experiences they planned", value: "gifts", followUp: "final" },
        { text: "Working on projects together", value: "service", followUp: "final" },
        { text: "Relaxing with lots of physical closeness", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Thoughtfulness questions
  thoughtfulness: [
    {
      id: "thought-1",
      question: "What gesture would make you feel most understood?",
      options: [
        { text: "Your partner noticing and commenting on something you did", value: "words", followUp: "final" },
        { text: "Your partner remembering a detail from a conversation weeks ago", value: "gifts", followUp: "final" },
        { text: "Your partner anticipating your needs without asking", value: "service", followUp: "final" },
        { text: "Your partner knowing when you need physical comfort", value: "touch", followUp: "final" },
        { text: "Your partner clearing time to be with you when you need it", value: "time", followUp: "final" }
      ]
    }
  ],

  // Stress relief questions
  "stress-relief": [
    {
      id: "stress-1",
      question: "When stressed, what helps you most?",
      options: [
        { text: "Encouragement and reassuring words", value: "words", followUp: "final" },
        { text: "Someone listening without trying to fix things", value: "time", followUp: "final" },
        { text: "A surprise treat to lift your spirits", value: "gifts", followUp: "final" },
        { text: "Someone taking tasks off your plate", value: "service", followUp: "final" },
        { text: "Physical comfort and being held", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Connection questions
  connection: [
    {
      id: "connect-1",
      question: "When do you feel most connected to your partner?",
      options: [
        { text: "During heartfelt conversations", value: "words", followUp: "final" },
        { text: "When we're fully present with each other", value: "time", followUp: "final" },
        { text: "When they surprise me with something thoughtful", value: "gifts", followUp: "final" },
        { text: "When we work together as a team", value: "service", followUp: "final" },
        { text: "During moments of physical intimacy", value: "touch", followUp: "final" }
      ]
    }
  ],

  // Final round questions
  final: [
    {
      id: "final-1",
      question: "If your partner could change one thing about how they show love, what would matter most?",
      options: [
        { text: "More verbal affirmation and positive words", value: "words", followUp: null },
        { text: "More undivided attention and quality time", value: "time", followUp: null },
        { text: "More thoughtful gestures and surprises", value: "gifts", followUp: null },
        { text: "More help with responsibilities and tasks", value: "service", followUp: null },
        { text: "More physical intimacy and affection", value: "touch", followUp: null }
      ]
    },
    {
      id: "final-2",
      question: "Looking back on your happiest moment together, what made it special?",
      options: [
        { text: "The loving words that were exchanged", value: "words", followUp: null },
        { text: "The quality time spent together", value: "time", followUp: null },
        { text: "A thoughtful gift or surprise involved", value: "gifts", followUp: null },
        { text: "How your partner went out of their way for you", value: "service", followUp: null },
        { text: "The physical closeness and connection", value: "touch", followUp: null }
      ]
    }
  ]
};

export default function Quiz() {
  const [currentPath, setCurrentPath] = useState<string>("initial");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<{ question: string; value: string }>>([]);
  const [questionHistory, setQuestionHistory] = useState<Array<{ path: string; index: number }>>([{ path: "initial", index: 0 }]);
  const router = useRouter();

  const currentQuestions = questionBank[currentPath as keyof typeof questionBank];
  const currentQuestion = currentQuestions[questionIndex];
  const totalQuestionsAnswered = answers.length;
  const minQuestions = 12;
  const maxQuestions = 18;

  const handleAnswer = (value: string, followUp: string | null) => {
    // Record the answer
    const newAnswers = [...answers, { question: currentQuestion.id, value }];
    setAnswers(newAnswers);

    // Calculate current scores to determine if we have enough data
    const scores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
    newAnswers.forEach((answer) => {
      scores[answer.value as keyof typeof scores]++;
    });

    const totalAnswers = newAnswers.length;
    const highestScore = Math.max(...Object.values(scores));
    const secondHighestScore = Object.values(scores).sort((a, b) => b - a)[1] || 0;

    // Check if we have a clear pattern and minimum questions
    const hasDistinctPattern = highestScore >= totalAnswers * 0.4; // 40% or more in one language
    const hasSecondaryPattern = secondHighestScore >= totalAnswers * 0.25; // 25% or more in second
    const hasMinQuestions = totalAnswers >= minQuestions;
    const reachedMaxQuestions = totalAnswers >= maxQuestions;

    // If we've reached max questions or have clear pattern with minimum questions, finish
    if (reachedMaxQuestions || (hasMinQuestions && hasDistinctPattern && hasSecondaryPattern)) {
      calculateResults(newAnswers);
      return;
    }

    // Determine next question path
    const nextPath = followUp || currentPath;
    let nextIndex = 0;

    // If follow-up is null (final questions), we're done
    if (followUp === null) {
      calculateResults(newAnswers);
      return;
    }

    // Check if we should move to next question in current path
    const nextQuestions = questionBank[nextPath as keyof typeof questionBank];
    if (currentPath === nextPath && questionIndex + 1 < currentQuestions.length) {
      // Stay in current path but move to next question
      const alreadyAnswered = newAnswers.some(a => a.question === currentQuestions[questionIndex + 1].id);
      if (!alreadyAnswered) {
        nextIndex = questionIndex + 1;
      } else {
        // Find an unanswered question in this path
        nextIndex = currentQuestions.findIndex((q, idx) =>
          idx > questionIndex && !newAnswers.some(a => a.question === q.id)
        );
        if (nextIndex === -1) nextIndex = 0;
      }
    } else {
      // Moving to new path, randomly select a question we haven't answered
      const unansweredQuestions = nextQuestions
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => !newAnswers.some(a => a.question === q.id));

      if (unansweredQuestions.length > 0) {
        const randomSelection = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];
        nextIndex = randomSelection.idx;
      }
    }

    // Update state
    setCurrentPath(nextPath);
    setQuestionIndex(nextIndex);
    setQuestionHistory([...questionHistory, { path: nextPath, index: nextIndex }]);
  };

  const handleBack = () => {
    if (questionHistory.length > 1) {
      // Remove current position
      const newHistory = questionHistory.slice(0, -1);
      const previous = newHistory[newHistory.length - 1];

      // Remove last answer
      setAnswers(answers.slice(0, -1));
      setQuestionHistory(newHistory);
      setCurrentPath(previous.path);
      setQuestionIndex(previous.index);
    }
  };

  const calculateResults = (finalAnswers: Array<{ question: string; value: string }>) => {
    const scores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
    finalAnswers.forEach((answer) => {
      scores[answer.value as keyof typeof scores]++;
    });

    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = Object.entries(scores).map(([lang, score]) => ({
      language: lang,
      percentage: Math.round((score / total) * 100)
    }));

    const resultsParam = percentages
      .map(p => `${p.language}:${p.percentage}`)
      .join(',');

    router.push(`/results?scores=${encodeURIComponent(resultsParam)}`);
  };

  const progress = Math.min((totalQuestionsAnswered / minQuestions) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Love Language Quiz
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p
              className="text-center text-gray-600">

            Question {totalQuestionsAnswered + 1} <br />
            {totalQuestionsAnswered >= minQuestions ? 'Almost done!' : `Just a few more questions to find your love language...`}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            {currentQuestion.question}
          </h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.value, option.followUp)}
                className="w-full text-left p-4 rounded-xl border-2 transition-all border-gray-200 hover:border-pink-300 text-gray-800 hover:bg-pink-50"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {totalQuestionsAnswered > 0 && (
          <button
            onClick={handleBack}
            className="w-full bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all"
          >
            ← Go Back
          </button>
        )}
      </div>
    </div>
  );
}