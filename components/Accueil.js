import Image from "next/image";
import Script from "next/script"; 

export default function Accueil() {
  const welcome = {
    item1: `"Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps"`,
    item2: `"Reprenez votre pouvoir personnel et accédez à votre grandeur et à votre plein potentiel"`,
    item3: `"Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique. Retrouvez ainsi votre vitalité, votre équilibre et mobilisez vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix."`,
    item4: "Muriel",
  };

  return (
    <div className="h-screen font-carattere relative flex flex-col  ">
    <Script
        src="
https://www.googletagmanager.com/gtag/js?id=NEXT_PUBLIC_GA_ID
"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'NEXT_PUBLIC_GA_ID');
        `}
      </Script> 
      <div className="h-full ">
        <Image
          src="/fond-pc.WebP"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=" opacity-80"
          style={{ filter: "brightness(0.7) saturate(1.1)" }}
        />
      </div>
      <div className=" h-full">
        <p className="phrase ">{welcome.item1}</p>
        <p className="phrase ">{welcome.item2}</p>
        <p className="phrase ">{welcome.item3}</p>
        <p className="phrase ">
          <span className="signature  ">Muriel</span>
        </p>
      </div>
    </div>
  );
}
