import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Check } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#131313]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary font-semibold tracking-wider uppercase text-sm"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-heading-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-text-600 max-w-2xl mx-auto"
          >
            A selection of my recent work focusing on functionality and design.
          </motion.p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-12 items-center`}
            >
              {/* Image Side */}
              <motion.div 
                className="w-full md:w-1/2"
              >
                <div className="relative group w-full">
                  {/* Decorative Border Box */}
                  <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  
                  {/* Glow Effect - Removed Purple */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-border-100/10 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border-200 bg-border-100 z-10 transform transition-transform duration-500 group-hover:-translate-y-2 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-semibold tracking-wide text-primary bg-indigo-50 rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-heading-900">
                  {project.title}
                </h3>
                
                <p className="text-text-600 text-lg leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-start gap-3 text-text-600"
                        >
                            <div className="mt-1 p-0.5 rounded-full bg-indigo-50 text-primary">
                                <Check size={14} />
                            </div>
                            <span>{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2.5 bg-primary text-main-bg font-bold rounded-lg shadow-soft hover:shadow-glow hover:bg-main-bg hover:text-primary transition-all duration-300 border border-primary"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2.5 bg-border-100 text-text-600 border border-border-200 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors shadow-sm hover:shadow-md"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;