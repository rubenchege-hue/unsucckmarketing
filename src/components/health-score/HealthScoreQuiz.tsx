"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions, calculateScore, type HealthScoreResult, type Question } from "./questions";
import { cn } from "@/lib/utils";

type Phase = "intro" | "quiz" | "email" | "results";

/* ── Intro Screen ── */

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-deep-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Marketing Health{" "}
        <span className="gradient-text">Score</span>
      </h1>
      <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg mx-auto">
        Answer 10 quick questions about your marketing. Get an instant health score,
        category breakdown, and personalized recommendations — for free.
      </p>

      <div className="space-y-3 mb-10 max-w-sm mx-auto">
        {[
          "Takes 3–5 minutes",
          "Get your score instantly",
          "Personalized recommendations",
          "Free — no credit card required",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-text-secondary">
            <svg className="w-4 h-4 text-neon-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item}
          </div>
        ))}
      </div>

      <button onClick={onStart} className="cyber-btn cyber-btn-primary text-base">
        Start the Assessment
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      <p className="mt-4 text-xs text-text-muted font-mono">
        Your answers are anonymous until you choose to share them
      </p>
    </motion.div>
  );
}

/* ── Single Question Card ── */

function QuestionCard({
  question,
  selected,
  onSelect,
  onNext,
  isLast,
}: {
  question: Question;
  selected: number | null;
  onSelect: (score: number) => void;
  onNext: () => void;
  isLast: boolean;
}) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.35 }}
      className="max-w-2xl mx-auto"
    >
      <span className="text-xs font-mono text-neon-cyan tracking-widest mb-2 block">
        {question.category}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{question.question}</h2>
      {question.subtext && (
        <p className="text-text-muted text-sm mb-8">{question.subtext}</p>
      )}

      <div className="space-y-3 mb-8">
        {question.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onSelect(opt.score)}
            className={cn(
              "w-full text-left cyber-card transition-all duration-200",
              selected === opt.score
                ? "border-neon-cyan/40 bg-neon-cyan/5"
                : "hover:border-white/10",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <span className="text-text-primary text-sm font-medium block">
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="text-text-muted text-xs font-mono mt-0.5 block">
                    {opt.description}
                  </span>
                )}
              </div>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-200",
                  selected === opt.score
                    ? "border-neon-cyan bg-neon-cyan/20"
                    : "border-text-muted/30",
                )}
              >
                {selected === opt.score && (
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={selected === null}
        className={cn(
          "cyber-btn w-full justify-center text-sm transition-all duration-300",
          selected !== null
            ? "cyber-btn-primary"
            : "bg-transparent border border-border text-text-muted cursor-not-allowed",
        )}
      >
        {isLast ? "See My Score" : "Next Question"}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </motion.div>
  );
}

/* ── Progress Bar ── */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="max-w-2xl mx-auto mb-10">
      <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-2">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-deep-bg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
        />
      </div>
    </div>
  );
}

/* ── Results Screen ── */

function Results({
  result,
  email,
  onEmailChange,
  onSubmit,
  submitted,
  sending,
  error,
}: {
  result: HealthScoreResult;
  email: string;
  onEmailChange: (v: string) => void;
  onSubmit: () => void;
  submitted: boolean;
  sending: boolean;
  error: string | null;
}) {
  const scoreColor = {
    critical: "text-neon-magenta",
    warning: "text-amber-400",
    good: "text-yellow-300",
    excellent: "text-neon-green",
  }[result.level];

  const scoreRing = {
    critical: "stroke-neon-magenta",
    warning: "stroke-amber-400",
    good: "stroke-yellow-300",
    excellent: "stroke-neon-green",
  }[result.level];

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (result.percentage / 100) * circumference;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3 gradient-text">Report Sent!</h2>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          We&apos;ve sent your full Marketing Health Score report to{" "}
          <span className="text-neon-cyan font-mono">{email}</span>.
          Check your inbox — it should arrive within a minute.
        </p>
        <p className="text-xs text-text-muted font-mono">
          In the meantime, want to{" "}
          <a href="/contact" className="text-neon-cyan hover:underline">
            book a free discovery call
          </a>
          ?
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      {/* Score Gauge */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-neon-cyan tracking-widest mb-4 block">
          YOUR SCORE
        </span>
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle
              cx="80" cy="80" r="70"
              fill="none"
              stroke=""
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={scoreRing}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className={`text-4xl font-bold ${scoreColor}`}
            >
              {result.percentage}%
            </motion.span>
            <span className="text-[10px] text-text-muted font-mono mt-1">
              {result.totalScore}/{result.maxScore}
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">{result.label}</h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
          {result.description}
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="cyber-card mb-8">
        <h3 className="text-sm font-mono text-neon-purple tracking-wider mb-5">
          / CATEGORY BREAKDOWN
        </h3>
        <div className="space-y-4">
          {result.breakdown.map((b) => (
            <div key={b.category} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-primary">{b.category}</span>
                <span className="text-xs font-mono text-text-muted">
                  {b.score}/{b.maxScore}
                </span>
              </div>
              <div className="h-2 rounded-full bg-deep-bg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${b.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Capture */}
      <div className="cyber-card animated-border">
        <h3 className="text-lg font-bold mb-2">
          Get Your Full <span className="gradient-text">Report</span>
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          Enter your email to receive the complete report with detailed 
          recommendations for each category. No spam, ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            aria-label="Email address"
            className="flex-1 bg-deep-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-neon-cyan/40 transition-colors"
          />
          {error && (
            <p className="text-xs text-neon-magenta font-mono mb-2">{error}</p>
          )}
          <button
            onClick={onSubmit}
            disabled={!email.includes("@") || sending}
            className={cn(
              "cyber-btn justify-center text-sm whitespace-nowrap",
              email.includes("@") && !sending
                ? "cyber-btn-primary"
                : "bg-transparent border border-border text-text-muted cursor-not-allowed",
            )}
          >
            {sending ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send My Report
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </div>
        <p className="text-[10px] text-text-muted font-mono mt-3 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main Quiz ── */

export default function HealthScoreQuiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // result is lazily computed once all answers are in
  const result = useMemo(() => {
    if (Object.keys(answers).length < questions.length) return null;
    return calculateScore(answers);
  }, [answers]);

  const handleSelect = useCallback((score: number) => {
    setSelected(score);
  }, []);

  const handleNext = useCallback(() => {
    if (selected === null) return;

    const q = questions[currentQ];
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setSelected(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ((i) => i + 1);
    } else {
      setPhase("results");
    }
  }, [selected, currentQ]);

  const handleStart = useCallback(() => {
    setPhase("quiz");
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
  }, []);

  const handleSubmitEmail = useCallback(async () => {
    if (!email.includes("@") || !result) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/health-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, result }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send report");
      }

      setSubmitted(true);
      localStorage.setItem("healthScore", JSON.stringify({ email, answers, result }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }, [email, answers, result]);

  const handleRestart = useCallback(() => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
    setEmail("");
    setSubmitted(false);
    setSending(false);
    setError(null);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {phase === "intro" && <Intro key="intro" onStart={handleStart} />}

        {phase === "quiz" && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProgressBar current={currentQ} total={questions.length} />
            <AnimatePresence mode="wait">
              <QuestionCard
                key={questions[currentQ].id}
                question={questions[currentQ]}
                selected={selected}
                onSelect={handleSelect}
                onNext={handleNext}
                isLast={currentQ === questions.length - 1}
              />
            </AnimatePresence>
          </motion.div>
        )}

        {phase === "results" && result && (
          <Results
            key="results"
            result={result}
            email={email}
            onEmailChange={setEmail}
            onSubmit={handleSubmitEmail}
            submitted={submitted}
            sending={sending}
            error={error}
          />
        )}
      </AnimatePresence>

      {/* Restart */}
      {phase !== "intro" && (
        <div className="text-center mt-10">
          <button
            onClick={handleRestart}
            className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors inline-flex items-center gap-1.5"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
