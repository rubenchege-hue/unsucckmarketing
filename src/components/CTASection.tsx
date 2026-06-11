"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30" />
      </div>

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
            / READY TO STOP GUESSING?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Find the{" "}
            <span className="gradient-text">Leaks</span> in Your{" "}
            <br className="hidden sm:block" />
            Marketing Funnel
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Book your free discovery call. We&apos;ll review your current marketing,
            identify quick wins, and show you exactly what an audit would uncover.
            No commitment. Just insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="cyber-btn cyber-btn-primary text-base"
            >
              Book Your Free Audit
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="cyber-btn cyber-btn-outline text-base"
            >
              Learn More First
            </Link>
          </div>
          <p className="mt-6 text-xs text-text-muted font-mono">
            No credit card required · 30-minute call · Nairobi &amp; remote
          </p>
        </motion.div>
      </div>
    </section>
  );
}
