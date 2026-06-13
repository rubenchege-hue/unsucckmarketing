import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { ArticleSchema } from "@/lib/json-ld";
import CaseStudyContent from "@/components/CaseStudyContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) return { title: "Case Study Not Found — Unsucck Marketing" };

  return {
    title: `${cs.client} — Case Study | Unsucck Marketing`,
    description: cs.summary,
    openGraph: {
      title: `${cs.client} — Marketing Audit Case Study`,
      description: cs.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) notFound();

  const jsonLd = ArticleSchema({
    headline: `${cs.client} — Marketing Audit Case Study`,
    description: cs.summary,
    datePublished: cs.publishedAt,
    author: "Ruben",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <CaseStudyContent cs={cs} />
    </>
  );
}
