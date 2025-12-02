import NettoyageEnergetique from "../components/NettoyageEnergetique";
import SEO from "../components/SEO";

export default function NettoyageEnergetiquePage() {
  return (
    <>
      <SEO
        title="Nettoyage Énergétique"
        description="Le nettoyage énergétique permet de purifier et harmoniser les énergies de votre corps et de votre environnement. Séances personnalisées à Oullins (69600)."
        keywords="nettoyage énergétique, purification énergétique, harmonisation, bien-être énergétique, Oullins, Lyon"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/NettoyageEnergetique`}
      />
      <NettoyageEnergetique />
    </>
  );
}