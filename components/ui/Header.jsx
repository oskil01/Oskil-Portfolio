"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assests/logo.png"  
            alt="Logo"
            width={130}  
            height={80}  
            className="mt-[-55px] ms-[-20px] absolute" 
            priority  // Chargement l'image en priorité pour éviter un flash
          />
        </Link>

        {/* Navbar pour laptop + bouton */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/hireme">
            <Button className="bg-transparent text-accent hover:bg-accent px-4 
              py-2 rounded-full outline outline-accent hover:text-primary
              text-base">
              Joignez-moi
            </Button>
          </Link>
        </div>

        {/* Navbar mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Bouton WhatsApp */}
      <div className="fixed bottom-12 w-full flex justify-end px-6 
      xl:px-[150px] z-40 mb-3 ">
      <motion.a
        href="https://wa.me/243820838387"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center xl:mr-8" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Icône WhatsApp SVG */}
        <motion.img
          src="/assests/whatsapp.svg" 
          alt="WhatsApp"
          width={50} 
          height={50}
          animate={{
            y: [0, -5, 0], 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity, 
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </div>

    </header>
  );
};

export default Header;
