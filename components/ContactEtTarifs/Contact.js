import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";
import Tarifs from "./Tarifs";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mt-20 sm:mt-24 lg:mt-32 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ContactInfo />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Tarifs />
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-28">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-6 mx-auto animate-fade-in">
        <SocialIcons />
      </div>
    </div>
  );
}
