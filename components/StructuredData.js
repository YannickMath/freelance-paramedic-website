import Head from 'next/head';

export default function StructuredData() {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Muriel MATHIEU';
  const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '45 Boulevard Général de Gaulle, Oullins 69600';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@murielmathieu.fr';
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '06 59 98 32 08';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://murielmathieu.fr';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: businessName,
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: phoneNumber,
    email: contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '45 Boulevard Général de Gaulle',
      addressLocality: 'Oullins',
      postalCode: '69600',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.7136,
      longitude: 4.8056,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [facebookUrl, instagramUrl].filter(Boolean),
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: 'Lyon',
    },
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: businessName,
    url: siteUrl,
    image: `${siteUrl}/moi.WebP`,
    sameAs: [facebookUrl, instagramUrl].filter(Boolean),
    jobTitle: 'Kinésiologue certifiée',
    worksFor: {
      '@type': 'Organization',
      name: businessName,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Kinésiologie',
    provider: {
      '@type': 'LocalBusiness',
      name: businessName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '45 Boulevard Général de Gaulle',
        addressLocality: 'Oullins',
        postalCode: '69600',
        addressCountry: 'FR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Lyon',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Kinésiologie',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kinésiologie',
            description: 'Séance de kinésiologie pour équilibrer votre énergie vitale',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réflexologie Cranio-Sacrée',
            description: 'Technique de réflexologie douce pour libérer les tensions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nettoyage Énergétique',
            description: 'Harmonisation et purification énergétique',
          },
        },
      ],
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </Head>
  );
}
