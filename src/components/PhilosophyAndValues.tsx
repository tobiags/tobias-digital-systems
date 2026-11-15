import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const values = [
  'Clarté & Simplicité radicale',
  'Systèmes durables et évolutifs',
  'Centricité humaine & Résultats',
  'Exécution rigoureuse sans compromis',
];

export function PhilosophyAndValues() {
  return (
    <section
      id="about"
      className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border-subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_280px] gap-12 lg:gap-16 items-start">
        {/* Left Column Label */}
        <div className="font-mono text-[11px] tracking-widest text-text-muted">
          PHILOSOPHIE
          <br />
          <span className="text-text-main font-semibold text-sm">01</span>
        </div>

        {/* Center Philosophy Headline & Pitch */}
        <div className="flex flex-col">
          <div className="flex items-start gap-4 mb-8">
            <span className="font-display text-4xl md:text-5xl text-border-strong leading-none select-none">
              “
            </span>
            <h2 className="font-display font-normal text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight text-text-main max-w-[20ch]">
              Un bon système se voit quand il fonctionne. Un excellent système se
              voit dans les résultats.
            </h2>
          </div>

          <div className="md:ml-12 max-w-[42ch]">
            <p className="text-sm md:text-[15px] leading-relaxed text-text-soft mb-6">
              Mon rôle est de créer des systèmes digitaux qui allient clarté,
              efficacité opérationnelle et impact mesurable pour vos clients et
              vos équipes.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-text-main hover:text-accent transition-colors"
            >
              <span>ÉCHANGER SUR VOTRE PROJET</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Values Column */}
        <div className="bg-surface/50 border border-border-subtle/80 rounded-xl p-6">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-text-muted pb-4 border-b border-border-subtle mb-2">
            <span>VALEURS</span>
            <span className="text-text-main font-semibold">02</span>
          </div>

          <ul className="divide-y divide-border-subtle/60">
            {values.map((v, i) => (
              <li
                key={i}
                className="py-3.5 flex items-center gap-3 text-xs md:text-[13px] font-medium text-text-main tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-none" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
