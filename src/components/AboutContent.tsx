"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Data Over Opinions",
    description:
      "We don't guess. Every recommendation is backed by data, analysis, and real-world results. If we can't measure it, we don't recommend it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Radical Honesty",
    description:
      "We tell you what's working, what's not, and whether we're the right fit. Sometimes the answer is 'you don't need an audit — you need X'. We'll tell you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Nairobi Grit",
    description:
      "Built in Nairobi, for African businesses and beyond. We understand the local market dynamics, challenges, and opportunities that global agencies miss.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Ruben",
    role: "Founder & Lead Auditor",
    bio: "Ruben has spent 12+ years in digital marketing across Nairobi, Johannesburg, and London. He's audited marketing funnels for 100+ businesses — from scrappy startups to enterprise brands. His superpower: finding the $10K leak in a $50K budget.",
    image: "/ruben.png",
  },
  {
    name: "Team",
    role: "Strategy & Analytics",
    bio: "Our team includes specialists in SEO, paid media, CRO, and brand strategy. Each audit is staffed with the exact expertise needed — no junior analysts, no cookie-cutter assignments.",
    initials: "ST",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutContent() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-mono text-neon-purple tracking-widest mb-4">
              / ABOUT US
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We&apos;re on a mission to{" "}
              <span className="gradient-text">unsuck</span>{" "}
              your marketing
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Based in Nairobi, Kenya. Unsucck Marketing was founded by Ruben
              with a simple belief: most marketing is broken, and most
              &ldquo;agencies&rdquo; are too afraid to say it.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              We&apos;re different. We don&apos;t manage campaigns. We don&apos;t sell
              retainers. We audit your marketing, find what&apos;s broken, and give
              you a crystal-clear roadmap to fix it. No fluff. No ego. Just
              results.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="cyber-btn cyber-btn-primary"
              >
                Work With Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl cyber-card animated-border overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/ruben.png"
                  alt="Ruben — Founder of Unsucck Marketing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-card/90 via-dark-card/60 to-transparent">
                  <p className="text-text-primary text-sm font-mono leading-relaxed">
                    &ldquo;Every audit we do uncovers at least 3 things that are costing you money right now.&rdquo;
                  </p>
                  <p className="text-neon-cyan font-semibold text-sm mt-2">
                    — Ruben, Founder
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border border-neon-cyan/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-neon-purple/20 rounded-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="cyber-card group cursor-default"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple mb-4 group-hover:bg-neon-purple/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="cyber-card flex items-start gap-5"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full shrink-0 overflow-hidden"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-xs text-neon-cyan font-mono mb-2">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
