"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "Provider Time Saved",
    value: "2-4 Hours/Day",
    description: "via Ambient Scribing",
  },
  {
    label: "Admin Costs Saved",
    value: "$33k/Year",
    description: "via AI Receptionist",
  },
  {
    label: "Patient Friction",
    value: "0 Passwords",
    description: "via Magic Links",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-secondary mt-2">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
