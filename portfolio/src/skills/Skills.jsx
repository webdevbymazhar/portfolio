import React from 'react'
import { Container } from 'react-bootstrap'
import {FaCss3,FaHtml5,FaJs,FaReact,FaNode,FaDatabase} from "react-icons/fa"
import { SiAdobephotoshop, SiExpress, SiMongodb } from 'react-icons/si'

const Skills = () => {
  return (
    <Container>
       
        <div style={{backgroundColor:'F8F9FA'}}>
      <h1 className='text-center' style={{fontWeight:"800",marginTop:"10vh"}}>Skills</h1>
      <br />
      <p style={{textAlign:"center"}}>I leverage a diverse set of modern technologies to create robust and dynamic web applications. My expertise enables me to deliver efficient solutions that enhance user experiences.</p>
      <br />
      <div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><FaHtml5/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><FaCss3/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><FaJs/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><FaReact/></span>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><FaNode/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><SiMongodb/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><SiExpress/></span>
        <span className='skill-icon' style={{fontSize:"10vh",marginLeft:"30px"}}><SiAdobephotoshop/></span>
      </div>
      </div>
      
    </div>
    </Container>
  )
}

export default Skills
