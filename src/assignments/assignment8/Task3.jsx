import React, { useState } from 'react'

const Task3 = () => {
    const [arr,setArr] = useState("")
    const [save,setSave] = useState("")

    const handle =(e)=>{
       setArr(e.target.value)

    }
    const change =()=>{
        setSave(arr)
    }

  return (
    <>
    <div>
        <form >

            <label htmlFor="">Enter the age</label>
            <input type="number" onChange={handle} />
            <input type="submit" onClick={change} />
        </form>
        <h1>{save}</h1>
    </div>
    </>
  )
}

export default Task3
