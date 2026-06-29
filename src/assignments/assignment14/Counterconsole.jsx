import React, { useEffect, useState } from 'react'

const Counterconsole = () => {
  const [count,setCount] =useState(0)
  useEffect(()=>{
    console.log("Count = "+count);
   const timer =setInterval(()=>{
 
    
     setCount((p)=>p+1)
   },1000)
    return()=>{
      clearInterval(timer)
    }
    
  })
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default Counterconsole
