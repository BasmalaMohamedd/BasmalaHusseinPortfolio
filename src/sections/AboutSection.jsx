import React from 'react'
import { MdCode, MdOutlineLayers, MdSettings } from "react-icons/md";

const skillsData = [
  
  {
    icon: <MdSettings className="text-3xl text-portfolio-plum" />,
    title: "Software Engineering",
    description: "Strong foundation in software engineering principles, SDLC, Agile methodologies, UML, design patterns, system architecture, and distributed systems. Experienced in code quality and security testing using SonarQube and Semgrep, alongside workflow tools like Jira, with foundational knowledge in AI and cybersecurity."
  },
  {
    icon: <MdCode className="text-3xl text-portfolio-plum" />,
    title: "Frontend Development",
    description: "2 years of experience building responsive, user-friendly web applications using React and Angular. Developed multilingual and RTL/LTR layout integration, robust API consumption, and advanced state management with Redux."
  },
  {
    icon: <MdOutlineLayers className="text-3xl text-portfolio-plum" />,
    title: "Full-Stack Development",
    description: "Experienced in developing end-to-end web solutions. Built scalable backend services using Node.js and Spring Boot, with practical experience in both SQL and NoSQL database management."
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
