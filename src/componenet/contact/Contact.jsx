import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="contact-section">
            <div className="left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, 
                    so feel free to send me a message about anything that you want me to work on. 
                    You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">

                    </div>
                    <div className="contact-detail">
                        
                    </div>
                    <div className="contact-detail">
                        
                    </div>
                </div>
            </div>
            <div className="contact-right"></div>
        </div>
    </div>
  )
}

export default Contact