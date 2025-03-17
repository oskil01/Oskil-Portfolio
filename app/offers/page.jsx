"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/ui/button";
import { Card, CardContent } from "@/components/ui/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/ui/tabs";
import { Layers, BookOpen, Briefcase, Percent } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const offres = [
  { 
    id: 1, 
    type: "formation", 
    title: "Formation en Microsoft PowerPoint", 
    desc: "Besoin d'apprendre à créer des diapositives esthétiques et animées comme un Pro ?",
    prix: "20$",
    img: "/assests/offers/formations/formation.jpg" 
  },
//   { 
//     id: 2, 
//     type: "service", 
//     title: "Développement Web", 
//     desc: "Création de sites web modernes", 
//     img: "/images/webdev.jpg" 
//   },
//   { 
//     id: 3, 
//     type: "service", 
//     title: "Promo Spéciale", 
//     desc: "-30% sur nos formations", 
//     img: "/images/promo.jpg" 
//   },
];

export default function OffresPage() {
  const [filtre, setFiltre] = useState("all");
  const [visible, setVisible] = useState(3); // Nombre initial de cartes visibles

  // Fonction pour afficher plus de cartes
  const showMore = () => setVisible((prev) => Math.min(prev + 3, offresFiltrees.length));

  // Fonction pour afficher moins de cartes
  const showLess = () => setVisible(3);

  // Filtrage des offres
  const offresFiltrees = filtre === "all" ? offres : offres.filter((offre) => offre.type.includes(filtre));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.h1 
        className="text-3xl font-bold text-center mb-4" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Nos Offres
      </motion.h1>
      <p className="text-center text-gray-500 mb-6">
        Découvrez nos formations, services et promotions.
      </p>

      {/* Filtres */}
      <Tabs defaultValue="all" className="mb-6 text-center">
        <TabsList 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
          lg:flex gap-2"
        >
          <TabsTrigger 
            value="all" 
            onClick={() => setFiltre("all")}
          >
            <Layers className="w-4 h-4 mr-2" />
            Tout (1)
          </TabsTrigger>
          <TabsTrigger 
            value="formation" 
            onClick={() => setFiltre("formation")}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Formations (1)
          </TabsTrigger>
          <TabsTrigger 
            value="service" 
            onClick={() => setFiltre("service")}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Services (0)
          </TabsTrigger>
          <TabsTrigger 
            value="promotion" 
            onClick={() => setFiltre("promotion")}
          >
            <Percent className="w-4 h-4 mr-2" />
            Promo (0)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Grid d'Offres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offresFiltrees.slice(0, visible).map((offre) => (
          <motion.div 
            key={offre.id} 
            className="rounded-xl overflow-hidden shadow-lg h-90 bg-[#27272c]"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={offre.img} 
              alt={offre.title} 
              className="w-full h-40 object-cover" 
            />

            <Card>
              <CardContent className="p-4">
                <h2 
                  className="text-base font-semibold text-accent">
                  {offre.title}
                </h2>
                <p className="text-gray-400 py-3 text-sm">{offre.desc}</p>
                <Button 
                  asChild 
                  className="bg-primary border-white/20 border-2 text-white 
                   hover:bg-accent hover:text-primary flex items-center gap-2 rounded-xl">
                  <Link href="/offers/formation_ppt032025">
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bouton de chargement */}
      {visible < offresFiltrees.length && (
        <div className="flex justify-center mt-4">
          <Button 
            onClick={showMore} 
            className="bg-blue-500 text-accent px-4 py-2 rounded-md 
            hover:bg-blue-600 transition">
            Voir plus
          </Button>
        </div>
      )}

      {/* Bouton pour masquer les cartes si toutes sont affichées */}
      {visible >= offresFiltrees.length && offresFiltrees.length > 3 && (
        <div className="flex justify-center mt-4">
          <Button 
            onClick={showLess} 
            className="bg-gray-500 text-white px-4 py-2 rounded-md 
            hover:bg-gray-600 transition">
            Réduire l'affichage
          </Button>
        </div>
      )}
    </div>
  );
}