import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthScoreQuiz from "@/components/health-score/HealthScoreQuiz";

export const metadata: Metadata = {
  title: "Marketing Health Score — Unsucck Marketing",
  description:
    "Take our free 10-question Marketing Health Score assessment. Get an instant score, category breakdown, and personalized recommendations to grow your business.",
  openGraph: {
    title: "Marketing Health Score — Unsucck Marketing",
    description:
      "Answer 10 quick questions. Get your marketing health score instantly. Free assessment with personalized recommendations.",
  },
};

export default function HealthScorePage() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <HealthScoreQuiz />
        </div>
      </section>
      <Footer />
    </main>
  );
}
