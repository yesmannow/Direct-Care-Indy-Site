"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserPersona, UserPersona } from "@/lib/persona";

interface DynamicHeaderProps {
  children: React.ReactNode;
}

/**
 * DynamicHeader component - now a simple no-op wrapper.
 * The DynamicCTA component below provides persona-aware CTA functionality.
 */
export function DynamicHeader({ children }: DynamicHeaderProps) {
  return <>{children}</>;
}

// Helper component to render dynamic CTA
export function DynamicCTA() {
  const [persona, setPersona] = useState<UserPersona>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPersona(getUserPersona());
  }, []);

  if (!mounted) {
    return (
      <Link
        href="/join"
        className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
      >
        Join Now
      </Link>
    );
  }

  switch (persona) {
    case 'senior':
      return (
        <Link
          href="/seniors"
          className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          View Medicare Savings Guide
        </Link>
      );
    case 'employer':
      return (
        <Link
          href="/employers"
          className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Calculate Business Savings
        </Link>
      );
    default:
      return (
        <Link
          href="/join"
          className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Join Now
        </Link>
      );
  }
}

