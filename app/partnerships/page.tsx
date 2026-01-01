"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope, Users, TrendingDown, UserCheck, Award, Wrench, Truck } from "lucide-react";
import { PersonaButton } from "@/components/PersonaButton";
import { OccHealthPrices } from "@/components/OccHealthPrices";

export default function Partnerships() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    employeeCount: "",
    industry: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteEmployees, setQuoteEmployees] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send to an API
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: "Predictable Budgeting",
      description: "One fixed monthly fee per employee. No more guessing about premiums or surprise medical bills. Budget with confidence.",
    },
    {
      icon: UserCheck,
      title: "Reduced Absenteeism",
      description: "Study-backed 40% reduction in sick days. Same-day access means minor ailments don&apos;t snowball into weeks off work.",
    },
    {
      icon: Award,
      title: "Recruiting Edge",
      description: "Stand out in a competitive trades market by offering health benefits that larger companies can&apos;t match for flexibility and value.",
    },
  ];

  const targetIndustries = [
    { icon: Wrench, name: "HVAC Contractors" },
    { icon: Truck, name: "Landscaping Companies" },
    { icon: Wrench, name: "Auto Repair Shops" },
    { icon: Truck, name: "Construction Trades" },
  ];

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
              <Link href="/providers" className="hover:text-secondary transition-colors">
                Our Team
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
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
              <Link href="/blog/indiana-medigap-birthday-rule-2026" className="hover:text-secondary transition-colors">
                Blog
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

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-12 h-12" />
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Small Business Healthcare Partnerships
            </h2>
            <p className="text-2xl mb-4">
              Offer a real benefit to your crew for less than $3/day
            </p>
            <p className="text-xl">
              Healthcare that works for trades, small businesses, and the people who keep Indianapolis running.
            </p>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Perfect for Indianapolis Trades & Small Businesses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {targetIndustries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={idx} className="bg-background p-4 rounded-lg text-center">
                  <Icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="font-semibold text-primary">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Small Businesses Choose Direct Care Indy
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="bg-secondary text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Occupational Health Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">
              Not Ready for Full Memberships?
            </h3>
            <p className="text-center text-gray-800 mb-8 max-w-2xl mx-auto">
              Start with a single service to see the difference direct care makes for your business.
            </p>
            <OccHealthPrices />
            <p className="text-center text-gray-800 mt-6 italic">
              Start with a single service, or protect your whole crew with a full membership to eliminate insurance headaches forever.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              The Math That Makes Sense
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-900 mb-4">
                  Traditional Group Insurance
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Per employee/month:</span>
                    <span className="font-bold">$400-600</span>
                  </li>
                  <li className="flex justify-between">
                    <span>High deductibles:</span>
                    <span className="font-bold">$3,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Copays per visit:</span>
                    <span className="font-bold">$50-75</span>
                  </li>
                  <li className="flex justify-between border-t-2 border-red-300 pt-3">
                    <span className="font-bold">Annual per employee:</span>
                    <span className="font-bold text-xl">$6,000+</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-900 mb-4">
                  DPC Partnership Model
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Per employee/month:</span>
                    <span className="font-bold">$69-109</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Visit fees:</span>
                    <span className="font-bold">$0</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Copays:</span>
                    <span className="font-bold">$0</span>
                  </li>
                  <li className="flex justify-between border-t-2 border-green-300 pt-3">
                    <span className="font-bold">Annual per employee:</span>
                    <span className="font-bold text-xl">$828-1,308</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-secondary to-primary text-white rounded-lg text-center shadow-xl border-2 border-white/20">
              <p className="text-lg mb-2 font-semibold">Potential Annual Savings Per Employee</p>
              <p className="text-5xl font-bold mb-2">$4,700+</p>
              <p className="text-sm mt-2 opacity-90">
                * Plus reduced productivity loss from faster care access
              </p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs opacity-75">
                  Perfect for HVAC, Landscape, Auto Repair, and Construction businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Tool */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">
              Quick Quote Calculator
            </h3>
            <p className="text-center text-gray-800 mb-8">
              See your potential savings instantly with our small business healthcare calculator
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <label className="block text-lg font-semibold text-primary mb-4">
                  Number of Employees: {quoteEmployees}
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={quoteEmployees}
                  onChange={(e) => setQuoteEmployees(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-sm text-gray-800 mt-2">
                  <span>1 employee</span>
                  <span>50 employees</span>
                </div>
              </div>

              {/* Cost Calculations */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border-2 border-red-200 p-5 rounded-lg">
                  <h4 className="font-bold text-red-900 mb-3">Traditional Insurance</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between text-sm">
                      <span>Per employee/month:</span>
                      <span className="font-semibold">$500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total monthly:</span>
                      <span className="font-semibold">${(quoteEmployees * 500).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-red-300 pt-2 font-bold text-red-900">
                      <span>Annual Cost:</span>
                      <span>${(quoteEmployees * 6000).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 p-5 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-3">DPC Partnership</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between text-sm">
                      <span>Per employee/month:</span>
                      <span className="font-semibold">$89</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total monthly:</span>
                      <span className="font-semibold">${(quoteEmployees * 89).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-green-300 pt-2 font-bold text-green-900">
                      <span>Annual Cost:</span>
                      <span>${(quoteEmployees * 1068).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-lg p-6 text-center">
                <p className="text-lg mb-2">Your Fixed Monthly Investment</p>
                <p className="text-5xl font-bold mb-4">${(quoteEmployees * 89).toLocaleString()}/mo</p>
                <div className="border-t border-white/30 pt-4">
                  <p className="text-lg mb-1">Projected Annual Savings vs. Traditional Insurance</p>
                  <p className="text-4xl font-bold">${(quoteEmployees * 4700).toLocaleString()}</p>
                  <p className="text-sm mt-2 opacity-90">
                    That&apos;s ${Math.round((quoteEmployees * 4700) / 12).toLocaleString()} saved per month for your business
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-800 mb-4">
                  * Calculations based on average costs. DPC can be combined with catastrophic coverage for complete protection.
                </p>
                <PersonaButton
                  persona="small_business_owner"
                  action="click_custom_quote"
                  href="#inquiry-form"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  metadata={{ employees: quoteEmployees }}
                >
                  Get Your Custom Quote
                </PersonaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">
              Get a Customized Solution
            </h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Number of Employees *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.employeeCount}
                      onChange={(e) =>
                        setFormData({ ...formData, employeeCount: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="hvac">HVAC</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="auto">Auto Repair</option>
                      <option value="construction">Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
                >
                  Request Partnership Information
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-3">
                  Thank You!
                </h4>
                <p className="text-gray-700 mb-6">
                  We&apos;ll contact you within 1 business day to discuss a customized healthcare solution for your team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-secondary hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer with Local SEO */}
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
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                    Partnerships
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
