import Link from 'next/link';
import { ArrowUpRight, Cpu, GitBranch, Shield, Gauge } from 'lucide-react';

export function PhilosophyV2() {
  return (
    <section id="architecture" className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-[#e2e6eb]">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
        {/* Section Intro */}
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#0f52ba] font-semibold mb-3">
            Principes d&apos;Ingénierie
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#090a0c] tracking-tight leading-tight mb-4">
            Construire pour la charge, concevoir pour la durée.
          </h2>
          <p className="text-[#4a505c] text-sm leading-relaxed mb-6">
            La plupart des applications web souffrent d&apos;architectures improvisées :
            du code entremêlé, des bases de données mal indexées et des dépendances fragiles.
            Nous appliquons une méthode d&apos;ingénierie stricte pour garantir robustesse et lisibilité.
          </p>
          <Link
            href="/v2#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-[#090a0c] hover:text-[#0f52ba] transition-colors"
          >
            <span>AUDITER VOTRE SYSTÈME ACTUEL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Engineering Pillars (No arbitrary 01/02/03 decor, real technical concepts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f4f6f8] flex items-center justify-center text-[#090a0c] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-medium text-[#090a0c] mb-2">
              Architecture Modulaire NestJS &amp; Next.js
            </h3>
            <p className="text-xs text-[#5e6573] leading-relaxed">
              Séparation stricte des responsabilités (couches contrôleur, service, repository).
              Votre code reste lisible, testable et facilement maintenable par n&apos;importe quelle équipe.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f4f6f8] flex items-center justify-center text-[#090a0c] mb-4">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-medium text-[#090a0c] mb-2">
              Optimisation de Vélocité &amp; SEO
            </h3>
            <p className="text-xs text-[#5e6573] leading-relaxed">
              Temps de chargement inférieur à la seconde, structure HTML sémantique conforme aux standards
              W3C, métadonnées OpenGraph et données structurées JSON-LD pour dominer les moteurs de recherche.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f4f6f8] flex items-center justify-center text-[#090a0c] mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-medium text-[#090a0c] mb-2">
              Pipelines d&apos;Automatisation &amp; Queues
            </h3>
            <p className="text-xs text-[#5e6573] leading-relaxed">
              Déchargement des tâches lourdes via files d&apos;attente asynchrones (BullMQ / Redis) :
              génération de rapports, envois de courriels transactionnels, synchronisation d&apos;APIs tierces.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#f4f6f8] flex items-center justify-center text-[#090a0c] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-medium text-[#090a0c] mb-2">
              Déploiement Conteneurisé &amp; Zéro Interruption
            </h3>
            <p className="text-xs text-[#5e6573] leading-relaxed">
              Chaque livraison est empaquetée dans des conteneurs Docker multi-stages avec certificats SSL
              automatisés, reverse-proxy haute performance et sauvegardes régulières.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
