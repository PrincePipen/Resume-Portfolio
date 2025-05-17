import React, { forwardRef } from 'react';

// Define types for our resume sections
interface Skill {
  name: string;
  percentage: number;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

// The Resume PDF component that will be converted to PDF
const ResumePDF = forwardRef<HTMLDivElement>((props, ref) => {
  // Personal details
  const personalDetails = {
    name: "Prince Stephen Lacsa",
    title: "Computer Science Student | Front-end Developer",
    location: "Cavite City, Philippines",
    email: "princepipen@gmail.com",
    phone: "+63 995 631 7375",
    linkedin: "linkedin.com/feed/",
    github: "github.com/PrincePipen",
  };

  // Technical Skills
  const technicalSkills: Skill[] = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 88 },
    { name: 'Node.js', percentage: 80 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'UI/UX Design', percentage: 75 },
  ];

  // Soft Skills
  const softSkills: Skill[] = [
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 95 },
  ];

  // Other Skills
  const otherSkills = [
    'Git & GitHub',
    'TailwindCSS',
    'Vue.js',
    'Figma',
  ];

  // Work Experience
  const experiences: Experience[] = [
    {
      title: 'Junior Web Developer',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      points: [
        'Designed and developed web applications as part of university projects and personal side projects, utilizing modern JavaScript frameworks and responsive design principles',
        'Focused on creating intuitive user interfaces and optimizing performance',
        'Worked closely with peers to refine project workflows, implement best coding practices, and enhance overall user experience'
      ],
    },
    {
      title: 'Frontend Developer & UI/UX Designer',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      points: [
        'Designed and developed responsive web applications using HTML, CSS, and JavaScript, ensuring seamless functionality across various devices',
        'Collaborated with programmers and team members to implement user-friendly interfaces that align with modern design principles',
        'Focused on accessibility, usability, and creating intuitive digital experiences that enhance user engagement'
      ],
    },
    {
      title: 'Web Designer (University & Personal Projects)',
      company: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: 'Sept 2022 - Present',
      points: [
        'Designed website mockups and transformed them into functional web pages using modern front-end technologies',
        'Gained experience in UI/UX principles, responsive design, and collaborating with programmers',
        'Created visually appealing and user-friendly websites'
      ],
    }
  ];

  // Education
  const education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Lyceum of the Philippines University',
      location: 'Cavite, Philippines',
      date: '2022 - 2026 (Expected)',
    }
  ];

  // Certifications
  const certifications = [
    'Certificate of Recognition - IT Specialist, Database Passer (Certiport)',
  ];

  // Projects - just a simplified version
  const projects = [
    {
      title: 'AI Chatbot Project',
      description: 'A web-based interactive AI chatbot using Google Generative AI API',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google AI API'],
    },
    {
      title: 'DnD Project',
      description: 'An immersive web-based Dungeons & Dragons experience powered by AI',
      technologies: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    },
    {
      title: 'Astronomy Explorer',
      description: 'Interactive platform for space exploration with AI-powered insights',
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'Google Gemini AI'],
    }
  ];

  return (
    <div ref={ref} className="pdf-container bg-white text-black p-8 max-w-[800px] mx-auto">
      {/* Header/Contact Section */}
      <header className="mb-6 pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-2">{personalDetails.name}</h1>
        <p className="text-center text-gray-600 mb-4">{personalDetails.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-gray-500"></i>
            <span>{personalDetails.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-envelope text-gray-500"></i>
            <span>{personalDetails.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-phone text-gray-500"></i>
            <span>{personalDetails.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-brands fa-linkedin text-gray-500"></i>
            <span>{personalDetails.linkedin}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-brands fa-github text-gray-500"></i>
            <span>{personalDetails.github}</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        {/* Left column */}
        <div className="col-span-1">
          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Technical Skills</h2>
            <ul className="space-y-1">
              {technicalSkills.map((skill) => (
                <li key={skill.name} className="text-sm">
                  <span className="font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Soft Skills</h2>
            <ul className="space-y-1">
              {softSkills.map((skill) => (
                <li key={skill.name} className="text-sm">
                  <span className="font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Other Skills</h2>
            <ul className="space-y-1">
              {otherSkills.map((skill) => (
                <li key={skill} className="text-sm">{skill}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Education</h2>
            {education.map((edu) => (
              <div key={edu.degree} className="mb-3">
                <h3 className="font-medium text-sm">{edu.degree}</h3>
                <p className="text-sm">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.location}</p>
                <p className="text-sm text-gray-600">{edu.date}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Certifications</h2>
            <ul className="space-y-1">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm">{cert}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column - 2/3 width */}
        <div className="col-span-2">
          {/* Work Experience Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Work Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.title} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{exp.title}</h3>
                  <span className="text-sm text-gray-600">{exp.date}</span>
                </div>
                <p className="text-sm">{exp.company}, {exp.location}</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  {exp.points.map((point, index) => (
                    <li key={index} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Projects</h2>
            {projects.map((project) => (
              <div key={project.title} className="mb-4">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm mt-1">
                  <span className="font-medium">Technologies: </span>
                  {project.technologies.join(', ')}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Footer with page number */}
      <footer className="mt-6 pt-4 border-t border-gray-300 text-center text-sm text-gray-500">
        <p>Prince Stephen Lacsa - Resume</p>
      </footer>
    </div>
  );
});

ResumePDF.displayName = 'ResumePDF';

export default ResumePDF;
