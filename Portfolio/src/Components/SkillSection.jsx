import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "C", icon: <FaCuttlefish className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Databases", icon: <FaDatabase className="text-purple-400" /> },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const SkillsSection = () => {
  return (
    <motion.div
      {...fadeUp(0.3)}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        🚀 Technical Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-blue-500 hover:border-blue-400 hover:scale-105 transition transform"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
