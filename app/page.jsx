'use client'; 

import { useState, useEffect } from 'react'; // hooks
import { motion } from "framer-motion"; 
import { Button } from "@/components/ui/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/ui/Socials"
import PhotoHeader from '@/components/ui/PhotoHeader';
import Stats from '@/components/ui/Stats';

const Accueil = () => { // animation du span
  const texts = [
    "UI/UX Designer", 
    "Développeur Web", 
    "Infographiste", 
    "Créateur Digital", 
    "Freelance"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Changement du texte 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change tous les 3 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage
  }, []);

  const text = texts[currentTextIndex]; // Texte actuel à animer
  
  // dOWNLOAD CV
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/";
  //   link.download = "Mon_CV.pdf"; // Nom du fichier
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  
  return (
    <section className="h-full bg-primary text-white">
      <div className="container mx-auto h-full px-4 py-8">
        <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24"
        >
          {/* Contenu textuel */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Bonjour, c'est moi</span>
            <h1 className="h1 py-6">
              Junior Johnson<br />
              {/* Application de l'animation au mot complet */}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }} // Animation plus lente et visible plus longtemps
              >
                {text}
              </motion.span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
               Transformons vos idées en expériences digitales inoubliables. 
               Découvrez mon univers de création et de développement.
            </p>
            {/* Bouton de téléchargement et liens sociaux ET cv */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start 
                justify-center xl:justify-start gap-6 xl:gap-8">
               <Button
                  // onClick={handleDownload}  
                  variant="ghost"
                  size="lg"
                  className="uppercase flex items-center gap-2 border border-accent 
                  border-[2px] text-accent rounded-full px-6 py-3 hover:bg-accent 
                  hover:text-primary transition-all duration-300"
                >
                  <span>Telechargez mon CV</span>
                  <FiDownload className="text-xl" />
                </Button>
            <div>
            <Socials 
               containerStyles="flex gap-3" 
               iconStyles="w-9 h-9 border border-accent rounded-full flex 
               justify-center items-center text-accent text-base hover:bg-accent
               hover:text-primary transition-all duration-500 "
            />
            </div>
          </div>
          </div>

          {/* Contenu image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PhotoHeader />
          </div>
        </div>
      </div>

      {/* Statistiques */}

      <Stats />

    </section>
  );
};

export default Accueil;
