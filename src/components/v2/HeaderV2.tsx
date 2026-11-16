'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function HeaderV2() {
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
          ? 'bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e2e6eb] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <header className="max-w-[1440px] mx-auto h-[80px] md:h-[88px] px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Studio Name */}
        <div className="flex items-center gap-5">
          <Link
            href="/v2"
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
          <span className="hidden lg:inline-block font-mono text-[11px] text-[#5e6573] border-l border-[#e2e6eb] pl-4">
            Digital Systems Architecture &amp; Production
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#18191c]">
          <Link
            href="/v2#architecture"
            className="hover:text-[#0f52ba] transition-colors py-1"
          >
            Architecture
          </Link>
          <Link
            href="/v2#realisations"
            className="hover:text-[#0f52ba] transition-colors py-1"
          >
            Réalisations
          </Link>
          <Link
            href="/v2#methode"
            className="hover:text-[#0f52ba] transition-colors py-1"
          >
            Méthode
          </Link>
          <Link
            href="/v2#avis"
            className="hover:text-[#0f52ba] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>Avis Vérifiés</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 font-semibold">
              410+
            </span>
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/v2#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#090a0c] text-white text-xs font-semibold tracking-wider px-5 py-2.5 rounded-lg hover:bg-[#1f2228] transition-all shadow-sm"
          >
            <span>DISCUTER D&apos;UN PROJET</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#090a0c] hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e6eb] px-6 py-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e6eb]">
            <Image
              src="/images/logo.png"
              alt="Tobias Agossou"
              width={120}
              height={80}
              className="h-9 w-auto object-contain"
            />
            <span className="font-mono text-[10px] text-[#5e6573] tracking-widest uppercase">
              STUDIO V2
            </span>
          </div>
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide">
            <Link
              href="/v2#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18191c] hover:text-[#0f52ba] py-2 border-b border-[#e2e6eb]"
            >
              Architecture
            </Link>
            <Link
              href="/v2#realisations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18191c] hover:text-[#0f52ba] py-2 border-b border-[#e2e6eb]"
            >
              Réalisations
            </Link>
            <Link
              href="/v2#methode"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18191c] hover:text-[#0f52ba] py-2 border-b border-[#e2e6eb]"
            >
              Méthode
            </Link>
            <Link
              href="/v2#avis"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#18191c] hover:text-[#0f52ba] py-2 border-b border-[#e2e6eb]"
            >
              Avis Vérifiés (410+)
            </Link>
            <Link
              href="/v2#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#090a0c] text-white font-semibold text-xs tracking-wider py-3 rounded-lg mt-2"
            >
              DISCUTER D&apos;UN PROJET
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
