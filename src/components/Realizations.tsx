import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
    value: '508',
    label: 'Missions livrées',
    desc: 'Depuis 2021 sur ComeUp, Fiverr et en direct, avec plus de 400 avis 5 étoiles vérifiés.',
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
        className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border-subtle"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4">
              RÉALISATIONS · 05
            </div>
            <h2 className="font-display font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch]">
              Des systèmes qui fonctionnent. Des résultats mesurables.
            </h2>
          </div>
          <Link
            href="https://github.com/tobiags"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost self-start md:self-auto"
          >
            <span>VOIR TOUS LES PROJETS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-surface-2 border border-border-subtle rounded-xl overflow-hidden hover:border-border-strong hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 md:p-8 flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent">
                  {p.tag}
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  {p.year}
                </span>
              </div>

              <div className="px-6 md:px-8 flex-1 flex flex-col">
                <h3 className="font-display font-normal text-xl text-text-main mb-3 leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs md:text-[13px] leading-relaxed text-text-soft mb-6 flex-1">
                  {p.desc}
                </p>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-bg border border-border-subtle mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none" />
                  <span className="text-xs font-semibold text-text-main">
                    {p.result}
                  </span>
                </div>

                <div className="font-mono text-[10.5px] text-text-muted tracking-wider mb-6">
                  {p.stack}
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6">
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-text-main text-surface-2 text-xs font-semibold py-2.5 rounded-md hover:bg-black/80 transition-colors"
                >
                  <span>VOIR LE CODE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RÉSULTATS / CE QUE ÇA CHANGE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border-subtle">
        <div className="mb-12">
          <div className="font-mono text-[11px] tracking-widest text-text-muted mb-3">
            CE QUE ÇA CHANGE · 06
          </div>
          <h2 className="font-display font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[24ch]">
            Concrètement, voilà ce que mes clients obtiennent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border-subtle rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border-subtle bg-surface-2">
          {outcomes.map((o, idx) => (
            <div
              key={idx}
              className={`p-8 md:p-10 flex flex-col justify-between ${
                idx >= 3 ? 'lg:border-t border-border-subtle' : ''
              }`}
            >
              <div>
                <div className="font-display text-4xl md:text-5xl font-normal tracking-tight text-text-main mb-3 leading-none">
                  {o.value}
                </div>
                <div className="text-sm font-semibold text-text-main mb-2">
                  {o.label}
                </div>
                <p className="text-xs md:text-[13px] leading-relaxed text-text-soft">
                  {o.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
