import React from 'react'

const LinkItem = ({ icon, label, href }) => {
  return (
    <div>
      <a className='flex items-center space-x-2 border m-4 p-2 border-portfolio-teal shadow ' href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span>{label}</span>
      </a>
    </div>
  )
}

export default LinkItem
