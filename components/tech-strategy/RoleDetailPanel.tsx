"use client";

import * as React from "react";
import { X, CheckCircle2, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import RoleCalculator from "./RoleCalculator";
import type { RoleRoiInputs } from "@/lib/roi/roleRoi";

interface AutomationItem {
  label: string;
  systems: string[];
}

interface SliderConfig {
  key: keyof RoleRoiInputs;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}

interface RoleConfig {
  manual: string[];
  automated: string[];
  defaults: RoleRoiInputs;
  sliders: SliderConfig[];
  hourlyRate: number;
  automationsInDev: AutomationItem[];
  assumptions: string[];
}

const ROLE_DATA: Record<string, RoleConfig> = {
  "Front Desk": {
    hourlyRate: 22,
    manual: [
      "Phone tag for scheduling",
      "Voicemail transcription",
      "Manual appointment reminders",
      "Portal triage and routing",
      "Insurance verification calls",
      "Patient intake paperwork",
    ],
    automated: [
      "Cal.ai handles 80% of calls automatically",
      "Cal.com self-scheduling with real-time availability",
      "Automated reminders via Cal.ai",
      "Spruce secure messaging for triage",
      "n8n auto-routes intake data to Elation",
    ],
    defaults: {
      callsPerDay: 30,
      minutesPerCall: 5,
      voicemailsPerDay: 15,
      minutesPerVoicemail: 3,
      automationAdoption: 0.7,
    },
    sliders: [
      { key: "callsPerDay", label: "Calls Per Day", min: 5, max: 80, step: 1 },
      { key: "minutesPerCall", label: "Minutes Per Call", min: 1, max: 15, step: 1, suffix: " min" },
      { key: "voicemailsPerDay", label: "Voicemails Per Day", min: 0, max: 40, step: 1 },
      { key: "minutesPerVoicemail", label: "Minutes Per Voicemail", min: 1, max: 10, step: 1, suffix: " min" },
    ],
    automationsInDev: [
      { label: "Automated no-show recovery via Cal.ai", systems: ["Cal.ai"] },
      { label: "Smart waitlist management via n8n", systems: ["n8n"] },
      { label: "AI-powered call routing and triage", systems: ["Cal.ai", "Spruce"] },
    ],
    assumptions: [
      "Based on a single front desk staff member",
      "Call volume based on typical DPC practice with 400-600 patients",
      "Automation adoption ramps over 60-90 days",
    ],
  },
  Provider: {
    hourlyRate: 150,
    manual: [
      "2+ hours evening charting (\"pajama time\")",
      "Manual pre-visit chart review",
      "Dictation and note formatting",
      "Prescription refill processing",
      "Lab result follow-up calls",
    ],
    automated: [
      "Elation Note Assist drafts SOAP notes in real-time",
      "Auto-populated visit summaries via n8n",
      "Spruce summarizes patient messages",
      "Hint automates membership billing",
      "Elation e-prescribing with auto-refills",
    ],
    defaults: {
      chartingMinutesPerVisit: 15,
      visitsPerDay: 15,
      voicemailsPerDay: 5,
      minutesPerVoicemail: 3,
      automationAdoption: 0.7,
    },
    sliders: [
      { key: "chartingMinutesPerVisit", label: "Charting Minutes Per Visit", min: 5, max: 30, step: 1, suffix: " min" },
      { key: "visitsPerDay", label: "Visits Per Day", min: 5, max: 25, step: 1 },
      { key: "voicemailsPerDay", label: "Voicemails Per Day", min: 0, max: 20, step: 1 },
      { key: "minutesPerVoicemail", label: "Minutes Per Voicemail", min: 1, max: 10, step: 1, suffix: " min" },
    ],
    automationsInDev: [
      { label: "Ambient note drafting via Elation Note Assist", systems: ["Elation"] },
      { label: "AI-assisted clinical decision support", systems: ["Elation"] },
      { label: "Automated lab result notifications", systems: ["n8n", "Spruce"] },
    ],
    assumptions: [
      "Based on a single provider seeing 15 patients/day",
      "Charting time includes documentation and note completion",
      "Savings assume consistent adoption of Elation Note Assist",
    ],
  },
  MA: {
    hourlyRate: 20,
    manual: [
      "Manual pre-visit prep and chart retrieval",
      "Patient vitals data entry",
      "Scanning and filing documents",
      "Phone-based appointment coordination",
      "Prior authorization paperwork",
    ],
    automated: [
      "n8n auto-populates pre-visit summaries from Elation",
      "Digital intake flows reduce data entry",
      "Spruce routes messages by urgency",
      "Cal.com handles scheduling coordination",
      "Elation streamlines documentation",
    ],
    defaults: {
      preVisitPrepMinutes: 10,
      visitsPerDay: 15,
      callsPerDay: 20,
      minutesPerCall: 4,
      automationAdoption: 0.7,
    },
    sliders: [
      { key: "preVisitPrepMinutes", label: "Pre-Visit Prep Minutes", min: 2, max: 20, step: 1, suffix: " min" },
      { key: "visitsPerDay", label: "Visits Per Day", min: 5, max: 25, step: 1 },
      { key: "callsPerDay", label: "Calls Per Day", min: 5, max: 50, step: 1 },
      { key: "minutesPerCall", label: "Minutes Per Call", min: 1, max: 10, step: 1, suffix: " min" },
    ],
    automationsInDev: [
      { label: "Auto-populated pre-visit summaries via n8n + Elation", systems: ["n8n", "Elation"] },
      { label: "Smart task prioritization dashboard", systems: ["n8n"] },
      { label: "Automated prior authorization workflows", systems: ["n8n", "Elation"] },
    ],
    assumptions: [
      "Based on a single medical assistant",
      "Visit volume aligned with provider schedule",
      "Pre-visit prep time includes chart review and room setup",
    ],
  },
  Admin: {
    hourlyRate: 28,
    manual: [
      "Manual invoicing and payment reconciliation",
      "Spreadsheet-based revenue tracking",
      "Manual membership enrollment processing",
      "Report generation and compilation",
      "Vendor coordination and billing disputes",
    ],
    automated: [
      "Hint handles billing and auto-invoicing",
      "Real-time revenue dashboard via Hint",
      "n8n syncs enrollment data across systems",
      "Automated reporting via n8n workflows",
      "Centralized vendor management",
    ],
    defaults: {
      billingMinutesPerDay: 120,
      callsPerDay: 10,
      minutesPerCall: 5,
      automationAdoption: 0.7,
    },
    sliders: [
      { key: "billingMinutesPerDay", label: "Billing Minutes Per Day", min: 30, max: 240, step: 10, suffix: " min" },
      { key: "callsPerDay", label: "Calls Per Day", min: 0, max: 30, step: 1 },
      { key: "minutesPerCall", label: "Minutes Per Call", min: 1, max: 15, step: 1, suffix: " min" },
    ],
    automationsInDev: [
      { label: "Real-time revenue dashboard via Hint", systems: ["Hint"] },
      { label: "Automated financial reconciliation", systems: ["Hint", "n8n"] },
      { label: "Marketing ROI tracking via Mautic", systems: ["Mautic", "n8n"] },
    ],
    assumptions: [
      "Based on a single admin/office manager",
      "Billing time includes invoicing, reconciliation, and follow-up",
      "Assumes Hint membership management is fully adopted",
    ],
  },
};

function SystemBadge({ name }: { name: string }) {
  return (
    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs font-medium">
      {name}
    </span>
  );
}

interface RoleDetailPanelProps {
  role: string;
}

export default function RoleDetailPanel({ role }: RoleDetailPanelProps) {
  const data = ROLE_DATA[role];
  if (!data) return null;

  return (
    <div className="space-y-6 mt-6">
      {/* Manual vs Automated task lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Manual Today */}
        <Card className="border-red-200">
          <CardContent className="pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-red-500 mb-3">
              Manual Today
            </h4>
            <ul className="space-y-2">
              {data.manual.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-red-700">
                  <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Automated With New Stack */}
        <Card className="border-green-200">
          <CardContent className="pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-3">
              Automated With New Stack
            </h4>
            <ul className="space-y-2">
              {data.automated.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-green-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Role ROI Calculator */}
      <RoleCalculator
        defaults={data.defaults}
        sliders={data.sliders}
        hourlyRate={data.hourlyRate}
      />

      {/* Automations in Development & Assumptions */}
      <Accordion type="single" collapsible className="space-y-0">
        <AccordionItem value="automations-dev">
          <AccordionTrigger itemValue="automations-dev" className="text-sm">
            <span className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-secondary" />
              Automations in Development
            </span>
          </AccordionTrigger>
          <AccordionContent itemValue="automations-dev">
            <ul className="space-y-3">
              {data.automationsInDev.map((item) => (
                <li key={item.label} className="flex flex-wrap items-center gap-2 text-sm text-foreground">
                  <span>{item.label}</span>
                  {item.systems.map((sys) => (
                    <SystemBadge key={sys} name={sys} />
                  ))}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="assumptions">
          <AccordionTrigger itemValue="assumptions" className="text-sm">
            Assumptions
          </AccordionTrigger>
          <AccordionContent itemValue="assumptions">
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              {data.assumptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
