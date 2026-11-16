'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Mail } from 'lucide-react';

export function ContactV2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Votre message a bien été envoyé.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMessage(
          data.error || 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.'
        );
      }
    } catch {
      setStatus('error');
      setFeedbackMessage(
        'Impossible de joindre le serveur. Vous pouvez écrire directement à contact@tobiasagossou.website.'
      );
    }
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
        {/* Left Information Column */}
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#0f52ba] font-semibold mb-3">
            Initier une Collaboration
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#090a0c] tracking-tight mb-4">
            Parlons de votre prochaine étape technique.
          </h2>
          <p className="text-sm text-[#4a505c] leading-relaxed mb-8">
            Que vous prépariez une refonte critique, le lancement d&apos;un SaaS complexe ou
            l&apos;automatisation de vos flux de données, décrivez vos objectifs. Une analyse
            de faisabilité vous sera retournée sous 24h ouvrées.
          </p>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#e2e6eb] flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#0f52ba]" />
              <div>
                <div className="text-[#090a0c] font-semibold">Temps de réponse garanti</div>
                <div className="text-[#6c7482]">Moins de 24 heures ouvrées</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e2e6eb] flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <div>
                <div className="text-[#090a0c] font-semibold">Accord de confidentialité (NDA)</div>
                <div className="text-[#6c7482]">Disponible sur simple demande</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e2e6eb] flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#090a0c]" />
              <div>
                <div className="text-[#090a0c] font-semibold">Contact direct</div>
                <div className="text-[#6c7482]">contact@tobiasagossou.website</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Terminal */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e2e6eb] shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="v2-name"
                  className="block text-xs font-mono font-medium text-[#2b303a] mb-2 uppercase tracking-wider"
                >
                  Votre Nom ou Entreprise *
                </label>
                <input
                  id="v2-name"
                  type="text"
                  required
                  placeholder="ex: Alex Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#d2d7df] focus:border-[#090a0c] focus:outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="v2-email"
                  className="block text-xs font-mono font-medium text-[#2b303a] mb-2 uppercase tracking-wider"
                >
                  Adresse E-mail Professionnelle *
                </label>
                <input
                  id="v2-email"
                  type="email"
                  required
                  placeholder="alex@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#d2d7df] focus:border-[#090a0c] focus:outline-none text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="v2-subject"
                className="block text-xs font-mono font-medium text-[#2b303a] mb-2 uppercase tracking-wider"
              >
                Nature de la mission *
              </label>
              <select
                id="v2-subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#d2d7df] focus:border-[#090a0c] focus:outline-none text-sm transition-colors bg-white"
              >
                <option value="">Sélectionnez le sujet principal...</option>
                <option value="Architecture & Développement NestJS/Next.js">
                  Architecture &amp; Développement complet (NestJS / Next.js)
                </option>
                <option value="Refonte de Plateforme & Optimisation Vélocité">
                  Refonte de plateforme existante &amp; Optimisation de performance
                </option>
                <option value="Automatisation de flux métier & Intégration APIs">
                  Automatisation de processus métier &amp; Intégration APIs
                </option>
                <option value="Audit technique ou Conseil stratégique">
                  Audit d&apos;architecture ou Revue technique
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="v2-message"
                className="block text-xs font-mono font-medium text-[#2b303a] mb-2 uppercase tracking-wider"
              >
                Contexte du projet &amp; Objectifs *
              </label>
              <textarea
                id="v2-message"
                required
                rows={4}
                placeholder="Décrivez votre besoin, les défis rencontrés, votre calendrier cible..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#d2d7df] focus:border-[#090a0c] focus:outline-none text-sm transition-colors resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs font-mono flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#090a0c] hover:bg-[#1f2228] text-white font-mono text-xs font-semibold uppercase tracking-wider py-4 rounded-lg transition-all disabled:opacity-50"
            >
              <span>{status === 'loading' ? 'TRANSMISSION EN COURS...' : 'ENVOYER MA DEMANDE DE PROJET'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
