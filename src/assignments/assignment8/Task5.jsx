import React, { useState } from 'react'

const Task5 = () => { 
    const [name,setNam] = useState("")
    const [num,setNum] = useState("")
    const [save,setSave] = useState([])

    const update =()=>{
        setSave([...save,name,num])
        setNam("")
        setNum("")
    }
  return (
   <>
   <div>
    <form onSubmit={update}>
    <label htmlFor="">Enter The Name</label>
    <input type="text" value={name} onChange={(e)=setNam(e.target.value)} />
    <label htmlFor=""> Enter The Number</label>
    <input type="number" value={num} onChange={(e)=setNum(e.target.value)} />
    <input type="submit" />

    </form>

    <div>
        {save.map((e,i)=>(
            <div key={i}>
                <h1>{e.name}</h1>
                <p>{e.num}</p>
            </div>
        ))}
    </div>
   </div>
   </>
  )
}

export default Task5
