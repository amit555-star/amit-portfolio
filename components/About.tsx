import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Code, Monitor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#131313]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-bold text-heading-900 mb-4"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              {/* Updated Glow to use only primary color */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-heading-900/0 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="images/about.jpg" 
                alt="Profile" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2 border border-border-200"
              />
            </motion.div>

            {/* Text Section */}
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-heading-900"
              >
                A journey from <span className="text-primary">Sales</span> to <span className="text-primary">Development</span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="text-text-600 leading-relaxed text-lg"
              >
                {PERSONAL_INFO.about}
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 0 20px rgba(0, 255, 238, 0.4), 0 15px 25px -5px rgba(0, 255, 238, 0.3)"
                  }}
                  className="p-6 bg-border-100 rounded-xl border border-border-200 shadow-sm hover:border-primary transition-all duration-300"
                >
                  <Monitor className="text-primary mb-3" size={32} />
                  <h4 className="font-bold text-lg text-heading-900 mb-1">Responsive UI</h4>
                  <p className="text-sm text-text-600">Pixel-perfect mobile-first designs</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ 
                  y: -5,
                  boxShadow: "0 0 20px rgba(0, 255, 238, 0.4), 0 15px 25px -5px rgba(0, 255, 238, 0.3)"
                  }}
                  className="p-6 bg-border-100 rounded-xl border border-border-200 shadow-sm hover:border-primary transition-all duration-300"
                >
                  <Code className="text-primary mb-3" size={32} />
                  <h4 className="font-bold text-lg text-heading-900 mb-1">Clean Code</h4>
                  <p className="text-sm text-text-600">Maintainable & Scalable architecture</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;