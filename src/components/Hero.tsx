import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-6 pb-12 md:pt-14 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(320px,460px)_1fr] gap-10 lg:gap-14 items-center overflow-hidden lg:overflow-visible">
      {/* Hero Left Column */}
      <div className="flex flex-col min-w-0 z-10 animate-fade-up">
        <div className="font-mono text-[11px] tracking-[0.14em] text-text-muted mb-4 md:mb-6 uppercase">
          DIGITAL SYSTEMS STUDIO
        </div>

        <h1 className="font-display font-normal text-[clamp(2.8rem,5.5vw,5.2rem)] leading-[0.95] tracking-[-0.03em] text-text-main mb-6">
          TOBIAS
          <br />
          AGOSSOU
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-border-strong" />
          <div className="font-mono text-xs tracking-wider text-text-soft uppercase">
            Architecture &amp; Produit
          </div>
        </div>

        <p className="text-[15px] md:text-base leading-relaxed text-text-soft max-w-[38ch] mb-8">
          J&apos;aide les entreprises ambitieuses à structurer, concevoir et faire
          évoluer des systèmes numériques clairs, évolutifs et centrés sur
          l&apos;humain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10 md:mb-14">
          <Link href="#about" className="btn-primary w-full sm:w-auto">
            <span>DÉCOUVRIR L&apos;APPROCHE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#projects" className="btn-ghost w-full sm:w-auto">
            <span>VOIR LES RÉALISATIONS</span>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-border-subtle font-mono text-[10px] md:text-[11px] tracking-wider text-text-muted">
          <div>
            <div className="mb-1 text-[9px] sm:text-[9.5px]">AVIS POSITIFS</div>
            <div className="font-display text-xl sm:text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              410+
            </div>
          </div>
          <div>
            <div className="mb-1 text-[9px] sm:text-[9.5px]">VENTES RÉALISÉES</div>
            <div className="font-display text-xl sm:text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              519
            </div>
          </div>
          <div className="text-right">
            <div className="mb-1 text-[9px] sm:text-[9.5px]">FREELANCE DEPUIS</div>
            <div className="font-display text-xl sm:text-2xl md:text-3xl text-text-main font-normal tracking-tight">
              AOÛT 2021
            </div>
          </div>
        </div>
      </div>

      {/* Hero Right: Portrait & Interactive Floating Drift Cards */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[655/620] min-h-[440px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-border-subtle opacity-40" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-border-subtle opacity-40" />

        {/* Backdrop Ambient Circle */}
        <div className="absolute w-[75%] sm:w-[62%] aspect-square rounded-full bg-bg-soft" />

        {/* Center Portrait Image */}
        <div className="relative w-[72%] sm:w-[58%] h-[88%] sm:h-[92%] overflow-hidden rounded-t-2xl z-10 shadow-sm border border-border-subtle/50">
          <Image
            src="/images/portrait-tobias.png"
            alt="Tobias Agossou"
            fill
            sizes="(max-width: 768px) 80vw, 45vw"
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Monogram Stamp Badge */}
        <div
          className="absolute right-[4%] sm:right-[6%] top-[24%] sm:top-[30%] w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center p-2 shadow-md animate-drift-a z-20"
          style={{ animationDelay: '0.4s' }}
          title="Tobias Agossou — Sceau Officiel"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Sceau Tobias Agossou"
            width={44}
            height={44}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Card 1: 519 Ventes (Top Left) */}
        <div
          className="absolute left-[1%] sm:left-[0%] top-[4%] w-[135px] sm:w-[165px] bg-surface-2 border border-border-subtle rounded-xl p-3 sm:p-4 shadow-md animate-drift-a z-20"
          style={{ animationDelay: '0s' }}
        >
          <div className="font-display text-xl sm:text-2xl font-normal text-text-main mb-0.5">
            519
          </div>
          <div className="font-mono text-[8.5px] sm:text-[9.5px] tracking-wider text-text-muted leading-tight">
            VENTES AU TOTAL
            <br />
            sur ComeUp (99%)
          </div>
        </div>

        {/* Card 2: Design de Produit (Top Right) */}
        <div
          className="hidden sm:block absolute right-[2%] top-[6%] w-[190px] md:w-[210px] bg-surface-2 border border-border-subtle rounded-xl p-3.5 md:p-4 shadow-md animate-drift-b z-20"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-text-main">
              DESIGN DE PRODUIT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-[11px] md:text-xs text-text-soft leading-snug">
            Des expériences utiles, épurées et alignées sur vos objectifs.
          </p>
          <div className="mt-2.5 w-5 h-5 rounded-full border border-border-strong flex items-center justify-center text-[10px] text-text-main">
            ↗
          </div>
        </div>

        {/* Card 3: Systèmes (Mid Left) */}
        <div
          className="hidden md:block absolute left-[1%] top-[34%] w-[170px] bg-surface-2 border border-border-subtle rounded-xl p-3 shadow-md animate-drift-b z-20"
          style={{ animationDelay: '2.1s' }}
        >
          <div className="font-mono text-[9px] tracking-wider font-semibold text-text-main mb-1">
            SYSTÈMES
          </div>
          <p className="text-[11px] text-text-soft leading-snug">
            Des fondations solides pour des produits qui durent.
          </p>
        </div>

        {/* Card 4: Automatisation (Mid Right - Dark Card) */}
        <div
          className="absolute right-[1%] sm:right-[0%] top-[50%] sm:top-[48%] w-[150px] sm:w-[210px] bg-text-main text-surface-2 rounded-xl p-3 sm:p-4 shadow-xl animate-drift-a z-20"
          style={{ animationDelay: '1.8s' }}
        >
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="font-mono text-[8.5px] sm:text-[9.5px] tracking-wider font-semibold text-white/90">
              AUTOMATISATION &amp; IA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
          <p className="text-[10px] sm:text-[11px] text-white/75 leading-tight sm:leading-relaxed">
            Moins d&apos;outils. Plus de clarté. Des processus qui travaillent pour vous.
          </p>
        </div>

        {/* Card 5: Approche (Bottom Left - Dark Card) */}
        <div
          className="hidden sm:block absolute left-[2%] bottom-[10%] w-[165px] bg-text-main text-surface-2 rounded-xl p-3 shadow-xl animate-drift-b z-20"
          style={{ animationDelay: '2.7s' }}
        >
          <div className="font-mono text-[9px] tracking-wider font-semibold text-white/90 mb-1">
            APPROCHE
          </div>
          <p className="text-[11px] text-white/80 leading-snug">
            Stratégie → Design
            <br />
            Système → Croissance
          </p>
        </div>

        {/* Card 6: Conseil (Bottom Right) */}
        <div
          className="hidden sm:block absolute right-[4%] bottom-[5%] w-[180px] bg-surface-2 border border-border-subtle rounded-xl p-3 shadow-md animate-drift-a z-20"
          style={{ animationDelay: '3.3s' }}
        >
          <div className="flex items-center justify-between mb-1">
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
