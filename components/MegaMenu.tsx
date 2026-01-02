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
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current + 2;
      const goingUp = y < lastY.current - 2;

      setIsShrunk(y > 100);
      setIsHidden(false);

      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (y > 200 && goingDown) {
        hideTimer.current = window.setTimeout(() => setIsHidden(true), 2000);
      }
      if (y <= 10 || goingUp) {
        setIsHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isShrunk ? 'backdrop-blur-md bg-card/80 border-b border-border' : 'bg-card border-b border-border'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${isShrunk ? 'h-16' : 'h-20'}`}>
          <Link href="/" className="flex items-center gap-3 group" aria-label="Direct Care Indy">
            <Image
              src={SITE_ASSETS.logos.primary}
              alt="Direct Care Indy"
              width={160}
              height={40}
              sizes="(max-width: 768px) 120px, 160px"
              priority
              className={`transition-transform duration-300 ${isShrunk ? 'scale-95' : 'scale-100'} group-hover:scale-105 active:scale-95`}
            />
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
            <Link href="/employers" className="text-foreground hover:text-secondary transition-colors font-medium">
              Employers
            </Link>
            <Link href="/seniors" className="text-foreground hover:text-secondary transition-colors font-medium">
              Seniors
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors font-medium">
                About Us
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all">
                <ul className="py-2">
                  <li>
                    <Link href="/providers" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/indiana-medigap-birthday-rule-2026" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/join" className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors interactive-element">
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
