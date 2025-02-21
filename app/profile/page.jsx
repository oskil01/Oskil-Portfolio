"use client"

// Components
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// import des icones
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact,
  FaVuejs,
  FaPython,
  FaPhp,
  FaFigma, 
  FaBootstrap,
  FaChartBar
} from "react-icons/fa";

import { 
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiSketch, 
  SiOpenai, 
  SiDavinciresolve,
  SiMongodb
} from "react-icons/si";

// Données A propos
const about = {
  title: 'Présentation',
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Junior Johnson"
    },
    {
      fieldName: "Expérience",
      fieldValue: "5 ans"
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Congolaise (RDC)"
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais, Lingala, Swahili"
    },
    {
      fieldName: "E-mail",
      fieldValue: "oskill@outlook.fr"
    },
    {
      fieldName: "Téléphone",
      fieldValue: "(+243) 820 838 387"
    },
    {
      fieldName: "Adresse",
      fieldValue: "Kalemie, RD Congo"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible"
    },
  ],
  title1: "Qui suis-je ?",
  description1: `Passionné par le développement web et la création digitale,
  je suis un Freelance curieux et créatif, toujours en quête de nouvelles 
  connaissances et d'innovations. Mon parcours m'a permis d'acquérir des 
  compétences en React, NextJs, Figma, Tailwind,... que j'utilise 
  pour concevoir des solutions performantes et intuitives.
  
  Au fil du temps, j’ai travaillé sur divers projets allant de sites 
  vitrines aux sites dynamiques avec base de données pour une gestion 
  administrative fluide, des plateformes e-commerce, portfolios, des 
  maquettes UI/UX, voir plus, ce qui m’a permis de développer un sens aigu 
  du détail et une approche méthodique du travail.

  Ma mission ? Créer des expériences numériques uniques, alliant design 
  élégant et performance technique. Ouvert aux collaborations et aux défis, 
  je suis toujours prêt à explorer de nouvelles opportunités pour apprendre
  et évoluer.`,
  title2: "A propos d'Oskil",
  subtitle2: "Qui est Oskil ?",
  description2: `OSKIL (All Skills [Olskillz => Oskil]) n’est pas un 
  simple pseudonyme, c’est une identité 
  digitale, une signature unique qui incarne ma vision et mon expertise 
  dans la création numérique. À travers OSKIL, je fusionne innovation, 
  design et développement web pour offrir des expériences digitales 
  percutantes et modernes. 

  Véritable artisan du numérique, OSKIL représente mon engagement à 
  concevoir des solutions sur-mesure, qu’il s’agisse de sites web 
  interactifs, identités visuelles, ou expériences utilisateur immersives. 
  Derrière ce personnage, se cache une passion profonde pour la technologie, 
  l’art digital et la transformation digitale des entreprises et créateurs 
  de contenu.`,
  subtitle3: "Pourquoi Oskil ?",
  decription3: `OSKIL est plus qu’un simple nom, c’est une marque de 
  créativité et de professionnalisme. Il me permet d’exprimer pleinement 
  mon savoir-faire en gardant une identité cohérente et mémorable dans 
  l’univers du digital.
  Que vous soyez une entreprise, un entrepreneur, ou un créatif, 
  OSKIL est là pour donner vie à vos idées et façonner votre présence 
  en ligne avec impact et originalité.

  Bienvenue dans l’univers OSKIL, là où le digital devient une œuvre d’art.`
};

// Données Expérience
const experience = {
  icon : '/assests/resume/badge.svg',
  title: 'Pourquoi travailler avec moi ?',
  description: "Au fil des années, j’ai eu l’opportunité de travailler avec diverses entreprises, chacune contribuant à enrichir mon parcours professionnel. Découvrez les structures qui m’ont accueilli et les environnements dans lesquels j’ai pu développer mes compétences!",
  items: [
    {
      company: "Pyramide Digital Solutions",
      position: "Responsable Technique",
      duration: "2023 - A nos jours"
    },
    {
      company: "Lumia Tech",
      position: "Freelance UI/UX Designer",
      duration: "2023 - 2024"
    },
    {
      company: "Canari Group",
      position: "Freelance Designer",
      duration: "Juin 2024"
    },
    {
      company: "Crypto FX Trading",
      position: "Dir. Marketing RDC",
      duration: "2021 - 2022"
    },
    {
      company: "1TPE",
      position: "Agent Affilié",
      duration: "2020 - 2021"
    },
    {
      company: "CFEN Startup",
      position: "CE0 & Fondateur",
      duration: "2020 - A nos jours"
    },
    {
      company: "QNET",
      position: "Community Manager",
      duration: "2019 - 2020"
    },
  ],
};

// Données Education
const education = {       
  icon : '/assests/resume/cap.svg',
  title: 'Mes Formations',
  description: "Tout au long de mon parcours, j'ai recherché l'excellence en m'appuyant sur différents parcours de formation. Chaque étape a contribué à enrichir mes compétences et à me préparer aux défis d'un environnement professionnel en constante évolution.",
  items: [
    {
      institution: "Cours en Ligne",
      degree: "Développeur Full-Stack",
      duration: "2024 - En cours"
    },
    {
      institution: "DisasterReady",
      degree: "Analyste de données",
      duration: "2024"
    },
    {
      institution: "Pierre Giraud",
      degree: "Développeur Front-End",
      duration: "2023 - 2024"
    },
    {
      institution: "Cours en Ligne",
      degree: "UI/UX Designer",
      duration: "2022 - 2023"
    },
    {
      institution: "Udemy",
      degree: "Infographiste",
      duration: "2022 - 2023"
    },
    {
      institution: "Coursera",
      degree: "Créateur Digital",
      duration: "2020 - 2021"
    },
    {
      institution: "Free Lance Ac.",
      degree: "Freelancing",
      duration: "2018 - 2020"
    },            
  ],
};

// Données Atouts & Compétences
const skills = {
  title: 'Maîtrise Technique & Atouts',
  description: `Enrichi par l'expérience et guidé par l'innovation, 
   j'ai développé un éventail de compétences techniques qui me permettent de transformer 
   des idées en réalisations concrètes. Chaque atout représente une pierre angulaire de mon expertise, 
   contribuant à la réussite de chaque projet.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: < SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiSketch />,
      name: "sketch",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap 5",
    },
    {
      icon: <FaChartBar />,
      name: "power bi",
    },
    {
      icon: 
      <Image 
        src="/assests/photoshop.svg" 
        width={60} 
        height={60} 
        alt="photoshop" 
        style={{
          filter: "invert(100%)",
          transition: "filter 0.3s ease-in-out",
          cursor: "pointer"
        }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")}/>,
      name: "adobe photoshop",
    },
    {
      icon: 
      <Image 
        src="/assests/adobe-illustrator-svgrepo-com.svg" 
        width={60} 
        height={60} 
        alt="illustrator" 
        style={{
          filter: "invert(100%)",
          transition: "filter 0.3s ease-in-out",
          cursor: "pointer"
        }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")}/>,
      name: "adobe illustrator",
    },
    {
      icon: 
      <Image 
      src="/assests/lightroom.svg" 
      width={60} height={60} 
      alt="lightroom" 
      style={{
        filter: "invert(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")}
      />,
      name: "adobe lightroom",
    },
    {
      icon: 
      <Image 
        src="/assests/premiere.svg" 
        width={60} 
        height={60} 
        alt="premiere" 
        style={{
          filter: "invert(100%)",
          transition: "filter 0.3s ease-in-out",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")}
      />,
      name: "adobe premiere",
    },
    {
      icon: 
      <Image 
        src="/assests/aftereffects.svg" 
        width={60} 
        height={60} 
        alt="aftereffects" 
        style={{
          filter: "invert(100%)",
          transition: "filter 0.3s ease-in-out",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")} 
      />,
      name: "adobe after effects",
    },
    {
      icon: 
      <Image 
        src="/assests/capcut.svg" 
        width={60} 
        height={60} 
        alt="capcut" 
        style={{
          filter: "invert(100%)",
          transition: "filter 0.3s ease-in-out",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "invert(31%) sepia(89%) saturate(1845%) hue-rotate(355deg) brightness(89%) contrast(99%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(100%)")} 
      />,
      name: "CapCut",
    },
    {
      icon: <SiOpenai />,
      name: "chatGpt",
    },
    {
      icon: <SiDavinciresolve />,
      name: "daVinci resolve",
    },
    
    
  ],

};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/ui/tabs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from "@/components/ui/ui/tooltip";

 import { ScrollArea } from "@/components/ui/ui/scroll-area";
 import { motion } from "framer-motion";

const Profile = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px] items-start"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="about">A propos de moi</TabsTrigger>
          </TabsList>

          {/**  Contenu */}
          <div className="min-h-[70vh] w-full">
            {/**  contenu Expérience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 {/**  titre et description */}
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 ">
                    {experience.description}
                  </p> 
             
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                        >
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>

             {/**  contenu Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                        >
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>

             {/**  contenu Compétences */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                 {/**  titre et description */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                 {/**  Icones */}
                 <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] 
                              rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

              {/**  contenu A propos de moi */}
            <TabsContent 
              value="about" 
              className="w-full text-center xl:text-left"
            > 
              {/**  A propos de moi */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6
                    max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="flex items-center justify-center 
                          xl:justify-start gap-4"
                        >
                          <span className="text-white/70">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                  {/**  A propos d'Oskil */}
                  <h4 className="text-3xl font-bold m-[30px] xl:ms-0">{about.title1}</h4>
                  <p className="max-w-[800px] text-white/80 mx-auto xl:mx-0">{about.description1}</p>
                  
                  <div className="flex flex-col md:flex-row md:items-start 
                    items-center mt-5"
                  >
                  {/**  bouton vers la page mes réalisations */}
                  <Link 
                    href="/realisations" 
                    className="text-orange-600 inline-flex items-center  
                    m-1 sm:m-4 sm:ms-0 text-center sm:text-left 
                    hover:underline transition duration-400"
                  >
                  <ChevronRight size={18} className="mt-[1px]" />
                  Voir mes réalisations  
                  </Link>
                  {/**  bouton vers la page FAQ */}
                  <Link 
                    href="/faq" 
                    className="text-orange-600 inline-flex items-center  
                    m-1 sm:m-4 sm:ms-0 text-center sm:text-left 
                    hover:underline transition duration-400"
                  >
                  <ChevronRight size={18} className="mt-[1px]" />
                  Posez une question  
                  </Link>
                  </div>
                  <h4 className="text-3xl font-bold m-[30px] xl:ms-0">{about.title2}</h4>
                  <h5 className="text-xl font-bold m-[30px] xl:ms-0">{about.subtitle2}</h5>
                  <p 
                    className="max-w-[800px] text-white/80 mx-auto xl:mx-0">
                    {about.description2}
                  </p>
                  <h5 className="text-xl font-bold m-[30px] xl:ms-0">{about.subtitle3}</h5>
                  <p 
                    className="max-w-[800px] text-white/80 mx-auto xl:mx-0">
                    {about.decription3}
                  </p>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>

  ) 
};

export default Profile;
