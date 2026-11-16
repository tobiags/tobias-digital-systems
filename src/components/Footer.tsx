'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Brand & Dynamic Automated Copyright */}
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="transition-opacity hover:opacity-85 active:scale-[0.98]"
          aria-label="Tobias Agossou — Accueil"
        >
          <Image
            src="/images/logo.png"
            alt="Tobias Agossou — Digital Systems Studio"
            width={140}
            height={93}
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>
        <div className="font-mono text-[10.5px] text-text-muted leading-relaxed border-l border-border-subtle pl-4">
          © {currentYear} TOBIAS AGOSSOU
          <br />
          <span className="text-text-soft">DIGITAL SYSTEMS STUDIO</span>
        </div>
      </div>

      {/* Verified Platforms & Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs tracking-wider text-text-main">
        <Link
          href="https://github.com/tobiags"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GITHUB
        </Link>
        <Link
          href="https://comeup.com/fr/@tobias-06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors flex items-center gap-1"
          title="Profil officiel ComeUp avec 508+ avis"
        >
          <span>COMEUP (508+)</span>
        </Link>
        <Link
          href="https://fr.fiverr.com/s/RVraW78"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors flex items-center gap-1"
          title="Profil officiel Fiverr noté 5.0"
        >
          <span>FIVERR (5.0 ★)</span>
        </Link>
        <Link
          href="https://www.youtube.com/@tobiasagossou4193"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          YOUTUBE
        </Link>
      </div>

      {/* Legal & Scroll Top */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 font-mono text-[10.5px] text-text-muted">
          <Link
            href="/mentions-legales"
            className="hover:text-text-main transition-colors underline-offset-4 hover:underline"
          >
            MENTIONS LÉGALES
          </Link>
          <span>·</span>
          <Link
            href="/confidentialite"
            className="hover:text-text-main transition-colors underline-offset-4 hover:underline"
          >
            CONFIDENTIALITÉ
          </Link>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Retour en haut de page"
          className="w-10 h-10 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center text-text-main hover:bg-bg-soft hover:border-text-main transition-all active:scale-95 shadow-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
