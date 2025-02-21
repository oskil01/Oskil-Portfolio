"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation"; 
import Sheet from "@/components/ui/ui/sheet"; 

const Links = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Résumé", path: "/profile" },
  { name: "Portfolio", path: "/realisations" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
        aria-label="Ouvrir le menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
        {/* Optionnel : Titre du menu */}
        <h2 className="text-2xl font-bold text-center text-accent mb-6">
        </h2>

        {/* LOGO */}
        <div className="mb-6 text-center">
          <Link href="/">
            <Image
              src="/assests/logo.png" 
              alt="Logo"
              width={110}
              height={80}
              className="w-[110px] h-auto mx-auto"
              priority
            />
          </Link>
        </div>

        {/* Liste des liens */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setIsOpen(false)} // Ferme le menu au clic
              className={`capitalize font-medium transition-all pb-2 
              ${link.path === pathname ? 
              `text-accent border-b-2 border-accent` : `text-white`} 
              hover:text-accent`}
            >
            {link.name}
            </Link>
          ))}
          <Link href="/hireme" onClick={() => setIsOpen(false)}>
            <Button 
              className="bg-button text-primary hover:bg-button-hover 
              px-4 py-2 rounded-full">
              Joignez-moi
            </Button>
          </Link>
        </nav>
      </Sheet>
    </div>
  );
};

export default MobileNav;
