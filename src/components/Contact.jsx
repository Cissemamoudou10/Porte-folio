import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // 🔁 Remplace par ton ID emailjs
        "YOUR_TEMPLATE_ID",    // 🔁 Remplace par ton template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"      // 🔁 Remplace par ta clé publique emailjs
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
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
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contactez-moi
        </motion.h2>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Un projet, une idée ou une mission freelance ? Je suis toujours ouvert à discuter.
        </motion.p>

        {/* Réseaux */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/mamoudou" // 🔁 mets ton vrai GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mamoudou" // 🔁 mets ton vrai LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition text-2xl"
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
          viewport={{ once: true }}
        >
          <div className="flex flex-col space-y-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Nom</label>
            <input
              type="text"
              name="user_name"
              required
              className="p-3 rounded bg-white/70 dark:bg-black/30 border border-gray-300 dark:border-gray-700"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="p-3 rounded bg-white/70 dark:bg-black/30 border border-gray-300 dark:border-gray-700"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Objet</label>
            <input
              type="text"
              name="subject"
              className="p-3 rounded bg-white/70 dark:bg-black/30 border border-gray-300 dark:border-gray-700"
              placeholder="Objet du message"
            />
          </div>
          <div className="flex flex-col space-y-2 col-span-1 md:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="p-3 rounded bg-white/70 dark:bg-black/30 border border-gray-300 dark:border-gray-700"
              placeholder="Tapez votre message ici..."
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded shadow-lg transition"
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </div>
          {sent && (
            <p className="col-span-2 text-center text-green-600 mt-4">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
