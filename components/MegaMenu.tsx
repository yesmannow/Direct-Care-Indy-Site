"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import {
  Stethoscope,
  Menu,
  X,
  ChevronDown,
  Users,
  Building2,
  UserCheck,
  Heart,
  BookOpen,
  FileText,
  Calculator,
  Search as SearchIcon,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CompactEmployerCalculator } from "@/components/CompactEmployerCalculator";
import { CompactLabSearch } from "@/components/CompactLabSearch";
import { DynamicCTA } from "@/components/DynamicHeader";
import { SITE_ASSETS } from "@/lib/images";
import Image from "next/image";

// Mobile Menu Item Component
function MobileMenuItem({
  item,
  onLinkClick
}: {
  item: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    description?: string;
    columns: Array<{
      title: string;
      links: Array<{ href: string; label: string; description?: string }>;
    }>;
  };
  onLinkClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-primary dark:text-teal-400" />
          <span className="font-semibold text-gray-900 dark:text-white">{item.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-12 pt-2 space-y-2">
              {item.columns.map((column) =>
                column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when mega menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [activeMenu]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const menuItems = {
    "care-models": {
      label: "Care Models",
      icon: Users,
      description: "Healthcare solutions for individuals and businesses",
      columns: [
        {
          title: "Individuals",
          links: [
            { href: "/pricing", label: "Pricing", description: "Transparent pricing starting at $69/mo" },
            { href: "/seniors", label: "Seniors (Medicare)", description: "HSA-eligible DPC for 65+" },
            { href: "/faq", label: "FAQ", description: "Common questions answered" },
          ],
        },
        {
          title: "Businesses",
          links: [
            { href: "/employers", label: "Employers", description: "Health benefits for your team" },
            { href: "/partnerships", label: "Partnerships", description: "Strategic healthcare partnerships" },
          ],
        },
      ],
      embeddedTool: <CompactEmployerCalculator variant="compact" />,
      gradient: "from-blue-500/10 via-teal-500/10 to-cyan-500/10",
    },
    "expertise": {
      label: "Expertise",
      icon: Heart,
      description: "Specialist-led primary care with clinical excellence",
      columns: [
        {
          title: "The Clinical Team",
          links: [
            { href: "/providers", label: "Dr. Pike & PAs", description: "Meet our expert clinicians" },
          ],
        },
        {
          title: "Services",
          links: [
            { href: "/services", label: "All Services", description: "Comprehensive primary care services" },
          ],
        },
        {
          title: "Round Table Philosophy",
          links: [
            { href: "/providers", label: "The Round Table Model", description: "Collaborative care approach" },
            { href: "/", label: "The 90/10 Model", description: "Insurance for 10%, DPC for 90%" },
          ],
        },
      ],
      embeddedTool: <CompactLabSearch />,
      gradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    },
    "resources": {
      label: "Resources",
      icon: BookOpen,
      description: "Educational content and guides",
      columns: [
        {
          title: "Education",
          links: [
            { href: "/blog/indiana-medigap-birthday-rule-2026", label: "Blog", description: "Latest healthcare insights" },
            { href: "/wraparound", label: "Wraparound Guide", description: "Understanding wraparound coverage" },
          ],
        },
      ],
      gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    },
  };

  return (
    <>
      <nav
        ref={menuRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80 shadow-lg shadow-gray-900/5"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Branding - Enhanced with animation */}
            <Link href="/" className="flex items-center gap-3 group relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-2.5 shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-all"
              >
                <Stethoscope className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-bold bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-teal-300"
                >
                  Direct Care Indy
                </motion.h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Specialist-Led Primary Care
                </p>
              </div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden lg:flex items-center gap-2">
              {Object.entries(menuItems).map(([key, item]) => {
                const Icon = item.icon;
                const isActive = activeMenu === key;

                return (
                  <div key={key} className="relative">
                    <motion.button
                      onClick={() => setActiveMenu(isActive ? null : key)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                        isActive
                          ? "bg-gradient-to-r from-primary/20 to-teal-500/20 text-primary dark:text-teal-400 shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-primary dark:text-teal-400" : ""}`} />
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    {/* Mega Menu Dropdown - Enhanced */}
                    <AnimatePresence>
                      {isActive && (
                        <>
                          {/* Backdrop */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                            onClick={() => setActiveMenu(null)}
                          />

                          {/* Dropdown Panel */}
                          <motion.div
                            ref={dropdownRef}
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.8,
                            }}
                            className="absolute top-full left-0 mt-3 w-[920px] rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden relative bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl"
                          >
                            {/* Animated Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || "from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"} opacity-50`}>
                              <Image
                                src={SITE_ASSETS.ui.texture}
                                alt=""
                                fill
                                className="object-cover opacity-[0.03]"
                                priority
                              />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

                            <div className="relative z-10">
                              {/* Header Section */}
                              <div className="px-8 pt-8 pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 rounded-lg bg-primary/10 dark:bg-teal-500/20">
                                    <Icon className="w-5 h-5 text-primary dark:text-teal-400" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                      {item.label}
                                    </h3>
                                    {item.description && (
                                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Content Grid */}
                              <div className="grid grid-cols-2 gap-8 p-8">
                                {/* Left Side - Navigation Columns */}
                                <motion.div
                                  className="space-y-6"
                                  initial="hidden"
                                  animate="visible"
                                  variants={{
                                    visible: {
                                      transition: {
                                        staggerChildren: 0.08,
                                        delayChildren: 0.1,
                                      },
                                    },
                                  }}
                                >
                                  {item.columns.map((column, idx) => (
                                    <motion.div
                                      key={idx}
                                      variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: {
                                          opacity: 1,
                                          x: 0,
                                          transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                          },
                                        },
                                      }}
                                    >
                                      <h4 className="text-sm font-bold text-primary dark:text-teal-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-1 h-4 bg-gradient-to-b from-primary to-teal-500 rounded-full" />
                                        {column.title}
                                      </h4>
                                      <ul className="space-y-2">
                                        {column.links.map((link, linkIdx) => (
                                          <motion.li
                                            key={link.href}
                                            variants={{
                                              hidden: { opacity: 0, x: -10 },
                                              visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                  delay: linkIdx * 0.05,
                                                },
                                              },
                                            }}
                                          >
                                            <Link
                                              href={link.href}
                                              onClick={() => setActiveMenu(null)}
                                              className="group flex items-start gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-teal-500/10 hover:text-primary dark:hover:text-teal-400 transition-all duration-200 border border-transparent hover:border-primary/20 dark:hover:border-teal-500/20"
                                            >
                                              <ArrowRight className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                              <div className="flex-1">
                                                <div className="font-semibold group-hover:text-primary dark:group-hover:text-teal-400 transition-colors">
                                                  {link.label}
                                                </div>
                                                {link.description && (
                                                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                                                    {link.description}
                                                  </div>
                                                )}
                                              </div>
                                            </Link>
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  ))}
                                </motion.div>

                                {/* Right Side - Embedded Tool */}
                                {"embeddedTool" in item && item.embeddedTool && (
                                  <motion.div
                                    className="border-l border-gray-200/50 dark:border-gray-700/50 pl-8"
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30,
                                      delay: 0.3,
                                    }}
                                  >
                                    <div className="sticky top-8">
                                      <div className="mb-4 flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3" />
                                        Interactive Tool
                                      </div>
                                      {item.embeddedTool}
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Direct Home Link */}
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-200 font-medium"
              >
                Home
              </Link>

              {/* CTA Button */}
              <div className="ml-2">
                <DynamicCTA />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-4">
                {Object.entries(menuItems).map(([key, item]) => (
                  <MobileMenuItem
                    key={key}
                    item={item}
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  Home
                </Link>
                <div className="pt-4">
                  <DynamicCTA />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
