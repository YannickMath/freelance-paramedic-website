import Image from "next/image";

export default function Reflexologie({ isSmallScreen }) {
  const reflexo = {
    item1:
      "La réflexologie cranio-sacrée est une technique douce issue de l'ostéopathie, simple et complète, totalement dédiée à l'écoute du corps.",
    item2:
      "Elle permet de réduire, voir de supprimer les douleurs ou les inconforts physiques en fluidifiant les blocages énergétiques dans le corps pour retrouver ou prolonger votre vitalité et votre bien-être.",
    item3:
      "Cela se passe par une étape d'écoute du crâne, puis une réharmonisation par de légères pulsions au niveau du sacrum et/ou des membres concernés en passant par les vertèbres.",
    item4:
      "Elle redonne au corps la possibilité de s'adapter et procure une relaxation complète au travers de l'axe crâne/vertèbres/sacrum.",
  };
  return (
    <div className="flex flex-col sm:flex-row md:flex-row font-roboto">
      <div className="w-full sm:w-1/3 md:w-1/3 h-96 sm:min-h-screen sm:mt-0 md:mt-24 relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/fondreflexo.WebP"
            alt="Réflexologie cranio-sacrée - Image de fond"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            quality={75}
            priority
            className="object-contain sm:object-cover"
            style={{ filter: "brightness(0.7) saturate(1.1)" }}
          />
        </div>
      </div>
      <div className="flex bg-gradient-to-br from-white to-gray-50 -mt-8 sm:mt-0 md:mt-24 lg:mt-0 flex-col px-6 py-8 sm:px-8 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 sm:min-h-screen justify-center w-full md:w-2/3 space-y-5 md:space-y-6 lg:space-y-7 text-base md:text-lg leading-relaxed text-gray-800 shadow-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-700 mb-2 animate-fade-in">
          Réflexologie Cranio-Sacrée
        </h2>
        <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {reflexo.item1}
        </p>
        <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {reflexo.item2}
        </p>
        <p className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {reflexo.item3}
        </p>
        <p className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {reflexo.item4}
        </p>
      </div>
    </div>
  );
}
