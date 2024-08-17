import React from 'react'
import { FaGithub,FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";


const AboutUs = () => {
  return (
    <div className='about-us'>
      <h1 className='text-center' style={{fontWeight:"800"}}>About Me</h1>
      <br />
      <p style={{textAlign:"center"}}>As a MERN stack developer, I create dynamic web applications using MongoDB, Express.js, React, and Node.js. I focus on building efficient, user-friendly solutions and have experience with RESTful APIs and state management tools like Redux. Committed to continuous learning, I strive to deliver high-quality code and collaborate effectively in team environments.</p>
      <br />
      <p className='text-center'>
        <span style={{fontSize:"40px",marginLeft:"15px"}}><a className='about-link' style={{color:"black"}} href='https://github.com/webdevbymazhar'><FaGithub/></a></span>
        <span style={{fontSize:"40px",marginLeft:"15px"}}><a className='about-link' style={{color:"black"}} href='https://www.facebook.com/mazhar.siddiqi.714'><FaFacebook/></a></span>
        <span style={{fontSize:"40px",marginLeft:"15px"}}><a className='about-link' style={{color:"black"}} href='https://www.instagram.com/mazharsiddiqii/'><FaInstagram/></a></span>
        <span style={{fontSize:"40px",marginLeft:"15px"}}><a className='about-link' style={{color:"black"}} href='https://www.linkedin.com/in/mazhar-siddiqi-46464a266/'><FaLinkedin/></a></span></p>
</div>
  )
}

export default AboutUs
