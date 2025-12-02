import Image from "next/image";

export default function AproposDeMoi({isSmallScreen}) {
  const apropos = {
    item: "Bienvenue sur mon site ! Laissez-moi me présenter.",
    item1:
      "Je m'appelle Muriel et je suis kinésiologue certifiée, réflexologue cranio-sacrée et magnétiseuse.",
    item2:
      "Mais dans ma première vie comme j'aime à le dire, j'ai travaillé dans la comptabilité gestion, seulement je sentais depuis de longues années que ce métier ne me correspondait plus. Au fil du temps, j'ai perdu ma flamme intérieure et mon corps s'est mis à me faire de plus en plus mal jusqu'au jour où il s'est arrêté de bouger et là j'ai expérimenté le burn out. Mon corps et ma tête me lâchaient. Il m'a fallu quelques semaines pour m'autoriser à prendre soin de moi, le temps était venu des changements profonds.",
    item3:
      "J'ai toujours été intéressée par le développement personnel, l'énergétique car, cela a été prouvé scientifiquement, l'être humain est fait d'énergie, tout est fait d'énergie. J'ai essayé différentes médecines alternatives pour prendre soin de moi, pour me comprendre, pour me sortir de fonctionnements inadaptés, lâcher l'ancien pour créer du nouveau.",
    item4:
      "Je suis vraiment passionnée par la recherche du bien-être, de la spiritualité. J'ai d'abord fait une formation de magnétisme puis une formation de kinésiologue et de réflexologue cranio sacrée à l'école EKTC pendant 1 an et demi.",
    item5:
      "Mon objectif est d'accompagner les personnes afin qu'elles retrouvent leur chemin de vie de manière paisible, prêtes à faire de nouveaux choix et poser de nouvelles actions pour aller vers la vie qui leur ressemble.",
  };
  return (
    <div className="min-h-screen relative flex flex-col sm:flex-row font-roboto">
      <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col justify-center sm:mt-20 mt-20 md:mt-0 space-y-5 md:space-y-6 lg:space-y-7 w-full md:w-full lg:w-4/5 shadow-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-700 md:text-center mb-2 sm:mt-5 md:mt-32 animate-fade-in">{apropos.item}</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 md:pt-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>{apropos.item1}</p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up" style={{ animationDelay: '0.2s' }}>{apropos.item2}</p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up" style={{ animationDelay: '0.3s' }}>{apropos.item3}</p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up" style={{ animationDelay: '0.4s' }}>{apropos.item4}</p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium animate-slide-up" style={{ animationDelay: '0.5s' }}>{apropos.item5}</p>
      </div>
      {!isSmallScreen && (
        <div className="w-full sm:w-2/5 md:w-[36vw] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/moi.WebP"
              alt="Muriel MATHIEU - Kinésiologue"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              quality={80}
              priority
              className="object-cover"
              style={{ filter: 'brightness(0.95) saturate(1.1)' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
