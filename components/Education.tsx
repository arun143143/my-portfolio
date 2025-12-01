import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import Section from './Section';
import { EducationItem } from '../types';

const education: EducationItem[] = [
  {
    degree: "Master's Degree in Data Science",
    institution: "St. Joseph's College Trichy",
    period: "06/2022 - 04/2024"
  },
  {
    degree: "Bachelor Degree in Physics",
    institution: "Loyola College Chennai",
    period: "06/2019 - 05/2022"
  }
];

const certifications = [
  { name: "Google Data Analytics", issuer: "Coursera" },
  { name: "Python Certification", issuer: "HackerRank" },
  { name: "Machine Learning", issuer: "Perfect E Learning" },
  { name: "GenAI Mastermind Workshop", issuer: "Out Skills" }
];

const achievements = [
  { title: "Spearheaded Data Visualization Event (Datos)", desc: "Organized and led a successful data visualization event overseeing all aspects." },
  { title: "1st Place - Data Visualization Event", desc: "Hosted by Bishop Heber College in Power BI." },
  { title: "2nd Place - Loyola College Event", desc: "Secured 2nd place at data visualization event in Power BI." }
];

const Education: React.FC = () => {
  return (
    <div className="bg-[#080808]">
      <Section id="education" title="Education & Achievements">
        
        {/* Education Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="text-yellow-500" /> Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-[#111] border border-gray-800 hover:border-yellow-600/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center mb-4 text-yellow-500">
                  <GraduationCap size={24} />
                </div>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                <div className="mt-4 text-sm">
                  <span className="text-gray-500">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Achievements */}
          <div>
             <h3 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
              <Award className="text-yellow-500" /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="p-4 rounded-lg bg-[#111] border-l-4 border-yellow-500"
                >
                  <h5 className="font-bold text-white">{item.title}</h5>
                  <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center text-white mb-8">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-[#0f0f13] border border-gray-800 flex flex-col justify-center items-center text-center hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-blue-400 mb-2">
                    <Award size={20} />
                  </span>
                  <h5 className="text-white font-medium text-sm">{cert.name}</h5>
                  <span className="text-xs text-gray-500 mt-1 px-2 py-0.5 bg-gray-900 rounded-full">{cert.issuer}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Education;