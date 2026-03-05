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

    <div style={{display:"grid" ,gridTemplateColumns: "1fr 1fr 1fr" ,marginLeft:"50px"}}>
      {projects.map((item)=>(
      <div className='project-container'>
        <div style={{height:"40%" ,justifyContent:"center", alignItems:"center", display:"flex"}}>
          <img src={item.image} alt="" className='project-section-image' />
        </div>
        <div style={{height:"60%"}}></div>

        
        
      </div>
    ))}

    </div>

    

    </div>

    
    
  )
}

export default Project