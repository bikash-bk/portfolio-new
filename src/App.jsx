import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Skill from './components/skills/Skill.jsx'
import Experience from './assets/experiences/Experience.jsx'

const App = () => {
  return (
    
    <div className='app'>
<Navbar/>
    <Hero/>
    <Skill/>
    <Experience/>
    </div>
    
    
    
    
  )
}

export default App