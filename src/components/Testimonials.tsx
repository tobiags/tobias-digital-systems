'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star, ShieldCheck, Maximize2, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmoothMarquee } from '@/components/motion/SmoothMarquee';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

interface ReviewItem {
  platform: 'COMEUP' | 'FIVERR';
  author: string;
  image: string;
  link: string;
  rating: string;
  date: string;
}

const row1: ReviewItem[] = [
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

const row2: ReviewItem[] = [
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
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedReview(null);
    };
    if (selectedReview) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedReview]);

  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section
      id="testimonials"
      className="w-full py-20 md:py-28 border-t border-border-subtle overflow-hidden"
    >
      <RevealOnScroll direction="up" distance={20} className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-text-muted mb-4 uppercase">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>TÉMOIGNAGES · 08 · AVIS VÉRIFIABLES</span>
            </div>
            <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-text-main max-w-[22ch] mb-4">
              Ce que les clients disent après la livraison.
            </h2>
            <p className="text-xs md:text-sm text-text-muted max-w-[48ch] leading-relaxed">
              Évaluations authentiques sans complaisance. Vous pouvez vérifier en direct chaque avis sur mes profils publics certifiés :
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="https://comeup.com/fr/@tobias-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-5 bg-surface-2 hover:bg-white border border-border-subtle hover:border-text-main px-5 py-3.5 rounded-2xl shadow-sm transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              title="Vérifier le profil officiel de Tobias sur ComeUp (508+ avis vérifiés)"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  COMEUP · PROFIL VÉRIFIÉ
                </span>
                <span className="font-mono text-xs font-semibold text-text-main mt-0.5">
                  508+ AVIS · 99% POSITIFS
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
              className="group flex items-center justify-between gap-5 bg-surface-2 hover:bg-white border border-border-subtle hover:border-text-main px-5 py-3.5 rounded-2xl shadow-sm transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              title="Vérifier le profil officiel de Tobias sur Fiverr (Note 5.0)"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
      </RevealOnScroll>

      <div className="mb-6">
        <SmoothMarquee direction="left" speed={38} pauseOnHover={true} gap="20px" ariaLabel="Avis vérifiés ComeUp">
          {marquee1.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedReview(t)}
              aria-haspopup="dialog"
              aria-label={`Agrandir l'avis vérifié de ${t.author} sur ${t.platform}`}
              className="group relative text-left cursor-pointer w-[310px] sm:w-[350px] md:w-[380px] bg-surface-2 border border-border-subtle rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-border-strong hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all flex flex-col flex-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

              <div className="relative w-full h-[180px] sm:h-[195px] bg-white p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Avis client ${t.author}`}
                  fill
                  sizes="(max-width: 768px) 310px, 380px"
                  className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3 h-3" />
                    <span>Agrandir</span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 flex justify-between items-center border-t border-border-subtle font-mono text-[10.5px]">
                <span className="text-text-muted">
                  {t.author} · {t.date}
                </span>
                <span className="font-semibold text-accent flex items-center gap-1">
                  <span>DÉTAIL</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </SmoothMarquee>
      </div>

      <div>
        <SmoothMarquee direction="right" speed={42} pauseOnHover={true} gap="20px" ariaLabel="Avis vérifiés Fiverr">
          {marquee2.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedReview(t)}
              aria-haspopup="dialog"
              aria-label={`Agrandir l'avis vérifié de ${t.author} sur ${t.platform}`}
              className="group relative text-left cursor-pointer w-[340px] sm:w-[420px] md:w-[460px] bg-surface-2 border border-border-subtle rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-border-strong hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all flex flex-col flex-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex justify-between items-center px-4 py-2.5 border-b border-border-subtle bg-bg-soft/40">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-text-soft">
                  {t.platform}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-accent">
                  <Star className="w-3.5 h-3.5 fill-accent stroke-accent" />
                  {t.rating}
                </span>
              </div>

              <div className="relative w-full h-[180px] sm:h-[195px] bg-white p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Avis client ${t.author}`}
                  fill
                  sizes="(max-width: 768px) 340px, 460px"
                  className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3 h-3" />
                    <span>Agrandir</span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 flex justify-between items-center border-t border-border-subtle font-mono text-[10.5px]">
                <span className="text-text-muted">
                  {t.author} · {t.date}
                </span>
                <span className="font-semibold text-accent flex items-center gap-1">
                  <span>DÉTAIL</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </SmoothMarquee>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-lightbox-title"
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-surface-2 border border-border-strong rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <h3 id="review-lightbox-title" className="sr-only">
                Avis certifié de {selectedReview.author} sur {selectedReview.platform}
              </h3>

              <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-soft/50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-text-main text-white">
                    {selectedReview.platform}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {selectedReview.author} · {selectedReview.date}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs font-semibold text-accent">
                    <Star className="w-3.5 h-3.5 fill-accent stroke-accent" />
                    {selectedReview.rating}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="w-8 h-8 rounded-full border border-border-strong bg-white hover:bg-bg-soft flex items-center justify-center text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Fermer la vue agrandie"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative flex-1 min-h-[260px] sm:min-h-[380px] md:min-h-[460px] bg-white p-4 sm:p-6 flex items-center justify-center overflow-auto">
                <Image
                  src={selectedReview.image}
                  alt={`Avis complet de ${selectedReview.author}`}
                  width={1200}
                  height={800}
                  className="max-h-[65vh] w-auto object-contain rounded-lg border border-border-subtle shadow-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-border-subtle bg-bg-soft/30">
                <p className="text-xs text-text-muted font-mono">
                  Capture d&apos;écran issue directement de la plateforme officielle certifiée.
                </p>
                <Link
                  href={selectedReview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-text-main text-surface-2 font-mono text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-black/85 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>VÉRIFIER LE PROFIL EN DIRECT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
