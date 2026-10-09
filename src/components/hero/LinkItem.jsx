import React from 'react'

const LinkItem = ({ icon, label, href, download }) => {
  return (
    <div>
      <a className=' text-2xl space-x-2 m-2 p-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-portfolio-plum/20 border border-portfolio-plum/40 font-medium text-portfolio-plum-light w-fit ' href={href} target="_blank" rel="noopener noreferrer" download={download}>
        {icon}
        <span>{label}</span>
      </a>
    </div>
  )
}

export default LinkItem
