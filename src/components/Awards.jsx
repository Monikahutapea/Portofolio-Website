import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      title: "Intro Data Analytics Certificate - RevoU",
      desc: "Ranked in the Top 10% out of 10,000+ participants.",
      link: "https://drive.google.com/file/d/1fZKchjzCKib7FTdxwnhTvqdB0BDfSJCG/view?usp=sharing",
    },
    {
      title: "Microsoft Power BI: Visualization, Reporting, and Dashboard - MySkill",
      desc: "Designed impactful dashboards and reports using Power BI.",
      link: "https://drive.google.com/file/d/1EbwP-48A6Ts2WwkSrvTs_hNDQ1PB6-ZQ/view?usp=sharing",
    },
    {
      title: "Microsoft Power BI: Data Preparation - MySkill",
      desc: "Learned data preparation and cleaning for analysis in Power BI.",
      link: "https://drive.google.com/file/d/1BCmanr9rwWaRlXzQH1JCCvqKQQTl3-JA/view?usp=sharing",
    },
    {
      title: "Guide to Learn Python with AI - DQLab",
      desc: "Mastered Python fundamentals and introduction to AI concepts.",
      link: "https://drive.google.com/file/d/1xk5i3jA9PvlJ61uYTqZh-XyGYdhaOeAY/view?usp=sharing",
    },
    {
      title: "Data Classification and Summarization - IBM SkillsBuild x Hacktiv8",
      desc: "Showcased data classification and summarization proficiency.",
      link: "https://drive.google.com/file/d/1M4I_BSadENMse7dBQcEuaHvbbc34PXb7/view?usp=sharing",
    },
    {
      title: "Gold Medalist Finalist - ISO USU 2021 (Physics)",
      desc: "Achieved Gold Medal in the International Science Olympiad by USU.",
      link: "https://drive.google.com/file/d/1ivB1eQT1EDCP74D62fE9GuvGw92pKCKB/view?usp=sharing",
    },
    {
      title: "EnglishScore Core Skills Test (CEFR B2) - British Council",
      desc: "Demonstrated upper-intermediate English proficiency.",
      link: "https://drive.google.com/file/d/1AIVzLbJdrXPcm8kzM49mM-w-yIDe8Nb2/view?usp=drive_link",
    },
    {
      title: "Certificate of Team Participation - LIGA PKM ITS 2023",
      desc: "Proposed an eco-friendly packaging idea, passed bikom stage with 460 points.",
      link: "https://drive.google.com/file/d/1lgLNwKAMNj2KqlieGS4whr8JTrdk3-sy/view?usp=sharing",
    },
    {
      title: "AI in Everyday Life - Samsung Innovation Campus x Hacktiv8",
      desc: "Learned AI-powered IoT prototyping through national training program.",
      link: "https://drive.google.com/file/d/1KjbXFTjZVtGRtLGOwSxFiK39ZCKOl3U4/view?usp=sharing",
    },
  ];

  return (
    <section id="awards" className="relative py-24 px-8 bg-gradient-to-b from-[#F9F5F3] via-white to-[#E8E6E3] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[22rem] h-[22rem] bg-[#7E9AAF]/15 rounded-full blur-3xl top-20 left-[-80px]"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[18rem] h-[18rem] bg-[#D8A48F]/15 rounded-full blur-3xl bottom-20 right-[-60px]"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Award className="w-10 h-10 text-[#7E9AAF]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F2F]">Awards & Certifications</h2>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {awards.map((a, idx) => (
          <motion.a
            key={a.title}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all p-6 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-[#7E9AAF]/20 hover:border-[#7E9AAF]/60 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-[#7E9AAF] to-[#D8A48F] rounded-xl group-hover:scale-110 transition-transform">
                  <Award className="text-white w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#3E2F2F] group-hover:text-[#7E9AAF] transition-colors leading-snug">
                  {a.title}
                </h3>
              </div>
              <p className="text-sm text-[#3E2F2F]/70 leading-relaxed">{a.desc}</p>
            </div>

            <div className="flex items-center text-[#7E9AAF] text-sm mt-5 font-semibold group-hover:text-[#A07156] transition-colors group-hover:translate-x-1 duration-300">
              View Certificate <ExternalLink className="w-4 h-4 ml-2" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}