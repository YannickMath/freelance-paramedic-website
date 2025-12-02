import Reflexologie from "../components/Reflexologie";
import SEO from "../components/SEO";

export default function ReflexologiePage() {
  return (
    <>
      <SEO
        title="Réflexologie Cranio-Sacrée"
        description="La réflexologie cranio-sacrée est une technique manuelle douce qui vise à rééquilibrer le système cranio-sacré. Consultations à Oullins (69600)."
        keywords="réflexologie cranio-sacrée, réflexologie, thérapie manuelle, relaxation, Oullins, Lyon"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/Reflexologie`}
      />
      <Reflexologie />
    </>
  );
}