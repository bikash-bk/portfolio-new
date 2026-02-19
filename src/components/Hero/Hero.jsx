import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import profile2 from '../../assets/profile.jpg'

const Hero = () => {
  return (
    
    
    
    <div className='hero-main' id='about'>
      
      <div className='left'>
        <div className='name-section'>
          <h1 style={{margin:"0px"}}>Hi,I am</h1>
          <h1 style={{margin:"0px"}}>Bikash Kumar</h1>

          <h2>
            I am a{" "}
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Node.Js Developer',
                2000,
                'Backend Developer',
                2000,
                'Coder',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{color:"yellow"}}
            />
          </h2>

          <p className='desc'>I am a full-stack developer for building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.


</p>
<a href="https://drive.google.com/file/d/1n6hpwSY2H7N1I3FTKYOPA-Fnb3xzhwP4/view?usp=drive_link"
target='_blank'>
<button className='hero-button'>Download CV</button>


</a>


        </div>
      </div>

      <div className='right'>
        <img src={profile2} alt="" style={{width:"400px",borderRadius:"50%",marginTop:"150px",marginLeft:"50px",border:"10px solid yellow"}}/>
      </div>

      

      

    </div>
    
    

    
  )
}

export default Hero
