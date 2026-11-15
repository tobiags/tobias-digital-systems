import { Layers, Square, Grid, Triangle, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'WORDPRESS & WOOCOMMERCE',
    desc: 'Applications métier, e-commerce, réservations complexes. De l’intégration Figma au plugin PHP sur mesure — votre WordPress performant et évolutif.',
  },
  {
    icon: Square,
    title: 'AUTOMATISATION & IA',
    desc: 'Workflows Make/n8n, chatbots formés, agents RAG. Vos processus répétitifs deviennent automatiques. Vous récupérez le temps.',
  },
  {
    icon: Grid,
    title: 'DÉVELOPPEMENT SUR MESURE',
    desc: 'React, Next.js, configurateurs B2B, simulateurs interactifs. Des interfaces qui résolvent de vrais problèmes métier.',
  },
  {
    icon: Triangle,
    title: 'SÉCURITÉ & PERFORMANCE',
    desc: 'Audit Core Web Vitals, CDN, HTTPS, RGPD. Un site rapide, sécurisé et conforme — sans compromis sur l’expérience.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Comprendre',
    desc: 'Audit de votre situation, identification des blocages, clarification des objectifs.',
  },
  {
    n: '02',
    title: 'Construire',
    desc: 'Développement ou automatisation, avec des points de validation réguliers.',
  },
  {
    n: '03',
    title: 'Livrer & évoluer',
    desc: 'Mise en production, documentation claire, accompagnement continu si besoin.',
  },
];

export function ExpertisesAndProcess() {
  return (
    <section
      id="expertises"
      className="max-w-[1440px] mx-auto border-t border-border-subtle grid grid-cols-1 lg:grid-cols-[1fr_380px] items-stretch"
    >
      {/* Expertises Column */}
      <div className="p-6 md:p-12 lg:p-16">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-text-muted mb-12">
          <span>EXPERTISES</span>
          <span className="text-border-strong">/</span>
          <span className="text-text-main font-semibold">03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group flex flex-col p-6 rounded-xl bg-surface/50 border border-border-subtle hover:border-text-main/20 hover:bg-surface-2 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-bg-soft flex items-center justify-center text-text-main mb-6 group-hover:text-accent transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-mono text-xs font-semibold tracking-wider text-text-main mb-3">
                  {s.title}
                </h3>
                <p className="text-xs md:text-[13px] leading-relaxed text-text-soft flex-1 mb-6">
                  {s.desc}
                </p>
                <div className="flex justify-end pt-2 border-t border-border-subtle/50">
                  <div className="w-7 h-7 rounded-full border border-border-strong flex items-center justify-center text-xs text-text-main group-hover:bg-text-main group-hover:text-surface-2 group-hover:border-text-main transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark Process Methodology Column */}
      <div className="bg-text-main text-surface-2 p-8 md:p-12 lg:p-14 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-white/50 mb-10 pb-4 border-b border-white/10">
            <span>PROCESSUS</span>
            <span className="text-white/80 font-semibold">04</span>
          </div>

          <div className="space-y-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="flex gap-5 pt-6 first:pt-0 border-t first:border-t-0 border-white/10"
              >
                <div className="font-mono text-xs text-accent font-semibold flex-none w-6">
                  {st.n}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs md:text-[13px] leading-relaxed text-white/70">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-white/10">
          <div className="font-mono text-[10.5px] tracking-wider text-white/50 mb-2">
            ENGAGEMENT QUALITÉ
          </div>
          <p className="text-xs text-white/80 leading-snug">
            Chaque livrable est documenté, testé et remis avec un transfert de
            compétences complet.
          </p>
        </div>
      </div>
    </section>
  );
}
