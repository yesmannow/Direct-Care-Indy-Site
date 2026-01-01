"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionContextType {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  type?: "single";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
}

export function Accordion({
  type = "single",
  collapsible = true,
  className = "",
  children,
  value: controlledValue,
  onValueChange: controlledOnValueChange
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | null>(null);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const onValueChange = isControlled ? controlledOnValueChange : setInternalValue;

  const handleValueChange = (itemValue: string) => {
    if (value === itemValue && collapsible) {
      onValueChange?.(null);
    } else {
      onValueChange?.(itemValue);
    }
  };

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, className = "", children }: AccordionItemProps) {
  return (
    <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  itemValue: string;
}

export function AccordionTrigger({ className = "", children, itemValue }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const { value, onValueChange } = context;
  const isOpen = value === itemValue;

  return (
    <button
      type="button"
      onClick={() => onValueChange(itemValue)}
      className={`w-full flex items-center justify-between py-4 text-left font-semibold transition-colors hover:text-primary ${className}`}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
      />
    </button>
  );
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
  itemValue: string;
}

export function AccordionContent({ className = "", children, itemValue }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const { value } = context;
  const isOpen = value === itemValue;

  if (!isOpen) return null;

  return (
    <div className={`pb-4 pt-0 ${className}`}>
      {children}
    </div>
  );
}

