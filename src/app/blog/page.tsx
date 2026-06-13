import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogFilter from "@/components/blog/BlogFilter";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata = {
  title: "Blog — Unsucck Marketing | Marketing Insights & Strategies",
  description:
    "Actionable marketing advice, audit insights, and growth strategies from Nairobi's premier marketing audit agency.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
              / BLOG
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg">
              Actionable marketing advice, audit insights, and growth strategies
              from the Unsucck Marketing team.
            </p>
          </div>

          {/* Client-side filter */}
          <BlogFilter posts={posts} allTags={allTags} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
