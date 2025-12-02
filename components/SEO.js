import Head from 'next/head';

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  noindex = false,
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://murielmathieu.fr';
  const siteName = process.env.NEXT_PUBLIC_SITE_TITLE || 'Muriel MATHIEU - Kinésiologie';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Muriel MATHIEU, kinésiologue certifiée et praticienne en réflexologie cranio-sacrée à Oullins (69600). Accompagnement personnalisé pour votre bien-être physique et émotionnel.';
  const metaDescription = description || defaultDescription;
  const defaultKeywords = 'kinésiologie, réflexologie cranio-sacrée, nettoyage énergétique, bien-être, Oullins, Lyon, 69600, kinésiologue certifiée, thérapie alternative, gestion du stress, équilibre émotionnel';
  const metaKeywords = keywords || defaultKeywords;
  const defaultImage = `${siteUrl}/logo.png`;
  const metaImage = ogImage || defaultImage;
  const url = canonicalUrl || siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content={process.env.NEXT_PUBLIC_BUSINESS_NAME} />
      <meta name="language" content="French" />
      <meta httpEquiv="Content-Language" content="fr" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="FR-69" />
      <meta name="geo.placename" content="Oullins" />
      <meta name="geo.position" content="45.7136;4.8056" />
      <meta name="ICBM" content="45.7136, 4.8056" />

      {/* Favicon */}
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Head>
  );
}
