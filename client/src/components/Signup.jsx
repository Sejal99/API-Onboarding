import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate=useNavigate();
  const handleSubmit=()=>{
navigate('/signin')
  }
 
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <div style={{height:"60vh", display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",gap:"10px"}} >
    <h1>Signup Here</h1>
      <div style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"10px"}}>
        
      <div >
      <input  style={{padding:"10px",borderRadius:"10px"}}type='email'  placeholder='Username' />
      </div>

      <div>
      <input style={{padding:"10px",borderRadius:"10px"}} type='password'  placeholder='password'/>
      </div>

      <div>
      <button type='Submit' style={{padding:"10px",borderRadius:"10px"}}>Signup</button>
      </div>
      </div>
      <div>Already registered? <Link to={'/signin'}>Signin</Link> to continue</div>
      </div>

      </form>
      
    

      </div>
    
  )
}

export default Signup
