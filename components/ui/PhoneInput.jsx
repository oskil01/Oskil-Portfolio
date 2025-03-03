"use client"; // Pour Next.js avec App Router

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Flag from "react-world-flags"; // Importation de la bibliothèque de drapeaux

// pays éligibles à mes services  
const countryCodes = [
    { code: "ZA", dialCode: "+27", name: "Afrique du Sud" },
    { code: "BE", dialCode: "+32", name: "Belgique" },
    { code: "BJ", dialCode: "+229", name: "Bénin" },
    { code: "BI", dialCode: "+257", name: "Burundi" },
    { code: "CA", dialCode: "+1", name: "Canada" },
    { code: "CM", dialCode: "+237", name: "Cameroun" },
    { code: "CG", dialCode: "+242", name: "Congo-Brazzaville" },
    { code: "CI", dialCode: "+225", name: "Côte d'Ivoire" },
    { code: "FR", dialCode: "+33", name: "France" },
    { code: "GA", dialCode: "+241", name: "Gabon" },
    { code: "GH", dialCode: "+233", name: "Ghana" },
    { code: "KE", dialCode: "+254", name: "Kenya" },
    { code: "MG", dialCode: "+261", name: "Madagascar" },
    { code: "ML", dialCode: "+223", name: "Mali" },
    { code: "NG", dialCode: "+234", name: "Nigeria" },
    { code: "UG", dialCode: "+256", name: "Ouganda" },
    { code: "CD", dialCode: "+243", name: "République Démocratique du Congo" },
    { code: "SN", dialCode: "+221", name: "Sénégal" },
    { code: "CH", dialCode: "+41", name: "Suisse" },
    { code: "TZ", dialCode: "+255", name: "Tanzanie" },
    { code: "TG", dialCode: "+228", name: "Togo" },
    { code: "US", dialCode: "+1", name: "USA" },
  ];  

const PhoneInput = () => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]); // Par défaut : RDC
  const [phone, setPhone] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectCode = (country) => {
    setSelectedCode(country);
    setDropdownOpen(false); // Fermer la liste après sélection
  };

  return (
    <div className="relative w-full">
      {/* Input Principal */}
      <div className="flex items-center border border-white/15 rounded-full
       p-3 bg-primary px-4 text-white/70 text-sm relative">
        {/* Bouton pour afficher les indicatifs */}
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center text-white/80 gap-1"
        >
          <Flag code={selectedCode.code} alt={selectedCode.name} className="w-6 h-6" /> {/* Drapeau */}
          <ChevronDown
            size={18}
            className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Séparateur */}
        <span className="mx-1 text-gray-400">|</span>

        {/* Champ pour le numéro de téléphone */}
        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={(e) => {
            const value = e.target.value.replace(/^0+/, ""); // Supprime le zéro initial
            if (/^\d{0,9}$/.test(value)) setPhone(value); // Limite à 9 chiffres
          }}
          placeholder="Numéro de téléphone"
          className="bg-transparent flex-1 focus:outline-none text-white/80 pl-2"
          maxLength="9"
          required
        />
      </div>

      {/* Liste des indicatifs (Dropdown) */}
      {dropdownOpen && (
        <div className="absolute left-0 top-full mt-1 w-full bg-primary 
          text-white border border-white/15 rounded-xl shadow-md z-10 
          max-h-52 overflow-y-auto text-sm text-gray-400 
          scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent 
          hover:scrollbar-thumb-gray-500"
        >
          {countryCodes.map((country) => (
            <div
              key={country.code}
              className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-primary 
              flex items-center gap-2 text-gray-400"
              onClick={() => handleSelectCode(country)}
            >
              <Flag code={country.code} alt={country.name} className="w-5 h-5" /> {/* Drapeau */}
              <span>{country.dialCode}</span> {/* Indicatif */}
              <span>{country.name}</span> {/* Nom du pays */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
