import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const floatingVariant: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-[#050505]">
      {/* Premium Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-purple-600/30 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide">
             Available for Opportunities
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight flex flex-col md:block">
            <span className="text-white relative z-10">Arun</span>
            {/* Added explicit margin-left for desktop, and margin-top for mobile via block display */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient bg-[length:200%_auto] relative z-10 md:ml-6">
              Prasath
            </span>
          </h1>
          {/* Subtle glow behind text */}
          <div className="absolute inset-0 blur-3xl bg-purple-500/10 -z-10 rounded-full scale-110"></div>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl text-gray-300 font-medium mb-8">
          Python Developer <span className="text-purple-500 mx-2">•</span> AI/ML Specialist
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 mb-12 text-sm md:text-base font-light">
          <span className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            +91 9384299657
          </span>
          <span className="hidden md:inline w-px h-4 bg-gray-800"></span>
          <span className="hover:text-pink-400 transition-colors cursor-default">
            Chennai, Tamil Nadu
          </span>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative mb-12 max-w-2xl mx-auto px-4"
        >
          <div className="absolute -left-2 md:-left-4 -top-4 text-6xl text-purple-500/20 font-serif">"</div>
          <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed font-light">
            Building intelligent systems that learn, adapt, and transform data into actionable insights—because the future belongs to those who can teach machines to think.
          </p>
          <div className="absolute -right-2 md:-right-4 -bottom-4 text-6xl text-purple-500/20 font-serif">"</div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf" 
            download="Arun_Prasath_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 border border-purple-500/30 bg-purple-500/10 text-white rounded-full transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] backdrop-blur-sm cursor-pointer hover:border-purple-500"
          >
            <FileDown size={20} /> <span className="font-medium">Download Resume</span>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/arunprasath-938ar657" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-8 py-4 border border-blue-500/30 bg-blue-500/10 text-white rounded-full transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] backdrop-blur-sm hover:border-blue-500"
          >
            <Linkedin size={20} /> <span className="font-medium">LinkedIn</span>
          </motion.a>
          
           <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/arun143143" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-8 py-4 border border-gray-700 bg-gray-800/50 text-white rounded-full transition-all backdrop-blur-sm hover:bg-gray-700/50 hover:border-gray-500"
          >
            <Github size={20} /> <span className="font-medium">GitHub</span>
          </motion.a>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        variants={floatingVariant}
        animate="animate"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} className="opacity-50" />
      </motion.div>
    </div>
  );
};

export default Hero;