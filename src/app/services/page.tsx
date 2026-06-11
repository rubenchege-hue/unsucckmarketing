import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Unsucck Marketing | Marketing Audit Agency Nairobi",
  description:
    "Explore our 15 AI-powered marketing audit services: SEO audits, paid media audits, CRO audits, brand audits, competitive analysis, and more. Based in Nairobi.",
};

const servicesDetailed = [
  {
    title: "SEO Content Audit",
    subtitle: "Content strategy & technical SEO analysis",
    description:
      "A comprehensive audit of your content and SEO performance. We analyze technical SEO foundations, content quality, keyword strategy, and backlink profiles to create a roadmap to page-one rankings.",
    whatWeDo: [
      "Technical SEO crawl & analysis",
      "Content quality & relevance audit",
      "Keyword gap analysis & opportunity mapping",
      "On-page optimization assessment",
      "Backlink profile & authority review",
    ],
    idealFor: "Businesses who want to build sustainable organic growth and reduce dependency on paid ads.",
    price: "From KES 75,000",
  },
  {
    title: "Ad Creative & Copy Generation",
    subtitle: "High-converting ad creatives across all platforms",
    description:
      "We audit your existing ad creative performance and generate fresh, high-converting ad copy and visuals tailored for Meta, Google, LinkedIn, TikTok, and more.",
    whatWeDo: [
      "Current creative performance audit",
      "Audience-specific copy generation",
      "Visual creative recommendations",
      "A/B testing framework setup",
      "Platform-specific optimization",
    ],
    idealFor: "Businesses running paid ads who want to improve creative performance and ROAS.",
    price: "From KES 85,000",
  },
  {
    title: "Copywriting Analysis & Generation",
    subtitle: "Message optimization & conversion copy",
    description:
      "A deep analysis of your brand copy across all touchpoints — website, emails, ads, social — with optimized copy generation that drives action.",
    whatWeDo: [
      "Brand messaging audit across channels",
      "Tone & voice consistency check",
      "Conversion-focused copy rewrite",
      "CTA effectiveness analysis",
      "A/B copy testing framework",
    ],
    idealFor: "Businesses who want their copy to convert better across every customer touchpoint.",
    price: "From KES 65,000",
  },
  {
    title: "Marketing Audit Orchestrator",
    subtitle: "Full 360-degree marketing ecosystem audit",
    description:
      "Our flagship service. A comprehensive orchestrated audit of your entire marketing ecosystem — every channel, every system, every strategy. We leave no stone unturned.",
    whatWeDo: [
      "Multi-channel marketing audit",
      "Marketing technology stack review",
      "ROI & attribution analysis",
      "Competitive benchmarking",
      "Strategic roadmap & prioritization",
    ],
    idealFor: "Businesses serious about scaling who want a complete picture of their marketing health.",
    price: "From KES 150,000",
  },
  {
    title: "Brand Voice Analysis & Guidelines",
    subtitle: "Voice, tone & messaging framework development",
    description:
      "We audit how your brand currently sounds, analyze how it resonates with your audience, and develop comprehensive voice guidelines that ensure consistency and impact.",
    whatWeDo: [
      "Current brand voice audit",
      "Audience perception analysis",
      "Competitor voice benchmarking",
      "Brand voice guidelines document",
      "Tone matrix development",
    ],
    idealFor: "Businesses scaling their content output who need consistent brand messaging.",
    price: "From KES 80,000",
  },
  {
    title: "Social Media Content Calendar",
    subtitle: "Data-driven social content strategy",
    description:
      "We analyze your social media performance, identify content gaps, and build a strategic content calendar that drives engagement, followers, and conversions.",
    whatWeDo: [
      "Platform performance analysis",
      "Content gap & opportunity audit",
      "Posting frequency & timing optimization",
      "Engagement strategy development",
      "Monthly content calendar creation",
    ],
    idealFor: "Businesses wanting a structured, data-backed social media content strategy.",
    price: "From KES 60,000",
  },
  {
    title: "Sales Funnel Analysis & Optimization",
    subtitle: "End-to-end funnel performance audit",
    description:
      "We map your entire sales funnel, identify exactly where leads are dropping off, and deliver optimization strategies to plug every leak.",
    whatWeDo: [
      "Full funnel mapping & analysis",
      "Stage-by-stage conversion audit",
      "Drop-off point identification",
      "Automation & workflow optimization",
      "Funnel performance dashboard setup",
    ],
    idealFor: "Businesses with a working funnel who want to improve conversion at every stage.",
    price: "From KES 95,000",
  },
  {
    title: "Launch Playbook Generator",
    subtitle: "Go-to-market launch strategy & playbook",
    description:
      "We audit your go-to-market approach and build a comprehensive launch playbook — from pre-launch buzz building to post-launch optimization — ensuring your launch hits targets.",
    whatWeDo: [
      "GTM strategy & positioning audit",
      "Launch timeline & milestone planning",
      "Channel mix & budget allocation",
      "Pre-launch buzz strategy",
      "Post-launch optimization framework",
    ],
    idealFor: "Businesses launching new products, services, or entering new markets.",
    price: "From KES 120,000",
  },
  {
    title: "Marketing Report Generator",
    subtitle: "Automated KPI dashboards & reporting",
    description:
      "We audit your current reporting setup and create automated, insightful marketing reports that give you clear visibility into what's working, what's not, and what to do next.",
    whatWeDo: [
      "Current reporting structure audit",
      "KPI & metric framework development",
      "Automated dashboard setup",
      "Report format design (Markdown, etc.)",
      "Insights & recommendations integration",
    ],
    idealFor: "Businesses who want clear, automated marketing reporting without manual spreadsheets.",
    price: "From KES 55,000",
  },
  {
    title: "Email Sequence Generation",
    subtitle: "High-converting email automation flows",
    description:
      "We audit your email marketing performance and craft optimized email sequences — from welcome flows to re-engagement campaigns — that drive opens, clicks, and revenue.",
    whatWeDo: [
      "Current email flow performance audit",
      "Welcome & nurture sequence design",
      "Abandoned cart & re-engagement flows",
      "Segmentation & personalization strategy",
      "Deliverability & sending reputation check",
    ],
    idealFor: "Businesses with an email list who want to automate and optimize their email revenue.",
    price: "From KES 70,000",
  },
  {
    title: "Marketing Content Analysis",
    subtitle: "Full content ecosystem performance audit",
    description:
      "We analyze every piece of marketing content you have — blogs, videos, social posts, emails, lead magnets — for performance, relevance, and strategic alignment.",
    whatWeDo: [
      "Content library audit & inventory",
      "Performance analysis per content type",
      "Content gap identification",
      "Audience alignment assessment",
      "Content strategy & roadmap development",
    ],
    idealFor: "Businesses with existing content who want to know what's working and what to create next.",
    price: "From KES 65,000",
  },
  {
    title: "Landing Page CRO Analysis",
    subtitle: "Conversion rate optimization audit",
    description:
      "We audit your landing pages for every conversion factor — design, copy, UX, load speed, trust signals, and user behavior — delivering a prioritized optimization roadmap.",
    whatWeDo: [
      "Landing page design & UX audit",
      "Copy & messaging effectiveness analysis",
      "Page speed & mobile performance check",
      "User behavior analysis (scroll maps, heatmaps)",
      "CRO testing roadmap & recommendations",
    ],
    idealFor: "Businesses with traffic but poor conversion rates on their landing pages.",
    price: "From KES 75,000",
  },
  {
    title: "Client Proposal Generator",
    subtitle: "Win more clients with optimized proposals",
    description:
      "We audit your current sales proposals and craft compelling, conversion-optimized proposal templates that help you win more marketing clients.",
    whatWeDo: [
      "Current proposal audit & gap analysis",
      "Value proposition & positioning refinement",
      "Proposal structure & flow optimization",
      "Pricing presentation strategy",
      "Customizable proposal templates",
    ],
    idealFor: "Agencies and freelancers who want to improve their proposal win rate.",
    price: "From KES 50,000",
  },
  {
    title: "Marketing Conversion Analysis",
    subtitle: "End-to-end conversion ecosystem audit",
    description:
      "We analyze your entire conversion ecosystem — every step from first touch to final sale — identifying every friction point and opportunity to increase revenue.",
    whatWeDo: [
      "Full conversion journey mapping",
      "Friction point & drop-off analysis",
      "Attribution & multi-touch analysis",
      "Conversion optimization roadmap",
      "Revenue impact forecasting",
    ],
    idealFor: "Businesses focused on increasing revenue from their existing traffic and leads.",
    price: "From KES 90,000",
  },
  {
    title: "Competitive Intelligence Analysis",
    subtitle: "Know your competition. Win your market.",
    description:
      "We audit your competitive landscape in depth — analyzing competitor strategies, positioning, content, ads, and performance — to uncover gaps and opportunities you can exploit.",
    whatWeDo: [
      "Competitor landscape mapping",
      "Strategy & positioning analysis",
      "Content & SEO competitive audit",
      "Ad intelligence & spend analysis",
      "Opportunity gap identification",
    ],
    idealFor: "Businesses who want a strategic edge by understanding exactly what their competitors are doing.",
    price: "From KES 85,000",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-deep-bg">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono text-neon-cyan tracking-widest mb-4">
              / SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">15</span> Audit Services
            </h1>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg">
              AI-powered marketing audits across 15 capabilities. Each is custom-tailored to your business. No templates. No fluff.
            </p>
          </div>

          <div className="space-y-8">
            {servicesDetailed.map((service, index) => (
              <div
                key={service.title}
                className="cyber-card animated-border"
              >
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-xs font-mono text-neon-purple mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold mb-1">{service.title}</h2>
                        <p className="text-sm text-text-muted font-mono mb-4">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-xs text-text-muted mb-4 italic">
                      <span className="text-neon-cyan font-medium not-italic">Ideal for:</span>{" "}
                      {service.idealFor}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-mono text-neon-purple hover:text-neon-cyan transition-colors"
                    >
                      Book This Service →
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <div className="rounded-lg bg-deep-bg/50 p-5 mb-4">
                      <h4 className="text-xs font-mono text-neon-cyan tracking-wider mb-3">
                        WHAT WE DO
                      </h4>
                      <ul className="space-y-2">
                        {service.whatWeDo.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-text-secondary"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-neon-purple mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-neon-cyan">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
