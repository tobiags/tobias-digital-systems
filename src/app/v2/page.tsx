import type { Metadata } from 'next';
import { VariantBanner } from '@/components/v2/VariantBanner';
import { HeaderV2 } from '@/components/v2/HeaderV2';
import { HeroV2 } from '@/components/v2/HeroV2';
import { PhilosophyV2 } from '@/components/v2/PhilosophyV2';
import { WorkMatrixV2 } from '@/components/v2/WorkMatrixV2';
import { TestimonialsV2 } from '@/components/v2/TestimonialsV2';
import { ContactV2 } from '@/components/v2/ContactV2';
import { FooterV2 } from '@/components/v2/FooterV2';

export const metadata: Metadata = {
  title: 'Tobias Agossou — Digital Systems Studio | Architecture, UI & Automatisation (Variante V2)',
  description:
    'Variante V2 Studio : Systèmes web haute performance, architecture découplée Next.js/NestJS, motion précis et pipelines automatisés sans latence.',
  alternates: {
    canonical: 'https://www.tobiasagossou.website/v2',
  },
  openGraph: {
    title: 'Tobias Agossou — Digital Systems Studio (Variante V2)',
    description:
      'Systèmes web haute performance, architecture découplée Next.js/NestJS et automatisation robuste.',
    url: 'https://www.tobiasagossou.website/v2',
    siteName: 'Tobias Agossou Digital Systems Studio',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function VariantV2Page() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#090a0c] selection:bg-[#0f52ba] selection:text-white antialiased">
      {/* Quick switcher to toggle between V1 and V2 */}
      <VariantBanner />

      {/* Architectural Navigation */}
      <HeaderV2 />

      <main>
        {/* Hero Section with interactive Systems Architecture Console */}
        <HeroV2 />

        {/* Philosophy & 4 Technical Pillars */}
        <PhilosophyV2 />

        {/* Production Case-Study Matrix */}
        <WorkMatrixV2 />

        {/* Verified Reviews & Live Profile Links */}
        <TestimonialsV2 />

        {/* Technical Inquiry & Project Scope Terminal */}
        <ContactV2 />
      </main>

      {/* System Footer with dynamic year & links */}
      <FooterV2 />
    </div>
  );
}
