"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const painPoints = [
  "Manual Charting (Pajama Time)",
  "Portal Passwords (MML Friction)",
  "Phone Tag (Voicemail)",
  "Batch Billing",
];

const solutions = [
  "Ambient Scribing (Note Assist)",
  "Magic Links (No Passwords)",
  "AI Receptionist (Call Sara)",
  "Real-Time Automation",
];

export default function ComparisonSplit() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Current State */}
      <Card className="border-red-300/50 bg-gray-50">
        <CardHeader>
          <CardTitle className="text-lg text-red-700">
            Current: iSalus + MyMedicalLocker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Future State */}
      <Card className="border-secondary/30 bg-secondary/5">
        <CardHeader>
          <CardTitle className="text-lg text-secondary">
            New: Elation + Hint + AI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {solutions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
