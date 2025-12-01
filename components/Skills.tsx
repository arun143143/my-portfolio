import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    category: "Programming & Database",
    skills: ["Python", "SQL", "NoSQL", "PostgreSQL", "MongoDB", "MySQL", "Vector DB (FAISS, Weaviate)"]
  },
  {
    category: "Cloud & Deployments",
    skills: ["AWS EC2", "Azure VMs", "Docker", "Docker Compose", "CI/CD (GitHub Actions)"]
  },
  {
    category: "Tools & Framework",
    skills: ["Django REST Framework", "FastAPI", "Microservices", "Linux", "Git", "REST API"]
  },
  {
    category: "AI / ML / GenAI",
    skills: ["Regression", "Classification", "Forecasting", "MLOps", "NLP", "Transformers", "RAG Systems", "LangChain", "Prompt Engineering"]
  },
  {
    category: "Analytics",
    skills: ["Power BI", "Matplotlib", "MS Excel", "EDA", "ETL", "Data Warehousing"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 12 }
  }
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-1 gap-6"
      >
        {skillData.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: "rgba(168, 85, 247, 0.03)",
              borderColor: "rgba(168, 85, 247, 0.4)" 
            }}
            className="p-8 rounded-2xl bg-[#0a0a0c] border border-gray-800 transition-all duration-300 relative overflow-hidden group shadow-lg"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="md:w-1/4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {category.category}
                </h3>
                <div className="h-1 w-12 bg-purple-500 rounded-full opacity-50"></div>
              </div>
              
              <div className="md:w-3/4 flex flex-wrap content-center gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 + 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5, 
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      borderColor: "rgba(168, 85, 247, 0.6)",
                      color: "#fff"
                    }}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#15151a] text-gray-400 border border-gray-800 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;