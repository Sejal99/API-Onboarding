import React, { useEffect, useState } from 'react'

const posts= [
  {id:1, title:"delhi", desc:"capital"},
  {id:2, title:"india", desc:"country"},
  {id:3, title:"nainital", desc:"district"},
  {id:4, title:"pakistan" , desc:"country"},
  {id:5, title:"ara" , desc:"district"},
  
]


const Num = () => {
  const[post,setPost]=useState([])

  useEffect(()=>{
    const fun= ()=> {
      setPost(posts)
    }

    fun()
  })

  console.log(post);

  return (
    <div>
    {post.map((p)=> (
      <li>
        <ol>
          {p.title}
        </ol>
      </li>
    ))}
    </div>
  )
}

export default Num
