import React from "react";
import { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const imageTestMusculaire = "/testmusc.png";

const wikipedia = {
  item1:
    "La kinésiologie est une approche holistique qui vise à rétablir l'équilibre du corps dans toutes ses composantes : structurelles, psycho-émotionnelles, biochimiques et énergétiques.",
  item2:
    "La spécificité de la kinésiologie c'est l'utilisation du test musculaire qui permet d'interroger le corps, notre inconscient et de faire remonter à la concience les déséquilibres énergétiques et les stress émotionnels qui empêchent l'individu d'utiliser toutes ses potentialités.",
  item3:
    "En effet, le corps a une mémoire dite cellulaire dans laquelle sont enregistrés tous les évènements vécus. Le test musculaire oriente vers les techniques à utiliser pour libérer ces blocages, ces tensions.",
  item4:
    "La kinésiologie permet de vous libérer de la charge émotionnelle négative qui est associée à un évènement du passé et de retrouver équilibre physique, mental et émotionnel. Elle permet donc de changer le regard sur soi et sur les situations qu'on vit et de faire de nouveaux choix en respectant ses besoins, ses émotions et ses aspirations.",
  item5:
    "Faire appel à la kinésiologie c’est utiliser l’intelligence du corps pour remettre l’énergie en mouvement, faire le tri dans le flot émotionnel pour enfin se sentir léger, apaisé.",
  item6: "Le test musculaire",
  item7: imageTestMusculaire,
  item8: `"Ce qui ne s'exprime pas s'imprime"`,
  item9: `"Le corps est le reflet de notre inconscient"`,
  item10:
    "Une séance débute par un temps d’échange afin de clarifier la raison de votre venue et d’identifier votre objectif de séance. Puis allongé sur une table de massage, le test musculaire permet « d’interroger » votre corps.",
  item11:
    "Qu’est-ce que le test musculaire ? Il s’agit d’une pression douce et non contraignante qui se pratique le plus souvent sur le muscle du bras. Il nous mène aux causes et aux antidotes du mal-être. Il nous permet d’accéder à la mémoire du corps, d’identifier les facteurs contribuant aux blocages et nous amène aux équilibrations afin de retirer la charge émotionnelle négative associée pour rétablir votre mieux-être.",
  item12:
    "Le kinésiologue n'est pas un médecin, il n'établit ni diagnostic, ni prescription et ne vous demandera jamais d'arrêter un traitement.",
};
export default function Kinesiologie({ isSmallScreen }) {
  const Carousel = ({ items }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const parentRef = useRef(null);

    const settings = {
      dots: true,
      customPaging: (i) => (
        <div
          className=" lg:top-10 bottom-2 font-bold text-black font-roboto"
          style={{
            color: activeSlide === i ? "white" : "grey",
            fontSize: activeSlide === i ? "30px" : "25px",
            textDecoration: activeSlide === i ? "underline" : "none",
            position: isSmallScreen && activeSlide === 1 ? "fixed" : "absolute",
          }}
        >
          {i + 1}
        </div>
      ),

      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => {
        setActiveSlide(index);
        parentRef.current.scrollIntoView({ behavior: "smooth" });
      },
    };

    return (
      <div className="min-h-screen font-roboto relative pt-20 pb-8 md:pt-0 md:pb-24" ref={parentRef}>
        <div className="flex flex-col justify-center lg:mt-0 lg:ml-10 ml-2 lg:mr-10 mr-2">
          <Slider {...settings}>
            <div className={activeSlide === 0 ? "" : "hidden"}>
              <div className="flex-col space-y-5 md:space-y-6 lg:space-y-7 pt-28 pb-10 md:py-10 md:pt-10 mt-0 sm:mt-20 md:mt-24 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                  <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary-700 mb-6 animate-fade-in">
                    C'est quoi la kinésiologie ?
                  </h3>
                  <div className="space-y-4 md:space-y-5 text-base md:text-lg leading-relaxed text-gray-800">
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      {items.item1}
                    </p>
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {items.item2}
                    </p>
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {items.item3}
                    </p>
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {items.item4}
                    </p>
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.5s" }}
                    >
                      {items.item5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeSlide === 1 ? "" : "hidden"}>
              <div className="h-full flex flex-col justify-center space-y-6 lg:space-y-8 pt-28 pb-10 md:py-10 md:pt-10 md:mt-24 mt-0 sm:mt-20 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                  <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary-700 mb-8 animate-fade-in">
                    {items.item6}
                  </h3>
                  <div className="mb-8 animate-scale-in">
                    <Image
                      src={items.item7}
                      alt="Test musculaire de kinésiologie"
                      width={400}
                      height={400}
                      className="mx-auto rounded-full shadow-lg"
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <p
                      className="text-lg md:text-xl italic font-medium text-primary-600 bg-primary-50 p-6 rounded-xl animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {items.item8}
                    </p>
                    <p
                      className="text-lg md:text-xl italic font-medium text-primary-600 bg-primary-50 p-6 rounded-xl animate-slide-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {items.item9}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeSlide === 2 ? "" : "hidden"}>
              <div className="flex flex-col justify-center space-y-5 md:space-y-6 lg:space-y-7 pt-28 pb-10 md:py-10 md:pt-10 mt-0 md:mt-24 sm:mt-20 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                  <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-primary-700 mb-6 animate-fade-in">
                    Déroulé d'une séance
                  </h3>
                  <div className="space-y-4 md:space-y-5 text-base md:text-lg leading-relaxed text-gray-800">
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      {items.item10}
                    </p>
                    <p
                      className="animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {items.item11}
                    </p>
                    <p
                      className="text-sm md:text-base italic bg-secondary-50 p-4 rounded-lg border-l-4 border-primary-500 animate-slide-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {items.item12}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondkinesio.WebP"
          alt="Kinésiologie - Image de fond"
          fill
          sizes="100vw"
          quality={75}
          priority
          className="object-cover"
          style={{ filter: "brightness(0.7) saturate(1.1)" }}
        />
      </div>
      <div className="relative z-10">
        <Carousel items={wikipedia} />
      </div>
    </div>
  );
}
