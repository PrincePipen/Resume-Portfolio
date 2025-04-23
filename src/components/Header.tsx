import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle header background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle section highlighting
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" onClick={() => scrollToSection('home')} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          <span className="text-primary">Port</span>folio
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <MobileMenu
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            navItems={navItems}
          />
        </div>
      </div>
    </motion.header>
  );
};

const MobileMenu = ({
  activeSection,
  scrollToSection,
  navItems
}: {
  activeSection: string,
  scrollToSection: (id: string) => void,
  navItems: { id: string, label: string }[]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="text-foreground p-2"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
      </button>

      {isOpen && (
        <motion.div
          className="absolute top-16 right-4 bg-card shadow-lg rounded-lg p-4 w-56"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block py-2 px-4 rounded hover:bg-secondary transition-colors ${
                    activeSection === item.id ? 'bg-secondary font-medium text-primary' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
