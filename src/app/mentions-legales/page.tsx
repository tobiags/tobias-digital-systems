import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales — Tobias Agossou | Digital Systems Studio',
  description:
    'Mentions légales, informations éditeur, hébergement et propriété intellectuelle de Tobias Agossou — Digital Systems Studio.',
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-main">
      <Header />

      <main className="flex-1 max-w-[1000px] mx-auto px-6 md:px-10 py-12 md:py-20 w-full">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETOUR À L&apos;ACCUEIL</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="border-b border-border-subtle pb-8 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-text-muted uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>TRANSPARENCE &amp; CADRE JURIDIQUE</span>
          </div>
          <h1 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-main mb-4">
            Mentions Légales
          </h1>
          <p className="font-mono text-xs text-text-muted">
            Dernière mise à jour : 15 novembre 2026 · En vigueur conformément aux lois en vigueur
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-[15px] leading-relaxed text-text-soft">
          {/* Section 1: Éditeur du site */}
          <section className="border-l-2 border-border-strong pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              1. Éditeur du site
            </h2>
            <p className="mb-3">
              Le présent site internet accessible à l&apos;adresse{' '}
              <strong className="text-text-main font-semibold">
                https://www.tobiasagossou.website
              </strong>{' '}
              est édité et administré par :
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-text-main bg-surface-2 p-5 rounded-lg border border-border-subtle">
              <li>
                <span className="text-text-muted">Nom &amp; Prénom :</span> Tobias Agossou
              </li>
              <li>
                <span className="text-text-muted">Activité :</span> Consultant indépendant en conception de systèmes numériques, architecture web &amp; automatisation logicielle (Digital Systems Studio)
              </li>
              <li>
                <span className="text-text-muted">Statut professionnel :</span> Entrepreneur individuel / Profession libérale indépendante
              </li>
              <li>
                <span className="text-text-muted">Contact direct :</span> contact@tobiasagossou.website
              </li>
              <li>
                <span className="text-text-muted">Directeur de la publication :</span> Tobias Agossou
              </li>
            </ul>
          </section>

          {/* Section 2: Hébergement */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              2. Hébergement de l&apos;infrastructure
            </h2>
            <p className="mb-3">
              Le site et ses services applicatifs sont hébergés sur un serveur dédié virtuel (VPS) hautement sécurisé administré via la plateforme open-source Coolify v4 avec reverse-proxy Traefik et chiffrement SSL automatique :
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-text-main bg-surface-2 p-5 rounded-lg border border-border-subtle">
              <li>
                <span className="text-text-muted">Fournisseur d&apos;infrastructure :</span> Contabo GmbH
              </li>
              <li>
                <span className="text-text-muted">Siège social :</span> Aschauer Straße 32a, 81549 Munich, Allemagne
              </li>
              <li>
                <span className="text-text-muted">Réglementation :</span> Datacenters situés au sein de l&apos;Union Européenne, conformes aux exigences RGPD.
              </li>
            </ul>
          </section>

          {/* Section 3: Propriété intellectuelle */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              3. Propriété intellectuelle et droits d&apos;auteur
            </h2>
            <p className="mb-3">
              L&apos;ensemble des éléments composant ce site — notamment les textes, graphismes, logotypes, signatures visuelles, icônes, animations, photographies, architectures applicatives et codes sources — sont la propriété exclusive de Tobias Agossou, à l&apos;exception des marques, logos ou éléments visuels appartenant à des sociétés tierces ou clients (notamment ComeUp, Fiverr, GitHub) mentionnés à des fins exclusives de citation et d&apos;authentification de réalisations.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle de ces éléments, par quelque procédé que ce soit, sans l&apos;autorisation expresse et écrite préalable de Tobias Agossou, est formellement interdite et constitue une contrefaçon sanctionnée par les dispositions du Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Section 4: Limitation de responsabilité */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              4. Limitation de responsabilité
            </h2>
            <p className="mb-3">
              Tobias Agossou met en œuvre tous les moyens raisonnables pour assurer l&apos;exactitude, la fraîcheur et la disponibilité des informations diffusées sur ce site. Toutefois, des inexactitudes ou omissions involontaires peuvent survenir.
            </p>
            <p>
              L&apos;éditeur ne saurait être tenu responsable d&apos;éventuelles interruptions temporaires du service dues à des opérations de maintenance technique, ni des dommages directs ou indirects pouvant résulter de l&apos;accès ou de l&apos;impossibilité d&apos;accéder au site.
            </p>
          </section>

          {/* Section 5: Liens hypertextes */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              5. Liens hypertextes externes
            </h2>
            <p>
              Le site propose des liens vers des plateformes externes certifiées (telles que les profils de freelancing sur ComeUp et Fiverr, ou des dépôts de code sur GitHub). L&apos;éditeur décline toute responsabilité quant au contenu, à la disponibilité ou aux politiques de confidentialité de ces sites tiers.
            </p>
          </section>

          {/* Section 6: Droit applicable */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              6. Droit applicable et attribution de juridiction
            </h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site{' '}
              <strong className="text-text-main font-semibold">
                https://www.tobiasagossou.website
              </strong>{' '}
              est soumis au droit français et européen. À défaut de résolution amiable, les tribunaux compétents seront saisis conformément aux règles de procédure civile.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
