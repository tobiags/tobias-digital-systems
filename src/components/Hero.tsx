'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SpringCard } from '@/components/motion/SpringCard';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

export function Hero() {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-6 pb-16 md:pt-12 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(320px,460px)_1fr] gap-10 lg:gap-14 items-center overflow-hidden lg:overflow-visible">
      <RevealOnScroll direction="up" distance={20} duration={0.65} className="flex flex-col min-w-0 z-10">
        <div className="font-mono text-[11px] tracking-[0.14em] text-text-muted mb-4 md:mb-5 uppercase">
          DIGITAL SYSTEMS STUDIO
        </div>

        <h1 className="font-display font-medium text-[clamp(3.1rem,6vw,5.4rem)] leading-[0.93] tracking-[-0.03em] text-text-main mb-6">
          TOBIAS
          <br />
          AGOSSOU
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-border-strong" />
          <div className="font-mono text-xs tracking-wider text-text-soft uppercase">
            Architecture, Produit &amp; Automatisation
          </div>
        </div>

        <p className="text-[15px] md:text-base leading-relaxed text-text-soft max-w-[36ch] mb-8 font-normal">
          J&apos;aide les entreprises ambitieuses à structurer, concevoir et faire
          évoluer des systèmes numériques clairs, évolutifs et centrés sur
          l&apos;humain.
        </p>

        <div className="flex flex-wrap items-center gap-3.5 mb-10 md:mb-14">
          <Link
            href="#about"
            className="group inline-flex items-center gap-2.5 bg-text-main text-surface-2 text-xs font-semibold tracking-wider pl-6 pr-2.5 py-2.5 rounded-full hover:bg-black/85 transition-all shadow-sm active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span>DÉCOUVRIR L&apos;APPROCHE</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-text-main text-xs font-semibold tracking-wider px-6 py-3 rounded-full border border-border-strong hover:bg-surface-2 hover:border-text-main transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span>VOIR LES RÉALISATIONS</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-border-subtle font-mono text-[10px] md:text-[11px] tracking-wider text-text-muted">
          <div>
            <div className="mb-1 text-[9px] sm:text-[9.5px]">AVIS VÉRIFIÉS</div>
            <Link
              href="https://comeup.com/fr/@tobias-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-display text-2xl sm:text-3xl text-text-main font-medium tracking-tight hover:text-accent transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              title="508+ avis vérifiés sur ComeUp & Fiverr"
            >
              <span>508+</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
            </Link>
          </div>

          <div>
            <div className="mb-1 text-[9px] sm:text-[9.5px]">MISSIONS LIVRÉES</div>
            <div className="font-display text-2xl sm:text-3xl text-text-main font-medium tracking-tight">
              508
            </div>
          </div>

          <div className="text-right">
            <div className="mb-1 text-[9px] sm:text-[9.5px]">FREELANCE DEPUIS</div>
            <div className="font-display text-2xl sm:text-3xl text-text-main font-medium tracking-tight">
              2021
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <div className="relative w-full aspect-[4/5] sm:aspect-[655/620] min-h-[460px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-border-subtle opacity-50" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-border-subtle opacity-50" />
        <div className="absolute w-[78%] sm:w-[60%] aspect-square rounded-full bg-bg-soft" />

        <div className="relative w-[70%] sm:w-[56%] h-[88%] sm:h-[94%] overflow-hidden rounded-t-2xl z-10 shadow-sm border border-border-subtle/60 bg-[#e8e4dc]">
          <Image
            src="/images/portrait-tobias.png"
            alt="Tobias Agossou"
            fill
            sizes="(max-width: 768px) 80vw, 45vw"
            priority
            className="object-cover object-top"
          />
        </div>

        <SpringCard
          drift="driftA"
          className="absolute right-[2%] sm:right-[5%] top-[26%] sm:top-[30%] w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center p-2.5 shadow-md z-30"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Sceau Tobias Agossou"
            width={44}
            height={44}
            className="w-full h-full object-contain"
          />
        </SpringCard>

        <SpringCard
          drift="driftA"
          className="hidden sm:block absolute left-[1%] lg:left-[2%] top-[3%] w-[160px] bg-surface-2 border border-border-subtle rounded-xl p-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] z-20"
        >
          <div className="font-display text-2xl font-medium text-text-main mb-1">
            +10
          </div>
          <div className="font-mono text-[9.5px] tracking-wider text-text-muted leading-tight">
            PROJETS LANCÉS
            <br />
            depuis 2022
          </div>
        </SpringCard>

        <SpringCard
          drift="driftB"
          className="hidden sm:block absolute right-[2%] lg:right-[4%] top-[2%] w-[190px] bg-surface-2 border border-border-subtle rounded-xl p-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] z-20"
        >
          <div className="flex justify-between items-start mb-2">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-text-main">
              DESIGN DE PRODUIT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none mt-1" />
          </div>
          <p className="text-[11.5px] leading-snug text-text-soft">
            Des expériences utiles, épurées et alignées sur vos objectifs.
          </p>
          <div className="mt-3 flex justify-end">
            <div className="w-5 h-5 rounded-full border border-border-strong flex items-center justify-center text-[10px]">
              ↗
            </div>
          </div>
        </SpringCard>

        <SpringCard
          drift="driftB"
          className="hidden md:block absolute left-[0%] lg:left-[1%] top-[24%] w-[165px] bg-surface-2 border border-border-subtle rounded-xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] z-20"
        >
          <div className="font-mono text-[9px] tracking-wider font-semibold text-text-main mb-1.5">
            SYSTÈMES
          </div>
          <p className="text-[11.5px] leading-snug text-text-soft">
            Des fondations solides pour des produits qui durent.
          </p>
          <div className="mt-2.5 flex justify-end">
            <div className="w-5 h-5 rounded-full border border-border-strong flex items-center justify-center text-[10px]">
              ↗
            </div>
          </div>
        </SpringCard>

        <SpringCard
          drift="driftA"
          className="hidden md:block absolute right-[1%] lg:right-[3%] top-[45%] w-[185px] bg-text-main text-surface-2 border border-black/20 rounded-xl p-3.5 shadow-[0_14px_34px_rgba(0,0,0,0.14)] z-20"
        >
          <div className="flex justify-between items-start mb-1.5">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-white/90">
              AUTOMATISATION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none mt-1" />
          </div>
          <p className="text-[11px] leading-snug text-white/75">
            Moins d&apos;outils. Plus de clarté. Des processus qui travaillent pour vous.
          </p>
        </SpringCard>

        <SpringCard
          drift="driftB"
          className="hidden sm:block absolute left-[2%] lg:left-[3%] bottom-[8%] w-[175px] bg-text-main text-surface-2 border border-black/20 rounded-xl p-3.5 shadow-[0_14px_34px_rgba(0,0,0,0.14)] z-20"
        >
          <div className="font-mono text-[9px] tracking-wider font-semibold text-white/90 mb-1.5">
            APPROCHE
          </div>
          <p className="text-[11px] leading-snug text-white/80 font-mono">
            Stratégie → Design
            <br />
            Système → Croissance
          </p>
          <div className="mt-2 flex justify-end">
            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white">
              ↗
            </div>
          </div>
        </SpringCard>

        <SpringCard
          drift="driftA"
          className="hidden sm:block absolute right-[2%] lg:right-[5%] bottom-[4%] w-[175px] bg-surface-2 border border-border-subtle rounded-xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] z-20"
        >
          <div className="flex justify-between items-start mb-1.5">
            <span className="font-mono text-[9px] tracking-wider font-semibold text-text-main">
              CONSEIL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none mt-1" />
          </div>
          <p className="text-[11px] leading-snug text-text-soft">
            Des décisions éclairées à chaque étape de votre croissance.
          </p>
        </SpringCard>
      </div>
    </section>
  );
}
