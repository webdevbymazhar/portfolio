import React from 'react'
import Card from '../card/Card'

const Projects = () => {
  return (
    
        <div className='projects' style={{marginTop:"15vh"}}>
      <h1 className='text-center' style={{fontWeight:"800",}}>Showcasing my work</h1>
      <br />
      <p style={{textAlign:"center"}}>Explore a selection of my recent projects that demonstrate my skills and creativity in web development. Each project showcases my expertise in the MERN stack and my commitment to delivering high-quality solutions.</p>
      <br />
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"30px"}}>
        <Card image={"blogitup.jpg"} title={"BlogItUp"} link={"www.google.com"} text={"Blogitup is the full stack blog App made with MERN Stack."}/>
        <Card image={"dukaan.jpg"} title={"Dukaan.pk"} link={"www.google.com"} text={"Ecommerce App made with ReactJs and fakestoreapi."}/>
        <Card image={"todoer.jpg"} title={"Todoer"} link={"www.google.com"} text={"This is full stack Todo list app made with MERN Stack."}/>
        <Card image={"blogitup.jpg"} title={"BlogItUp"} link={"www.google.com"} text={"Blogitup is the full stack blog App made with MERN Stack."}/>
      </div>
    </div>
    
  )
}

export default Projects
