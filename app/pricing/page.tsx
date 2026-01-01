import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope, Check } from "lucide-react";
import SavingsCalculator from "@/components/SavingsCalculator";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Child",
      ageRange: "0-18 years",
      price: 30,
      features: [
        "Unlimited sick visits",
        "Well-child checkups",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "No copays or deductibles",
      ],
    },
    {
      name: "Young Adult",
      ageRange: "19-44 years",
      price: 69,
      features: [
        "Unlimited sick visits",
        "Annual wellness exams",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
      ],
    },
    {
      name: "Adult",
      ageRange: "45-64 years",
      price: 89,
      popular: true,
      features: [
        "Unlimited sick visits",
        "Comprehensive wellness exams",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
        "Enhanced preventive care",
      ],
    },
    {
      name: "Senior",
      ageRange: "65+ years",
      price: 109,
      features: [
        "Unlimited sick visits",
        "Medicare coordination",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
        "Specialized senior care",
      ],
    },
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
            <div className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors">
                Partnerships
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl max-w-2xl mx-auto">
            One flat monthly fee. No hidden costs. No copays. No deductibles.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-lg shadow-lg p-6 ${
                  tier.popular ? "ring-2 ring-secondary" : ""
                }`}
              >
                {tier.popular && (
                  <div className="bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.ageRange}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">${tier.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Household Cap */}
          <div className="bg-secondary text-white rounded-lg p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Household Cap: $250/month</h3>
            <p className="text-lg">
              No matter how large your family, you&apos;ll never pay more than $250 per month for complete coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Calculate Your Annual Savings
            </h3>
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the Direct Care Indy family and experience healthcare without the hassles.
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
            <p>James D. Pike, D.O. | Direct Primary Care Physician</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
