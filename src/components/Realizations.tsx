'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SpringCard } from '@/components/motion/SpringCard';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

const projects = [
  {
    tag: 'AUTOMATISATION IA',
    year: '2025',
    name: 'Pipeline Vidéo IA',
    desc: 'Du brief client à la vidéo publicitaire exportée — sans intervention humaine. Génération de script, voix off, et montage automatisé.',
    result: '-90% de temps de production',
    stack: 'n8n · OpenAI · FFmpeg · Python',
    link: 'https://github.com/tobiags/video-api-n8n',
  },
  {
    tag: 'WORDPRESS & API',
    year: '2024',
    name: 'Bot WhatsApp Restauration',
    desc: 'Prise de commandes, confirmation temps réel et synchronisation WooCommerce. Le restaurateur n’a plus à décrocher pour chaque commande.',
    result: '+35% de commandes traitées',
    stack: 'Twilio · n8n · WooCommerce · PHP',
    link: 'https://github.com/tobiags/automatisation_myfoodbuddy.be',
  },
  {
    tag: 'DÉVELOPPEMENT SUR MESURE',
    year: '2025',
    name: 'Système de Devis CAD',
    desc: 'L’artisan uploade son plan, le système calcule automatiquement les matériaux, génère le devis PDF et l’envoie au client.',
    result: '2j de travail → 4 minutes',
    stack: 'Python · AutoCAD API · PDF · Email',
    link: 'https://github.com/tobiags/cad-quote-system',
  },
];

const outcomes = [
  {
    value: '−70%',
    label: 'Temps de saisie',
    desc: 'Les tâches manuelles répétitives sont absorbées par l’automatisation et les formulaires intelligents.',
  },
  {
    value: '×3',
    label: 'Rapidité d’exécution',
    desc: 'Moins d’allers-retours, suppression des goulots d’étranglement sur toute la chaîne de travail.',
  },
  {
    value: '508+',
    label: 'Missions livrées',
    desc: 'Depuis 2021 sur ComeUp, Fiverr et en direct, avec plus de 508 avis 5 étoiles vérifiés.',
  },
  {
    value: '5h',
    label: 'Gagnées par semaine',
    desc: 'En moyenne par entrepreneur et équipe ayant automatisé ses processus clés.',
  },
  {
    value: '0€',
    label: 'Abonnement récurrent',
    desc: 'Le système livré vous appartient à 100%. Aucune licence propriétaire mensuelle forcée.',
  },
  {
    value: '< 3 sem',
    label: 'Délai de livraison',
    desc: 'Du premier cadrage jusqu’à la mise en production pour la grande majorité des projets.',
  },
];

export function Realizations() {
  return (
    <>
      {/* RÉALISATIONS SÉLECTIONNÉES */}
      <section
        id="projects"
        className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border-subtle"
      >
        <RevealOnScroll direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4 uppercase">
                RÉALISATIONS · 05
              </div>
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch]">
                Des systèmes qui fonctionnent. Des résultats mesurables.
              </h2>
            </div>
            <Link
              href="https://github.com/tobiags"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full border border-border-strong text-text-main hover:bg-surface-2 hover:border-text-main transition-all active:scale-[0.98] self-start md:self-auto"
            >
              <span>VOIR TOUS LES PROJETS SUR GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-28">
            {projects.map((p, idx) => (
              <SpringCard
                key={idx}
                hoverLift={-4}
                hoverScale={1.008}
                className="group flex flex-col bg-surface-2 border border-border-subtle rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-border-strong transition-all duration-300"
              >
                <div className="p-6 sm:p-7 pb-0 flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded-md bg-accent-soft text-accent">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted">
                    {p.year}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-medium text-xl text-text-main mb-3">
                      {p.name}
                    </h3>
                    <p className="text-xs md:text-[13px] leading-relaxed text-text-soft mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div>
                    {/* Impact metric badge */}
                    <div className="flex items-center gap-2 px-3.5 py-2 bg-bg rounded-lg border border-border-subtle/50 mb-5">
                      <span className="w-2 h-2 rounded-full bg-accent flex-none animate-pulse" />
                      <span className="font-mono text-xs font-semibold text-text-main">
                        {p.result}
                      </span>
                    </div>

                    <div className="font-mono text-[10.5px] text-text-muted tracking-wide mb-6">
                      {p.stack}
                    </div>

                    <Link
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-text-main text-surface-2 text-xs font-semibold tracking-wider py-2.5 rounded-xl hover:bg-black/85 transition-colors"
                    >
                      <span>VOIR LE CODE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </SpringCard>
            ))}
          </div>
        </RevealOnScroll>

        {/* CE QUE ÇA CHANGE · OUTCOMES */}
        <RevealOnScroll direction="up" distance={20}>
          <div className="mb-10 md:mb-12">
            <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4 uppercase">
              CE QUE ÇA CHANGE · 06
            </div>
            <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch]">
              Concrètement, voilà ce que mes clients obtiennent.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border-subtle rounded-2xl overflow-hidden bg-surface-2 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle shadow-sm">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="p-8 sm:p-9 flex flex-col justify-between hover:bg-surface/50 transition-colors"
              >
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-text-main mb-3 leading-none">
                    {o.value}
                  </div>
                  <div className="font-mono text-xs font-semibold tracking-wider text-text-main mb-2 uppercase">
                    {o.label}
                  </div>
                </div>
                <p className="text-xs md:text-[13px] leading-relaxed text-text-soft mt-3">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
