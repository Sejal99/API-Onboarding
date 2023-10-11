import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Page = () => {
    const [users, setUsers]= useState([]);
    console.log(users.email);
    const getData= async()=> {
        try{
            const res= await axios.get('https://reqres.in/api/users?page=1');
          
            setUsers(res.data.data)


        }catch(err){
            console.log(err);
        }
     

    }

    useEffect(()=> {
        getData();
    },[]);
    if(!users){
       return <h1>Loading......</h1>
    }
    console.log(users.data);

  return (
    <div>
        {users?.map((user)=> (
            <div key={user.id}>
                <img src={user.avatar} alt="" />
                <div style={{display:"flex",gap:"10px"}}>
                <div>{user.first_name} </div>
                <div> {user.last_name} </div>
               
                
                </div>

                <div>{user.email}</div>

            </div>
        ))}
      
    </div>
  )
}

export default Page
