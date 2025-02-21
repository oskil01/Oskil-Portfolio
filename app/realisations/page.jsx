"use client"

import {motion } from "framer-motion";
import React, { useState } from "react";

// Components
import { Swiper, SwiperSlide, swiperInstance } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ui/tooltip"

import Link from "next/link"
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// données des projets
const projets = [
  {
    num: '01',
    catégory: 'full-stack',
    title: 'projet 1',
    description: `Afin d’étendre l’accès à mes services et mettre en 
    avant mes compétences, j’ai développé mon propre portfolio en 
    utilisant Next.js, Tailwind CSS et Node.js. Ce projet m’a permis 
    d’explorer et d’intégrer des technologies modernes pour offrir une 
    expérience utilisateur fluide et optimisée.`,
    stack: [
      { name: "Next.js"}, 
      { name: "Tailwind.css"}, 
      { name: "Node.js"}],
    image: '/assests/realisations/R-1.jpg',
    live:'',
    github: ''
  },
  {
    num: '02',
    catégory: 'UI/UX Design',
    title: 'projet 2',
    description: `Développé par Pyramide Digital Solutions, le 
    projet de création du design UI/UX de l'application AlmaPay
    m'a permis de découvrir beaucoup de choses sur le plan technique 
    avec Figma et ce fut un défis majeur dont j'en suis tellement
    fière de relever car mo client a été largement satisfait.`,
    stack: [{ name: "Figma"}],
    image: '/assests/realisations/R-2.jpg',
    live:'',
    github: ''
  },
  {
    num: '03',
    catégory: 'UI/UX Design',
    title: 'projet 3',
    description: `Conçu globalement avec Figma et un peu du Sketch, 
    ce projet  m'a permis de murir mon expertise dans le domaine de 
    l'érgonomie, de création visuelle, de navigation intuitive et
    de gestion d'éfficacité visuelle pour créer un interface administrateur/
    utilisateur fluide et impeccable du logiciel e-tax.`,
    stack: [{ name: "Figma"}, { name: "Sketch"}],
    image: '/assests/realisations/R-3.jpg',
    live:'',
    github: ''
  },
  {
    num: '04',
    catégory: 'Full-Stack',
    title: 'projet 4',
    description: `J’ai développé une plateforme de formation en ligne 
    avec Next.js, Tailwind CSS, Node.js et MongoDB, offrant des cours en texte, 
    vidéo et PDF. Le site intègre un système d’abonnement, une interface 
    moderne et animée grâce à ShadCN et Framer Motion. J’ai relevé le 
    défi d’apprendre ces nouvelles technologies en m’appuyant sur des 
    ressources en ligne. `,
    stack: [{ name: "Next.js"}, { name: "Tailwind.css"},
      { name: "Node.js"}, { name: "MongoDB"}],
    image: '/assests/realisations/R-4.jpg',
    live:'',
    github: ''
  },
  {
    num: '05',
    catégory: 'Fronted-End',
    title: 'projet 5',
    description: `J’ai développé l’interface d’une plateforme de formation 
    en ligne avec Next.js, Tailwind CSS et ShadCN, en mettant l’accent 
    sur l’ergonomie et la fluidité. L’intégration de Framer Motion a 
    permis d’optimiser l’expérience utilisateur avec des animations 
    dynamiques. Ce projet a renforcé mon expertise en développement 
    frontend et conception UI/UX.`,
    stack: [{ name: "Next.js"}, { name: "Tailwind.css"}, { name: "ShadCN"}],
    image: '/assests/realisations/R-5.jpg',
    live:'',
    github: ''
  },
  {
    num: '06',
    catégory: 'UI/UX Design',
    title: 'projet 6',
    description: `Grâce à Figma, j’ai conçu le UI/UX design de cette 
    plateforme de formation en ligne, en mettant l’accent sur 
    l’accessibilité, la clarté et l’engagement utilisateur. J’ai créé une interface 
    intuitive avec une navigation fluide et des interactions optimisées. 
    Ce projet m’a permis d’affiner mes compétences en design d’expérience
    et prototypage interactif.`,
    stack: [{ name: "Figma"}],
    image: '/assests/realisations/R-6.jpg',
    live:'',
    github: ''
  },
  {
    num: '07',
    catégory: 'UI/UX Design',
    title: 'projet 7',
    description: `Dans ce projet de tracking et services multisectoriels,
    j’ai conçu une interface intuitive en utilisant Sketch pour structurer 
    une expérience fluide et ergonomique. J'ai mis l'accent sur une 
    visualisation claire des données en temps réel et une navigation 
    optimisée. Ce travail m’a permis de me perfectionner plus en 
    design interactif et accessibilité utilisateur.`,
    stack: [{ name: "Sketch"}],
    image: '/assests/realisations/R-7.jpg',
    live:'',
    github: ''
  },
  {
    num: '08',
    catégory: 'FrontEnd',
    title: 'projet 8',
    description: `Pour cette landing page, j’ai conçu à la 
    fois le UI/UX design et développé l’interface. L’objectif était d’offrir une expérience fluide 
    et optimisée avec une hiérarchie visuelle claire et des appels à 
    l’action efficaces. Ce projet m’a permis de maîtriser l’intégration 
    d’un design impactant avec un code performant.`,
    stack: [{ name: "HTML 5"}, { name: "CCS 3"}, { name: "JavaScript"}],
    image: '/assests/realisations/R-8.jpg',
    live:'',
    github: ''
  },
  {
    num: '09',
    catégory: 'UI/UX Design',
    title: 'projet 9',
    description: `Pour ce projet, j’ai utilisé Figma pour créer une interface 
    moderne, professionnelle et intuitive. L’accent a été mis sur une 
    expérience utilisateur fluide, avec une navigation optimisée et une 
    identité visuelle cohérente. Ce projet m’a permis d’approfondir mes 
    compétences en design corporate et ergonomie digitale.`,
    stack: [{ name: "Figma"}],
    image: '/assests/realisations/R-9.jpg',
    live:'',
    github: ''
  },
  {
    num: '10',
    catégory: 'Motion Design',
    title: 'projet 10',
    description: `J'ai conçu le design UI/UX d’une application mobile 
    de formation en ligne avec une interface intuitive et accessible. 
    L’objectif était d’optimiser l’expérience 
    utilisateur avec une navigation fluide, une organisation claire des 
    cours et un design responsive. Ce projet m’a permis d'acquérir 
    des compétences en conception mobile et expérience utilisateur (UX).`,
    stack: [{ name: "Sketch"}],
    image: '/assests/realisations/R-10.jpg',
    live:'',
    github: ''
  },
  {
    num: '11',
    catégory: 'Logos',
    title: 'projet 11',
    description: `J’ai réalisé de nombreux logos avec Adobe Illustrator, 
    en combinant créativité et identité visuelle adaptée à chaque projet.
    Chaque design a été conçu pour être unique, mémorable et fonctionnel
    sur différents supports. Ce travail m’a permis de perfectionner 
    mes compétences en branding et conception graphique.`,
    stack: [{ name: "Adobe Illustrator"}],
    image: '/assests/realisations/R-11.jpg',
    live:'',
    github: ''
  },
  {
    num: '12',
    catégory: 'Affiches & Flyers',
    title: 'projet 12',
    description: `J’ai conçu plusieurs affiches et flyers en alliant 
    impact visuel et clarté du message. Chaque création a été pensée 
    pour capter l’attention tout en respectant l’identité graphique du 
    projet. Ce travail m’a permis de renforcer mes compétences en mise 
    en page, typographie et communication visuelle.`,
    stack: [{ name: "Adobe Photoshop"}, { name: "Adobe Lightroom"}],
    image: '/assests/realisations/R-12.jpg',
    live:'',
    github: ''
  },
  {
    num: 'Fin !',
    catégory: 'en cours...',
    title: 'projet non disponible',
    description: `Vous avez atteint la fin de la liste ! Les futurs projets 
    en cours de réalisation seront mis à jour et partagés via ce numéro. 
    N’hésitez pas à revenir plus tard pour en découvrir davantage.
    Merci de votre attention ! `,
    stack: [{ name: "Non disponible ! "}],
    image: '/assests/realisations/R-13.jpg',
    live:'',
    github: ''
  },
]

const Realisations = () => {
    const [projet, setProjet] = useState(projets[0])

    const handleSlideChange = (swiper) => {
      // slide actif ou courrant
      const currentIndex = swiper.activeIndex;
      // mise à jour de l'état du projet en se basant sur le slide actif
      setProjet(projets[currentIndex])
    }
    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      > 
        {/** contenu de la section */}
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/** texte */}
            <div className="w-full xl:w-[50%] flex flex-col gap-[20px] 
              h-[50%] xl:h-[450px] xl:justify-between order-2 xl:order-none">
              {/** numéro du projet */}
              <div className="text-8xl leading-none font-extrabold 
                text-transparent text-outline">
                {projet.num}
              </div>

              {/* titre du projet */}
              <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500 capitalize"
              >
                projet {projet.catégory}
              </h2>

              {/** description du projet */}
              <p className="text-white/70">{projet.description}</p>

              {/** affichage du conteenu stack */}
              <ul className="flex gap-4">
                {projet.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/** suppression de la dernière virgule dans le stack */}
                      {index !== projet.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/** Souligné */}
              <div className="border border-white/20"></div>
              {/** boutons en icones */}
              <div className="flex items-center gap-4">
                {/** bouton live */}
                <Link href={projet.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full
                        bg-white/5 flex justify-center items-center group
                        "
                      >
                        <BsArrowUpRight className="text-white text-2xl 
                          group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projet en direct</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                
                {/** bouton github */}
                <Link href={projet.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full
                        bg-white/5 flex justify-center items-center group
                        "
                      >
                        <BsGithub className="text-white text-2xl 
                          group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Dépôt GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            {/** Slides */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[460px] mb-12 rounded-xl"
                onSlideChange={handleSlideChange}
              >
                {projets.map((projet, index) => {
                  {/** slide box */}
                  return ( 
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[410px] relative group flex 
                        justify-center items-center bg-pink-50/20">
                        {/** superposition */}
                        <div className="absolute top-0 bottom-0 w-full
                         bg-black/10 z-10"></div>
                        {/** image */}
                        <div className="relative w-full h-full">
                          <Image 
                            src={projet.image} fill 
                            className="object-cover" alt=''
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                {/** boutons de navigation slides */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-100 xl:right[-30px] 
                  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                  justify-between xl:w-max xl:justify-left"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary
                  text-[22px] w-[34px] h-[34px] flex justify-center items-center
                  transition-all shadow-xl xl:shadow-none"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    )
}

export default Realisations
