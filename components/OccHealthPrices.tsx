"use client"
import { ClipboardCheck, ArrowRight } from 'lucide-react';

const occHealthPrices = [
  { service: "DOT Physical", price: "$125" },
  { service: "5-Panel Drug Screen", price: "$55" },
  { service: "Return-to-Work Eval", price: "$75" },
  { service: "Onboarding Physical", price: "$95" },
];

export function OccHealthPrices() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-[#1B2B3A]">
        <ClipboardCheck className="w-6 h-6" />
        <h3 className="text-xl font-bold">A la Carte Occupational Health</h3>
      </div>
      <div className="space-y-4">
        {occHealthPrices.map((item) => (
          <div key={item.service} className="flex justify-between items-center py-3 border-b border-gray-50">
            <span className="text-gray-600 font-medium">{item.service}</span>
            <span className="text-[#1B2B3A] font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-[#1B2B3A] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors font-bold">
        Upgrade to Full Crew Coverage <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
