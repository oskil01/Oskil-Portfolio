import { Textarea } from "@headlessui/react";
import { motion } from "framer-motion";

export default function StepSubmit() {
  return (
    <div className="flex justify-center items-center p-4 bg-primary 
    px-4 rounded-xl">
    <div className="flex flex-col md:flex-row bg-[#27272c] rounded-xl 
      overflow-hidden shadow-lg w-full max-w-3xl">
      {/* Section Explication */}
      <div className="p-8 bg-gradient-to-b from-orange-700 
        via-orange-600 to-accent flex-1 relative rounded-xl">
        <h3 className="text-black font-bold text-xl xl:text-2xl">
          C'est la fin !
        </h3>
        <motion.div
          className="mt-4 w-30 h-30"
          animate={{ rotate: [1, 1.7, 1] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.2, 
            ease: "easeInOut" 
          }}
          >
            <img
              src="/assests/offers/formations/icons/success-achievement.svg"
              alt="Success Achievement"
              className="w-16 h-16 animate-wave"
            />
        </motion.div>
        
        <p className="text-black text-sm mt-4 text-justify">
          Avant de soumettre le formulaire, nous vous demandons de bien vouloir
          vérifiez si vos informations ne sont pas erronnées. Si tout est Ok, cliquez 
          sur <strong>"Soumettre"</strong> pour terminer. 
        </p>
      </div>

      {/* Section Formulaire */}
      <div className="p-6 flex-1">
        <h2 className="text-white text-2xl font-bold mb-6">
          Optionnel
        </h2>
        <form className="space-y-4">
          <p className="text-gray-400 text-sm">
            Avez-vous une question ou une préoccupation ? 
            Merci de nous en Formulaire part et nous vous répondrons.
          </p>
          <Textarea
            type="text"
            placeholder="Notez ici..."
            className="w-full p-3 px-5 bg-primary text-white/80 
            focus:outline-none rounded-xl h-40"
          />
        </form>
      </div>
    </div>
  </div>
  );
}
