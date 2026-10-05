import { useRef} from 'react'

import DevProgress from './components/DevProgress'
import Navbar from './components/ui/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ContactSection from './sections/ContactSection'

function App() {
  const aboutSectionRef = useRef();
  const projectsSectionRef = useRef();
  const skillsSectionRef = useRef();
  const contactSectionRef = useRef();

  function scrollToSection(sectionRef){
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar 
      scrollToAbout={() => scrollToSection(aboutSectionRef)}
      scrollToProjects={() => scrollToSection(projectsSectionRef)}
      scrollToSkills={() => scrollToSection(skillsSectionRef)}
      scrollToContact={() => scrollToSection(contactSectionRef)}
      />
      <main>
        <HeroSection />
        <AboutSection ref={aboutSectionRef} />
        <ProjectsSection ref={projectsSectionRef} />
        <SkillsSection ref={skillsSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </main>
      <DevProgress />
    </>
  )
}

export default App
