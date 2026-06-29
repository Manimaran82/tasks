import React, { useEffect, useState } from 'react'

const Digitalclock = () => {
  const [clocksec,setClocksec] = useState(0)
  const [clockmin,setClockmin] = useState(0)
  const [clockhr,setClockhr] = useState(0)

  useEffect(()=>{
   const hours = setInterval(()=>{
    setClockhr((p)=>p+1)
   },3600000)
   return()=>{
    clearInterval(hours)
   }
    },[])

    useEffect(()=>{
      const mins = setInterval(()=>{
    setClockmin((p)=>p+1)
   },60000)

   return()=>{
    clearInterval(mins)
  }
    },[])
   

  useEffect(()=>{
    const sec = setInterval(()=>{
    setClocksec((p)=>p+1)
   },1000)

   return()=>{
    clearInterval(sec)
  }
  },[])

 
  


  return (
    <>
    <div>
    <h1>Digital Clock </h1>
    <h3>{clockhr} : {clockmin} : {clocksec} AM</h3>
    </div>
    </>
  )
}

export default Digitalclock
