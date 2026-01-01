"use client";

import { useState } from "react";
import { Heart, Ambulance } from "lucide-react";

export default function ModelSwitcher() {
  const [selectedModel, setSelectedModel] = useState<"90" | "10">("90");

  const dayToDayItems = [
    "Strep throat & infections",
    "Ear infections",
    "Stitches & minor wounds",
    "Chronic disease management (diabetes, hypertension)",
    "Annual wellness exams",
    "Preventive care & screenings",
    "Minor procedures (cryotherapy, skin biopsies)",
    "Lab work & diagnostic tests",
  ];

  const emergencyItems = [
    "Major surgery (heart, orthopedic)",
    "ICU & hospital stays",
    "Emergency room visits",
    "Cancer treatments",
    "Major trauma & accidents",
    "Organ transplants",
    "Complex surgical procedures",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h4 className="text-2xl font-bold text-primary mb-6 text-center">
        The 90/10 Model Explained
      </h4>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8 max-w-2xl mx-auto">
        <button
          onClick={() => setSelectedModel("90")}
          className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
            selectedModel === "90"
              ? "bg-secondary text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6" />
            <span>Day-to-Day Needs (90%)</span>
          </div>
        </button>
        <button
          onClick={() => setSelectedModel("10")}
          className={`flex-1 py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
            selectedModel === "10"
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Ambulance className="w-6 h-6" />
            <span>Major Emergencies (10%)</span>
          </div>
        </button>
      </div>

      {/* Content Display */}
      {selectedModel === "90" ? (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-xl font-bold text-green-900">
                Covered by Direct Care Indy
              </h5>
              <p className="text-green-700">Your DPC membership handles these</p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {dayToDayItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-white rounded border border-green-300">
            <p className="text-sm text-gray-700">
              <strong className="text-green-900">The Mechanic Analogy:</strong>{" "}
              Direct Care Indy is like your mechanic for oil changes, tire
              rotations, and routine maintenance. You don&apos;t file an
              insurance claim for an oil change—you shouldn&apos;t for routine
              healthcare either.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Ambulance className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-xl font-bold text-blue-900">
                Covered by Your Catastrophic Insurance
              </h5>
              <p className="text-blue-700">
                For the rare, expensive events (the other 10%)
              </p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {emergencyItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-white rounded border border-blue-300">
            <p className="text-sm text-gray-700">
              <strong className="text-blue-900">The Mechanic Analogy:</strong>{" "}
              Insurance is for when you total your car—major accidents or
              catastrophic events. You pair a high-deductible catastrophic plan
              with DPC to cover these rare but expensive situations.
            </p>
          </div>
        </div>
      )}

      {/* Bottom Explanation */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          <strong className="text-primary">The Smart Strategy:</strong> Use
          Direct Care Indy for the 90% of care you actually use, and keep a
          low-cost catastrophic plan for the 10% you hope to never need.
        </p>
      </div>
    </div>
  );
}
