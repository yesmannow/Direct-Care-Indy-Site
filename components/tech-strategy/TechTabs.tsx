"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ComparisonSplit from "./ComparisonSplit";
import ROICalculator from "./ROICalculator";
import StackMap from "./StackMap";
import RoleImpact from "./RoleImpact";
import WorkflowSimulator from "./WorkflowSimulator";
import PatientJourneys from "./PatientJourneys";
import DevArchitecture from "./DevArchitecture";
import ComplianceMap from "./ComplianceMap";
import { ShieldCheck, CheckCircle2, Clock, Heart, Target, Scaling } from "lucide-react";

const complianceItems = [
  "Elation Health: SOC 2 Type II Certified",
  "Hint Health: HIPAA Compliant & PCI Secure",
  "Spruce Health: BAA Signed",
  "Cal.com/Cal.ai: HIPAA Enterprise Plan (BAA Included)",
  "n8n: Self-Hosted (Data never leaves our server)",
];

const roiCards = [
  {
    title: "Time Savings",
    stat: "5–30+ minutes saved per patient encounter.",
    icon: Clock,
    color: "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    title: "Clinician Burnout",
    stat: "Elimination of 'Pajama Time' charting via Ambient AI.",
    icon: Heart,
    color: "bg-rose-100 text-rose-700 border-rose-300",
  },
  {
    title: "Accuracy",
    stat: "0% Error rate on membership billing & collections.",
    icon: Target,
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
  {
    title: "Scalability",
    stat: "Support multi-site growth without linear staff cost increases.",
    icon: Scaling,
    color: "bg-violet-100 text-violet-700 border-violet-300",
  },
];

export default function TechTabs() {
  return (
    <Tabs defaultValue="strategy">
      <TabsList>
        <TabsTrigger value="strategy">The Strategy</TabsTrigger>
        <TabsTrigger value="stack">The Stack</TabsTrigger>
        <TabsTrigger value="staff">The Staff</TabsTrigger>
        <TabsTrigger value="workflows">The Workflows</TabsTrigger>
        <TabsTrigger value="journeys">Patient Experience</TabsTrigger>
        <TabsTrigger value="development">Development</TabsTrigger>
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
      </TabsList>
      <TabsContent value="strategy">
        <div className="space-y-8">
          <ComparisonSplit />
          <ROICalculator />

          {/* Strategic ROI Section */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-foreground text-center">
              Strategic ROI
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roiCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border-2 p-5 space-y-3 bg-white shadow-sm flex flex-col items-center text-center"
                >
                  <div className={`rounded-lg p-2.5 ${card.color}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">
                    {card.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.stat}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </TabsContent>
      <TabsContent value="stack">
        <div className="space-y-8">
          <StackMap />
          {/* Vendor Compliance Audit Card */}
          <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-green-700" />
              <h3 className="text-lg font-bold text-foreground">
                Vendor Compliance Audit
              </h3>
            </div>
            <ul className="space-y-3">
              {complianceItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="staff">
        <RoleImpact />
      </TabsContent>
      <TabsContent value="workflows">
        <WorkflowSimulator />
      </TabsContent>
      <TabsContent value="journeys">
        <PatientJourneys />
      </TabsContent>
      <TabsContent value="development">
        <DevArchitecture />
      </TabsContent>
      <TabsContent value="compliance">
        <ComplianceMap />
      </TabsContent>
    </Tabs>
  );
}
