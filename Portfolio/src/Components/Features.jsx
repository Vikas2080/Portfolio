import { motion } from "framer-motion";
import { Rocket, Laptop, Lightbulb, Gauge } from "lucide-react";

// Features data (clean, reusable)
const features = [
  {
    title: "Fast",
    description: "Optimized for speed and smooth performance.",
    icon: Gauge,
  },
  {
    title: "Responsive",
    description: "Fully adaptable layouts for all screen sizes.",
    icon: Laptop,
  },
  {
    title: "Intuitive",
    description: "Simple, user-friendly interfaces with great UX.",
    icon: Lightbulb,
  },
  {
    title: "Dynamic",
    description: "Interactive, modern designs that feel alive.",
    icon: Rocket,
  },
];

// Animation settings (centralized for consistency)
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Features = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-black/90 text-center text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/bg-tech.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          My <span className="text-blue-400">Websites </span>are
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              {...fadeUp(index * 0.2)}
              className="flex flex-col items-center text-center bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-transform"
            >
              {/* Icon Container */}
              <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md">
                <Icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-300 text-base">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
