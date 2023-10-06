import React from 'react'
import { useState } from 'react'

const Info = () => {
    const [userName,setUserName]=useState({firstname:'', lastname:''})



  return (
    <div>
      <input  type='string' onChange={(e)=>{
        setUserName({...userName,firstname: e.target.value});
      }} placeholder='firstname'/>
      <input onChange={(e)=>{
        setUserName({...userName,lastname:e.target.value});
      }} type='string' placeholder='lastname'/>
      <div>
        <h1>My first is- {userName.firstname} </h1>
        <h1>My last is- {userName.lastname} </h1>
      </div>
    </div>
  )
}

export default Info
