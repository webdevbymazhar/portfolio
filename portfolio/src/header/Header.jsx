
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from "react-scroll";


const Header = () => {
  return (
    <Container>
        <div className='header-wrapper'>
         <div className="div1">
         <h1>My Name is <span style={{fontWeight:"700"}}>Mazhar Siddiqi</span></h1>
         <br />
         
         <h3>And I am a <span style={{fontWeight:"700"}}>Web Developer</span></h3>
         <br />
        
         <Link to='contact-us' duration={500} smooth><Button variant='dark' style={{marginRight:"10px"}}>
          Contact Me
          </Button></Link>
         
         <Button variant='dark' ><a style={{color:"white",textDecoration:"none"}} download href="mazharCV.pdf">Download</a></Button>

         </div>
         <div className="div2">
          <img   style={{width:"80%",marginLeft:"20%",marginTop:"10%"}} src="vector.png" />
         </div>
        </div>

    </Container>
  )
}

export default Header
