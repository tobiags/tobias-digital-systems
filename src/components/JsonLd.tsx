export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://tobias-agossou.com/#person',
        name: 'Tobias Agossou',
        jobTitle: 'Digital Systems Architect & Product Designer',
        image: 'https://tobias-agossou.com/images/portrait-tobias.png',
        url: 'https://tobias-agossou.com',
        description:
          "Expert en architecture de systèmes numériques, product design et automatisation d'entreprises.",
        sameAs: [
          'https://github.com/tobiasagossou',
          'https://linkedin.com/in/tobiasagossou',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://tobias-agossou.com/#organization',
        name: 'Tobias Agossou — Digital Systems Studio',
        url: 'https://tobias-agossou.com',
        logo: 'https://tobias-agossou.com/images/portrait-tobias.png',
        image: 'https://tobias-agossou.com/images/portrait-tobias.png',
        description:
          "Studio d'architecture numérique, conception de produits logiciels, design systems et automatisation des processus.",
        priceRange: '$$$$',
        founder: {
          '@id': 'https://tobias-agossou.com/#person',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '400',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://tobias-agossou.com/#website',
        url: 'https://tobias-agossou.com',
        name: 'Tobias Agossou — Digital Systems Studio',
        publisher: {
          '@id': 'https://tobias-agossou.com/#organization',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
