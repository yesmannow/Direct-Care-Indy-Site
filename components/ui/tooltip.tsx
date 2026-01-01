"use client";

import * as React from "react";

interface TooltipProps {
  children: React.ReactNode;
}

interface TooltipTriggerProps {
  children: React.ReactNode;
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

const TooltipContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: TooltipProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TooltipContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { setIsOpen } = React.useContext(TooltipContext);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="cursor-pointer inline-block"
    >
      {children}
    </div>
  );
}

export function TooltipContent({ children, className = "" }: TooltipContentProps) {
  const { isOpen } = React.useContext(TooltipContext);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg -top-2 left-full ml-2 w-64 ${className}`}
    >
      {children}
      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
    </div>
  );
}
