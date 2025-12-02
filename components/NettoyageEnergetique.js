import Image from "next/image";

export default function NettoyageEnergetique() {
  const nettoyage = {
    item1:
      "Le nettoyage énergétique permet de supprimer les énergies négatives qui ont envahi nos propres énergies et qui sont dans l'aura, les corps subtils, les chakras et le corps physique.",
    item2:
      "Grâce au magnétisme présent dans mes mains, je peux ressentir le négatif dans ces endroits et le supprimer, recentrer et réaligner vos énergies pour vous permettre une meilleure connexion avec vous-même, vous sentir mieux rapidement et retrouver la forme.",
    item3:
      "C'est une sorte de dépollution énergétique car malheureusement nous sommes, de par notre environnement, soumis à de nombreuses énergies nuisibles. ",
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondnettoyage.WebP"
          alt="Nettoyage énergétique - Image de fond"
          fill
          sizes="100vw"
          quality={75}
          priority
          className="object-cover"
          style={{ filter: "brightness(0.7) saturate(1.1)" }}
        />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 mt-28 sm:mt-10">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-16 space-y-6 lg:space-y-8 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-700 mb-4 text-center animate-fade-in">
              Nettoyage Énergétique
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {nettoyage.item1}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {nettoyage.item2}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {nettoyage.item3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
