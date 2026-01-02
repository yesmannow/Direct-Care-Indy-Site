"use client";

import { MessageSquare, DollarSign, Calendar, FlaskConical, Pill } from "lucide-react";
import { motion } from "framer-motion";
import { HsaStatusTracker } from "./HsaStatusTracker";

export default function PortalPreview() {
  const recentLabs = [
    { name: "Lipid Panel", date: "Dec 15, 2025", price: 5.0, status: "Complete" },
    { name: "A1C (Diabetes)", date: "Dec 15, 2025", price: 8.0, status: "Complete" },
    { name: "Comprehensive Metabolic", date: "Nov 2, 2025", price: 12.0, status: "Complete" },
  ];

  const currentMeds = [
    { name: "Lisinopril", dosage: "10mg", price: 4.0, savings: 156 },
    { name: "Metformin", dosage: "500mg", price: 3.0, savings: 117 },
    { name: "Atorvastatin", dosage: "20mg", price: 5.0, savings: 195 },
  ];

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-[#1B2B3A] dark:to-[#0F1A23] rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-primary mb-2">
          Your Patient Dashboard Preview
        </h3>
        <p className="text-gray-800 dark:text-gray-300">
          Experience the transparency and convenience of Direct Care Indy
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* My Care Team */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Direct Access</h4>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border-l-4 border-blue-500 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-bold text-sm">
                Dr. P
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Dr. James Pike</p>
                <p className="text-sm text-gray-700 bg-white rounded-lg p-3 shadow-sm">
                  &quot;Your A1C is down to 5.7! Let&apos;s adjust your plan today via text.&quot;
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
        >
          <HsaStatusTracker />
        </motion.div>

        {/* Recent Labs with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">My Labs</h4>
          </div>

          {/* Glassmorphism overlay for privacy */}
          <div className="relative">
            <div className="space-y-3 blur-sm">
              {recentLabs.map((lab, idx) => (
                <div key={idx} className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{lab.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lab.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-semibold">
                        {lab.status}
                      </span>
                      <p className="text-xl font-bold text-orange-600 dark:text-orange-400 mt-1">${lab.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Glassmorphism overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-gray-900/60 backdrop-blur-lg rounded-lg border border-gray-300/50 dark:border-gray-600/50 shadow-lg">
              <div className="text-center p-6">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-2">Join to View</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Your lab results are visible only to you</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3 text-center backdrop-blur-sm">
            <p className="text-sm font-semibold text-orange-900 dark:text-orange-200">
              Wholesale pricing visible in your dashboard
            </p>
          </div>
        </motion.div>

        {/* Current Medications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Pill className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Current Medications</h4>
          </div>

          <div className="space-y-3">
            {currentMeds.map((med, idx) => (
              <div
                key={idx}
                className="bg-linear-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border-l-4 border-purple-500 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{med.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{med.dosage}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Saved ${med.savings} vs. retail this year
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ${med.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 text-center backdrop-blur-sm">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-200">
              Wholesale pricing—members pay what we pay, no markups
            </p>
          </div>
        </motion.div>

        {/* Wholesale Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-primary">Wholesale Access</h4>
          </div>

          <div className="bg-linear-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-5 border-l-4 border-green-600 backdrop-blur-sm">
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Members Pay What We Pay</h5>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <p>Wholesale lab work (no insurance markups)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <p>Transparent pricing shown before every service</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <p>Average savings: 60-90% vs. retail pricing</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-center backdrop-blur-sm">
            <p className="text-sm font-semibold text-green-900 dark:text-green-200">
              Total Estimated Savings This Year: <span className="text-xl">$287+</span>
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
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is just a preview. Your actual dashboard will be personalized with your health data.
        </p>
        <a
          href="/join"
          className="inline-block bg-linear-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  );
}
