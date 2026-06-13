import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mdxComponents from "@/components/blog/MDXComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post Not Found — Unsucck Marketing" };

  return {
    title: `${post.title} — Unsucck Marketing Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <article className="relative pt-32 pb-16 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-neon-purple to-neon-cyan opacity-[0.03] rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-neon-cyan transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-neon-purple/80 bg-neon-purple/5 rounded-full border border-neon-purple/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {post.description}
            </p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted font-mono">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-deep-bg font-bold text-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-text-primary text-xs font-semibold">{post.author}</p>
                  <p className="text-[10px] text-text-muted">{post.authorRole}</p>
                </div>
              </div>
              <span className="w-1 h-1 rounded-full bg-neon-purple/40" />
              <span>{post.publishedAt}</span>
              <span className="w-1 h-1 rounded-full bg-neon-purple/40" />
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Gradient divider */}
          <div className="section-divider mb-10" />

          {/* MDX Content */}
          <div className="prose-custom">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Footer divider */}
          <div className="section-divider my-10" />

          {/* Author Bio */}
          <div className="cyber-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-deep-bg font-bold shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-text-primary font-semibold mb-1">
                {post.author} — {post.authorRole}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ruben has spent 12+ years in digital marketing across Nairobi, Johannesburg, and London. 
                He&apos;s audited marketing funnels for 100+ businesses worldwide.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="cyber-card animated-border p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Want a Custom Audit of{" "}
                <span className="gradient-text">Your Marketing?</span>
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                We&apos;ll review your current marketing, identify quick wins, and 
                show you exactly what an audit would uncover.
              </p>
              <Link href="/contact" className="cyber-btn cyber-btn-primary">
                Book Your Free Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
