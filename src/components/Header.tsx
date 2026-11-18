'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'À PROPOS', href: '/#about' },
  { label: 'EXPERTISES', href: '/#expertises' },
  { label: 'RÉALISATIONS', href: '/#projects' },
  { label: 'AVIS VÉRIFIÉS', href: '/#testimonials' },
  { label: 'CODE & LAB', href: '/#code' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#f6f3ee]/90 backdrop-blur-md border-b border-border-subtle shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <header className="max-w-[1440px] mx-auto h-[84px] md:h-[92px] px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-[1.01] active:scale-[0.98] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
              aria-label="Tobias Agossou — Digital Systems Studio"
            >
              <Image
                src="/images/logo.png"
                alt="Tobias Agossou"
                width={160}
                height={106}
                priority
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-[12px] font-medium tracking-wider text-text-main"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="group hidden sm:inline-flex items-center gap-2.5 bg-text-main text-surface-2 text-xs font-semibold tracking-wider pl-5 pr-2 py-2 rounded-full hover:bg-black/85 transition-all shadow-sm active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>CONTACTER</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden p-2.5 text-text-main hover:bg-black/5 rounded-full transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[84px] bottom-0 z-50 bg-[#f6f3ee]/95 backdrop-blur-xl border-b border-border-subtle px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-subtle">
                <Image
                  src="/images/logo.png"
                  alt="Tobias Agossou"
                  width={140}
                  height={93}
                  className="h-9 w-auto object-contain"
                />
              </div>

              <nav aria-label="Liens de navigation mobile" className="flex flex-col gap-2">
                {NAV_LINKS.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-text-main hover:text-accent font-display text-xl py-3 border-b border-border-subtle/50"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-text-muted" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-text-main text-surface-2 font-semibold text-xs tracking-wider py-3.5 rounded-full shadow-md active:scale-[0.98]"
              >
                <span>INITIER UNE COLLABORATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-around font-mono text-[10px] text-text-muted pt-2">
                <Link
                  href="https://comeup.com/fr/@tobias-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-main"
                >
                  COMEUP 508+ AVIS
                </Link>
                <span>·</span>
                <Link
                  href="https://fr.fiverr.com/s/RVraW78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-main"
                >
                  FIVERR 5.0 ★
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
