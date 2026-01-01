"use client";

import { MessageSquare, Pill, DollarSign, Calendar, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export default function PortalPreview() {
  const recentMeds = [
    { name: "Atorvastatin 20mg", quantity: "30 tablets", price: 6.0, retail: 45.0 },
    { name: "Lisinopril 10mg", quantity: "30 tablets", price: 4.0, retail: 38.0 },
    { name: "Metformin 500mg", quantity: "60 tablets", price: 8.0, retail: 52.0 },
  ];

  const recentLabs = [
    { name: "Lipid Panel", date: "Dec 15, 2025", price: 5.0, status: "Complete" },
    { name: "A1C (Diabetes)", date: "Dec 15, 2025", price: 8.0, status: "Complete" },
    { name: "Comprehensive Metabolic", date: "Nov 2, 2025", price: 12.0, status: "Complete" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-primary mb-2">
          Your Patient Dashboard Preview
        </h3>
        <p className="text-gray-600">
          Experience the transparency and convenience of Direct Care Indy
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* My Care Team */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Direct Access</h4>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                Dr. P
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Dr. James Pike</p>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-3 shadow-sm">
                  &quot;Your lab results look great! Let&apos;s chat today about your progress. Available for a call this afternoon?&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">Sent via Spruce Health • 9:15 AM</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Dr. Pike typically responds within 1 hour</span>
          </div>
        </motion.div>

        {/* HSA Tracker */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">HSA Tracker</h4>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">2026 HSA Status</span>
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                ✓ Eligible
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">DPC Membership</span>
                <span className="font-semibold text-gray-900">$69.00/mo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">HSA Contribution</span>
                <span className="font-semibold text-green-600">-$69.00</span>
              </div>
              <div className="border-t border-green-300 pt-2 flex justify-between">
                <span className="font-semibold text-gray-900">Out-of-Pocket Cost</span>
                <span className="font-bold text-xl text-green-600">$0</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-600 italic">
            💡 As of January 1, 2026, DPC memberships are HSA-eligible. Pay with pre-tax dollars!
          </p>
        </motion.div>

        {/* Wholesale Medications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Pill className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Wholesale Medications</h4>
          </div>

          <div className="space-y-3">
            {recentMeds.map((med, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{med.name}</p>
                    <p className="text-sm text-gray-600">{med.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">${med.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 line-through">Retail: ${med.retail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                  <TrendingDown className="w-4 h-4" />
                  <span>Saved ${(med.retail - med.price).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-purple-100 rounded-lg p-3 text-center">
            <p className="text-sm font-semibold text-purple-900">
              Total Medication Savings This Year: <span className="text-xl">$405</span>
            </p>
          </div>
        </motion.div>

        {/* Recent Labs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Wholesale Labs</h4>
          </div>

          <div className="space-y-3">
            {recentLabs.map((lab, idx) => (
              <div key={idx} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{lab.name}</p>
                    <p className="text-sm text-gray-600">{lab.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {lab.status}
                    </span>
                    <p className="text-xl font-bold text-orange-600 mt-1">${lab.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-orange-100 rounded-lg p-3 text-center">
            <p className="text-sm font-semibold text-orange-900">
              Total Lab Savings This Year: <span className="text-xl">$287</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600 mb-4">
          This is just a preview. Your actual dashboard will be personalized with your health data.
        </p>
        <a
          href="/join"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  );
}
