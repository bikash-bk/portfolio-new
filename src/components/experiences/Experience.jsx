import React from 'react'
import './Experience.css'
import { experiences } from '../../Constant'

const Experience = () => {
  return (
<div className='exp-main' id='experience' >
<div className='experience-tittle'>
<h1 className='skill-heading'>EXPERIENCE</h1>
<div className='exp-hr'></div>


        
    </div>
<p className='skill-desc '>A collection of my technical skills and expertise honed through various projects and experiences.</p>

<div className='exp-conatiner'>
  <div className="line"></div>
  {
    experiences.map((Experience,index)=>(
<div className={index %2 ==0 ? "exp-conatiner1": "exp-conatiner2"}>

<div style={{display:"flex"}}>
  <div className='exp-company-logo'>
    <img src={Experience.img} style={{height:"90px", width:"60px" , borderRadius:"10px" ,marginLeft:"40px"}} />
  </div>
  <div className='exp-company-info'>
    <h1 style={{margin:"0" , padding:"3px"}}>{Experience.role}</h1>
    <p style={{margin:"0" , padding:"3px"}}>{Experience.company}</p>
    <p style={{margin:"0" , padding:"2px"}}>{Experience.date}</p>
  </div>

</div>
<div className='exp-desc'>
<p>{Experience.desc}</p>
<p style={{color:"white"}}>Skills:</p>
{
  Experience.skills.map((item)=>
  (
    
  <button  className='exp-skills'>{item}</button>

  ))
}

</div>


    

</div>
    ))
  }
    
    
    
</div>



</div>
    
  )
}

export default Experience