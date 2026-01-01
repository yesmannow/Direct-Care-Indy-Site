"use client";

import { Shield, Info } from "lucide-react";
import { insurancePartners } from "@/lib/data/insurance-partners";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function CatastrophicPartners() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B2B3A] mb-4">
            Find Your Perfect 10% Wraparound
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Direct Care Indy handles your daily healthcare (the 90%). Choose one of these catastrophic partners 
            for major emergencies (the 10%) to complete your healthcare stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {insurancePartners.map((plan) => (
            <div
              key={plan.name}
              className="p-8 rounded-3xl border-2 border-gray-100 hover:border-teal-500/30 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {plan.type}
                  </span>
                  <h3 className="text-2xl font-bold mt-3 text-[#1B2B3A]">{plan.name}</h3>
                </div>
                <Shield className="text-[#1B2B3A] w-8 h-8" />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm text-gray-600 italic">
                  <strong>Best for:</strong> {plan.bestFor}
                </p>
                {plan.description && (
                  <p className="text-sm text-gray-500">{plan.description}</p>
                )}
                
                <div className="pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    What It Covers (The 10%)
                  </p>
                  <ul className="grid grid-cols-1 gap-2">
                    {plan.coverage.map((item) => (
                      <li
                        key={item}
                        className="text-sm flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Est. Monthly Cost
                  </p>
                  <p className="font-bold text-lg text-[#1B2B3A]">{plan.monthlyEst}</p>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1.5 rounded-md flex items-center gap-1">
                        {plan.hsa}
                        <Info className="w-3 h-3" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs bg-gray-900 border-gray-800 text-xs">
                      As of Jan 1, 2026, DPC memberships under $150/mo (individual) or $300/mo (family) 
                      can be paid with HSA funds when paired with an HSA-qualified plan.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            <strong>Notice:</strong> Direct Care Indy is not an insurance broker. These examples are for 
            educational purposes to show how to complete your &quot;DPC Stack&quot; for maximum savings. 
            Plans shown are optimized for patients in the Indianapolis market. Always consult with a 
            licensed insurance agent for personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
