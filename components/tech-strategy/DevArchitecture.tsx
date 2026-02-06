"use client";

import * as React from "react";
import { Network, MessageSquareCode, DatabaseZap, Terminal, ArrowRight, ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Section 1 – Hero: "The Marketing Technologist Architecture"       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Event-Driven DPC Architecture.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A fully decoupled, <code className="text-sm bg-muted px-1.5 py-0.5 rounded">API</code>-first
          ecosystem designed for zero-latency data synchronization and true data
          sovereignty.
        </p>
      </div>

      {/* Terminal-style system status */}
      <div className="rounded-lg overflow-hidden border border-gray-700 max-w-xl mx-auto">
        <div className="flex items-center gap-1.5 bg-gray-800 px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-gray-400 font-mono">system_status.sh</span>
        </div>
        <div className="bg-gray-950 p-4 font-mono text-sm leading-relaxed text-green-400">
          <p>&gt; SYSTEM_CHECK:</p>
          <p>&gt; Hint_Connect: <span className="text-green-300">ONLINE</span> (Webhook Listener Active)</p>
          <p>&gt; Spruce_API: <span className="text-green-300">SECURE</span> (Bearer Token Auth / Rate_Limit: OK)</p>
          <p>&gt; Mautic_Core: <span className="text-green-300">SELF_HOSTED</span> (Data Sovereignty: TRUE)</p>
          <p>&gt; n8n_Bus: <span className="text-green-300">RUNNING</span> (Latency: &lt;200ms)</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 – Integration Strategy (3-column grid)                  */
/* ------------------------------------------------------------------ */

interface IntegrationCard {
  title: string;
  icon: React.ElementType;
  color: string;
  specs: React.ReactNode;
  devNote: string;
}

const integrations: IntegrationCard[] = [
  {
    title: "The Event Bus (n8n Middleware)",
    icon: Network,
    color: "bg-violet-100 text-violet-700 border-violet-300",
    specs: (
      <>
        We utilize an open-source middleware layer to ingest{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">JSON</code> payloads from
        Hint webhooks. This decouples our billing engine from our clinical tools,
        preventing &ldquo;Monolith&rdquo; failures.
      </>
    ),
    devNote: "Status: Production Ready.",
  },
  {
    title: "Real-Time Comms (Spruce API)",
    icon: MessageSquareCode,
    color: "bg-amber-100 text-amber-700 border-amber-300",
    specs: (
      <>
        Leveraging{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">s-idempotency-key</code>{" "}
        headers to ensure zero-duplicate message delivery. We utilize the Conversations{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">API</code> to
        programmatically tag and route urgent triage messages to provider devices
        instantly.
      </>
    ),
    devNote: "Rate Limit Strategy: Adaptive Throttling.",
  },
  {
    title: "Sovereign Growth (Mautic Core)",
    icon: DatabaseZap,
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
    specs: (
      <>
        Direct REST <code className="text-xs bg-muted px-1 py-0.5 rounded">API</code>{" "}
        integration allows for granular &ldquo;Lead Scoring&rdquo; based on patient
        behavior. Unlike SaaS competitors, self-hosting ensures we own the raw{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">SQL</code> data for
        advanced segmentation.
      </>
    ),
    devNote: "Data Privacy: On-Premise / HIPAA Compliant.",
  },
];

function IntegrationGrid() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold text-foreground text-center">Integration Strategy</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {integrations.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border-2 p-5 space-y-4 bg-white shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className={`rounded-lg p-2.5 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">{card.title}</h4>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {card.specs}
            </p>

            <div className="pt-2 border-t border-border">
              <p className="text-xs font-semibold text-foreground">
                <Terminal className="inline w-3.5 h-3.5 mr-1 opacity-60" />
                Dev Note: <span className="text-secondary">{card.devNote}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 – "Seamless Sync" Data Propagation Flow                 */
/* ------------------------------------------------------------------ */

interface FlowStep {
  label: string;
  detail: string;
  branches?: string[];
}

const flowSteps: FlowStep[] = [
  { label: "Ingest", detail: "POST /api/v1/patient (Website Form)" },
  { label: "Auth", detail: "OAuth2 Verification" },
  { label: "Master Record", detail: "Hint generates patient_uuid" },
  { label: "Fan-Out", detail: "Webhook fires → n8n splits payload" },
  {
    label: "Sync",
    detail: "Parallel writes:",
    branches: [
      "→ Spruce (Create Contact PUT /contacts)",
      "→ Elation (Create Chart POST /charts)",
      "→ Mautic (Update Segment PATCH /leads)",
    ],
  },
];

function PropagationFlow() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold text-foreground text-center">
        Data Propagation Flow
      </h3>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-start justify-between gap-2 overflow-x-auto py-4">
        {flowSteps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center text-center min-w-[140px] max-w-[180px]">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-2">
                {idx + 1}
              </span>
              <span className="text-sm font-semibold text-foreground">{step.label}</span>
              <code className="text-xs bg-gray-950 text-green-400 rounded px-2 py-1 mt-1 block">
                {step.detail}
              </code>
              {step.branches && (
                <div className="mt-2 space-y-1">
                  {step.branches.map((b) => (
                    <code
                      key={b}
                      className="text-xs bg-gray-950 text-green-400 rounded px-2 py-0.5 block"
                    >
                      {b}
                    </code>
                  ))}
                </div>
              )}
            </div>
            {idx < flowSteps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground mt-3 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden space-y-4">
        {flowSteps.map((step, idx) => (
          <div key={step.label} className="flex gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
              {idx + 1}
            </span>
            <div>
              <span className="text-sm font-semibold text-foreground">{step.label}</span>
              <code className="text-xs bg-gray-950 text-green-400 rounded px-2 py-1 mt-1 block">
                {step.detail}
              </code>
              {step.branches && (
                <div className="mt-1 space-y-1">
                  {step.branches.map((b) => (
                    <code
                      key={b}
                      className="text-xs bg-gray-950 text-green-400 rounded px-2 py-0.5 block"
                    >
                      {b}
                    </code>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 – The AI Automation Loop                                */
/* ------------------------------------------------------------------ */

interface LoopStep {
  stage: string;
  node: string;
  action: string;
}

const loopSteps: LoopStep[] = [
  { stage: "Input", node: "Trigger Node", action: "Web Form / SMS" },
  {
    stage: "Process",
    node: "AI Node (OpenAI/Claude)",
    action: "Classifies Intent (Hot/Warm/Cold)",
  },
  {
    stage: "Action",
    node: "Mautic Node",
    action: "Tags Contact & Triggers Drip",
  },
  {
    stage: "Result",
    node: "Cal.com Node",
    action: "Generates Dynamic Booking Link",
  },
];

function AIAutomationLoop() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold text-foreground text-center">
        The AI Automation Loop
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
        Every inbound lead is processed through a four-stage n8n workflow that
        classifies intent and routes to the correct action — with zero human
        intervention.
      </p>

      {/* Code-block style visualization */}
      <div className="rounded-lg overflow-hidden border border-gray-700 max-w-2xl mx-auto">
        <div className="flex items-center gap-1.5 bg-gray-800 px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-gray-400 font-mono">
            ai_automation_loop.json
          </span>
        </div>
        <div className="bg-gray-950 p-4 font-mono text-sm leading-relaxed overflow-x-auto">
          <p className="text-gray-500">{"{"}</p>
          <p className="text-gray-500 ml-2">
            {'"workflow"'}: {'"ai_lead_router"'},
          </p>
          <p className="text-gray-500 ml-2">
            {'"nodes"'}: {"["}
          </p>
          {loopSteps.map((step, idx) => (
            <div key={step.stage} className="ml-4 my-1">
              <p className="text-gray-500">{"{"}</p>
              <p className="ml-2">
                <span className="text-violet-400">{`"stage"`}</span>
                <span className="text-gray-500">: </span>
                <span className="text-amber-300">{`"${step.stage}"`}</span>
                <span className="text-gray-500">,</span>
              </p>
              <p className="ml-2">
                <span className="text-violet-400">{`"node"`}</span>
                <span className="text-gray-500">: </span>
                <span className="text-green-400">{`"${step.node}"`}</span>
                <span className="text-gray-500">,</span>
              </p>
              <p className="ml-2">
                <span className="text-violet-400">{`"action"`}</span>
                <span className="text-gray-500">: </span>
                <span className="text-cyan-300">{`"${step.action}"`}</span>
              </p>
              <p className="text-gray-500">
                {"}"}{idx < loopSteps.length - 1 ? "," : ""}
              </p>
            </div>
          ))}
          <p className="text-gray-500 ml-2">{"]"}</p>
          <p className="text-gray-500">{"}"}</p>
        </div>
      </div>

      {/* Visual flow (horizontal) */}
      <div className="hidden md:flex items-center justify-center gap-2 py-4 max-w-3xl mx-auto">
        {loopSteps.map((step, idx) => (
          <React.Fragment key={step.stage}>
            <div className="flex flex-col items-center text-center min-w-[150px]">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-2">
                {idx + 1}
              </span>
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                {step.stage}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">
                {step.node}
              </span>
              <code className="text-xs bg-gray-950 text-green-400 rounded px-2 py-1 mt-1 block">
                {step.action}
              </code>
            </div>
            {idx < loopSteps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 – My Role (The Architect)                               */
/* ------------------------------------------------------------------ */

function ArchitectRole() {
  return (
    <section className="rounded-xl border-2 border-secondary/30 bg-secondary/5 p-6 md:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <ShieldCheck className="w-7 h-7 text-secondary" />
        <h3 className="text-xl font-bold text-foreground">
          Why This Requires a Marketing Technologist.
        </h3>
      </div>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
        Standard IT vendors cannot build this. This ecosystem requires a developer
        capable of managing{" "}
        <strong className="text-foreground">API Authentication</strong>,{" "}
        <strong className="text-foreground">Webhook Listeners</strong>, and{" "}
        <strong className="text-foreground">Full-Stack Security</strong>. I act as the
        &ldquo;Bridge&rdquo; between clinical needs and technical capability, ensuring
        the system evolves as the{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">API</code> landscape
        changes.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Root export                                                       */
/* ------------------------------------------------------------------ */

export default function DevArchitecture() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <IntegrationGrid />
      <PropagationFlow />
      <AIAutomationLoop />
      <ArchitectRole />
    </div>
  );
}
