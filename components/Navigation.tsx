"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Stethoscope, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicCTA } from "@/components/DynamicHeader";

interface NavigationProps {
  showDynamicCTA?: boolean;
}

export function Navigation({ showDynamicCTA = false }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/providers", label: "Our Team" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Services" },
    { href: "/seniors", label: "Seniors (Medicare)" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/employers", label: "Employers" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog/indiana-medigap-birthday-rule-2026", label: "Blog" },
  ];

  return (
    <nav
      className={`bg-primary text-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Stethoscope className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Direct Care Indy</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary transition-colors text-link"
              >
                {link.label}
              </Link>
            ))}
            {showDynamicCTA ? (
              <DynamicCTA />
            ) : (
              <Link
                href="/join"
                className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Join Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-primary shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                {/* Mobile Menu Header */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Menu</h2>
                  <div className="h-1 w-12 bg-secondary rounded-full"></div>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 hover:text-secondary transition-all text-lg font-medium"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-white/20"
                >
                  {showDynamicCTA ? (
                    <div onClick={closeMobileMenu}>
                      <DynamicCTA />
                    </div>
                  ) : (
                    <Link
                      href="/join"
                      onClick={closeMobileMenu}
                      className="block w-full bg-secondary hover:bg-opacity-90 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all text-lg shadow-lg"
                    >
                      Join Now
                    </Link>
                  )}

                  {/* Contact Info */}
                  <div className="mt-6 text-sm text-gray-300">
                    <p className="font-semibold text-white mb-2">Contact Us</p>
                    <a
                      href="tel:+13179566288"
                      className="block hover:text-secondary transition-colors mb-1"
                    >
                      (317) 956-6288
                    </a>
                    <a
                      href="mailto:info@directcareindy.com"
                      className="block hover:text-secondary transition-colors"
                    >
                      info@directcareindy.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
