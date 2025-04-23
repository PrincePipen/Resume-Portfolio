import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left column - Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-tl-3xl rounded-br-3xl transform rotate-6"></div>
              <div className="absolute inset-0 overflow-hidden rounded-tl-3xl rounded-br-3xl border-4 border-secondary shadow-xl bg-card">
                <img
                  src="/assets/images/cOd.png"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <div>
            <motion.h2
              className="section-heading"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-6"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              As a dedicated Computer Science student, I bring a solid foundation in web development and programming to every project. I'm passionate about crafting clean, efficient, and accessible digital experiences that solve real problems.
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              My expertise in front-end technologies like HTML, CSS, JavaScript, and React allows me to create responsive, user-friendly interfaces. I approach each project with careful attention to detail, strong problem-solving skills, and a commitment to continuous improvement.
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              I believe in building solutions that balance technical excellence with intuitive user experience, and I'm eager to apply my skills in a professional environment that values innovation and growth.
            </motion.p>

            {/* Personal Info */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="mb-2"><strong>Name:</strong> Prince Stephen Lacsa</p>
                <p className="mb-2"><strong>Email:</strong> princepipen@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> +63 995 631 7375</p>
              </div>
              <div>
                <p className="mb-2"><strong>Location:</strong> Cavite City, Philippines</p>
                <p className="mb-2"><strong>Degree:</strong> BS Computer Science</p>
                <p className="mb-2"><strong>Languages:</strong> English, Filipino</p>
              </div>
            </motion.div>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-colors"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <i className="fa-solid fa-envelope mr-2" /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Stats section has been removed */}
      </div>
    </section>
  );
};

export default AboutSection;
