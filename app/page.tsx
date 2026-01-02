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
import { ValueProps } from "@/components/home/ValueProps";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { getCTAById } from "@/lib/content/dpc";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const primaryCTA = getCTAById('join-now');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding text-center">
        <div className="content-container-narrow">
          <h1 className="heading-1 mb-6">Healthcare Without the Hassle</h1>
          <p className="body-large mb-8">
            90% of your healthcare covered for one flat monthly fee
          </p>
          {primaryCTA && (
            <Link href={primaryCTA.href} className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform interactive-element">
              {primaryCTA.text}
            </Link>
          )}
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding">
        <div className="content-container">
          <h2 className="heading-2 text-center mb-12">Why Choose Direct Primary Care?</h2>
          <ValueProps />
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-muted">
        <div className="content-container-narrow">
          <WhoItsFor />
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="section-padding">
        <div className="content-container-narrow text-center">
          <h2 className="heading-2 mb-6">How It Works</h2>
          <p className="body-large max-w-2xl mx-auto mb-8">
            Our 90/10 model means we handle 90% of your healthcare needs directly, while insurance covers the remaining 10%.
          </p>
          <p className="body-small">
            This is not insurance. This is direct primary care.
          </p>
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

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Members Say</h2>
            <p className="body-large text-muted-foreground">
              Real stories from real Indianapolis families who&apos;ve switched to Direct Primary Care.
            </p>
          </div>
          <Testimonials limit={3} />
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
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-foreground transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
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
            <p className="mt-2"> {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Savings Bar */}
      <StickySavingsBar />
    </div>
  );
}
