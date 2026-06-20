import React, { useState } from 'react'

const Task4 = () => {
    const [email,setEmail] =useState("")
    const [pass,setPass] = useState("")
    const [save,setSave] =useState([])

    const handle =(e)=>{
        e.preventDefault()
        setSave([...save,{
          email,pass

        }])
        setEmail("")
        setPass("")
    }

  return (
    <>
    <div>
        <form onSubmit={handle}>
            <label htmlFor="">Enter your Email </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Enter the Password</label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}  />
            <input type="submit"/>
        </form>
        <div>
            {save.map((e,i)=>(
                <div key={i}>
                    <p>{e.email}</p>
                    <p>{e.pass}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Task4
