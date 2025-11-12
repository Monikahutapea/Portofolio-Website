import { motion } from "framer-motion";
import { ChevronDown, Code, ExternalLink, Sparkles } from "lucide-react";
import monika from "../assets/monika.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden text-[#3E2F2F]"
    >
      {/* Background gradient with more blue */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#7E9AAF] via-[#F9F5F3] to-[#D8A48F]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating glows - with blue */}
      <motion.div
        className="absolute w-96 h-96 bg-[#7E9AAF]/30 rounded-full blur-3xl top-[-50px] left-[-100px]"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-[#D8A48F]/30 rounded-full blur-3xl bottom-[-80px] right-[-100px]"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#7E9AAF]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-8 max-w-6xl">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D8A48F] to-[#7E9AAF] rounded-full blur-xl opacity-40 animate-pulse" />
          <img
            src={monika}
            alt="Monika Hutapea"
            className="relative w-56 h-56 rounded-full object-cover border-4 border-[#F9F5F3] shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#7E9AAF]/30">
            <Sparkles className="w-4 h-4 text-[#7E9AAF]" />
            <span className="text-sm font-medium text-[#A07156]">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-[#3E2F2F] drop-shadow-sm">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8A48F] to-[#7E9AAF]">Monika</span> 👋
          </h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-[#A07156] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Data Analyst | Tech Enthusiast | Problem Solver
          </motion.h2>
          <p className="max-w-xl text-[#3E2F2F]/80 leading-relaxed text-lg">
            I'm passionate about transforming data into meaningful insights. Skilled in <strong className="text-[#A07156]">Python</strong>, <strong className="text-[#A07156]">Power BI</strong>, and{" "}
            <strong className="text-[#A07156]">Machine Learning</strong> — with experience in customer insights, clustering, and predictive modeling.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-[#7E9AAF] to-[#D8A48F] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1e0CJmiDHSliPsov3OPhOqyQUIysYpAN5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#7E9AAF] text-[#7E9AAF] rounded-xl hover:bg-[#7E9AAF] hover:text-white transition-all font-semibold flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              View CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <p className="text-sm font-medium text-[#3E2F2F]/70 hover:text-[#7E9AAF] transition-colors">
          Scroll Down
        </p>
        <ChevronDown className="w-5 h-5 mt-1 text-[#3E2F2F]/70 hover:text-[#7E9AAF]" />
      </motion.div>
    </section>
  );
}