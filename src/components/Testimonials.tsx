import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star, ShieldCheck } from 'lucide-react';

const row1 = [
  {
    platform: 'COMEUP',
    author: 'Virgile_IO',
    image: '/images/screenshot_21.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '22 mai 2026',
  },
  {
    platform: 'COMEUP',
    author: 'MyriamSissoko',
    image: '/images/screenshot_20.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '4 juin 2026',
  },
  {
    platform: 'COMEUP',
    author: 'EVKHA_Business',
    image: '/images/screenshot_18.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '28 juil. 2026',
  },
  {
    platform: 'COMEUP',
    author: 'Business_Ecom',
    image: '/images/screenshot_19.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '23 juin 2026',
  },
  {
    platform: 'COMEUP',
    author: 'Chemins',
    image: '/images/screenshot_22.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '27 avr. 2026',
  },
  {
    platform: 'COMEUP',
    author: 'DJones_Marketpro',
    image: '/images/screenshot_23.png',
    link: 'https://comeup.com/fr/@tobias-06',
    rating: '5.0',
    date: '5 janv. 2026',
  },
];

const row2 = [
  {
    platform: 'FIVERR',
    author: 'crystalreview',
    image: '/images/fiverr-crystalreview.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 4 mois',
  },
  {
    platform: 'FIVERR',
    author: 'azelarabazfar',
    image: '/images/fiverr-azelarabazfar.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 7 mois',
  },
  {
    platform: 'FIVERR',
    author: 'bllo53',
    image: '/images/fiverr-bllo53-1.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 11 mois',
  },
  {
    platform: 'FIVERR',
    author: 'bllo53',
    image: '/images/fiverr-bllo53-2.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 1 an',
  },
  {
    platform: 'FIVERR',
    author: 'crystalreview',
    image: '/images/fiverr-crystalreview.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 4 mois',
  },
  {
    platform: 'FIVERR',
    author: 'azelarabazfar',
    image: '/images/fiverr-azelarabazfar.png',
    link: 'https://fr.fiverr.com/s/RVraW78',
    rating: '5.0',
    date: 'Il y a 7 mois',
  },
];

export function Testimonials() {
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 border-t border-border-subtle overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-text-muted mb-4 uppercase">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>TÉMOIGNAGES · 08 · AVIS VÉRIFIABLES</span>
          </div>
          <h2 className="font-display font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch] mb-4">
            Ce que les clients disent après la livraison.
          </h2>
          <p className="text-xs md:text-sm text-text-muted max-w-[48ch] leading-relaxed">
            Évaluations authentiques sans complaisance. Vous pouvez vérifier en direct chaque avis sur nos profils publics certifiés :
          </p>
        </div>

        {/* Boutons d'accès et de vérification directe des profils */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <Link
            href="https://comeup.com/fr/@tobias-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-surface-2 hover:bg-white border border-border-subtle hover:border-text-main px-4 py-3 rounded-xl shadow-sm transition-all"
            title="Vérifier le profil officiel de Tobias sur ComeUp"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                COMEUP · PROFIL VÉRIFIÉ
              </span>
              <span className="font-mono text-xs font-semibold text-text-main mt-0.5">
                410+ AVIS · 99% POSITIFS
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-bg-soft group-hover:bg-text-main group-hover:text-surface-2 flex items-center justify-center text-text-main transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="https://fr.fiverr.com/s/RVraW78"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-surface-2 hover:bg-white border border-border-subtle hover:border-text-main px-4 py-3 rounded-xl shadow-sm transition-all"
            title="Vérifier le profil officiel de Tobias sur Fiverr"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                FIVERR · PROFIL VÉRIFIÉ
              </span>
              <span className="font-mono text-xs font-semibold text-text-main mt-0.5">
                NOTE 5.0 ★ EXCELLENCE
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-bg-soft group-hover:bg-text-main group-hover:text-surface-2 flex items-center justify-center text-text-main transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Row 1 (Défilement continu vers la gauche) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Subtle gradient fades on edges */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="animate-marquee-left flex gap-5">
          {marquee1.map((t, idx) => (
            <div
              key={idx}
              className="w-[310px] sm:w-[350px] md:w-[380px] bg-surface-2 border border-border-subtle rounded-xl overflow-hidden shadow-sm flex flex-col flex-none hover:border-border-strong hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center px-4 py-2.5 border-b border-border-subtle bg-bg-soft/40">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-text-soft">
                  {t.platform}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-accent">
                  <Star className="w-3 h-3 fill-accent stroke-accent" />
                  {t.rating}
                </span>
              </div>

              {/* Review screenshot perfectly framed without cropping */}
              <div className="relative w-full h-[180px] sm:h-[195px] bg-white p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Avis client ${t.author}`}
                  fill
                  sizes="(max-width: 768px) 310px, 380px"
                  className="object-contain p-1"
                />
              </div>

              <div className="px-4 py-3 flex justify-between items-center border-t border-border-subtle font-mono text-[10.5px]">
                <span className="text-text-muted">
                  {t.author} · {t.date}
                </span>
                <Link
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline flex items-center gap-0.5"
                >
                  <span>VOIR</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Défilement continu vers la droite) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Subtle gradient fades on edges */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="animate-marquee-right flex gap-5">
          {marquee2.map((t, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[420px] md:w-[480px] bg-surface-2 border border-border-subtle rounded-xl overflow-hidden shadow-sm flex flex-col flex-none hover:border-border-strong hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center px-4 py-2.5 border-b border-border-subtle bg-bg-soft/40">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-text-soft">
                  {t.platform}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-accent">
                  <Star className="w-3 h-3 fill-accent stroke-accent" />
                  {t.rating}
                </span>
              </div>

              {/* Wide panoramic Fiverr review screenshot perfectly fitted without cropping */}
              <div className="relative w-full h-[110px] sm:h-[125px] bg-white p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Avis Fiverr ${t.author}`}
                  fill
                  sizes="(max-width: 768px) 340px, 480px"
                  className="object-contain p-1"
                />
              </div>

              <div className="px-4 py-3 flex justify-between items-center border-t border-border-subtle font-mono text-[10.5px]">
                <span className="text-text-muted">
                  {t.author} · {t.date}
                </span>
                <Link
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline flex items-center gap-0.5"
                >
                  <span>VOIR</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification footer strip */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted border-t border-border-subtle/60 pt-6">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Profils et avis publics vérifiables en direct sur les plateformes officielles :</span>
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="https://comeup.com/fr/@tobias-06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-main hover:text-accent font-semibold transition-colors flex items-center gap-1"
          >
            <span>VOIR COMEUP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="https://fr.fiverr.com/s/RVraW78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-main hover:text-accent font-semibold transition-colors flex items-center gap-1"
          >
            <span>VOIR FIVERR</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
