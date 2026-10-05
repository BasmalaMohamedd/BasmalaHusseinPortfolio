import React from 'react'
import Links from '../components/hero/Links'

const HeroSection = () => {
  return (
    <div className="w-full bg-portfolio-obsidian border border-portfolio-plum/30 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-white relative overflow-hidden">
  
  <div className=" bg-portfolio-plum/20 rounded-full blur-3xl " />

  
  <div className="flex-2 flex-col gap-3 z-10">
    
    
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-portfolio-plum/20 border border-portfolio-plum/40 text-xs font-medium text-portfolio-plum-light w-fit">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      Available for Opportunities
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
      Basmala Mohamed Hussein
    </h1>
    
    <p className="text-lg text-gray-300 font-medium">
      Front-End Developer <span className="text-portfolio-plum">|</span> Fresh Software Engineering Graduate
    </p>
    <p></p>

  </div>

  <div className="flex-1 flex-col gap-4 z-10 w-full lg:w-auto">
    
    <div className="bg-gradient-to-r from-portfolio-plum/20 to-transparent p-4 rounded-xl border border-portfolio-plum/30 backdrop-blur-sm">
      <Links />
    </div>
  </div>

</div>
  )
}

export default HeroSection
