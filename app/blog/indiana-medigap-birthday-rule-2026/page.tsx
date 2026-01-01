import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope, Calendar, ShieldCheck, DollarSign } from "lucide-react";
import { SeniorSavingsCalculator } from "@/components/SeniorSavingsCalculator";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";

export default function BirthdayRuleBlog() {
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
              <Link href="/employers" className="hover:text-secondary transition-colors">
                Employers
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
              <Link href="/blog/indiana-medigap-birthday-rule-2026" className="text-secondary font-semibold">
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

      {/* Hero Section */}
      <article className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-01-01">January 1, 2026</time>
                <span>•</span>
                <span>Indianapolis, IN</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                The 2026 Indiana &apos;Birthday Rule&apos; is Here: How Indianapolis Seniors Can Lock in Massive Savings This Month
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A new state law (HEA 1226) allows Medicare beneficiaries to switch Medigap plans during their birthday month—without medical underwriting. Here&apos;s how to combine it with HSA-eligible Direct Primary Care for maximum savings.
              </p>
            </header>

            {/* Featured Image Placeholder */}
            <div className="mb-8 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <img
                src="/og-image.jpg"
                alt="Indianapolis senior reviewing medical bills with HSA-Eligible DPC savings text"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-gray-700 dark:text-gray-300 mb-6">
                Starting January 1, 2026, Indiana seniors have a powerful new tool to reduce healthcare costs: the &quot;Medigap Birthday Rule&quot; (House Enrolled Act 1226). If you&apos;re 65 or older and your birthday falls in January, you&apos;re currently in a 60-day &quot;Guaranteed Issue&quot; window where you can switch Medicare Supplement plans without answering health questions.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">What is the Indiana Birthday Rule?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Birthday Rule allows Medicare beneficiaries to switch to a Medigap plan of equal or lesser coverage during their birthday month and the following 30 days—without medical underwriting. This means you can potentially save hundreds of dollars per year by switching to a lower-cost plan with the same coverage level.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>Key Point:</strong> The average Indianapolis senior pays $217/month for Medigap Plan G. During the Birthday Rule window, many can switch to a plan costing 15-25% less ($163-$185/month), saving approximately $400-$650 per year.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">The Triple Threat: Medicare + DPC + HSA</h2>

              {/* Triple Threat Box */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border-l-4 border-orange-500 shadow-lg my-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-8 h-8 text-orange-600" />
                  The Complete Senior Healthcare Stack
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <strong className="text-primary">Medicare + Medigap (Your 10%):</strong> Covers hospitalizations, major surgeries, and catastrophic events. Use the Birthday Rule to reduce your Medigap premium by 15-25%.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <strong className="text-primary">Direct Care Indy (Your 90%):</strong> Handles day-to-day care, same-day sick visits, and complex chronic management with Dr. Pike&apos;s Pulmonary expertise—all for $109/month.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <strong className="text-primary">HSA (Tax-Free Savings):</strong> Thanks to the 2026 One Big Beautiful Bill Act (OBBBA), your DPC membership is now a qualified medical expense. Use your HSA to pay your $109 membership tax-free, saving up to 30% depending on your tax bracket.
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h4 className="text-xl font-bold text-primary">Total Annual Savings Potential</h4>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">$4,560+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Medigap savings ($400-$650) + HSA tax savings ($393) + Reduced out-of-pocket costs
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Why This Matters Now</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If your birthday is in January 2026, you&apos;re currently in your 60-day Guaranteed Issue window. This is a limited-time opportunity to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>Switch to a lower-cost Medigap plan without health questions</li>
                <li>Pair your new Medigap plan with <Link href="/seniors" className="text-primary underline">HSA-eligible Direct Primary Care</Link></li>
                <li>Use existing HSA funds to pay for your DPC membership tax-free</li>
                <li>Lock in savings for the entire year</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Calculate Your Savings</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Use the calculator below to see how much you can save by combining Medigap plan switching with HSA-eligible Direct Primary Care:
              </p>

              {/* Senior Savings Calculator */}
              <div className="my-8" id="calculator">
                <SeniorSavingsCalculator />
              </div>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Understanding HSA Eligibility</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As of January 1, 2026, the One Big Beautiful Bill Act (OBBBA) makes Direct Primary Care memberships HSA-eligible for the first time. This is a game-changer for Medicare beneficiaries who have existing HSA funds from previous employment or high-deductible health plans.
              </p>

              {/* HSA Tracker */}
              <div className="my-8" id="hsa-tracker">
                <HsaStatusTracker />
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Since Direct Care Indy&apos;s Senior Tier is $109/month—well under the $150 federal cap—you can use your HSA to pay for your membership with pre-tax dollars, effectively reducing your out-of-pocket cost by up to 30%.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Next Steps for January Birthday Seniors</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li><strong>Contact a Medigap broker</strong> to compare plans during your Birthday Rule window (you have 60 days from your birthday month)</li>
                <li><strong>Review your current Medigap premium</strong> and identify lower-cost alternatives with the same coverage level</li>
                <li><strong>Enroll in Direct Care Indy</strong> at $109/month—your membership is HSA-eligible as of 2026</li>
                <li><strong>Use your HSA funds</strong> to pay for your DPC membership tax-free</li>
                <li><strong>Lock in your savings</strong> for the entire year</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Why Direct Care Indy for Seniors?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dr. James D. Pike, D.O., FCCP, FACP, brings specialized Pulmonary Medicine expertise directly to your primary care. This is particularly valuable for the 65+ demographic, who often face complex respiratory conditions, COPD, and chronic lung disease. As a Fellow of the American College of Chest Physicians, Dr. Pike provides specialist-level knowledge without the specialist copays, referral delays, or fragmented care coordination.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Combined with the convenience and affordability of Direct Primary Care, our $109/month senior membership represents market-leading value for complex care management.
              </p>

              {/* Call to Action */}
              <div className="bg-primary text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Lock in Your Savings?</h3>
                <p className="text-lg mb-6 opacity-90">
                  If your birthday is in January, you&apos;re in your 60-day window. Don&apos;t miss this opportunity to combine Medigap savings with HSA-eligible Direct Primary Care.
                </p>
                <a
                  href="tel:+13179566288"
                  className="bg-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (317) 956-6288
                </a>
              </div>

              {/* Compliance Disclaimer */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-8 border-l-4 border-gray-400">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Disclaimer:</strong> Direct Care Indy is a Direct Primary Care provider, not a Medigap insurer. The &quot;Birthday Rule&quot; applies to Medicare Supplement plans only and is governed by Indiana House Enrolled Act 1226. HSA eligibility is based on 2026 IRS Notice 2026-5. Individual results may vary. Consult with a licensed insurance broker for Medigap plan options and with your tax advisor for HSA eligibility questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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

