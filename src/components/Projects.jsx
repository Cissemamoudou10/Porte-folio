import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql } from "react-icons/si";
import Sahel_logo from "../assets/logo_SDG_White.svg"

const projects = [
  {
    title: "Sahel Digital Solutions",
    image: Sahel_logo, // remplace par ton vrai logo hébergé si besoin
    description: `Plateforme numérique de notre entreprise pour la vente de matériel, la communication visuelle, et le développement web. J’ai conçu l’ensemble du site avec React.js, Tailwind CSS et Node.js.`,
    stack: ["React", "Tailwind", "Node", "MongoDB"],
    link: "https://sahel-digital-solutions.vercel.app/", // remplace par le lien réel si disponible
  },
  {
    title: "Système de gestion de cartes numériques",
    image: "https://images.unsplash.com/photo-1516031190212-da133013de50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // image illustrative
    description: `Application professionnelle pour la gestion des cartes d’identification numérique. Intégration d’un système sécurisé de création, modification et archivage des cartes sur serveur local.`,
    stack: ["React", "Node", "MySQL"],
    confidential: true,
  },
  {
    title: "Système de gestion du personnel",
    image: "https://images.unsplash.com/photo-1516031190212-da133013de50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // image illustrative
    description: `Plateforme interne de gestion RH : profils militaires, statuts, hiérarchie, etc. Optimisation du suivi du personnel en temps réel. Déploiement sur infrastructure privée.`,
    stack: ["React", "Tailwind", "Node", "MySQL"],
    confidential: true,
  },
];

const techIcons = {
  React: <SiReact className="text-sky-500 w-5 h-5" />,
  Tailwind: <SiTailwindcss className="text-cyan-500 w-5 h-5" />,
  Node: <SiNodedotjs className="text-green-600 w-5 h-5" />,
  MongoDB: <SiMongodb className="text-green-500 w-5 h-5" />,
  MySQL: <SiMysql className="text-blue-500 w-5 h-5" />,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-secondary dark:bg-text text-text dark:text-secondary px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Mes projets</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Voici une sélection de projets concrets sur lesquels j’ai travaillé récemment.
          </p>
        </motion.div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-black/20 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                </div>

                <div className="flex justify-between items-end mt-auto">
                  {/* Stack */}
                  <div className="flex space-x-2">
                    {project.stack.map((tech) => (
                      <div key={tech} title={tech}>
                        {techIcons[tech]}
                      </div>
                    ))}
                  </div>

                  {/* Lien */}
                  {project.link && !project.confidential && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent dark:text-highlight hover:underline text-sm flex items-center gap-1"
                    >
                      Voir le site <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.confidential && (
                    <span className="text-xs text-gray-500 italic">Projet confidentiel</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
