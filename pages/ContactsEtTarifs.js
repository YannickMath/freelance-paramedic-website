import ContactsEtTarifs from "../components/ContactsEtTarifs";
import SEO from "../components/SEO";

export default function ContactsEtTarifsiPage() {
  return (
    <>
      <SEO
        title="Contact & Tarifs"
        description="Contactez Muriel MATHIEU pour prendre rendez-vous. Consultez les tarifs des séances de kinésiologie et réflexologie à Oullins (69600)."
        keywords="contact kinésiologue, tarifs kinésiologie, tarifs réflexologie, rendez-vous, Oullins 69600"
        canonicalUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/ContactsEtTarifs`}
      />
      <ContactsEtTarifs />
    </>
  );
}
