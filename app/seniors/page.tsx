"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Award, DollarSign } from "lucide-react";
import { MedicareDpcFaq } from "@/components/MedicareDpcFaq";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";
import { SeniorSavingsCalculator } from "@/components/SeniorSavingsCalculator";
import { PersonalizedHealthChecklist } from "@/components/PersonalizedHealthChecklist";
import { setUserPersona } from "@/lib/persona";
import PricingTiers from "@/components/PricingTiers";

export default function Seniors() {
  useEffect(() => {
    setUserPersona('senior');
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Specialized Care for Seniors (65+)
            </h2>
            <p className="text-2xl mb-4">
              Pulmonary specialist expertise with Primary Care convenience
            </p>
            <p className="text-xl mb-8">
              Medicare-eligible? Your $109/month membership is now 100% HSA-eligible as of January 1, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Senior Savings Block */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border-l-4 border-orange-500 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                <h3 className="text-3xl font-bold text-primary">Senior Savings & HSA Eligibility</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  <strong className="text-primary">Medicare-eligible?</strong> Your membership is now a <strong>Qualified Medical Expense</strong>. Using your HSA to pay your $109 monthly fee effectively reduces your &apos;out-of-pocket&apos; cost by up to 30% depending on your tax bracket.
                </p>
                <p>
                  We are <strong className="text-green-600 dark:text-green-400">100% HSA-compliant as of January 1, 2026</strong> under the One Big Beautiful Bill Act (OBBB). Since our Senior Tier is $109/mo—well under the $150 federal cap—you can use tax-free dollars to pay for your care.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-6 border border-orange-200 dark:border-orange-800">
                  <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    The Triple Threat Strategy
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">1.</span>
                      <span><strong>Medicare</strong> covers your 10% (hospitalizations, major surgeries)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">2.</span>
                      <span><strong>Direct Care Indy</strong> handles your 90% (day-to-day care, complex chronic management with Dr. Pike&apos;s Pulmonary expertise)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">3.</span>
                      <span><strong>HSA</strong> pays for your membership with tax-free dollars (save up to 30%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Savings Calculator */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Calculate Your Savings</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how much you can save by combining Medigap plan switching with HSA-eligible Direct Primary Care
              </p>
            </div>
            <SeniorSavingsCalculator />
          </div>
        </div>
      </section>

      {/* HSA Tracker */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <HsaStatusTracker />
          </div>
        </div>
      </section>

      {/* Pricing Tiers - Focus on Senior */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">Transparent Pricing</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our Senior Tier at $109/month is well under the $150 HSA limit
              </p>
            </div>
            <PricingTiers />
          </div>
        </div>
      </section>

      {/* Personalized Health Recommendations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Personalized Health Recommendations</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Get evidence-based screening recommendations based on your age and sex
              </p>
            </div>
            <PersonalizedHealthChecklist />
          </div>
        </div>
      </section>

      {/* Medicare + DPC FAQ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MedicareDpcFaq />
        </div>
      </section>

      {/* Why Dr. Pike for Seniors */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Why Dr. Pike&apos;s Pulmonary Expertise Matters for Seniors
              </h3>
              <div className="flex items-center justify-center gap-2 text-secondary font-semibold mb-2">
                <Award className="w-5 h-5" />
                <span>D.O., FCCP, FACP</span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border-l-4 border-secondary">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Dr. Pike&apos;s <strong className="text-primary">Pulmonary Medicine expertise</strong> is particularly valuable for the 65+ demographic, who often face complex respiratory conditions, COPD, chronic lung disease, and age-related pulmonary challenges. As a Fellow of the American College of Chest Physicians (FCCP), he brings specialist-level knowledge directly to your primary care—eliminating the need for separate pulmonary referrals and reducing care fragmentation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This <strong className="text-primary">complex care capability</strong>—combined with the convenience and affordability of Direct Primary Care—makes our $109/month senior membership a market-leading value. You get pulmonary specialist expertise without the specialist copays, referral delays, or fragmented care coordination that traditional insurance models require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience Better Senior Care?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Direct Care Indy and get pulmonary specialist expertise with Primary Care convenience—all HSA-eligible.
          </p>
          <a
            href="tel:+13179566288"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (317) 956-6288
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/seniors" className="text-gray-300 hover:text-white transition-colors">
                    Seniors (Medicare)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/indiana-medigap-birthday-rule-2026" className="text-gray-300 hover:text-white transition-colors">
                    2026 Indiana Birthday Rule Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP</p>
            <p className="text-sm opacity-90">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

