"use client";

import Link from "next/link";
import OnboardingWizard from "@/components/OnboardingWizard";
import { SharedFooter } from "@/components/SharedFooter";

export default function Join() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Direct Care Indy</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your journey to transparent, accessible healthcare starts here
          </p>
        </div>
      </section>

      {/* Onboarding Wizard */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <OnboardingWizard />
        </div>
      </section>

      {/* Footer */}
      <SharedFooter />
    </div>
  );
}
