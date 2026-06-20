import React, { useState } from 'react'

const Task2 = () => {
    const [employee,setEmployee] = useState("")
    const change =(e)=>{
        setEmployee(e.target.value)
    }
  return (
   <>
   <div>
    <form >
        <label htmlFor=""> Employee Name</label>
        <input type="text"  onChange={change}/>
    </form>
    <h1>{employee}</h1>
   </div>
   </>
  )
}

export default Task2
