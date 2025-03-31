"use client";
import { motion } from "framer-motion";

export default function StepPersonal() {
  return (
    <div className="flex justify-center items-center p-4 bg-primary px-4 
    rounded-xl">
      <div className="flex flex-col md:flex-row bg-[#27272c] rounded-xl 
      overflow-hidden shadow-lg w-full max-w-3xl ">
        {/* Section Explication */}
        <div className="p-8 bg-gradient-to-b 
          from-orange-700 via-orange-600 to-accent flex-1 relative rounded-xl
          text-center xl:text-left"
        >
          <h3 className="text-black font-bold text-lg">Bonjour ami(e) !</h3>
          {/* Main animée centrée sous la description */}
          <motion.div
            className="mt-4 flex justify-center xl:justify-start"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
           <img
             src="/assests/offers/formations/icons/waving-hand.svg"
             alt="Hand Waving"
             className="w-16 h-16 animate-wave text-center"
           />
          </motion.div>
          
          <p className="text-black text-sm mt-2 text-center xl:text-justify">
            Nous sommes heureux que vous ayez pris la décision de participer à cette formation. Nous allons dans un premier temps vous demander vos informations personnelles.
            Ces informations seront utilisées lors de votre enregistrement dans notre
            base de données en tant qu'apprenant et resteront confidentielles, ne vous en
            faites pas.
          </p>
        </div>

        {/* Section Formulaire */}
        <div className="p-6 flex-1">
          <h2 className="text-white text-2xl font-bold mb-4 text-center xl:text-left">
            Informations Personnelles
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet *"
              className="w-full p-3 px-5 bg-primary text-white rounded-md 
              focus:outline-none rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Adresse mail *"
              className="w-full p-3 px-5 bg-primary text-white rounded-md 
              focus:outline-none rounded-xl"
              required
            />
            <input
              type="tel"
              placeholder="Téléphone *"
              className="w-full p-3 px-5 bg-primary text-white rounded-md 
              focus:outline-none rounded-xl"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
}