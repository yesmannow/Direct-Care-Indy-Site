"use client";

import * as React from "react";
import { Phone, CalendarCheck, FileText, CreditCard, CheckCircle2 } from "lucide-react";

interface SimStep {
  time: string;
  title: string;
  tool: string;
  description: string;
  icon: React.ElementType;
  security?: string;
}

const steps: SimStep[] = [
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
    security: "🛡️ n8n transfers demographics to Elation (End-to-End Encrypted).",
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
];

export default function WorkflowSimulator() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">
          Workflow: The 2 AM Sick Child
        </h3>
        <p className="text-sm text-muted-foreground">
          Follow a real scenario from midnight call to completed visit.
        </p>
      </div>

      {/* Horizontal Stepper */}
      <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isComplete = activeStep > index;
          return (
            <React.Fragment key={step.time}>
              <button
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center gap-1 min-w-[80px] transition-all ${
                  isActive ? "scale-110" : ""
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    isActive
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : isComplete
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs font-semibold whitespace-nowrap ${
                    isActive ? "text-secondary" : "text-muted-foreground"
                  }`}
                >
                  {step.time}
                </span>
              </button>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 min-w-[20px] ${
                    activeStep > index ? "bg-green-400" : "bg-border"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Step Detail */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-secondary/10 p-3 shrink-0">
            {React.createElement(steps[activeStep].icon, {
              className: "w-6 h-6 text-secondary",
            })}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-foreground text-lg">
                {steps[activeStep].title}
              </h4>
              <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                {steps[activeStep].tool}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {steps[activeStep].description}
            </p>
            {steps[activeStep].security && (
              <p className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mt-2">
                {steps[activeStep].security}
              </p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6 pt-4 border-t border-border">
          <button
            type="button"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveStep(Math.min(steps.length - 1, activeStep + 1))
            }
            disabled={activeStep === steps.length - 1}
            className="text-sm font-medium text-secondary hover:text-secondary/80 disabled:opacity-40 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
