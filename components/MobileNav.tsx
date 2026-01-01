"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DynamicCTA } from "@/components/DynamicHeader";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Focus first link when menu opens
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  // Handle focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || e.key !== "Tab") return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      {/* Hamburger Button - visible only on mobile */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="md:hidden text-white p-2 hover:bg-primary-dark rounded-lg transition-colors"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-white p-2 hover:bg-primary-dark rounded-lg transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-2">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : null}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 hover:bg-primary-dark rounded-lg transition-colors text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dynamic CTA */}
          <div className="mt-6 px-4">
            <DynamicCTA />
          </div>
        </nav>
      </div>
    </>
  );
}
