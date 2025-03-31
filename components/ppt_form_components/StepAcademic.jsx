"use client";
import { motion } from "framer-motion";
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// Sélécteur niveau academique
const options = [
  { id: "default", name: "Niveau d'étude", disabled: true }, // Option par défaut
  { id: 'bac', name: 'Baccalauréat' },
  { id: 'grade', name: 'Grade' },
  { id: 'licence', name: 'Licence' },
  { id: 'master', name: 'Master' },
  { id: 'doctorat', name: 'Doctorat' },
];

export default function StepAcademic() {
  const [selected, setSelected] = useState(null);
  return (
        <div className="flex justify-center items-center p-4 bg-primary 
          px-4 rounded-xl">
          <div className="flex flex-col md:flex-row bg-[#27272c] rounded-xl 
            overflow-hidden shadow-lg w-full max-w-3xl">
            {/* Section Explication */}
            <div className="p-8 bg-gradient-to-b from-orange-700 
              via-orange-600 to-accent flex-1 relative rounded-xl">
              <h3 className="text-black font-bold text-xl xl:text-2xl text-center
              xl:text-left"
              >
                Bien joué !
              </h3>
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
                 src="/assests/offers/formations/icons/ok-hand.svg"
                 alt="Hand Waving"
                 className="w-16 h-16 animate-wave"
               />
              </motion.div>
              
              <p className="text-black text-sm mt-4 text-center xl:text-justify">
                Nous allons dans un second lieu nous renseigner sur ce que vous
                faites dans la vie. Ces informations nous serviront d'étude lors de 
                nos prochaines investigations afin de vous proposer ce qui correspond
                le mieux à votre caquette professionnelle et votre domaine d'étude. Mais ce 
                n'est pas obligatoire de nous les partager.
              </p>
            </div>
    
            {/* Section Formulaire */}
            <div className="p-6 flex-1">
              <h2 className="text-white text-2xl font-bold mb-6 text-center xl:text-left">
                Informations Professionnelles
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Profession"
                  className="w-full p-3 px-5 bg-primary text-white rounded-md 
                  focus:outline-none rounded-xl"
                />

                {/* Séléctionnez une option */}
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative">
                    {/* button pour ouvrir les options */}
                    <Listbox.Button className="relative w-full cursor-default 
                     rounded-xl bg-primary py-3 pl-5 pr-10 text-left text-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <span className={`block truncate 
                        ${!selected ? "text-gray-400" : "text-white"}`}
                      >
                        {!selected ? "Niveau d'étude" : selected.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 
                        right-0 flex items-center pr-2 text-orange-500"
                      >
                        <ChevronUpDownIcon 
                          className="h-5 w-5" 
                          aria-hidden="true" 
                        />
                      </span>
                    </Listbox.Button>

                    {/* liste d'options */}
                    <Listbox.Options className="absolute mt-1 max-h-50 w-full 
                      overflow-auto rounded-xl bg-primary border-2 border-white/20 
                      py-1 text-white shadow-xl ring-1 ring-black ring-opacity-5 
                      focus:outline-none bottom-full mb-[-170px]"
                    >
                      {options.map((option) => (
                       <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                          `relative cursor-default select-none py-1 pl-10 pr-4 ${
                          active ? 'bg-accent text-black' : 'text-white'
                          }`
                        }
                        value={option}
                        >
                          {({ selected }) => (
                        <>
                          <span className={`block truncate 
                            ${selected ? 'font-medium' : 'font-normal'}`}
                          >
                            {option.name}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex 
                             items-center pl-3 text-orange-500"
                            >
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

                <input
                  type="text"
                  placeholder="Domaine d'étude"
                  className="w-full p-3 px-5 bg-primary text-white rounded-md 
                  focus:outline-none rounded-xl"
                />
              </form>
            </div>
          </div>
        </div>

  );
}
