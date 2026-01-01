import Link from "next/link";
import { Phone, Mail, MapPin, Stethoscope } from "lucide-react";
import { CatastrophicPartners } from "@/components/CatastrophicPartners";
import { TheWraparoundGuide } from "@/components/TheWraparoundGuide";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";

export default function Wraparound() {
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
              <Link href="/" className="hover:text-secondary transition-colors text-link">
                Home
              </Link>
              <Link href="/providers" className="hover:text-secondary transition-colors text-link">
                Our Team
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors text-link">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors text-link">
                Services
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors text-link">
                Partnerships
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors text-link">
                FAQ
              </Link>
              <Link href="/blog/indiana-medigap-birthday-rule-2026" className="hover:text-secondary transition-colors text-link">
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
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Complete Your Healthcare Stack
            </h2>
            <p className="text-2xl mb-4">
              Direct Care Indy handles the 90%. Choose a catastrophic wraparound for the 10%.
            </p>
            <p className="text-xl">
              The &quot;DPC Stack&quot;: Affordable primary care + catastrophic protection = Complete coverage at 60% lower cost.
            </p>
          </div>
        </div>
      </section>

      {/* HSA Status Tracker */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <HsaStatusTracker />
          </div>
        </div>
      </section>

      {/* The Wraparound Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TheWraparoundGuide />
        </div>
      </section>

      {/* Catastrophic Partners Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CatastrophicPartners />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Your Complete Healthcare Stack?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with Direct Care Indy for your routine care, then add a catastrophic wraparound for complete protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
            >
              View Pricing
            </Link>
            <a
              href="tel:+13179566288"
              className="bg-primary text-white hover:bg-opacity-90 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (317) 956-6288
            </a>
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
                <li>
                  <Link href="/wraparound" className="text-gray-300 hover:text-white transition-colors">
                    Wraparound Guide
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
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-2">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

