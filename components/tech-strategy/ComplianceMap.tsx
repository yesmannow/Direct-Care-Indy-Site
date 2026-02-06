"use client";

import * as React from "react";
import {
  Globe,
  Mail,
  Zap,
  ShieldCheck,
  Lock,
  Stethoscope,
  Briefcase,
  MessageSquare,
  Phone,
} from "lucide-react";

interface Tool {
  name: string;
  icon: React.ElementType;
}

interface Zone {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  zoneColor: string;
  zoneHoverColor: string;
  tools: Tool[];
  data: string[];
}

const zones: Zone[] = [
  {
    title: "Marketing",
    subtitle: "Public Data",
    badge: "Non-PHI",
    badgeColor: "bg-blue-100 text-blue-800",
    zoneColor: "border-blue-200 bg-blue-50/50",
    zoneHoverColor: "hover:bg-blue-50",
    tools: [
      { name: "Mautic", icon: Mail },
      { name: "Website", icon: Globe },
    ],
    data: ["Email", "First Name"],
  },
  {
    title: 'The "Air Lock"',
    subtitle: "Automation",
    badge: "Encrypted Tunnel",
    badgeColor: "bg-purple-100 text-purple-800",
    zoneColor: "border-purple-200 bg-purple-50/50",
    zoneHoverColor: "hover:bg-purple-50",
    tools: [{ name: "n8n (Self-Hosted)", icon: Zap }],
    data: ['"The Guard" — strips sensitive data before sending to marketing'],
  },
  {
    title: "Clinical",
    subtitle: "HIPAA Safe Harbor",
    badge: "BAA Signed / HIPAA Secure",
    badgeColor: "bg-green-100 text-green-800",
    zoneColor: "border-green-200 bg-green-50/50",
    zoneHoverColor: "hover:bg-green-50",
    tools: [
      { name: "Elation", icon: Stethoscope },
      { name: "Hint", icon: Briefcase },
      { name: "Spruce", icon: MessageSquare },
      { name: "Cal.ai", icon: Phone },
    ],
    data: ["DOB", "SSN", "Medical Notes", "Chat Logs"],
  },
];

export default function ComplianceMap() {
  const [hoveredZone, setHoveredZone] = React.useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">
          Where the Data Lives & How It Is Protected
        </h3>
        <p className="text-sm text-muted-foreground">
          Hover over each zone to see the tools and data types within it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {zones.map((zone, index) => {
          const isHovered = hoveredZone === index;
          return (
            <div
              key={zone.title}
              onMouseEnter={() => setHoveredZone(index)}
              onMouseLeave={() => setHoveredZone(null)}
              className={`rounded-xl border-2 p-5 transition-all duration-200 ${zone.zoneColor} ${zone.zoneHoverColor} ${
                isHovered ? "shadow-lg scale-[1.02]" : ""
              }`}
            >
              {/* Zone Header */}
              <div className="mb-4">
                <h4 className="font-bold text-foreground text-lg">
                  {zone.title}
                </h4>
                <p className="text-xs text-muted-foreground">{zone.subtitle}</p>
                <span
                  className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${zone.badgeColor}`}
                >
                  {zone.badge}
                </span>
              </div>

              {/* Tools */}
              <div className="space-y-2 mb-4">
                <h5 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {zone.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 border border-current/10 rounded-lg px-2.5 py-1.5 transition-all ${
                        isHovered
                          ? "shadow-sm border-current/20"
                          : ""
                      }`}
                    >
                      <tool.icon className="w-3.5 h-3.5" />
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Types */}
              <div className="space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Data
                </h5>
                <ul className="space-y-1">
                  {zone.data.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-foreground/80 flex items-start gap-1.5"
                    >
                      <Lock className="w-3 h-3 mt-0.5 shrink-0 text-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flow Arrows */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span>
          Data flows from Clinical → Air Lock (stripped) → Marketing. PHI never
          leaves the Clinical zone.
        </span>
      </div>
    </div>
  );
}
