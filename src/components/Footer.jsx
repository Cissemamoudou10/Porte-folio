import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-text text-secondary dark:text-secondary mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Nom */}
        <div className="text-lg sm:text-xl font-semibold tracking-tight text-accent dark:text-highlight">
          Mamoudou © {new Date().getFullYear()}
        </div>

        {/* Navigation Footer */}
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          <li>
            <a href="#home" className="hover:text-highlight transition-all duration-200">
              Accueil
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-highlight transition-all duration-200">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-highlight transition-all duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://linkedin.com/in/tonprofil" // 🔁 Remplace par ton vrai lien
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tonprofil" // 🔁 Remplace par ton vrai lien
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
