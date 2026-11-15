'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Brand & Copyright */}
      <div className="flex items-center gap-4">
        <span className="font-display font-semibold text-lg text-text-main">
          TA
        </span>
        <div className="font-mono text-[10.5px] text-text-muted leading-relaxed">
          © {new Date().getFullYear()} TOBIAS AGOSSOU
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
        <div className="flex gap-4 font-mono text-[10.5px] text-text-muted">
          <span>MENTIONS LÉGALES</span>
          <span>·</span>
          <span>CONFIDENTIALITÉ</span>
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
