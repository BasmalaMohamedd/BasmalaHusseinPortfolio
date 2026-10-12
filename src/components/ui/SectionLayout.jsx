import React from 'react'


//wrapper pattern
const SectionLayout = ({ref, header, children}) => {
  return (
    <div ref={ref} className="bg-portfolio-obsidian border border-portfolio-plum/30 p-8 sm:p-12 shadow-2xl text-white">
      <h1 className="text-4xl font-bold text-left mb-4">{header}</h1>

      {children}
    </div>
  )
}

export default SectionLayout
