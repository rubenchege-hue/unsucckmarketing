"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, getAllTags } from "@/lib/case-studies";
import { CollectionPageSchema } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CaseStudiesPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const allTags = useMemo(() => getAllTags(), []);

  const filtered = useMemo(
    () =>
      activeTag
        ? caseStudies.filter((cs) => cs.tags.includes(activeTag))
        : caseStudies,
    [activeTag],
  );

  const ldJson = CollectionPageSchema({
    name: "Case Studies — Unsucck Marketing",
    description: "Real marketing audit case studies from Nairobi's premier audit agency.",
    numberOfItems: caseStudies.length,
  });

  return (
    <main className="min-h-screen bg-deep-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson }}
      />
      <Header />
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-mono text-neon-magenta tracking-widest mb-4">
              / CASE STUDIES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Results That{" "}
              <span className="gradient-text">Speak</span>
            </h1>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg">
              Real audits. Real businesses. Real growth. Filter by category to
              find the case study most relevant to you.
            </p>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setActiveTag(null)}
              className={cn(
                "px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300",
                activeTag === null
                  ? "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan"
                  : "border-border text-text-muted hover:border-text-muted/30 hover:text-text-secondary",
              )}
            >
              All Case Studies
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300",
                  activeTag === tag
                    ? "bg-neon-purple/10 border-neon-purple/30 text-neon-purple"
                    : "border-border text-text-muted hover:border-text-muted/30 hover:text-text-secondary",
                )}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {filtered.map((cs, index) => (
              <motion.div key={cs.slug} variants={cardVariants}>
                <Link href={`/case-studies/${cs.slug}`} className="block group">
                  <div className="cyber-card animated-border">
                    <div className="grid md:grid-cols-5 gap-8">
                      {/* Left: Info */}
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-text-muted">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                            {cs.client}
                          </h2>
                        </div>
                        <p className="text-xs text-text-muted font-mono mb-3">
                          {cs.location}
                        </p>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                          {cs.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-mono text-neon-purple/80 bg-neon-purple/5 rounded-full border border-neon-purple/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Key Results */}
                      <div className="md:col-span-2 grid grid-cols-2 gap-3">
                        {cs.results.slice(0, 4).map((result) => (
                          <div
                            key={result.label}
                            className="text-center p-3 rounded-lg bg-deep-bg/50"
                          >
                            <div className="text-2xl font-bold gradient-text mb-1">
                              {result.value}
                              {result.suffix}
                            </div>
                            <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider leading-tight">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View full study indicator */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-end gap-2 text-xs font-mono text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Full Case Study
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-text-muted font-mono text-sm">
                No case studies found for this category.
              </p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 text-neon-cyan hover:text-neon-cyan/80 text-sm font-mono underline underline-offset-4"
              >
                Clear filter
              </button>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
