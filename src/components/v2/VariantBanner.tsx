'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export function VariantBanner() {
  return (
    <aside
      aria-label="Sélecteur de variante"
      className="bg-[#0f1115] text-[#f1f3f5] border-b border-white/10 px-4 py-2.5 text-xs font-mono"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            Variante Design Studio
          </span>
          <span className="text-[#9ca3af]">
            Déclinaison conçue selon les principes du skill <strong className="text-white font-medium">frontend-design</strong> (anti-template).
          </span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors underline-offset-4 hover:underline font-semibold"
        >
          <span>Comparer avec la version standard (V1)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}
