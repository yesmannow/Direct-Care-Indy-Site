"use client";

import { PersonaPageShell } from "@/components/PersonaPageShell";
import { DollarSign, Clock, Shield, Heart, Users, CheckCircle2 } from "lucide-react";

const hdhpFamiliesPersona = {
  id: "hdhp-families",
  title: "HDHP Families",
  subtitle: "High-Deductible Health Plan Families",
  hero: {
    headline: "Healthcare Without the Hassle for HDHP Families",
    subheadline: "Pair your High-Deductible Health Plan with Direct Primary Care for the perfect healthcare solution. Get comprehensive primary care coverage while saving thousands on premiums.",
    painPoints: [
      "High deductibles you never meet",
      "Expensive premiums for limited coverage",
      "No primary care until deductible is met",
      "Surprise bills and network restrictions"
    ]
  },
  benefits: [
    {
      title: "Zero-Deductible Primary Care",
      description: "Full primary care coverage from day one - no waiting for your deductible to kick in.",
      icon: Heart
    },
    {
      title: "Predictable Monthly Costs",
      description: "One flat fee covers all your family's primary care needs. No copays, no surprise bills.",
      icon: DollarSign
    },
    {
      title: "HSA Tax Advantages",
      description: "Use pre-tax HSA dollars to pay for DPC membership and get tax-free healthcare.",
      icon: Shield
    }
  ],
  howItWorks: {
    title: "How HDHP + DPC Works for Your Family",
    steps: [
      "Keep your HDHP for catastrophic coverage (hospital stays, surgeries, emergencies)",
      "Replace expensive primary care coverage with affordable DPC membership",
      "Use HSA funds to pay for DPC - tax-free healthcare spending",
      "Get comprehensive primary care from day one with no deductibles",
      "Save $2,000-$5,000 annually on insurance premiums"
    ]
  },
  proof: {
    title: "HDHP Families Love DPC",
    stats: [
      { label: "Average Annual Savings", value: "$3,200" },
      { label: "Families Report Better Care", value: "94%" },
      { label: "HSA-Compatible Members", value: "87%" }
    ]
  },
  cta: {
    primary: { text: "Start Saving Today", href: "/membership" },
    secondary: { text: "Learn About HSA Benefits", href: "/services-included" }
  },
  faq: [
    {
      question: "Can I use my HSA to pay for DPC membership?",
      answer: "Yes! HSA funds can be used for qualifying medical expenses including DPC membership fees. This makes DPC tax-free healthcare spending."
    },
    {
      question: "Do I still need my HDHP if I join DPC?",
      answer: "Yes, you still need insurance for catastrophic events (hospitalizations, surgeries, emergencies). DPC covers 90% of your routine care; insurance covers the 10%."
    },
    {
      question: "How much can I save by dropping primary care coverage?",
      answer: "Most families save $2,000-$5,000 annually by removing primary care coverage from their HDHP and replacing it with DPC at $150-$250/month."
    }
  ]
};

export default function HDHPFamiliesPage() {
  return <PersonaPageShell persona={hdhpFamiliesPersona} />;
}
