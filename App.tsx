import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-purple-500/30 selection:text-white animate-fadeIn">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-center py-12 text-gray-400">Loading...</div>}>
        <div className="space-y-12 pb-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </Suspense>
      
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900 bg-[#020202]">
        <p>© {new Date().getFullYear()} Arun Prasath L. All rights reserved.</p>
        <p className="mt-2 text-gray-700">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;