"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ComparisonSplit from "./ComparisonSplit";
import TechGrid from "./TechGrid";
import JourneyTimeline from "./JourneyTimeline";
import StatsCards from "./StatsCards";

export default function TechTabs() {
  return (
    <Tabs defaultValue="pivot">
      <TabsList>
        <TabsTrigger value="pivot">The Pivot</TabsTrigger>
        <TabsTrigger value="stack">The Stack</TabsTrigger>
        <TabsTrigger value="journey">The Journey</TabsTrigger>
        <TabsTrigger value="roi">ROI</TabsTrigger>
      </TabsList>
      <TabsContent value="pivot">
        <ComparisonSplit />
      </TabsContent>
      <TabsContent value="stack">
        <TechGrid />
      </TabsContent>
      <TabsContent value="journey">
        <JourneyTimeline />
      </TabsContent>
      <TabsContent value="roi">
        <StatsCards />
      </TabsContent>
    </Tabs>
  );
}
