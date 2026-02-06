"use client";

import { useState } from 'react';
import { Search, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import { SITE_ASSETS } from '@/lib/images';
import { LAB_DATA, calculateSavings } from '@/lib/labData';

interface LabSearchProps {
  variant?: 'full' | 'compact';
}

export default function WholesaleLabSearch({ variant = 'full' }: LabSearchProps) {
  const isCompact = variant === 'compact';
  const [query, setQuery] = useState('');

  const filteredLabs = LAB_DATA.filter(lab =>
    lab.name.toLowerCase().includes(query.toLowerCase())
  );

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
