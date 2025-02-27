"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/ui/button";
import { ScrollArea } from "@/components/ui/ui/scroll-area";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

// Testimony infos
const testimony = [
  {
    id: 1,
    comment: "Ce service est incroyable ! J'ai pu atteindre mes objectifs grâce à leur expertise.",
    user: "Alice Dupont",
    photo: "/assests/user_w.jpg", // Assurez-vous que cette image existe dans le dossier public
    status: "PDG-Ubuntu Sarl",
    date: "2023-11-01",
    social: {
      facebook: "",
      twitter: "https://twitter.com/alicedupont",
      linkedin: "https://linkedin.com/in/alicedupont",
      github: "https://github.com/alicedupont",
    }
  },
  {
    id: 2,
    comment: "Un accompagnement professionnel et efficace. Je recommande vivement !",
    user: "Bob Martin",
    photo: "/assests/user_m.jpg",
    status: "Partenaire-IBI Group",
    date: "2023-10-15",
    social: {
      facebook: "",
      twitter: "https://twitter.com/bobmartin",
      linkedin: "https://linkedin.com/in/bobmartin",
      github: "https://github.com/bobmartin"
    }
  },
  {
    id: 3,
    comment: "Un accompagnement professionnel et efficace. Je recommande vivement !",
    user: "John Doe",
    photo: "/assests/user_m.jpg",
    status: "Client Satisfait",
    date: "2023-10-15",
    social: {
      facebook: "",
      twitter: "https://twitter.com/bobmartin",
      linkedin: "https://linkedin.com/in/bobmartin",
      github: "https://github.com/bobmartin"
    }
  },
  {
    id: 4,
    comment: "Un accompagnement professionnel et efficace. Je recommande vivement !",
    user: "Sarah Lay",
    photo: "/assests/user_w.jpg",
    status: "DG-Ubuntu Sarl",
    date: "2023-10-15",
    social: {
      facebook: "",
      twitter: "https://twitter.com/bobmartin",
      linkedin: "https://linkedin.com/in/bobmartin",
      github: "https://github.com/bobmartin"
    }
  },

]

const HireMe = () => {
  // State pour gérer l'affichage complet ou partiel des témoignages
  const [showAll, setShowAll] = useState(false);

// Affiche uniquement les 2 premiers témoignages si showAll est false, sinon tous
const displayedTestimony = showAll ? testimony : testimony.slice(0, 2);

  // téléchargement cv
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assests/Oskil_CV.pdf";
    link.download = "Mon_CV.pdf"; // Nom du fichier
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  {/** ====================================================== */}
  return (
    <div className="min-h-screen bg-primary text-white/85">
      {/* Header */}
      <header className="bg-[#232329] shadow py-4 gap-[30px]">
        <div className="container mx-auto px-4 order-1 xl:order-0">
          <h1 className="text-2xl xl:text-4xl font-bold text-center 
            text-accent py-4">
          Travaillons ensemble
          </h1>
          <p className="text-base mb-5 text-white/80 text-center">
            Disponible pour des nouvelles opportunités et collaborations, 
            découvrez comment je peux apporter de la valeur à vos projets.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section id="intro" className="text-center mb-12">
          <div id="about" className="mt-10 flex flex-col md:flex-row 
            items-center">
            {/*titre et description*/}
            <div className="flex-1">
               <h2 className="xl:text-[35px] text-3xl font-extrabold mb-4 text-white text-center 
                 xl:text-left">Pourquoi me joindre ?</h2>
               <p className="text-white/70 mb-6 mt-8 text-center xl:text-left">
                  Travailler avec moi, c'est choisir un partenariat axé sur l'excellence et l'innovation.
                  Fort d'une solide expérience dans le domaine digital, je transforme vos idées en projets concrets 
                  et performants. Mon approche personnalisée, associée à une écoute active et à une créativité débordante,
                  vous garantit des solutions sur-mesure et un accompagnement de qualité. Découvrez ci-dessous les 
                  atouts qui font de notre collaboration une véritable valeur ajoutée pour la réussite de vos projets.
               </p>
            {/* Tableau en deux colonnes listant les avantages */}
            <div className="grid grid-cols text-left grid-cols-2 ">
              <ul className="pl-8 list-none">
                <li>→ Créativité</li>
                <li>→ Innovation</li>
                <li>→ Flexibilité</li>
              </ul>
              <ul className="pl-0 list-none">
                <li>→ Expertise technique</li>
                <li>→ Professionnalisme</li>
                <li>→ Réactivité</li>
              </ul>
            </div>
          </div>
          {/* image de profil animée */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center 
            order-1 order:xl-0">
            <motion.img
               src="/assests/design.png" 
               alt="Profil"
               className="shadow-lg max-w-sm xl:max-w-xl mt-[-70px] xl:mt-[-125px]"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
            />
          </div>
          </div>
        </section>

        {/* CV */}
        <section id="resume" className="mb-12 text-center bg-[#232329] 
          py-10 rounded-xl">
          <div className="flex flex-col xl:flex-row items-center 
             justify-center gap-6 xl:gap-8"
          >
            <Button 
              onClick={handleDownload}  
              variant="ghost"
              size="lg"
              className="uppercase flex items-center gap-2 border 
              border-accent text-accent rounded-full px-6 py-3 
              hover:bg-accent hover:text-primary transition-all 
              duration-300"
            >
              <span>Téléchargez mon CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <Link href="/contact">
              <Button 
                variant="ghost"
                size="lg"
                className="uppercase flex items-center gap-2 border 
                border-accent text-accent rounded-full px-6 py-3 
                hover:bg-accent hover:text-primary transition-all 
                duration-300"
              >Me contacter
              </Button>
            </Link>
          </div>
        </section>

        {/* Témoignages */}
        {/* <section> */}
          {/* <div className="container mx-auto px-4 bg-primary"> */}
            {/* Titre et sous-titre */}
            {/* <h2 className="text-3xl font-bold text-center py-4 text-white/90 mb-2">
              Ce que disent mes clients
            </h2>
            <p className="text-lg text-center text-white/60 mb-8">
               Découvrez ce que mes clients satisfaits disent de moi.
            </p> */}

           {/* Grille des témoignages : 1 colonne sur mobile, 2 colonnes sur écrans md et plus */}
           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {displayedTestimony.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#232329] p-12 rounded-xl 
              shadow ">
              {/* Infos utilisateur */}
              {/* <div className="flex items-center mb-4">
                <Image
                  width={80}
                  height={80}
                  src={testimonial.photo}
                  alt={testimonial.user}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-white/80">{testimonial.user}</p>
                  <p className="text-sm text-white/40">{testimonial.status}</p>
                </div>
              </div> */}
              {/* Commentaire avec guillemets */}
              {/* <div>
                <blockquote className="text-white/80 text-xl py-4 text-extrabold italic mb-4">
                  “{testimonial.comment}”
                </blockquote>
              </div> */}
              
              {/* Liens sociaux et date */}
              {/* <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                <a
                    href={testimonial.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent text-xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={testimonial.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent text-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={testimonial.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent text-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={testimonial.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent text-xl"
                  >
                    <FaGithub />
                  </a>
                  </div>
                    <p className="text-sm text-white/60">
                     {new Date(testimonial.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))} */}
            {/* </div> */}
            {/* Bouton "Afficher plus" */}
            {/* {testimony.length > 2 && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 border border-accent text-accent 
                  rounded-full hover:bg-accent hover:text-primary 
                  transition-colors mb-8 duration-300"
                >
                  {showAll ? 'Afficher moins' : 'Afficher plus'}
                </button>
              </div>
            )}
          </div>
        // </section> */}

        {/* Tarifs et modalités */}
        <section id="pricing" className="text-center xl:text-left">
          {/* titre et description */}
          <div>
            <h2 className="py-10 text-2xl xl:text-3xl font-bold text-2xl text-center">
              Modalités de Paiement</h2>
            <p className="text-white/60 mb-6 text-center xl:w-[75%] xl:ms-[150px]">
              Pour chaque projet, j'établis un devis personnalisé en 
              fonction de vos besoins spécifiques. Selon votre budget du projet, 
              je peux proposer des facilités de paiement en plusieurs fois. N'hésitez pas à me 
              contacter pour discuter de votre projet et obtenir une 
              proposition adaptée.
            </p>
            <div className='gap-8 bg-black/10 border border-white/20 p-8 rounded-xl'>
              <h4 className='text-xl py-3 text-center'>Facilités de paiement</h4>
              <div className='flex flex-col md:flex-row md:flex-wrap 
                md:justify-center py-8'>
                {/* Etape 1 */}
                <div className='flex gap-8 items-center m-4'>
                  <div>
                    <h5 className='bg-white/5 p-8 rounded-xl text-2xl
                     text-accent'>30%</h5>
                  </div>
                  <div className='text-left'>
                    <h5 className='text-white/50'>Etape 1</h5>
                    <p className='text-white/80'>Acompte au lancement du projet.</p>
                  </div>
                </div>
                {/* Etape 2 */}
                <div className='flex gap-8 items-center m-4'>
                  <div>
                    <h5 className='bg-white/5 p-8 rounded-xl text-2xl 
                    text-accent'>40%</h5>
                  </div>
                  <div className='text-left'>
                    <h5 className='text-white/50'>Etape 2</h5>
                    <p className='text-white/80'>Deuxième paiement à mi-parcours.</p>
                  </div>
                </div>
                {/* Etape 3 */}
                <div className='flex gap-8 items-center m-4'>
                  <div>
                    <h5 className='bg-white/5 p-8 rounded-xl text-2xl 
                    text-accent'>30%</h5>
                  </div>
                  <div className='text-left'>
                    <h5 className='text-white/50'>Etape 3</h5>
                    <p className='text-white/80'>Solde final à la livraison du projet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications et Récompenses
        <section id="credentials" className="mb-12 text-center xl:text-right">
          <h2 className="text-2xl font-bold mb-4">Certifications & Récompenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Certification A</h3>
              <p className="text-gray-600">Certification en Développement Web</p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Récompense B</h3>
              <p className="text-gray-600">Prix du meilleur projet digital</p>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Certification C</h3>
              <p className="text-gray-600">Certification UX/UI</p>
            </div>
          </div>
        </section> */}
      </main>
      {/* Footer */}
      <footer className="py-4 shadow text-center">
        <p className="text-gray-600">© 2025 Oskil. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HireMe;
