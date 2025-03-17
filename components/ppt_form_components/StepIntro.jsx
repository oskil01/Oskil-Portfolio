"use client"

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { FaRocket } from "react-icons/fa";
import { ArrowDownRight } from "lucide-react";

export default function StepIntro() {
  
  // parametres de visualisation de la vidéo de présentation
  const [isOpen, setIsOpen] = useState(false);
  // paramtre de la fleche indicative du bouton d'action
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#121212] text-white min-h-screen flex 
    items-center justify-center p-6 rounded-xl"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Gauche - Image + Intro */}
        <div>
          <Image 
            src="/assests/offers/formations/formation.jpg" 
            alt="Formation PowerPoint" 
            width={500} 
            height={500} 
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 py-3">
            Bienvenue sur cette nouvelle session de formation en 
            Microsoft PowerPoint !
          </h2>
          <p className="text-gray-400 mt-2">
          Que vous soyez novice, intermédiaire ou expert, cette formation 
          vous aidera à affiner votre créativité et à obtenir des résultats 
          raffinés.
          </p>
          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Convient à tous les niveaux", "Modèles esthétiques", "Ergonomique", 
              "Créatif et sophistiqué", "Fonctionnel", "Conçu pour les professionnels"
            ].map((tag, index) => (
              <span key={index} className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
                {tag}
              </span>
            ))}
          </div>
          {/* Vidéo de présentation avec un sous-titre */}
          <div className="mt-6">
            <h5 className="text-2xl font-semibold mb-3 
            text-center">
              Regardez la vidéo de présentation pour en savoir plus
            </h5>

            {/* Conteneur vidéo avec bouton Play */}
            <div className="relative flex justify-center">
              {/* Miniature vidéo avec bouton Play */}
              <div 
                className="relative cursor-pointer group" 
                onClick={() => setIsOpen(true)}>
                <img 
                  src="/assests/offers/formations/formation.jpg" 
                  alt="Miniature Vidéo" 
                  className="w-full max-w-xl rounded-xl shadow-xl border-2 border-accent"
                />

                {/* Bouton Play centré */}
                <button className="absolute inset-0 flex items-center 
                justify-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex
                   items-center justify-center shadow-xl transition 
                   transform group-hover:scale-110 mt-[-10px]"
                  >
                    <svg 
                      className="w-9 h-9 text-white hover:text-accent ms-2" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Fenêtre modale pour afficher la vidéo */}
            {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex 
            items-center justify-center z-50"
            >
              <div className="relative w-[90%] max-w-4xl">
                {/* Bouton de fermeture */}
                <button 
                  className="absolute z-50 xl:right-[20px] right-3 text-white/80 
                  bg-primary hover:bg-primary hover:text-accent p-1 xl:p-2 xl:top-4 top-2 
                  rounded-full shadow-md flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer la vidéo"
                >
                  <X className="w-2 h-2 xl:w-5 xl:h-5" 
                  />
                </button>

                {/* Vidéo */}
                <div
                 className="relative w-full  xl:max-w-4xl min-w-screen bg-gradient-to-b 
                 from-orange-900 via-orange-800 to-accent 
                 p-1 rounded-xl shadow-2xl"
                > 
                  <video controls autoPlay className="w-full rounded-xl shadow-2xl">
                    <source src="/assests/offers/formations/Rihanna_-_Lift_Me_Up__From_Black_Panther__Wakanda_Forever_(720p).mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              </div>
           </div>
           )}
          </div>
        </div>

        {/* Section Droite - Infos + Inscription */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl">
        <h2 className="text-accent font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
            FORMATION EN MICROSOFT POWERPOINT - 
            <span className="text-white/90"> SESSION MARS 2025</span>
          </h2>
          {/* Détails de la formation */}
          <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 14v-4m0 0V6m0 4h4m-4 0H8m12-1v8a2 2 0 01-2 
                    2h-12a2 2 0 01-2-2v-8">
                  </path>
                </svg>
                <p className="text-gray-400 text-[12px] xl:text-base">En ligne :</p>
                <strong 
                  className="ml-2 text-lg text-white/90">15$
                </strong>
              </li>

              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-green-400 mr-2" 
                  fill="none" stroke="currentColor" 
                  strokeWidth="2" viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 9l9-6 9 6v6a9 9 0 11-18 0V9z">
                  </path>
                </svg>
                <p className="text-gray-400 text-[12px] xl:text-base">Présentiel :</p>
                <strong className="ml-2 text-lg text-white/90">25$</strong>
              </li>

              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-purple-400 mr-2" 
                  fill="none" stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 8c1.333 0 4 1.333 4 4s-2.667 4-4 4-4-1.333-4-4 
                    2.667-4 4-4z">
                  </path>
                </svg>
                <p className="text-gray-400 text-[12px] xl:text-base">Durée :</p>
                  <span className="ml-2 font-extrabold text-white/90">
                    14 jours
                  </span>
              </li>

              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-red-400 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M8 7V3m8 4V3m-8 4h8m-9 10h10a2 2 0 002-2V9a2 2 0 
                    00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
                <span className="ml-2 font-extrabold text-white/90 
                text-[14px] xl:text-base">
                10-24 Avr. 2025
                </span>
              </li>
            </ul>
          </div>

          {/* Matieres */}
          <h3 className="mt-6 text-xl font-semibold">
            Ce que vous allez apprendre dans cette formation :
          </h3>
          <ul className="list-disc pl-6 mt-2 text-gray-400">
            {[
              "Introduction au PowerPoint", "Interface et navigation", 
              "Création de diapositives", "Mise en forme", 
              "Transitions et animations", "Insertion de contenu multimédia",
              "Modèles et thèmes", "Collaboration et partage", 
              "Techniques de présentation"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 bg-gray-800 p-4 rounded-lg flex items-center justify-between">
            <h3 className="text-lg font-semibold">Prêt à vous lancer maintenant ?</h3>
            <FaRocket className="text-white text-3xl" />
          </div>

          <p className="text-gray-400 mt-2">
            Commencez par vous inscrire en suivant quelques étapes pour 
            participer à la formation. Cliquez sur le bouton  <strong className="text-gray-300">" Suivant " </strong>pour 
            procéder à l'inscription.
          </p>
        </div>
      </div>
    </div>
  );
}
