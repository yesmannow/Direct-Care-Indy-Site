"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ComparisonSplit from "./ComparisonSplit";
import ROICalculator from "./ROICalculator";
import StackMap from "./StackMap";
import RoleImpact from "./RoleImpact";
import WorkflowSimulator from "./WorkflowSimulator";
import DevArchitecture from "./DevArchitecture";
import ComplianceMap from "./ComplianceMap";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const complianceItems = [
  "Elation Health: SOC 2 Type II Certified",
  "Hint Health: HIPAA Compliant & PCI Secure",
  "Spruce Health: BAA Signed",
  "Cal.com/Cal.ai: HIPAA Enterprise Plan (BAA Included)",
  "n8n: Self-Hosted (Data never leaves our server)",
];

export default function TechTabs() {
  return (
    <Tabs defaultValue="strategy">
      <TabsList>
        <TabsTrigger value="strategy">The Strategy</TabsTrigger>
        <TabsTrigger value="stack">The Stack</TabsTrigger>
        <TabsTrigger value="staff">The Staff</TabsTrigger>
        <TabsTrigger value="workflows">The Workflows</TabsTrigger>
        <TabsTrigger value="development">Development</TabsTrigger>
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
      </TabsList>
      <TabsContent value="strategy">
        <div className="space-y-8">
          <ComparisonSplit />
          <ROICalculator />
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
      <TabsContent value="development">
        <DevArchitecture />
      </TabsContent>
      <TabsContent value="compliance">
        <ComplianceMap />
      </TabsContent>
    </Tabs>
  );
}
