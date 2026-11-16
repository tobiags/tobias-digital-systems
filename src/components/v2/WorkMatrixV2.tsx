import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Code2, Layers, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Plateforme E-Commerce Haute Vélocité & Système Modulaire',
    client: 'Marque D2C & Retail International',
    image: '/images/ChatGPT Image May 30, 2026, 01_08_57 PM.png',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Stripe'],
    problem:
      'Site historique ralenti par des plugins tiers et un taux de rebond mobile élevé.',
    solution:
      'Refonte totale avec rendu serveur Edge, tunnel de commande sans rechargement de page et synchronisation d’inventaire en temps réel.',
    metric: '+38% de conversion mobile · TTFB réduit de 850ms à 42ms',
    link: '#contact',
  },
  {
    title: 'Architecture Backend Microservices & Moteur de Workflow',
    client: 'SaaS B2B & Opérations Logistiques',
    image: '/images/draw-f77112f8-1c96-46aa-a64f-f9af4a301369.png',
    tags: ['NestJS', 'BullMQ', 'PostgreSQL', 'Docker'],
    problem:
      'Goulots d’étranglement lors du traitement simultané de milliers de commandes et tâches asynchrones.',
    solution:
      'Mise en place d’une file d’attente distribuée Redis avec worker nodes auto-scalés et surveillance des métriques en direct.',
    metric: '100% des commandes traitées sans échec · Zéro interruption de service',
    link: '#contact',
  },
  {
    title: 'Design System Unifié & Interface Applicative Métier',
    client: 'Fintech & Plateforme d’Analyse',
    image: '/images/ChatGPT Image Jul 11, 2026, 12_50_24 PM.png',
    tags: ['React 19', 'Design Tokens', 'Accessibilité W3C', 'Storybook'],
    problem:
      'Incohérence visuelle entre 4 modules distincts et friction pour les utilisateurs quotidiens.',
    solution:
      'Création d’un système de composants réutilisables, typographie calibrée et validation rigoureuse des contrastes et raccourcis clavier.',
    metric: 'Temps d’intégration frontend divisé par 2 · Score d’accessibilité AAA',
    link: '#contact',
  },
];

export function WorkMatrixV2() {
  return (
    <section id="realisations" className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-[#e2e6eb]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#0f52ba] font-semibold mb-3">
            Études de Cas &amp; Réalisations
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#090a0c] tracking-tight">
            Systèmes livrés en environnement de production.
          </h2>
        </div>
        <p className="text-sm text-[#5e6573] max-w-[40ch] leading-relaxed">
          Chaque projet est traité comme une pièce d&apos;ingénierie : nous mesurons
          l&apos;impact avant et après la mise en ligne.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((proj, idx) => (
          <article
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e2e6eb] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center hover:border-[#090a0c] transition-colors"
          >
            {/* Visual Frame */}
            <div className="relative w-full aspect-[16/10] bg-[#f8f9fa] rounded-xl overflow-hidden border border-[#e2e6eb]">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            {/* Architectural & Impact Breakdown */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {proj.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#f1f3f5] text-[#2b303a] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-xs text-[#6c7482] mb-1">
                  {proj.client}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#090a0c] mb-4">
                  {proj.title}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed text-[#4a505c] mb-6">
                  <div>
                    <strong className="text-[#090a0c]">Problématique :</strong> {proj.problem}
                  </div>
                  <div>
                    <strong className="text-[#090a0c]">Solution architecture :</strong> {proj.solution}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e2e6eb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{proj.metric}</span>
                </div>

                <Link
                  href="/v2#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#090a0c] hover:text-[#0f52ba] transition-colors"
                >
                  <span>DÉMARRER UN PROJET SIMILAIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
