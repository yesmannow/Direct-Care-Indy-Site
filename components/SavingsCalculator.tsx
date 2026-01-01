"use client";

import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

export default function SavingsCalculator() {
  const [visits, setVisits] = useState(4);

  // Traditional PPO costs
  const traditionalCopay = 50;
  const traditionalRxCost = 160;
  const traditionalVisitCost = visits * (traditionalCopay + traditionalRxCost);
  const traditionalAnnual = 7800; // Premium + deductible

  // DPC Stack costs
  const dpcMembership = 69; // Young adult tier
  const dpcMonthly = dpcMembership;
  const dpcAnnual = dpcMembership * 12;
  const dpcRxPerVisit = 3;
  const dpcVisitCost = visits * dpcRxPerVisit;
  const dpcTotal = dpcAnnual + dpcVisitCost;
  const catastrophicPremium = 2400; // High-deductible plan
  const dpcStackTotal = dpcTotal + catastrophicPremium;

  const annualSavings = traditionalAnnual - dpcStackTotal;

  // Update sticky savings bar when savings change
  useEffect(() => {
    const event = new CustomEvent('savingsUpdate', { detail: { savings: annualSavings } });
    window.dispatchEvent(event);
  }, [annualSavings]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-primary" />
        <h4 className="text-2xl font-bold text-primary">
          Your Annual Savings Calculator
        </h4>
      </div>

      {/* Visit Slider */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-primary mb-3">
          Number of doctor visits per year: {visits}
        </label>
        <input
          type="range"
          min="1"
          max="12"
          value={visits}
          onChange={(e) => setVisits(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>1 visit</span>
          <span>12 visits</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Traditional PPO */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h5 className="text-xl font-bold text-red-900 mb-4">
            Traditional PPO
          </h5>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Annual Premium:</span>
              <span className="font-semibold">$5,000</span>
            </div>
            <div className="flex justify-between">
              <span>Deductible:</span>
              <span className="font-semibold">$2,800</span>
            </div>
            <div className="flex justify-between">
              <span>Copays ({visits} visits × $50):</span>
              <span className="font-semibold">${visits * traditionalCopay}</span>
            </div>
            <div className="flex justify-between">
              <span>Rx Costs ({visits} × $160):</span>
              <span className="font-semibold">${visits * traditionalRxCost}</span>
            </div>
            <div className="border-t-2 border-red-300 pt-3 flex justify-between text-lg font-bold text-red-900">
              <span>Total Annual Cost:</span>
              <span>${traditionalAnnual.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* DPC Stack */}
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h5 className="text-xl font-bold text-green-900 mb-4">
            The DPC Stack
          </h5>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Catastrophic Plan:</span>
              <span className="font-semibold">$2,400</span>
            </div>
            <div className="flex justify-between">
              <span>DPC Membership (12 mo):</span>
              <span className="font-semibold">${dpcAnnual}</span>
            </div>
            <div className="flex justify-between">
              <span>Visit Costs ({visits} × $0):</span>
              <span className="font-semibold">$0</span>
            </div>
            <div className="flex justify-between">
              <span>Wholesale Rx ({visits} × ~$3):</span>
              <span className="font-semibold">${dpcVisitCost}</span>
            </div>
            <div className="border-t-2 border-green-300 pt-3 flex justify-between text-lg font-bold text-green-900">
              <span>Total Annual Cost:</span>
              <span>${dpcStackTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-primary text-white rounded-lg p-6 text-center">
        <p className="text-lg mb-2">Your Annual Net Savings</p>
        <p className="text-5xl font-bold">${annualSavings.toLocaleString()}</p>
        <p className="text-sm mt-2 opacity-90">
          Based on {visits} doctor visit{visits !== 1 ? "s" : ""} per year
        </p>
      </div>

      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>
          * Calculations based on average costs. Individual results may vary.
          Catastrophic plan costs vary by age and provider.
        </p>
      </div>
    </div>
  );
}
