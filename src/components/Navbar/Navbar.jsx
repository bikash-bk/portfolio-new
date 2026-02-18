import React from 'react'
import './Navbar.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from 'react-icons/pi';

const Navbar = () => {
  return (
   <>
   <div className='main' >
    <div className='name'>
      <span style={{color:"blue"}} >&lt;</span>
      <span >Bikash</span>
      <span style={{color:"blue"}} >/</span>
      <span>Kumar</span>
      <span style={{color:"blue"}} >&gt;</span>
    </div>

    <div className='main-ul'>
      <ul >
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>project</li>
        <li>education</li>
      </ul>
    </div>

    <div className='main-right'>
      <a href="https://github.com/bikash-bk"
      target='_blank'>

      <FaGithub className='github'  size={24} style={{marginTop:"10px"  }}/>

      </a>

      <a href="https://www.linkedin.com/in/bikash-das-436425297"
      target='_blank'>

      <FaLinkedin className='linkdln' size={24} style={{marginTop:"10px" , paddingLeft:"20px"}}/>

      </a>
      

    </div>
   </div>
   
   </>
  )
}

export default Navbar