import React, { useRef, useState } from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/zenithb.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu,setMenu] = useState('home')
  const menuRef = useRef();

  const menuOpen = () => {
    menuRef.current.style.right = "0";
    console.log("menu_opne")
  }
  const menuClose = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>

        <img src={logo} alt="logo-image" />
        <img src = {menu_open} onClick = {menuOpen} alt="menu_open" className='nav-menu-open'/>
        <ul ref = {menuRef} className='nav-menu'>
          <img src={menu_close} onClick={menuClose}  alt="" className="nav-menu-close" />
        <li><AnchorLink className='anchor-link' offset={50} href="#home"><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src = {underline} alt ="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src = {underline} alt ="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=> setMenu("service")}>service</p></AnchorLink>{menu === "service" ? <img src = {underline} alt ="" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src = {underline} alt ="" /> : <></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>  

    </div>

  )
}

export default Navbar