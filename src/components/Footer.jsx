export default function Footer() {
    return (
      <footer className="bg-primary text-secondary dark:bg-text dark:text-secondary mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo ou Nom */}
          <div className="text-xl font-bold text-accent dark:text-highlight">
            Mamoudou © {new Date().getFullYear()}
          </div>
  
          {/* Liens de navigation */}
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#home" className="hover:text-highlight transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-highlight transition">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-highlight transition">
                Contact
              </a>
            </li>
          </ul>
  
          {/* Réseaux sociaux (optionnel) */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight transition"
            >
              <i className="fab fa-linkedin"></i> {/* ou une icône svg */}
            </a>
            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight transition"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  