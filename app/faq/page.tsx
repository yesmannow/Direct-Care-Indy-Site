"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { MedicareDpcFaq } from "@/components/MedicareDpcFaq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Membership & Billing",
      questions: [
        {
          question: "How does billing work?",
          answer: (
            <div className="space-y-3">
              <p>Your membership fee is automatically billed on either the 1st or 15th of each month via autopay, based on your preference selected during enrollment.</p>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">Billing Details:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Automatic monthly billing on your chosen date (1st or 15th)</li>
                  <li>We accept credit cards, debit cards, and ACH transfers</li>
                  <li>You&apos;ll receive a receipt via email after each payment</li>
                  <li>Update your payment method anytime through your member portal</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          question: "What is your cancellation policy?",
          answer: (
            <div className="space-y-3">
              <p>You may cancel your membership at any time with 30-day written notice. There are no long-term contracts or lock-in periods.</p>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-2">Cancellation Process:</p>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Submit written cancellation notice via email or mail</li>
                  <li>Your membership will remain active for 30 days from notice date</li>
                  <li>No penalties or cancellation fees</li>
                  <li>You&apos;re welcome to rejoin at any time in the future</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          question: "Are DPC memberships HSA-eligible?",
          answer: (
            <div className="space-y-3">
              <p className="font-semibold text-lg">Yes! As of January 1, 2026, Direct Primary Care memberships are HSA-eligible.</p>
              <p>This means you can use your Health Savings Account (HSA) to pay for your monthly membership fees with pre-tax dollars, making your care even more affordable.</p>
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-semibold text-purple-900 mb-2">HSA Benefits:</p>
                <ul className="list-disc list-inside space-y-1 text-purple-800">
                  <li>Pay with pre-tax dollars from your HSA</li>
                  <li>Combine with a high-deductible health plan (HDHP) for complete coverage</li>
                  <li>Maximize your tax savings while getting premium care</li>
                  <li>Use remaining HSA funds for other qualified medical expenses</li>
                </ul>
              </div>
              <p className="text-sm text-gray-800 italic">
                Consult with your tax advisor to ensure your specific HSA setup qualifies.
              </p>
            </div>
          ),
        },
        {
          question: "What is the household cap?",
          answer: (
            <div className="space-y-3">
              <p>No matter how large your family is, you&apos;ll never pay more than $250 per month for complete household coverage.</p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-semibold text-yellow-900 mb-2">Example Scenarios:</p>
                <ul className="list-disc list-inside space-y-1 text-yellow-800">
                  <li>Family of 3 (2 adults + 1 child): Capped at $250/month</li>
                  <li>Family of 5 (2 adults + 3 children): Capped at $250/month</li>
                  <li>Multigenerational household: Capped at $250/month</li>
                </ul>
              </div>
              <p>Individual tiers range from $30-$109 based on age, but families always cap at $250 total.</p>
            </div>
          ),
        },
      ],
    },
    {
      category: "Coverage & Services",
      questions: [
        {
          question: "What does the 90/10 model mean?",
          answer: (
            <div className="space-y-3">
              <p>The 90/10 model means that your Direct Care Indy membership covers approximately 90% of your healthcare needs for your flat monthly fee.</p>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-2">The 90% - What&apos;s Covered:</p>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Unlimited office visits (no copays)</li>
                  <li>Same-day and next-day appointments</li>
                  <li>Direct access to Dr. Pike via text, call, or email</li>
                  <li>Chronic disease management</li>
                  <li>Acute illness and injury care</li>
                  <li>Preventive care and wellness exams</li>
                  <li>Minor procedures performed in-office</li>
                  <li>Care coordination and referrals</li>
                  <li>Wholesale-priced labs and medications</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded">
                <p className="font-semibold text-orange-900 mb-2">The 10% - What&apos;s Not Covered:</p>
                <ul className="list-disc list-inside space-y-1 text-orange-800">
                  <li>Hospitalizations and emergency room visits</li>
                  <li>Specialty care and specialist consultations</li>
                  <li>Advanced imaging (MRI, CT scans)</li>
                  <li>Surgical procedures</li>
                  <li>Cancer treatments and chemotherapy</li>
                </ul>
              </div>
              <p className="text-sm text-gray-800">
                For the 10%, we recommend pairing your DPC membership with a catastrophic health insurance plan or health sharing ministry.
              </p>
            </div>
          ),
        },
        {
          question: "What should I do in a medical emergency?",
          answer: (
            <div className="space-y-3">
              <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-red-900 text-lg mb-2">EMERGENCY PROTOCOL</p>
                    <p className="text-red-800 font-semibold mb-3">
                      For life-threatening emergencies, ALWAYS call 911 or go to the nearest emergency room immediately.
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-semibold">When to go to the ER or call 911:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Chest pain or pressure</li>
                <li>Difficulty breathing or shortness of breath</li>
                <li>Severe bleeding that won&apos;t stop</li>
                <li>Head injury with loss of consciousness</li>
                <li>Suspected stroke symptoms (face drooping, arm weakness, speech difficulty)</li>
                <li>Severe allergic reactions</li>
                <li>Severe burns</li>
                <li>Poisoning or overdose</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">For Urgent (But Not Life-Threatening) Issues:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Contact Dr. Pike directly via Spruce Health</li>
                  <li>Call the office at (317) 956-6288</li>
                  <li>We offer same-day appointments for urgent concerns</li>
                  <li>Dr. Pike can often assess and guide you remotely</li>
                </ul>
              </div>

              <p className="text-sm text-gray-800 italic">
                Remember: Direct Care Indy is designed for 90% of your healthcare needs.
                The ER is always the right choice for true emergencies—that&apos;s the 10% we don&apos;t cover.
              </p>
            </div>
          ),
        },
        {
          question: "Do I still need health insurance?",
          answer: (
            <div className="space-y-3">
              <p>Direct Care Indy is NOT insurance—it&apos;s a membership-based primary care service. We recommend combining your DPC membership with catastrophic coverage for the 10% of scenarios we don&apos;t handle.</p>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">The Ideal &quot;DPC Stack&quot;:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li><strong>DPC Membership ($69-109/month):</strong> Covers 90% of your care needs</li>
                  <li><strong>High-Deductible Health Plan ($200-300/month):</strong> Covers catastrophic events, hospitalizations, surgeries</li>
                  <li><strong>Total Cost:</strong> Often $4,000-5,000 less per year than traditional insurance</li>
                </ul>
              </div>
              <p>This combination gives you comprehensive coverage at a fraction of the cost of traditional PPO plans, with far better primary care access.</p>
            </div>
          ),
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I schedule my first appointment?",
          answer: (
            <div className="space-y-3">
              <p>Scheduling is easy! You have multiple options:</p>
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-semibold text-purple-900 mb-2">Scheduling Options:</p>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li><strong>Spruce Health App:</strong> Message Dr. Pike directly to request your preferred time</li>
                  <li><strong>Phone:</strong> Call (317) 956-6288 during business hours</li>
                  <li><strong>Email:</strong> Send your availability to info@directcareindy.com</li>
                </ol>
              </div>
              <p className="font-semibold">Your First Visit:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Allow 60 minutes for your comprehensive &quot;Meet & Greet&quot;</li>
                <li>Bring current medications and a list of health concerns</li>
                <li>Dr. Pike will review your complete medical history</li>
                <li>Discuss your health goals and preventive care plan</li>
              </ul>
            </div>
          ),
        },
        {
          question: "What is Spruce Health and why do I need it?",
          answer: (
            <div className="space-y-3">
              <p>Spruce Health is a HIPAA-compliant messaging platform that allows you to communicate securely with Dr. Pike.</p>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-2">Why Spruce Health?</p>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Text Dr. Pike directly (not a call center or nurse)</li>
                  <li>HIPAA-compliant and secure</li>
                  <li>Share photos, documents, or test results</li>
                  <li>Request appointments or prescription refills</li>
                  <li>Typically responds within 1 hour during business hours</li>
                  <li>Available on iOS and Android</li>
                </ul>
              </div>
              <p className="text-sm text-gray-800 italic">
                This is one of the biggest advantages of Direct Care—direct access to your doctor without phone trees or long hold times.
              </p>
            </div>
          ),
        },
        {
          question: "Where is the office located?",
          answer: (
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded border-2 border-gray-300">
                <p className="font-semibold text-gray-900 mb-2">📍 Office Address:</p>
                <p className="text-gray-800 text-lg">
                  7911 N. Michigan Rd.<br />
                  Indianapolis, IN 46268
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold text-blue-900 mb-2">Directions & Parking:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Located on Michigan Road between 79th and 82nd Streets</li>
                  <li>Free parking available on-site</li>
                  <li>Handicap accessible entrance</li>
                  <li>Easy access from I-465 (exit Michigan Road)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-semibold text-yellow-900 mb-2">Office Hours:</p>
                <ul className="space-y-1 text-yellow-800">
                  <li><strong>Monday - Thursday:</strong> 8:00 AM - 5:00 PM</li>
                  <li><strong>Friday:</strong> 8:00 AM - 12:00 PM</li>
                  <li><strong>After Hours:</strong> Urgent messages via Spruce Health monitored</li>
                </ul>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      category: "Pricing & Savings",
      questions: [
        {
          question: "How much can I really save with Direct Care?",
          answer: (
            <div className="space-y-3">
              <p>Most members save between $3,700-$4,700 annually compared to traditional insurance, even when combining DPC with catastrophic coverage.</p>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-900 mb-2">Real Cost Comparison (Annual):</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-red-700">Traditional PPO:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Premium: $5,000/year</li>
                      <li>Deductible: $2,800</li>
                      <li>Copays (4 visits): $200</li>
                      <li>Prescription costs: $800</li>
                      <li><strong className="text-red-700">Total: $8,800/year</strong></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">DPC Stack:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Catastrophic Plan: $2,400/year</li>
                      <li>DPC Membership: $828/year ($69/month)</li>
                      <li>Visit fees: $0</li>
                      <li>Wholesale Rx: $36/year</li>
                      <li><strong className="text-green-700">Total: $3,264/year</strong></li>
                    </ul>
                  </div>
                  <div className="bg-secondary text-white p-3 rounded font-bold text-center">
                    Annual Savings: $5,536
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to know about Direct Care Indy membership
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 100 + index;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-lg text-primary pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-secondary shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-gray-700">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare + DPC FAQ Section - Answer-First for AI Overviews */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MedicareDpcFaq />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out anytime and we&apos;ll be happy to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13179566288"
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (317) 956-6288
            </a>
            <Link
              href="/join"
              className="bg-primary text-white hover:bg-opacity-90 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Join Direct Care Indy
            </Link>
          </div>
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
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-1">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
