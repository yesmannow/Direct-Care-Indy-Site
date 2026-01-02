import Link from "next/link";
import { Users, Shield, Clock, MessageSquare, Stethoscope, CheckCircle2 } from "lucide-react";

export function RoundTableOverview() {
  return (
    <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Direct Care Indy &ldquo;Round Table&rdquo; Model
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-access primary care clinicians with specialist oversight—bringing hospital-grade expertise to your everyday healthcare.
            </p>
          </div>

          {/* 90/10 Model Explanation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 px-6 py-3 rounded-full mb-4">
                <Shield className="w-6 h-6 text-teal-400" />
                <span className="text-2xl font-bold text-teal-400">90/10 Security Model</span>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our PAs handle 90% of your daily healthcare needs with 24/7 direct access, while Dr. Pike provides expert oversight for the complex 10%—ensuring you always have specialist-level security.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* High-Access PAs */}
              <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold">High-Access PAs</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <MessageSquare className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">24/7 Direct Text:</strong> Text your PA directly via Spruce Health app—no phone tag, instant responses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">60-Minute Unhurried Visits:</strong> Comprehensive appointments with no time pressure—your PA listens and addresses all concerns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">90% Daily Care:</strong> Routine visits, Strep tests, wellness exams, and chronic disease management.</span>
                  </li>
                </ul>
              </div>

              {/* Specialist Oversight */}
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Specialist Oversight</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Weekly Case Reviews:</strong> Dr. Pike reviews complex cases weekly, bringing hospital-grade expertise to primary care.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Triple Board-Certified:</strong> Internal Medicine, Pulmonary Medicine, and Critical Care expertise for complex needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">10% Complex Cases:</strong> Specialist-level diagnostic security for pulmonary conditions and complex internal medicine.</span>
                  </li>
                </ul>
              </div>

              {/* 90/10 Split */}
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">The 90/10 Split</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Routine Care (90%):</strong> Strep tests, lab work, wellness exams, and preventive care handled by your PA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Catastrophic Security (10%):</strong> Complex diagnostics, pulmonary conditions, and specialist-level care with Dr. Pike.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Seamless Handoff:</strong> Your PA coordinates with Dr. Pike when specialist expertise is needed—no gaps in care.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">How the Round Table Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-teal-400">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Daily Care with Your PA</h4>
                <p className="text-gray-400 text-sm">
                  Your assigned PA handles routine visits, preventive care, and chronic disease management with 24/7 direct access.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-400">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Weekly Case Reviews</h4>
                <p className="text-gray-400 text-sm">
                  Dr. Pike reviews complex cases weekly, providing specialist-level guidance and ensuring optimal care plans.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-400">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Specialist Access When Needed</h4>
                <p className="text-gray-400 text-sm">
                  For complex conditions, pulmonary issues, or when specialist expertise is required, Dr. Pike is immediately available.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/providers/james-pike"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all min-h-[44px] min-w-[200px] justify-center"
            >
              <Stethoscope className="w-5 h-5" />
              Meet Dr. Pike - Medical Director
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

