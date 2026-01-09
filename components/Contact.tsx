import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#131313] pt-24 pb-24 border-t border-border-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-heading-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-text-600 max-w-xl mx-auto text-lg"
          >
            Have a project in mind or just want to connect? Let's create something amazing together.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-border-100 p-8 rounded-2xl border border-border-200 shadow-lg h-full"
          >
            <h3 className="text-2xl font-bold text-heading-900">Contact Information</h3>
            <p className="text-text-600 leading-relaxed">
              I'm actively seeking new opportunities to contribute my skills. Feel free to reach out via email or social media.
            </p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="p-4 bg-indigo-50 rounded-full text-primary group-hover:bg-primary group-hover:text-main-bg transition-colors duration-300">
                <Mail size={24} />
              </div>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg text-text-700 group-hover:text-primary transition-colors font-medium">
                {PERSONAL_INFO.email}
              </a>
            </motion.div>

            <div className="flex gap-4 pt-6">
              <motion.a
                href={PERSONAL_INFO.socials.Github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-main-bg rounded-full text-primary border border-primary shadow-[0_0_15px_rgba(0,255,238,0.3)] hover:bg-primary hover:text-main-bg hover:shadow-[0_0_25px_rgba(0,255,238,0.5)] transition-all duration-300"
                aria-label="Github"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.socials.Linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-main-bg rounded-full text-primary border border-primary shadow-[0_0_15px_rgba(0,255,238,0.3)] hover:bg-primary hover:text-main-bg hover:shadow-[0_0_25px_rgba(0,255,238,0.5)] transition-all duration-300"
                aria-label="Linkedin"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-border-100 p-8 rounded-2xl border border-border-200 shadow-lg h-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg bg-main-bg border border-border-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-heading-900 transition-all placeholder:text-text-500 hover:border-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg bg-main-bg border border-border-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-heading-900 transition-all placeholder:text-text-500 hover:border-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-main-bg border border-border-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-heading-900 transition-all placeholder:text-text-500 hover:border-primary"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            <motion.button
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3.5 bg-main-bg text-primary font-bold text-lg rounded-lg shadow-soft hover:shadow-glow hover:bg-primary hover:text-main-bg transition-all duration-300 flex items-center justify-center gap-2 border border-primary"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>

        <div className="pt-12 text-center mt-12">
          <p className="text-text-700 text-sm font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;