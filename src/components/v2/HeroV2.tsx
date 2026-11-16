'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react';

export function HeroV2() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics' | 'stack'>(
    'architecture'
  );

  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#e2e6eb]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Direct, Uncompromising Value Proposition */}
        <div className="flex flex-col">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[11px] font-medium w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DISPONIBLE POUR PROJETS &amp; ARCHITECTURES STRATÉGIQUES</span>
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight text-[#090a0c] leading-[1.08] mb-6">
            Conception de systèmes numériques véloces, robustes et orientés résultats.
          </h1>

          <p className="text-base sm:text-lg text-[#4a505c] leading-relaxed max-w-[52ch] mb-8">
            J&apos;accompagne les fondateurs, directeurs techniques et entreprises ambitieuses
            dans l&apos;ingénierie d&apos;architectures web modernes (NestJS, Next.js, API &amp; microservices),
            l&apos;automatisation des flux métier et la refonte de plateformes à fort trafic.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/v2#contact"
              className="inline-flex items-center gap-2 bg-[#090a0c] text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded-lg hover:bg-[#1f2228] transition-all shadow-sm"
            >
              <span>PLANIFIER UN ÉCHANGE TECHNIQUE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/v2#realisations"
              className="inline-flex items-center gap-2 bg-white text-[#18191c] border border-[#d2d7df] text-xs font-semibold tracking-wider px-6 py-3.5 rounded-lg hover:bg-[#f8f9fa] transition-all"
            >
              <span>EXPLORER LES RÉALISATIONS</span>
            </Link>
          </div>

          {/* Real Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e2e6eb] font-mono text-xs">
            <div>
              <div className="text-[#6c7482] text-[10px] uppercase tracking-wider mb-1">
                Avis Vérifiés
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#090a0c]">
                410+
              </div>
              <div className="text-[11px] text-emerald-600 font-medium">99% positifs</div>
            </div>

            <div>
              <div className="text-[#6c7482] text-[10px] uppercase tracking-wider mb-1">
                Missions Livrées
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#090a0c]">
                519
              </div>
              <div className="text-[11px] text-[#6c7482]">Ventes certifiées</div>
            </div>

            <div>
              <div className="text-[#6c7482] text-[10px] uppercase tracking-wider mb-1">
                Expérience
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-[#090a0c]">
                Depuis 2021
              </div>
              <div className="text-[11px] text-[#0f52ba]">Août 2021</div>
            </div>
          </div>
        </div>

        {/* Right Column: The Signature Interactive Architecture Console */}
        <div className="bg-[#0f1115] text-[#f1f3f5] rounded-2xl p-6 sm:p-7 border border-[#232730] shadow-2xl overflow-hidden relative">
          {/* Console Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#232730]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-[#9ca3af]">
                tobias-systems-engine // v2.4.0
              </span>
            </div>

            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <Zap className="w-3 h-3" />
              OPTIMISÉ PRODUCTION
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex gap-2 p-1 bg-[#181b22] rounded-lg mb-6 text-xs font-mono">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-2 px-3 rounded text-center transition-all ${
                activeTab === 'architecture'
                  ? 'bg-[#262b36] text-white font-medium shadow-sm'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Schéma Architecture
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`flex-1 py-2 px-3 rounded text-center transition-all ${
                activeTab === 'metrics'
                  ? 'bg-[#262b36] text-white font-medium shadow-sm'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Métriques Live
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`flex-1 py-2 px-3 rounded text-center transition-all ${
                activeTab === 'stack'
                  ? 'bg-[#262b36] text-white font-medium shadow-sm'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Stack Technique
            </button>
          </div>

          {/* Tab 1: Visual Architecture Blueprint */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#181b22] border border-[#2b313e]">
                <div className="flex items-center justify-between text-[#9ca3af] mb-2 text-[11px]">
                  <span className="text-white font-semibold">01. INGESTION &amp; EDGE</span>
                  <span className="text-emerald-400">DNS / Traefik SSL</span>
                </div>
                <div className="text-white text-xs">
                  Next.js 15 App Router · SSR &amp; Cache Edge multi-régions
                </div>
              </div>

              <div className="flex justify-center text-[#555e70] font-mono text-xs">
                ↓ Rest API / WebSocket Streams
              </div>

              <div className="p-4 rounded-xl bg-[#181b22] border border-[#0f52ba]/50 bg-gradient-to-r from-[#0f52ba]/10 to-transparent">
                <div className="flex items-center justify-between text-[#9ca3af] mb-2 text-[11px]">
                  <span className="text-white font-semibold">02. CORE BACKEND SERVICE</span>
                  <span className="text-blue-400 font-semibold">NestJS + TypeScript</span>
                </div>
                <div className="text-white text-xs">
                  Modules métiers isolés · Validation Zod · Injection de dépendances
                </div>
              </div>

              <div className="flex justify-center text-[#555e70] font-mono text-xs">
                ↓ Queues asynchrones
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e]">
                  <div className="text-[10px] text-[#9ca3af] uppercase">Workers / Cron</div>
                  <div className="text-white font-medium text-[11px] mt-1">
                    BullMQ &amp; Redis
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e]">
                  <div className="text-[10px] text-[#9ca3af] uppercase">Persistance</div>
                  <div className="text-white font-medium text-[11px] mt-1">
                    PostgreSQL / Prisma
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Concrete Metrics */}
          {activeTab === 'metrics' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#181b22] border border-[#2b313e]">
                  <div className="text-[10px] text-[#9ca3af] uppercase">Time to First Byte</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">&lt; 45 ms</div>
                  <div className="text-[10px] text-[#6b7280] mt-1">Optimisation Edge V8</div>
                </div>
                <div className="p-4 rounded-xl bg-[#181b22] border border-[#2b313e]">
                  <div className="text-[10px] text-[#9ca3af] uppercase">Respect des Délais</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1">100%</div>
                  <div className="text-[10px] text-[#6b7280] mt-1">Certifié ComeUp</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#181b22] border border-[#2b313e]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#9ca3af]">Lighthouse Performance Score</span>
                  <span className="text-emerald-400 font-bold">100 / 100</span>
                </div>
                <div className="w-full bg-[#262b36] rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full w-full" />
                </div>
                <div className="flex justify-between text-[10px] text-[#6b7280] mt-2">
                  <span>SEO: 100</span>
                  <span>Accessibilité: 100</span>
                  <span>Bonnes Pratiques: 100</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#181b22] border border-[#2b313e] flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Satisfaction Clients Vérifiée</div>
                  <div className="text-[11px] text-[#9ca3af]">Basée sur 410 retours publics</div>
                </div>
                <span className="text-xl font-bold text-emerald-400">99.3%</span>
              </div>
            </div>
          )}

          {/* Tab 3: Industrial Stack Details */}
          {activeTab === 'stack' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e] flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Backend &amp; Microservices</div>
                  <div className="text-[11px] text-[#9ca3af]">NestJS, Node.js 22, Express, Fastify</div>
                </div>
                <span className="text-[10px] text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">Architecture</span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e] flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Frontend &amp; Interface</div>
                  <div className="text-[11px] text-[#9ca3af]">Next.js 15, React 19, TypeScript, Tailwind CSS</div>
                </div>
                <span className="text-[10px] text-purple-400 px-2 py-0.5 rounded bg-purple-500/10">UI / Edge</span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e] flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Infrastructure &amp; DevOps</div>
                  <div className="text-[11px] text-[#9ca3af]">Docker multi-stage, Linux VPS, Traefik, Coolify</div>
                </div>
                <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">Déploiement</span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#181b22] border border-[#2b313e] flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Automatisation &amp; Pipelines</div>
                  <div className="text-[11px] text-[#9ca3af]">Webhooks, API Integrations, Cron Workers, LLM</div>
                </div>
                <span className="text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">Workflow</span>
              </div>
            </div>
          )}

          {/* Console Footer */}
          <div className="mt-6 pt-4 border-t border-[#232730] flex items-center justify-between text-[11px] font-mono text-[#9ca3af]">
            <span>Code source versionné sur GitHub</span>
            <Link
              href="https://github.com/tobiags"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <span>github.com/tobiags</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
