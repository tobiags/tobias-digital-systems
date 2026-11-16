'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architecture & Systèmes Web',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l’envoi');
      }

      setStatus('success');
      setFeedback(data.message);
      setFormData({
        name: '',
        email: '',
        projectType: 'Architecture & Systèmes Web',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setFeedback(err.message);
      } else {
        setFeedback('Une erreur inattendue est survenue.');
      }
    }
  };

  return (
    <section
      id="contact"
      className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border-subtle"
    >
      <RevealOnScroll direction="up" distance={20}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Reach */}
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
                  className="group text-base font-semibold text-text-main hover:text-accent transition-colors inline-flex items-center gap-1.5"
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
                    className="text-text-main hover:text-accent underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>ComeUp (508+ avis)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  <span>·</span>
                  <Link
                    href="https://fr.fiverr.com/s/RVraW78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-main hover:text-accent underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Fiverr (5.0 ★)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typed Interactive Form */}
          <div className="bg-surface-2 border border-border-subtle rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {status === 'success' ? (
              <div className="p-8 text-center flex flex-col items-center">
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
                  className="inline-flex items-center justify-center font-mono text-xs font-semibold px-6 py-3 rounded-full border border-border-strong text-text-main hover:bg-bg-soft transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-none" />
                    <span>{feedback}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase">
                      VOTRE NOM *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Alexandre Martin"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase">
                      VOTRE EMAIL PROFESSIONNEL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexandre@entreprise.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase">
                    DOMAINE D&apos;INTERVENTION PRINCIPAL
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                  >
                    <option value="Architecture & Systèmes Web">
                      Architecture &amp; Systèmes Web (Next.js, NestJS)
                    </option>
                    <option value="Automatisation & IA (n8n, Agents RAG)">
                      Automatisation &amp; IA (n8n, Agents RAG)
                    </option>
                    <option value="WordPress / WooCommerce Haut de Gamme">
                      WordPress / WooCommerce Haut de Gamme
                    </option>
                    <option value="Audit, Conseil & Sécurité">
                      Audit, Conseil &amp; Sécurité
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] tracking-wider text-text-soft mb-2 uppercase">
                    DÉCRIVEZ VOTRE BESOIN / OBJECTIFS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Quels sont vos objectifs, vos délais et vos attentes ?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full group inline-flex items-center justify-center gap-2.5 bg-text-main text-surface-2 text-xs font-semibold tracking-wider py-4 rounded-full hover:bg-black/85 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>TRANSMISSION EN COURS...</span>
                  ) : (
                    <>
                      <span>ENVOYER LA DEMANDE DE PROJET</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
