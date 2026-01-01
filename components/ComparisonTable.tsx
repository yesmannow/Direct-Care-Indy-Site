"use client";

import { Clock, DollarSign, MessageSquare, Calendar, X, Check } from "lucide-react";

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "Wait Times for Appointments",
      traditional: "2-3 weeks average",
      dpc: "Same-day or next-day",
      icon: Calendar,
      traditionalBad: true,
    },
    {
      feature: "Time with Your Doctor",
      traditional: "7-10 minutes average",
      dpc: "30-60 minutes per visit",
      icon: Clock,
      traditionalBad: true,
    },
    {
      feature: "Cost per Visit",
      traditional: "$150+ (copays + deductible)",
      dpc: "$0 per visit",
      icon: DollarSign,
      traditionalBad: true,
    },
    {
      feature: "Doctor Access",
      traditional: "Call center gatekeepers",
      dpc: "Text Dr. Pike directly",
      icon: MessageSquare,
      traditionalBad: true,
    },
    {
      feature: "Annual Cost (Young Adult)",
      traditional: "$7,800/year",
      dpc: "$3,264/year (with catastrophic)",
      icon: DollarSign,
      traditionalBad: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 text-center">
        <h3 className="text-3xl font-bold mb-2">The 90/10 Model Comparison</h3>
        <p className="text-lg opacity-90">
          See why Direct Care covers 90% of your healthcare needs better than traditional insurance
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-300">
              <th className="p-4 text-left font-bold text-gray-700">Feature</th>
              <th className="p-4 text-center font-bold text-red-700">Traditional Insurance</th>
              <th className="p-4 text-center font-bold text-green-700">Direct Care Indy</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-900">{item.feature}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{item.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{item.dpc}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {comparisons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="border-b border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900">{item.feature}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-13">
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-xs font-semibold text-red-700 mb-1">Traditional</p>
                  <div className="flex items-start gap-1">
                    <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{item.traditional}</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-700 mb-1">Direct Care</p>
                  <div className="flex items-start gap-1">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-900">{item.dpc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center">
        <p className="text-2xl font-bold mb-2">Annual Net Savings: $4,536+</p>
        <p className="opacity-90">
          That&apos;s the power of the DPC Stack: Better care + Lower costs
        </p>
      </div>
    </div>
  );
}
