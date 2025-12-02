import { useState } from "react";
import { GrValidate } from"react-icons/gr";

export default function Form() {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const [formData, setFormData] = useState({
    nom: "",
    soin: "",
    téléphone: "",
    email: "",
    objet: "",
    message: "",
    access_key: process.env.NEXT_PUBLIC_API_KEY,

  });

  const [selectedOption, setSelectedOption] = useState("Choisir un soin");

  // Rate limiting: 1 submission per 30 seconds
  const RATE_LIMIT_MS = 30000;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      soin: event.target.value,
    });
  };
  
  // Input sanitization helper
  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9+\s()-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(""); // Clear errors on input change

    // On vérifie si c'est le champ téléphone ou email et on applique la regex correspondante
    if (name === 'téléphone') {
      const phoneRegex = /^[0-9+\s()-]*$/;
      if (phoneRegex.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: sanitizeInput(value)
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      const waitTime = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime)) / 1000);
      setError(`Veuillez attendre ${waitTime} secondes avant de soumettre à nouveau.`);
      return;
    }

    // Vérifie que tous les champs sont remplis
    if (
      !formData.nom ||
      !formData.soin ||
      !formData.téléphone ||
      !formData.email ||
      !formData.objet ||
      !formData.message
    ) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    // Validate phone format
    if (!validatePhone(formData.téléphone)) {
      setError("Veuillez entrer un numéro de téléphone valide (minimum 10 chiffres).");
      return;
    }

    // Validate soin selection
    if (formData.soin === "Choisir un soin" || formData.soin === "Aucune sélectoin de soin") {
      setError("Veuillez choisir un type de soin.");
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("nom", sanitizeInput(formData.nom));
    data.append("soin", formData.soin);
    data.append("téléphone", formData.téléphone);
    data.append("email", formData.email);
    data.append("objet", sanitizeInput(formData.objet));
    data.append("message", sanitizeInput(formData.message));
    data.append("access_key", process.env.NEXT_PUBLIC_API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setLastSubmitTime(Date.now());
        setFormData({
          nom: "",
          soin: "",
          email: "",
          objet: "",
          téléphone: "",
          message: "",
          access_key: process.env.NEXT_PUBLIC_API_KEY,
        });
        setSelectedOption("Choisir le type de soin");
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Une erreur s'est produite. Veuillez vérifier votre connexion et réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="font-roboto lg:ml-4 flex-col space-y-4 text-[#333333] p-5 lg:p-0">
      <h4>Envoyez-moi un mail directement</h4>

      {/* Error message display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className=" rounded-xl relative">
        <label htmlFor="contactNom" className="sr-only">Nom complet</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.nom}
          id="contactNom"
          name="nom"
          placeholder="Nom"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="outline-none border-b-2 focus:border-green-500 w-full"
        />
      </div>
      <div>
        <label htmlFor="slectSoin" className="text-gray-400">
          Choisir un soin :
        </label>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          id="slectSoin"
          name="soin"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="focus:border-green-500"
        >
          <option value="Aucune sélectoin de soin">Choisir le type de soin</option>
          <option value="kinésiologie">Kinésiologie</option>
          <option value="Réflexologie cranio-sacrée">Réflexologie cranio-sacrée</option>
          <option value="Nettoyage energétique">Nettoyage energétique</option>
        </select>
      </div>
      <div>
        <label htmlFor="contactEmail" className="sr-only">Adresse email</label>
        <input
          type="email"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="outline-none border-b-2 focus:border-green-500 w-full"
        />
      </div>
      <div>
        <label htmlFor="contactObjet" className="sr-only">Objet du message</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.objet}
          id="contactObjet"
          name="objet"
          placeholder="Objet"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="outline-none border-b-2 focus:border-green-500 w-full"
        />
      </div>
      <div>
        <label htmlFor="contactTéléphone" className="sr-only">Numéro de téléphone</label>
        <input
          type="tel"
          onChange={handleChange}
          value={formData.téléphone}
          id="contactTéléphone"
          name="téléphone"
          placeholder="Téléphone"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="outline-none border-b-2 focus:border-green-500 w-full"
        />
      </div>
      <div>
        <label htmlFor="contactMessage" className="sr-only">Votre message</label>
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
          aria-required="true"
          disabled={isSubmitting}
          className="w-4/5 border-2 outline-none focus:border-green-500"
        ></textarea>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="border-2 w-2/3 lg:w-1/4 border-yellow-500 bg-green-200 rounded-full hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors py-2"
          onClick={handleSubmit}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : success ? "Message envoyé" : "Envoyer message"}
        </button>
        {success && (
          <div aria-live="polite" aria-label="Message envoyé avec succès">
            <GrValidate size={30} />
          </div>
        )}
      </div>
    </div>
  );
}
