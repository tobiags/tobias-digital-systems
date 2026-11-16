'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f6f3ee]/85 backdrop-blur-md border-b border-border-subtle shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <header className="max-w-[1440px] mx-auto h-[84px] md:h-[92px] px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-[1.02] duration-200"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] font-medium tracking-wider text-text-main">
          <Link
            href="/#about"
            className="hover:text-accent transition-colors py-1"
          >
            À PROPOS
          </Link>
          <Link
            href="/#expertises"
            className="hover:text-accent transition-colors py-1"
          >
            EXPERTISES
          </Link>
          <Link
            href="/#projects"
            className="hover:text-accent transition-colors py-1"
          >
            RÉALISATIONS
          </Link>
          <Link
            href="/#testimonials"
            className="hover:text-accent transition-colors py-1"
          >
            AVIS VÉRIFIÉS
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/v2"
            className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-border-strong text-text-muted hover:text-text-main font-mono text-[11px] transition-colors"
            title="Consulter la variante de design V2 Studio"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Variante V2</span>
          </Link>

          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-text-main text-surface-2 text-xs font-semibold tracking-wider px-5 py-2.5 rounded-md hover:bg-black/85 transition-all"
          >
            <span>CONTACTER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-main hover:bg-black/5 rounded-md transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border-subtle px-6 py-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
            <Image
              src="/images/logo.png"
              alt="Tobias Agossou"
              width={120}
              height={80}
              className="h-9 w-auto object-contain"
            />
            <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
              STUDIO
            </span>
          </div>
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main hover:text-accent py-2 border-b border-border-subtle"
            >
              À PROPOS
            </Link>
            <Link
              href="/#expertises"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main hover:text-accent py-2 border-b border-border-subtle"
            >
              EXPERTISES
            </Link>
            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main hover:text-accent py-2 border-b border-border-subtle"
            >
              RÉALISATIONS
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main hover:text-accent py-2 border-b border-border-subtle"
            >
              AVIS VÉRIFIÉS
            </Link>
            <Link
              href="/v2"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between text-accent font-mono text-xs py-2 border-b border-border-subtle"
            >
              <span>DÉCOUVRIR LA VARIANTE V2</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-text-main text-surface-2 font-semibold text-xs tracking-wider py-3 rounded-md mt-2"
            >
              CONTACTER
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
