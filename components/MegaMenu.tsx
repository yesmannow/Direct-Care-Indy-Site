"use client";

import { useState, useRef, useEffect, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Menu,
  X,
  ChevronDown,
  Users,
  Heart,
  BookOpen,
} from "lucide-react";
import { EmployerSavingsCalculator } from "@/components/EmployerSavingsCalculator";
import WholesaleLabSearch from "@/components/WholesaleLabSearch";
import { SITE_ASSETS } from "@/lib/images";
import Image from "next/image";

// Mobile Menu Item Component
function MobileMenuItem({
  item,
  onLinkClick
}: {
  item: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    description?: string;
    columns: Array<{
      title: string;
      links: Array<{ href: string; label: string; description?: string }>;
    }>;
  };
  onLinkClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;

  return (
    <div className="border-b border-border pb-4 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-secondary" />
          <span className="font-bold text-foreground">{item.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      <div>
        {isExpanded && (
          <div className="pl-12 pt-2 space-y-2">
            {item.columns.map((column) =>
              column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick}
                  className="block px-4 py-2 rounded-lg text-foreground hover:text-secondary transition-colors font-semibold"
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function MegaMenu() {
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="bg-secondary p-2 rounded-xl">
              <Stethoscope className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter text-foreground">
                PIKE<span className="text-secondary">MEDICAL</span>
              </span>
              <p className="text-xs text-muted-foreground font-medium">
                Direct Primary Care
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-secondary transition-colors font-medium">
              Home
            </Link>
            <Link href="/membership" className="text-foreground hover:text-secondary transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/services-included" className="text-foreground hover:text-secondary transition-colors font-medium">
              Services
            </Link>
            <Link href="/for-employers" className="text-foreground hover:text-secondary transition-colors font-medium">
              Employers
            </Link>
            <Link href="/seniors" className="text-foreground hover:text-secondary transition-colors font-medium">
              Seniors
            </Link>
            <Link href="/join" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors interactive-element">
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
