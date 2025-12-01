
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from './Section';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    // Credentials provided by you. 
    // We try to read from .env first, but fallback to these hardcoded values if .env fails.
      const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
      const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Attempting to send email with:", { serviceId, templateId, publicKey });

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS configuration.");
      setErrorMessage("System Error: Email configuration missing.");
      setLoading(false);
      setStatus('error');
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setLoading(false);
          setStatus('success');
          formRef.current?.reset();
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setLoading(false);
          setStatus('error');
          
          // Specific error handling for common issues
          if (error.text?.includes("template_")) {
             setErrorMessage(`Error: Template "${templateId}" not found. Please check your EmailJS dashboard.`);
          } else if (error.status === 400 || error.status === 412) {
             setErrorMessage("Authentication failed. Please check your Public Key.");
          } else {
             setErrorMessage("Failed to send message. Please try again later.");
          }
        },
      );
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Cards */}
        <div className="space-y-4 lg:col-span-1">
          {[
            { 
              icon: <Mail size={24} />, 
              color: "text-pink-500", 
              bg: "bg-pink-900/20", 
              border: "hover:border-pink-500/30",
              label: "Email", 
              value: "arunprasathpuni289@gmail.com",
              href: "mailto:arunprasathpuni289@gmail.com"
            },
            { 
              icon: <Phone size={24} />, 
              color: "text-green-500", 
              bg: "bg-green-900/20", 
              border: "hover:border-green-500/30",
              label: "Phone", 
              value: "+91 9384299657",
              href: "tel:+919384299657"
            },
            { 
              icon: <Linkedin size={24} />, 
              color: "text-blue-500", 
              bg: "bg-blue-900/20", 
              border: "hover:border-blue-500/30",
              label: "LinkedIn", 
              value: "arunprasath-938ar657",
              href: "https://linkedin.com/in/arunprasath-938ar657"
            },
            { 
              icon: <MapPin size={24} />, 
              color: "text-orange-500", 
              bg: "bg-orange-900/20", 
              border: "hover:border-orange-500/30",
              label: "Location", 
              value: "Chennai, Tamil Nadu",
              href: null
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`p-6 rounded-xl bg-[#0f0f13] border border-gray-800 flex items-center gap-4 group ${item.border} transition-all duration-300`}
            >
              <div className={`p-3 ${item.bg} ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <h4 className="text-gray-400 text-sm mb-1">{item.label}</h4>
                {item.href ? (
                  <a href={item.href} target={item.label === 'LinkedIn' ? "_blank" : "_self"} className="text-white font-medium hover:text-purple-400 transition-colors truncate block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 p-8 rounded-2xl bg-[#0f0f13] border border-gray-800 relative overflow-hidden shadow-2xl"
        >
          {/* Success Overlay */}
          {status === 'success' && (
             <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#0f0f13] z-20 flex flex-col items-center justify-center text-center p-8"
             >
               <motion.div 
                initial={{ scale: 0, rotate: -180 }} 
                animate={{ scale: 1, rotate: 0 }} 
                transition={{ type: "spring", stiffness: 200 }}
                className="text-green-500 mb-6"
               >
                 <CheckCircle2 size={80} />
               </motion.div>
               <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
               <p className="text-gray-400 max-w-md">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
             </motion.div>
          )}

          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Send Me a Message <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          </h3>
          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#1a1a20] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#1a1a20] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Project Inquiry"
                required
                className="w-full bg-[#1a1a20] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-[#1a1a20] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Send Message
                </>
              )}
            </motion.button>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-400 text-sm flex items-center gap-3 justify-center mt-4"
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </Section>
  );
};

export default Contact;
