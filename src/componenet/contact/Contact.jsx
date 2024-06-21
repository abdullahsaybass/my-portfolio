import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8a39d9a0-1f13-4292-b7b0-305a7a69742b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Success")
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id = 'contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, 
                    so feel free to send me a message about anything that you want me to work on. 
                    You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src = {mail_icon} alt = "" />
                        <p>ksaybas3@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src = {call_icon} alt = "" />
                        <p>+91 9751646163</p>
                    </div>
                    <div className="contact-detail">
                        <img src = {location_icon} alt = "" />
                        <p>Madurai,Tamil Nadu,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit = {onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write your message</label>
                <textarea name="message" rows='8' placeholder="Enter your message"></textarea>
                <button type='submit' className='submit-area'>Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact