"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DownloadSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-mono text-neon-magenta tracking-widest mb-4">
              / FREE RESOURCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              See What a{" "}
              <span className="gradient-text">Real Audit</span>{" "}
              Looks Like
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
              Download our sample marketing audit report. See exactly how we
              break down funnels, identify leaks, and build growth roadmaps —
              before you commit to anything.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Real audit methodology & framework",
                "Sample data analysis & insights",
                "Actionable recommendation examples",
                "No email required — just download",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-neon-green mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/sample-audit-report.pdf"
              download
              className="cyber-btn cyber-btn-primary text-base group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Sample Report
            </a>
            <p className="mt-3 text-xs text-text-muted font-mono">
              PDF · 2.4 MB · No signup required
            </p>
          </motion.div>

          {/* Right: Visual preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="cyber-card animated-border p-8 text-center relative">
              {/* PDF icon */}
              <div className="w-20 h-24 mx-auto mb-6 rounded-xl bg-gradient-to-br from-neon-magenta/20 to-neon-purple/20 border border-neon-magenta/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-neon-magenta"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Sample Audit Report
              </h3>
              <p className="text-text-muted text-xs font-mono mb-4">
                Unsucck Marketing
              </p>
              <div className="space-y-2">
                {[
                  "Executive Summary",
                  "Funnel Analysis",
                  "Channel Performance",
                  "Top 10 Recommendations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-text-secondary"
                  >
                    <div className="w-1 h-1 rounded-full bg-neon-magenta" />
                    {item}
                  </div>
                ))}
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neon-magenta/30 rounded-tl" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-magenta/30 rounded-tr" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-magenta/30 rounded-bl" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neon-magenta/30 rounded-br" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
