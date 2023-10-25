// import React, { useEffect, useState } from 'react'

// const posts= [
//   {id:1, title:"delhi", desc:"capital"},
//   {id:2, title:"india", desc:"country"},
//   {id:3, title:"nainital", desc:"district"},
//   {id:4, title:"pakistan" , desc:"country"},
//   {id:5, title:"ara" , desc:"district"},
  
// ]


// const Logic = () => {
//   const[post,setPost]=useState([])
//   const[value,setValue]=useState('')
//   const [ans,setAns]=useState([])
 
  
//   useEffect(()=>{
//     const fun= ()=> {
//       setPost(posts)
//     }
  
//     fun()
//   },[ans])

//   console.log(ans);

//   return (
//     <div>
//    <input onChange={(e)=>{
//     setValue(e.target.value)
//    }} type='string' placeholder='string'/>

//    <button onClick={()=>{
//   let arr= []
//     post.map((p)=>{
      
//              if(p.desc===(value)){
//              arr.push(p)
//         }
       
       
//    })
//    setAns(arr)
//    }}>Click Me</button>
  
//    {ans.map((a)=>(
//     <div key={a.id}>
//         {a.title}
//     </div>
//    )

//    )}
//     </div> 
//   )
// }

// export default Logic
