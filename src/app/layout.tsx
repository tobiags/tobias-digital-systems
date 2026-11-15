import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#f6f3ee',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Tobias Agossou — Digital Systems Studio | Architecture, UI & Automatisation',
  description:
    "Tobias Agossou aide les entreprises ambitieuses à structurer, concevoir et faire évoluer des systèmes numériques clairs, performants et centrés sur l'humain. 410+ avis vérifiés, 519 missions réussies.",
  keywords: [
    'Tobias Agossou',
    'Digital Systems Studio',
    'Architecture Web',
    'Product Design',
    'Automatisation IA',
    'Design Systèmes',
    'NestJS',
    'NextJS',
    'Freelance Tech',
  ],
  authors: [{ name: 'Tobias Agossou', url: 'https://www.tobiasagossou.website' }],
  creator: 'Tobias Agossou',
  metadataBase: new URL('https://www.tobiasagossou.website'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tobias Agossou — Digital Systems Studio',
    description:
      'Conception de systèmes numériques élégants, véloces et automatisés. 400+ avis vérifiés.',
    url: 'https://www.tobiasagossou.website',
    siteName: 'Tobias Agossou — Digital Systems Studio',
    images: [
      {
        url: '/images/logo.png',
        width: 988,
        height: 657,
        alt: 'Tobias Agossou — Digital Systems Studio',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tobias Agossou — Digital Systems Studio',
    description:
      'Conception de systèmes numériques élégants, véloces et automatisés. 400+ avis vérifiés.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${bodoni.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-bg text-text-main selection:bg-accent/20">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
