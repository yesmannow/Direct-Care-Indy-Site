"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingDown, Users, AlertCircle, DollarSign, ShieldCheck, TrendingUp } from "lucide-react";
import { calculateEmployerSavings, type PlanType } from "@/lib/calculators/employerRoi";

interface EmployerSavingsCalculatorProps {
  variant?: 'full' | 'compact';
}

export function EmployerSavingsCalculator({ variant = 'full' }: EmployerSavingsCalculatorProps) {
  const isCompact = variant === 'compact';
  const [employeeCount, setEmployeeCount] = useState(5);
  const [currentPlanType, setCurrentPlanType] = useState<PlanType>("Traditional PPO");

  const roi = calculateEmployerSavings(employeeCount, currentPlanType);

  // Animated counter for total savings
  const spring = useSpring(roi.annualSavings, { stiffness: 50, damping: 30 });
  const displayValue = useTransform(spring, (current) =>
    Math.round(current)
  );

  // Update spring when savings change
  useEffect(() => {
    spring.set(roi.annualSavings);
  }, [roi.annualSavings, spring]);

  // Compact version for mega menu
  if (isCompact) {
    return (
      <div className="p-4 space-y-3 bg-transparent border-0 relative">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Business ROI Calculator</h3>
      </div>
      <p className="text-gray-300 mb-8">
        See how Direct Care Indy reduces total healthcare spend by 20-30% for small businesses
      </p>

      {/* HSA Compliance Badge */}
      <div className="mb-6 p-4 bg-green-900/30 border-2 border-green-500 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-6 h-6 text-green-400" />
          <h4 className="text-lg font-bold text-green-300">2026 HSA Compliant</h4>
        </div>
        <p className="text-sm text-green-200">
          Your business can pay DPC fees tax-free up to $150/mo per employee. All Direct Care Indy
          membership tiers qualify for HSA reimbursement.
        </p>
      </div>

      {/* Input Controls */}
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Number of Employees: <span className="text-primary font-bold">{employeeCount}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={employeeCount}
            onChange={(e) => {
              const newCount = Number(e.target.value);
              setEmployeeCount(newCount);
            }}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary min-h-[44px]"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Current Plan Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['Traditional PPO', 'HDHP/HSA', 'No Coverage'] as PlanType[]).map((plan) => (
              <button
                key={plan}
                onClick={() => {
                  setCurrentPlanType(plan);
                }}
                className={`p-4 rounded-xl border-2 transition-all min-h-[44px] ${
                  currentPlanType === plan
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <div className="text-sm font-semibold">{plan}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="space-y-4">
        {/* Current Spend */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-red-900/30 border border-red-500/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <h4 className="text-lg font-bold text-red-300">Current Annual Healthcare Spend</h4>
          </div>
          <p className="text-3xl font-bold text-red-400">${roi.currentTotalSpend.toLocaleString()}</p>
          <p className="text-sm text-red-300 mt-2">
            {currentPlanType === 'Traditional PPO' && `${employeeCount} employees × $18,500/year`}
            {currentPlanType === 'HDHP/HSA' && `${employeeCount} employees × $14,800/year (HDHP)`}
            {currentPlanType === 'No Coverage' && 'Out-of-pocket ER visits and emergency care'}
          </p>
        </motion.div>

        {/* New Hybrid Model */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h4 className="text-lg font-bold text-blue-300">New Hybrid Model (HDHP + DPC)</h4>
          </div>
          <p className="text-3xl font-bold text-blue-400">${roi.newHybridSpend.toLocaleString()}</p>
          <p className="text-sm text-blue-300 mt-2">
            HDHP Premium: ${Math.floor(roi.newHybridSpend / employeeCount - 1200).toLocaleString()}/year +
            DPC Membership: ${(1200).toLocaleString()}/year per employee
          </p>
        </motion.div>

        {/* Total Annual Savings - Animated */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-primary/20 border-2 border-primary rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-6 h-6 text-primary" />
            <h4 className="text-lg font-bold text-primary">Total Annual ROI</h4>
          </div>
          <motion.p
            className="text-5xl font-bold text-primary"
            key={roi.annualSavings}
          >
            ${displayValue.toLocaleString()}
          </motion.p>
          <p className="text-sm text-gray-300 mt-2">
            {roi.roiPercentage}% reduction in total healthcare spend
          </p>
          <div className="mt-4 pt-4 border-t border-primary/30 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Premium Savings:</span>
              <span className="font-bold text-green-400 ml-2">${roi.premiumSavings.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-gray-400">Productivity Value:</span>
              <span className="font-bold text-green-400 ml-2">${roi.productivityValue.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>

        {/* Monthly Savings */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-green-900/30 border border-green-500/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-6 h-6 text-green-400" />
            <h4 className="text-lg font-bold text-green-300">Monthly Savings</h4>
          </div>
          <p className="text-3xl font-bold text-green-400">${roi.monthlySavings.toLocaleString()}/mo</p>
          <p className="text-sm text-green-300 mt-2">
            Average savings per month with HDHP + DPC model
          </p>
        </motion.div>

        {/* Health Impact Metrics */}
        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
          <h5 className="font-semibold text-gray-200 mb-3">Health Impact (Projected)</h5>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">ER Visit Reduction:</span>
              <span className="font-bold text-orange-400 ml-2">{roi.erReduction} fewer visits/year</span>
            </div>
            <div>
              <span className="text-gray-400">Hospitalization Reduction:</span>
              <span className="font-bold text-orange-400 ml-2">{roi.hospitalizationReduction} fewer stays/year</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Based on 65% reduction in ER visits and 35% reduction in hospitalizations with proactive DPC care
          </p>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-6 p-4 bg-orange-900/30 border border-orange-500/50 rounded-lg">
        <p className="text-sm text-gray-200">
          <strong className="text-orange-400">The Math:</strong> Traditional PPO at $18,500/employee/year
          vs. HDHP + DPC at ~${Math.floor(roi.newHybridSpend / employeeCount).toLocaleString()}/employee/year.
          You save ${Math.floor(roi.premiumSavings / employeeCount).toLocaleString()} per employee annually,
          plus gain productivity value of ${Math.floor(roi.productivityValue / employeeCount).toLocaleString()}
          per employee from reduced absenteeism.
        </p>
      </div>
    </motion.div>
  );
}
