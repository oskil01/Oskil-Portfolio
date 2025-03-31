"use client";
import { motion } from "framer-motion";
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const optionsList = {
  niveauConnaissance: [
    { id: "nov", name: "Je suis novice en PowerPoint" },
    { id: "base", name: "J'ai des bases en PowerPoint" },
    { id: "moyen", name: "Je suis moyen en PowerPoint" },
    { id: "expert", name: "Je suis expert en PowerPoint" },
  ],
  objectif: [
    { id: "none", name: "Aucun" },
    { id: "perso", name: "Je veux juste apprendre" },
    { id: "dev", name: "C'est pour booster ma créativité" },
    { id: "pro", name: "C'est pour trouver du travail" },
    { id: "other", name: "Autres" },
  ],
  vacation: [
    { id: "online", name: "Je veux participer en ligne" },
    { id: "home", name: "Je veux participer en présentiel" },
    { id: "anyone", name: "Le tout" },
  ],
  timeEmploy: [
    { id: "anywhen", name: "Disponible à tout moment" },
    { id: "timeless", name: "Disponible partiellement" },
    { id: "night", name: "Disponible la nuit" },
    { id: "morning", name: "Disponible sur programme" },
  ],
};

// Composant générique pour chaque ListBox
const CustomListBox = ({ label, options, selected, setSelected }) => {
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Bouton de sélection */}
          <Listbox.Button className="relative w-full cursor-default rounded-xl 
            bg-primary py-2 pl-5 pr-10 text-left text-gray-300 focus:outline-none 
            focus:ring-2 focus:ring-accent">
            <span className={`block truncate 
              ${!selected ? "text-gray-400" : "text-white"}`}
            >
              {!selected ? label : selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 
            flex items-center pr-2 text-accent">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>

          {/* Liste des options affichée au-dessus */}
          <Listbox.Options className="absolute bottom-full mb-1 max-h-60 
            w-full overflow-auto rounded-xl bg-primary py-1 text-white 
            shadow-2xl ring-1 ring-black 
            ring-opacity-5 focus:outline-none mb-[-90px] z-50"
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-1 pl-10 pr-4 ${
                    active ? "bg-accent text-primary" : "text-gray-300"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {option.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default function StepTrainig() {
  // États individuels pour chaque liste
  const [selectedNiveau, setSelectedNiveau] = useState(null);
  const [selectedObjectif, setSelectedObjectif] = useState(null);
  const [selectedVacation, setSelectedVacation] = useState(null);
  const [selectedTimeEmploy, setSelectedTimeEmploy] = useState(null);

  return (
        <div className="flex justify-center items-center p-4 bg-primary 
          px-4 rounded-xl">
          <div className="flex flex-col md:flex-row bg-[#27272c] rounded-xl 
            overflow-hidden shadow-lg w-full max-w-3xl">
            {/* Section Explication */}
            <div className="p-8 bg-gradient-to-b from-orange-700 
              via-orange-600 to-accent flex-1 relative rounded-xl">
              <h3 className="text-black font-bold text-xl xl:text-2xl
                text-center xl:text-left"
              >
                Vous évoluez bien !</h3>
              {/* Main animée centrée sous la description */}
              <motion.div
                className="mt-4 w-30 h-30 flex justify-center xl:justify-start"
                animate={{ rotate: [1, 1.7, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2, 
                  ease: "easeInOut" 
                }}
              >
               <img
                 src="/assests/offers/formations/icons/smiling-halo.svg"
                 alt="Hand Waving"
                 className="w-16 h-16 animate-wave"
               />
              </motion.div>
              
              <p className="text-black text-sm mt-4 xl:text-justify 
              text-center"
              >
                Nous avons maintenant besoin de savoir ce que vous savez faire
                en PowerPoint, pour quelles fins vous aimeriez apprendre ou 
                approfondir vos compétences en PowerPoint et cela de quelle 
                manière (en ligne ou en Présentiel). Dites-nous aussi quand 
                est-ce que vous aimeriez Que ça se passe ?
              </p>
            </div>
    
            {/* Section Formulaire */}
            <div className="p-6 flex-1">
              <h2 className="text-white text-2xl font-bold mb-6 text-center xl:text-left">
                Informations Utiles
              </h2>
              <form className="space-y-4">
                {/* Niveau de conaissance */}
                <CustomListBox
                  label="Niveau de connaissance *"
                  options={optionsList.niveauConnaissance}
                  selected={selectedNiveau}
                  setSelected={setSelectedNiveau}
                  required
                />
                <CustomListBox
                  label="Votre objectif *"
                  options={optionsList.objectif}
                  selected={selectedObjectif}
                  setSelected={setSelectedObjectif}
                  required
                />
                <CustomListBox
                  label="Vacation"
                  options={optionsList.vacation}
                  selected={selectedVacation}
                  setSelected={setSelectedVacation}
                />
                <CustomListBox
                  label="Emploi du temps"
                  options={optionsList.timeEmploy}
                  selected={selectedTimeEmploy}
                  setSelected={setSelectedTimeEmploy}
                />
              </form>
            </div>
          </div>
        </div>

  );
}
