"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";
import OnboardingWizard from "@/components/OnboardingWizard";
import { SharedFooter } from "@/components/SharedFooter";

export default function Join() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Direct Care Indy</h1>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/providers" className="hover:text-secondary transition-colors">
                Our Team
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors">
                Partnerships
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
              <Link href="/blog/indiana-medigap-birthday-rule-2026" className="hover:text-secondary transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
