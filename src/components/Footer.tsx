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
    <footer className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Brand & Dynamic Automated Copyright */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="transition-opacity hover:opacity-85"
          aria-label="Tobias Agossou — Accueil"
        >
          <Image
            src="/images/logo.png"
            alt="Tobias Agossou"
            width={120}
            height={80}
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>
        <div className="font-mono text-[10.5px] text-text-muted leading-relaxed border-l border-border-subtle pl-4">
          © {currentYear} TOBIAS AGOSSOU
          <br />
          DIGITAL SYSTEMS STUDIO
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 font-mono text-xs tracking-wider text-text-main">
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
          className="hover:text-accent transition-colors"
        >
          COMEUP
        </Link>
        <Link
          href="https://fr.fiverr.com/s/Q7lW5mP"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          FIVERR
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
          aria-label="Retour en haut"
          className="w-9 h-9 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center text-text-main hover:bg-bg-soft hover:border-text-main transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
