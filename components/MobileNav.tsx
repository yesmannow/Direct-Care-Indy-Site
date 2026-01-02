"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicCTA } from "@/components/DynamicHeader";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Pricing" },
  { href: "/services-included", label: "Services" },
  { href: "/for-employers", label: "Employers" },
  { href: "/seniors", label: "Seniors" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      {/* Mobile Menu Button - Touch-optimized 44px target */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-60 interactive-element rounded-lg bg-card/80 backdrop-blur-md text-foreground hover:bg-muted transition-colors shadow-lg border border-border"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-card shadow-2xl z-50 md:hidden overflow-y-auto border-l border-border"
            >
              {/* Close Button - Touch-optimized */}
              <div className="flex justify-end p-4 border-b border-border">
                <button
                  onClick={closeMenu}
                  className="interactive-element rounded-lg text-foreground hover:bg-muted transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="px-4 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-secondary transition-colors font-medium interactive-element"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Dynamic CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <DynamicCTA />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
