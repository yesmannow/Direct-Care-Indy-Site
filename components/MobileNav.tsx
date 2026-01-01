"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DynamicCTA } from "@/components/DynamicHeader";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu when clicking outside or on a link
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 hover:bg-primary/80 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 px-4 flex-1 overflow-y-auto">
            <Link
              href="/"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/providers"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Our Team
            </Link>
            <Link
              href="/pricing"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              href="/services"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/seniors"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Seniors (Medicare)
            </Link>
            <Link
              href="/partnerships"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Partnerships
            </Link>
            <Link
              href="/employers"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Employers
            </Link>
            <Link
              href="/faq"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link
              href="/blog/indiana-medigap-birthday-rule-2026"
              className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>

            {/* CTA Button */}
            <div className="mt-4" onClick={closeMenu}>
              <DynamicCTA />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
