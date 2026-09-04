import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AISection } from "@/components/landing/AISection";
import { AnalyticsPreview } from "@/components/landing/AnalyticsPreview";
import { StudentProblems } from "@/components/landing/StudentProblems";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary transition-colors duration-200">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <AISection />
        <AnalyticsPreview />
        <StudentProblems />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
