import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="pt-40 pb-20 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-xl bg-neon-cyan/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <span className="inline-block text-xs font-mono text-text-muted tracking-widest mb-4">/ 404</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Post{" "}
            <span className="gradient-text">Not Found</span>
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
            This blog post doesn&apos;t exist or has been removed.
          </p>
          <Link href="/blog" className="cyber-btn cyber-btn-primary">
            ← Back to Blog
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
