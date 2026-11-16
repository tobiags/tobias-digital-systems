'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Play, GitBranch } from 'lucide-react';
import { SpringCard } from '@/components/motion/SpringCard';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

const repos = [
  {
    name: 'video-api-n8n',
    desc: 'Pipeline IA de génération de publicités vidéo, du brief à l’export automatisé.',
    stack: 'n8n · OpenAI · FFmpeg',
    lang: 'Python',
    link: 'https://github.com/tobiags/video-api-n8n',
  },
  {
    name: 'maquette_automatisation_garage',
    desc: 'Dashboard complet pour garage automobile : rendez-vous, devis, suivi client.',
    stack: 'Next.js · Supabase',
    lang: 'TypeScript',
    link: 'https://github.com/tobiags/maquette_automatisation_garage',
  },
  {
    name: 'cad-quote-system',
    desc: 'Système de devis automatisé pour fabrication sur mesure (CAD → PDF).',
    stack: 'Python · AutoCAD API',
    lang: 'Python',
    link: 'https://github.com/tobiags/cad-quote-system',
  },
  {
    name: 'fenua-api-automation',
    desc: 'Automatisation des flux et échanges de données via l’API Fenua Pacific.',
    stack: 'Node.js · REST · n8n',
    lang: 'JavaScript',
    link: 'https://github.com/tobiags/fenua-api-automation',
  },
  {
    name: 'automatisation_myfoodbuddy.be',
    desc: 'Bot WhatsApp + gestion automatique des commandes pour restauration.',
    stack: 'Twilio · n8n · WooCommerce',
    lang: 'PHP',
    link: 'https://github.com/tobiags/automatisation_myfoodbuddy.be',
  },
  {
    name: 'AR_SIMULATEUR-',
    desc: 'Simulateur de réalité augmentée pour visualisation produit en contexte réel.',
    stack: 'WebXR · Three.js · JavaScript',
    lang: 'JavaScript',
    link: 'https://github.com/tobiags/AR_SIMULATEUR-',
  },
];

const githubStats = [
  { value: '42', label: 'DÉPÔTS PUBLICS' },
  { value: '6', label: 'PROJETS SÉLECTIONNÉS' },
  { value: '5', label: 'DOMAINES D’EXPERTISE' },
  { value: '↻', label: 'ACTIVITÉ CONTINUE' },
];

export function GithubAndDemos() {
  const levels = [
    'rgba(41,82,255,0.08)',
    'rgba(41,82,255,0.25)',
    'rgba(41,82,255,0.45)',
    'rgba(41,82,255,0.7)',
    'rgba(41,82,255,0.92)',
  ];
  const seed = [
    3, 0, 1, 2, 0, 1, 4, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 3, 0, 2,
    1, 4, 2, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 4, 1, 0, 3, 2, 1, 4, 2, 0, 1, 3, 2,
    4, 1,
  ];
  const ghWeeks = Array.from({ length: 48 }, (_, wi) =>
    Array.from(
      { length: 7 },
      (_, di) => levels[seed[(wi * 7 + di) % seed.length] || 0]
    )
  );

  return (
    <>
      {/* GITHUB & CODE EN PRODUCTION */}
      <section
        id="code"
        className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border-subtle bg-text-main text-surface-2"
      >
        <RevealOnScroll direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/50 mb-3 uppercase">
                CODE &amp; SYSTÈMES · 09
              </div>
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-white max-w-[24ch]">
                Des expérimentations techniques aux solutions utilisées en
                production.
              </h2>
            </div>

            <div className="flex gap-8 md:gap-12 flex-wrap">
              {githubStats.map((g, idx) => (
                <div key={idx}>
                  <div className="font-display text-2xl md:text-3xl font-medium text-white mb-1">
                    {g.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider text-white/50 max-w-[14ch]">
                    {g.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((r, idx) => (
              <SpringCard
                key={idx}
                hoverLift={-3}
                hoverScale={1.008}
                className="bg-[#1b1c1e] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/25 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white/50">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10.5px]">tobiags / {r.name}</span>
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-white mb-2">
                    {r.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {r.desc}
                  </p>
                  <div className="font-mono text-[10px] tracking-wider text-accent mb-6">
                    {r.stack}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-surface-2 text-text-main text-xs font-semibold py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                  >
                    <span>VOIR LE CODE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpringCard>
            ))}
          </div>

          {/* Contributions Heatmap */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="font-mono text-[10.5px] tracking-wider text-white/50 mb-4">
              ACTIVITÉ GITHUB — RYTHME DE LIVRAISON CONTINU
            </div>
            <div className="flex gap-1 overflow-x-auto pb-4 no-scrollbar">
              {ghWeeks.map((w, wi) => (
                <div key={wi} className="flex flex-col gap-1 flex-none">
                  {w.map((color, di) => (
                    <div
                      key={di}
                      className="w-2.5 h-2.5 rounded-[2px]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* DÉMONSTRATIONS VIDÉO & YOUTUBE */}
      <section
        id="demos"
        className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border-subtle"
      >
        <RevealOnScroll direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-[11px] tracking-widest text-text-muted mb-3 uppercase">
                DÉMONSTRATIONS · 10
              </div>
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[26ch]">
                Voir les systèmes fonctionner, pas seulement en lire la
                description.
              </h2>
            </div>
            <Link
              href="https://www.youtube.com/@tobiasagossou4193"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full border border-border-strong text-text-main hover:bg-surface-2 hover:border-text-main transition-all active:scale-[0.98] self-start md:self-auto"
            >
              <span>CHAÎNE YOUTUBE OFFICIELLE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 items-stretch">
            {/* Main Showcase Video */}
            <Link
              href="https://youtu.be/MKkchd6Vvfk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-[420px] bg-black flex items-center justify-center p-8 border border-border-subtle shadow-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://img.youtube.com/vi/MKkchd6Vvfk/maxresdefault.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-10" />
              <div className="relative z-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-2 text-text-main flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-4">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <h3 className="text-white font-display text-xl sm:text-2xl font-medium mb-2">
                  Démonstration complète — Pipeline &amp; Architecture
                </h3>
                <p className="font-mono text-xs text-white/80">
                  Next.js · Stripe · n8n · Fastify · 6:42
                </p>
              </div>
            </Link>

            {/* Secondary Video Cards */}
            <div className="flex flex-col gap-6">
              <Link
                href="https://youtu.be/NLGJCEhI8BA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-[190px] bg-black flex items-center justify-center p-6 border border-border-subtle shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-65 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://img.youtube.com/vi/NLGJCEhI8BA/maxresdefault.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-surface-2 text-text-main flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-2">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <h4 className="text-white font-medium text-sm sm:text-base font-display">
                    Retour d&apos;expérience &amp; Témoignage client
                  </h4>
                </div>
              </Link>

              <Link
                href="https://youtu.be/uJdsTT6JYE0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-[190px] bg-black flex items-center justify-center p-6 border border-border-subtle shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-65 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://img.youtube.com/vi/uJdsTT6JYE0/maxresdefault.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-surface-2 text-text-main flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-2">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <h4 className="text-white font-medium text-sm sm:text-base font-display">
                    Coulisses techniques du système
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
