import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 
                 bg-gradient-to-b from-[#F9F5F3] via-white to-[#E8E6E3] text-[#3E2F2F]"
    >
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🌿 Judul */}
        <div className="flex flex-col items-center justify-center mb-10">
          <GraduationCap className="w-10 h-10 text-[#7E9AAF] mb-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F2F]">
            About Me
          </h2>
        </div>

        {/* 🪞 Kotak Deskripsi */}
        <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl 
                        border-2 border-[#7E9AAF]/30 text-center">
          <div className="text-lg leading-relaxed text-[#3E2F2F]/80 space-y-6">
            <p className="text-xl">
              I'm{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7E9AAF] to-[#D8A48F]">
                Monika Damelia Hutapea
              </span>
              , an Information Technology student passionate about{" "}
              <span className="text-[#A07156] font-semibold">
                data analytics, machine learning,
              </span>{" "}
              and transforming data into valuable insights.
            </p>

            <p>
              I enjoy exploring patterns, visualizing stories, and using data to
              drive smarter decisions. My expertise includes{" "}
              <span className="text-[#7E9AAF] font-semibold">
                Python, Power BI, and data storytelling
              </span>
              . I'm constantly learning and experimenting with techniques that blend{" "}
              <span className="text-[#A07156] font-semibold">technology</span> and{" "}
              <span className="text-[#A07156] font-semibold">insight</span>.
            </p>

            <p>
              Beyond analytics, I value{" "}
              <span className="text-[#7E9AAF] font-semibold">creativity</span>,{" "}
              <span className="text-[#D8A48F] font-semibold">collaboration</span>, and{" "}
              <span className="text-[#7E9AAF] font-semibold">continuous growth</span> — 
              because meaningful results come from both data and the people behind it.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 🌈 Decorative glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[25rem] h-[25rem] bg-[#7E9AAF]/20 rounded-full blur-3xl top-28 left-[-80px]"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[20rem] h-[20rem] bg-[#D8A48F]/20 rounded-full blur-3xl bottom-16 right-[-60px]"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
