import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    toast.loading("Envoi du message...", { id: "send" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message envoyé avec succès !", { id: "send" });
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          toast.error("❌ Échec de l'envoi du message", { id: "send" });
          console.error("Erreur EmailJS :", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-secondary dark:bg-text text-text dark:text-secondary px-6 md:px-20 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre */}
        <motion.h2
          className="text-4xl font-bold mb-2 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Me contacter
        </motion.h2>

        <motion.p
          className="text-base text-muted mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Une idée de projet ? Discutons-en ensemble.
        </motion.p>

        {/* Réseaux */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/Cissemamoudou10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-125 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamoudou-cisse-115230155/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-125 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Nom</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-4 rounded-md bg-white/80 dark:bg-black/30 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-accent"
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-4 rounded-md bg-white/80 dark:bg-black/30 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-accent"
              placeholder="exemple@mail.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Objet</label>
            <input
              type="text"
              name="subject"
              className="w-full p-4 rounded-md bg-white/80 dark:bg-black/30 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-accent"
              placeholder="Objet du message"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-4 rounded-md bg-white/80 dark:bg-black/30 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-accent"
              placeholder="Tapez votre message ici..."
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
