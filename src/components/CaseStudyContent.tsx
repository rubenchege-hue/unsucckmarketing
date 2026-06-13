"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { CaseStudy } from "@/lib/case-studies";

/* ── Tiny helpers ── */

function Bar({ value, label, suffix, max }: { value: string; label: string; suffix?: string; max: number }) {
  const num = parseFloat(value);
  const rawPct = (num / max) * 100;
  // Ensure bars are at least 4% wide so tiny values are still visible
  const pct = Math.min(Math.max(rawPct, 4), 100);
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-text-secondary font-mono text-xs">{label}</span>
        <span className="text-text-primary font-bold">
          {value}{suffix}
        </span>
      </div>
      <div className="h-2 rounded-full bg-deep-bg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
        />
      </div>
    </div>
  );
}

function StatCard({ value, suffix, label, delay }: { value: string; suffix?: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="cyber-card text-center">
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
          {value}{suffix}
        </div>
        <div className="text-[11px] text-text-muted font-mono uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-neon-cyan to-neon-purple inline-block" />
      {children}
    </h2>
  );
}

/* ── Page Content ── */

export default function CaseStudyContent({ cs }: { cs: CaseStudy }) {
  const maxResult = Math.max(
    ...cs.results.map((r) => parseFloat(r.value)),
  );

  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${cs.gradient} opacity-[0.04] rounded-full blur-[120px]`} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-neon-cyan transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-mono text-neon-magenta tracking-widest">/ CASE STUDY</span>
              <span className="text-xs font-mono text-text-muted">·</span>
              <span className="text-xs font-mono text-text-muted">{cs.location}</span>
              <span className="text-xs font-mono text-text-muted">·</span>
              <span className="text-xs font-mono text-neon-cyan">{cs.industry}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {cs.client}
            </h1>
            <p className="max-w-3xl text-text-secondary text-lg md:text-xl leading-relaxed">
              {cs.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono text-neon-purple/80 bg-neon-purple/5 rounded-full border border-neon-purple/10"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Results Grid ── */}
      <section className="relative pb-16 md:pb-24">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-neon-cyan tracking-widest">KEY RESULTS</span>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.results.map((r, i) => (
              <StatCard key={r.label} value={r.value} suffix={r.suffix} label={r.label} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Sections ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>The Challenge</SectionHeading>
            <div className="cyber-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neon-magenta/10 flex items-center justify-center text-neon-magenta shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {cs.challenge}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Our Approach</SectionHeading>
            <p className="text-text-secondary mb-8 leading-relaxed">
              {cs.approach}
            </p>
            <div className="space-y-4">
              {cs.approachSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cyber-card flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-deep-bg font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed pt-1">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>The Solution</SectionHeading>
            <div className="cyber-card animated-border">
              <p className="text-text-secondary leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </motion.div>

          {/* Timeline / Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Timeline & Milestones</SectionHeading>
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta opacity-20" />
              <div className="space-y-6">
                {cs.milestones.map((m, i) => (
                  <motion.div
                    key={m.period}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12 md:pl-14"
                  >
                    <div className="absolute left-3 md:left-[1.35rem] top-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple ring-4 ring-deep-bg" />
                    <div className="cyber-card">
                      <span className="text-xs font-mono text-neon-cyan mb-1 block">
                        {m.period}
                      </span>
                      <p className="text-text-primary text-sm font-medium">
                        {m.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results Visualized (bars) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Results Breakdown</SectionHeading>
            <div className="cyber-card space-y-5">
              {cs.results.map((r) => (
                <Bar
                  key={r.label}
                  value={r.value}
                  suffix={r.suffix}
                  label={r.label}
                  max={maxResult}
                />
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>What the Client Said</SectionHeading>
            <div className="cyber-card animated-border relative">
              <svg
                className="w-10 h-10 text-neon-purple/20 absolute top-4 right-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <blockquote className="relative z-10 text-text-primary text-lg md:text-xl italic leading-relaxed mb-6 max-w-3xl">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-deep-bg font-bold text-sm">
                  {cs.testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{cs.testimonial.name}</p>
                  <p className="text-text-muted text-xs font-mono">{cs.testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Services Deployed</SectionHeading>
            <div className="flex flex-wrap gap-3">
              {cs.servicesUsed.map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="cyber-card group hover:border-neon-cyan/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple" />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {s}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 text-text-muted group-hover:text-neon-cyan transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Key Takeaways</SectionHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {cs.keyTakeaways.map((takeaway, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="cyber-card flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-neon-green mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-text-secondary text-sm leading-relaxed">{takeaway}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative pb-16 md:pb-24">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-card animated-border p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Results Like{" "}
              <span className="gradient-text">These?</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Book your free discovery call. We&apos;ll review your current
              marketing, identify quick wins, and show you exactly what an audit
              would uncover.
            </p>
            <Link href="/contact" className="cyber-btn cyber-btn-primary">
              Book Your Free Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
