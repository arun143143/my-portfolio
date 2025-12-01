import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Section from './Section';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: "RAG-based Document Q&A System",
    description: "Developed a Retrieval-Augmented Generation system allowing users to upload documents and ask natural language questions.",
    points: [
      "Document ingestion pipeline with text extraction and chunking",
      "Vector embeddings for semantic search",
      "Integrated LLM (Llama 4 via Groq) with retrieval layer",
      "Enabled users to retrieve accurate answers from unstructured documents"
    ],
    tech: ["Python", "FastAPI", "LangChain", "Hugging Face", "DeepSeek", "Embeddings"],
    link: "https://github.com/arun143143"
  },
  {
    title: "E-Commerce Website Backend",
    description: "Built and deployed a scalable e-commerce backend with payment gateway integration.",
    points: [
      "Django REST Framework for managing products, users, carts, and orders",
      "Integrated Cashfree Payments Gateway",
      "Containerized with Docker and deployed on AWS EC2",
      "CI/CD pipelines with GitHub Actions"
    ],
    tech: ["Django REST", "PostgreSQL", "Cashfree API", "Docker", "AWS EC2", "Redis"],
    link: "https://github.com/arun143143"
  },
  {
    title: "Hospitality Management Analytics",
    description: "Designed Power BI dashboards for hospitality domain monitoring key metrics.",
    points: [
      "Monitored occupancy rates, guest satisfaction, and revenue trends",
      "Enabled a 25% improvement in operational decision-making",
      "Performed EDA and data cleaning using Power Query"
    ],
    tech: ["Power BI", "DAX", "SQL", "MS Excel", "Data Visualization"],
    link: "https://github.com/arun143143"
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full p-6 rounded-2xl bg-[#0f0f13] border border-gray-800 hover:border-pink-500/50 transition-all group"
          >
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-400 text-sm">
              {project.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs font-medium rounded bg-gray-800 text-gray-300 border border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;