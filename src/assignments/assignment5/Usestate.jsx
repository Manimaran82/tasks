import React, { useState } from 'react'

const Usestate = () => {

    const [use,setUse]= useState("This is React ")

    const onchange = ()=>{
        setUse(" Welcome to our class")
    }

  return (
    <>
    <div>
        <h1 className='bg-black text-2xl text-white w-75 mx-7 mt-5 '>{use}</h1>
        <button className='bg-red-500 text-white mx-7 w-30 rounded mt-4' onClick={onchange}>Click to Change</button>
    </div>
    </>
  )
}

export default Usestate
