import React from 'react';
import logo from '../images/vignesh_f7.png';
import {FaBars,FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import {Link} from 'react-scroll';
import './navbar.css'


function Navbar() {
    const navRef=useRef();
    
    const showNavbar=()=>{ 
        navRef.current.classList.toggle("responsive_nav");
    }
    const handleNavLinkClick = () => {
        navRef.current.classList.remove('responsive_nav');
    };
  return (
    <header>
        <Link to="Home" spy={true} smooth={true} offset={0} duration={100}  ><img src={logo} alt='logo'/></Link>
        
        <nav ref={navRef} >
            <Link to="Home" spy={true} smooth={true} offset={0} duration={100} className='navLink' onClick={handleNavLinkClick}>HOME</Link>
            <Link to="About" spy={true} smooth={true} offset={0} duration={100} className='navLink' onClick={handleNavLinkClick}>ABOUT</Link>
            <Link to="Works" spy={true} smooth={true} offset={0} duration={100} className='navLink' onClick={handleNavLinkClick}>WORKS</Link>
            <Link to="Contact" spy={true} smooth={true} offset={0} duration={100} className='navLink' onClick={handleNavLinkClick}>CONTACT</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar