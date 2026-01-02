import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';


const Particle = () => {
  const [config, setConfig] = useState({
    top: 0,
    size: 0,
    duration: 0,
    delay: 0,
    opacity: 0
  });

  useEffect(() => {
    setConfig({
      top: Math.random() * 100,
      size: Math.random() * 4 + 1, // 1px to 5px
      duration: Math.random() * 20 + 15, // 15s to 35s (slow movement)
      delay: -(Math.random() * 35), // Start at random positions
      opacity: Math.random() * 0.5 + 0.2 // 0.2 to 0.7 opacity
    });
  }, []);

  if (config.duration === 0) return null;

  return (
    <motion.div
      initial={{ x: "110vw", opacity: 0 }}
      animate={{ 
        x: "-10vw", 
        opacity: [0, config.opacity, config.opacity, 0] 
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "linear",
        delay: config.delay
      }}
      className="absolute bg-primary rounded-full blur-[0.5px]"
      style={{
        top: `${config.top}%`,
        width: `${config.size}px`,
        height: `${config.size}px`,
      }}
    />
  );
};

const DustParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(25)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isHovered, setIsHovered] = useState(false);

  const toRotate = [ "Frontend Developer", "Web Developer", "React Developer", "UI/UX Enthusiast" ];
  const DATA_PERIOD = 2000;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      let nextSpeed = 100;

      if (isDeleting) {
        nextSpeed = 50;
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        nextSpeed = DATA_PERIOD;
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500;
      }

      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-indigo-50 overflow-hidden px-6 md:px-12 lg:px-20 relative"
    >
     {/* Dust Particles Background */}
    <DustParticles />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-8 max-w-7xl mx-auto relative z-10">
        
        {/* Content Side */}
        <div className="flex-1 flex flex-col items-start text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Enhanced Heading */}
            <h1 className="text-5xl md:text-5xl font-bold text-heading-900 leading-tight mb-6 tracking-tight">
              Hi, It's <span className="text-primary md:text-6xl pl-3 relative inline-block">
                Amit.
                {/* Ambient Glow */}
                <span className="absolute -inset-2 blur-3xl bg-primary/20 -z-10 rounded-full opacity-50"></span>
                {/* Decorative Underline */}
                <svg className="absolute w-[110%] h-4 -bottom-1 -left-2 text-primary pl-3 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>
            
            <h3 className="text-xl md:text-3xl font-medium text-text-600 mb-6 flex items-center h-[1.5em] overflow-hidden">
              <span className="mr-2 whitespace-nowrap">{PERSONAL_INFO.tagline}</span>
              <span className="text-primary font-bold relative">
                {text}
                <span className="absolute -right-[6px] top-[10%] h-[80%] w-[5px] bg-primary animate-pulse"></span>
              </span>
            </h3>
            
            <p className="text-base lg:text-lg font-normal text-text-600 leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="flex gap-4 mb-10">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-border-100 text-primary border border-primary shadow-[0_0_15px_rgba(0,255,238,0.3)] hover:bg-primary hover:text-main-bg hover:shadow-[0_0_20px_rgba(0,255,238,0.5)] transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-border-100 text-primary border border-primary shadow-[0_0_15px_rgba(0,255,238,0.3)] hover:bg-primary hover:text-main-bg hover:shadow-[0_0_20px_rgba(0,255,238,0.5)] transition-all duration-300">
                <Github size={20} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/docs/Amit-Software-updated.pdf" 
                download ="Amit_Kumar_Chaudhary_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-indigo-50 rounded-lg text-main-bg font-bold shadow-soft hover:shadow-glow hover:bg-main-bg hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 border border-primary"
              >
                <FileText size={18} />
                Download CV
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 bg-border-100 text-heading-900 border border-border-200 rounded-lg text-heading-900 font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                Contact Me
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="flex-1 flex justify-center md:justify-end relative">
        <motion.div 
            className="relative z-10 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
             {/* Background Blob - Parallax Floating */}
          <motion.div 
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-primary/10 rounded-full transform translate-x-4 translate-y-4 -z-10 blur-xl"
            ></motion.div>

             {/* Main Image - Floating */}
            <motion.img 
              animate={{ 
                y: [0, -15, 0],

                boxShadow: isHovered 
                  ? "0 0 30px 10px rgba(0, 255, 238, 0.6)" 
                  : "0 0 30px 5px rgba(0, 247, 233, 0.4)"
              }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 0.3 }
              }}
              src={PERSONAL_INFO.profileImage}
              alt="Amit Kumar Chaudhary" 
              className="w-[60vw] md:w-[28vw] max-w-[400px] aspect-square mr-6 rounded-full object-cover relative z-10 bg-indigo-50"
            />
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;