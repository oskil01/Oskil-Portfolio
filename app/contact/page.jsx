"use client"

import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

// importation des éléments du formulaire
import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/ui/input";
import { Textarea } from "@/components/ui/ui/textarea";
// importation des éléments d'interaction 
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/ui/select";

// importation des icones de contact
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

// Données de contact
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Téléphone',
    description: '+243 820 838 387',
    path: "tel:+243820838387",
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'oskill@outlook.fr',
    path: "mailto:oskill@outlook.fr",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Adresse',
    description: '22, Ave. Moni B (Réf : Saint Michel), Q. KITUKU, Ville de Kalemie - RD Congo',
    path: "https://maps.app.goo.gl/Hmpz4UzHuhF5RLUZ7",
  },
]

import { motion } from "framer-motion";
import Iconlink from "@/components/ui/Iconlink";

const Contact = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState ("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState ("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // État pour contrôler l'affichage du popup

  // Envoyer un message
  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Active le loader

  const formData = {
    recipientEmail: "oskill@outlook.fr", // Remplace par une variable si nécessaire
    subject: "Bienvenue sur mon site !",
    message: "Merci de nous avoir contactés. Nous reviendrons vers vous bientôt.",
  };

  // validation email
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  if (!validateEmail(email)) {
    alert("Adresse email invalide !");
    setIsLoading(false);
    console.log("Loader activé :", true);
    return;
  }

  // validation du numéro de téléphone
  const validatePhone = (phone) => /^\+?[0-9]{8,15}$/.test(phone);
    if (!validatePhone(phone)) {
      alert("Numéro de téléphone invalide !");
    return;
  }

  // empeche l'envoie de message vide 
  if (!message.trim()) {
    alert("Le message ne peut pas être vide !");
    setIsLoading(false);
    return;
  }
    
    try {
      const response = await fetch("http://localhost/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, lastname, email, phone, service, message}),
      });
      // Simulation d'un appel API (remplacez avec votre logique d'envoi réel)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      console.log("Réponse complète :", response);
  
      // Vérifie si la réponse est bien JSON avant de la parser
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await response.text(); // Lire la réponse en texte
        console.error("Réponse non JSON :", textResponse);
        alert("Erreur : le serveur a retourné une page HTML au lieu d'un JSON.");
        return;
      }
  
      const responseData = await response.json();

      // Envoi via EmailJS
      const result = await emailjs.sendForm(
        'oskil_mailling',
        'oskil_mailling_template',
        e.target,
        'nBFc4iiaAvMxAqmQ0'
      );
  
      if (response.ok) {
        // Envoi réussi, on affiche le popup
        setShowPopup(true);
        // Réinitialiser le formulaire
        setName("");
        setLastname("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
        fetchMessages();
      } else {
        console.error("Erreur lors de l'envoi :", responseData);
        alert("Erreur lors de l'envoi du message : " + (responseData.message || "Erreur inconnue"));
      } 
      setShowPopup(true);
    } catch (error) {
      console.error("Erreur dans sendMessage :", error);
      alert("Erreur lors de l'envoi (catch)");
    } finally {
    setIsLoading(false); // Désactive le loader après réponse
  }
  };
  
    // Récupérer les messages
    const fetchMessages = async () => {
       const response = await fetch("http://localhost/api/send-email");
       const data = await response.json();
       setMessages(data);
    };

    useEffect(() => {
         fetchMessages();
     }, []);


    return (
      <motion.section 
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }} 
        className="py-6"
      > 
      {/* Affichage du loader avant l'envoi du message */}
       {isLoading && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              <span className="ml-2 text-white">Envoi en cours...</span>
            </div>
          </div>
        )}
        
        <div className="container mx-auto">
          <div className="relative flex flex-col xl:flex-row gap-[30px] 
            xl:mt-[-20px]">

            {/* Popup modal */}
            {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex 
              items-center justify-center z-50"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg text-center
              text-primary max-w-sm xl:max-w-xl md:max-w-md"
              >
                <h2 className="text-4xl text-green-800 text-bolder py-4">Envoyé !</h2>
                <h4 className="text-bolder text-green-800 text-2xl py-3">
                  Merci d'avoir contacté Oskil
                </h4>
                <p className="mb-5 text-green-800 text-base">
                  Votre message a été envoyé avec succès !
                  Une réponse vous sera envoyée à votre adresse mail fournie 
                  lors du contact.
                </p>
                <button
                  className="px-4 py-2 bg-green-800 text-white rounded
                  text-bolder text-lg"
                  onClick={() => setShowPopup(false)}
                >D'accord
                </button>
              </div>
            </div>
            )}

            {/** formulaire */}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form 
                className="flex flex-col gap-4 p-10 bg-[#27272c]
                rounded-xl" 
                onSubmit={sendMessage}
                autoComplete="off"
              >
                <h3 className="text-4xl text-accent text-extrabold ">Travaillons ensemble</h3>
                <p className="text-white/70">
                  Envoyez-moi un message pour toute sorte de préocupation et je 
                  vous répondrez sans hésiter.
                </p>
                {/** champs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">         
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text' name="name"
                    placeholder='Prénom *'
                    className="text-white/90"
                    required
                  />
                  <Input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type='text' name="lastname"
                    placeholder='Nom'
                    className="text-white/90"
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' name="email"
                    placeholder='Adresse mail *'
                    className="text-white/90"
                    required
                  />
                  <Input
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    type='number' name="phone"
                    placeholder='Téléphone *'
                    className="text-white/90"
                    required
                  />
                </div>
                
                {/* selection service */}
                <Select  onValueChange={(value) => setService(value)}>
                  <SelectTrigger className="w-full rounded-full bg-primary">
                    <SelectValue 
                      placeholder="Sélectionez un service (Facultatif)" 
                      className="text-accent [data-placeholder]:text-white/15"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Séléctionez un service</SelectLabel>
                      <SelectItem value="est">UI/UX Design</SelectItem>
                      <SelectItem value="cst">Développement Web</SelectItem>
                      <SelectItem value="mst">Infographie</SelectItem>
                      <SelectItem value="rst">Autres</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* champ de commentaire */}
                <Textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[120px]" 
                  type='text' name="message"
                  placeholder="Entrez votre message ici..."
                />
                {/* bouton de soumission */}
                <Button 
                  size="md" type="submit" className="max-w-40">
                  Envoyer le message
                </Button>
              </form>
            </div>
            {/** infos */}
            <div 
              className="flex-1 flex items-center xl:justify-end 
              order-1 xl:order-none mb-8 xl:mb-0"
            >
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-6 group"
                  >
                  {/* IconLink */}
                    <Iconlink
                      key={index}
                      title={item.title}
                      description={item.description}
                      path={item.path}  
                      icon={item.icon}
                      onClick={() => handleClick(item.path)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Contact;
  