import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PhilosophyAndValues } from '@/components/PhilosophyAndValues';
import { ExpertisesAndProcess } from '@/components/ExpertisesAndProcess';
import { Realizations } from '@/components/Realizations';
import { Testimonials } from '@/components/Testimonials';
import { GithubAndDemos } from '@/components/GithubAndDemos';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tobias Agossou — Digital Systems Studio | Architecture, UI & Automatisation',
  description:
    'Studio de conception et architecture logicielle haute performance. Intégration Emil Kowalski Motion Physics & Hallmark Anti-Slop.',
  alternates: {
    canonical: 'https://www.tobiasagossou.website/',
  },
};

export default function VariantV2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-main">
      <Header />
      <main className="flex-1">
        <Hero />
        <PhilosophyAndValues />
        <ExpertisesAndProcess />
        <Realizations />
        <Testimonials />
        <GithubAndDemos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
