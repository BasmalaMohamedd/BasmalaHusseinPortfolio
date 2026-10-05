import React, { useState } from 'react'


const Navbar = ({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }) => {
    const [navList] = useState([
        { name: 'About', scrollTo: scrollToAbout },
        { name: 'Projects', scrollTo: scrollToProjects },
        { name: 'Skills', scrollTo: scrollToSkills },
        { name: 'Contact', scrollTo: scrollToContact },
    ]);
  return (
    <header className='bg-portfolio-obsidian text-portfolio-alabaster border-b border-portfolio-plum'>
        <nav className='flex justify-around items-center'>
            <div>
                <ul className='flex gap-4 p-4 justify-center'>
                    {navList.map((item) => (
                        <li key={item.name} className='hover:text-white text-lg text-gray-400 font-bold transition-colors duration-300'>
                            <button onClick={item.scrollTo} className='hover:text-white text-lg text-gray-400 font-bold transition-colors duration-300'>
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar
