"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Audits Completed", value: "150+" },
  { label: "Avg. ROAS Improvement", value: "340%" },
  { label: "Clients Worldwide", value: "80+" },
  { label: "Years Experience", value: "12+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 border border-neon-cyan/20 rounded-lg animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-12 h-12 border border-neon-purple/20 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[5%] w-20 h-20 border border-neon-magenta/20 rotate-45 animate-float"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs text-text-secondary font-mono tracking-wider">
            NAIROBI · MARKETING AUDIT AGENCY
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          <span className="text-text-primary">Stop Guessing.</span>
          <br />
          <span className="gradient-text">Start Growing.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-12 leading-relaxed"
        >
          We rip apart your marketing funnel, find every leak, and hand you a 
          battle-tested roadmap to{" "}
          <span className="text-text-primary font-semibold">dominate your market</span>.
          No fluff. Just data.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="cyber-btn cyber-btn-primary">
            Claim Your Free Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/services" className="cyber-btn cyber-btn-outline">
            See Our Services
          </Link>
          <a
            href="/sample-audit-report.pdf"
            download
            className="cyber-btn cyber-btn-outline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Sample Report
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-text-muted/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
