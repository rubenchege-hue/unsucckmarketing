"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn everything about your business, goals, competitors, and current marketing stack. No assumptions, just facts.",
    color: "from-neon-cyan to-cyan-400",
  },
  {
    number: "02",
    title: "Data Collection",
    description:
      "We connect to your analytics, ad platforms, CRM, and any other data sources. Raw data doesn't lie.",
    color: "from-neon-purple to-purple-400",
  },
  {
    number: "03",
    title: "Deep Analysis",
    description:
      "Our team runs your data through 50+ diagnostic checks — finding leaks, inefficiencies, and hidden opportunities.",
    color: "from-neon-magenta to-pink-400",
  },
  {
    number: "04",
    title: "Strategy Blueprint",
    description:
      "You get a prioritized, actionable roadmap. No theory — just concrete steps to fix what's broken and scale what works.",
    color: "from-neon-cyan to-neon-purple",
  },
  {
    number: "05",
    title: "Implementation Support",
    description:
      "We don't just hand you a report and disappear. We help you execute the changes and track the impact.",
    color: "from-neon-purple to-neon-magenta",
  },
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
            / METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="gradient-text">5-Step</span> Audit Process
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            A battle-tested framework that has helped 150+ businesses identify
            and fix their marketing blind spots.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta opacity-20" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-dark-card border border-[rgba(168,85,247,0.2)] flex items-center justify-center z-10">
                  <span
                    className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`ml-28 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
