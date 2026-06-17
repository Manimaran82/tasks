import React from 'react'
import { useState } from 'react'

const Task1 = () => {
    const [count,setCount] = useState(0)

  const onchange = ()=>{
    setCount(count+1)
  }
  const ondecr =()=>{
     setCount(count-1)
  }
  const Rest = ()=>{
    setCount(0)
  }
  return (
    <>
     <div >
      <h1 className='bg-blue-700 text-2xl text-white w-25 mx-7 mt-5 '>{count}</h1>
      <button className='bg-red-600 text-white mx-7 w-30 rounded mt-4' onClick={onchange}>Increment</button>
      <button className='bg-yellow-600 text-white mx-7 w-30 rounded mt-4' onClick={ondecr}>Decrement</button>
      <button className='bg-green-600 text-white mx-7 w-30 rounded mt-4' onClick={Rest}>Rest</button>
    </div>
    </>
  )
}

export default Task1
