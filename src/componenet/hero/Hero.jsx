import React from 'react'
import './Hero.css'
import profileImage from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src = {profileImage} alt="profile-image" />
        <h1><span>I'm Abdullah Saybas,</span>Web Developer Based on TamilNadu</h1>
        <p>I am a Front-end Developer with hands-on experience in building web 
          projects. I have a solid foundation in HTML, CSS, JavaScript, and 
          ReactJS which I have applied in various personal and collaborative projects</p>
        <div className='hero-actions'>
          <div className='hero-connect'>Connect with me</div>
          <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero