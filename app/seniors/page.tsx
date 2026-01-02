"use client";

import { PersonaPageShell } from "@/components/PersonaPageShell";
import { Shield, Heart, DollarSign as DollarSignIcon, Users, Calendar, Star } from "lucide-react";

const seniorsPersona = {
  id: "seniors",
  title: "Seniors & Medicare",
  subtitle: "Medicare Recipients & Retirees",
  hero: {
    headline: "Healthcare Made Simple for Seniors",
    subheadline: "Medicare can be confusing. Direct Primary Care cuts through the complexity with personalized care from Dr. Pike, your pulmonary specialist with decades of experience treating seniors.",
    painPoints: [
      "Medicare paperwork nightmares",
      "Long waits for specialists",
      "High drug costs without coverage",
      "Limited choices and networks",
      "Complex billing and appeals"
    ]
  },
  benefits: [
    {
      title: "Pulmonary Specialist Care",
      description: "Dr. Pike's expertise in lung conditions and senior health means better care for respiratory issues, COPD, and age-related conditions.",
      icon: Heart
    },
    {
      title: "Medicare Welcoming",
      description: "Designed to work seamlessly with Medicare - no networks to worry about, no prior authorizations for routine care.",
      icon: Shield
    },
    {
      title: "Predictable Costs",
      description: "One monthly fee covers all primary care. No copays for office visits, no surprise bills, no complex Medicare billing.",
      icon: DollarSignIcon
    }
  ],
  howItWorks: {
    title: "How DPC Works with Medicare",
    steps: [
      "Keep your Medicare Parts A & B for hospital and medical coverage",
      "Consider a Medicare Supplement (Medigap) for the 10% not covered by DPC",
      "DPC covers 90% of your primary care needs for one monthly fee",
      "Direct access to Dr. Pike and his care team - no referrals needed",
      "Prescription assistance and chronic condition management included"
    ]
  },
  proof: {
    title: "Seniors Love DPC Care",
    stats: [
      { label: "Report Better Access to Care", value: "91%" },
      { label: "Reduced Hospital Visits", value: "67%" },
      { label: "Average Annual Savings", value: "$2,800" }
    ]
  },
  cta: {
    primary: { text: "Get Senior Care Today", href: "/membership" },
    secondary: { text: "Learn About Medicare Options", href: "/wraparound" }
  },
  faq: [
    {
      question: "Does DPC replace my Medicare?",
      answer: "No, DPC complements Medicare. Keep your Medicare Parts A & B for hospital and specialist coverage. DPC handles your primary care needs."
    },
    {
      question: "Can I use my Medicare Supplement with DPC?",
      answer: "Absolutely! Medicare Supplements work perfectly with DPC. You'll have comprehensive coverage for both routine care and unexpected medical needs."
    },
    {
      question: "What about prescription drug coverage?",
      answer: "DPC includes prescription assistance and we work with Medicare Part D. Many patients save significantly on medications through our pharmacy partnerships."
    },
    {
      question: "Do I still need a Medigap policy?",
      answer: "Medigap can provide excellent coverage for the 10% of care not included in DPC (hospitalizations, specialists, etc.). We recommend discussing Medigap options with your insurance advisor."
    }
  ]
};

export default function SeniorsPage() {
  return <PersonaPageShell persona={seniorsPersona} />;
}
