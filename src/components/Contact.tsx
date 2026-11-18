'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPE_OPTIONS = [
  'Architecture & Systèmes Web (Next.js / NestJS)',
  'Automatisation des Flux & Pipelines IA',
  'Design de Produit & Design System',
  'Audit de Performance, Sécurité & SEO',
  'Autre / Mission sur mesure',
] as const;

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: PROJECT_TYPE_OPTIONS[0],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la transmission');
      }

      setStatus('success');
      setFeedback(data.message);
      setFormData({
        name: '',
        email: '',
        projectType: PROJECT_TYPE_OPTIONS[0],
        message: '',
      });
    } catch (error: unknown) {
      setStatus('error');
      setFeedback(
        error instanceof Error ? error.message : 'Une erreur inattendue est survenue.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border-subtle"
    >
      <RevealOnScroll direction="up" distance={20}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4 uppercase">
              INITIER UNE COLLABORATION · 11
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-text-main mb-6 leading-[1.05]">
              Parlons de votre prochain bond en avant.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-text-soft mb-8 max-w-[42ch]">
              Que vous ayez besoin d&apos;une architecture web complète, de
              l&apos;automatisation de vos flux de production ou d&apos;un audit
              stratégique, envoyez un message pour démarrer l&apos;échange.
            </p>

            <div className="space-y-5 pt-6 border-t border-border-subtle">
              <div>
                <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1.5 uppercase">
                  CANAL DIRECT EMAIL
                </div>
                <Link
                  href="mailto:contact@tobias-agossou.com"
                  className="group text-base font-semibold text-text-main hover:text-accent transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  <span>contact@tobias-agossou.com</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1.5 uppercase">
                  DISPONIBILITÉ EN COURS
                </div>
                <p className="text-xs font-mono text-text-main flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ouvert aux nouveaux projets · Réponse sous 24h</span>
                </p>
              </div>

              <div className="pt-2">
                <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1.5 uppercase">
                  PROFILS VÉRIFIÉS
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <Link
                    href="https://comeup.com/fr/@tobias-06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-main hover:text-accent underline underline-offset-4 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span>ComeUp (508+ avis)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <span>·</span>
                  <Link
                    href="https://fr.fiverr.com/s/RVraW78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-main hover:text-accent underline underline-offset-4 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span>Fiverr (5.0 ★)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-2 border border-border-subtle rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                className="p-8 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-medium text-2xl text-text-main mb-2">
                  Message transmis avec succès
                </h3>
                <p className="text-xs md:text-sm text-text-soft mb-6 max-w-[36ch] leading-relaxed">
                  {feedback}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center justify-center font-mono text-xs font-semibold px-6 py-3 rounded-full border border-border-strong text-text-main hover:bg-bg-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                {status === 'error' && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-none" />
                    <span>{feedback}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase"
                    >
                      VOTRE NOM *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="ex: Alexandre Martin"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main focus:ring-1 focus:ring-text-main transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase"
                    >
                      VOTRE EMAIL PROFESSIONNEL *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alexandre@entreprise.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main focus:ring-1 focus:ring-text-main transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase"
                  >
                    DOMAINE D&apos;INTERVENTION PRINCIPAL
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, projectType: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main focus:ring-1 focus:ring-text-main transition-colors"
                  >
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase"
                  >
                    VOTRE BESOIN / OBJECTIFS *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Décrivez brièvement les enjeux techniques ou produit de votre projet..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main focus:ring-1 focus:ring-text-main transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-text-main text-surface-2 font-mono text-xs font-semibold tracking-wider py-4 rounded-xl hover:bg-black/85 transition-all shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMISSION EN COURS...</span>
                    </>
                  ) : (
                    <>
                      <span>ENVOYER LA DEMANDE DE PROJET</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
