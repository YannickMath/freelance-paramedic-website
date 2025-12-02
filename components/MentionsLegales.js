
export default function MentionsLegales() {
    return (
        <div className="flex-grow-1 font-roboto min-h-screen w-screen bg-gray-50 flex justify-center items-center relative p-5">
          <div className=" mt-44 md:mt-32 sm:mt-24">
            <h1 className="font-bold mb-4 ">Mentions Légales</h1>
            <p className="mb-4">
              Le présent site internet est la propriété de {process.env.NEXT_PUBLIC_OWNER_NAME},
              kinésiologue domiciliée au {process.env.NEXT_PUBLIC_OWNER_ADDRESS}. Le site est édité par {process.env.NEXT_PUBLIC_EDITOR_NAME} et hébergé par Google
              Workspace.
            </p>
            <p className="mb-4 ">
              Le contenu de ce site internet est destiné à fournir des informations
              générales sur la kinésiologie et les services proposés par {process.env.NEXT_PUBLIC_BUSINESS_NAME}. Les informations fournies sur ce site ne sont pas destinées à
              remplacer une consultation médicale ou professionnelle qualifiée.
            </p>
            <p className="mb-4">
              {process.env.NEXT_PUBLIC_BUSINESS_NAME} s'efforce de maintenir les informations sur ce site
              internet à jour et exactes, mais ne peut garantir leur exhaustivité,
              leur actualité ou leur pertinence pour une utilisation particulière.
              L'utilisation de ce site est entièrement aux risques de l'utilisateur.
            </p>
            <p className="mb-4">
              Ce site internet utilise des cookies pour améliorer votre expérience
              de navigation. En utilisant ce site, vous consentez à l'utilisation de
              ces cookies conformément à notre politique de confidentialité.
            </p>
            <p className="mb-4">
              Pour toute question ou réclamation concernant ce site internet, vous
              pouvez contacter {process.env.NEXT_PUBLIC_EDITOR_NAME} à l'adresse suivante : {process.env.NEXT_PUBLIC_EDITOR_ADDRESS}.
            </p>
          </div>
        </div>
      );

}
