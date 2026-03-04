import React, { useState } from 'react'
import './Project.css'
import { projects } from '../../Constant'

const Project = () => {
  const [click ,setClick] = useState()
  const handleClick=()=>{
    setClick("hellow world")
  }
  return (
    <div className='project'>

        <div className='project-tittle'>
<h1 className='project-heading'>PROJECTS</h1>
<div className='project-hr'></div>
<p className='project-desc '>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>


        
    </div>

    {projects.map((item)=>(
      <div className='project-container'>
        <h1>hellow world</h1>
        
      </div>
    ))}


    </div>

    
    
  )
}

export default Project