import AproposDeMoi from "../components/AproposDeMoi";
import SEO from "../components/SEO";

export default function AproposDeMoiPage(props) {
  return (
    <>
      <SEO
        title="À Propos de Moi"
        description="Découvrez mon parcours et ma passion pour la kinésiologie et la réflexologie cranio-sacrée. Muriel MATHIEU, praticienne certifiée à Oullins."
        keywords="praticienne kinésiologie, formation kinésiologie, parcours professionnel, Muriel MATHIEU, Oullins"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/AproposDeMoi`}
        ogType="profile"
      />
      <AproposDeMoi {...props} />
    </>
  );
}

