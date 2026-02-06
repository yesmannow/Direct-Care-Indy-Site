"use client";

import { useState } from 'react';
import { Search, TrendingDown, Check } from 'lucide-react';
import Image from 'next/image';
import { SITE_ASSETS } from '@/lib/images';
import { LAB_DATA, calculateSavings, LabTest } from '@/lib/labData';

interface LabSearchProps {
  variant?: 'full' | 'compact';
}

export default function WholesaleLabSearch({ variant = 'full' }: LabSearchProps) {
  const isCompact = variant === 'compact';
  const [query, setQuery] = useState('');
  const [selectedLabs, setSelectedLabs] = useState<LabTest[]>([]);

  const filteredLabs = LAB_DATA.filter(lab =>
    lab.name.toLowerCase().includes(query.toLowerCase())
  );

  // Group filtered labs by category
  const groupedLabs = filteredLabs.reduce<Record<string, LabTest[]>>((acc, lab) => {
    if (!acc[lab.category]) acc[lab.category] = [];
    acc[lab.category].push(lab);
    return acc;
  }, {});

  const toggleLabSelection = (lab: LabTest) => {
    setSelectedLabs(prev => {
      const isSelected = prev.some(l => l.name === lab.name);
      if (isSelected) {
        return prev.filter(l => l.name !== lab.name);
      } else {
        return [...prev, lab];
      }
    });
  };

  const isLabSelected = (lab: LabTest) => {
    return selectedLabs.some(l => l.name === lab.name);
  };

  // Calculate totals for selected labs
  const retailTotal = selectedLabs.reduce((sum, lab) => sum + lab.hospital, 0);
  const memberTotal = selectedLabs.reduce((sum, lab) => sum + lab.dpc, 0);
  const savingsTotal = retailTotal - memberTotal;

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
                      <span className="font-black text-slate-900 text-sm ml-2 shrink-0">
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
            Object.entries(groupedLabs).map(([category, labs]) => (
              <div key={category}>
                <div className="text-xs font-semibold uppercase tracking-wide text-teal-400 mt-4 mb-2 flex items-center gap-2">
                  {category} <span className="text-gray-500">({labs.length})</span>
                </div>
                {labs.map((lab, i) => {
                  const savings = calculateSavings(lab.hospital, lab.dpc);
                  const selected = isLabSelected(lab);
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between bg-white/5 p-4 rounded-xl border transition-all mb-3 ${
                        selected 
                          ? 'border-teal-500 bg-teal-500/10' 
                          : 'border-white/10 hover:border-teal-500/50'
                      }`}
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
                      <div className="text-right ml-4 flex items-center gap-3">
                        <div>
                          <span className="text-xs uppercase text-teal-400 font-bold block mb-1">
                            Your Price
                          </span>
                          <span className="text-2xl font-black text-teal-400">
                            {lab.dpc === 0 ? 'FREE' : `$${lab.dpc}`}
                          </span>
                          {lab.hsaEligible && (
                            <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded ml-2">HSA</span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleLabSelection(lab)}
                          aria-label={selected ? `Remove ${lab.name} from selection` : `Add ${lab.name} to selection`}
                          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                            selected
                              ? 'bg-teal-500 text-white hover:bg-teal-600'
                              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                          }`}
                        >
                          {selected ? (
                            <span className="flex items-center gap-1">
                              <Check className="w-4 h-4" /> Added
                            </span>
                          ) : (
                            'Select'
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <p className="mt-6 text-[10px] text-gray-500 italic">
          *Hospital rates based on Indianapolis market median 2026. DPC prices reflect Direct Care Indy wholesale rates for members.
        </p>
      </div>

      {/* Sticky Calculator Footer */}
      {selectedLabs.length > 0 && (
        <div 
          className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-teal-500 shadow-2xl z-50 py-4 px-4"
          role="region"
          aria-label="Lab test savings calculator"
          aria-live="polite"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-2 text-slate-900">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-bold text-sm md:text-base">
                  Selected Tests: <span className="text-teal-600">{selectedLabs.length}</span>
                </span>
                <span className="text-xs md:text-sm">
                  Retail Cost: <span className="line-through text-gray-500">${retailTotal.toLocaleString()}</span>
                </span>
                <span className="font-bold text-green-600 text-sm md:text-base">
                  Member Price: ${memberTotal.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-teal-600">
                  YOU SAVE: ${savingsTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
