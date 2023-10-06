import React, { useEffect, useState } from 'react'


const Num = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`count ${count} times`
    })
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1);
      }}>Click 0 times</button>
      count {count}times
    </div>
  )
}

export default Num
