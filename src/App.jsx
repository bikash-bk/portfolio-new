import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Skill from './components/skills/Skill.jsx'
import Experience from '../src/components/experiences/Experience.jsx'
import Project from './components/projects/Project.jsx'


const App = () => {
  return (
    
    <div className='app'>
<Navbar/>
    <Hero/>
    <Skill/>
    <Experience/>
    <Project/>
   
    </div>
    
    
    
    
  )
}

export default App