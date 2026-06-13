import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">
        {children}
      </table>
    </div>
  );
}

const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-text-primary" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-3" {...props}>
      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-neon-cyan to-neon-purple inline-block" />
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-semibold mt-8 mb-3 text-text-primary" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-text-secondary leading-relaxed mb-5" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:text-neon-purple transition-colors underline underline-offset-2"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-neon-cyan hover:text-neon-purple transition-colors underline underline-offset-2"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="space-y-2 mb-6 list-disc list-inside" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="space-y-2 mb-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-text-secondary text-sm leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-neon-cyan/40 pl-5 py-2 my-8 text-text-secondary italic bg-neon-cyan/5 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="px-2 py-0.5 text-sm font-mono text-neon-cyan bg-neon-cyan/5 rounded border border-neon-cyan/10"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <pre className="cyber-card overflow-x-auto mb-8 p-5 font-mono text-sm">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  pre: ({ children, ...props }) => (
    <pre className="cyber-card overflow-x-auto mb-8" {...props}>
      {children}
    </pre>
  ),
  table: Table,
  thead: ({ children, ...props }) => (
    <thead className="border-b border-border" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th className="text-left text-xs font-mono text-text-muted uppercase tracking-wider px-4 py-3" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="text-text-secondary text-sm px-4 py-3 border-b border-border/50" {...props}>
      {children}
    </td>
  ),
  hr: () => <div className="section-divider my-10" />,
  strong: ({ children, ...props }) => (
    <strong className="text-text-primary font-semibold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-text-primary" {...props}>
      {children}
    </em>
  ),
};

export default mdxComponents;
