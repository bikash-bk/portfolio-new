import React from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import profile2 from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero-main'>
      
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

        </div>
      </div>

      <div className='right'>
        <img src={profile2} alt="" style={{width:"300px",borderRadius:"50%"}}/>
      </div>

    </div>
  )
}

export default Hero
