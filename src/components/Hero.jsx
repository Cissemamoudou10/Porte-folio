import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import picture from "../assets/Mamoudou.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-secondary dark:bg-text text-text dark:text-secondary"
    >
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Salut, je suis <span className="text-primary dark:text-accent">Mamoudou</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-text dark:text-secondary mb-8 max-w-xl leading-relaxed">
          Développeur <strong>FullStack JavaScript</strong> avec une passion pour la création d'applications web
          performantes et intuitives. Je maîtrise des technologies modernes comme <strong>React.js</strong>,
          <strong> Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Tailwind CSS</strong> et <strong>Material UI</strong>.
          <br />
          J’aide les entreprises et projets innovants à se digitaliser avec des solutions robustes, esthétiques et évolutives.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-accent hover:bg-primary text-white font-medium py-3 px-6 rounded-full shadow-lg transition"
        >
          Voir mes projets <FaArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Image pro (à remplacer par la vraie photo plus tard) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary dark:border-accent shadow-xl">
          <img
            src={picture}
            alt="Mamoudou"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
