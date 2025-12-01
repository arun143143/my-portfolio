import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, title, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;