"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope, Clock, DollarSign, Award } from "lucide-react";
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
import { DynamicCTA } from "@/components/DynamicHeader";

export default function Home() {
  return (
    <>
      <FaqSchema />
      <OrganizationSchema />
      <PhysicianSchema />
      <ServiceSchema />
      <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Direct Care Indy</h1>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/" className="hover:text-secondary transition-colors text-link">
                Home
              </Link>
              <Link href="/providers" className="hover:text-secondary transition-colors text-link">
                Our Team
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors text-link">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors text-link">
                Services
              </Link>
              <Link href="/seniors" className="hover:text-secondary transition-colors text-link">
                Seniors (Medicare)
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors text-link">
                Partnerships
              </Link>
              <Link href="/employers" className="hover:text-secondary transition-colors text-link">
                Employers
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors text-link">
                FAQ
              </Link>
              <Link href="/blog/indiana-medigap-birthday-rule-2026" className="hover:text-secondary transition-colors text-link">
                Blog
              </Link>
              <DynamicCTA />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Transparent Healthcare for Indianapolis
            </h2>
            <p className="text-2xl mb-4">
              Experience the 90/10 model—90% of your care covered for a flat monthly fee.
            </p>
            <p className="text-xl mb-8">
              No insurance hassles. No surprise bills. Just quality care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                View Pricing
              </Link>
              <a
                href="tel:+13179566288"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Doctor Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Expert Care from Dr. James D. Pike
              </h3>
              <div className="flex items-center justify-center gap-2 text-secondary font-semibold mb-2">
                <Award className="w-5 h-5" />
                <span>D.O., FCCP, FACP</span>
              </div>
              <p className="text-lg text-gray-300">
                Board Certified in Internal Medicine & Pulmonary Medicine
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-secondary backdrop-blur-sm">
              <p className="text-lg text-gray-200 mb-4">
                Dr. Pike is a board-certified physician with specialized training in <strong className="text-primary">Internal Medicine</strong> and <strong className="text-primary">Pulmonary Medicine</strong>. His extensive training and experience allow him to provide comprehensive primary care with the expertise to handle complex medical conditions that typically require specialist referrals.
              </p>
              <div className="bg-orange-900/30 rounded-lg p-6 mb-6 border-l-4 border-orange-500">
                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Specialized Care for Seniors (65+)
                </h4>
                <p className="text-base text-gray-200 mb-3">
                  Dr. Pike&apos;s <strong className="text-primary">Pulmonary Medicine expertise</strong> is particularly valuable for the 65+ demographic, who often face complex respiratory conditions, COPD, chronic lung disease, and age-related pulmonary challenges. As a Fellow of the American College of Chest Physicians (FCCP), he brings specialist-level knowledge directly to your primary care—eliminating the need for separate pulmonary referrals and reducing care fragmentation.
                </p>
                <p className="text-base text-gray-200">
                  This <strong className="text-primary">complex care capability</strong>—combined with the convenience and affordability of Direct Primary Care—makes our $109/month senior membership a market-leading value. You get pulmonary specialist expertise without the specialist copays, referral delays, or fragmented care coordination that traditional insurance models require.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-primary">FCCP:</strong> Fellow of
                    the American College of Chest Physicians
                    <p className="text-sm text-gray-300 mt-1">Pulmonary & Critical Care Expertise • Ideal for 65+ Complex Respiratory Needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-primary">FACP:</strong> Fellow of
                    the American College of Physicians
                    <p className="text-sm text-gray-300 mt-1">Internal Medicine Excellence • Comprehensive Primary Care</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-primary/20 rounded-lg p-4 border border-primary/30">
                <p className="text-lg text-gray-200 italic text-center font-medium">
                  &quot;Pulmonary specialist expertise with Primary Care convenience—especially critical for seniors managing complex respiratory conditions.&quot;
                </p>
                <p className="text-sm text-gray-400 text-center mt-2">
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
              <h3 className="text-3xl font-bold text-primary mb-4">
                Understanding the 90/10 Healthcare Model
              </h3>
              <p className="text-xl text-gray-200 mb-4">
                Your membership covers 90% of your healthcare needs. For the 10% (catastrophic events), you still need insurance.
              </p>
              <p className="text-lg text-gray-300 italic">
                Think of it like auto insurance vs. your mechanic: Insurance is for when you total the car (the 10%); we&apos;re the mechanic for your oil changes (the 90%).
              </p>
            </div>
            <NinetyTenSwitcher />
          </div>
        </section>
      </ScrollTransition>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">
            The 90/10 Model: Healthcare Simplified
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">
                Same-Day Access
              </h4>
              <p className="text-gray-200">
                Get appointments when you need them. No more waiting weeks to see your doctor.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">
                Transparent Pricing
              </h4>
              <p className="text-gray-200">
                One flat monthly fee covers 90% of your healthcare needs. No surprise bills.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">
                Direct Communication
              </h4>
              <p className="text-gray-200">
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <PortalPreview />
          </div>
        </div>
      </section>

      {/* Savings Personas Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">
              Real People, Real Savings
            </h3>
            <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto">
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
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Experience Healthcare the Way It Should Be?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of Indianapolis families who have ditched the insurance hassles for simple, affordable direct care.
          </p>
          <Link
            href="/pricing"
                className="bg-secondary text-white hover:bg-opacity-90 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
          >
            See Our Pricing
          </Link>
        </div>
      </section>

      {/* Footer with Local SEO */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/seniors" className="text-gray-300 hover:text-white transition-colors">
                    Seniors (Medicare)
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/indiana-medigap-birthday-rule-2026" className="text-gray-300 hover:text-white transition-colors">
                    2026 Indiana Birthday Rule Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
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
