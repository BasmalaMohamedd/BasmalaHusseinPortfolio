import React from 'react'
import { MdCode, MdOutlineLayers, MdSettings } from "react-icons/md";

const skillsData = [
  {
    icon: <MdCode className="text-3xl text-portfolio-plum" />,
    title: "Frontend Development",
    description: "2 years of experience in frontend development, building responsive and user-friendly web applications using modern technologies like React and angular. developing multilangual websites and ltr to rtl websites. integrating APIs and working with state management libraries like Redux."
  },
  {
    icon: <MdOutlineLayers className="text-3xl text-portfolio-plum" />,
    title: "Fullstack Development",
    description: ""
  },
  {
    icon: <MdSettings className="text-3xl text-portfolio-plum" />,
    title: "Software Engineering",
    description: ""
  }
];

const AboutSection = ({ref}) => {
  return (
    <div ref={ref} className="bg-portfolio-obsidian border border-portfolio-plum/30 p-8 sm:p-12 shadow-2xl text-white">
      <h1 className="text-4xl font-bold text-left mb-4">About Me</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-6 bg-gradient-to-r from-portfolio-obsidian/50 to-portfolio-plum/10 border border-portfolio-plum/20 rounded-lg  transition-all"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold capitalize mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-400 text-left">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutSection
