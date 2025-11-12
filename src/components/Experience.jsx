import { motion } from "framer-motion";
import { Briefcase, Database, BarChart } from "lucide-react";
import { useState, useEffect } from "react";

function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Experience() {
  const experiences = [
    {
      company: "PT Telkom Indonesia",
      role: "Data Management & Customer Insights Project",
      period: "Jul 2025 – Aug 2025",
      icon: <Database className="w-6 h-6" />,
      details: [
        "Collected and refined over 200 customer records to improve data consistency.",
        "Created analytical reports to support marketing strategy and service enhancement.",
      ],
    },
    {
      company: "Polres Temanggung",
      role: "Social Media Data Analysis Project",
      period: "Dec 2024 – Jan 2024",
      icon: <BarChart className="w-6 h-6" />,
      details: [
        "Explored social media data to detect misinformation patterns.",
        "Developed visual summaries to enhance digital communication insights.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-gradient-to-b from-[#E8E6E3] via-[#F9F5F3] to-white text-[#3E2F2F] overflow-hidden"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Briefcase className="w-10 h-10 text-[#7E9AAF]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F2F]">Experience & Projects</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border-2 border-[#7E9AAF]/30 hover:border-[#7E9AAF]/70 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-[#7E9AAF] to-[#D8A48F] rounded-xl text-white group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#A07156] mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#3E2F2F]/70 font-medium">
                  {exp.company} • {exp.period}
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-[#3E2F2F]/90">
              {exp.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#7E9AAF] mt-1">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Decorative glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[24rem] h-[24rem] bg-[#7E9AAF]/20 rounded-full blur-3xl top-32 left-[-100px]"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[20rem] h-[20rem] bg-[#D8A48F]/25 rounded-full blur-3xl bottom-20 right-[-80px]"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}