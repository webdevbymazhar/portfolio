import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
         <div className='footer'>
        
        <div className='footer-links'>
        <Link to='header' smooth={true} duration={500} className='footer-link' >Home</Link>    
<Link to='about-us' smooth={true} duration={500} className='footer-link' >About</Link>
<Link to='skills' smooth={true} duration={500}  className='footer-link'  >Skills</Link>    
<Link to="projects" smooth={true} duration={500}  className='footer-link'>Project</Link>    
<Link to="contact-us" smooth={true} duration={500}  className='footer-link'>Contact</Link>
        </div>
        <div className='footer-icons'>
        <Link style={{color:"white",textDecoration:"none",fontSize:"20px"}}><FaGithub/></Link>
          <Link className='footer-link'><FaLinkedin/></Link>
          <Link className='footer-link'><FaFacebook/></Link>
          <Link className='footer-link'><FaInstagram/></Link>
        </div>
      </div>
  )
}

export default Footer
