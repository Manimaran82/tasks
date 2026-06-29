import React, { useEffect, useState } from 'react'

const Componentload = () => {
  const [use,setUse] =useState("component")

  useEffect(()=>{
    setUse("Component Loading....")
  })
  return (
    <>
    <div>
      <h1>Welcome to Page</h1>
      <h3>{use}</h3>
    </div>
    </>
  )
}

export default Componentload
