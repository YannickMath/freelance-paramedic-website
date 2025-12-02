import Image from "next/image";

export default function Pourquoi() {
  const reasons = [
    "Manque de confiance en soi",
    "Blocages émotionels",
    "Difficulté d'apprentissage",
    "Découragement, burn out",
    "Insomnies",
    "Maux du corps, douleurs chroniques",
    "Angoisses, peurs, stress profond",
    "Chocs affectifs, solitude",
  ];

  return (
    <div className="relative min-h-screen font-roboto">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondpourquoi.WebP"
          alt="Pourquoi la kinésiologie - Image de fond"
          fill
          sizes="100vw"
          quality={75}
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.7) saturate(1.1)' }}
        />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 md:mb-6 animate-fade-in">
            Pourquoi consulter ?
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-800 mb-6 md:mb-8 max-w-3xl mx-auto font-semibold animate-slide-up" style={{ animationDelay: '0.1s' }}>
            La kinésiologie peut vous aider à surmonter de nombreux défis du quotidien :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 gap-y-8 md:gap-y-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 flex items-center justify-center text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/90 hover:shadow-2xl animate-slide-up h-24 md:h-28"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <p className="text-sm md:text-base font-medium text-gray-800 leading-snug">
                  {reason}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 text-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <p className="text-base sm:text-lg text-gray-800 italic font-semibold">
              La kinésiologie vous accompagne vers un mieux-être global
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
