"use client";

import { ShieldCheck, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function HsaStatusTracker() {
  return (
    <div className="bg-[#1B2B3A] text-white p-6 rounded-3xl border border-teal-500/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-teal-400 w-5 h-5" />
          <h3 className="font-bold text-lg">2026 HSA Compliance</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-4 h-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-gray-900 border-gray-800 text-xs">
              Notice 2026-5: DPC fees {'<'}$150/mo (indiv) or $300/mo (family) are HSA-compatible medical expenses.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-white/5 p-4 rounded-2xl">
          <p className="text-xs text-gray-400 uppercase tracking-widest">DPC Fee Limit</p>
          <p className="text-2xl font-bold text-teal-400">$150<span className="text-sm font-normal text-gray-500">/mo</span></p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Indy Plan Fee</p>
          <p className="text-2xl font-bold text-white">$69-$109<span className="text-sm font-normal text-gray-500">/mo</span></p>
        </div>
      </div>
      <p className="mt-4 text-xs text-center text-teal-400 font-medium">✅ Status: HSA Eligible (Jan 1, 2026)</p>
    </div>
  );
}
