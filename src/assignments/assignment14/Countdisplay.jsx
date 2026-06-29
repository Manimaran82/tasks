import React, { useEffect, useState } from 'react'

const Countdisplay = () => {
  const [show,setShow] = useState(0)
  useEffect(()=>{
   const time = setInterval(()=>{
    setShow((p)=>p+1)
   },1000)
   return()=>{
    clearInterval(time)
   }
  },[])

  return (
   <>
   <div>
    <h1>Counter Value</h1>
    <h3>Count = {show}</h3>
   </div>
   </>
  )
}

export default Countdisplay
