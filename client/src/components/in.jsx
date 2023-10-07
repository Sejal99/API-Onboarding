// import React, { useEffect, useState } from 'react'

// const posts= [
//   {id:1, title:"delhi", desc:"capital"},
//   {id:2, title:"india", desc:"country"},
//   {id:3, title:"nainital", desc:"district"},
//   {id:4, title:"pakistan" , desc:"country"},
//   {id:5, title:"ara" , desc:"district"},
  
// ]


// const In = () => {
//   const[post,setPost]=useState([])
//   const[value,setValue]=useState('')
//   const [ans,setAns]=useState({})

//   useEffect(()=>{
//     const fun= ()=> {
//       setPost(posts)
//     }
//     console.log(ans);
//     console.log(value);
//     fun()
//   },[ans])

  

//   return (
//     <div>
//    <input onChange={(e)=>{
//     setValue(e.target.value)
//    }} type='string' placeholder='id'/>

//    <button onClick={()=>{
//     // for(let i=0;i<post.length;i++){
//     //     if(post[i].id===Number(value)){
//     //         setAns(post[i]);
//     //     }
//     // }
//     post.map((p)=>{
      
//              if(p.id===Number(value)){
//              setAns(p)
//         }
       
       
//    })
//    }}>Click Me</button>
//    <div>{ans.title}</div>
//     </div> 
//   )
// }

// export default In
