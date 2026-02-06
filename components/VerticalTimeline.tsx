"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

export interface TimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
  detail?: string;
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

export default function VerticalTimeline({ steps }: VerticalTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div role="list" aria-label="Timeline steps">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        const isExpanded = expandedIndex === index;

        return (
          <div key={index} className="flex gap-4" role="listitem">
            {/* Circle + line */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              {!isLast && <div className="w-0.5 flex-1 bg-secondary/20 min-h-[24px]" />}
            </div>
            {/* Content */}
            <div className="pb-8">
              <h4 className="font-bold text-foreground">{step.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              {step.detail && (
                <>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isExpanded}
                    aria-controls={`detail-${index}`}
                    className="flex items-center gap-1 text-sm text-secondary font-medium mt-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                  >
                    {isExpanded ? "Hide details" : "Show details"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isExpanded && (
                    <p
                      id={`detail-${index}`}
                      className="text-sm text-muted-foreground mt-2 bg-muted/50 rounded-lg p-3"
                    >
                      {step.detail}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
