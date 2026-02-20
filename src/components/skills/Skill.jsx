import React from 'react'
import './Skill.css'
import { skillsInfo } from '../../Constant'

const Skill = () => {
  return (
    <div className='skill-main' id='skills'>

<div className='skill-container'>
  <h2 className='skill-heading'>SKILLS</h2>
  <div className='hr'></div>
</div>

<p className='skill-desc '>A collection of my technical skills and expertise honed through various projects and experiences.</p>
<div className='skill-sections'>
{skillsInfo.map((item)=>(
  
  <div className='skills-section'>
    <div className='skill-innner-container'>
<h1 className='skill-inner-conatainer-tittle'>{item.tittle}</h1>
 <div className='skill-inner-conatainer-skills'>

  {item.skills.map((skill)=>(
    <div className='skill-box'> 
    <img src={skill.logo} alt="" />
    <span>{skill.name}</span>
    

    </div>
  ))}

</div>
  





    </div>
  </div>
 ))}
  
</div>



    </div>
  )
}

export default Skill