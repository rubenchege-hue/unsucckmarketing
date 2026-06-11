import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadSection from "@/components/DownloadSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-bg grid-bg">
      <Header />
      <Hero />
      <div className="section-divider mx-auto max-w-4xl" />
      <ServicesSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <MethodologySection />
      <div className="section-divider mx-auto max-w-4xl" />
      <CaseStudiesSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <TestimonialsSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <DownloadSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <PricingSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
