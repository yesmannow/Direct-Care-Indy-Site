"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, HeartPulse, Play, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { PricingCalculator } from "@/components/PricingCalculator";
import { NinetyTenSwitcher } from "@/components/NinetyTenSwitcher";
import PortalPreview from "@/components/PortalPreview";
import { SavingsPersonas } from "@/components/SavingsPersonas";
import { ScrollTransition } from "@/components/ScrollTransition";
import { Testimonials } from "@/components/Testimonials";

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinical/pulmonary-clinic.webp"
            alt="Direct Care Indy exam room"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        </div>
        <div className="content-container relative section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-card px-4 py-2 rounded-full border border-border shadow-sm w-fit">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-foreground">Hint-powered enrollment in one click</span>
              </div>
              <h1 className="heading-1 text-left text-gray-900">
                Specialist-led primary care for Indy without the insurance detour.
              </h1>
              <p className="body-large text-gray-700 max-w-2xl">
                Direct Care Indy bridges interest to enrollment in minutes. Transparent pricing, authentic clinical photos,
                and a secure Hint Health flow that makes joining as easy as texting your provider.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/join"
                  className="bg-secondary text-secondary-foreground px-7 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Join Now
                </Link>
                <Link
                  href="#pricing-calculator"
                  className="bg-card text-card-foreground border border-border px-7 py-4 rounded-full font-semibold text-lg hover:bg-card/90 transition-colors"
                >
                  See My Exact Price
                </Link>
                <a
                  href={PATIENT_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 text-foreground hover:text-secondary"
                >
                  Patient Login
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2 bg-card/80 border border-border px-3 py-2 rounded-full">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  <span>Board-certified Pulmonary & Internal Medicine</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-card/80 border border-border px-3 py-2 rounded-full">
                  <Stethoscope className="h-4 w-4 text-secondary" />
                  <span>Same-week onboarding. Text-first care.</span>
                </div>
              </div>
            </div>
            <div className="relative space-y-4">
              {/* Calm, welcoming features grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-border/60 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-xl">
                      <HeartPulse className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <p className="font-semibold text-foreground mb-2">Same-Week Onboarding</p>
                  <p className="text-sm text-muted-foreground">
                    Join today, see your provider this week
                  </p>
                </div>

                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-border/60 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-xl">
                      <CheckCircle2 className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <p className="font-semibold text-foreground mb-2">No Insurance Needed</p>
                  <p className="text-sm text-muted-foreground">
                    Direct pricing, zero claim forms
                  </p>
                </div>

                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-border/60 hover:shadow-xl transition-shadow">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-3">
                    <Image
                      src="/images/clinical/doctor-consultation.webp"
                      alt="Calming exam room"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                  <p className="font-semibold text-foreground mb-1">Designed for Comfort</p>
                  <p className="text-sm text-muted-foreground">
                    Warm lighting, calm environment
                  </p>
                </div>

                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-border/60 hover:shadow-xl transition-shadow">
                  <div className="relative h-32 overflow-hidden rounded-xl mb-3">
                    <Image
                      src="/images/clinical/pulmonary-clinic.webp"
                      alt="Modern clinic space"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                  <p className="font-semibold text-foreground mb-1">Specialist-Led Care</p>
                  <p className="text-sm text-muted-foreground">
                    Board-certified oversight on every visit
                  </p>
                </div>
              </div>

              {/* Subtle team mention */}
              <div className="bg-teal-50/50 dark:bg-teal-950/30 p-4 rounded-xl border border-teal-200/50 dark:border-teal-800/50">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Led by Dr. James Pike, D.O., FCCP, FACP</span> — Board-certified in Pulmonary & Internal Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <PricingCalculator />
        </div>
      </section>

      {/* Credentials Ribbon */}
      <section className="section-padding">
        <div className="content-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="heading-2">Verified authority, transparent credentials.</h2>
            <p className="text-sm text-muted-foreground">
              Board certifications and licenses linked for easy verification.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="section-card">
              <p className="text-xs font-semibold text-secondary uppercase mb-2">Board Certification</p>
              <p className="font-bold text-lg text-foreground">Pulmonary Medicine</p>
              <p className="text-sm text-muted-foreground mb-3">American Board of Internal Medicine</p>
              <a
                href="https://www.abim.org/verify-physician"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-secondary underline underline-offset-4"
              >
                Verify certification
              </a>
            </div>
            <div className="section-card">
              <p className="text-xs font-semibold text-secondary uppercase mb-2">Board Certification</p>
              <p className="font-bold text-lg text-foreground">Internal Medicine</p>
              <p className="text-sm text-muted-foreground mb-3">Specialist oversight on every panel.</p>
              <a
                href="https://www.abim.org/verify-physician"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-secondary underline underline-offset-4"
              >
                Verify certification
              </a>
            </div>
            <div className="section-card">
              <p className="text-xs font-semibold text-secondary uppercase mb-2">Medical License</p>
              <p className="font-bold text-lg text-foreground">Indiana Medical License</p>
              <p className="text-sm text-muted-foreground mb-3">Active and in good standing.</p>
              <a
                href="https://www.in.gov/pla/license/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-secondary underline underline-offset-4"
              >
                Verify with PLA
              </a>
            </div>
            <div className="section-card">
              <p className="text-xs font-semibold text-secondary uppercase mb-2">NPI Registry</p>
              <p className="font-bold text-lg text-foreground">James D. Pike, D.O.</p>
              <p className="text-sm text-muted-foreground mb-3">NPI profile available for patient review.</p>
              <a
                href="https://npiregistry.cms.hhs.gov/registry/search-results-table?name=james%20pike%20do"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-secondary underline underline-offset-4"
              >
                View NPI search
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card">
        <div className="content-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase mb-2">Case studies</p>
              <h2 className="heading-2">HIPAA-safe stories from the exam room.</h2>
              <p className="text-muted-foreground max-w-2xl">
                Detailed scenarios from real patients (identities altered) showing how DPC solves high-friction problems.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary font-semibold underline underline-offset-4"
            >
              Read more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="section-card p-0 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/marketing/trades-90-10.webp"
                  alt="Indianapolis trades professional receiving care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/85 text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Play className="h-3 w-3" />
                  90-second walkthrough
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Case: Asthma control for HVAC technician</h3>
                <p className="text-sm text-muted-foreground">
                  Problem: missed shifts from urgent care visits. DPC Plan: same-day neb treatments, wholesale inhalers, and text triage.
                </p>
                <p className="text-sm font-semibold text-secondary">Outcome: 3 ER visits avoided in 90 days; $620 saved.</p>
              </div>
            </article>
            <article className="section-card p-0 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/marketing/senior-wellness.webp"
                  alt="Senior preventive care case study"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/85 text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Play className="h-3 w-3" />
                  Clinical recap
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Case: Medicare senior with diabetes</h3>
                <p className="text-sm text-muted-foreground">
                  Problem: rising A1C despite specialist visits. DPC Plan: continuous glucose review, nutrition texting, labs at $8.
                </p>
                <p className="text-sm font-semibold text-secondary">Outcome: A1C down 1.2 points in 4 months; $480 saved on labs.</p>
              </div>
            </article>
            <article className="section-card p-0 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/marketing/employer-wellness.webp"
                  alt="Employer wellness collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/85 text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  <Play className="h-3 w-3" />
                  Team debrief
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Case: 18-person home services crew</h3>
                <p className="text-sm text-muted-foreground">
                  Problem: claims spikes and lost hours. DPC Plan: onsite flu clinic, telehealth injury triage, capped memberships.
                </p>
                <p className="text-sm font-semibold text-secondary">Outcome: 28% fewer sick days and predictable $69/employee pricing.</p>
              </div>
            </article>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            All case studies are HIPAA-safe composites with clinical details preserved and identities modified.
          </p>
        </div>
      </section>

      {/* 90/10 Model */}
      <ScrollTransition id="how-it-works">
        <section className="py-16 bg-background">
          <div className="content-container">
            <div className="max-w-5xl mx-auto mb-12 text-center">
              <h3 className="heading-2 mb-4">Understand the 90/10 model in 60 seconds.</h3>
              <p className="body-large text-muted-foreground">
                Membership covers the 90% of care you actually use. Catastrophic insurance handles the rare 10%.
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div className="section-card">
                <NinetyTenSwitcher />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Unlimited sick visits, wholesale labs, and direct texting with your provider.</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Catastrophic layer stays simple: pair with an HDHP or wraparound of your choice.</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Patient portal and Hint enrollment live on their own page-no PDFs or phone tag.</span>
                </div>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-secondary font-semibold underline underline-offset-4"
                >
                  Explore the model
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollTransition>

      {/* Savings Personas */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="heading-2 mb-4">What you save, based on who you are.</h2>
            <p className="body-large text-muted-foreground">
              Whether you are a young professional or a Medicare couple, see how the numbers play out.
            </p>
          </div>
          <SavingsPersonas />
        </div>
      </section>

      {/* Portal Preview and Trust */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <PortalPreview />
            <div className="space-y-4">
              <h3 className="heading-3">Member portal you will actually use.</h3>
              <p className="body-large text-muted-foreground">
                Secure messaging, lab results, and after-hours triage in one place. Enrollment and login both live in Hint for fewer clicks.
              </p>
              <div className="space-y-2 text-foreground">
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-secondary" />
                  <span>HIPAA-compliant from enrollment to follow-up.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Every form field labeled for screen readers and accessibility.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/join"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Start enrollment
                </Link>
                <a
                  href={PATIENT_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
                >
                  Patient login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">What members are saying</h2>
            <p className="body-large text-muted-foreground">
              Real stories from Indianapolis families who switched to Direct Care Indy.
            </p>
          </div>
          <Testimonials limit={3} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="content-container text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to enroll in minutes?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of Indy families enjoying specialist-led care without copays or deductibles.
          </p>
          <Link
            href="/join"
            className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block interactive-element"
          >
            Start enrollment
          </Link>
        </div>
      </section>
    </div>
  );
}
