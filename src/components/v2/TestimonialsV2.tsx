import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const featuredReviews = [
  {
    platform: 'COMEUP',
    author: 'Virgile_IO',
    rating: '5.0',
    date: '22 mai 2026',
    image: '/images/screenshot_21.png',
    link: 'https://comeup.com/fr/@tobias-06',
    quote:
      'Travail d’une rigueur exceptionnelle. Tobias a su structurer notre projet avec une réactivité et une vision d’ingénieur rare. Les délais ont été respectés au jour près.',
  },
  {
    platform: 'FIVERR',
    author: 'crystalreview',
    rating: '5.0',
    date: 'Il y a 4 mois',
    image: '/images/fiverr-crystalreview.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    quote:
      'Exceptional developer. Clean code, modern UI, zero defects upon launch. Communicated clearly at every step. Will definitely hire again.',
  },
  {
    platform: 'COMEUP',
    author: 'MyriamSissoko',
    rating: '5.0',
    date: '4 juin 2026',
    image: '/images/screenshot_20.png',
    link: 'https://comeup.com/fr/@tobias-06',
    quote:
      'Tobias est allé bien au-delà de mes attentes. Conseils pertinents, clarté dans les explications techniques et résultat professionnel qui a immédiatement plu à mes clients.',
  },
  {
    platform: 'FIVERR',
    author: 'bllo53',
    rating: '5.0',
    date: 'Il y a 11 mois',
    image: '/images/fiverr-bllo53-1.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    quote:
      'Outstanding delivery. The system handles our load effortlessly. Super responsive and highly skilled in fullstack architecture.',
  },
];

export function TestimonialsV2() {
  return (
    <section id="avis" className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-[#e2e6eb]">
      {/* Header with Verification CTA Badges */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0f52ba] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Retours d&apos;Expérience &amp; Vérification Publique</span>
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#090a0c] tracking-tight mb-3">
            Évaluations vérifiées sans compromis.
          </h2>
          <p className="text-sm text-[#5e6573] max-w-[48ch] leading-relaxed">
            Plus de 500 livraisons réussies. Vérifiez en direct les avis authentiques de clients réels
            sur les plateformes tierces certifiées :
          </p>
        </div>

        {/* Verification Hub */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href="https://comeup.com/fr/@tobias-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-all flex items-center justify-between gap-4 shadow-sm"
          >
            <div>
              <div className="font-mono text-[10px] text-emerald-600 font-semibold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                COMEUP VÉRIFIÉ
              </div>
              <div className="font-mono text-xs font-semibold text-[#090a0c] mt-0.5">
                410+ AVIS · 99% POSITIFS
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#f1f3f5] group-hover:bg-[#090a0c] group-hover:text-white flex items-center justify-center text-[#090a0c] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="https://fr.fiverr.com/s/RVraW78"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl bg-white border border-[#e2e6eb] hover:border-[#090a0c] transition-all flex items-center justify-between gap-4 shadow-sm"
          >
            <div>
              <div className="font-mono text-[10px] text-blue-600 font-semibold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                FIVERR PRO VÉRIFIÉ
              </div>
              <div className="font-mono text-xs font-semibold text-[#090a0c] mt-0.5">
                NOTE 5.0 ★ EXCELLENCE
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#f1f3f5] group-hover:bg-[#090a0c] group-hover:text-white flex items-center justify-center text-[#090a0c] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Review Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredReviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#e2e6eb] flex flex-col justify-between hover:border-[#090a0c] transition-colors"
          >
            <div>
              {/* Card Meta */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f1f3f5]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#090a0c]">
                    {rev.author}
                  </span>
                  <span className="text-xs text-[#9ca3af]">·</span>
                  <span className="font-mono text-[11px] text-[#6c7482]">
                    {rev.platform}
                  </span>
                </div>

                <div className="flex items-center gap-1 font-mono text-xs font-semibold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <span>{rev.rating}</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-[#2b303a] leading-relaxed italic mb-6">
                &ldquo;{rev.quote}&rdquo;
              </p>

              {/* Screenshot Proof Container */}
              <div className="relative w-full h-[120px] rounded-lg bg-[#fafbfc] border border-[#f1f3f5] p-2 flex items-center justify-center overflow-hidden mb-4">
                <Image
                  src={rev.image}
                  alt={`Preuve avis client ${rev.author}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-1"
                />
              </div>
            </div>

            {/* Direct Verification Link */}
            <div className="pt-3 border-t border-[#f1f3f5] flex items-center justify-between text-xs font-mono">
              <span className="text-[#9ca3af]">{rev.date}</span>
              <Link
                href={rev.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0f52ba] font-semibold hover:underline"
              >
                <span>VÉRIFIER SUR {rev.platform}</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
