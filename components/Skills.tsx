import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger for one-by-one effect
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start zoomed out
    show: { 
      opacity: 1, 
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeOut" // Smooth zoom
      }
    }
  };

  const skillIcons: { [key: string]: string } = {
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "C Language": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "Python (Basic)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "AWS (Basic)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  };

  return (
    <section id="skills" className="py-24 bg-[#131313]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                // Cyan outline glow + Cyan bottom shadow
                boxShadow: "0 0 20px rgba(0, 255, 238, 0.4), 0 15px 25px -5px rgba(0, 255, 238, 0.3)"
              }}
              className="group p-6 bg-slate-100 rounded-xl border border-slate-200 hover:border-primary shadow-sm transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default"
            >
              <div className="w-16 h-16 mb-4 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                  {skillIcons[skill.name] ? (
                    <img 
                        src={skillIcons[skill.name]} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span className="font-bold text-lg text-primary">{skill.name.charAt(0)}</span>
                  )}
              </div>

              <div className="font-semibold text-lg text-slate-800 group-hover:text-primary transition-colors mb-2">
                {skill.name}
              </div>
              
              <span className="text-xs font-medium text-slate-600 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full group-hover:bg-indigo-50 group-hover:text-primary transition-colors border border-slate-200">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;