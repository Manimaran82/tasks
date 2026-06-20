import React, { useState } from 'react'

const Task1 = () => {
    const [user,setUser] = useState("")

    const handle =(e)=>{
        setUser(e.target.value)
    }

  return (
    <>
    <div>
        <form >
            <input type="text" onChange={handle}/>
            <p>{user}</p>
        </form>
    </div>
    </>
  )
}

export default Task1
