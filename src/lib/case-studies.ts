export interface CaseStudyResult {
  label: string;
  value: string;
  suffix?: string;
}

export interface CaseStudyMilestone {
  period: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  location: string;
  industry: string;
  summary: string;
  tags: string[];
  results: CaseStudyResult[];
  challenge: string;
  approach: string;
  approachSteps: string[];
  solution: string;
  milestones: CaseStudyMilestone[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  servicesUsed: string[];
  keyTakeaways: string[];
  gradient: string;
  publishedAt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-apparel-brand",
    client: "E-Commerce Apparel Brand",
    location: "Nairobi, Kenya",
    industry: "E-Commerce / Fashion",
    summary:
      "A growing fashion brand was burning cash on Facebook Ads with no clear strategy. We audited their entire funnel — from creative to checkout — and rebuilt their targeting, messaging, and landing page experience.",
    tags: ["Paid Media", "CRO", "Email"],
    results: [
      { label: "Revenue Increase", value: "210", suffix: "%" },
      { label: "CAC Reduction", value: "45", suffix: "%" },
      { label: "Conversion Rate Boost", value: "3.2", suffix: "%" },
      { label: "ROAS Improvement", value: "3.8", suffix: "x" },
    ],
    challenge:
      "The brand was spending KES 1.2M monthly on Meta ads with inconsistent results. Their ad account had 47+ different ad sets running simultaneously with no clear structure, audience overlap was rampant, and their creative was stale — the same 3 product images had been running for 6 months. Their landing pages were slow (5.2s load time), had no clear CTA above the fold, and their checkout funnel had a 78% abandonment rate.",
    approach:
      "We took a full-funnel approach — systematically auditing every touchpoint from first impression to final purchase.",
    approachSteps: [
      "Audited ad account structure, audience targeting, and creative performance — identified $4,200/month in wasted spend",
      "Rebuilt audience strategy with layered targeting (cold → warm → retargeting) and excluded overlapping audiences",
      "Generated 12 new ad creatives with clear value propositions, social proof, and urgency-driven CTAs",
      "Redesigned landing pages for speed (sub-2s load time), mobile-first UX, and clear conversion paths",
      "Implemented email flows to capture and nurture abandoned cart traffic",
    ],
    solution:
      "We consolidated their ad sets from 47 down to 12 highly-targeted campaigns, refreshed their entire creative library, rebuilt their landing pages with CRO best practices, and set up a 5-email abandoned cart flow. The result was a complete turnaround in ad efficiency and revenue per visitor.",
    milestones: [
      { period: "Week 1", label: "Audit completed & strategy delivered" },
      { period: "Week 2", label: "New ad structure & creatives live" },
      { period: "Week 3", label: "Landing pages redesigned & deployed" },
      { period: "Week 6", label: "30% CAC reduction achieved" },
      { period: "Week 12", label: "210% revenue increase YoY" },
    ],
    testimonial: {
      quote:
        "Unsucck Marketing didn't just give us a report — they gave us a roadmap. Our conversion rate doubled within 60 days of implementing their recommendations.",
      name: "Grace Wanjiku",
      role: "CEO, Tanda Naturals",
    },
    servicesUsed: [
      "Ad Creative & Copy Generation",
      "Landing Page CRO Analysis",
      "Marketing Conversion Analysis",
      "Email Sequence Generation",
    ],
    keyTakeaways: [
      "Consolidating ad sets reduces audience overlap and improves delivery",
      "Landing page speed directly correlates with conversion rate — every 100ms matters",
      "Email flows can recover 10-15% of abandoned cart revenue",
      "Creative fatigue sets in after 3-4 weeks — plan your refresh cycle",
    ],
    gradient: "from-neon-cyan to-blue-400",
    publishedAt: "2026-05-20",
  },
  {
    slug: "saas-platform-b2b",
    client: "SaaS Platform (B2B)",
    location: "Nairobi, Kenya",
    industry: "SaaS / Technology",
    summary:
      "A B2B SaaS company had great product-market fit but terrible organic visibility. Our SEO and content audit uncovered 47 critical technical issues and massive content gaps that were hiding them from their ideal customers.",
    tags: ["SEO", "Content", "Analytics"],
    results: [
      { label: "Organic Traffic", value: "180", suffix: "%" },
      { label: "Lead Quality Score", value: "65", suffix: "%" },
      { label: "Demo Bookings", value: "3", suffix: "x" },
      { label: "Keywords Ranking #1", value: "23", suffix: "" },
    ],
    challenge:
      "The SaaS platform had strong product-market fit and high customer satisfaction but was invisible in search results. Their website had 47 critical SEO issues — including duplicate meta tags, missing alt text, broken internal links, no XML sitemap, and page speed scores below 40 on mobile. Their content was scattered across 3 different blogs with no cohesive strategy, and they weren't targeting any of the high-intent keywords their ideal customers were searching for.",
    approach:
      "We executed a two-track strategy — fixing technical SEO foundations while building a content engine designed to capture search demand at every funnel stage.",
    approachSteps: [
      "Ran comprehensive technical SEO audit using enterprise-grade crawling tools — identified and prioritized 47 critical issues",
      "Fixed site architecture: consolidated blogs, implemented proper redirects, built XML sitemap, improved Core Web Vitals",
      "Conducted keyword gap analysis — discovered 340+ high-intent keywords they weren't targeting",
      "Developed a 90-day content strategy targeting top-of-funnel (awareness) and middle-of-funnel (consideration) keywords",
      "Created 12 pillar content pieces optimized for featured snippets and People Also Ask",
    ],
    solution:
      "We fixed all critical technical SEO issues within 2 weeks, consolidated their content into one hub, and executed a 90-day content strategy targeting high-intent B2B keywords. Each piece was optimized for featured snippets and structured data.",
    milestones: [
      { period: "Week 1", label: "Technical SEO audit delivered" },
      { period: "Week 2", label: "All 47 critical issues resolved" },
      { period: "Week 4", label: "Content strategy & keyword map finalized" },
      { period: "Month 3", label: "First content pieces ranking on page 1" },
      { period: "Month 6", label: "23 keywords at #1, 3x demo bookings" },
    ],
    testimonial: {
      quote:
        "The SEO audit uncovered issues we didn't even know existed. Six months later we're ranking #1 for 23 new keywords. Worth every shilling.",
      name: "Kevin Mwangi",
      role: "CMO, BuildX Technologies",
    },
    servicesUsed: [
      "SEO Content Audit",
      "Marketing Content Analysis",
      "Marketing Report Generator",
    ],
    keyTakeaways: [
      "Technical SEO issues compound — one broken link can cascade through your entire site",
      "Keyword gap analysis often reveals 10x more opportunities than you expect",
      "Consolidating content authority under one domain is critical for ranking",
      "Featured snippet optimization can double your organic click-through rate",
    ],
    gradient: "from-neon-purple to-purple-400",
    publishedAt: "2026-04-10",
  },
  {
    slug: "hospitality-group",
    client: "Hospitality Group",
    location: "Mombasa, Kenya",
    industry: "Hospitality / Travel",
    summary:
      "A luxury hospitality group was relying on OTAs for 90% of bookings. We audited their direct booking strategy, email automation, and paid media — shifting the balance dramatically in their favor.",
    tags: ["Email", "Paid Media", "Brand"],
    results: [
      { label: "Direct Booking Rate", value: "135", suffix: "%" },
      { label: "Email Revenue", value: "80", suffix: "%" },
      { label: "ROAS", value: "4.2", suffix: "x" },
      { label: "OTA Commission Saved", value: "2.8M", suffix: " KES/mo" },
    ],
    challenge:
      "The luxury hotel group was paying over KES 2.8M per month in OTA commissions — eating 25% of their room revenue. Their direct booking engine was buried 3 clicks deep on their website, their email list of 18,000 subscribers was barely being used (2 campaigns/month), and their Google Ads were bidding against their own brand name. They had no loyalty program, no re-engagement strategy, and no way to track the guest journey across channels.",
    approach:
      "We designed a 'Direct Booking First' strategy — systematically reducing OTA dependency by making direct booking the obvious, rewarding choice for guests.",
    approachSteps: [
      "Redesigned website navigation to surface direct booking prominently above the fold",
      "Built a 'Best Rate Guarantee' landing page with value-add incentives (free upgrade, late checkout)",
      "Revamped email strategy: welcome sequences, pre-arrival guides, post-stay follow-ups, re-engagement campaigns",
      "Restructured Google Ads with negative keywords to stop bidding on branded terms, optimized for non-branded",
      "Implemented Meta retargeting campaigns for website visitors and lookalike audiences from past guests",
    ],
    solution:
      "We moved the direct booking engine front-and-center, built a compelling rate parity value proposition, restructured their entire email program into automated guest lifecycle flows, and optimized paid media to drive direct bookings instead of feeding OTA commissions.",
    milestones: [
      { period: "Week 2", label: "Website & booking flow redesigned" },
      { period: "Week 3", label: "Email automation flows live" },
      { period: "Week 4", label: "Paid media restructured" },
      { period: "Month 2", label: "Direct bookings up 60% from baseline" },
      { period: "Month 6", label: "OTA dependency reduced from 90% to 55%" },
    ],
    testimonial: {
      quote:
        "We were spending $15K/month on ads with barely a 1.5x ROAS. After their audit and restructuring, we hit 4.2x in the first quarter. Absolute game changer.",
      name: "Amina Hassan",
      role: "Founder, Nook & Brunch",
    },
    servicesUsed: [
      "Marketing Audit Orchestrator",
      "Email Sequence Generation",
      "Ad Creative & Copy Generation",
      "Sales Funnel Analysis & Optimization",
    ],
    keyTakeaways: [
      "OTA dependency erodes margins — every KES spent on direct booking has 3x higher ROI",
      "Email is the highest ROI channel for hospitality — automated flows drive consistent revenue",
      "Bidding on your own brand name is usually wasted spend",
      "The guest journey starts before arrival and continues after checkout — map both",
    ],
    gradient: "from-neon-magenta to-pink-400",
    publishedAt: "2026-03-05",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  caseStudies.forEach((cs) => cs.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getCaseStudiesByTag(tag: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.tags.includes(tag));
}
