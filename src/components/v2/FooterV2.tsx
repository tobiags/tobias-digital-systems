'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeftRight, ShieldCheck, Terminal, Heart } from 'lucide-react';

export function FooterV2() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[#e2e6eb] bg-[#ffffff] pt-16 pb-12 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Top Grid: Identity, Specs, Direct Profiles, Comparative Variant */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#e2e6eb]">
          {/* Col 1 & 2: Studio Identity */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <Link href="/v2" className="inline-block" aria-label="Tobias Agossou">
                  <Image
                    src="/images/logo.png"
                    alt="Tobias Agossou Studio"
                    width={180}
                    height={120}
                    className="h-11 md:h-12 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-[14px] text-[#5e6573] leading-relaxed max-w-sm mb-6">
                Ingénierie full-stack haut débit, interfaces éditoriales fluides et pipelines d&apos;automatisation pour plateformes exigeantes. Basé entre l&apos;Europe et l&apos;Afrique de l&apos;Ouest, déployé mondialement.
              </p>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#fafbfc] border border-[#e2e6eb] text-[12px] font-mono text-[#090a0c]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Statut : Disponible pour missions Q1/Q2 {currentYear}</span>
              </div>
            </div>

            {/* Quick Switch to V1 */}
            <div className="mt-8 pt-6 border-t border-[#f0f2f5]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a92a0] mb-2">
                Comparatif de Design
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0f52ba] hover:text-[#0a3a85] transition-colors group"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" />
                <span>Basculer vers la Variante V1 (Épurée Framer Classique)</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Navigation & System */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a92a0] mb-4">
              Navigation
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="#matrix" className="text-[#090a0c] hover:text-[#0f52ba] transition-colors">
                  Réalisations &amp; Matrix
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-[#090a0c] hover:text-[#0f52ba] transition-colors">
                  Architecture &amp; Piliers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#090a0c] hover:text-[#0f52ba] transition-colors">
                  Avis vérifiés &amp; Preuves
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#090a0c] hover:text-[#0f52ba] transition-colors">
                  Démarrer une mission
                </a>
              </li>
              <li>
                <a
                  href="/Tobias Agossou - Site.dc.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#5e6573] hover:text-[#090a0c] transition-colors text-[13px]"
                >
                  <span>Maquette originale Framer</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Profiles */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a92a0] mb-4">
              Preuves &amp; Plateformes
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="https://comeup.com/fr/@tobias-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full text-[#090a0c] hover:text-[#0f52ba] transition-colors"
                >
                  <span className="font-medium">ComeUp Profil Officiel</span>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    508+ avis
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://fr.fiverr.com/s/RVraW78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full text-[#090a0c] hover:text-[#0f52ba] transition-colors"
                >
                  <span className="font-medium">Fiverr Studio Pro</span>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                    5.0 ★
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tobiags"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#5e6573] hover:text-[#090a0c] transition-colors"
                >
                  <span>GitHub (@tobiags)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@TobiasAgossou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#5e6573] hover:text-[#090a0c] transition-colors"
                >
                  <span>YouTube Studio</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Infrastructure */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a92a0] mb-4">
              Infrastructure &amp; Droit
            </div>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-[#5e6573] hover:text-[#090a0c] transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-[#5e6573] hover:text-[#090a0c] transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li className="pt-2 text-[12px] font-mono text-[#8a92a0] leading-relaxed">
                Hébergement certifié VPS Coolify conteneurisé Docker autonome.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright automated dynamic year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#5e6573]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#090a0c] font-medium">
              &copy; {currentYear} Tobias Agossou
            </span>
            <span className="text-[#e2e6eb]">&bull;</span>
            <span>Digital Systems Studio — Tous droits réservés</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#8a92a0]">
            <span className="inline-flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#0f52ba]" />
              <span>Next.js 15 &bull; NestJS Ready &bull; Standalone Docker</span>
            </span>
            <span className="text-[#e2e6eb]">&bull;</span>
            <span className="text-[#090a0c] font-medium">Variante V2 Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
