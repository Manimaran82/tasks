import React, { useState } from 'react'

const Task4 = () => {
    const [check,setCheck] = useState(false)
    const change =()=>{
        setCheck(!check)
    }
  return (
    <>
    <div>
        {check? <h1 className='bg-blue-600 text-4xl text-white p-4 flex justify-center text-center h-screen'>Login Successfully</h1>:<h1 className='bg-yellow-600 text-4xl text-white p-4 flex justify-center text-center h-screen'>Logout Successfully</h1>}
        <button className='bg-green-600 text-black shadow-2xl rounded-3xl ' onClick={change}>{check?"Login":"Logout"}</button>
    </div>
    </>
  )
}

export default Task4
