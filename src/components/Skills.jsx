import { motion } from "framer-motion";
import { Code, BarChart, Sparkles, Database } from "lucide-react";

export default function Skills() {
  const skills = {
    Programming: { 
      items: ["Python", "SQL", "C++", "Java", "JavaScript"], 
      icon: <Code className="w-6 h-6" /> 
    },
    Visualization: { 
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"], 
      icon: <BarChart className="w-6 h-6" /> 
    },
    "Machine Learning": { 
      items: ["Regression", "Classification", "Clustering", "Feature Engineering"], 
      icon: <Sparkles className="w-6 h-6" /> 
    },
    Tools: { 
      items: ["Git", "Jupyter", "VS Code", "Docker", "Apache Kafka", "PySpark"], 
      icon: <Database className="w-6 h-6" /> 
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 px-8 
                 bg-gradient-to-b from-[#E6F0FA] via-white to-[#F9F5F3] overflow-hidden"
    >
      {/* ✨ Heading */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Sparkles className="w-10 h-10 text-[#7E9AAF]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F2F]">
            Technical Skills
          </h2>
        </div>
      </motion.div>

      {/* 🧩 Grid Skills */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto z-10">
        {Object.entries(skills).map(([category, data], idx) => (
          <motion.div
            key={category}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl 
                       transition-all border-2 border-[#7E9AAF]/30 hover:border-[#7E9AAF]/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#7E9AAF] to-[#D8A48F] rounded-xl text-white">
                {data.icon}
              </div>
              <h3 className="text-lg font-bold text-[#3E2F2F]">{category}</h3>
            </div>
            <ul className="text-[#3E2F2F]/80 space-y-2">
              {data.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#7E9AAF]">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 🌈 Decorative Glow */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-[#7E9AAF]/15 rounded-full blur-3xl top-[-50px] left-[-80px]"
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[25rem] h-[25rem] bg-[#D8A48F]/15 rounded-full blur-3xl bottom-[-60px] right-[-80px]"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
    </section>
  );
}
