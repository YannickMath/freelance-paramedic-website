import React from "react";
import { HiUserCircle, HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactInfo() {
  const infoPersonnel = {
    nom: process.env.NEXT_PUBLIC_BUSINESS_NAME,
    adresse: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS,
    activité: "Kinésiologie, Réflexologie cranio-sacrée, Nettoyage energétique",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    téléphone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  };

  return (
    <div className="lg:space-y-2 space-y-1 font-roboto p-5 lg:p-0">
      <p className="font-roboto font-semibold mb-4 md:mt-6 ">
        "N'hésitez pas à me contacter pour de plus amples informations, je
        serais ravie de vous renseigner".
      </p>
      <p className="flex items-center">
        <HiUserCircle className="lg:mr-2   mr-4 justify-items-center" />
        {infoPersonnel.nom}
      </p>
      <p className="flex items-center ">
        <HiLocationMarker className="lg:mr-2  mr-4  justify-items-center" />
        {infoPersonnel.adresse}
      </p>
      <p className="flex items-center">
        <AiFillMail className="lg:mr-2  mr-4 justify-items-center" />
        <a
          className="lg:mb-1 underline text-green-600"
          href={`mailto:${infoPersonnel.email}`}
        >
          {infoPersonnel.email}
        </a>
      </p>
      <p className="flex items-center ">
        <BsFillTelephoneFill className="lg:mr-2  mr-4 justify-items-center" />
        {infoPersonnel.téléphone}
      </p>
    </div>
  );
}
