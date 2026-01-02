"use client";

import { PersonaPageShell } from "@/components/PersonaPageShell";
import { DollarSign, Clock, Shield, Heart, Users, CheckCircle2 } from "lucide-react";

const uninsuredPersona = {
  id: "uninsured",
  title: "Uninsured Families",
  subtitle: "Working Families Without Health Insurance",
  hero: {
    headline: "Quality Healthcare Without Breaking the Bank",
    subheadline: "For working families who need comprehensive primary care without the burden of high insurance premiums. Get hospital-quality care for a fraction of the cost.",
    painPoints: [
      "Can't afford insurance premiums",
      "Paying full price for doctor visits",
      "No preventive care coverage",
      "Emergency room as primary care",
      "Medical debt from unexpected bills"
    ]
  },
  benefits: [
    {
      title: "Affordable Family Care",
      description: "Comprehensive primary care for the whole family at a predictable monthly cost you can afford.",
      icon: Heart
    },
    {
      title: "No Surprise Bills",
      description: "One flat fee covers all primary care - no copays, deductibles, or unexpected charges.",
      icon: DollarSign
    },
    {
      title: "Preventive Care Focus",
      description: "Regular check-ups, screenings, and wellness visits to keep your family healthy and prevent expensive problems.",
      icon: Shield
    }
  ],
  howItWorks: {
    title: "Simple Healthcare for Working Families",
    steps: [
      "Choose a family plan starting at $250/month (about $8/day)",
      "Get unlimited primary care visits for the whole family",
      "Schedule same-day or next-day appointments",
      "Access preventive care and chronic condition management",
      "Save thousands compared to paying cash for doctor visits"
    ]
  },
  proof: {
    title: "Uninsured Families Choose DPC",
    stats: [
      { label: "Average Cost Savings", value: "$4,800" },
      { label: "More Preventive Care", value: "85%" },
      { label: "Fewer ER Visits", value: "72%" }
    ]
  },
  cta: {
    primary: { text: "Get Family Care Today", href: "/membership" },
    secondary: { text: "See What We Cover", href: "/services-included" }
  },
  faq: [
    {
      question: "What if my family gets sick and needs expensive care?",
      answer: "DPC covers 90% of your routine healthcare. For emergencies, hospitalizations, or specialist care, you'll need separate insurance or can pay cash at discounted rates through our wraparound partners."
    },
    {
      question: "Can I enroll my whole family?",
      answer: "Yes! Family plans cover all family members including children. One monthly fee covers comprehensive care for everyone."
    },
    {
      question: "What if I find a job with insurance later?",
      answer: "You can cancel or pause your DPC membership at any time. Many families keep DPC even with employer insurance to avoid high deductibles and copays."
    }
  ]
};

export default function UninsuredPage() {
  return <PersonaPageShell persona={uninsuredPersona} />;
}
