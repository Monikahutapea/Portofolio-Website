import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Home", "About", "Experience", "Projects", "Skills", "Awards", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-[#F9F5F3]/90 backdrop-blur-md shadow-sm z-50 border-b border-[#7E9AAF]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand with gradient */}
        <motion.h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7E9AAF] to-[#D8A48F] tracking-wide cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        >
          Monika Hutapea
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#3E2F2F] font-medium">
          {menu.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group py-2"
              >
                <span className="group-hover:text-[#7E9AAF] transition-colors duration-300">
                  {item}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7E9AAF] to-[#D8A48F] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#7E9AAF] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden overflow-hidden bg-[#F9F5F3] border-t border-[#7E9AAF]/20`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="px-6 py-4 space-y-3">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-[#3E2F2F] hover:text-[#7E9AAF] hover:pl-2 transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}