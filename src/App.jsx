import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />{" "}
      <div className="bg-secondary text-text dark:bg-text dark:text-secondary min-h-screen font-sans transition-colors duration-500">
        <Navbar />
        <main className="pt-20 max-w-5xl mx-auto px-6">
          <section id="home" className="mb-20">
            <Hero />
          </section>

          <section id="about" className="mb-20">
            <About />
          </section>

          <section id="projects" className="mb-20">
            <Projects />
          </section>

          <section id="contact" className="mb-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
