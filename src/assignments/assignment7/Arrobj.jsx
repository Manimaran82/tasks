import React, { useState } from 'react'

const Arrobj = () => {
  const [arrobj,setArrobj] = useState([
    {name:"Mani" ,course:"Mern" ,trainer:"Mukund" , time:"3 To 5"},
    {name:"Maran" ,course:"Mern" ,trainer:"Mukund" , time:"3 To 5"},
    {name:"Bala" ,course:"Mern" ,trainer:"Mukund" , time:"3 To 5"},
    {name:"Murugan" ,course:"Mern" ,trainer:"Mukund" , time:"3 To 5"}
  ])

  const handle =(index)=>{
    let copy =[...arrobj]
    copy[index].name="Java"
    setArrobj(copy)
  }
  
  return (
    <>
    
      <div className='bg-gray-900 text-white p-6 min-h-screen flex flex-row flex-wrap justify-center gap-6'>
  {arrobj.map((e,i)=>(
    <div
      className='bg-amber-800 text-white w-72 p-7 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'
      key={i+1}
    >
      <h1 className='text-xl font-bold mb-2'>Name : {e.name}</h1>
      <p className='mb-1'>Course : {e.course}</p>
      <p className='mb-1'>Trainer : {e.trainer}</p>
      <p className='mb-4'>Time : {e.time}</p>
      <button className='bg-white text-amber-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200' onClick={()=>handle(i)}>
        Click
      </button>
    </div>
  ))}
</div>
    
    </>
  )
}

export default Arrobj
