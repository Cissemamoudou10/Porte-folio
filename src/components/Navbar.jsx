import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((d) => !d);
  const toggleMenu = () => setIsOpen((o) => !o);

  // Variants pour l'animation du menu mobile
  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Variants pour les barres du hamburger
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const middleBarVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <nav className="bg-primary text-text dark:bg-text dark:text-secondary shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl cursor-pointer select-none">
          <span className="text-accent dark:text-highlight">Port</span>folio
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li>
            <a href="#home" className="hover:text-accent dark:hover:text-highlight transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-accent dark:hover:text-highlight transition">
              A propos
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent dark:hover:text-highlight transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent dark:hover:text-highlight transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="hidden md:inline-block ml-4 p-2 rounded hover:bg-accent hover:text-white transition"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* Mobile hamburger + dark mode toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="mr-4 p-2 rounded hover:bg-accent hover:text-white transition"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          >
            <motion.span
              className="block h-0.5 w-6 bg-text dark:bg-secondary rounded"
              animate={isOpen ? "open" : "closed"}
              variants={topBarVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-text dark:bg-secondary rounded"
              animate={isOpen ? "open" : "closed"}
              variants={middleBarVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-text dark:bg-secondary rounded"
              animate={isOpen ? "open" : "closed"}
              variants={bottomBarVariants}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu animé avec AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-primary dark:bg-text text-text dark:text-secondary px-6 py-4 space-y-4 font-semibold overflow-hidden"
          >
            <a
              href="#home"
              className="block hover:text-accent dark:hover:text-highlight transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-accent dark:hover:text-highlight transition"
              onClick={() => setIsOpen(false)}
            >
              A propos
            </a>
            <a
              href="#projects"
              className="block hover:text-accent dark:hover:text-highlight transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-accent dark:hover:text-highlight transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
