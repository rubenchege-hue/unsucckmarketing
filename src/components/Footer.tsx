"use client";

import Link from "next/link";
import ScrambleText from "@/components/ScrambleText";

const footerLinks = {
  Services: [
    { href: "/services", label: "SEO Content Audit" },
    { href: "/services", label: "Ad Creative & Copy" },
    { href: "/services", label: "Marketing Audit Orchestrator" },
    { href: "/services", label: "Brand Voice Analysis" },
    { href: "/services", label: "Sales Funnel Analysis" },
    { href: "/services", label: "Landing Page CRO" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#case-studies", label: "Case Studies" },
  ],
  Contact: [
    { href: "tel:+254726241286", label: "+254 726 241 286" },
    { href: "mailto:ainworkflows@gmail.com", label: "ainworkflows@gmail.com" },
    { href: "#", label: "Nairobi, Kenya" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(168,85,247,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-bg to-dark-card" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <span className="text-deep-bg font-bold text-sm">U</span>
              </div>
              <span className="text-lg font-bold group-hover:scale-[1.02] transition-transform duration-300">
                <ScrambleText text="Unsucck Marketing" className="brand-shimmer" />
              </span>
            </Link>
            <p className="text-text-muted text-xs leading-relaxed mb-4">
              Marketing audit agency based in <span className="text-text-secondary font-medium">Nairobi, Kenya</span>.
              We find the leaks in your marketing funnel.
            </p>            <div className="space-y-1">
              <a href="tel:+254726241286" className="block text-xs text-neon-cyan hover:text-neon-cyan/80 transition-colors font-mono">
                +254 726 241 286
              </a>
              <a href="mailto:ainworkflows@gmail.com" className="block text-xs text-neon-purple hover:text-neon-purple/80 transition-colors font-mono">
                ainworkflows@gmail.com
              </a>

            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-text-muted tracking-widest mb-4">
                / {title.toUpperCase()}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-neon-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Unsucck Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
            <span>Nairobi, Kenya</span>
            <span className="w-1 h-1 rounded-full bg-neon-purple/50" />
            <a href="tel:+254726241286" className="hover:text-neon-cyan transition-colors">
              +254 726 241 286
            </a>
            <span className="w-1 h-1 rounded-full bg-neon-purple/50" />
            <a href="mailto:ainworkflows@gmail.com" className="hover:text-neon-cyan transition-colors">
              ainworkflows@gmail.com
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
