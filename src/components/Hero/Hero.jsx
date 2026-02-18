import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='hero-bg'>
      
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
              style={{color:"blueviolet"}}
             
            />
          </h2>

        </div>

        <p className='desc'>I am a full-stack developer for building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.</p>
      </div>

      <div className='right'>dferf</div>

    </div>
  )
}

export default Hero
