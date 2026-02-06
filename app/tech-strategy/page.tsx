import type { Metadata } from "next";
import TechTabs from "@/components/tech-strategy/TechTabs";

export const metadata: Metadata = {
  title: "2026 Operational Strategy | Direct Care Indy",
  description:
    "Direct Care Indy's technology transformation strategy for 2026 — from legacy systems to an AI-powered DPC stack.",
  robots: { index: false, follow: false },
};

export default function TechStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            The 2026 Operational Strategy
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            How Direct Care Indy is replacing legacy tools with an AI-powered
            stack to save provider time, cut admin costs, and eliminate patient
            friction.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 max-w-5xl py-12 md:py-16">
        <TechTabs />
      </section>
    </div>
  );
}
