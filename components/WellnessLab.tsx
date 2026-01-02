"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

interface WellnessResult {
  bmi: number;
  health: string;
  healthy_bmi_range: string;
}

export function WellnessLab() {
  const [inputs, setInputs] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male'
  });
  const [result, setResult] = useState<WellnessResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    if (!inputs.weight || !inputs.height || !inputs.age) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/wellness/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      if (!res.ok) {
        throw new Error('Calculation failed');
      }

      const data = await res.json();

      if (data.data) {
        setResult(data.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError('Unable to calculate wellness metrics. Please try again.');
      console.error('Wellness calculation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-xl max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <Activity className="text-primary w-8 h-8" />
        <h2 className="text-2xl font-bold text-gray-100">Personal Wellness Lab</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Weight (kg)</label>
          <input
            type="number"
            value={inputs.weight}
            onChange={(e) => setInputs({...inputs, weight: e.target.value})}
            placeholder="70"
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Height (cm)</label>
          <input
            type="number"
            value={inputs.height}
            onChange={(e) => setInputs({...inputs, height: e.target.value})}
            placeholder="175"
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Age</label>
          <input
            type="number"
            value={inputs.age}
            onChange={(e) => setInputs({...inputs, age: e.target.value})}
            placeholder="35"
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Gender</label>
          <select
            value={inputs.gender}
            onChange={(e) => setInputs({...inputs, gender: e.target.value})}
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handleCalculate}
        disabled={loading || !inputs.weight || !inputs.height || !inputs.age}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            Analyze My Wellness Metrics
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-teal-900/30 rounded-2xl border border-teal-500/50"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-teal-300 uppercase font-bold mb-2">Your BMI</p>
              <h3 className="text-4xl font-black text-teal-100">{result.bmi}</h3>
            </div>
            <div>
              <p className="text-sm text-teal-300 uppercase font-bold mb-2">Status</p>
              <h3 className="text-xl font-bold text-teal-100">{result.health}</h3>
            </div>
          </div>
          {result.healthy_bmi_range && (
            <div className="mt-4 pt-4 border-t border-teal-500/30">
              <p className="text-sm text-teal-200">
                Healthy BMI Range: <span className="font-semibold">{result.healthy_bmi_range}</span>
              </p>
            </div>
          )}
          <div className="mt-4 flex items-start gap-2 text-sm text-teal-200 italic">
            <Info className="w-4 h-4 mt-1 shrink-0" />
            <p>Note: This is a general screening. Members get deeper metabolic insights through Dr. Pike&apos;s specialized Internal Medicine labs.</p>
          </div>
        </motion.div>
      )}

      {result && parseFloat(result.bmi.toString()) > 25 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-orange-900/30 border border-orange-500 rounded-xl"
        >
          <p className="text-gray-200 mb-4 font-semibold">
            Learn how our Metabolic Health Wellness tier can help you reach your goals.
          </p>
          <Link
            href="/services"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors min-h-[44px] flex items-center justify-center"
          >
            View Wellness Services
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
