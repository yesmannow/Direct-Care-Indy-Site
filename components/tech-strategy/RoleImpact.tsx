"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RoleDetailPanel from "./RoleDetailPanel";

interface RoleData {
  role: string;
  before: string;
  after: string;
}

const roles: RoleData[] = [
  {
    role: "Front Desk",
    before: "Chasing Phone Tag",
    after: "Managing Exceptions Only (Cal.ai handles 80%)",
  },
  {
    role: "Provider",
    before: "2 Hours Pajama Time",
    after: "Notes finished by 5 PM (Elation AI)",
  },
  {
    role: "MA",
    before: "Manual Pre-Visit Prep & Chart Retrieval",
    after: "Auto-Populated Visit Summary (n8n + Elation)",
  },
  {
    role: "Admin",
    before: "Manual Invoicing & Reconciliation",
    after: "Real-Time Revenue Dashboard (Hint)",
  },
];

export default function RoleImpact() {
  const [activeRole, setActiveRole] = React.useState(roles[0].role);
  const current = roles.find((r) => r.role === activeRole) ?? roles[0];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">
          What Changes For Me?
        </h3>
        <p className="text-sm text-muted-foreground">
          Select your role to see how the new stack impacts your daily workflow.
        </p>
      </div>

      {/* Role Tabs */}
      <div
        className="flex gap-1 overflow-x-auto border-b border-border bg-muted/50 rounded-t-lg p-1"
        role="tablist"
        aria-label="Role selection"
      >
        {roles.map((r) => (
          <button
            key={r.role}
            type="button"
            role="tab"
            aria-selected={activeRole === r.role}
            onClick={() => setActiveRole(r.role)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeRole === r.role
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {r.role}
          </button>
        ))}
      </div>

      {/* Before vs After Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            {/* Before */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-2">
                Before
              </p>
              <p className="text-base font-medium text-red-700">
                {current.before}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-secondary hidden md:block" />
              <ArrowRight className="w-6 h-6 text-secondary rotate-90 md:hidden" />
            </div>

            {/* After */}
            <div className="rounded-lg border border-green-200 bg-green-50 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-2">
                After
              </p>
              <p className="text-base font-medium text-green-700">
                {current.after}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Role Detail Panel */}
      <RoleDetailPanel role={current.role} />
    </div>
  );
}
