'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/ui/scroll-area';

const faqs = [
  { 
    question: "Proposez-vous d'autres services à part ceux cités ?", 
    answer: `Oui, en plus du développement web, du design UI/UX et de la 
    création de contenu digital, je propose également d’autres services 
    complémentaires pour répondre aux besoins variés de mes clients.
    Si vous avez besoin d'un service qui cadre avec mon domaine
    mais qui n'est pas présent sur la liste des services, prière de
    me contacter en privé pour voir si je peux vous rendre service.`
  },
  { 
    question: "Peux-tu créer un site web sur mesure ?", 
    answer: `Oui, absolument ! Chaque site que je développe est entièrement
    personnalisé et conçu sur mesure en fonction de tes objectifs, de ton 
    secteur d’activité et de ton public cible. Grâce à un design unique 
    (pas de modèles préfabriqués), je crée une interface sur mesure qui 
    reflète ton identité et tes valeurs. J’utilise des technologies modernes 
    et outils performants comme Next.js, React, Tailwind CSS, PHP, WordPress 
    et d’autres selon les besoins du projet. Optimisation SEO & Performance 
    : Je créerai un site rapide, sécurisé et bien référencé pour maximiser ta visibilité.
    Si tu as déjà une idée précise de ce que tu veux, je peux la concrétiser. 
    Sinon, je peux aussi t’aider à définir la meilleure approche pour ton 
    projet !` 
  },
  { 
    question: `Travailles-tu uniquement avec des entreprises ou aussi 
    avec des particuliers ?`, 
    answer: `Je travaille avec toute personne ou entité ayant un projet 
    digital. Que tu sois un entrepreneur ou un indépendant qui souhaite
    un service parmi mes services offerts, une startup cherchant une identité visuelle 
    et une application web performante, une entreprise qui a besoin d’un 
    site e-commerce ou d’une refonte complète, un créateur de contenu 
    souhaitant optimiser sa présence en ligne... Je m’adapte à chaque 
    client pour proposer une solution qui correspond à ses attentes et son 
    budget.` 
  },
  { 
    question: "Comment se déroule un projet avec toi ?", 
    answer: `Chaque projet suit un processus structuré en 4 étapes pour 
    garantir un résultat optimal. Voici un exemple pour un projet de
    développement web : → Etape 1 : Découverte & Analyse : Nous discutons 
    de ton projet en détail (objectifs, public cible, inspirations et 
    contraintes techniques. J’établis un cahier des charges pour cadrer 
    le projet). → Etape 2 : Conception & UI/UX Design : Je réalise une 
    maquette et wireframe pour définir l’architecture et l’expérience 
    utilisateur. Ensuite, je travaille sur le design en intégrant ton 
    identité visuelle. → Etape 3 : Développement & Intégration : Une fois 
    le design validé, je passe au développement avec les technologies 
    adaptées (Next.js, Tailwind, PHP, etc.). Je m’assure que ton site soit 
    responsive, rapide et optimisé. → Etape 4 : Tests, Livraison 
    & Formation : Je réalise des tests approfondis pour corriger 
    d’éventuels bugs. Une fois validé, je mets ton site en ligne et te 
    forme à son utilisation si nécessaire. Tout au long du processus, 
    je reste disponible pour échanger et ajuster selon tes retours.` 
  },
  { 
    question: "Combien de temps prend la création d'un site ?", 
    answer: `Le délai varie selon la complexité du projet :
    → Site vitrine simple (1-5 pages) : Environ 2 à 4 semaines.
    → Site e-commerce ou plateforme personnalisée : 1 à 2 mois.
    → Refonte complète d’un site existant : Dépend du projet, mais 
    généralement 3 à 6 semaines. Un planning détaillé est fourni au début 
    du projet pour une meilleure visibilité sur les délais.` 
  },
  { 
    question: `Peux-tu refaire un design existant ou améliorer un 
    site déjà en ligne ?`, 
    answer: `Oui, je peux refondre complètement un site vieillissant pour 
    le rendre plus moderne et performant, optimiser le SEO et la vitesse 
    d’un site lent, ajouter des nouvelles fonctionnalités pour améliorer 
    l’expérience utilisateur. Je réalise d’abord un audit pour identifier 
    les axes d’amélioration et proposer les meilleures solutions.` 
  },
  { 
    question: `Quels sont tes tarifs ?`, 
    answer: `Le prix dépend de la complexité du projet
    et du temps de travail requis. (Par exemple : Site vitrine : À partir de 
    300$, Site e-commerce : À partir de 600$, Refonte & optimisation : 
    Sur devis, Maquete UI/UX Design : A partir de 400$). Un devis détaillé 
    est fourni avant le début du projet. Rendez-vous dans la page 
    "Services" depuis le menu pour en savoir plus sur le prix exact pour  
    chaque catégorie de service.` 
  },
  { 
    question: `Proposes-tu des facilités de paiement ?`, 
    answer: `Oui, en fonction du budget du projet, je peux proposer un 
    paiement en plusieurs fois. Généralement, le paiement s’effectue en 
    trois étapes : → Etape 1 : Acompte de 30% au lancement du projet.
    → Etape 2 : Deuxième paiement de 40% à mi-parcours. 
    → Etape 3 : Solde final de 30% à la livraison du projet.` 
  },
  { 
    question: `Comment puis-je te payer ?`, 
    answer: `J’accepte plusieurs moyens de paiement :
    Virement bancaire, PayPal, Carte bancaire (UBA, autres services
    sécurisés), Paiement Mobile (Orange Money, M-Pesa, Airtel, AfriMoney),
    Paiement par Cryptos (USDT et BTC).` 
  },
  { 
    question: `Offres-tu un support après la livraison ?`, 
    answer: `Oui, je propose plusieurs formules de maintenance pour assurer
    la mise à jour, la sécurité et l’optimisation de ton site.
    Pack Basique : Mises à jour et corrections mineures,
    Pack Standard : Maintenance complète + SEO et optimisation de la vitesse,
    Pack Premium : Ajout de nouvelles fonctionnalités et suivi personnalisé.` 
  },
  { 
    question: `Que faire si mon site rencontre un problème ?`, 
    answer: `Tu peux me contacter directement pour une intervention rapide. 
    En cas d’urgence, je propose un support prioritaire.` 
  },
  { 
    question: `Peux-tu créer un logo ou une identité visuelle ?`, 
    answer: `Oui ! Un bon branding est essentiel pour se démarquer. 
    Je peux créer : Logo personnalisé, Charte graphique complète 
    (couleurs, typographies, guides d’utilisation), Supports visuels 
    (cartes de visite, bannières, etc.). Je travaille avec toi pour créer 
    une identité qui reflète ta vision et ton positionnement.` 
  },
  { 
    question: `Comment puis-je travailler avec toi ?`, 
    answer: `C’est simple ! Tu peux m’envoyer un message via le formulaire 
    de contact sur mon site "Contact", me contacter sur WhatsApp en cliquant sur 
    le bouton vert avec l'icone de whatsApp présent sur votre écran 
    ou me contacter par email.` 
  },
  { 
    question: `Peux-tu travailler à distance ?`, 
    answer: `Oui, je travaille 100% en remote et j’ai l’habitude de 
    collaborer avec des clients du monde entier.` 
  },
  { 
    question: `Je n'arrive pas à vous envoyer un message`, 
    answer: `Si vous n'arrivez pas à m'envoyer
    un message directement en utilisant le formulaire de 
    contact, cela pourrait être dû à des multiples raisons :
    Soit un problème de connexion, soit un problème lors de la 
    requête au serveur. Si vous n'avez pas  un problème de
    connexion, je vous prie de me contacter via mon numéro
    de téléphone ou bien directement sur WhatstApp en cliquant
    sur l'icone vert en bas de votre écran, en attendant qu'on
    trouve une solution. Je suis désolé pour Ce 
    désagrement.` 
  },
  { 
    question: `Je vous ai envoyé un message sans réponse`, 
    answer: `Je suis vraiment désolé pour çà. Parfois les 
    messages envoyés en utilisant le formulaire de contact 
    rencontrent des petits soucis liés quelquefois à la 
    connexion au serveur. Parfois ça prend du temps pour 
    me parvenir, parfois j'arrive à vous lire un peu
    tard alors que vous vouliez une réponse immédiate.
    Si tel est le cas, je vous propose de m'appeler 
    directement via mon numéro de téléphone présent 
    sur l'onglet "Contact" depuis le menu de navigation
    ou m'écrire sur WhatsApp en cliquant sur l'icone 
    vers en bas de votre écran.` 
  },
  { 
    question: `Je ne trouve pas de réponse appropriée à ma question`, 
    answer: `D'accord, si vous ne trouvez pas de réponse appropriée à
    votre question cela signifie que c'est une question un peu particulière.
    N'hésitez pas à me contacter en privé pour me poser votre question
    et je me ferai plaisir de vous répondre sans hésiter.` 
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 xl:mt-[-20px]">
      <h1 className="text-3xl font-bold text-center mb-6">Foire aux Questions</h1>
      
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une question..."
        className="w-full p-3 border border-white/10 bg-transparent text-white ps-8 rounded-full mb-6 focus:outline-none focus:ring-2 focus:ring-white/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Scrollable FAQ Section */}
      <ScrollArea className="h-[400px] w-full rounded-md p-4">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-[#232329] rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 bg-transparent hover:bg-[#232329] transition duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-transparent border-none text-white/60 transition-opacity duration-300 opacity-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Aucune question ne correspond à votre recherche.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
