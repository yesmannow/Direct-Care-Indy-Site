"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Award, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { MEMBER_COUNT } from "@/lib/constants";

export function SharedFooter() {
  const [memberCount, setMemberCount] = useState(MEMBER_COUNT);

  useEffect(() => {
    // Animate member count on mount (could be dynamic in production)
    const targetCount = MEMBER_COUNT;
    let currentCount = Math.max(150, targetCount - 50);
    const increment = 1;
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(timer);
      }
      setMemberCount(currentCount);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        {/* Trust Badges Section */}
        <div className="max-w-6xl mx-auto mb-8 pb-8 border-b border-gray-600">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {/* Member Count Ticker */}
            <div className="flex items-center gap-2 bg-teal-600 px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span className="font-bold text-lg">
                Join {memberCount}+ Indianapolis Families
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Member of the DPC Alliance</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="font-semibold">2026 HSA Approved</span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
            <p className="text-gray-300">
              Direct Primary Care for Indianapolis families. Transparent,
              accessible, and affordable healthcare without the insurance
              bureaucracy.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/seniors"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Seniors (Medicare)
                </Link>
              </li>
              <li>
                <Link
                  href="/employers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Employers
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
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
                <a
                  href="tel:+13179566288"
                  className="hover:text-white transition-colors"
                >
                  (317) 956-6288
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@directcareindy.com"
                  className="hover:text-white transition-colors"
                >
                  info@directcareindy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer - Areas We Serve */}
        <div className="border-t border-gray-600 pt-4 pb-2">
          <p className="text-xs text-gray-500 text-center mb-2">
            Serving Central Indiana:{' '}
            <Link href="/locations/carmel" className="hover:text-gray-400 transition-colors">
              Carmel
            </Link>
            {' | '}
            <Link href="/locations/zionsville" className="hover:text-gray-400 transition-colors">
              Zionsville
            </Link>
            {' | '}
            <Link href="/locations/fishers" className="hover:text-gray-400 transition-colors">
              Fishers
            </Link>
            {' | '}
            <Link href="/locations/geist" className="hover:text-gray-400 transition-colors">
              Geist
            </Link>
            {' | '}
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Indianapolis
            </Link>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
          <p className="font-semibold mb-2">
            Notice: Direct Care Indy is not insurance.
          </p>
          <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
          <p className="text-sm opacity-90 mt-1">
            Board Certified in Pulmonary and Internal Medicine
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Direct Care Indy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

