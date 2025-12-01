import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-purple-500/30 selection:text-white"
    >
      <Navbar />
      <Hero />
      <div className="space-y-12 pb-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
      
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900 bg-[#020202]">
        <p>© {new Date().getFullYear()} Arun Prasath L. All rights reserved.</p>
        <p className="mt-2 text-gray-700">Built with React & Tailwind CSS</p>
      </footer>
    </motion.div>
  );
}

export default App;