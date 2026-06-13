"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    client: "E-Commerce Apparel Brand",
    slug: "ecommerce-apparel-brand",
    location: "Nairobi, Kenya",
    results: [
      { label: "Revenue Increase", value: "210%" },
      { label: "CAC Reduction", value: "45%" },
      { label: "Conversion Rate", value: "+3.2%" },
    ],
    description:
      "A growing fashion brand was burning cash on Facebook Ads with no clear strategy. We audited their entire funnel — from creative to checkout — and rebuilt their targeting, messaging, and landing page experience.",
    tags: ["Paid Media", "CRO", "Email"],
  },
  {
    client: "SaaS Platform (B2B)",
    slug: "saas-platform-b2b",
    location: "Nairobi, Kenya",
    results: [
      { label: "Organic Traffic", value: "180%" },
      { label: "Lead Quality", value: "+65%" },
      { label: "Demo Bookings", value: "3x" },
    ],
    description:
      "A B2B SaaS company had great product-market fit but terrible organic visibility. Our SEO and content audit uncovered 47 critical technical issues and massive content gaps that were hiding them from their ideal customers.",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    client: "Hospitality Group",
    slug: "hospitality-group",
    location: "Mombasa, Kenya",
    results: [
      { label: "Booking Rate", value: "135%" },
      { label: "Email Revenue", value: "+80%" },
      { label: "ROAS", value: "4.2x" },
    ],
    description:
      "A luxury hospitality group was relying on OTAs for 90% of bookings. We audited their direct booking strategy, email automation, and paid media — shifting the balance dramatically in their favor.",
    tags: ["Email", "Paid Media", "Brand"],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-neon-magenta tracking-widest mb-4">
            / CASE STUDIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results That{" "}
            <span className="gradient-text">Speak</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Real audits. Real businesses. Real growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/case-studies/${cs.slug}`} className="block group">
                <div className="cyber-card animated-border">
                  <div className="grid md:grid-cols-5 gap-8">
                    {/* Left: Case Info */}
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                          {cs.client}
                        </h3>
                        <span className="text-xs text-text-muted font-mono">
                          {cs.location}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {cs.description}
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

                    {/* Right: Results */}
                    <div className="md:col-span-2 grid grid-cols-3 gap-4">
                      {cs.results.map((result) => (
                        <div
                          key={result.label}
                          className="text-center p-3 rounded-lg bg-deep-bg/50"
                        >
                          <div className="text-xl md:text-2xl font-bold gradient-text mb-1">
                            {result.value}
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
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
