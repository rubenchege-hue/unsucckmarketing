export function jsonLdScript(json: Record<string, unknown>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...json,
  });
}

export function OrganizationSchema() {
  return jsonLdScript({
    "@type": "Organization",
    name: "Unsucck Marketing",
    url: "https://unsucckmarketing.com",
    logo: "https://unsucckmarketing.com/logo.png",
    description:
      "Marketing audit agency based in Nairobi, Kenya. We find the leaks in your marketing funnel.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-726-241-286",
      contactType: "customer service",
      email: "ainworkflows@gmail.com",
    },
    sameAs: [],
  });
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  author,
  image,
}: {
  headline: string;
  description: string;
  datePublished: string;
  author?: string;
  image?: string;
}) {
  return jsonLdScript({
    "@type": "Article",
    headline,
    description,
    datePublished,
    author: {
      "@type": "Person",
      name: author ?? "Ruben",
    },
    publisher: {
      "@type": "Organization",
      name: "Unsucck Marketing",
    },
    ...(image ? { image } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://unsucckmarketing.com",
    },
  });
}

export function CollectionPageSchema({
  name,
  description,
  numberOfItems,
}: {
  name: string;
  description: string;
  numberOfItems: number;
}) {
  return jsonLdScript({
    "@type": "CollectionPage",
    name,
    description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems,
    },
  });
}
