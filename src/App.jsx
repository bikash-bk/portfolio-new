import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Skill from './components/skills/Skill.jsx'

const App = () => {
  return (
    
    <div className='app'>
<Navbar/>
    <Hero/>
    <Skill/>
    </div>
    
    
    
    
  )
}

export default App