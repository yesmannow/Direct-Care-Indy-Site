"use client";

import * as React from "react";
import {
  Phone,
  CalendarCheck,
  FileText,
  CreditCard,
  UserPlus,
  MessageCircle,
  Bell,
  RefreshCw,
} from "lucide-react";
import WorkflowTimeline, { type TimelineStep } from "./WorkflowTimeline";

interface Scenario {
  id: string;
  title: string;
  description: string;
  timelineTitle: string;
  timelineDescription: string;
  steps: TimelineStep[];
}

const scenarios: Scenario[] = [
  {
    id: "sick-child",
    title: "The 2 AM Sick Child",
    description: "From midnight call to completed visit.",
    timelineTitle: "Workflow: The 2 AM Sick Child",
    timelineDescription:
      "Follow a real scenario from midnight call to completed visit.",
    steps: [
      {
        time: "2:00 AM",
        title: "Parent Calls",
        tool: "Cal.ai",
        description:
          "Parent calls about a sick child. Cal.ai answers immediately — no hold time, no voicemail.",
        icon: Phone,
      },
      {
        time: "2:03 AM",
        title: "Appointment Booked",
        tool: "Cal.com + n8n + Elation",
        description:
          "Appointment booked in Cal.com. n8n fires a webhook that creates the patient chart in Elation automatically.",
        icon: CalendarCheck,
        security:
          "🛡️ n8n transfers demographics to Elation (End-to-End Encrypted).",
      },
      {
        time: "8:00 AM",
        title: "Provider Reviews",
        tool: "Spruce",
        description:
          "Dr. Pike opens Spruce and reviews a summary of the 2 AM call, already categorized and ready for the visit.",
        icon: FileText,
      },
      {
        time: "9:00 AM",
        title: "Visit & Billing",
        tool: "Elation + Hint",
        description:
          "Visit happens. Elation AI Scribe documents notes. Hint handles copay and membership billing automatically.",
        icon: CreditCard,
        security: "🔒 Hint encrypts credit card (PCI Compliant).",
      },
    ],
  },
  {
    id: "lead-funnel",
    title: "Lead → Member: Indy Funnel",
    description: "From prospect form to welcome message.",
    timelineTitle: "Workflow: Lead → Member: Indy Funnel",
    timelineDescription:
      "Follow a lead from first contact to enrolled member.",
    steps: [
      {
        time: "Day 1",
        title: "Prospect Submits Form",
        tool: "Mautic + n8n",
        description:
          "A prospective patient fills out a Mautic form on the website. n8n automatically pushes the lead data to Cal.com for scheduling.",
        icon: UserPlus,
      },
      {
        time: "Day 2",
        title: "Meet & Greet Scheduled",
        tool: "Cal.com + n8n + Elation",
        description:
          "Cal.com schedules a Meet & Greet appointment. n8n creates the patient chart in Elation automatically with the captured demographics.",
        icon: CalendarCheck,
      },
      {
        time: "Day 3",
        title: "Onboarding & Payment",
        tool: "Hint + n8n + Elation",
        description:
          "Hint handles membership onboarding and payment processing. n8n syncs all enrollment data back to Elation for a complete patient record.",
        icon: CreditCard,
        security: "🔒 Hint encrypts payment data (PCI Compliant).",
      },
      {
        time: "Day 3",
        title: "Welcome & Chat Access",
        tool: "Spruce",
        description:
          "Spruce sends a welcome message and provides the new member with secure chat access to their care team.",
        icon: MessageCircle,
      },
    ],
  },
  {
    id: "no-show-recovery",
    title: "Appointment Lifecycle: No-Show Recovery",
    description: "From self-scheduling to slot recovery.",
    timelineTitle: "Workflow: Appointment Lifecycle: No-Show Recovery",
    timelineDescription:
      "Follow an appointment from booking through no-show recovery.",
    steps: [
      {
        time: "Step 1",
        title: "Patient Self-Schedules",
        tool: "Cal.com",
        description:
          "Patient books their own appointment through Cal.com's self-scheduling portal with real-time availability.",
        icon: CalendarCheck,
      },
      {
        time: "Step 2",
        title: "Automated Reminders",
        tool: "Cal.ai",
        description:
          "Cal.ai sends appointment reminders via text and handles any rescheduling requests automatically through AI-powered conversation.",
        icon: Bell,
      },
      {
        time: "Step 3",
        title: "Voicemail Summary",
        tool: "Spruce",
        description:
          "If the patient calls with questions, Spruce summarizes voicemails and routes them to the appropriate staff member by urgency.",
        icon: FileText,
      },
      {
        time: "Step 4",
        title: "Slot Recovery",
        tool: "n8n + Cal.com",
        description:
          "If a no-show occurs, n8n triggers recovery workflows — marking the slot for backfill, sending a rebooking link, and updating the waitlist.",
        icon: RefreshCw,
        security:
          "🛡️ Automated recovery happens within minutes, not hours.",
      },
    ],
  },
];

export default function WorkflowSimulator() {
  const [activeScenario, setActiveScenario] = React.useState(0);

  const selected = scenarios[activeScenario];

  return (
    <div className="space-y-8">
      {/* Scenario Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.id}
            type="button"
            onClick={() => setActiveScenario(index)}
            className={`rounded-lg border p-4 cursor-pointer text-left transition-colors ${
              activeScenario === index
                ? "border-secondary bg-secondary/5"
                : "border-border bg-card hover:border-secondary/40"
            }`}
          >
            <h4 className="font-bold text-foreground text-sm">
              {scenario.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {scenario.description}
            </p>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <WorkflowTimeline
        key={selected.id}
        title={selected.timelineTitle}
        description={selected.timelineDescription}
        steps={selected.steps}
      />
    </div>
  );
}
