import React from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  return (
    <div className='navbar'>

        <img src={logo} alt="logo-image" />
        <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>service</li>
        <li>Portfolio</li>
        <li>Contact</li>
        </ul>
      <div className='nav-connect'>Connect with me</div>  

    </div>

  )
}

export default Navbar