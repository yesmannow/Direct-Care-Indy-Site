"use client";

import * as React from "react";
import { DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ROICalculator() {
  const [dailyCalls, setDailyCalls] = React.useState(40);
  const [avgDuration, setAvgDuration] = React.useState(5);
  const providerHourlyValue = 200;
  const staffRate = 25;
  const automationRate = 0.7;

  const hoursSavedPerDay =
    (dailyCalls * avgDuration * automationRate) / 60;
  const moneySavedPerDay = hoursSavedPerDay * staffRate;
  const annualSavings = Math.round(moneySavedPerDay * 260);

  return (
    <Card className="border-secondary/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <DollarSign className="w-5 h-5 text-secondary" />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Daily Inbound Calls */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="daily-calls"
              className="text-sm font-medium text-foreground"
            >
              Daily Inbound Calls
            </label>
            <span className="text-sm font-bold text-secondary">{dailyCalls}</span>
          </div>
          <input
            id="daily-calls"
            type="range"
            min={10}
            max={100}
            step={1}
            value={dailyCalls}
            onChange={(e) => setDailyCalls(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10</span>
            <span>100</span>
          </div>
        </div>

        {/* Avg Call Duration */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="avg-duration"
              className="text-sm font-medium text-foreground"
            >
              Avg. Call Duration (min)
            </label>
            <span className="text-sm font-bold text-secondary">{avgDuration}</span>
          </div>
          <input
            id="avg-duration"
            type="range"
            min={2}
            max={10}
            step={1}
            value={avgDuration}
            onChange={(e) => setAvgDuration(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>2 min</span>
            <span>10 min</span>
          </div>
        </div>

        {/* Fixed Values */}
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span>
            Provider Hourly Value: <strong>${providerHourlyValue}/hr</strong>
          </span>
          <span>
            Staff Rate: <strong>${staffRate}/hr</strong>
          </span>
          <span>
            Cal.ai Automation: <strong>{automationRate * 100}%</strong>
          </span>
        </div>

        {/* Result */}
        <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">
            Annual Admin Savings
          </p>
          <p className="text-4xl font-bold text-green-700">
            ${annualSavings.toLocaleString()}
          </p>
          <p className="text-xs text-green-600 mt-2">
            Based on {hoursSavedPerDay.toFixed(1)} hrs saved/day × 260 work days
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
