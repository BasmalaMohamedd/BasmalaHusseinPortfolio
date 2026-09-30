import { useState } from 'react'

import './App.css'
import DevProgress from './components/DevProgress'
import Navbar from './components/ui/Navbar'
import Profile from './sections/Profile'

function App() {
  

  return (
    <>
      <Navbar />
      <main>
        <Profile />
        <div></div>
        <div></div>
      </main>
      <DevProgress />
    </>
  )
}

export default App
