import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Building2 } from 'lucide-react';
import Section from './Section';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    title: "DMS Gateway – Dock Management System",
    company: "Dynamic Systems and Advanced Technologies",
    period: "Present",
    description: "Gateway app layer for SaaS-based Dock Management System using microservices.",
    highlights: [
      "Currently building the gateway app layer for a SaaS-based Dock Management System using a microservices architecture.",
      "Responsible for designing backend services and developing core APIs using FastAPI.",
      "Implementing multi-tenant structure, role-based access control, tenant-aware request validation, and clean service boundaries.",
      "Designing database schemas and service logic.",
      "Implementing tenant isolation and permission checks in the gateway."
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Pytest", "Microservices", "Redis"]
  },
  {
    title: "AI-Powered Document Intelligence & Automated Extraction",
    company: "Dynamic Systems and Advanced Technologies",
    period: "Present",
    description: "AI system to extract and map unstructured order documents into standardized TMS payloads.",
    highlights: [
      "Developed an AI-powered Document Intelligence system to extract and map unstructured order documents (150+ page PDF) into standardized TMS payloads.",
      "Implemented OCR, Docling for custom Word2Vec embeddings, spaCy NER models for accurate data extraction.",
      "Built a synonym-mapping engine to automatically interpret client-specific field variations.",
      "Integrated a chatbot-based human-in-loop validation workflow for low-confidence fields.",
      "Achieved 80% automation in order data processing and reduced manual effort significantly."
    ],
    tech: ["Python", "FastAPI", "OCR", "NLP", "Embedding Model", "Docling", "Redis", "MongoDB", "Docker", "AWS EC2"]
  },
  {
    title: "FleetX – Spare Parts Demand Forecasting System",
    company: "Dynamic Systems and Advanced Technologies",
    period: "Present",
    description: "End-to-end ML system for forecasting spare parts demand.",
    highlights: [
      "Designed and deployed an end-to-end ML system for forecasting spare parts demand using SARIMAX and Prophet.",
      "Served models via FastAPI microservices with Celery + Redis.",
      "Containerized with Docker & Docker Compose, deployed on AWS EC2, and implemented CI/CD pipelines using GitHub Actions.",
      "Improved forecasting accuracy by 20% using SARIMAX/Prophet."
    ],
    tech: ["Python", "FastAPI", "SARIMAX", "Prophet", "Celery", "Redis", "Docker", "AWS EC2", "MLOps", "Data Engineering"]
  },
  {
    title: "Alkanz – Digital Gold Mobile Application",
    company: "Dynamic Systems and Advanced Technologies",
    period: "Project",
    description: "Backend APIs for a digital gold selling app.",
    highlights: [
      "Developed backend APIs for a digital gold selling app using Django REST Framework.",
      "Integrated Gold API for real-time rate updates and implemented Redis caching and Celery for efficient background processing.",
      "Deployed as a Docker image on VM.",
      "Enabled secure, real-time gold transactions and ensured scalable, high-performance backend operations."
    ],
    tech: ["Python", "Django REST", "Redis", "Celery", "Docker", "AWS EC2", "S3", "CI/CD", "Postman"]
  },
  {
    title: "AI-Driven Supply Chain Disruption Predictor (Intern)",
    company: "Infosys Springboard Project",
    period: "11/2024 - 01/2025",
    description: "AI system to monitor global wheat supply chain data and predict disruptions.",
    highlights: [
      "Built an AI system to monitor global wheat supply chain data, predict disruptions, and optimize inventory levels.",
      "Implemented REST API pipelines to collect real-time data.",
      "Applied NLP & LLMs (LLaMA3, BERT) for sentiment analysis and risk evaluation.",
      "Developed an inventory optimization framework based on risk scores to proactively mitigate disruptions.",
      "Integrated Discord API for real-time alerts."
    ],
    tech: ["Python", "FastAPI", "NLP", "LLM", "Hugging Face", "LLaMA3", "BERT", "Data Collection"]
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-[#0f0f13] border border-gray-800 relative overflow-hidden group hover:border-purple-500/50 transition-colors"
          >
            {/* Gradient Line Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Briefcase size={22} className="text-purple-500 min-w-[22px]" />
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-gray-400">
                  <Building2 size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-300">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 md:mt-0 whitespace-nowrap bg-gray-900/50 px-3 py-1 rounded-full h-fit border border-gray-800">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <p className="text-gray-400 mb-6 italic border-l-2 border-gray-800 pl-4 py-1">
              {exp.description}
            </p>
            
            <ul className="space-y-3 mb-6 text-gray-300">
              {exp.highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
              {exp.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-[#1a1a20] text-purple-300 border border-purple-500/20 hover:bg-purple-900/20 transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;