'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Lock body scroll when mobile menu is open
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

  const navLinks = [
    { label: 'À PROPOS', href: '/#about' },
    { label: 'EXPERTISES', href: '/#expertises' },
    { label: 'RÉALISATIONS', href: '/#projects' },
    { label: 'AVIS VÉRIFIÉS', href: '/#testimonials' },
    { label: 'CODE & LAB', href: '/#code' },
  ];

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
          {/* Brand Logo & Editorial Issue Badge */}
          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-[1.01] active:scale-[0.98] duration-200"
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

            <div className="hidden lg:block font-mono text-[10.5px] tracking-[0.08em] text-text-muted leading-tight border-l border-border-subtle pl-4 select-none">
              ISSUE 03
              <br />
              <span className="text-text-soft font-medium">ÉTÉ 2025 · STUDIO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[12px] font-medium tracking-wider text-text-main">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors py-1 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Switcher */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/v2"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-strong text-text-muted hover:text-text-main font-mono text-[11px] transition-all hover:bg-surface-2 active:scale-[0.97]"
              title="Consulter la variante V2 Studio"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>VARIANTE V2</span>
            </Link>

            <Link
              href="/#contact"
              className="group hidden sm:inline-flex items-center gap-2.5 bg-text-main text-surface-2 text-xs font-semibold tracking-wider pl-5 pr-2 py-2 rounded-full hover:bg-black/85 transition-all shadow-sm active:scale-[0.97]"
            >
              <span>CONTACTER</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-text-main hover:bg-black/5 rounded-full transition-colors active:scale-95"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer with Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
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
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  ISSUE 03 · STUDIO
                </span>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((item, idx) => (
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

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.25 }}
                >
                  <Link
                    href="/v2"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-accent font-mono text-xs tracking-wider py-4 border-b border-border-subtle/50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      DÉCOUVRIR LA VARIANTE V2
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
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
