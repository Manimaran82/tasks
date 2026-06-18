import React, { useState } from 'react'

const Object = () => {
   const [obj,setObj] = useState({
        name :"Mani Maran",
        course :"MERN",
        duration :"6 Month"

    })

    const handle =()=>{
        setObj({...obj,name:"Akash",duration:"2 Months",course:"Front-End"})
    }
  return (
    <>
    <div className='bg-black text-white p-4 w-screen h-screen '>
        <div className='bg-amber-800 text-white w-50 p-7 rounded mx-50 my-50'>
            <h1>Name : {obj.name}</h1>
            <p>Course : {obj.course}</p>
             <p>Duration : {obj.duration}</p>
            <button className='bg-blue-800 text-white p-1 mx-2 mt-2' onClick={handle}>Click to Change</button>
        </div>
    </div>
    </>
  )
}

export default Object
