export interface Question {
  id: string;
  question: string;
  subtext?: string;
  options: { label: string; score: number; description?: string }[];
  category: string;
}

export const questions: Question[] = [
  {
    id: "goals",
    question: "Do you have documented marketing goals?",
    subtext: "Clear goals are the foundation of every great marketing strategy.",
    category: "Strategy",
    options: [
      { label: "We have specific, documented goals with KPIs and deadlines", score: 10, description: "S.M.A.R.T. goals set" },
      { label: "We have general goals but nothing formalized", score: 6, description: "Vague direction" },
      { label: "We know what we want but haven't written it down", score: 3, description: "All in our heads" },
      { label: "We're figuring it out as we go", score: 1, description: "No clear direction" },
    ],
  },
  {
    id: "tracking",
    question: "How do you track your marketing performance?",
    subtext: "You can't improve what you don't measure.",
    category: "Analytics",
    options: [
      { label: "Multi-channel dashboards with attribution modeling", score: 10, description: "Full visibility" },
      { label: "Basic analytics (GA4, platform insights)", score: 7, description: "Some data" },
      { label: "We look at revenue and guess which channel drove it", score: 3, description: "Mostly guessing" },
      { label: "We don't track performance systematically", score: 1, description: "Flying blind" },
    ],
  },
  {
    id: "audit-frequency",
    question: "How often do you audit your marketing?",
    subtext: "Regular audits catch small leaks before they become floods.",
    category: "Optimization",
    options: [
      { label: "Quarterly — we review everything on a cycle", score: 10, description: "Highly disciplined" },
      { label: "Once or twice a year", score: 6, description: "Occasional checks" },
      { label: "Only when something goes wrong", score: 3, description: "Reactive" },
      { label: "We've never formally audited our marketing", score: 1, description: "No audits ever" },
    ],
  },
  {
    id: "conversion",
    question: "What's your website conversion rate?",
    subtext: "Your conversion rate is the ultimate report card for your funnel.",
    category: "CRO",
    options: [
      { label: "Above 5% — we're consistently converting well", score: 10, description: "Excellent" },
      { label: "2-5% — solid but room to grow", score: 7, description: "Above average" },
      { label: "1-2% — about average for our industry", score: 4, description: "Average" },
      { label: "Below 1% — or we honestly don't know", score: 1, description: "Needs work" },
    ],
  },
  {
    id: "content",
    question: "How mature is your content marketing?",
    subtext: "Content is how you attract, educate, and convert your audience.",
    category: "Content",
    options: [
      { label: "Structured strategy with regular publishing & optimization", score: 10, description: "Full engine running" },
      { label: "We publish occasionally but no consistent strategy", score: 6, description: "Sporadic" },
      { label: "We have a blog but rarely update it", score: 3, description: "Dormant" },
      { label: "No content marketing at all", score: 1, description: "Nonexistent" },
    ],
  },
  {
    id: "email",
    question: "How are you using email marketing?",
    subtext: "Email consistently delivers the highest ROI of any marketing channel.",
    category: "Email",
    options: [
      { label: "Automated sequences, segmentation, and regular broadcasts", score: 10, description: "Full automation" },
      { label: "Occasional newsletters and basic automations", score: 6, description: "Getting started" },
      { label: "We have a list but rarely email it", score: 3, description: "Dormant list" },
      { label: "No email marketing at all", score: 1, description: "Not using it" },
    ],
  },
  {
    id: "seo",
    question: "How would you describe your SEO efforts?",
    subtext: "Organic search is the gift that keeps giving — if you invest in it.",
    category: "SEO",
    options: [
      { label: "Active SEO program with dedicated resources and content", score: 10, description: "Investing heavily" },
      { label: "Basic on-page SEO and some content optimization", score: 6, description: "Some effort" },
      { label: "We set it up once and haven't touched it since", score: 3, description: "Set and forget" },
      { label: "No SEO strategy at all", score: 1, description: "Invisible in search" },
    ],
  },
  {
    id: "ads",
    question: "How efficient are your paid ad campaigns?",
    subtext: "Paid media should be a growth engine, not a money pit.",
    category: "Paid Media",
    options: [
      { label: "Profitable with structured testing and optimization", score: 10, description: "Optimized & scaling" },
      { label: "Running but ROAS is inconsistent", score: 6, description: "Mixed results" },
      { label: "We're spending but not sure if it's working", score: 3, description: "Guessing" },
      { label: "Not running any paid ads", score: 1, description: "Not using paid media" },
    ],
  },
  {
    id: "budget",
    question: "How do you allocate your marketing budget?",
    subtext: "Smart allocation separates growth from waste.",
    category: "Strategy",
    options: [
      { label: "Data-driven allocation based on channel performance", score: 10, description: "Optimized spend" },
      { label: "We spread budget evenly across channels", score: 5, description: "Shotgun approach" },
      { label: "We spend whatever is left after other expenses", score: 3, description: "Residual budget" },
      { label: "No dedicated marketing budget", score: 1, description: "No budget" },
    ],
  },
  {
    id: "social",
    question: "How strategic is your social media presence?",
    subtext: "Social should drive engagement and conversions, not just likes.",
    category: "Social",
    options: [
      { label: "Channel-specific strategies with consistent content & engagement", score: 10, description: "Strategic" },
      { label: "We post regularly but no formal strategy", score: 6, description: "Consistent but ad-hoc" },
      { label: "We have accounts but rarely post", score: 3, description: "Inactive" },
      { label: "No social media presence", score: 1, description: "Not on social" },
    ],
  },
];

export interface ScoreBreakdown {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface HealthScoreResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: "critical" | "warning" | "good" | "excellent";
  label: string;
  description: string;
  breakdown: ScoreBreakdown[];
}

export function calculateScore(answers: Record<string, number>): HealthScoreResult {
  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const maxScore = questions.length * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const categories = [...new Set(questions.map((q) => q.category))];
  const breakdown: ScoreBreakdown[] = categories.map((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat);
    const catScore = catQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const catMax = catQuestions.length * 10;
    return {
      category: cat,
      score: catScore,
      maxScore: catMax,
      percentage: Math.round((catScore / catMax) * 100),
    };
  });

  let level: HealthScoreResult["level"];
  let label: string;
  let description: string;

  if (percentage >= 80) {
    level = "excellent";
    label = "Marketing Rockstar";
    description = "Your marketing foundation is strong. You're tracking, optimizing, and investing across channels. Focus on advanced strategies — automation, personalization, and scaling what works.";
  } else if (percentage >= 60) {
    level = "good";
    label = "Solid Foundation";
    description = "You have good marketing fundamentals in place, but there are clear opportunities to level up. A focused audit will uncover quick wins and strategic growth opportunities.";
  } else if (percentage >= 40) {
    level = "warning";
    label = "Room for Improvement";
    description = "You're doing some things right, but there are significant gaps in your marketing strategy. A comprehensive audit would identify the biggest leaks and prioritize fixes.";
  } else {
    level = "critical";
    label = "Needs Urgent Attention";
    description = "Your marketing needs a fundamental rebuild. But don't worry — every business starts somewhere. A full audit will give you a clear, actionable roadmap from ground zero.";
  }

  return { totalScore, maxScore, percentage, level, label, description, breakdown };
}
