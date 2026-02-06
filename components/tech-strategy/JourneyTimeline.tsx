"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Step {
  title: string;
  tool: string;
  description: string;
  underTheHood: string;
}

const steps: Step[] = [
  {
    title: "Lead",
    tool: "Mautic",
    description: "Patient downloads Guide",
    underTheHood: "Mautic captures lead → n8n webhook creates contact",
  },
  {
    title: "Triage",
    tool: "Spruce",
    description: 'Patient texts "Sick" at 8 PM',
    underTheHood: "Spruce routes message → AI categorizes urgency",
  },
  {
    title: "Booking",
    tool: "Cal.ai",
    description: "AI negotiates time",
    underTheHood: "Cal.ai checks availability → books Elation slot",
  },
  {
    title: "Visit",
    tool: "Elation AI Scribe",
    description: "Dr. Pike sees patient",
    underTheHood: "Ambient mic → Note Assist writes SOAP → chart saved",
  },
  {
    title: "Billing",
    tool: "Hint",
    description: "Card charged automatically",
    underTheHood: "Hint auto-charges membership → receipt emailed",
  },
];

export default function JourneyTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" />

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isExpanded = expandedStep === index;
          return (
            <button
              type="button"
              key={step.title}
              onClick={() => setExpandedStep(isExpanded ? null : index)}
              className="relative flex items-start gap-4 w-full text-left group"
            >
              {/* Step number */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold text-sm shrink-0">
                {index + 1}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-lg border border-border bg-card p-4 shadow-sm group-hover:border-secondary/40 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {step.tool}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Under the Hood
                    </p>
                    <p className="text-sm text-foreground">{step.underTheHood}</p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
