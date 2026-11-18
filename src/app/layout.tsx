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
    "Tobias Agossou aide les entreprises ambitieuses à structurer, concevoir et faire évoluer des systèmes numériques clairs, performants et centrés sur l'humain. 508+ avis vérifiés, 508 missions livrées.",
  keywords: [
    'Tobias Agossou',
    'Digital Systems Studio',
    'Architecture Web',
    'Product Design',
    'Automatisation IA',
    'Design Systèmes',
    'NextJS',
    'React',
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
      'Conception de systèmes numériques élégants, véloces et automatisés. 508+ avis vérifiés.',
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
      'Conception de systèmes numériques élégants, véloces et automatisés. 508+ avis vérifiés.',
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-text-main focus:text-surface-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent font-mono text-xs"
        >
          Aller au contenu principal
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
