import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Predicting Employee Turnover",
      desc: "Developed a machine learning model to predict employee attrition using Logistic Regression, Random Forest, and XGBoost. Evaluated using ROC-AUC and precision-recall metrics.",
      link: "https://www.kaggle.com/code/monikahtp/predicting-employee-turnover-a-machine-learning",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      gradient: "from-[#7E9AAF] to-[#D8A48F]",
    },
    {
      title: "Customer Segmentation Analysis",
      desc: "Segmented customers using K-Means and Hierarchical Clustering with PCA dimensionality reduction for marketing insights.",
      link: "https://github.com/Monikahutapea/Customer-Segmentation-Analysis-using-K-Means-and-Hierarchical-Clustering",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "PCA"],
      gradient: "from-[#D8A48F] to-[#A07156]",
    },
    {
      title: "Image Classification & Transfer Learning",
      desc: "Built and compared CNN models (VGG16, ResNet50, EfficientNetB0) for image classification tasks, achieving 94.8% test accuracy.",
      link: "https://github.com/Monikahutapea/Image-Classification-using-CNN-VGG16-ResNet50-EfficientNet",
      tech: ["TensorFlow", "Keras", "Python", "CNN", "Transfer Learning"],
      gradient: "from-[#7E9AAF] to-[#A07156]",
    },
    {
      title: "Student Academic Performance Prediction",
      desc: "Predicted student academic success using Random Forest and KNN models with feature engineering and performance evaluation.",
      link: "https://github.com/Monikahutapea/Student_Performance_Analysis",
      tech: ["Python", "Scikit-learn", "Random Forest", "KNN"],
      gradient: "from-[#A07156] to-[#7E9AAF]",
    },
    {
      title: "Real-Time IoT Data Streaming & Analysis",
      desc: "Built a real-time data streaming system to monitor temperature sensors using Apache Kafka and PySpark with Docker integration.",
      link: "https://github.com/Monikahutapea/Big-Data_Data-Sensor-IoT-dengan-Apache-Kafka?tab=readme-ov-file",
      tech: ["Apache Kafka", "PySpark", "Docker", "Python"],
      gradient: "from-[#D8A48F] to-[#7E9AAF]",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-b from-white via-[#F9F5F3] to-[#E8E6E3]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <Code className="w-10 h-10 text-[#7E9AAF]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F2F]">Projects</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-2 border-[#7E9AAF]/20 hover:border-[#7E9AAF]/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${p.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3E2F2F] mb-3">{p.title}</h3>
              <p className="text-[#3E2F2F]/70 text-sm mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#7E9AAF]/10 text-[#A07156] text-xs font-semibold rounded-lg border border-[#7E9AAF]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm text-[#7E9AAF] hover:text-[#A07156] font-bold group-hover:translate-x-1 transition-all"
            >
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}