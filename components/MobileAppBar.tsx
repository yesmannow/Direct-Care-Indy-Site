'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Stethoscope,
  Calendar,
  FileText,
  MessageSquare,
} from 'lucide-react';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Stethoscope, label: 'Services', href: '/services' },
  { icon: Calendar, label: 'Schedule', href: '/join' },
  { icon: FileText, label: 'Portal', href: 'https://directcareindy.hint.com/login' },
  { icon: MessageSquare, label: 'Contact', href: 'mailto:info@directcareindy.com' },
];

export default function MobileAppBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show bar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide when scrolling down and past 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        md:hidden fixed bottom-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur-lg border-t border-gray-200
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <div className="safe-area-inset-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            const isExternal = item.href.startsWith('http') || item.href.startsWith('mailto');

            const content = (
              <>
                <div className="relative">
                  <Icon
                    className={`
                      h-6 w-6 transition-all duration-200
                      ${isActive
                        ? 'text-teal-600 scale-110'
                        : 'text-slate-600'
                      }
                    `}
                  />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`
                    text-xs font-medium mt-1 transition-all duration-200
                    ${isActive
                      ? 'text-teal-600 font-semibold'
                      : 'text-slate-600'
                    }
                  `}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-teal-600 rounded-full" />
                )}
              </>
            );

            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="relative flex flex-col items-center justify-center min-w-[60px] min-h-[60px] rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
                  aria-label={item.label}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center min-w-[60px] min-h-[60px] rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </nav>
  );
}
