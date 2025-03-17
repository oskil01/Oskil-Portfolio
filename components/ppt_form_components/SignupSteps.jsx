"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  RemoveFormattingIcon 
} from "lucide-react";
import StepIntro from "./StepIntro";
import StepPersonal from "./StepPersonal";
import StepAcademic from "./StepAcademic";
import StepTraining from "./StepTraining";
import StepAdditional from "./StepAdditional";
import StepSubmit from "./StepSubmit";

const steps = [
  { component: StepIntro, label: "Présentation" },
  { component: StepPersonal, label: "Infos Personnelles" },
  { component: StepAcademic, label: "Infos Académiques" },
  { component: StepTraining, label: "Détails Formation" },
  { component: StepAdditional, label: "Infos Supplémentaires" },
  { component: StepSubmit, label: "Soumission" },
];

export default function SignupSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const StepComponent = steps[currentStep].component;

  return (
    // boite d'appel à l'action
    <div className="h-full flex items-center justify-center">
      <div className="min-h-[50vh] max-w-5xl bg-[#27272c] p-6 shadow-lg rounded-xl">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <StepComponent />
        </motion.div>

        {/* boutons de navigation */}
        <div className="flex justify-between mt-6">

          {/* Bouton arrière */}
          {currentStep > 0 && (
            <button 
              className="flex items-center px-4 py-2 bg-primary rounded-xl 
              hover:bg-primary hover:text-accent border-2 border-white/15"
              onClick={prevStep}
            >
              <ChevronLeft className="mr-2" /> Précédent
            </button>
          )}

          {/* bouton suivant */}
          {currentStep < steps.length - 1 ? (
            <button 
              className="flex items-center px-4 py-2 bg-[#27272c] text-accent
              rounded-xl hover:bg-accent hover:text-primary ml-auto border-2 border-accent"
              onClick={nextStep}
            >
              Suivant <ChevronRight className="ml-2" />
            </button>
          ) : (
            <button className="px-4 py-2 bg-green-600 text-white rounded 
             hover:bg-green-700 ml-auto rounded-xl ml-auto">
             Soumettre
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
