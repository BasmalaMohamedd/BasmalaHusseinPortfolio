import React from 'react'
import Links from '../components/about/Links'

const Profile = () => {
  return (
    <div className='flex flex-col justify-center m-0 sm:flex-row text-white w-full'>
      <div className='bg-portfolio-obsidian flex-1'>
        <p>Basmala Mohamed Hussein</p>
        <p>Front-End Developer|fresh software engineer graduate</p>

      </div>
      <div className='bg-gradient-to-l from-portfolio-plum to-portfolio-obsidian flex-1'>
        <Links />
        
      </div>
    </div>
  )
}

export default Profile
