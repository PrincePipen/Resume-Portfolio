import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  location: string;
  date: string;
  description: string[];
  icon?: string;
}

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience: TimelineItem[] = [
    {
      id: 'job-1',
      title: 'Junior Web Developer',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      description: [
        'Designed and developed web applications as part of university projects and personal side projects, utilizing modern JavaScript frameworks and responsive design principles',
        'Focused on creating intuitive user interfaces and optimizing performance',
        'Worked closely with peers to refine project workflows, implement best coding practices, and enhance overall user experience'
      ],
      icon: 'fa-solid fa-laptop-code'
    },
    {
      id: 'job-2',
      title: 'Frontend Developer & UI/UX Designer',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      description: [
        'Designed and developed responsive web applications using HTML, CSS, and JavaScript, ensuring seamless functionality across various devices',
        'Collaborated with programmers and team members to implement user-friendly interfaces that align with modern design principles',
        'Focused on accessibility, usability, and creating intuitive digital experiences that enhance user engagement'
      ],
      icon: 'fa-solid fa-code'
    },
    {
      id: 'job-3',
      title: 'Web Designer (University & Personal Projects)',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      description: [
        'Designed website mockups and transformed them into functional web pages using modern front-end technologies',
        'Gained experience in UI/UX principles, responsive design, and collaborating with programmers',
        'Created visually appealing and user-friendly websites'
      ],
      icon: 'fa-solid fa-palette'
    },
  ];

  const education: TimelineItem[] = [
    {
      id: 'edu-1',
      title: 'Bachelor of Science in Computer Science',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: '2022 - 2026 (Expected)',
      description: [
        'Focus on web development and programming',
        'University projects in modern web technologies',
        'Coursework in algorithms, data structures, and UI/UX design'
      ],
      icon: 'fa-solid fa-graduation-cap'
    }
  ];

  const certifications = [
    'Certificate of Recognition - IT Specialist, Database Passer (Certiport)',
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey, educational background, and certifications that have shaped my career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <i className="fa-solid fa-briefcase mr-3 text-primary" />
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-primary/30" />

              {/* Timeline items */}
              <div className="space-y-12">
                {workExperience.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    inView={inView}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <i className="fa-solid fa-graduation-cap mr-3 text-primary" />
              Education
            </h3>

            <div className="relative mb-16">
              {/* Timeline line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-primary/30" />

              {/* Timeline items */}
              <div className="space-y-12">
                {education.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    inView={inView}
                    delay={index * 0.2 + 0.4}
                  />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <i className="fa-solid fa-certificate mr-3 text-primary" />
                Certifications
              </h3>

              <motion.ul
                className="space-y-3 pl-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3" />
                    <span>{cert}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  inView,
  delay
}: {
  item: TimelineItem;
  inView: boolean;
  delay: number
}) => {
  return (
    <motion.div
      className="relative flex"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 w-11 mt-1 flex justify-center">
        <div className="w-11 h-11 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
          <i className={`${item.icon} text-primary`} />
        </div>
      </div>

      {/* Content */}
      <div className="ml-16">
        <h4 className="text-xl font-semibold">{item.title}</h4>
        {item.company && (
          <p className="text-primary font-medium">{item.company}</p>
        )}
        <div className="flex flex-wrap items-center text-muted-foreground text-sm mt-1">
          <span className="flex items-center">
            <i className="fa-solid fa-location-dot mr-1" /> {item.location}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <i className="fa-regular fa-calendar mr-1" /> {item.date}
          </span>
        </div>

        <ul className="mt-3 space-y-1">
          {item.description.map((point, index) => (
            <li key={`${item.id}-point-${index}`} className="flex items-start">
              <i className="fa-solid fa-angle-right text-primary text-xs mt-1.5 mr-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
