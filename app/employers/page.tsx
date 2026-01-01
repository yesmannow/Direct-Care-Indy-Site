"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope, Shield, TrendingDown, Users, Briefcase } from "lucide-react";
import { setUserPersona } from "@/lib/persona";
import { EmployerSavingsCalculator } from "@/components/EmployerSavingsCalculator";
import { OccHealthIntake } from "@/components/OccHealthIntake";
import { OccHealthPrices } from "@/components/OccHealthPrices";

export default function Employers() {
  useEffect(() => {
    setUserPersona('employer');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Direct Care Indy</h1>
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/seniors" className="hover:text-secondary transition-colors">
                Seniors (Medicare)
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors">
                Partnerships
              </Link>
              <Link href="/employers" className="text-secondary font-semibold">
                Employers
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
              <Link
                href="/join"
                className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Protect Your Crew, Not Just Your Bottom Line
            </h2>
            <p className="text-2xl mb-4">
              Employee health benefits for Indianapolis trades that actually save you money
            </p>
            <p className="text-xl mb-8 opacity-90">
              One ER visit costs more than a year of DPC membership. See the math below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Calculate Your Savings
              </a>
              <a
                href="tel:+13179566288"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Hook Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-900/30 border-l-4 border-orange-500 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-8 h-8 text-orange-400" />
                <h3 className="text-3xl font-bold text-primary">The Cost-Avoidance Math</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900/30 rounded-lg p-6 border border-red-500/50">
                  <h4 className="text-xl font-bold text-red-300 mb-2">One ER Visit</h4>
                  <p className="text-4xl font-bold text-red-400">$2,200+</p>
                  <p className="text-sm text-red-300 mt-2">Average emergency room cost</p>
                </div>
                <div className="bg-green-900/30 rounded-lg p-6 border border-green-500/50">
                  <h4 className="text-xl font-bold text-green-300 mb-2">One Year of DPC</h4>
                  <p className="text-4xl font-bold text-green-400">$828-$1,308</p>
                  <p className="text-sm text-green-300 mt-2">Depending on age tier</p>
                </div>
              </div>
              <p className="text-lg text-gray-200 mt-6 text-center">
                <strong className="text-primary">The Bottom Line:</strong> Prevent one ER visit and your DPC membership pays for itself—plus you get unlimited primary care, same-day appointments, and wholesale labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Savings Calculator */}
      <section id="calculator" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Calculate Your Business Savings</h3>
              <p className="text-xl text-gray-300">
                See how much you can save by providing DPC membership to your employees
              </p>
            </div>
            <EmployerSavingsCalculator />
          </div>
        </div>
      </section>

      {/* Occupational Health Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-primary">Occupational Health Services</h3>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Single-service options for DOT Physicals, Drug Screens, and more—perfect for businesses that need occasional occupational health services
              </p>
            </div>
            <OccHealthPrices />
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Get Instant Pricing</h3>
              <p className="text-xl text-gray-300">
                Fill out the form below to receive pricing details and a scheduling link
              </p>
            </div>
            <OccHealthIntake />
          </div>
        </div>
      </section>

      {/* Why Trades Choose DPC */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Why Indianapolis Trades Choose Direct Care Indy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Employee Retention</h4>
                <p className="text-gray-300">
                  Health benefits that actually matter. Your crew gets same-day care, no copays, and direct access to Dr. Pike.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <TrendingDown className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Cost Control</h4>
                <p className="text-gray-300">
                  Predictable monthly costs instead of surprise ER bills. One visit prevented pays for months of membership.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Crew Health</h4>
                <p className="text-gray-300">
                  DOT physicals, drug screens, and preventive care all in one place. Keep your team healthy and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Protect Your Crew?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Indianapolis businesses that are saving thousands while providing better healthcare to their employees.
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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families and businesses
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
                  <Link href="/employers" className="text-gray-300 hover:text-white transition-colors">
                    Employers
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

