import React, { useState } from 'react'

const Array = () => {
  const [arr,useArr] = useState(["Dhoni","Virat","Yuvi","Surya","iyer"])
  const handle =(index)=>{
    let copy =[...arr]
    copy[index]="Ajith"
    useArr(copy)
  }
  return (
    <>
    <div className='bg-black text-white p-4 w-screen h-screen'>
      <div  className='bg-amber-800 text-white w-50 p-7 rounded mx-50 my-50'>
        {arr.map((e,i)=>(
         
          <h1 key={i} onClick={()=>handle(i)}>{e}</h1>
       
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Array
