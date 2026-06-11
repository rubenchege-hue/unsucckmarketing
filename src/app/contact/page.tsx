import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Unsucck Marketing | Book Your Free Marketing Audit",
  description:
    "Ready to find the leaks in your marketing funnel? Call +254 726 241 286 or book your free discovery call with Unsucck Marketing. Based in Nairobi.",
};

const contactInfo = [
  {
    label: "Phone",
    value: "+254 726 241 286",
    href: "tel:+254726241286",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ainworkflows@gmail.com",
    href: "mailto:ainworkflows@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqMini = [
  {
    q: "What happens after I submit?",
    a: "We review your details and reach out within 24 hours to schedule a free 30-minute discovery call. No pitch — just a conversation to see if we can help.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nope. Just bring your questions and a rough sense of what you're spending on marketing. We'll take it from there.",
  },
  {
    q: "Is the discovery call really free?",
    a: "100%. No credit card, no commitment. We genuinely want to see if there's a fit before either of us invests more time.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
              / CONTACT
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="gradient-text">Talk</span> About Your
              Marketing
            </h1>
            <p className="max-w-xl mx-auto text-text-secondary text-lg">
              Call or message us directly, or fill in the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="cyber-card animated-border">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">
                    Book Your Free Audit
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="cyber-card">
                <h3 className="text-sm font-mono text-neon-purple tracking-wider mb-4">
                  / CONTACT INFO
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-mono">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-text-primary font-medium hover:text-neon-cyan transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-text-primary font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Call CTA */}
              <a
                href="tel:+254726241286"
                className="cyber-card block text-center hover:border-neon-cyan/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-neon-green/20 transition-colors">
                  <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-text-primary mb-1">
                  Call Ruben Directly
                </p>
                <p className="text-lg font-mono text-neon-cyan">
                  +254 726 241 286
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Available Mon–Fri, 8am–6pm
                </p>
              </a>

              {/* Mini FAQ */}
              <div className="cyber-card">
                <h3 className="text-sm font-mono text-neon-cyan tracking-wider mb-4">
                  / QUICK ANSWERS
                </h3>
                <div className="space-y-4">
                  {faqMini.map((item) => (
                    <div key={item.q}>
                      <p className="text-sm text-text-primary font-medium mb-1">
                        {item.q}
                      </p>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Signal */}
              <div className="cyber-card text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs text-text-muted font-mono">
                    100% CONFIDENTIAL
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  All information shared is treated with strict confidentiality.
                  Your data is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
