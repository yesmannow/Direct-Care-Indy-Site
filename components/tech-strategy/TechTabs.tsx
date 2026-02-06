"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ComparisonSplit from "./ComparisonSplit";
import ROICalculator from "./ROICalculator";
import StackMap from "./StackMap";
import RoleImpact from "./RoleImpact";
import WorkflowSimulator from "./WorkflowSimulator";
import DevArchitecture from "./DevArchitecture";

export default function TechTabs() {
  return (
    <Tabs defaultValue="strategy">
      <TabsList>
        <TabsTrigger value="strategy">The Strategy</TabsTrigger>
        <TabsTrigger value="stack">The Stack</TabsTrigger>
        <TabsTrigger value="staff">The Staff</TabsTrigger>
        <TabsTrigger value="workflows">The Workflows</TabsTrigger>
        <TabsTrigger value="development">Development</TabsTrigger>
      </TabsList>
      <TabsContent value="strategy">
        <div className="space-y-8">
          <ComparisonSplit />
          <ROICalculator />
        </div>
      </TabsContent>
      <TabsContent value="stack">
        <StackMap />
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
    </Tabs>
  );
}
