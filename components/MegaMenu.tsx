"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  X,
  ChevronDown,
  Users,
  Building2,
  UserCheck,
  Heart,
  BookOpen,
  FileText,
  Calculator,
  Search as SearchIcon
} from "lucide-react";
import { CompactEmployerCalculator } from "@/components/CompactEmployerCalculator";
import { CompactLabSearch } from "@/components/CompactLabSearch";
import { DynamicCTA } from "@/components/DynamicHeader";
import { SITE_ASSETS } from "@/lib/images";
import Image from "next/image";

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);

  const menuItems = {
    "care-models": {
      label: "Care Models",
      icon: Users,
      columns: [
        {
          title: "Individuals",
          links: [
            { href: "/pricing", label: "Pricing" },
            { href: "/seniors", label: "Seniors (Medicare)" },
            { href: "/faq", label: "FAQ" },
          ],
        },
        {
          title: "Businesses",
          links: [
            { href: "/employers", label: "Employers" },
            { href: "/partnerships", label: "Partnerships" },
          ],
        },
      ],
      embeddedTool: <CompactEmployerCalculator variant="compact" />,
    },
    "expertise": {
      label: "Expertise",
      icon: Heart,
      columns: [
        {
          title: "The Clinical Team",
          links: [
            { href: "/providers", label: "Dr. Pike & PAs" },
          ],
        },
        {
          title: "Services",
          links: [
            { href: "/services", label: "All Services" },
          ],
        },
        {
          title: "Round Table Philosophy",
          links: [
            { href: "/providers", label: "The Round Table Model" },
            { href: "/", label: "The 90/10 Model" },
          ],
        },
      ],
      embeddedTool: <CompactLabSearch />,
    },
    "resources": {
      label: "Resources",
      icon: BookOpen,
      columns: [
        {
          title: "Education",
          links: [
            { href: "/blog/indiana-medigap-birthday-rule-2026", label: "Blog" },
            { href: "/wraparound", label: "Wraparound Guide" },
          ],
        },
      ],
    },
  };

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Branding - Pike Medical */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-teal-500 rounded-xl p-2 group-hover:bg-teal-600 transition-colors">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary dark:text-white">
                Pike Medical
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Direct Care Indy
              </p>
            </div>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.entries(menuItems).map(([key, item]) => {
              const Icon = item.icon;
              const isActive = activeMenu === key;

              return (
                <div key={key} className="relative">
                  <button
                    onClick={() => setActiveMenu(isActive ? null : key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary dark:text-teal-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-[900px] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative"
                      >
                        {/* Glassmorphism Background with Asset */}
                        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                          <Image
                            src={SITE_ASSETS.ui.megaMenu}
                            alt=""
                            fill
                            className="object-cover opacity-20"
                            priority
                          />
                        </div>
                        <div className="relative z-10">
                        <div className="grid grid-cols-2 gap-8 p-8">
                          {/* Left Side - Navigation Columns with Staggered Animation */}
                          <motion.div
                            className="space-y-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.1
                                }
                              }
                            }}
                          >
                            {item.columns.map((column, idx) => (
                              <motion.div
                                key={idx}
                                variants={{
                                  hidden: { opacity: 0, x: -20 },
                                  visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <h3 className="text-sm font-bold text-primary dark:text-teal-400 mb-3 uppercase tracking-wide">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.links.map((link, linkIdx) => (
                                    <motion.li
                                      key={link.href}
                                      variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                      }}
                                      transition={{ duration: 0.2, delay: linkIdx * 0.05 }}
                                    >
                                      <Link
                                        href={link.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-teal-400 transition-colors"
                                      >
                                        {link.label}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Right Side - Embedded Tool with Staggered Animation */}
                          {'embeddedTool' in item && item.embeddedTool && (
                            <motion.div
                              className="border-l border-gray-200 dark:border-gray-700 pl-8"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              <div className="sticky top-8">
                                {item.embeddedTool}
                              </div>
                            </motion.div>
                          )}
                        </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Direct Links */}
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Home
            </Link>

            {/* CTA Button */}
            <div className="ml-4">
              <DynamicCTA />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

