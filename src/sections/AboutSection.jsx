import React from 'react'
import SectionLayout from '../components/ui/SectionLayout'
import AboutBody from '../components/about/AboutBody'


const AboutSection = ({ref}) => {
  return (
    <SectionLayout ref={ref} header={"About Me"}>
      <AboutBody />
    </SectionLayout>
    
  )
}

export default AboutSection
