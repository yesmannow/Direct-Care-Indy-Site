"use client";

import { useState, useEffect } from "react";
import { DollarSign, TrendingDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StickySavingsBarProps {
  projectedSavings?: number;
  isVisible?: boolean;
}

export function StickySavingsBar({ projectedSavings = 3732, isVisible = true }: StickySavingsBarProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [savings, setSavings] = useState(projectedSavings);

  // Listen for savings updates from other components
  useEffect(() => {
    const handleSavingsUpdate = (event: CustomEvent<{ savings: number }>) => {
      setSavings(event.detail.savings);
    };

    window.addEventListener('savingsUpdate' as any, handleSavingsUpdate as EventListener);
    return () => {
      window.removeEventListener('savingsUpdate' as any, handleSavingsUpdate as EventListener);
    };
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary text-white shadow-2xl border-t-2 border-white/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium opacity-90">
                  Projected Annual Savings with the DPC Stack
                </p>
                <p className="text-2xl font-bold">
                  ${savings.toLocaleString()}
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm opacity-90">
                <DollarSign className="w-4 h-4" />
                <span>No copays • Wholesale pricing • Direct access</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/pricing"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="View pricing details"
              >
                See How
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Dismiss savings bar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

