import Pourquoi from "../components/Pourquoi";
import SEO from "../components/SEO";

export default function PourquoiPage() {
  return (
    <>
      <SEO
        title="Pourquoi la Kinésiologie?"
        description="Découvrez les bienfaits de la kinésiologie et pourquoi choisir cette approche thérapeutique pour votre bien-être."
        keywords="bienfaits kinésiologie, pourquoi kinésiologie, thérapie alternative, bien-être holistique"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/Pourquoi`}
      />
      <Pourquoi />
    </>
  );
}