import React from 'react'
import { Button } from 'react-bootstrap'

const Card = ({image,title,text,link}) => {
  return (
    <div className="card card-width" style={{width:"16rem"}}>
  <img className="card-img-top" src={image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a style={{backgroundColor:"none"}} target='_blank' href={link} className="btn btn-dark">View Code</a>
  </div>
</div>
  )
}

export default Card
