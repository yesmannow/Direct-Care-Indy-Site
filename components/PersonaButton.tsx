"use client";

import { trackPersonaEvent, PersonaType } from "@/lib/track-persona";
import { ReactNode } from "react";

interface PersonaButtonProps {
  persona: PersonaType;
  action: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  metadata?: Record<string, unknown>;
}

export function PersonaButton({
  persona,
  action,
  href,
  onClick,
  children,
  className = "",
  metadata = {}
}: PersonaButtonProps) {
  const handleClick = () => {
    trackPersonaEvent(persona, action, metadata);
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
