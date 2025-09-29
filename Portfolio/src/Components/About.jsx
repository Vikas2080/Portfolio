import { motion } from "framer-motion";
import AriesLogo from "../assets/logos/aries.png";
import CollabLogo from "../assets/logos/collabaudit.png";
import VscodeLogo from "../assets/logos/vscode.png";

import {
  Briefcase,
  GraduationCap,
  Download,
  Code2,
  Activity,
  Users,
} from "lucide-react";

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
  FaCode,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

// ====== DATA ======
const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    place: "Birla Institute Of Applied Sciences, Bhimtal",
    period: "2022 – 2026",
    meta: "CGPA: 8/10",
  },
  {
    title: "Secondary Education (CBSE)",
    place: "Sanwal School Nainital",
    meta: "CGPA: 9.3/10",
  },
  {
    title: "Senior Secondary Education (CBSE)",
    place: "Amtul’s Public School",
    meta: "CGPA: 8.4/10",
  },
];

const skills = {
  Languages: [
    { name: "C", icon: <FaCuttlefish className="text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
    { name: "Java (Basic)", icon: <FaJava className="text-red-500" /> },
    { name: "Python (Basic)", icon: <FaPython className="text-yellow-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  ],
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
    { name: "Databases", icon: <FaDatabase className="text-purple-400" /> },
  ],
  Tools: [
    { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "VS Code", icon: <img src={VscodeLogo} alt="VS Code" className="w-5 h-5" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { name: "Database", icon: <FaDatabase className="text-green-500" /> },
    { name: "Code Editor", icon: <FaCode className="text-gray-700" /> },
  ],
};

const internships = [
  {
    org: "ARIES (Aryabhatta Research Institute of Observational Sciences)",
    role: "Project Planner & Full-Stack Developer Intern",
    period: "July – August 2025",
    points: [
      "Planned project workflows and coordinated deliverables to ensure smooth execution.",
      "Built and integrated full-stack features using React.js and Node.js with Express.js.",
    ],
  },
  {
    org: "CollabAuditAi",
    role: "Frontend Developer Intern",
    period: "June – July 2024",
    points: [
      "Built responsive user interfaces with HTML, CSS, and JavaScript.",
      "Collaborated with senior developers to implement UI components and improve UX.",
    ],
  },
];

const responsibilities = [
  "Games Captain of School among 117 students (2019–2020).",
  "Finance Coordinator of a Social Club (2024–Present).",
  "Coordinator, NASA Space App Challenge (2024).",
];

const extracurricular = [
  "NSS Volunteer — completed two consecutive 7-day NSS camps (2024–2025).",
  "Ranked in top 15% in JEE (2022).",
  "2nd place — Essay Writing among 24 schools (2017).",
  "3rd place — Open Photography Challenge (2021).",
  "1st place — 10km marathon (13–18 age group) among 50+ participants (2019).",
  "U-18 District Cricket Player (2018–2020).",
];

const AboutPage = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          aria-hidden
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-600/25 via-purple-500/20 to-pink-500/20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-4xl font-bold text-center mb-10">
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Objective */}
        <motion.div
          {...fadeUp(0.2)}
          className="mb-16 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Career Objective 🎯</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Enthusiastic and detail-oriented Computer Science Engineering student with a strong
            foundation in <span className="text-blue-400">software development, data structures, and problem-solving</span>.
            Seeking opportunities to apply technical knowledge, contribute to organizational growth,
            and build innovative solutions.
          </p>
        </motion.div>

        {/* Education + Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Education Timeline */}
          <motion.div {...fadeUp(0.3)} className="relative pl-6 border-l border-blue-500/30 space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" /> Education
            </h3>
            {education.map((e, idx) => (
              <div key={idx} className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition">
                <div className="absolute -left-[14px] top-6 w-3 h-3 rounded-full bg-blue-500 border border-white" />
                <p className="font-semibold text-white">{e.title}</p>
                <p className="text-sm text-gray-300">{e.place} {e.period && ` | ${e.period}`}</p>
                {e.meta && <p className="text-xs text-gray-400 mt-1">{e.meta}</p>}
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div {...fadeUp(0.5)} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-400" /> Technical Skills
            </h3>
            {Object.entries(skills).map(([category, list], idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">{category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {list.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-blue-500/60 hover:scale-105 transition"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Internships */}
        <motion.div {...fadeUp(0.6)} className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-400" /> Internships
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((it, idx) => (
              <article
                key={idx}
                aria-label={`${it.role} at ${it.org}`}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-transform"
              >
                {/* Header with logo + org + role */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 shadow-md group-hover:shadow-blue-500/30 transition">
                    <img
                      src={it.org.includes("ARIES") ? AriesLogo : CollabLogo}
                      alt={`${it.org} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">{it.org}</h4>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md">
                      {it.role}
                    </span>
                    <p className="text-sm text-gray-400">{it.period}</p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                  {it.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>


        {/* Roles & Extra-curricular */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeUp(0.8)} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-400" /> Positions of Responsibility
            </h3>
            <ul className="text-gray-300 space-y-3 list-disc list-inside">
              {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(1)} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-400" /> Extra-Curricular Activities
            </h3>
            <ul className="text-gray-300 space-y-3 list-disc list-inside">
              {extracurricular.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </motion.div>
        </div>

        {/* Resume Button */}
        <div className="text-center">
          <motion.a
            href="/Vikas_Resume.pdf"  
            download="Vikas_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg shadow-blue-500/30 transition"
          >
            <Download className="w-5 h-5" /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
