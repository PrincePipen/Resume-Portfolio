import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  icon?: string;
}

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const techSkills: Skill[] = [
    { name: 'HTML/CSS', percentage: 95, color: 'from-blue-500 to-blue-600', icon: 'fa-brands fa-html5' },
    { name: 'JavaScript', percentage: 90, color: 'from-yellow-500 to-yellow-600', icon: 'fa-brands fa-js' },
    { name: 'React', percentage: 88, color: 'from-cyan-500 to-cyan-600', icon: 'fa-brands fa-react' },
    { name: 'Node.js', percentage: 80, color: 'from-green-500 to-green-600', icon: 'fa-brands fa-node-js' },
    { name: 'TypeScript', percentage: 85, color: 'from-blue-600 to-blue-700', icon: 'fa-brands fa-digital-ocean' },
    { name: 'UI/UX Design', percentage: 75, color: 'from-purple-500 to-purple-600', icon: 'fa-solid fa-palette' },
  ];

  const softSkills: Skill[] = [
    { name: 'Communication', percentage: 90, color: 'from-primary to-blue-700', icon: 'fa-solid fa-comments' },
    { name: 'Teamwork', percentage: 95, color: 'from-green-500 to-green-600', icon: 'fa-solid fa-users' },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Responsive Design',
    'TailwindCSS',
    'Vue.js',
    'Figma',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I've acquired and refined various skills throughout my career.
            Below is a showcase of my proficiency in different areas.
          </p>
        </div>

        <div ref={ref}>
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <i className="fa-solid fa-code mr-3 text-primary" />
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  inView={inView}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <i className="fa-solid fa-brain mr-3 text-primary" />
              Soft Skills
            </h3>

            <div className="flex justify-center gap-6">
              {softSkills.map((skill, index) => (
                <div className="w-full max-w-[250px]" key={skill.name}>
                  <SkillCard
                    skill={skill}
                    inView={inView}
                    delay={index * 0.1 + 0.3}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <i className="fa-solid fa-plus mr-3 text-primary" />
              Other Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <motion.span 
                  key={skill} 
                  className="skill-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, inView, delay }: { skill: Skill; inView: boolean; delay: number }) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col items-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4`}>
        {skill.icon && <i className={`${skill.icon} text-2xl`} />}
      </div>
      <h4 className="font-medium text-center">{skill.name}</h4>
    </motion.div>
  );
};

export default SkillsSection;
