"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

// Tableau des services
const services = [
  {
    num: '01',
    title: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: 'ui-ux-design',
  },
  {
    num: '02',
    title: 'Développement Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: 'developpement-web',
  },
  {
    num: '03',
    title: 'Infographie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: 'infographisme',
  },
  {
    num: '04',
    title: 'Création Digitale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slug: 'creation-digitale',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-4 group"
            >
              {/* En-tête de la carte du service */}
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent
                      group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="w-[50px] h-[50px] rounded-full bg-white
                      group-hover:bg-accent transition-all duration-500 flex
                      justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>
              {/* Titre du service */}
              <h2
                className="text-[42px] font-bold leading-none text-white
                      group-hover:text-accent transition-all duration-500"
              >
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-white/50">{service.description}</p>
              {/* Bordure décorative */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
