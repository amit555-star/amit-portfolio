import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.name);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-main-bg/90 backdrop-blur-md shadow-sm py-6 border-border-200/50'
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="group text-3xl md:text-4xl font-bold text-heading-900 tracking-tight inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Amit{" "}
        <span className="text-primary 
        transition-all duration-300 
        [text-shadow:0_0_25px_#00ffee]
        group-hover:[text-shadow:0_0_25px_#00ffee]
        ">
          Chaudhary.
        </span>

          <motion.div
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-1"
          >
          </motion.div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`text-base font-medium transition-colors relative group ${
                activeSection === link.name ? 'text-primary' : 'text-text-600 hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 border-b-4 border-primary left-0 h-0.5 bg-primary transition-all duration-300 ${
                activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-heading-900 hover:text-primary focus:outline-none transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-border-100 border-b border-border-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.name ? 'text-primary' : 'text-heading-900 hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;