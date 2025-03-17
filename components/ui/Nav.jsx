"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Résumé",
    path: "/profile",
  },
  {
    name: "Portfolio",
    path: "/realisations",
  },
  {
    name: "Offres",
    path: "/offers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        const isActive = pathName === link.path || pathName.startsWith(`${link.path}/`);

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium hover:text-accent transition-all ${
              isActive ? "text-accent border-b-2 border-accent" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
