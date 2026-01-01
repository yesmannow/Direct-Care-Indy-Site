"use client";

import { TrendingDown, Award } from "lucide-react";

export function ValueBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl p-8 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Indianapolis Value Leader</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5" />
              <h4 className="font-bold text-lg">Senior Tier: $109/mo</h4>
            </div>
            <p className="text-sm opacity-90">
              Beats Indianapolis average of $200+ per month for seniors
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5" />
              <h4 className="font-bold text-lg">Family Cap: $250/mo</h4>
            </div>
            <p className="text-sm opacity-90">
              Unbeatable value for Indianapolis families of any size
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-sm opacity-90">
          Proudly serving the 46268 area and all of Indianapolis with transparent, affordable direct primary care
        </p>
      </div>
    </div>
  );
}
