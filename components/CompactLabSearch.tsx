"use client";

import { useState, useEffect } from 'react';
import { Search as SearchIcon, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const LAB_DATA = [
  { name: "A1C (Diabetes Monitoring)", hospital: 173, dpc: 8 },
  { name: "Lipid Panel (Cholesterol)", hospital: 176, dpc: 6 },
  { name: "CBC (Complete Blood Count)", hospital: 115, dpc: 5 },
  { name: "TSH (Thyroid Stimulating Hormone)", hospital: 195, dpc: 12 },
  { name: "Vitamin D Deficiency", hospital: 240, dpc: 18 },
  { name: "CMP (Comprehensive Metabolic)", hospital: 145, dpc: 7 },
  { name: "PSA (Prostate Screening)", hospital: 185, dpc: 15 },
  { name: "Strep Throat (Rapid)", hospital: 95, dpc: 0 },
  { name: "Hemoglobin A1C", hospital: 173, dpc: 8 },
  { name: "Basic Metabolic Panel (BMP)", hospital: 130, dpc: 6 },
  { name: "Urinalysis", hospital: 80, dpc: 4 },
  { name: "Liver Function Panel", hospital: 165, dpc: 9 },
  { name: "Thyroid Panel (Complete)", hospital: 220, dpc: 15 },
  { name: "Testosterone (Total)", hospital: 195, dpc: 12 },
  { name: "B12 (Vitamin B12)", hospital: 150, dpc: 10 },
];

export function CompactLabSearch() {
  const [query, setQuery] = useState('');

  const filteredLabs = LAB_DATA.filter(lab =>
    lab.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5); // Show only top 5 results

  const calculateSavings = (hospital: number, dpc: number) => {
    if (dpc === 0) return 100;
    return Math.round(((hospital - dpc) / hospital) * 100);
  };

  return (
    <div className="bg-[#1B2B3A] text-white rounded-xl p-6 shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">Wholesale Lab Directory</h3>
        <p className="text-xs text-teal-400 flex items-center gap-1">
          <TrendingDown className="w-4 h-4" />
          Save 90%+ vs. hospitals
        </p>
      </div>

      <div className="relative mb-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
        <motion.input
          type="text"
          placeholder="Search labs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none relative z-0"
          animate={{
            boxShadow: [
              "0 0 0px rgba(20, 184, 166, 0)",
              "0 0 8px rgba(20, 184, 166, 0.3)",
              "0 0 0px rgba(20, 184, 166, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {filteredLabs.length === 0 ? (
          <div className="text-center py-4 text-gray-400 text-sm">
            No labs found
          </div>
        ) : (
          filteredLabs.map((lab, i) => {
            const savings = calculateSavings(lab.hospital, lab.dpc);
            return (
              <div
                key={i}
                className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:border-teal-500/50 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-0.5 truncate">{lab.name}</h4>
                  <p className="text-xs text-gray-400">
                    <span className="line-through">${lab.hospital}</span>
                    {savings > 0 && (
                      <span className="ml-2 text-teal-400 font-semibold">
                        Save {savings}%
                      </span>
                    )}
                  </p>
                </div>
                <div className="text-right ml-2 shrink-0">
                  <span className="text-lg font-black text-teal-400">
                    {lab.dpc === 0 ? 'FREE' : `$${lab.dpc}`}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {query && filteredLabs.length > 0 && (
        <p className="mt-3 text-xs text-gray-500 text-center">
          Showing top results. <a href="/pricing" className="text-teal-400 hover:underline">View all labs</a>
        </p>
      )}
    </div>
  );
}

