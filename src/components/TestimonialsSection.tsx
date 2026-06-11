"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Unsucck Marketing didn't just give us a report — they gave us a roadmap. Our conversion rate doubled within 60 days of implementing their recommendations.",
    name: "Grace Wanjiku",
    role: "CEO, Tanda Naturals",
  },
  {
    quote:
      "We were spending $15K/month on ads with barely a 1.5x ROAS. After their audit and restructuring, we hit 4.2x in the first quarter. Absolute game changer.",
    name: "Kevin Mwangi",
    role: "CMO, BuildX Technologies",
  },
  {
    quote:
      "The SEO audit uncovered issues we didn't even know existed. Six months later we're ranking #1 for 23 new keywords. Worth every shilling.",
    name: "Amina Hassan",
    role: "Founder, Nook & Brunch",
  },
];

const logos = [
  "TANDA",
  "BUILDX",
  "NOOK+",
  "SAFARICOM",
  "EQUITY",
  "KCB",
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute right-0 top-0 w-80 h-80 bg-neon-magenta/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="cyber-card flex flex-col justify-between"
            >
              <div>
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-neon-purple/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>
              <div>
                <div className="text-text-primary font-semibold text-sm">
                  {t.name}
                </div>
                <div className="text-text-muted text-xs font-mono">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-mono text-text-muted tracking-widest mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg md:text-xl font-bold text-text-muted/30 hover:text-text-muted/50 transition-colors tracking-widest"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
