"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogFilter({
  posts,
  allTags,
}: {
  posts: BlogPostMeta[];
  allTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeTag
        ? posts.filter((p) => p.tags.includes(activeTag))
        : posts,
    [activeTag, posts],
  );

  return (
    <>
      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300",
            activeTag === null
              ? "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan"
              : "border-border text-text-muted hover:border-text-muted/30 hover:text-text-secondary",
          )}
        >
          All Posts
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300",
              activeTag === tag
                ? "bg-neon-purple/10 border-neon-purple/30 text-neon-purple"
                : "border-border text-text-muted hover:border-text-muted/30 hover:text-text-secondary",
            )}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((post) => (
          <motion.div key={post.slug} variants={cardVariants}>
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <div className="cyber-card animated-border h-full flex flex-col">
                {/* Gradient top bar */}
                <div className="h-1 rounded-t-lg bg-gradient-to-r from-neon-cyan to-neon-purple mb-5 -mx-6 -mt-6" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-neon-purple/70 bg-neon-purple/5 rounded-full border border-neon-purple/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors duration-300 leading-snug">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-text-muted font-mono pt-4 border-t border-border">
                  <span>{post.publishedAt}</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-text-muted font-mono text-sm">
            No posts found for this category.
          </p>
          <button
            onClick={() => setActiveTag(null)}
            className="mt-4 text-neon-cyan hover:text-neon-cyan/80 text-sm font-mono underline underline-offset-4"
          >
            Clear filter
          </button>
        </motion.div>
      )}
    </>
  );
}
