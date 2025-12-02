import Kinesiologie from '../components/Kinesiologie';
import SEO from '../components/SEO';

export default function kinesiologiePage() {
  return (
    <>
      <SEO
        title="Kinésiologie"
        description="La kinésiologie est une technique douce qui utilise des tests musculaires pour identifier et libérer les blocages énergétiques. Séances à Oullins (69600)."
        keywords="kinésiologie, test musculaire, équilibre énergétique, stress, Oullins, Lyon"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/Kinesiologie`}
      />
      <Kinesiologie />
    </>
  );
}

