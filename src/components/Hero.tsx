import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-8 pb-16 md:pt-14 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(320px,460px)_1fr] gap-12 lg:gap-16 items-center">
      {/* Hero Left Column */}
      <div className="flex flex-col min-w-0 z-10">
        <div className="font-mono text-[11px] tracking-[0.14em] text-text-muted mb-6 uppercase">
          DIGITAL SYSTEMS STUDIO
        </div>

        <h1 className="font-display font-normal text-[clamp(3.2rem,5.5vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-text-main mb-6">
          TOBIAS
          <br />
          AGOSSOU
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-border-strong" />
          <div className="font-mono text-xs tracking-wider text-text-soft">
            ARCHITECTURE & PRODUIT
          </div>
        </div>

        <p className="text-[15px] md:text-base leading-relaxed text-text-soft max-w-[38ch] mb-8">
          J&apos;aide les entreprises ambitieuses à structurer, concevoir et faire
          évoluer des systèmes numériques clairs, évolutifs et centrés sur
          l&apos;humain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <Link href="#about" className="btn-primary">
            <span>DÉCOUVRIR L&apos;APPROCHE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#projects" className="btn-ghost">
            <span>VOIR LES RÉALISATIONS</span>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle font-mono text-[10px] md:text-[11px] tracking-wider text-text-muted">
          <div>
            <div className="mb-1 text-[9.5px]">AVIS POSITIFS</div>
            <div className="font-display text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              400+
            </div>
          </div>
          <div>
            <div className="mb-1 text-[9.5px]">MISSIONS RÉALISÉES</div>
            <div className="font-display text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              508
            </div>
          </div>
          <div className="text-right">
            <div className="mb-1 text-[9.5px]">FREELANCE DEPUIS</div>
            <div className="font-display text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              2021
            </div>
          </div>
        </div>
      </div>

      {/* Hero Right: Portrait & Interactive Floating Drift Cards */}
      <div className="relative w-full aspect-[655/620] min-h-[480px] md:min-h-[580px] flex items-center justify-center">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-border-subtle opacity-50" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-border-subtle opacity-50" />

        {/* Backdrop Ambient Circle */}
        <div className="absolute w-[62%] aspect-square rounded-full bg-bg-soft" />

        {/* Center Portrait Image */}
        <div className="relative w-[60%] h-[92%] overflow-hidden rounded-t-xl z-10 shadow-sm border border-border-subtle/40">
          <Image
            src="/images/portrait-tobias.png"
            alt="Tobias Agossou"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Stamp Monogram */}
        <div className="hidden sm:flex absolute right-[6%] top-[30%] w-12 h-12 rounded-full border border-border-strong bg-surface-2 items-center justify-center font-display font-semibold text-sm shadow-sm animate-driftA z-20">
          TA
        </div>

        {/* Floating Card: +10 Projets (Top Left) */}
        <div className="absolute left-[0%] top-[4%] w-[160px] bg-surface-2 border border-border-subtle rounded-xl p-4 shadow-md animate-driftA z-20">
          <div className="font-display text-2xl font-normal text-text-main mb-1">
            +10
          </div>
          <div className="font-mono text-[9.5px] tracking-wider text-text-muted leading-tight">
            PROJETS LANCÉS
            <br />
            depuis 2022
          </div>
        </div>

        {/* Floating Card: Design de Produit (Top Right) */}
        <div className="hidden sm:block absolute right-[2%] top-[6%] w-[210px] bg-surface-2 border border-border-subtle rounded-xl p-4 shadow-md animate-driftB z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-text-main">
              DESIGN DE PRODUIT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-xs text-text-soft leading-snug">
            Des expériences utiles, épurées et alignées sur vos objectifs.
          </p>
          <div className="mt-3 w-6 h-6 rounded-full border border-border-strong flex items-center justify-center text-xs text-text-main">
            ↗
          </div>
        </div>

        {/* Floating Card: Systèmes (Mid Left) */}
        <div className="hidden sm:block absolute left-[1%] top-[34%] w-[180px] bg-surface-2 border border-border-subtle rounded-xl p-3.5 shadow-md animate-driftB z-20">
          <div className="font-mono text-[9px] tracking-wider font-semibold text-text-main mb-1.5">
            SYSTÈMES
          </div>
          <p className="text-[11px] text-text-soft leading-snug">
            Des fondations solides pour des produits qui durent.
          </p>
        </div>

        {/* Floating Card: Automatisation (Mid Right - Dark Card) */}
        <div className="absolute right-[0%] top-[48%] w-[210px] bg-text-main text-surface-2 rounded-xl p-4 shadow-xl animate-driftA z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-white/90">
              AUTOMATISATION & IA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-[11px] text-white/75 leading-relaxed">
            Moins d&apos;outils. Plus de clarté. Des processus qui travaillent pour vous.
          </p>
        </div>

        {/* Floating Card: Approche (Bottom Left - Dark Card) */}
        <div className="hidden sm:block absolute left-[2%] bottom-[12%] w-[180px] bg-text-main text-surface-2 rounded-xl p-3.5 shadow-xl animate-driftB z-20">
          <div className="font-mono text-[9px] tracking-wider font-semibold text-white/90 mb-1.5">
            APPROCHE
          </div>
          <p className="text-[11px] text-white/80 leading-snug">
            Stratégie → Design
            <br />
            Système → Croissance
          </p>
        </div>

        {/* Floating Card: Conseil (Bottom Right) */}
        <div className="hidden sm:block absolute right-[4%] bottom-[6%] w-[190px] bg-surface-2 border border-border-subtle rounded-xl p-3.5 shadow-md animate-driftA z-20">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-text-main">
              CONSEIL STRATÉGIQUE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-[11px] text-text-soft leading-snug">
            Des décisions éclairées à chaque étape de votre croissance.
          </p>
        </div>
      </div>
    </section>
  );
}
