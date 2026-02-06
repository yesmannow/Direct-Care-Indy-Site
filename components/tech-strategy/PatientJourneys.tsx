"use client";

import * as React from "react";
import {
  Heart,
  UserPlus,
  Calendar,
  MessageSquare,
  Stethoscope,
  Pill,
  ClipboardCheck,
  Bell,
  CreditCard,
} from "lucide-react";
import JourneyMap, { type JourneyStep } from "./JourneyMap";

interface Journey {
  id: string;
  title: string;
  description: string;
  mapTitle: string;
  mapDescription: string;
  steps: JourneyStep[];
  tags?: string[];
}

const journeys: Journey[] = [
  {
    id: "new-family-onboarding",
    title: "New Family Onboarding",
    description: "From membership purchase to first visit.",
    mapTitle: "New Family Onboarding",
    mapDescription:
      "Follow a new family from signing up to their first appointment.",
    tags: ["Enrollment", "Self-Service", "Same-Day Access"],
    steps: [
      {
        time: "Step 1",
        title: "Membership Purchase",
        description:
          "Family chooses a membership plan online. Payment is processed securely and a confirmation is sent immediately.",
        highlight: "Complete enrollment in under 5 minutes",
        icon: CreditCard,
      },
      {
        time: "Step 2",
        title: "Portal Sign-Up & Account Creation",
        description:
          "New members receive a welcome email with portal access. Patient chart is created automatically — no paperwork needed.",
        highlight: "Powered by secure, HIPAA-aligned systems",
        icon: UserPlus,
      },
      {
        time: "Step 3",
        title: "Schedule First Visit",
        description:
          "Members schedule their first appointment through the self-service portal. Same-day and next-day slots are often available.",
        highlight: "Schedule in 30 seconds",
        icon: Calendar,
      },
      {
        time: "Step 4",
        title: "Welcome Message & Chat Access",
        description:
          "A welcome message arrives via secure messaging. Members can now message their care team directly for questions or concerns.",
        highlight: "Direct access to your care team",
        icon: MessageSquare,
      },
      {
        time: "Step 5",
        title: "First Visit",
        description:
          "At the first visit, the provider already has a complete picture. No redundant forms — just focused, personal care from day one.",
        highlight: "Unhurried visits, no rushing",
        icon: Stethoscope,
      },
    ],
  },
  {
    id: "ongoing-care-refills",
    title: "Ongoing Care & Refills",
    description: "From refill request to pharmacy pickup.",
    mapTitle: "Ongoing Care & Refills",
    mapDescription:
      "Follow a prescription refill from patient request to pharmacy pickup.",
    tags: ["Messaging", "E-Prescribing", "Transparent Billing"],
    steps: [
      {
        time: "Step 1",
        title: "Request a Refill",
        description:
          "Patient sends a secure message requesting a prescription refill. No phone call needed — just type the request.",
        highlight: "Message your care team anytime",
        icon: Pill,
      },
      {
        time: "Step 2",
        title: "Staff Reviews Request",
        description:
          "The care team receives a summarized message with context. Requests are prioritized and routed to the right person automatically.",
        highlight: "Smart routing reduces wait times",
        icon: ClipboardCheck,
      },
      {
        time: "Step 3",
        title: "Prescription Sent",
        description:
          "The provider reviews and approves the refill. E-prescribing sends it directly to the patient's preferred pharmacy.",
        highlight: "No fax machines, no phone tag",
        icon: Heart,
      },
      {
        time: "Step 4",
        title: "Patient Notified",
        description:
          "Patient receives a notification that their prescription is on its way. Pickup is ready at the pharmacy.",
        highlight: "Transparent status updates",
        icon: Bell,
      },
      {
        time: "Step 5",
        title: "Recurring Billing Handled",
        description:
          "Membership billing continues seamlessly in the background. No surprise bills, no insurance claims to track.",
        highlight: "Simple, predictable pricing",
        icon: CreditCard,
      },
    ],
  },
];

export default function PatientJourneys() {
  const [activeJourney, setActiveJourney] = React.useState(0);

  const selected = journeys[activeJourney];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          Patient Experience Flows
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          See how patients interact with our systems — from their perspective.
        </p>
      </div>

      {/* Journey Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {journeys.map((journey, index) => (
          <button
            key={journey.id}
            type="button"
            onClick={() => setActiveJourney(index)}
            className={`rounded-lg border p-4 cursor-pointer text-left transition-colors ${
              activeJourney === index
                ? "border-secondary bg-secondary/5"
                : "border-border bg-card hover:border-secondary/40"
            }`}
          >
            <h4 className="font-bold text-foreground text-sm">
              {journey.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {journey.description}
            </p>
          </button>
        ))}
      </div>

      {/* Journey Map */}
      <JourneyMap
        key={selected.id}
        title={selected.mapTitle}
        description={selected.mapDescription}
        steps={selected.steps}
        tags={selected.tags}
      />
    </div>
  );
}
