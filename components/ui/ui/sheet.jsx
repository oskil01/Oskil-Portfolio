"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/lib/utils"; // Votre fonction utilitaire pour concaténer les classes

// Exemple d'animation et variantes (vous pouvez ajuster ces classes ou utiliser cva si souhaité)
const sheetVariants = {
  right: "inset-y-0 right-0 w-3/4 sm:max-w-sm",
  left: "inset-y-0 left-0 w-3/4 sm:max-w-sm",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const Sheet = ({ isOpen, onClose, side = "right", children, className }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenu du Sheet */}
      <div
        className={cn(
          "fixed z-50 gap-4 bg-primary p-6 shadow-lg transition-transform duration-300",
          sheetVariants[side],
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 transition-opacity outline-none"
          aria-label="Fermer"
        >
          <IoMdClose className="text-3xl text-orange-500" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Sheet;
