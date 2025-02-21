"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Utiliser le chemin pour déclencher une animation unique
        className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 0.8, duration: 0.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 1 }}
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
