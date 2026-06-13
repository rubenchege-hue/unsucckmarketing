import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  tags: string[];
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), "src/content/blog");

function parseDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      publishedAt: data.publishedAt ?? "",
      author: data.author ?? "Unsucck Marketing",
      authorRole: data.authorRole ?? "Team",
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? "5 min read",
    };
  });

  return posts.sort((a, b) => parseDate(b.publishedAt).getTime() - parseDate(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    publishedAt: data.publishedAt ?? "",
    author: data.author ?? "Unsucck Marketing",
    authorRole: data.authorRole ?? "Team",
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? "5 min read",
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
