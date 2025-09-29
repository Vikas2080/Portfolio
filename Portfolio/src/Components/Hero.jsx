import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 items-center gap-16 z-10">
      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10"
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Vikas
          </span>{" "}
          👋
        </h1>

        {/* Role */}
        <h2 className="mt-3 text-xl md:text-2xl font-semibold text-blue-300">
          Web Developer
        </h2>

        {/* Tagline */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed italic">
          "Designing tomorrow’s digital experiences with creativity and precision".
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-5">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-blue-500/50 transition"
          >
            🚀 View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 text-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 hover:text-black transition"
          >
            📬 Contact Me
          </motion.a>
          <motion.a
            href="/Vikas_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition"
          >
            📄 Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Image with Glow & Floating Effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex justify-center"
      >
        <motion.img
          src={ProfilePic}
          alt="Vikas - Web Developer"
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20 shadow-[0_0_60px_rgba(56,189,248,0.8)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
