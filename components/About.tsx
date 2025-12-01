import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, Database } from 'lucide-react';
import Section from './Section';

const cards = [
  {
    icon: <Code2 className="text-purple-400" size={32} />,
    title: "Backend Development",
    desc: "FastAPI & Django REST Framework expert with microservices architecture experience."
  },
  {
    icon: <Brain className="text-pink-400" size={32} />,
    title: "AI/ML & GenAI",
    desc: "MLOps, RAG systems, LLM integration, and forecasting models."
  },
  {
    icon: <Cloud className="text-purple-400" size={32} />,
    title: "Cloud & DevOps",
    desc: "Docker, AWS EC2, CI/CD pipelines with GitHub Actions."
  },
  {
    icon: <Database className="text-pink-400" size={32} />,
    title: "Data Engineering",
    desc: "PostgreSQL, MongoDB, Vector DBs, ETL pipelines."
  }
];

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="text-center mb-12">
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Passionate about solving real-world problems through data-driven solutions. With 1 year of hands-on experience, I specialize in building scalable backend systems, implementing ML pipelines, and deploying AI-powered applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-[#0f0f13] border border-gray-800 hover:border-purple-500/50 transition-colors group"
          >
            <div className="p-3 bg-gray-900 w-fit rounded-lg mb-4 group-hover:bg-gray-800 transition-colors">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-gray-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;