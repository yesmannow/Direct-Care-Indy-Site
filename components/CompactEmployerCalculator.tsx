"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingDown, DollarSign, ShieldCheck } from "lucide-react";
import { calculateEmployerSavings, type PlanType } from "@/lib/calculators/employerRoi";

interface CompactEmployerCalculatorProps {
  variant?: 'full' | 'compact';
}

export function CompactEmployerCalculator({ variant = 'compact' }: CompactEmployerCalculatorProps) {
  const [employeeCount, setEmployeeCount] = useState(5);
  const [currentPlanType, setCurrentPlanType] = useState<PlanType>("Traditional PPO");

  const roi = calculateEmployerSavings(employeeCount, currentPlanType);

  // Animated counter for total savings
  const spring = useSpring(roi.annualSavings, { stiffness: 50, damping: 30 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(roi.annualSavings);
  }, [roi.annualSavings, spring]);

  const isCompact = variant === 'compact';

  // Ultra-compact mode for Mega Menu
  if (isCompact) {
    return (
      <div className="p-4 space-y-3 bg-transparent border-0">
        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Est. Annual Savings
        </h4>
        <motion.div
          className="text-3xl font-black text-teal-600 dark:text-teal-400 tracking-tighter"
          key={roi.annualSavings}
        >
          ${displayValue.toLocaleString()}+
        </motion.div>
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <ShieldCheck className="w-3 h-3 text-green-500" />
          <span>HSA Compliant 2026</span>
        </div>
        <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Employees: {employeeCount}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </div>
      </div>
    );
  }

  // Full mode (existing implementation)
  return (
    <div className="bg-gray-800 dark:bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-teal-400" />
        <h3 className="text-lg font-bold text-white">Business ROI Calculator</h3>
      </div>

      {/* HSA Badge */}
      <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-4 h-4 text-green-400" />
          <h4 className="text-sm font-bold text-green-300">2026 HSA Compliant</h4>
        </div>
        <p className="text-xs text-green-200">
          DPC fees tax-free up to $150/mo per employee
        </p>
      </div>

      {/* Compact Controls */}
      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">
            Employees: <span className="text-teal-400 font-bold">{employeeCount}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2">
            Current Plan
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['Traditional PPO', 'HDHP/HSA', 'No Coverage'] as PlanType[]).map((plan) => (
              <button
                key={plan}
                onClick={() => setCurrentPlanType(plan)}
                className={`p-2 rounded-lg border text-xs transition-all ${
                  currentPlanType === plan
                    ? 'bg-teal-500/20 border-teal-500 text-teal-400'
                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                {plan === 'Traditional PPO' ? 'PPO' : plan === 'HDHP/HSA' ? 'HDHP' : 'None'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3">
          <p className="text-xs text-red-300 mb-1">Current Spend</p>
          <p className="text-xl font-bold text-red-400">
            ${roi.currentTotalSpend.toLocaleString()}
          </p>
        </div>

        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-3">
          <p className="text-xs text-blue-300 mb-1">New Model (HDHP + DPC)</p>
          <p className="text-xl font-bold text-blue-400">
            ${roi.newHybridSpend.toLocaleString()}
          </p>
        </div>

        <div className="bg-teal-500/20 border-2 border-teal-500 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-teal-400" />
            <h4 className="text-sm font-bold text-teal-400">Annual ROI</h4>
          </div>
          <motion.p
            className="text-3xl font-bold text-teal-400"
            key={roi.annualSavings}
          >
            ${displayValue.toLocaleString()}
          </motion.p>
          <p className="text-xs text-gray-300 mt-1">
            {roi.roiPercentage}% reduction
          </p>
        </div>
      </div>
    </div>
  );
}

