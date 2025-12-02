import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="lg:flex-1 h-px border-b border-solid border-gray-400"></div>

      <a
        href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
        title="Page Facebook"
        className="lg:w-10 w-8"
      >
        <BsFacebook aria-hidden="true" size={25} />
      </a>
      <a
        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
        title="Page Instagram"
        className="lg:w-0 w-8"
      >
        <AiFillInstagram aria-hidden="true" size={25} />
      </a>

      <div className="lg:flex-1 h-px border-b border-solid border-gray-400"></div>
    </div>
  );
}
