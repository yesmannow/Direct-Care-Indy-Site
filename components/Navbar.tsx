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
  Home,
  PhoneCall,
  Shield,
} from 'lucide-react';

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
  Home,
  PhoneCall,
  Shield,
} as const;

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

type NavLink = { name: string; href: string; icon: keyof typeof icons; external?: boolean };
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

const navData: NavItem[] = [
  {
    title: 'Care & Services',
    path: '/services',
    links: [
      { name: 'Services (Primary & Urgent)', href: '/services', icon: 'Stethoscope' },
      { name: 'Seniors (Medicare)', href: '/seniors', icon: 'Activity' },
      { name: 'The 90/10 Model', href: '/#how-it-works', icon: 'FileText' },
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
      buttonText: 'Compare My Costs',
      buttonHref: '/pricing#pricing-calculator',
    },
  },
  {
    title: 'Our Practice',
    path: '/about',
    links: [
      { name: 'Our Team', href: '/providers', icon: 'Users' },
      { name: 'The DPC Story', href: '/about', icon: 'Home' },
      { name: 'FAQ', href: '/faq', icon: 'HelpCircle' },
    ],
    featureCard: {
      title: 'Meet Dr. James Pike',
      subtitle: 'D.O., FCCP, FACP',
      description: 'Double board-certified in Internal Medicine and Pulmonary Medicine.',
      imageSrc: '/images/providers/james-pike.webp',
      buttonText: 'Read Bio',
      buttonHref: '/providers',
    },
  },
  {
    title: 'Resources',
    path: '/blog',
    links: [
      { name: 'Blog', href: '/blog', icon: 'BookOpen' },
      { name: 'Patient Portal', href: PATIENT_PORTAL_URL, icon: 'Shield', external: true },
      { name: 'Contact Us', href: 'mailto:info@directcareindy.com', icon: 'PhoneCall', external: true },
      { name: 'Hint Integration Demo', href: '/resources/hint-health-demo', icon: 'Calculator' },
    ],
    featureCard: {
      title: 'Member Access',
      subtitle: 'Patient portal and enrollment powered by Hint Health.',
      description: 'Log in to your portal or explore how Hint connects to Direct Care Indy.',
      imageSrc: '/images/clinical/pulmonary-clinic.webp',
      buttonText: 'Portal Login',
      buttonHref: PATIENT_PORTAL_URL,
    },
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
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
                {openIndex === index && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-screen max-w-4xl z-40">
                    <div className="absolute inset-0" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
                      <div className="relative mx-auto max-w-4xl bg-white shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          {item.links.map((link) => {
                            const IconComponent = icons[link.icon];
                            const linkClasses = "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 text-slate-900 hover:text-teal-600 transition-colors";
                            if (link.external) {
                              return (
                                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={linkClasses}>
                                  {IconComponent && <IconComponent className="h-5 w-5 text-teal-600" />}
                                  <span className="font-medium">{link.name}</span>
                                </a>
                              );
                            }
                            return (
                              <Link key={link.href} href={link.href} className={linkClasses}>
                                {IconComponent && <IconComponent className="h-5 w-5 text-teal-600" />}
                                <span className="font-medium">{link.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="relative overflow-hidden rounded-2xl bg-slate-50 p-6 flex flex-col justify-between">
                          {item.featureCard.imageSrc && (
                            <div className="absolute inset-0 opacity-30">
                              <Image src={item.featureCard.imageSrc} alt="Feature image" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            </div>
                          )}
                          <div className="relative z-10 space-y-2">
                            <h3 className="text-lg font-bold text-slate-900">{item.featureCard.title}</h3>
                            {item.featureCard.subtitle && <p className="text-sm font-semibold text-teal-600">{item.featureCard.subtitle}</p>}
                            {item.featureCard.description && <p className="text-sm text-slate-700">{item.featureCard.description}</p>}
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
                            <Link href={item.featureCard.linkHref} className="relative z-10 inline-flex items-center mt-4 text-teal-600 hover:text-teal-700 font-semibold">
                              {item.featureCard.linkText}
                            </Link>
                          )}
                          {item.featureCard.buttonText && item.featureCard.buttonHref && (
                            <Link href={item.featureCard.buttonHref} className="relative z-10 mt-4 inline-block text-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold">
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
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href={PATIENT_PORTAL_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-full px-3 py-2 transition-colors">
              Patient Login
            </a>
            <Link href="/join" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Join Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link href="/join" className="text-sm bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold shadow-md transition-colors">
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
