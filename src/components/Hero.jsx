export default function Hero() {
    return (
      <div className="flex flex-col items-center text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4 text-primary dark:text-accent">
          Salut, je suis Mamoudou 👋
        </h1>
        <p className="text-lg max-w-xl text-text dark:text-secondary mb-8">
          Développeur React.js passionné, je crée des interfaces modernes et réactives avec Tailwind CSS.
        </p>
        <a
          href="#projects"
          className="inline-block bg-accent hover:bg-primary text-white font-semibold py-3 px-6 rounded shadow-lg transition"
        >
          Voir mes projets
        </a>
      </div>
    );
  }
  