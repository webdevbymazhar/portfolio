import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { countries } from '../countries'
import axios from "axios"
import toast from 'react-hot-toast'

const ContactUs = () => {
  let [loading,setloading] = useState(false)
  let [data,setdata] = useState({
    fname:'',
    lname:"",
    email:"",
    country:"",
    message:""
  })
  const handleData = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
    // console.log(data);
   
  }
  const handleSubmit = async () =>{
    setloading(true)
   try {
    
    let res = await axios.post("https://portfolio-backend-inky-psi.vercel.app/form",data)
    if(res){
      toast.success("Form Submitted Successfully")
      setdata({
        fname:'',
        lname:"",
        email:"",
        country:"",
        message:""
      })
    }
   } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
   }finally{
    setloading(false)
   }
 
  }
  return (
   <Container>
     <div style={{margin:"5vh 0"}} >
      <h1 id='contact' className='text-center' style={{fontWeight:"800"}}>Contact Me</h1>
      <br />
      <p style={{textAlign:"center"}}>Get in touch with us by filling out the form below!</p>
      <br />
      <form>
  <div className="row">
    <div className="col">
      <input name='fname' onChange={handleData} value={data.fname} type="text" className="form-control" placeholder="First name"/>
    </div>
    <div className="col">
      <input name='lname' onChange={handleData} type="text" value={data.lname} className="form-control" placeholder="Last name"/>
    </div>
  </div>
  <div className="row" style={{marginTop:"3vh"}}>
    <div className="col">
      <input name='email' onChange={handleData} type="email"value={data.email} className="form-control" placeholder="Email Address"/>
    </div>
    <div className="col">

      <select name='country' onChange={handleData} value={data.country} id="inputState" className="form-control">
        <option selected>Country...</option>
        {
            countries.map((v,i)=>{
                return <option key={i} value={v} >{v}</option>
            })
        }
      </select>
    </div>
    <div style={{marginTop:"3vh"}} className="form-group">
    <textarea  onChange={handleData} value={data.message} placeholder='Enter Your Message...' name="message" className='form-control' id="" rows={10}></textarea>
  </div>
  </div>
   {
    loading ? <div style={{marginTop:"3vh"}} class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div> :  <Button onClick={handleSubmit} style={{marginTop:"3vh"}} variant='dark'>Submit</Button>
   }
</form>
</div>
   </Container>
  )
}

export default ContactUs
