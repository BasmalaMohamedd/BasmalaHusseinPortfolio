import React from 'react'

const navList = [
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Skills', href: '#' },
  { name: 'Contact', href: '#' },
]

const Navbar = () => {
  return (
    <header className='bg-portfolio-obsidian text-portfolio-alabaster border-b border-portfolio-plum'>
        <nav className='flex justify-around items-center'>
            <div>
                <ul className='flex gap-4 p-4 justify-center'>
                    {navList.map((item) => (
                        <li key={item.name} className='hover:text-white text-lg text-gray-400 font-bold transition-colors duration-300'>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar
