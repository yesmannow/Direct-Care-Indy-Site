"use client";

import { useState } from 'react';
import { Search, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import { SITE_ASSETS } from '@/lib/images';

interface LabSearchProps {
  variant?: 'full' | 'compact';
}

const LAB_DATA = [
  { name: "A1C (Diabetes Monitoring)", hospital: 173, dpc: 8 },
  { name: "Lipid Panel (Cholesterol)", hospital: 176, dpc: 6 },
  { name: "CBC (Complete Blood Count)", hospital: 115, dpc: 5 },
  { name: "TSH (Thyroid Stimulating Hormone)", hospital: 195, dpc: 12 },
  { name: "Vitamin D Deficiency", hospital: 240, dpc: 18 },
  { name: "CMP (Comprehensive Metabolic)", hospital: 145, dpc: 7 },
  { name: "PSA (Prostate Screening)", hospital: 185, dpc: 15 },
  { name: "Strep Throat (Rapid)", hospital: 95, dpc: 0 }, // Often included free
  { name: "Hemoglobin A1C", hospital: 173, dpc: 8 },
  { name: "Basic Metabolic Panel (BMP)", hospital: 130, dpc: 6 },
  { name: "Urinalysis", hospital: 80, dpc: 4 },
  { name: "Liver Function Panel", hospital: 165, dpc: 9 },
  { name: "Thyroid Panel (Complete)", hospital: 220, dpc: 15 },
  { name: "Testosterone (Total)", hospital: 195, dpc: 12 },
  { name: "B12 (Vitamin B12)", hospital: 150, dpc: 10 },
  { name: "Folate", hospital: 140, dpc: 8 },
  { name: "Iron Panel", hospital: 175, dpc: 11 },
  { name: "Ferritin", hospital: 160, dpc: 9 },
  { name: "C-Reactive Protein (CRP)", hospital: 145, dpc: 8 },
  { name: "Homocysteine", hospital: 180, dpc: 12 },
  { name: "Lipid Panel (Extended)", hospital: 200, dpc: 10 },
  { name: "HbA1c (Glycated Hemoglobin)", hospital: 173, dpc: 8 },
  { name: "Glucose (Fasting)", hospital: 85, dpc: 5 },
  { name: "Creatinine", hospital: 75, dpc: 4 },
  { name: "BUN (Blood Urea Nitrogen)", hospital: 70, dpc: 4 },
  { name: "Electrolyte Panel", hospital: 120, dpc: 6 },
  { name: "Magnesium", hospital: 95, dpc: 6 },
  { name: "Phosphorus", hospital: 90, dpc: 5 },
  { name: "Calcium", hospital: 85, dpc: 5 },
  { name: "Albumin", hospital: 80, dpc: 4 },
  { name: "Total Protein", hospital: 75, dpc: 4 },
  { name: "Bilirubin (Total)", hospital: 100, dpc: 6 },
  { name: "ALT (Alanine Aminotransferase)", hospital: 110, dpc: 7 },
  { name: "AST (Aspartate Aminotransferase)", hospital: 110, dpc: 7 },
  { name: "Alkaline Phosphatase", hospital: 105, dpc: 6 },
  { name: "GGT (Gamma-Glutamyl Transferase)", hospital: 125, dpc: 8 },
  { name: "LDH (Lactate Dehydrogenase)", hospital: 135, dpc: 8 },
  { name: "Troponin", hospital: 250, dpc: 20 },
  { name: "BNP (Brain Natriuretic Peptide)", hospital: 280, dpc: 22 },
  { name: "ProBNP", hospital: 300, dpc: 25 },
  { name: "D-Dimer", hospital: 195, dpc: 15 },
  { name: "PT/INR (Prothrombin Time)", hospital: 125, dpc: 8 },
  { name: "PTT (Partial Thromboplastin Time)", hospital: 130, dpc: 8 },
  { name: "Fibrinogen", hospital: 140, dpc: 9 },
  { name: "Cortisol (AM)", hospital: 165, dpc: 11 },
  { name: "Cortisol (PM)", hospital: 165, dpc: 11 },
  { name: "ACTH", hospital: 220, dpc: 18 },
  { name: "Insulin (Fasting)", hospital: 185, dpc: 14 },
  { name: "C-Peptide", hospital: 200, dpc: 16 },
  { name: "HbA1c with eAG", hospital: 180, dpc: 9 },
  { name: "Microalbumin", hospital: 95, dpc: 6 },
  { name: "Creatinine Clearance", hospital: 150, dpc: 10 },
];

export default function WholesaleLabSearch({ variant = 'full' }: LabSearchProps) {
  const isCompact = variant === 'compact';
  const [query, setQuery] = useState('');

  const filteredLabs = LAB_DATA.filter(lab =>
    lab.name.toLowerCase().includes(query.toLowerCase())
  );

  const calculateSavings = (hospital: number, dpc: number) => {
    if (dpc === 0) return 100; // Free = 100% savings
    return Math.round(((hospital - dpc) / hospital) * 100);
  };

  // Compact version - simplified for mega menu
  if (isCompact) {
    return (
      <div className="max-w-md w-full p-2 relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200">
        <div className="relative z-10 space-y-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 w-4 h-4" />
            <input
              type="text"
              placeholder="Search wholesale labs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-xl focus:border-teal-500 transition-all outline-none py-2 pl-10 text-sm"
            />
          </div>

          <div className="max-h-[300px] overflow-y-auto rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-inner">
            <div className="divide-y divide-slate-100">
              {filteredLabs.length === 0 ? (
                <div className="text-center py-4 text-gray-400 text-xs">
                  No labs found matching &quot;{query}&quot;
                </div>
              ) : (
                filteredLabs.map((lab, i) => {
                  const savings = calculateSavings(lab.hospital, lab.dpc);
                  return (
                    <div
                      key={i}
                      className="p-3 flex justify-between items-center hover:bg-teal-50/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-slate-800 text-xs truncate">{lab.name}</p>
                        <p className="text-[10px] text-teal-600 font-bold tracking-widest uppercase">Pike Choice</p>
                      </div>
                      <span className="font-black text-slate-900 text-sm ml-2 flex-shrink-0">
                        {lab.dpc === 0 ? 'FREE' : `$${lab.dpc}`}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full version - complete lab directory
  return (
    <div className="bg-[#1B2B3A] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
      {/* Clinical Texture Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={SITE_ASSETS.ui.texture}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Wholesale Lab Directory</h2>
          <p className="text-teal-400 font-medium flex items-center gap-2">
            <TrendingDown className="w-5 h-5" /> Savings of 90% or more compared to Indy hospitals
          </p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search common labs (e.g. Thyroid, A1C, Cholesterol)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          {filteredLabs.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No labs found matching &quot;{query}&quot;
            </div>
          ) : (
            filteredLabs.map((lab, i) => {
              const savings = calculateSavings(lab.hospital, lab.dpc);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:border-teal-500/50 transition-all"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{lab.name}</h4>
                    <p className="text-xs text-gray-400">
                      Hospital Rate: <span className="line-through">${lab.hospital}</span>
                      {savings > 0 && (
                        <span className="ml-2 text-teal-400 font-semibold">
                          Save {savings}%
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-xs uppercase text-teal-400 font-bold block mb-1">
                      Your Price
                    </span>
                    <span className="text-2xl font-black text-teal-400">
                      {lab.dpc === 0 ? 'FREE' : `$${lab.dpc}`}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <p className="mt-6 text-[10px] text-gray-500 italic">
          *Hospital rates based on Indianapolis market median 2026. DPC prices reflect Direct Care Indy wholesale rates for members.
        </p>
      </div>
    </div>
  );
}
