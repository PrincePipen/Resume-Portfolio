import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(0,101,255,0.1),rgba(120,0,255,0.05),rgba(0,0,0,0))]" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Hello, I'm <span className="text-primary">Prince Stephen</span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 h-16">
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  2000,
                  'Front-end Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-muted-foreground"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
              As a dedicated Computer Science student, I bring a solid foundation in web development and programming to every project. 
              I'm passionate about crafting clean, efficient, and accessible digital experiences that solve real problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/20 to-primary/30 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full overflow-hidden bg-secondary flex items-center justify-center shadow-inner">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm font-medium text-muted-foreground mb-2">Scroll Down</span>
            <i className="fa-solid fa-chevron-down text-primary animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;