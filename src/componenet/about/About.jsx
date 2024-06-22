import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profileImage from '../../assets/zenith.jpeg'

const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profileImage} alt="profile-image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a budding Web Developer with a keen interest in both frontend and backend development. 
                        As a fresher, I have foundational knowledge in HTML, CSS, JavaScript, and ReactJS, 
                        which I am actively applying to personal projects and collaborations. I am currently 
                        expanding my skills to encompass full-stack development, eager to contribute to real-world 
                        projects and grow in this dynamic field.</p>
                    <p>My passion for web development drives me to continuously learn and improve, ensuring that 
                        I bring enthusiasm and dedication to each project I undertake.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:'50%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap </p>
                        <hr style={{width:'60%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Reactjs</p>
                        <hr style={{width:'50%'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
