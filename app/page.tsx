"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, DollarSign, Award } from "lucide-react";
import { NinetyTenSwitcher } from "@/components/NinetyTenSwitcher";
import WholesalePrices from "@/components/WholesalePrices";
import PortalPreview from "@/components/PortalPreview";
import { SavingsPersonas } from "@/components/SavingsPersonas";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CatastrophicPartners } from "@/components/CatastrophicPartners";
import { TheWraparoundGuide } from "@/components/TheWraparoundGuide";
import { FaqSchema } from "@/components/FaqSchema";
import { OrganizationSchema, PhysicianSchema, ServiceSchema } from "@/components/StructuredData";
import { StickySavingsBar } from "@/components/StickySavingsBar";
import { ScrollTransition } from "@/components/ScrollTransition";

export default function Home() {
  return (
    <>
      <FaqSchema />
      <OrganizationSchema />
      <PhysicianSchema />
      <ServiceSchema />
      <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 text-foreground text-glow">
              Transparent Healthcare for Indianapolis
            </h2>
            <p className="text-2xl mb-4 text-foreground">
              Experience the 90/10 model—90% of your care covered for a flat monthly fee.
            </p>
            <p className="text-xl mb-8 text-muted-foreground">
              No insurance hassles. No surprise bills. Just quality care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all interactive-element"
              >
                View Pricing
              </Link>
              <a
                href="tel:+13179566288"
                className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 interactive-element"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Doctor Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Expert Care from Dr. James D. Pike
              </h3>
              <div className="flex items-center justify-center gap-2 text-secondary font-semibold mb-2">
                <Award className="w-5 h-5" />
                <span>D.O., FCCP, FACP</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Board Certified in Internal Medicine & Pulmonary Medicine
              </p>
            </div>
            <div className="section-card">
              <p className="text-lg text-card-foreground mb-4">
                Dr. Pike is a board-certified physician with specialized training in <strong className="text-foreground">Internal Medicine</strong> and <strong className="text-foreground">Pulmonary Medicine</strong>. His extensive training and experience allow him to provide comprehensive primary care with the expertise to handle complex medical conditions that typically require specialist referrals.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-6 border-l-4 border-secondary border">
                <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Specialized Care for Seniors (65+)
                </h4>
                <p className="text-base text-card-foreground mb-3">
                  Dr. Pike&apos;s <strong className="text-foreground">Pulmonary Medicine expertise</strong> is particularly valuable for the 65+ demographic, who often face complex respiratory conditions, COPD, chronic lung disease, and age-related pulmonary challenges. As a Fellow of the American College of Chest Physicians (FCCP), he brings specialist-level knowledge directly to your primary care—eliminating the need for separate pulmonary referrals and reducing care fragmentation.
                </p>
                <p className="text-base text-card-foreground">
                  This <strong className="text-foreground">complex care capability</strong>—combined with the convenience and affordability of Direct Primary Care—makes our $109/month senior membership a market-leading value. You get pulmonary specialist expertise without the specialist copays, referral delays, or fragmented care coordination that traditional insurance models require.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-foreground">FCCP:</strong> Fellow of
                    the American College of Chest Physicians
                    <p className="text-sm text-muted-foreground mt-1">Pulmonary & Critical Care Expertise • Ideal for 65+ Complex Respiratory Needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-foreground">FACP:</strong> Fellow of
                    the American College of Physicians
                    <p className="text-sm text-muted-foreground mt-1">Internal Medicine Excellence • Comprehensive Primary Care</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-muted rounded-lg p-4 border border-border">
                <p className="text-lg text-card-foreground italic text-center font-medium">
                  &quot;Pulmonary specialist expertise with Primary Care convenience—especially critical for seniors managing complex respiratory conditions.&quot;
                </p>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Located at 7911 N. Michigan Rd., Indianapolis, IN 46268
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90/10 Model Switcher */}
      <ScrollTransition id="ninety-ten-model">
        <section className="py-16 bg-background scroll-smooth">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto mb-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Understanding the 90/10 Healthcare Model
              </h3>
              <p className="text-xl text-foreground mb-4">
                Your membership covers 90% of your healthcare needs. For the 10% (catastrophic events), you still need insurance.
              </p>
              <p className="text-lg text-muted-foreground italic">
                Think of it like auto insurance vs. your mechanic: Insurance is for when you total the car (the 10%); we&apos;re the mechanic for your oil changes (the 90%).
              </p>
            </div>
            <NinetyTenSwitcher />
          </div>
        </section>
      </ScrollTransition>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            The 90/10 Model: Healthcare Simplified
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="section-card">
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Same-Day Access
              </h4>
              <p className="text-card-foreground">
                Get appointments when you need them. No more waiting weeks to see your doctor.
              </p>
            </div>
            <div className="section-card">
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Transparent Pricing
              </h4>
              <p className="text-card-foreground">
                One flat monthly fee covers 90% of your healthcare needs. No surprise bills.
              </p>
            </div>
            <div className="section-card">
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Direct Communication
              </h4>
              <p className="text-card-foreground">
                Text, call, or email Dr. Pike directly. Your doctor is always accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Prices Section */}
      <ScrollTransition id="wholesale-prices">
        <section className="py-16 bg-background scroll-smooth">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <WholesalePrices />
            </div>
          </div>
        </section>
      </ScrollTransition>

      {/* Patient Portal Preview */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <PortalPreview />
          </div>
        </div>
      </section>

      {/* Savings Personas Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
              Real People, Real Savings
            </h3>
            <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
              See how Direct Care Indy transforms healthcare for Indianapolis families and small businesses
            </p>
            <SavingsPersonas />
          </div>
        </div>
      </section>

      {/* The Wraparound Guide */}
      <TheWraparoundGuide />

      {/* Catastrophic Partners Directory */}
      <CatastrophicPartners />

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Experience Healthcare the Way It Should Be?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of Indianapolis families who have ditched the insurance hassles for simple, affordable direct care.
          </p>
          <Link
            href="/pricing"
            className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block interactive-element"
          >
            See Our Pricing
          </Link>
        </div>
      </section>

      {/* Footer with Local SEO */}
      <footer className="bg-card text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-muted-foreground">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/seniors" className="text-muted-foreground hover:text-foreground transition-colors">
                    Seniors (Medicare)
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/indiana-medigap-birthday-rule-2026" className="text-muted-foreground hover:text-foreground transition-colors">
                    2026 Indiana Birthday Rule Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-foreground transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-foreground transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-1">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Savings Bar */}
      <StickySavingsBar />
    </div>
    </>
  );
}
