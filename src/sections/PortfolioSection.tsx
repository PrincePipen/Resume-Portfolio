import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'project1',
      title: 'AI Chatbot Project',
      category: 'Web Application',
      description: 'A web-based interactive AI chatbot developed using JavaScript, CSS, and HTML. Integrates the Google Generative AI API to provide intelligent and context-aware responses.',
      image: '/assets/images/proj1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google AI API'],
      demoLink: 'https://ai-chatbot-project-blue.vercel.app/',
      codeLink: 'https://github.com/PrincePipen/AI-Chatbot-Project'
    },
    {
      id: 'project2',
      title: 'DnD Project',
      category: 'Web Application',
      description: 'An immersive web-based Dungeons & Dragons experience powered by AI. This application combines the classic tabletop RPG experience with modern AI technology to create dynamic, personalized adventures.',
      image: '/assets/images/proj2.jpg',
      technologies: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5'],
      codeLink: 'https://github.com/PrincePipen/DnD-Project-.-in-progress'
    },
    {
      id: 'project3',
      title: 'Astronomy Explorer',
      category: 'Web Application',
      description: 'An interactive web-based platform that combines real-time space exploration with AI-powered insights. Users can navigate an interactive star map, explore celestial objects, and ask astronomy-related questions with assistance from a generative AI model.',
      image: '/assets/images/proj3.jpg',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'Google Gemini AI', 'FastAPI', 'PostgreSQL'],
      codeLink: 'https://github.com/PrincePipen/Astronomy-Explorer-.-in-progress.git'
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of my recent projects showcasing my skills and experience in creating
            impactful digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  inView,
  delay
}: {
  project: Project;
  inView: boolean;
  delay: number
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-primary/80 backdrop-blur-sm flex flex-col justify-center items-center p-5 text-center text-primary-foreground transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mb-4">{project.description}</p>
          <div className="flex space-x-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <i className="fa-solid fa-globe mr-1" /> Live Demo
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black bg-opacity-30 border border-white text-white rounded-full text-sm font-medium hover:bg-opacity-40 transition-colors"
              >
                <i className="fa-brands fa-github mr-1" /> Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-primary font-medium mb-3">{project.category}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={`${project.id}-${tech}`} className="skill-badge text-xs px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Mobile tap indicator - only visible on mobile */}
        <div className="mt-4 text-center text-sm text-muted-foreground bg-secondary/50 py-2 rounded-lg block md:hidden">
          <i className="fa-solid fa-hand-pointer mr-2"></i>
          Tap to view project details
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
