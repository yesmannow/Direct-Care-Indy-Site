"use client";
import { ClipboardCheck, ArrowRight } from 'lucide-react';

interface OccHealthPriceItem {
  service: string;
  price: string;
}

const occHealthPrices: OccHealthPriceItem[] = [
  { service: "DOT Physical", price: "$125" },
  { service: "5-Panel Drug Screen", price: "$55" },
  { service: "Return-to-Work Eval", price: "$75" },
  { service: "Onboarding Physical", price: "$95" },
];

export function OccHealthPrices() {
  return (
    <div className="bg-white dark:bg-gray-800/50 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6 text-[#1B2B3A] dark:text-gray-100">
        <ClipboardCheck className="w-6 h-6" />
        <h3 className="text-xl font-bold">A la Carte Occupational Health</h3>
      </div>
      <div className="space-y-4">
        {occHealthPrices.map((item) => (
          <div key={item.service} className="flex justify-between items-center py-3 border-b border-gray-50 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-300 font-medium">{item.service}</span>
            <span className="text-[#1B2B3A] dark:text-gray-100 font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-[#1B2B3A] dark:bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-600 dark:hover:bg-secondary transition-colors font-bold min-h-[44px]">
        Upgrade to Full Crew Coverage <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
