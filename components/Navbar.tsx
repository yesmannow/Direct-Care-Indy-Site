'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  Users,
  Calculator,
  Activity,
  FileText,
  Tag,
  Briefcase,
  Handshake,
  HelpCircle,
  BookOpen,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

// Icon map for dynamic rendering
const icons = {
  Stethoscope,
  Users,
  Calculator,
  Activity,
  FileText,
  Tag,
  Briefcase,
  Handshake,
  HelpCircle,
  BookOpen,
} as const;

type NavLink = { name: string; href: string; icon: keyof typeof icons };
type FeatureCardItem = { label: string; price: string };
type FeatureCard = {
  title: string;
  imageSrc?: string;
  subtitle?: string;
  description?: string;
  items?: FeatureCardItem[];
  linkText?: string;
  linkHref?: string;
  buttonText?: string;
  buttonHref?: string;
};
type NavItem = {
  title: string;
  path: string;
  links: NavLink[];
  featureCard: FeatureCard;
};

// Navigation data (links and feature cards)
const navData: NavItem[] = [
  {
    title: 'Care & Services',
    path: '/services',
    links: [
      { name: 'Services (Primary & Urgent)', href: '/services', icon: 'Stethoscope' },
      { name: 'Seniors (Medicare)', href: '/seniors', icon: 'Activity' },
      { name: 'The 90/10 Model', href: '/#model', icon: 'FileText' },
    ],
    featureCard: {
      title: 'Wholesale Member Pricing',
      subtitle: 'No hidden fees. Save up to 95%.',
      imageSrc: '/images/clinical/medical-laboratory.webp',
      items: [
        { label: 'Lipid Panel', price: '$5.00' },
        { label: 'A1C (Diabetes)', price: '$8.00' },
        { label: 'Complete Blood Count', price: '$6.00' },
      ],
      linkText: 'See Full Price List',
      linkHref: '/pricing',
    },
  },
  {
    title: 'Membership',
    path: '/pricing',
    links: [
      { name: 'Plans & Pricing', href: '/pricing', icon: 'Tag' },
      { name: 'For Employers', href: '/employers', icon: 'Briefcase' },
      { name: 'Partnerships', href: '/partnerships', icon: 'Handshake' },
    ],
    featureCard: {
      title: 'Calculate Your Savings',
      description: 'The average family saves $4,560/year with our model vs. traditional insurance.',
      imageSrc: '/images/clinical/healthcare-chart-1.webp',
      buttonText: 'Compare My Costs →',
      buttonHref: '/pricing',
    },
  },
  {
    title: 'Resources',
    path: '/about',
    links: [
      { name: 'Our Team', href: '/providers', icon: 'Users' },
      { name: 'FAQ', href: '/faq', icon: 'HelpCircle' },
      { name: 'Blog', href: '/blog', icon: 'BookOpen' },
    ],
    featureCard: {
      title: 'Meet Dr. James Pike',
      subtitle: 'D.O., FCCP, FACP',
      description: 'Double board‑certified in Internal Medicine and Pulmonary Medicine.',
      imageSrc: '/images/providers/james-pike.webp',
      buttonText: 'Read Bio →',
      buttonHref: '/providers',
    },
  },
] ;

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 150);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setOpenIndex(null);
  };

  return (
    <>
      {/* Sticky top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Direct Care Indy">
              <Image
                src="/images/logos/dci-logo-primary.svg"
                alt="Direct Care Indy logo"
                width={160}
                height={40}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navData.map((item, index) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-slate-900 hover:text-teal-600 font-medium focus:outline-none">
                    {item.title}
                    <ChevronDown className="h-4 w-4 mt-px" />
                  </button>
                  {/* Mega menu dropdown */}
                  {openIndex === index && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-screen max-w-4xl z-40">
                      {/* Backdrop */}
                      <div className="absolute inset-0" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
                        <div className="relative mx-auto max-w-4xl bg-white shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Links */}
                          <div className="space-y-2">
                            {item.links.map((link) => {
                              const IconComponent = icons[link.icon as keyof typeof icons];
                              return (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 text-slate-900 hover:text-teal-600 transition-colors"
                                >
                                  {IconComponent && <IconComponent className="h-5 w-5 text-teal-600" />}
                                  <span className="font-medium">{link.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                          {/* Feature Card */}
                          <div className="relative overflow-hidden rounded-2xl bg-slate-50 p-6 flex flex-col justify-between">
                            {item.featureCard.imageSrc && (
                              <div className="absolute inset-0 opacity-30">
                                <Image
                                  src={item.featureCard.imageSrc}
                                  alt="Feature image"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="relative z-10 space-y-2">
                              <h3 className="text-lg font-bold text-slate-900">{item.featureCard.title}</h3>
                              {item.featureCard.subtitle && (
                                <p className="text-sm font-semibold text-teal-600">{item.featureCard.subtitle}</p>
                              )}
                              {item.featureCard.description && (
                                <p className="text-sm text-slate-700">{item.featureCard.description}</p>
                              )}
                              {item.featureCard.items && (
                                <ul className="mt-2 space-y-1">
                                  {item.featureCard.items.map(({ label, price }) => (
                                    <li key={label} className="flex justify-between text-sm font-medium text-slate-900">
                                      <span>{label}</span>
                                      <span className="text-teal-600">{price}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            {item.featureCard.linkText && item.featureCard.linkHref && (
                              <Link
                                href={item.featureCard.linkHref}
                                className="relative z-10 inline-flex items-center mt-4 text-teal-600 hover:text-teal-700 font-semibold"
                              >
                                {item.featureCard.linkText}
                              </Link>
                            )}
                            {item.featureCard.buttonText && item.featureCard.buttonHref && (
                              <Link
                                href={item.featureCard.buttonHref}
                                className="relative z-10 mt-4 inline-block text-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold"
                              >
                                {item.featureCard.buttonText}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {/* CTA */}
              <Link
                href="/join"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                Join
              </Link>
            </div>
            {/* Mobile Hamburger */}
            <button
              onClick={toggleDrawer}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:text-teal-600 focus:outline-none"
              aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {drawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={toggleDrawer} aria-hidden="true" />
          <div className="fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl overflow-y-auto">
            <div className="flex justify-end p-4 border-b border-gray-200">
              <button onClick={toggleDrawer} aria-label="Close navigation menu" className="text-slate-900 hover:text-teal-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navData.map((item, index) => {
                const isAccordionOpen = openIndex === index;
                return (
                  <div key={item.title} className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() => setOpenIndex(isAccordionOpen ? null : index)}
                      className="w-full flex items-center justify-between py-3 text-slate-900 font-medium hover:text-teal-600"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isAccordionOpen && (
                      <div className="mt-2 space-y-2 pl-4">
                        {item.links.map((link) => {
                          const IconComponent = icons[link.icon as keyof typeof icons];
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={toggleDrawer}
                              className="flex items-center gap-2 py-2 text-slate-900 hover:text-teal-600"
                            >
                              {IconComponent && <IconComponent className="h-4 w-4 text-teal-600" />}
                              <span>{link.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/join"
                  onClick={toggleDrawer}
                  className="block text-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full font-semibold"
                >
                  Join
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
