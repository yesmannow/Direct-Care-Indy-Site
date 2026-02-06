"use client";

import { useState } from "react";
import { Scale, ClipboardCheck, AlertCircle } from "lucide-react";

// BMI Assessment Component
function BodyMassIndexCalculator() {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weightPounds, setWeightPounds] = useState("");
  const [computedValue, setComputedValue] = useState<number | null>(null);

  const isValidInput = () => {
    const feet = parseFloat(heightFeet || "0");
    const inches = parseFloat(heightInches || "0");
    const pounds = parseFloat(weightPounds || "0");
    const totalInches = (feet * 12) + inches;
    return totalInches > 0 && pounds > 0;
  };

  const processCalculation = () => {
    const feetToInches = parseFloat(heightFeet || "0") * 12;
    const totalInches = feetToInches + parseFloat(heightInches || "0");
    const poundsValue = parseFloat(weightPounds);

    if (totalInches > 0 && poundsValue > 0) {
      const bmiFormula = (poundsValue / (totalInches * totalInches)) * 703;
      setComputedValue(Math.round(bmiFormula * 10) / 10);
    }
  };

  const clearFields = () => {
    setHeightFeet("");
    setHeightInches("");
    setWeightPounds("");
    setComputedValue(null);
  };

  const getCategoryDetails = (value: number) => {
    if (value < 18.5) return { label: "Underweight", bgColor: "#3B82F6", textColor: "text-white" };
    if (value < 25) return { label: "Healthy Weight", bgColor: "#10B981", textColor: "text-white" };
    if (value < 30) return { label: "Overweight", bgColor: "#F97316", textColor: "text-white" };
    return { label: "Obesity", bgColor: "#EF4444", textColor: "text-white" };
  };

  const category = computedValue ? getCategoryDetails(computedValue) : null;
  const requiresConsultation = computedValue && (computedValue < 18.5 || computedValue >= 25);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center">
          <Scale className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">BMI Calculator</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height (Feet)</label>
            <input
              type="number"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
              placeholder="5"
              min="0"
              max="8"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none text-gray-900 min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height (Inches)</label>
            <input
              type="number"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
              placeholder="10"
              min="0"
              max="11"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none text-gray-900 min-h-[44px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (Lbs)</label>
          <input
            type="number"
            value={weightPounds}
            onChange={(e) => setWeightPounds(e.target.value)}
            placeholder="160"
            min="0"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none text-gray-900 min-h-[44px]"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={processCalculation}
          disabled={!isValidInput()}
          className="flex-1 bg-secondary text-secondary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
        >
          Calculate BMI
        </button>
        {computedValue && (
          <button
            onClick={clearFields}
            className="px-6 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px]"
          >
            Reset
          </button>
        )}
      </div>

      {computedValue && category && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Your BMI Score</p>
            <p className="text-5xl font-black text-gray-900 mb-3">{computedValue}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: category.bgColor }}>
              <span className={`font-bold ${category.textColor}`}>{category.label}</span>
            </div>
          </div>

          {requiresConsultation && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-2 text-gray-700">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-gray-600" />
                <p className="text-sm">
                  Discuss this metric with Dr. Pike during your next visit.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Preventive Care Screening Component
function PreventiveScreeningGuide() {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedSex, setSelectedSex] = useState<"male" | "female" | "">("");
  const [displayRecommendations, setDisplayRecommendations] = useState(false);

  const ageRanges = [
    "18-20", "21-29", "30-39", "40-44", "45-49", "50-59", "60-69", "70+"
  ];

  const determineScreenings = () => {
    if (!selectedAge || !selectedSex) return [];

    // Extract age number - handle "70+" case explicitly
    const ageNumber = selectedAge === "70+" ? 70 : parseInt(selectedAge.split("-")[0]);
    const screeningList: string[] = [];

    // Universal screening for all members
    screeningList.push("Annual Metabolic Panel (included in membership)");

    // Age and sex-specific screenings based on USPSTF
    if (selectedSex === "female") {
      if (ageNumber >= 21) {
        screeningList.push("Cervical Cancer Screening Recommended");
      }
      if (ageNumber >= 40) {
        screeningList.push("Mammogram Recommended");
      }
    }

    if (selectedSex === "male" && ageNumber >= 50) {
      screeningList.push("Prostate Health Discussion Recommended");
    }

    if (ageNumber >= 45) {
      screeningList.push("Colon Cancer Screening Recommended");
    }

    return screeningList;
  };

  const handleSubmit = () => {
    if (selectedAge && selectedSex) {
      setDisplayRecommendations(true);
    }
  };

  const resetForm = () => {
    setSelectedAge("");
    setSelectedSex("");
    setDisplayRecommendations(false);
  };

  const screenings = displayRecommendations ? determineScreenings() : [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center">
          <ClipboardCheck className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Preventive Screening Guide</h3>
      </div>

      {!displayRecommendations ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Age Range</label>
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:outline-none text-gray-900 min-h-[44px]"
            >
              <option value="">Select your age range</option>
              {ageRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Sex</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedSex("male")}
                className={`py-3 px-6 rounded-lg border-2 font-semibold transition-all min-h-[44px] ${
                  selectedSex === "male"
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setSelectedSex("female")}
                className={`py-3 px-6 rounded-lg border-2 font-semibold transition-all min-h-[44px] ${
                  selectedSex === "female"
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedAge || !selectedSex}
            className="w-full bg-secondary text-secondary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
          >
            Show My Recommendations
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={resetForm}
            className="mb-4 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
          >
            ← Update age/sex
          </button>

          <div className="space-y-3">
            {screenings.map((screening, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-900 font-medium">{screening}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              These recommendations are based on general USPSTF guidelines. Schedule with Dr. Pike for personalized preventive care planning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Container Component
export function WellnessSection() {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Know Your Numbers</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Interactive wellness tools to help you understand your health metrics and screening needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <BodyMassIndexCalculator />
            <PreventiveScreeningGuide />
          </div>
        </div>
      </div>
    </section>
  );
}
