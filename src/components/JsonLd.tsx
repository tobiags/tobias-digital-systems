export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.tobiasagossou.website/#person',
        name: 'Tobias Agossou',
        jobTitle: 'Digital Systems Architect & Product Designer',
        image: 'https://www.tobiasagossou.website/images/portrait-tobias.png',
        url: 'https://www.tobiasagossou.website',
        description:
          "Expert en architecture de systèmes numériques, product design et automatisation d'entreprises. 508+ avis vérifiés et 508 missions livrées.",
        sameAs: [
          'https://github.com/tobiags',
          'https://comeup.com/fr/@tobias-06',
          'https://fr.fiverr.com/s/RVraW78',
          'https://www.youtube.com/@tobiasagossou4193',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.tobiasagossou.website/#organization',
        name: 'Tobias Agossou — Digital Systems Studio',
        url: 'https://www.tobiasagossou.website',
        logo: 'https://www.tobiasagossou.website/images/logo.png',
        image: 'https://www.tobiasagossou.website/images/portrait-tobias.png',
        description:
          "Studio d'architecture numérique, conception de produits logiciels, design systems et automatisation des processus.",
        priceRange: '€€€',
        founder: {
          '@id': 'https://www.tobiasagossou.website/#person',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '508',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.tobiasagossou.website/#website',
        url: 'https://www.tobiasagossou.website',
        name: 'Tobias Agossou — Digital Systems Studio',
        publisher: {
          '@id': 'https://www.tobiasagossou.website/#organization',
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
