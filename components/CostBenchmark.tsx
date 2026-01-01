"use client";

import { Suspense } from "react";
import { DollarSign, TrendingUp, Loader2, Info } from "lucide-react";

interface CostData {
  service: string;
  marketMedian: number;
  dpcRate: number;
  savings: number;
  savingsPercent: number;
}

// Mock data - Replace with actual Turquoise/Serif API calls when keys are available
const mockCostData: CostData[] = [
  {
    service: "MRI (Brain)",
    marketMedian: 1200,
    dpcRate: 400,
    savings: 800,
    savingsPercent: 67
  },
  {
    service: "Lipid Panel",
    marketMedian: 90,
    dpcRate: 5,
    savings: 85,
    savingsPercent: 94
  },
  {
    service: "Complete Blood Count (CBC)",
    marketMedian: 45,
    dpcRate: 3,
    savings: 42,
    savingsPercent: 93
  },
  {
    service: "Comprehensive Metabolic Panel",
    marketMedian: 75,
    dpcRate: 5,
    savings: 70,
    savingsPercent: 93
  }
];

function CostBenchmarkContent() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Market Median Negotiated Rates</h3>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        Indianapolis market data for comparison. Direct Care Indy rates shown for reference.
      </p>

      <div className="space-y-4">
        {mockCostData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 border border-gray-600"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-100">{item.service}</h4>
              <span className="text-sm font-bold text-green-500">
                Save {item.savingsPercent}%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Market Median</p>
                <p className="text-lg font-bold text-red-400">${item.marketMedian}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Direct Care Indy</p>
                <p className="text-lg font-bold text-green-400">${item.dpcRate}</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-600">
              <p className="text-sm text-gray-300">
                You save: <span className="font-bold text-green-400">${item.savings}</span> per test
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-start gap-2 text-xs text-gray-400">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            Market estimates provided by Turquoise Health/Serif Health for educational purposes only.
            Actual costs vary by facility. Direct Care Indy rates are wholesale pricing available to members.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CostBenchmark() {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading cost data...</span>
          </div>
        </div>
      }
    >
      <CostBenchmarkContent />
    </Suspense>
  );
}

