"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "30–45",
    unit: "K",
    subtitle: "For businesses getting started with audits",
    cta: "Get Started",
    features: [
      { label: "Monthly audit refresh", included: true },
      { label: "SEO fixes & metadata", included: true },
      { label: "Content (2–4 pieces)", included: false },
      { label: "Email sequence", included: false },
      { label: "Competitor monitoring", included: false },
      { label: "Ad copy", included: false },
      { label: "Monthly report to client", included: true },
    ],
    accent: "from-neon-cyan to-cyan-400",
    borderColor: "border-neon-cyan/20",
    glowColor: "rgba(0,240,255,0.15)",
  },
  {
    name: "Growth",
    price: "50–80",
    unit: "K",
    subtitle: "For scaling businesses ready to dominate",
    popular: true,
    cta: "Go Growth",
    features: [
      { label: "Monthly audit refresh", included: true },
      { label: "SEO fixes & metadata", included: true },
      { label: "Content (2–4 pieces)", included: true },
      { label: "Email sequence", included: true },
      { label: "Competitor monitoring", included: true },
      { label: "Ad copy", included: true },
      { label: "Monthly report to client", included: true },
    ],
    accent: "from-neon-purple to-neon-magenta",
    borderColor: "border-neon-purple/30",
    glowColor: "rgba(168,85,247,0.2)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
            / PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Transparent monthly plans. No hidden fees. No lock-in contracts.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative cyber-card animated-border ${plan.borderColor} ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-magenta text-deep-bg text-[10px] font-bold font-mono tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8 pt-2">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-sm text-text-muted font-mono">Ksh</span>
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-text-muted font-mono">{plan.unit}</span>
                </div>
                <p className="text-xs text-text-muted font-mono">per month</p>
                <p className="text-text-secondary text-sm mt-4">
                  {plan.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="section-divider mb-6" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-neon-green shrink-0"
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
                    ) : (
                      <svg
                        className="w-5 h-5 text-text-muted/40 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-text-primary"
                          : "text-text-muted/40"
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`cyber-btn w-full justify-center text-sm ${
                  plan.popular
                    ? "cyber-btn-primary"
                    : "cyber-btn-outline"
                }`}
              >
                {plan.cta}
                <svg
                  className="w-4 h-4"
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
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-text-muted font-mono mt-8"
        >
          All prices in Kenyan Shillings · No lock-in contracts · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
