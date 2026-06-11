"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Content Audit",
    description:
      "Comprehensive analysis of your content strategy and SEO performance. We identify gaps, optimize for search intent, and build a roadmap to dominate organic rankings.",
    metrics: ["Technical SEO", "Content Gaps", "Keyword Strategy", "On-Page"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Ad Creative & Copy Generation",
    description:
      "We audit your existing ads and generate high-converting ad creatives and copy that cuts through the noise across Meta, Google, LinkedIn, and TikTok.",
    metrics: ["Creative Audit", "Copy Generation", "A/B Testing", "ROAS"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Copywriting Analysis & Generation",
    description:
      "Deep-dive analysis of your brand copy across all touchpoints. We audit messaging effectiveness and generate optimized copy that converts.",
    metrics: ["Message Audit", "Tone Analysis", "CTR Optimization", "Conversion"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    title: "Marketing Audit Orchestrator",
    description:
      "A full 360-degree audit of your entire marketing ecosystem. We orchestrate a comprehensive review across all channels, systems, and strategies to find every leak.",
    metrics: ["360° Audit", "Channel Analysis", "ROI Mapping", "Strategy"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Brand Voice Analysis & Guidelines",
    description:
      "We audit your current brand voice, analyze how it lands with your audience, and develop comprehensive brand voice guidelines that ensure consistency across every channel.",
    metrics: ["Voice Audit", "Guidelines", "Consistency", "Positioning"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Social Media Content Calendar",
    description:
      "We audit your current social performance, identify content gaps and opportunities, and generate a data-driven content calendar that drives engagement and growth.",
    metrics: ["Content Strategy", "Posting Schedule", "Engagement", "Growth"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sales Funnel Analysis & Optimization",
    description:
      "We map, measure, and analyze every stage of your sales funnel — identifying drop-offs, friction points, and optimization opportunities from top to bottom.",
    metrics: ["Funnel Mapping", "Drop-off Analysis", "Conversion", "Automation"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4v16h18M3 4l6 6 4-4 8 8" />
      </svg>
    ),
  },
  {
    title: "Launch Playbook Generator",
    description:
      "We audit your go-to-market strategy and build a comprehensive launch playbook — from pre-launch buzz to post-launch optimization — to ensure your product or service hits the ground running.",
    metrics: ["GTM Strategy", "Launch Timeline", "Channel Mix", "KPIs"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Marketing Report Generator",
    description:
      "We audit your reporting structure and create automated, insightful marketing reports in Markdown format — giving you clear visibility into what's working and what's not.",
    metrics: ["Dashboards", "KPI Tracking", "Automation", "Insights"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Email Sequence Generation",
    description:
      "We audit your current email flows and craft high-converting email sequences — from welcome series to re-engagement campaigns — that drive opens, clicks, and sales.",
    metrics: ["Flow Audit", "Sequence Design", "Segmentation", "Deliverability"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Marketing Content Analysis",
    description:
      "We analyze all your marketing content — blogs, videos, social posts, emails — for performance, relevance, and gaps. Then we give you a content strategy that works.",
    metrics: ["Content Audit", "Performance Analysis", "Gap Analysis", "Strategy"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Landing Page CRO Analysis",
    description:
      "We audit your landing pages for conversion performance — analyzing design, copy, UX, load speed, and user behavior — then deliver actionable optimization recommendations.",
    metrics: ["CRO Audit", "UX Analysis", "A/B Testing", "Heatmaps"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Client Proposal Generator",
    description:
      "We audit your sales process and craft compelling, conversion-optimized proposals for your marketing services. Win more clients with proposals that close.",
    metrics: ["Proposal Audit", "Content Strategy", "Pricing", "Conversion"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Marketing Conversion Analysis",
    description:
      "We analyze your entire conversion ecosystem — from first click to final sale — identifying friction points, drop-offs, and optimization opportunities at every step.",
    metrics: ["Conversion Audit", "Funnel Analysis", "CRO Roadmap", "Revenue"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Intelligence Analysis",
    description:
      "We audit your competitive landscape — analyzing competitor strategies, positioning, content, ads, and performance — to uncover opportunities and give you the edge.",
    metrics: ["Competitor Audit", "Positioning", "Gap Analysis", "Strategy"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-neon-purple tracking-widest mb-4">
            / SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            AI-powered marketing audits across 15 different capabilities. Each service is custom-tailored to your business.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="cyber-card group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-3 py-1 text-xs font-mono text-neon-cyan/80 bg-neon-cyan/5 rounded-full border border-neon-cyan/10"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
