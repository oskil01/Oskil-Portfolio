"use client"

// Données ui
const ui = {
  icon : '/assests/resume/badge.svg',
  title: 'Tarification',
  subtitle: "Offrez-vous le meilleur !",
  description: `L'UI/UX Design (Maquette d'Interface/Expérience Utilisateur)  
  améliore l’expérience utilisateur en rendant un site web intuitif, 
  attractif et facile à naviguer. L’UX optimise l’ergonomie et l’accessibilité, tandis que l’UI 
  renforce l’attrait visuel et l’interactivité. Un bon design réduit les 
  frustrations, fidélise les visiteurs et augmente les conversions. 
  Il renforce aussi l’image de marque et la crédibilité de votre entreprise. 
  En alliant esthétique et fonctionnalité, il est un facteur clé de réussite pour tout
  site web.`,
  items: [
    {
      delai: "Livrable dans 48h",
      prix: "100",
      devise: "$",
      categorie: "Maquette Minimaliste"
    },
    {
      delai: "Livrable dans 5 jours",
      prix: "200",
      devise: "$",
      categorie: "Maquette Standard"
    },
    {
      delai: "Livrable dans 10 jours",
      prix: "300",
      devise: "$",
      categorie: "Maquette Moderne"
    },
    {
      delai: "Livrable dans 14 jours",
      prix: "400",
      devise: "$",
      categorie: "Maquette Ultra Moderne"
    },
  ],
};

// Données DEV
const dev = {       
  icon : '/assests/resume/cap.svg',
  title: 'Tarification',
  subtitle: "Profitez-en dès maintenant !",
  description: `Le Développement Web est l’ensemble des techniques 
  permettant de concevoir des sites performants, interactifs et sécurisés. 
  Il assure une navigation fluide, une compatibilité sur tous les appareils 
  et une rapidité d’exécution optimale. Un site bien développé améliore 
  l’expérience utilisateur, renforce votre présence en ligne et augmente 
  votre visibilité. Il permet aussi d’intégrer des fonctionnalités adaptées 
  aux besoins de votre entreprise. Un bon développement web est essentiel 
  pour garantir la fiabilité et l’efficacité de votre plateforme.`,
  items: [
    {
      delai: "Livrable dans 2 à 4 semaines",
      prix: "250",
      devise: "$",
      description:"Présente l'entreprise ou la marque ainsi que son activité.",
      categorie: "Site Vitrine"
    },
    {
      delai: "Livrable dans 2 à 4 semaines",
      prix: "400",
      description: `Site CV, regroupant une sélection de vos meilleures 
      réalisations, vos compétences, votre expertise,...`,
      devise: "$",
      categorie: "Portfolio"
    },
    {
      delai: "Livrable dans 4 à 8 semaines",
      prix: "700",
      devise: "$",
      description: `Plateforme où des individus ou des entreprises publient
      régulièrement des articles ou des actualités.`,
      categorie: "Blog"
    },
    {
      delai: "Livrable dans 48h",
      prix: "850",
      devise: "$",
      description: `Décrit une organisation, ses activités et ses valeurs, 
      fournissant des informations pratiques aux clients ou bénéficiaires.`,
      categorie: "Site Institutionnel"
    },
    {
      delai: "Livrable dans 1 à mois",
      prix: "1000",
      devise: "$",
      description: `Réseau privé accessible uniquement aux membres d'une 
      organisation, utilisé pour partager des ressources internes.`,
      categorie: "Site Intranet"
    },
    {
      delai: "Livrable dans 4 à 8 semaines",
      prix: "1200",
      devise: "$",
      description: `Site offrant une variété de services tels que messagerie,
      actualités et autres ressources, souvent destiné à une large audience. `,
      categorie: "Portail Web"
    },
    {
      delai: "Livrable dans 2 à 4 mois",
      prix: "1200",
      devise: "$",
      description: `Plateforme où les utilisateurs peuvent interagir, 
      partager des informations et discuter de sujets d'intérêt commun.`,
      categorie:"Site Communautaire",
    },
    {
      delai: "Livrable dans 2 à 5 mois",
      prix: "1500",
      devise: "$",
      description:`Permet la vente de produits ou de services directement 
      en ligne.`,
      categorie: "Site e-commerce"
    },
  ],
};

// Données Infographie
const infographie = {
  title: 'Tarification',
  subtitle: "Démarquez-vous dès aujourd'hui!",
  description: `Mon service d’infographie transforme vos idées en visuels
  percutants et mémorables. De la création de logos au design publicitaire,
  nous renforçons l’identité visuelle de votre marque pour capter 
  l’attention et marquer les esprits. Un design graphique de qualité 
  améliore la communication, renforce la crédibilité et différencie votre 
  entreprise sur le marché. Faites de votre image un atout stratégique 
  pour votre succès ! `,
  items: [
    {
      delai: "Livrable dans 3 à 7 jours",
      prix: "80-400",
      devise: "$",
      description:`Assemblage et édition de séquences vidéo pour produire 
      un contenu cohérent et attrayant,...`,
      categorie: "Montage Vidéo"
    },
    {
      delai: "Livrable dans 24h à 48h",
      prix: "80-320",
      description: ` Intro ou Outro courtes mettant en mouvement le 
      logo d'une entreprise ou d'une marque. `,
      devise: "$",
      categorie: "Animation de logos"
    },
    {
      delai: "Livrable dans 3 à 7 jours",
      prix: "299",
      devise: "$",
      description: `Supports imprimés destinés à la promotion d'événements,
      de produits ou de services, conçus pour capter l'attention du public. `,
      categorie: "Animation Graphique(Motion)"
    },
    {
      delai: "Livrable à la demande",
      prix: "170-1500",
      devise: "$",
      description: `Production de vidéos courtes visant à expliquer un 
      concept, présenter un produit ou promouvoir un service, combinant 
      souvent animations et voix off.`,
      categorie: "Branding"
    },
    {
      delai: "Livrable dans 24h à 72h",
      prix: "10-30",
      devise: "$",
      description: `Élaboration de présentations PowerPoint esthétiques et 
      structurées, adaptées aux besoins professionnels. `,
      categorie: "PowerPoint Professionnel"
    },
    {
      delai: "Livrable dans 2 à 4 jours",
      prix: "70-240",
      devise: "$",
      description:`Organisation et design de documents tels que rapports, 
      livres blancs ou magazines, assurant une lecture fluide et une 
      présentation esthétique. `,
      categorie: "Mise en page doc"
    },
  ],
};

// Données Création Digitale
const crationDigitale = {
  title: 'Tarification',
  subtitle: "N'hésitez pas à me contacter !",
  description: `La création digitale est un levier essentiel pour 
  propulser votre entreprise vers le succès. Un design percutant renforce 
  votre identité visuelle, attire l’attention et inspire confiance à vos 
  clients. De la conception de logos aux animations graphiques, chaque 
  élément visuel véhicule votre message et valorise votre marque. Dans 
  un monde digital en constante évolution, un visuel professionnel et 
  cohérent vous démarque de la concurrence. Investir dans un design de 
  qualité, c’est garantir une communication efficace et une meilleure 
  conversion. `,
  items: [
    {
      delai: "Livrable dans 24h",
      prix: "10-100",
      devise: "$",
      description:`Symbole ou typographie unique représentant l'identité 
      et les valeurs d'une entreprise ou d'une marque.`,
      categorie: "Logo"
    },
    {
      delai: "Livrable dans 24h à 48h",
      prix: "225",
      description: `Ensemble cohérent d'éléments graphiques (logos, 
      typographies, couleurs) définissant l'image de marque d'une 
      entreprise. `,
      devise: "$",
      categorie: "Identité Visuellle"
    },
    {
      delai: "Livrable dans 24h",
      prix: "10-30",
      devise: "$",
      description: `Supports imprimés destinés à la promotion d'événements,
      de produits ou de services, conçus pour capter l'attention du public. `,
      categorie: "Affiches & Flyers"
    },
    {
      delai: "Livrable à la demande",
      prix: "(...)",
      devise: "$",
      description: `Conception de divers matériaux imprimés tels que brochures, 
      cartes de visite, dépliants,... destinés à la communication et au marketing. `,
      categorie: "Supports Imprimés",
    },
    {
      delai: "Livrable à la demande",
      prix: "(...)",
      devise: "$",
      description: `Amélioration et modification d'images pour corriger des
      imperfections, ajuster des couleurs ou créer des effets artistiques.`,
      categorie:"Montage & Retouche photo",
    },
    {
      delai: "Livrable à la demande",
      prix: "(...)",
      devise: "$",
      description:`Création de visuels adaptés aux différentes plateformes 
      sociales pour renforcer la présence en ligne et l'engagement des 
      utilisateurs.`,
      categorie: "Design pour les réseaux sociaux"
    },
  ],
};
// Données Création Digitale
const autres = {
  title: 'Tarification',
  subtitle: "Profitez-en dès aujourd'hui!",
  description: `Nous vous proposons une autre gamme de services essentiels pour 
  booster votre activité en ligne et optimiser votre gestion digitale. 
  De la gestion de communauté à l’administration de bases de données, en 
  passant par la formation en ligne et le webmastering, nous vous offrons 
  des solutions adaptées à vos besoins. Simplifiez votre organisation avec 
  nos services bureautiques et explorez de nouvelles opportunités de 
  revenus grâce à l’affiliation. `,
  items: [
    {
      delai: "Payable par mois",
      prix: "150-400",
      devise: "$",
      description:"Gestion et animation des réseaux sociaux pour renforcer la présence en ligne d'une entreprise.",
      categorie: "Community Managment"
    },
    {
      delai: "Payable par projet",
      prix: "150-800",
      description: `Conception, administration et maintenance des bases de 
      données pour assurer une gestion efficace des informations.`,
      devise: "$",
      categorie: "Data Base"
    },
    {
      delai: "Payable par mois",
      prix: "250-500",
      devise: "$",
      description: `Maintenance, mise à jour et optimisation des sites web 
      pour garantir leur performance et leur sécurité.`,
      categorie: "Webmastering"
    },
    {
      delai: "Payable à la demande",
      prix: "(...)",
      devise: "$",
      description: `Programmes éducatifs dispensés en privé (Mentorat) 
      pour développer des compétences spécifiques.`,
      categorie: "Formation en ligne"
    },
    {
      delai: "Payable par heure",
      prix: "5-20",
      devise: "$",
      description: ` Réalisation de tâches administratives telles que la 
      saisie de données, la rédaction de documents et la gestion de 
      correspondance.`,
      categorie:"Bureautique",
    },
    {
      delai: "Payable par commission",
      prix: "(...)",
      devise: "$",
      description:`Partenariat de promotion des produits ou services en 
      échange d'une commission sur les ventes générées. `,
      categorie: "Affiliation"
    },
  ],
  
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/ui/tabs";

 import { ScrollArea } from "@/components/ui/ui/scroll-area";
 import { motion } from "framer-motion";

const pageServices = () => {
  
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
          defaultValue="ui" 
          className="flex flex-col xl:flex-row gap-[60px] items-start"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="ui">UI/UX Design</TabsTrigger>
            <TabsTrigger value="dev">Développement Web</TabsTrigger>
            <TabsTrigger value="infographie">Infographie</TabsTrigger>
            <TabsTrigger value="crationDigitale">Création Digitale</TabsTrigger>
            <TabsTrigger value="autres">Autres</TabsTrigger>
          </TabsList>

          {/**  Contenu global */}
          <div className="min-h-[70vh] w-full">
            {/**  contenu UI/UX Design */}
            <TabsContent value="ui" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                <h3 className="text-4xl font-bold">{ui.title}</h3>
                <ScrollArea className="h-[400px]">
                  <p className="max-w-[800px] text-white/70 py-4 mx-auto xl:mx-0 mb-4">
                    {ui.description}
                  </p>
                  <h4 className="text-2xl text-extrabold py-3">{ui.subtitle}</h4>
                  <ul className="grid grid cols-1 lg:grid-cols-2 gap-[30px]
                    py-8">
                    {ui.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.categorie}</span>
                        {/* prix */}
                        <div className="flex justify-center gap-2 items-center">
                          <h3 className="text-5xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left text-3xl"
                          >{item.prix} 
                          </h3>
                          <h4 className="text-white/70 text-xl">{item.devise}</h4>
                        </div>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.delai}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

           {/**  contenu DEV */}
           <TabsContent value="dev" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                <h3 className="text-4xl font-bold">{dev.title}</h3>
                <ScrollArea className="h-[400px]">
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 mb-4">
                    {dev.description}
                  </p>
                  <h4 className="text-2xl text-extrabold py-4">{dev.subtitle}</h4>
                  <ul className="grid grid cols-1 lg:grid-cols-2 gap-[30px]
                    py-8">
                    {dev.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[294px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.categorie}</span>
                        {/* prix */}
                        <div className="flex justify-center gap-2 items-center">
                          <h3 className="text-5xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left text-3xl"
                          >{item.prix} 
                          </h3>
                          <h4 className="text-white/70 text-xl">{item.devise}</h4>
                        </div>
                        {/* description */}
                        <p className="text-base text-white/50 italic">{item.description}</p>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/70">{item.delai}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**  contenu Infographie */}
           <TabsContent value="infographie" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                <h3 className="text-4xl font-bold">{infographie.title}</h3>
                <ScrollArea className="h-[400px]">
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 mb-4">
                    {infographie.description}
                  </p>
                  <h4 className="text-2xl text-extrabold py-4">{infographie.subtitle}</h4>
                  <ul className="grid grid cols-1 lg:grid-cols-2 gap-[30px]
                    py-8">
                    {infographie.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[294px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.categorie}</span>
                        {/* prix */}
                        <div className="flex justify-center gap-2 items-center">
                          <h3 className="text-5xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left text-3xl"
                          >{item.prix} 
                          </h3>
                          <h4 className="text-white/70 text-xl">{item.devise}</h4>
                        </div>
                        {/* description */}
                        <p className="text-base text-white/50 italic">{item.description}</p>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/70">{item.delai}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**  Contenu Creation Digitale */}
            <TabsContent value="crationDigitale" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                <h3 className="text-4xl font-bold">{crationDigitale.title}</h3>
                <ScrollArea className="h-[400px]">
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 mb-4">
                    {crationDigitale.description}
                  </p>
                  <h4 className="text-2xl text-extrabold py-4">{crationDigitale.subtitle}</h4>
                  <ul className="grid grid cols-1 lg:grid-cols-2 gap-[30px]
                    py-8">
                    {crationDigitale.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[294px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.categorie}</span>
                        {/* prix */}
                        <div className="flex justify-center gap-2 items-center">
                          <h3 className="text-5xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left text-3xl"
                          >{item.prix} 
                          </h3>
                          <h4 className="text-white/70 text-xl">{item.devise}</h4>
                        </div>
                        {/* description */}
                        <p className="text-base text-white/50 italic">{item.description}</p>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/70">{item.delai}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**  Contenu Autres */}
            <TabsContent value="autres" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/**  titre et description */}
                <h3 className="text-4xl font-bold">{autres.title}</h3>
                <ScrollArea className="h-[400px]">
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 mb-4">
                    {autres.description}
                  </p>
                  <h4 className="text-2xl text-extrabold py-4">{autres.subtitle}</h4>
                  <ul className="grid grid cols-1 lg:grid-cols-2 gap-[30px]
                    py-8">
                    {autres.items.map((item, index)=> {
                      return ( 
                      <li 
                        key={index}
                        className="bg-[#232329] h-[294px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.categorie}</span>
                        {/* prix */}
                        <div className="flex justify-center gap-2 items-center">
                          <h3 className="text-5xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left text-3xl"
                          >{item.prix} 
                          </h3>
                          <h4 className="text-white/70 text-xl">{item.devise}</h4>
                        </div>
                        {/* description */}
                        <p className="text-base text-white/50 italic">{item.description}</p>
                        <div className="flex items-center gap-3">
                          {/** boule */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/70">{item.delai}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  ) 
};

export default pageServices;
