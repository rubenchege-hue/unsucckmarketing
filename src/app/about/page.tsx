import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Unsucck Marketing | Marketing Audit Agency Nairobi",
  description:
    "Meet Ruben and the Unsucck Marketing team. We're a marketing audit agency based in Nairobi, Kenya, helping businesses find and fix the leaks in their marketing funnel.",
};

const values = [
  {
    title: "Data Over Opinions",
    description:
      "We don't guess. Every recommendation is backed by data, analysis, and real-world results. If we can't measure it, we don't recommend it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Radical Honesty",
    description:
      "We tell you what's working, what's not, and whether we're the right fit. Sometimes the answer is 'you don't need an audit — you need X'. We'll tell you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Nairobi Grit",
    description:
      "Built in Nairobi, for African businesses and beyond. We understand the local market dynamics, challenges, and opportunities that global agencies miss.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Ruben",
    role: "Founder & Lead Auditor",
    bio: "Ruben has spent 12+ years in digital marketing across Nairobi, Johannesburg, and London. He's audited marketing funnels for 100+ businesses — from scrappy startups to enterprise brands. His superpower: finding the $10K leak in a $50K budget.",
    image: "/ruben.jpg",
  },
  {
    name: "Team",
    role: "Strategy & Analytics",
    bio: "Our team includes specialists in SEO, paid media, CRO, and brand strategy. Each audit is staffed with the exact expertise needed — no junior analysts, no cookie-cutter assignments.",
    initials: "ST",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  );
}
