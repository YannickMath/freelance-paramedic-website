import MentionsLegales from"../components/MentionsLegales"
import SEO from "../components/SEO";

export default function MentionsLegalesPage() {
  return (
    <>
      <SEO
        title="Mentions Légales"
        description="Mentions légales du site de Muriel MATHIEU, kinésiologue à Oullins."
        noindex={true}
      />
      <MentionsLegales />
    </>
  );
}

