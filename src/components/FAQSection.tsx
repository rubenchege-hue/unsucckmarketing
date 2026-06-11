"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What exactly is a marketing audit?",
    a: "A marketing audit is a comprehensive, systematic examination of every aspect of your marketing — from strategy and execution to analytics and ROI. We look at everything: your channels, messaging, targeting, funnel, tech stack, and competitive positioning. The result is a prioritized action plan to fix what's broken and amplify what's working.",
  },
  {
    q: "How long does an audit take?",
    a: "Most audits take 2-4 weeks, depending on complexity and data availability. A standard digital audit takes about 2 weeks, while a full-funnel audit with competitive analysis can take up to 4 weeks. We'll give you a clear timeline after our discovery call.",
  },
  {
    q: "What access do you need from me?",
    a: "We typically need read-only access to your analytics platforms (Google Analytics, etc.), ad accounts (Google Ads, Meta, LinkedIn), CRM, and any marketing automation tools. We also conduct stakeholder interviews and review your content. Everything is handled securely and confidentially.",
  },
  {
    q: "Who needs a marketing audit?",
    a: "Any business that: (1) is spending money on marketing without clear ROI, (2) has hit a growth plateau, (3) is launching a new strategy or entering new markets, (4) hasn't reviewed their marketing in 6+ months, or (5) wants to optimize before scaling spend. If you're in Nairobi or anywhere in Africa and feel like your marketing isn't delivering, you're our ideal client.",
  },
  {
    q: "Are you based in Nairobi? Can we meet in person?",
    a: "Yes! We're based in Nairobi, Kenya, and we love meeting clients face-to-face. We also work remotely with clients across Africa and globally. Whether you want to sit down over coffee in Nairobi or hop on a Zoom call, we make it work.",
  },
  {
    q: "What happens after the audit?",
    a: "You get a detailed report with our findings and a prioritized roadmap. But we don't stop there. We offer implementation support — whether you want us to execute the changes, guide your in-house team, or just be available for questions as you implement. The choice is yours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-neon-magenta tracking-widest mb-4">
            / FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full text-left px-6 py-5 rounded-xl transition-all duration-300",
                  openIndex === index
                    ? "glass border border-neon-purple/20"
                    : "glass-light hover:border hover:border-white/5"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-text-primary font-medium text-sm md:text-base">
                    {faq.q}
                  </span>
                  <svg
                    className={cn(
                      "w-5 h-5 text-text-muted shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180 text-neon-purple"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
