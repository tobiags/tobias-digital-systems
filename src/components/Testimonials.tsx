import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';

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
    link: 'https://fr.fiverr.com/s/Q7lW5mP',
    rating: '5.0',
    date: 'Il y a 4 mois',
  },
  {
    platform: 'FIVERR',
    author: 'azelarabazfar',
    image: '/images/fiverr-azelarabazfar.png',
    link: 'https://fr.fiverr.com/s/Q7lW5mP',
    rating: '5.0',
    date: 'Il y a 7 mois',
  },
  {
    platform: 'FIVERR',
    author: 'bllo53',
    image: '/images/fiverr-bllo53-1.png',
    link: 'https://fr.fiverr.com/s/Q7lW5mP',
    rating: '5.0',
    date: 'Il y a 11 mois',
  },
  {
    platform: 'FIVERR',
    author: 'bllo53',
    image: '/images/fiverr-bllo53-2.png',
    link: 'https://fr.fiverr.com/s/Q7lW5mP',
    rating: '5.0',
    date: 'Il y a 1 an',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-[1440px] mx-auto py-16 md:py-24 border-t border-border-subtle overflow-hidden"
    >
      <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4">
            TÉMOIGNAGES & SOCIAL PROOF · 08
          </div>
          <h2 className="font-display font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch]">
            Ce que les clients disent après la livraison.
          </h2>
        </div>
        <p className="text-xs md:text-sm text-text-muted max-w-[34ch] leading-relaxed">
          Avis vérifiés ComeUp & Fiverr — captures réelles, évaluations certifiées
          sans complaisance.
        </p>
      </div>

      {/* Marquee Row 1 (ComeUp) */}
      <div className="relative w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
        <div className="flex gap-5 min-w-max px-6 md:px-10">
          {[...row1, ...row1].map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[360px] bg-surface-2 border border-border-subtle rounded-xl overflow-hidden shadow-sm flex flex-col flex-none hover:border-border-strong transition-all"
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

              <div className="relative w-full h-[150px] bg-bg overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  sizes="360px"
                  className="object-cover object-top"
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

      {/* Marquee Row 2 (Fiverr) */}
      <div className="relative w-full overflow-x-auto pt-4 no-scrollbar">
        <div className="flex gap-5 min-w-max px-6 md:px-10">
          {[...row2, ...row2].map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[360px] bg-surface-2 border border-border-subtle rounded-xl overflow-hidden shadow-sm flex flex-col flex-none hover:border-border-strong transition-all"
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

              <div className="relative w-full h-[150px] bg-bg overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  sizes="360px"
                  className="object-cover object-top"
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
    </section>
  );
}
