import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Home as HomeIcon, User, FileText, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <HomeIcon size={16} /> },
    { name: "Projects", path: "/projects", icon: <FileText size={16} /> },
    { name: "About", path: "/about", icon: <User size={16} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative"
    >
      {/* Brand Logo */}
      <NavLink
        to="/"
        className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        VIKAS
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-gray-700 dark:text-gray-300 font-medium">
        {navLinks.map(({ name, path, icon }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer transition-colors hover:text-black dark:hover:text-white ${
                  isActive ? "text-black dark:text-white font-semibold" : ""
                }`
              }
            >
              {icon}
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Dark Mode"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md md:hidden flex flex-col gap-4 p-6 z-20"
          >
            {navLinks.map(({ name, path, icon }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg cursor-pointer transition-colors hover:text-black dark:hover:text-white ${
                      isActive ? "text-black dark:text-white font-semibold" : ""
                    }`
                  }
                >
                  {icon}
                  {name}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
