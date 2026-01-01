"use client";

import { useState } from "react";
import { HealthChecklist } from "./HealthChecklist";
import { User, Calendar, Users } from "lucide-react";

export function PersonalizedHealthChecklist() {
  const [age, setAge] = useState<number | null>(null);
  const [sex, setSex] = useState<'male' | 'female' | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age && sex) {
      setShowResults(true);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center gap-2 mb-6">
        <User className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Personalized Health Recommendations</h3>
      </div>

      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Age
            </label>
            <input
              type="number"
              min="18"
              max="120"
              value={age || ''}
              onChange={(e) => setAge(parseInt(e.target.value) || null)}
              placeholder="Enter your age"
              className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Sex
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSex('male')}
                className={`p-4 rounded-xl border-2 transition-all min-h-[44px] ${
                  sex === 'male'
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setSex('female')}
                className={`p-4 rounded-xl border-2 transition-all min-h-[44px] ${
                  sex === 'female'
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!age || !sex}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
          >
            Get My Screening Recommendations
          </button>
        </form>
      ) : (
        <div>
          <button
            onClick={() => {
              setShowResults(false);
              setAge(null);
              setSex(null);
            }}
            className="mb-4 text-sm text-primary hover:text-secondary transition-colors"
          >
            ← Change age/sex
          </button>
          {age && sex && <HealthChecklist age={age} sex={sex} />}
        </div>
      )}
    </div>
  );
}

