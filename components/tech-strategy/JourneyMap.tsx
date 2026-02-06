"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

export interface JourneyStep {
  time: string;
  title: string;
  description: string;
  highlight?: string;
  icon: React.ElementType;
}

interface JourneyMapProps {
  title: string;
  description: string;
  steps: JourneyStep[];
  tags?: string[];
}

export default function JourneyMap({
  title,
  description,
  steps,
  tags,
}: JourneyMapProps) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Vertical Timeline — mobile only */}
      <div className="md:hidden space-y-0">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isComplete = activeStep > index;
          return (
            <div key={index} className="flex gap-4">
              {/* Rail */}
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center justify-center w-9 h-9 rounded-full border-2 shrink-0 transition-colors ${
                    isActive
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : isComplete
                        ? "bg-secondary/10 text-secondary border-secondary/30"
                        : "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <step.icon className="w-4 h-4" />
                  )}
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 min-h-[32px] ${
                      isComplete ? "bg-secondary/40" : "bg-border"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <button
                type="button"
                onClick={() => setActiveStep(index)}
                className={`text-left pb-6 transition-colors ${
                  isActive ? "" : "opacity-70"
                }`}
              >
                <span className="text-xs font-semibold text-secondary">
                  {step.time}
                </span>
                <h4 className="font-bold text-foreground text-sm">
                  {step.title}
                </h4>
                {isActive && (
                  <div className="mt-1 space-y-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {step.highlight && (
                      <p className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
                        {step.highlight}
                      </p>
                    )}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Horizontal Stepper — desktop */}
      <div className="hidden md:block space-y-4">
        <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const isComplete = activeStep > index;
            return (
              <React.Fragment key={index}>
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
                          ? "bg-secondary/10 text-secondary border-secondary/30"
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
                      activeStep > index ? "bg-secondary/40" : "bg-border"
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
              <h4 className="font-bold text-foreground text-lg">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {steps[activeStep].description}
              </p>
              {steps[activeStep].highlight && (
                <p className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2 mt-2">
                  {steps[activeStep].highlight}
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
    </div>
  );
}
