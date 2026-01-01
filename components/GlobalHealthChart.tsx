"use client";

import { Suspense, useEffect, useState } from "react";
import { Globe, TrendingUp, Loader2, BarChart3 } from "lucide-react";

interface WHOHealthData {
  indicator: string;
  value: number;
  country: string;
  year: number;
}

interface WHOHealthResponse {
  data: WHOHealthData[];
  source: string;
  note: string;
}

function GlobalHealthChartContent() {
  const [healthData, setHealthData] = useState<WHOHealthData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const res = await fetch('/api/who-health?indicator=chronic_disease_prevalence&country=USA');
        if (!res.ok) throw new Error('Failed to fetch health data');
        const response: WHOHealthResponse = await res.json();
        setHealthData(response.data);
      } catch (err) {
        setError('Unable to load health statistics');
        console.error('WHO health fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading health statistics...</span>
        </div>
      </div>
    );
  }

  if (error || healthData.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center gap-2 text-red-400">
          <span>{error || 'No health data available'}</span>
        </div>
      </div>
    );
  }

  const chronicDiseaseData = healthData.find(d => d.indicator.includes('Chronic'));
  const routineCareData = healthData.find(d => d.indicator.includes('Routine'));

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Global Health Benchmarks</h3>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        Data from WHO Athena validates the 90/10 routine care model
      </p>

      <div className="space-y-6">
        {chronicDiseaseData && (
          <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-orange-400" />
              <h4 className="text-lg font-semibold text-gray-100">Chronic Disease Prevalence</h4>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-orange-400">{chronicDiseaseData.value}%</span>
                <span className="text-gray-400">of US population</span>
              </div>
              <p className="text-sm text-gray-300">
                Requires ongoing primary care management (the 90%)
              </p>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
              <div
                className="bg-orange-500 h-full transition-all duration-1000"
                style={{ width: `${chronicDiseaseData.value}%` }}
              />
            </div>
          </div>
        )}

        {routineCareData && (
          <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h4 className="text-lg font-semibold text-gray-100">Routine Care Utilization</h4>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-green-400">{routineCareData.value}%</span>
                <span className="text-gray-400">of healthcare needs</span>
              </div>
              <p className="text-sm text-gray-300">
                Covered by Direct Primary Care (the 90% model)
              </p>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
              <div
                className="bg-green-500 h-full transition-all duration-1000"
                style={{ width: `${routineCareData.value}%` }}
              />
            </div>
          </div>
        )}

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
          <p className="text-sm text-gray-300">
            <strong className="text-primary">The 90/10 Model Validated:</strong> With {chronicDiseaseData?.value}%
            of the population requiring chronic disease management, Direct Primary Care covers the routine care
            that represents {routineCareData?.value}% of healthcare utilization—proving the financial and clinical
            value of the 90/10 approach.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-xs text-gray-400 text-center">
          Source: {healthData[0]?.country} Health Statistics, {healthData[0]?.year} | WHO Athena API
        </p>
      </div>
    </div>
  );
}

export function GlobalHealthChart() {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading health statistics...</span>
          </div>
        </div>
      }
    >
      <GlobalHealthChartContent />
    </Suspense>
  );
}

