import Accueil from "../components/Accueil"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil"
        description="Muriel MATHIEU, kinésiologue certifiée et praticienne en réflexologie cranio-sacrée à Oullins (69600). Découvrez mes services de kinésiologie, réflexologie et nettoyage énergétique."
        keywords="kinésiologie Oullins, réflexologie cranio-sacrée Lyon, nettoyage énergétique, bien-être 69600"
      />
      <div style={{ height: "100vh" }}>
        <Accueil />
      </div>
    </>
  );
}
