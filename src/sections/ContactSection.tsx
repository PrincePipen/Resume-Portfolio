import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: 'fa-solid fa-location-dot', title: 'Location', content: 'Cavite City, Philippines' },
    { icon: 'fa-solid fa-envelope', title: 'Email', content: 'princepipen@gmail.com' },
    { icon: 'fa-solid fa-phone', title: 'Phone', content: '+63 995 631 7375' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/feed/' },
    { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/PrincePipen' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm currently available for freelance work and career opportunities. Feel free to reach out using any of the methods below.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact Form */}
          <motion.div
            className="bg-card rounded-xl overflow-hidden shadow-md border border-border p-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin mr-2" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <i className="fa-solid fa-check mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {formStatus === 'error' && (
                <p className="text-destructive text-sm mt-2">
                  <i className="fa-solid fa-triangle-exclamation mr-1" />
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right column - Contact Information */}
          <div className="space-y-8">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                    <i className={`${info.icon} text-primary`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl overflow-hidden shadow-md border border-border p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <p className="text-muted-foreground mb-4">Connect with me on social media platforms</p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-briefcase text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Available for Opportunities</h4>
                  <p className="text-muted-foreground text-sm">
                    I'm currently seeking opportunities in:
                    <ul className="mt-2 space-y-1">
                      <li><i className="fa-solid fa-check-circle text-primary mr-2"></i>Web Development Projects</li>
                      <li><i className="fa-solid fa-check-circle text-primary mr-2"></i>UI/UX Design Collaboration</li>
                      <li><i className="fa-solid fa-check-circle text-primary mr-2"></i>Frontend Development Roles</li>
                      <li><i className="fa-solid fa-check-circle text-primary mr-2"></i>Computer Science Internships</li>
                    </ul>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
