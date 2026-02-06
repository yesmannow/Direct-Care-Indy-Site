"use client";

import * as React from "react";
import {
  Stethoscope,
  Briefcase,
  Phone,
  MessageSquare,
  TrendingUp,
  Zap,
  ShieldCheck,
  X,
} from "lucide-react";

interface StackNode {
  id: string;
  name: string;
  role: string;
  replaces: string;
  phi: boolean;
  icon: React.ElementType;
  color: string;
  metric: string;
}

const nodes: StackNode[] = [
  {
    id: "elation",
    name: "Elation",
    role: "The Clinical Brain",
    replaces: "Manual Charting",
    phi: true,
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-700 border-blue-300",
    metric:
      "AI Note Assist reduces charting time by 80–90% via ambient transcription.",
  },
  {
    id: "hint",
    name: "Hint",
    role: "The Business Engine",
    replaces: "Manual Invoicing & Batch Billing",
    phi: true,
    icon: Briefcase,
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
    metric:
      "Automated Membership Billing & Dunning. Eliminates manual collections and syncs directly to QuickBooks.",
  },
  {
    id: "calai",
    name: "Cal.ai",
    role: "The AI Front Desk",
    replaces: "Phone Tag & Voicemail",
    phi: false,
    icon: Phone,
    color: "bg-violet-100 text-violet-700 border-violet-300",
    metric:
      "24/7 Autonomous Scheduling. Handles confirmations, rescheduling, and triage without staff intervention.",
  },
  {
    id: "spruce",
    name: "Spruce",
    role: "The Comm Hub",
    replaces: "Fragmented Messaging",
    phi: true,
    icon: MessageSquare,
    color: "bg-amber-100 text-amber-700 border-amber-300",
    metric:
      "Asynchronous Clinical Triage. Acts as a 'Digital Exam Room' for 40% of standard visits.",
  },
  {
    id: "mautic",
    name: "Mautic",
    role: "The Growth Engine",
    replaces: "Manual Outreach & Follow-Ups",
    phi: false,
    icon: TrendingUp,
    color: "bg-rose-100 text-rose-700 border-rose-300",
    metric:
      "Self-hosted marketing automation with full data sovereignty for HIPAA-compliant lead nurturing.",
  },
];

export default function StackMap() {
  const [selected, setSelected] = React.useState<StackNode | null>(null);

  React.useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <div className="relative">
      {/* Network Diagram */}
      <div className="flex flex-col items-center gap-8 py-6">
        {/* Outer nodes - top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {nodes.slice(0, 3).map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelected(node)}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:scale-105 hover:shadow-md ${node.color}`}
            >
              <node.icon className="w-7 h-7" />
              <span className="text-sm font-bold">{node.name}</span>
              <span className="text-xs opacity-75">{node.role}</span>
            </button>
          ))}
        </div>

        {/* Center hub - n8n */}
        <div className="relative flex items-center justify-center">
          {/* Connection lines (visual only) */}
          <div className="absolute w-48 h-0.5 bg-secondary/20 hidden md:block" />
          <div className="absolute h-48 w-0.5 bg-secondary/20 hidden md:block" />

          <div className="relative z-10 flex flex-col items-center gap-2 rounded-full border-4 border-secondary bg-secondary/10 p-6 shadow-lg">
            <Zap className="w-10 h-10 text-secondary" />
            <span className="text-sm font-bold text-secondary">n8n</span>
            <span className="text-xs text-muted-foreground">The Automation Bus</span>
          </div>
        </div>

        {/* Outer nodes - bottom row */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {nodes.slice(3).map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelected(node)}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:scale-105 hover:shadow-md ${node.color}`}
            >
              <node.icon className="w-7 h-7" />
              <span className="text-sm font-bold">{node.name}</span>
              <span className="text-xs opacity-75">{node.role}</span>
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-2">
          Click any node to learn more about its role in the stack.
        </p>
      </div>

      {/* Side Panel (Sheet) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="presentation"
          />
          <div className="relative z-50 w-full max-w-sm bg-card border-l border-border shadow-xl p-6 overflow-y-auto animate-in slide-in-from-right">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-6 mt-2">
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-3 ${selected.color}`}>
                  <selected.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selected.name}</h3>
                  <p className="text-sm text-muted-foreground">{selected.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Role
                  </h4>
                  <p className="text-sm text-foreground">{selected.role}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Replaces
                  </h4>
                  <p className="text-sm text-foreground">{selected.replaces}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Key Metric
                  </h4>
                  <p className="text-sm text-foreground font-medium">
                    {selected.metric}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    Data Compliance
                  </h4>
                  {selected.phi ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 text-green-800 text-xs font-semibold px-3 py-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      PHI Secure
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1">
                      No PHI Handled
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
