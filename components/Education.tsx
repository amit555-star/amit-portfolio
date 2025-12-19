import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#131313]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
           {/* Vertical Line Animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block origin-top"
          ></motion.div>

          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5, type: "spring", stiffness: 50 }}
              whileHover={{ 
                x: 10,
                boxShadow: "0 0 20px rgba(0, 255, 238, 0.4), 0 15px 25px -5px rgba(0, 255, 238, 0.3)"
              }}
              className="relative md:ml-12 bg-slate-100 p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:border-primary transition-all duration-300"
            >
              {/* Dot on line */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + (index * 0.2), type: "spring" }}
                className="absolute -left-[55px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50 border-4 border-slate-200 hidden md:flex items-center justify-center z-10"
              >
                  <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              </motion.div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                        {edu.degree}
                    </h3>
                    <p className="text-lg text-slate-600 mt-1 font-medium">{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-slate-50 text-xs font-semibold tracking-wide rounded-full text-slate-500 border border-slate-200">
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-primary bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 whitespace-nowrap shadow-sm">
                  <Calendar size={16} />
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;