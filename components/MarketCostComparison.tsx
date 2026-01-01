"use client";

import { Suspense, useEffect, useState } from "react";
import { TrendingDown, DollarSign, AlertCircle, Info, Loader2 } from "lucide-react";

interface MarketCostData {
  service: string;
  cptCode?: string;
  hospitalPPO: number;
  marketMedian: number;
  dpcRate: number;
  savings: number;
  savingsPercent: number;
}

interface MarketCostResponse {
  data: MarketCostData[];
  source: string;
  location: string;
}

function MarketCostComparisonContent() {
  const [marketData, setMarketData] = useState<MarketCostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await fetch('/api/market-costs');
        if (!res.ok) throw new Error('Failed to fetch market data');
        const response: MarketCostResponse = await res.json();
        setMarketData(response.data);
      } catch (err) {
        setError('Unable to load market comparison data');
        console.error('Market cost fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading market data...</span>
        </div>
      </div>
    );
  }

  if (error || marketData.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>{error || 'No market data available'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <TrendingDown className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Market Cost Comparison</h3>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        Indianapolis market median negotiated rates vs. Direct Care Indy wholesale pricing
      </p>

      <div className="space-y-4">
        {marketData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-100 text-lg">{item.service}</h4>
                {item.cptCode && (
                  <p className="text-xs text-gray-400 mt-1">CPT: {item.cptCode}</p>
                )}
              </div>
              <span className="text-sm font-bold text-green-500 bg-green-500/20 px-3 py-1 rounded-full">
                Save {item.savingsPercent}%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3">
                <p className="text-xs text-red-300 mb-1">Hospital PPO</p>
                <p className="text-xl font-bold text-red-400">${item.hospitalPPO}</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-3">
                <p className="text-xs text-yellow-300 mb-1">Market Median</p>
                <p className="text-xl font-bold text-yellow-400">${item.marketMedian}</p>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                <p className="text-xs text-green-300 mb-1">Our DPC Rate</p>
                <p className="text-xl font-bold text-green-400">${item.dpcRate}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-600">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Your Savings:</span>
                <span className="text-lg font-bold text-green-400">${item.savings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-start gap-2 text-xs text-gray-400">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-300">Market Estimates:</strong> Hospital PPO rates and Market Median
            estimates provided by Turquoise Health/Serif Health for educational purposes only. Actual costs vary
            by facility, insurance plan, and geographic location. Direct Care Indy rates are wholesale pricing
            available to members and may vary based on actual provider costs.
          </p>
        </div>
      </div>
    </div>
  );
}

export function MarketCostComparison() {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading market data...</span>
          </div>
        </div>
      }
    >
      <MarketCostComparisonContent />
    </Suspense>
  );
}

