import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiMui,
  SiMysql,
  SiVercel,
  SiRailway,
  SiRender,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-500" />, level: 4.5 },
//   { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 4 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 4.5 },
  { name: "Express", icon: <SiExpress className="text-gray-800" />, level: 4 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 4 },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 3.5 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 4.5 },
  { name: "Material UI", icon: <SiMui className="text-blue-600" />, level: 4 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 5 },
  { name: "Git / GitHub", icon: <FaGithub className="text-black dark:text-white" />, level: 4 },
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: 3 },
];

const deploySkills = [
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, level: 4 },
  { name: "Render", icon: <SiRender className="text-blue-500" />, level: 4 },
  { name: "Railway", icon: <SiRailway className="text-purple-500" />, level: 4 },
  { name: "Serveur local", icon: <FaServer className="text-gray-700 dark:text-gray-200" />, level: 4 },
];

function renderStars(level) {
  const fullStars = Math.floor(level);
  const halfStar = level % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) stars.push("★");
  if (halfStar) stars.push("☆");
  return stars.join(" ");
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary dark:bg-text text-text dark:text-secondary px-6 md:px-20 py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">À propos de moi</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            Je m'appelle <strong>Mamoudou</strong>, développeur FullStack JavaScript basé au Mali. 
            J’aime créer des interfaces intuitives et modernes avec React, et des backends performants 
            avec Node.js, Express, MongoDB ou MySQL. <br />
            Je maîtrise aussi le déploiement de bout en bout, que ce soit sur le cloud ou en entreprise,
            avec des outils comme <strong>Vercel</strong>, <strong>Render</strong>, <strong>Railway</strong> ou via des <strong>serveurs locaux</strong>.
          </p>
        </motion.div>

        {/* Skills Dev */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Compétences techniques</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/70 dark:bg-black/20 shadow-md"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="font-semibold mb-1">{skill.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{renderStars(skill.level)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deployment */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Déploiement & hébergement</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {deploySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/70 dark:bg-black/20 shadow-md"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="font-semibold mb-1">{skill.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{renderStars(skill.level)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
