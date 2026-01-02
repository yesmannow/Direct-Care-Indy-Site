"use client";

import { useState, useRef, useEffect, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Menu,
  X,
  ChevronDown,
  Users,
  Heart,
  BookOpen,
} from "lucide-react";
import { EmployerSavingsCalculator } from "@/components/EmployerSavingsCalculator";
import WholesaleLabSearch from "@/components/WholesaleLabSearch";
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
    <div className="border-b border-border pb-4 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-secondary" />
          <span className="font-bold text-foreground">{item.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
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
                    className="block px-4 py-2 rounded-lg text-foreground hover:text-secondary transition-colors font-semibold"
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
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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

  // Keep dropdown aligned just below the nav bar
  useEffect(() => {
    const updateDropdownTop = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        setDropdownPosition((prev) => ({
          ...prev,
          top: navRect.bottom + 12,
        }));
      }
    };

    updateDropdownTop();
    window.addEventListener("resize", updateDropdownTop);
    return () => window.removeEventListener("resize", updateDropdownTop);
  }, []);

  const handleMenuToggle = (key: string, event: ReactMouseEvent<HTMLButtonElement>) => {
    const isActive = activeMenu === key;
    if (isActive) {
      setActiveMenu(null);
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    setDropdownPosition({
      top: (navRect?.bottom ?? buttonRect.bottom) + 12,
      left: buttonRect.left + buttonRect.width / 2,
    });
    setActiveMenu(key);
  };

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
      embeddedTool: <EmployerSavingsCalculator variant="compact" />,
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
      embeddedTool: <WholesaleLabSearch variant="compact" />,
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
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Brand Identity - High Contrast */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary p-2 rounded-xl text-secondary-foreground shadow-lg group-hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] transition-all"
              >
                <Stethoscope size={24} />
              </motion.div>
              <div>
                <span className="font-black text-xl tracking-tighter text-foreground block">
                  PIKE<span className="text-secondary">MEDICAL</span>
                </span>
                <p className="text-xs text-muted-foreground font-medium">
                  Specialist-Led Primary Care
                </p>
              </div>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-2">
              {Object.entries(menuItems).map(([key, item]) => {
                const Icon = item.icon;
                const isActive = activeMenu === key;

                return (
                  <div key={key} className="relative">
                    <motion.button
                      onClick={(e) => handleMenuToggle(key, e)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-bold ${
                        isActive
                          ? "text-secondary shadow-md"
                          : "text-foreground/80 hover:text-secondary"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-secondary" : ""}`} />
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className={`w-4 h-4 ${isActive ? "text-secondary" : ""}`} />
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
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.8,
                            }}
                            className="fixed mt-0 w-[920px] max-w-[calc(100vw-32px)] rounded-3xl shadow-2xl border border-border overflow-hidden relative bg-card/98 backdrop-blur-2xl z-[60]"
                            style={{
                              top: dropdownPosition.top,
                              left: dropdownPosition.left,
                              transform: "translateX(-50%)",
                            }}
                            onMouseLeave={() => setActiveMenu(null)}
                          >
                            {/* Background Watermark - 3% opacity as specified */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                              <Image
                                src={SITE_ASSETS.ui.megaMenu}
                                alt=""
                                fill
                                className="object-cover"
                                priority={false}
                              />
                            </div>

                            <div className="relative z-10">
                              {/* Header Section */}
                              <div className="px-8 pt-8 pb-6 border-b border-border">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="p-2 rounded-lg bg-secondary/10">
                                    <Icon className="w-5 h-5 text-secondary" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-bold text-foreground">
                                      {item.label}
                                    </h3>
                                    {item.description && (
                                      <p className="text-sm text-muted-foreground mt-0.5">
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
                                      <h4 className="text-[10px] font-black text-muted-foreground mb-4 uppercase tracking-[0.2em]">
                                        {column.title}
                                      </h4>
                                      <ul className="space-y-4">
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
                                              className="text-foreground font-bold hover:text-secondary transition-colors block text-lg"
                                            >
                                              {link.label}
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
                                    className="bg-muted/50 rounded-3xl p-8 border border-border shadow-inner"
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30,
                                      delay: 0.3,
                                    }}
                                  >
                                    <span className="inline-block bg-secondary/10 text-secondary text-[10px] font-black uppercase px-3 py-1 rounded-full mb-6 tracking-widest">
                                      Live Platform Tool
                                    </span>
                                    {item.embeddedTool}
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
                className="px-5 py-2.5 rounded-xl text-foreground/80 hover:text-secondary transition-all duration-200 font-bold"
              >
                Home
              </Link>

              {/* Global Action - High Contrast Button */}
              <Link
                href="/join"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-black hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:scale-105 transition-all active:scale-95 interactive-element"
              >
                Join the Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors interactive-element"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-card shadow-2xl z-50 md:hidden overflow-y-auto border-l border-border"
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
                  className="block px-4 py-3 rounded-xl text-foreground hover:text-secondary transition-colors font-bold"
                >
                  Home
                </Link>
                <div className="pt-4">
                  <Link
                    href="/join"
                    className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-black hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:scale-105 transition-all active:scale-95 interactive-element w-full text-center block"
                  >
                    Join the Table
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
