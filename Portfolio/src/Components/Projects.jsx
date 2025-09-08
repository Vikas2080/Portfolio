import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Import your screenshots
import TelescopeImg from "../assets/projects/telescope.png";
import WeatherImg from "../assets/projects/weather.png";
import TodoImg from "../assets/projects/todo.png";
import PortfolioImg from "../assets/projects/portfolio.png";
import ComingSoonImg from "../assets/projects/coming-soon.png"; 

const projects = [
  {
    title: "Real-Time Monitoring Dashboard for 3.6m DOT Telescope",
    role: "Full-Stack Developer",
    description:
      "Developed a real-time monitoring system for Asia’s largest reflecting telescope. Built with React.js frontend and Node.js + Express backend. Integrated telescope data from live .log files and user data from .csv files.",
    technologies: ["React.js", "Node.js", "Express.js", "File System", "CSV","Tailwind CSS","Framer Motion",".log Files"],
    image: TelescopeImg,
    links: [
      { label: "GitHub", href: "https://github.com/Vikas2080/Real-Time-Dashboard" },
      { label: "Live", href: "https://real-time-dashboard-frontend.onrender.com/" },
    ],
  },
  {
    title: "Weather App",
    role: "Frontend Developer",
    description:
      "Created a weather application using the OpenWeather API. Displays real-time weather conditions with a clean and responsive interface.",
    technologies: ["React.js", "JavaScript", "OpenWeather API", "CSS"],
    image: WeatherImg,
    links: [
      { label: "GitHub", href: "https://github.com/Vikas2080/Weather-App-using-API" },
    ],
  },
  {
    title: "To-Do List",
    role: "Frontend Developer",
    description:
      "Built a productivity To-Do List application in React.js. Features task creation, management, and a clean, simple UI.",
    technologies: ["React.js", "CSS"],
    image: TodoImg,
    links: [
      { label: "GitHub", href: "https://github.com/Vikas2080/To-Do-List" },
    ],
  },
  {
    title: "Personal Portfolio Website",
    // role: "Full-Stack Developer",
    description:
      "Designed and developed a responsive personal portfolio to showcase projects, skills, and experience. Built with React.js, Tailwind CSS, and Framer Motion for animations.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    image: PortfolioImg,
    links: [
      { label: "GitHub", href: "https://github.com/Vikas2080/Portfolio" },
      { label: "Live", href: "https://your-portfolio-link.com/" }, // update with live link
    ],
  },
  {
    title: "Upcoming Project",
    role: "In Progress",
    description:
      "Currently working on a new project. Stay tuned to see more details once it goes live!",
    technologies: ["React.js", "API", "PostGreSQL","Tailwind CSS"], // update once stack is final
    image: ComingSoonImg,
    comingSoon: true,
    links: [], // no links yet
  },
];

const Projects = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: project.comingSoon ? 1 : 1.03 }}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg transition cursor-pointer flex flex-col overflow-hidden ${
                project.comingSoon ? "opacity-70 hover:opacity-80" : "hover:shadow-blue-500/30"
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover border-b border-white/10"
                />
              )}

              <div className="flex flex-col p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-white flex items-center gap-2">
                  {project.title}
                  {project.comingSoon && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/40">
                      Coming Soon 🚧
                    </span>
                  )}
                </h3>
                <span className="text-gray-400 text-sm mb-3 block">
                  {project.role}
                </span>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-gray-200 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {!project.comingSoon && (
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:underline font-medium text-sm"
                      >
                        {link.label} <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
