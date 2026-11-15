import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PhilosophyAndValues } from '@/components/PhilosophyAndValues';
import { ExpertisesAndProcess } from '@/components/ExpertisesAndProcess';
import { Realizations } from '@/components/Realizations';
import { Testimonials } from '@/components/Testimonials';
import { GithubAndDemos } from '@/components/GithubAndDemos';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
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
