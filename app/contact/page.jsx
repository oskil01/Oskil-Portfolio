"use client"

import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

// importation des éléments du formulaire
import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/ui/input";
import { Textarea } from "@/components/ui/ui/textarea";
import PhoneInput from "@/components/ui/PhoneInput"; // Importation du composant

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

// importation de l'icone de confirmation à l'envoi du message
import { CheckCircle } from "lucide-react";

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
  const [selectedCode, setSelectedCode] = useState({ 
    code: "CD", 
    dialCode: "+243", 
    name: "République Démocratique du Congo" 
  });

  // Envoyer un message
  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Active le loader
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone : event.target.phone.value,
      message: event.target.message.value,
    };

  // const formData = {
  //   recipientEmail: "oskill@outlook.fr", // Remplace par une variable si nécessaire
  //   subject: "Bienvenue sur mon site !",
  //   message: "Merci de nous avoir contactés. Nous reviendrons vers vous bientôt.",
  // };

  // validation email
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  if (!validateEmail(email)) {
    alert("Adresse email invalide !");
    setIsLoading(false);
    console.log("Loader activé :", true);
    return;
  }

  // const validatePhone = (fullPhone) => {
  //   // Récupère l'indicatif (ex: "+243") à partir de selectedCode
  //   const dialCode = selectedCode.dialCode;
  //   // Extrait la partie locale (après l'indicatif)
  //   const localNumber = fullPhone.slice(dialCode.length);
  //   // Vérifie que la partie locale comporte exactement 9 chiffres et
  //   // que l'ensemble commence par un "+"
  //   return localNumber.length === 9 && /^\+\d+$/.test(fullPhone);
  // };
  
  // // validation du numéro de téléphone
  // const fullPhone = selectedCode.dialCode + phone.replace(/\s/g, "");
  // console.log("Numéro de téléphone validé ?", validatePhone(fullPhone));
  // if (!validatePhone(fullPhone)) {
  //   ("Numéro de téléphone invalide !");
  //   setIsLoading(false);
  //   return;
  // }

  // empeche l'envoie de message vide 
  if (!message.trim()) {
    alert("Le message ne peut pas être vide !");
    setIsLoading(false);
    return;
  }
  let responseData = null;
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`);
      console.log("Envoi du message en cours...");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        // body: JSON.stringify({name, lastname, email, phone, service, message}),
      });

      const data = await response.json();
      console.log("Réponse du serveur :", data);

      if (!response.ok) {
        throw new Error(data.message || "Une erreur s'est produite");
      }
      
      console.log("Statut de la réponse :", response.status);

      // const responseData = await response.json();

      // Envoi via EmailJS
      const result = await emailjs.sendForm(
        'oskil_mailling',
        'oskil_mailling_template',
        e.target,
        'nBFc4iiaAvMxAqmQ0'
      );
      // try {
      //   const result = await emailjs.sendForm(
      //     'oskil_mailling',
      //     'oskil_mailling_template',
      //     e.target,
      //     'nBFc4iiaAvMxAqmQ0'
      //   );
      //   console.log("Email envoyé avec succès :", result);
      // } catch (emailError) {
      //   console.error("Erreur lors de l'envoi de l'email :", emailError);
      // }      
      
      console.log("Envoi du message...");
      if (response.ok) {
        // Envoi réussi, on affiche le popup
        setShowPopup(true);
        e.target.reset();
        // Réinitialiser le formulaire
        setName("");
        setLastname("");
        setEmail("");
        setPhone("");
        setSelectedCode({ code: "CD", dialCode: "+243", name: "RDC" }); // Réinitialise le code du pays
        setService("");
        setMessage("");
        fetchMessages();
      } else {
        console.error("Erreur lors de l'envoi :", responseData);
        alert("Erreur lors de l'envoi du message : " + (responseData?.message || "Erreur inconnue"));
      } 
      setShowPopup(true);
        } catch (error) {
          console.error("Erreur dans sendMessage :", error.message, error.stack);
          alert("Erreur lors de l'envoi (catch)");
        } finally {
          console.log("Désactivation du loader...");
          setIsLoading(false); // Désactive le loader après réponse
      }
    };
  
    // Récupérer les messages
    const fetchMessages = async () => {
      //  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`);
       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`);
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
              <span className="ml-2 text-white">
                En cours d'envoi...
              </span>
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
              <div className="bg-white p-8 m-5 rounded-xl shadow-lg text-center
              text-primary lg:max-w-[375px] xl:max-w-md md:max-w-[320px]"
              >
                {/* icone de confirmation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="flex justify-center"
                >
                  <CheckCircle size={50} className="text-green-800" />
                </motion.div>
                <h2 className="text-2xl text-green-800 text-bolder py-4">Message Envoyé !</h2>
                <p className="mb-5 text-green-800 text-base">
                  Vous recevrez une réponse à votre message par mail. Merci d'avoir contacté Oskil !
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
                <h3 className="xl:text-4xl text-3xl text-accent text-extrabold ">Travaillons ensemble</h3>
                <p className="text-white/70 text-sm xl:text-base">
                  Envoyez-moi un message pour toute sorte de préocupation et je 
                  vous répondrai sans hésiter.
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
                  {/* <Input
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    type='tel' name="phone"
                    placeholder='Téléphone *'
                    className="text-white/90"
                    required
                  /> */}
                  <PhoneInput 
                    phone={phone} 
                    setPhone={setPhone} 
                    selectedCode={selectedCode} 
                    setSelectedCode={setSelectedCode} 
                  />

                </div>
                
                {/* selection service */}
                <Select value={service}  onValueChange={(value) => setService(value)}>
                  <SelectTrigger className="w-full rounded-full bg-primary">
                    <SelectValue 
                      placeholder="Sélectionez un service (optionnel)" 
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Séléctionez un service</SelectLabel>
                      <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                      <SelectItem value="dev">Développement Web</SelectItem>
                      <SelectItem value="info">Infographie</SelectItem>
                      <SelectItem value="autres">Autres</SelectItem>
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
  