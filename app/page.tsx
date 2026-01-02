"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { NinetyTenSwitcher } from "@/components/NinetyTenSwitcher";
import PortalPreview from "@/components/PortalPreview";
import { SavingsPersonas } from "@/components/SavingsPersonas";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CatastrophicPartners } from "@/components/CatastrophicPartners";
import { TheWraparoundGuide } from "@/components/TheWraparoundGuide";
import { FaqSchema } from "@/components/FaqSchema";
import { OrganizationSchema, PhysicianSchema, ServiceSchema } from "@/components/StructuredData";
import { ScrollTransition } from "@/components/ScrollTransition";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding text-center">
        <div className="content-container-narrow">
          <h1 className="heading-1 mb-6">Healthcare Without the Hassle</h1>
          <p className="body-large mb-8">
            90% of your healthcare covered for one flat monthly fee. No copays, no deductibles, no surprise bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform interactive-element"
            >
              View Plans & Pricing
            </Link>
            <Link
              href="#how-it-works"
              className="bg-card text-card-foreground border border-border px-8 py-4 rounded-full font-semibold text-lg hover:bg-card/90 transition-colors interactive-element"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Why Choose Direct Primary Care?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">No Surprise Bills</h3>
                <p className="text-muted-foreground text-sm">
                  One flat fee covers all primary care. No copays, deductibles, or hidden fees.
                </p>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Same-Day Access</h3>
                <p className="text-muted-foreground text-sm">
                  Get appointments when you need them. No waiting weeks to see your doctor.
                </p>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Direct Communication</h3>
                <p className="text-muted-foreground text-sm">
                  Text, call, or email your provider directly. Your doctor is always accessible.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image src="/images/clinical/round-table.webp" alt="Round table care model" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image src="/images/clinical/medical-laboratory.webp" alt="Wholesale lab and pharmacy savings" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                <Image src="/images/marketing/senior-wellness.webp" alt="Senior wellness and prevention" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90/10 Model Switcher */}
      <ScrollTransition id="how-it-works">
        <section className="py-16 bg-background">
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
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <NinetyTenSwitcher />
                </div>
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-card">
                  <Image
                    src="/images/clinical/ninety-ten-model.svg"
                    alt="The 90/10 model visualized"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTransition>

      {/* Savings Calculator */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-4">See Your Potential Savings</h2>
            <p className="body-large text-muted-foreground mb-8">
              Calculate how much you could save with Direct Primary Care.
            </p>
            <SavingsPersonas />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">What Members Are Saying</h2>
            <p className="body-large text-muted-foreground">
              Real stories from real Indianapolis families who&apos;ve switched to Direct Primary Care.
            </p>
          </div>
          <Testimonials limit={3} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Experience Healthcare the Way It Should Be?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of Indianapolis families who have ditched the insurance hassles for simple, affordable direct care.
          </p>
          <Link
            href="/membership"
            className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block interactive-element"
          >
            View Membership Plans
          </Link>
        </div>
      </section>

      
    </div>
  );
}
