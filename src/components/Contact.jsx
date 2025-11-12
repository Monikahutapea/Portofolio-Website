import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-8 text-center text-white bg-gradient-to-br from-[#7E9AAF] via-[#D8A48F] to-[#A07156]"
    >
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-80 h-80 bg-white/10 rounded-full blur-3xl top-10 left-10"
          animate={{ y: [0, 40, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#F9F5F3]/15 rounded-full blur-3xl bottom-10 right-10"
          animate={{ y: [0, -40, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          className="text-xl text-white/90 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Interested in collaborating or just want to say hi?  
          Feel free to reach out through any platform below.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <a
            href="mailto:hutapeamonika95@gmail.com"
            className="group flex items-center gap-3 bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl backdrop-blur-md transition-all hover:scale-105 border border-white/30"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" /> 
            <span className="font-semibold">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/monika-hutapea"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl backdrop-blur-md transition-all hover:scale-105 border border-white/30"
          >
            <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" /> 
            <span className="font-semibold">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Monikahutapea"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl backdrop-blur-md transition-all hover:scale-105 border border-white/30"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" /> 
            <span className="font-semibold">GitHub</span>
          </a>
        </motion.div>

        <motion.p
          className="mt-16 text-sm text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © 2025 Monika Damelia Hutapea
        </motion.p>
      </div>
    </section>
  );
}