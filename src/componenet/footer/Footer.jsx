import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/zenithb.png'
import User_icon from '../../assets/user_icon.svg'


const footer = () => {
  return (
    <div id = 'footer' className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={Footer_logo} alt = "" />
            <p>I am an aspiring web developer passionate about frontend development, equipped with training in HTML,
               CSS, JavaScript, and ReactJS, dedicated to crafting engaging and user-friendly website.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={User_icon} alt='' />
              <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-left">© 2023 Zenith. All rights reserved.</div>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default footer