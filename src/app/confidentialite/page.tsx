import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Tobias Agossou | Digital Systems Studio',
  description:
    'Politique de confidentialité et protection des données personnelles (RGPD) appliquée par Tobias Agossou — Digital Systems Studio.',
  alternates: {
    canonical: '/confidentialite',
  },
};

export default function ConfidentialitePage() {
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
            <Lock className="w-4 h-4 text-accent" />
            <span>PROTECTION DES DONNÉES &amp; RGPD</span>
          </div>
          <h1 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-main mb-4">
            Politique de Confidentialité
          </h1>
          <p className="font-mono text-xs text-text-muted">
            Dernière mise à jour : 15 novembre 2026 · Conforme au Règlement Général sur la Protection des Données (RGPD - UE 2016/679)
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-[15px] leading-relaxed text-text-soft">
          {/* Section 1: Introduction & Engagement */}
          <section className="border-l-2 border-border-strong pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              1. Engagement et Principes Directeurs
            </h2>
            <p className="mb-3">
              Dans le cadre de son activité de conseil et d&apos;ingénierie logicielle au sein du studio{' '}
              <strong className="text-text-main font-semibold">Tobias Agossou — Digital Systems Studio</strong>,
              la protection de votre vie privée et de vos données à caractère personnel constitue un engagement éthique et déontologique fondamental.
            </p>
            <p>
              Cette politique a pour vocation de vous informer en toute transparence sur les typologies de données collectées, les raisons de leur traitement, leur durée de conservation et les droits dont vous disposez en application de la réglementation applicable (Règlement UE 2016/679 dit « RGPD » et loi Informatique et Libertés modifiée).
            </p>
          </section>

          {/* Section 2: Responsable de traitement */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              2. Responsable du Traitement
            </h2>
            <p className="mb-3">
              Le responsable du traitement des données personnelles collectées sur le site est :
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-text-main bg-surface-2 p-5 rounded-lg border border-border-subtle">
              <li>
                <span className="text-text-muted">Identité :</span> Tobias Agossou
              </li>
              <li>
                <span className="text-text-muted">Activité :</span> Digital Systems Studio — Ingénierie &amp; Architecture Web
              </li>
              <li>
                <span className="text-text-muted">Contact référent données :</span> contact@tobiasagossou.website
              </li>
            </ul>
          </section>

          {/* Section 3: Données collectées & Finalités */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              3. Données Collectées et Finalités
            </h2>
            <p className="mb-4">
              Les données personnelles sont collectées uniquement lorsque vous décidez volontairement de les transmettre au studio via le formulaire de contact ou par e-mail direct :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-2 border border-border-subtle p-5 rounded-lg">
                <h3 className="font-mono text-xs font-semibold text-text-main uppercase mb-2">
                  Données du formulaire de contact
                </h3>
                <p className="text-xs text-text-muted mb-2">
                  Nom, prénom, adresse e-mail, objet de la demande et description de votre projet ou message.
                </p>
                <div className="text-[11.5px] font-mono text-accent">
                  Finalité : Répondre à votre prise de contact, qualifier votre besoin et élaborer un échange professionnel ou une proposition commerciale adaptée.
                </div>
              </div>

              <div className="bg-surface-2 border border-border-subtle p-5 rounded-lg">
                <h3 className="font-mono text-xs font-semibold text-text-main uppercase mb-2">
                  Données techniques de connexion
                </h3>
                <p className="text-xs text-text-muted mb-2">
                  Adresse IP (anonymisée), type de navigateur, horodatage de connexion (logs serveurs HTTP).
                </p>
                <div className="text-[11.5px] font-mono text-accent">
                  Finalité : Assurer la stabilité technique, la sécurité du serveur et la prévention des attaques ou intrusions informatiques (intérêt légitime).
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Base légale */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              4. Base Légale du Traitement
            </h2>
            <p className="mb-2">
              Le traitement de vos données repose exclusivement sur les bases juridiques suivantes prévues par l&apos;article 6 du RGPD :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-text-main font-semibold">Votre consentement explicite</strong> : matérialisé par la transmission volontaire de votre formulaire de contact.
              </li>
              <li>
                <strong className="text-text-main font-semibold">L&apos;exécution de mesures précontractuelles</strong> : dans le cadre d&apos;une demande de chiffrage ou d&apos;intervention technique.
              </li>
              <li>
                <strong className="text-text-main font-semibold">L&apos;intérêt légitime</strong> : pour la surveillance de la sécurité de l&apos;infrastructure serveur et la protection contre les sollicitations malveillantes.
              </li>
            </ul>
          </section>

          {/* Section 5: Durée de conservation */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              5. Durée de Conservation des Données
            </h2>
            <p className="mb-3">
              Les données sont conservées pour une durée strictement nécessaire à la réalisation des finalités prévues :
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-text-main bg-surface-2 p-5 rounded-lg border border-border-subtle">
              <li>
                <span className="text-text-muted">Données prospects / échanges commerciaux :</span> 3 ans à compter du dernier contact émanant de votre part.
              </li>
              <li>
                <span className="text-text-muted">Données contractuelles / facturation (en cas de mission) :</span> 10 ans conformément aux obligations comptables et fiscales.
              </li>
              <li>
                <span className="text-text-muted">Logs de sécurité serveur :</span> 12 mois maximum, après quoi ils sont automatiquement écrasés.
              </li>
            </ul>
          </section>

          {/* Section 6: Non-divulgation */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              6. Confidentialité et Non-Divulgation à des Tiers
            </h2>
            <p className="mb-3">
              Tobias Agossou est le seul destinataire de vos données personnelles.
            </p>
            <p>
              <strong className="text-text-main font-semibold">
                Vos données ne sont jamais vendues, cédées, louées ou communiquées à des tiers à des fins marketing, publicitaires ou de démarchage.
              </strong>
            </p>
          </section>

          {/* Section 7: Cookies */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              7. Politique de Cookies et Traceurs
            </h2>
            <p className="mb-3">
              Ce site web est conçu selon une architecture épurée et respectueuse de la vie privée. Il ne déploie{' '}
              <strong className="text-text-main font-semibold">aucun cookie publicitaire tiers, aucun cookie de ciblage comportemental ni aucun tracker invasif</strong>.
            </p>
            <p>
              Seuls des éléments purement techniques indispensables au bon fonctionnement ergonomique du site (comme la mémorisation d&apos;état UI en mémoire session) sont utilisés, dispensés de recueil préalable de consentement selon les recommandations de la CNIL.
            </p>
          </section>

          {/* Section 8: Droits des utilisateurs */}
          <section className="border-l-2 border-border-subtle pl-6">
            <h2 className="font-display text-xl sm:text-2xl font-normal text-text-main mb-3">
              8. Vos Droits et Modalités d&apos;Exercice
            </h2>
            <p className="mb-3">
              Conformément à la législation en vigueur, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-4">
              <li>Droit d&apos;accès et de communication de vos données</li>
              <li>Droit de rectification des données inexactes ou incomplètes</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p className="mb-4">
              Pour exercer l&apos;un de ces droits, vous pouvez adresser votre demande accompagnée d&apos;un justificatif d&apos;identité à :
            </p>
            <div className="font-mono text-xs bg-surface-2 p-4 rounded border border-border-subtle text-text-main inline-block">
              ✉️ contact@tobiasagossou.website
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous disposez du droit d&apos;introduire une réclamation auprès de l&apos;autorité de contrôle compétente (en France : CNIL — 3 Place de Fontenoy, 75007 Paris — www.cnil.fr).
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
