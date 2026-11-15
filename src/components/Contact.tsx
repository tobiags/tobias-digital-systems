'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

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
      className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border-subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
        {/* Left Column: Context & Direct Reach */}
        <div>
          <div className="font-mono text-[11px] tracking-widest text-text-muted mb-4">
            INITIER UNE COLLABORATION · 11
          </div>
          <h2 className="font-display font-normal text-3xl md:text-4xl lg:text-5xl tracking-tight text-text-main mb-6 leading-[1.05]">
            Parlons de votre prochain bond en avant.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-soft mb-8 max-w-[42ch]">
            Que vous ayez besoin d&apos;une architecture web complète, de
            l&apos;automatisation de vos flux de production ou d&apos;un audit
            stratégique, envoyez un message pour démarrer l&apos;échange.
          </p>

          <div className="space-y-4 pt-6 border-t border-border-subtle">
            <div>
              <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1">
                CANAL DIRECT EMAIL
              </div>
              <Link
                href="mailto:contact@tobias-agossou.com"
                className="text-sm font-semibold text-text-main hover:text-accent transition-colors flex items-center gap-1"
              >
                contact@tobias-agossou.com
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-wider text-text-muted mb-1">
                DISPONIBILITÉ
              </div>
              <p className="text-xs font-mono text-text-main flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Ouvert aux nouveaux projets · Réponse sous 24h
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Typed Interactive Form */}
        <div className="bg-surface-2 border border-border-subtle rounded-2xl p-6 md:p-10 shadow-sm">
          {status === 'success' ? (
            <div className="p-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-text-main mb-2">
                Message transmis avec succès
              </h3>
              <p className="text-xs md:text-sm text-text-soft mb-6 max-w-[34ch]">
                {feedback}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="btn-ghost"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-none" />
                  <span>{feedback}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] tracking-wider text-text-soft mb-2">
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] tracking-wider text-text-soft mb-2">
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-wider text-text-soft mb-2">
                  DOMAINE D&apos;INTERVENTION PRINCIPAL
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors"
                >
                  <option value="Architecture & Systèmes Web">
                    Architecture & Systèmes Web (Next.js, NestJS)
                  </option>
                  <option value="Automatisation & IA (n8n, Agents RAG)">
                    Automatisation & IA (n8n, Agents RAG)
                  </option>
                  <option value="WordPress / WooCommerce Haut de Gamme">
                    WordPress / WooCommerce Haut de Gamme
                  </option>
                  <option value="Audit, Conseil & Sécurité">
                    Audit, Conseil & Sécurité
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-wider text-text-soft mb-2">
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-bg border border-border-subtle text-xs md:text-sm text-text-main focus:outline-none focus:border-text-main transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-3.5 tracking-wider disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>TRANSMISSION EN COURS...</span>
                ) : (
                  <>
                    <span>ENVOYER LA DEMANDE DE PROJET</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
