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
        <a href='https://github.com/webdevbymazhar'  target='_blank' style={{color:"white",textDecoration:"none",fontSize:"20px"}}><FaGithub/></a>
          <a href='https://www.linkedin.com/in/mazhar-siddiqi-46464a266/' target='_blank' className='footer-link'><FaLinkedin/></a>
          <a href='https://www.facebook.com/mazhar.siddiqi.714' target='_blank' className='footer-link'><FaFacebook/></a>
          <a href='https://www.instagram.com/mazharsiddiqii/' target='_blank' className='footer-link'><FaInstagram/></a>
        </div>
      </div>
  )
}

export default Footer
