const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
            </h2>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/PrincePipen" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="mailto:princepipen@gmail.com" className="contact-icon" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
