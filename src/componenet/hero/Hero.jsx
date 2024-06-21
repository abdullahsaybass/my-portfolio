import React from 'react'
import './Hero.css'
import profileImage from '../../assets/zenith.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id = 'menu' className='hero'>
        <img src = {profileImage} alt="profile-image" />
        <h1><span>I'm Abdullah Saybas,</span>Front-End Developer Based on TamilNadu</h1>
        <p>I am an aspiring Web Developer with foundational knowledge in HTML, CSS, JavaScript, and ReactJS.
           As a fresher, I have started applying these skills in personal projects and collaborations,
           and I am eager to learn and grow in the field of web development.</p>
        <div className='hero-actions'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero