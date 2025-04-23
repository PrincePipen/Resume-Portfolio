import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;
