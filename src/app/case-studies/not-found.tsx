import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CaseStudyNotFound() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-xl bg-neon-magenta/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-neon-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="inline-block text-xs font-mono text-text-muted tracking-widest mb-4">/ 404</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Case Study{" "}
            <span className="gradient-text">Not Found</span>
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
            This case study doesn&apos;t exist or has been removed.
          </p>
          <Link href="/case-studies" className="cyber-btn cyber-btn-primary">
            ← Back to Case Studies
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
