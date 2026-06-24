import React, { useState } from 'react'

const Students = () => {
    const [student,setStudent] = useState({username:"",userage:"",usercourse:"",usercity:""})
    const [save,setSave] = useState([])
    const handle =(e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const change =(e)=>{
        e.preventDefault()
        const update =[...save,student]
        localStorage.setItem("userdata",JSON.stringify(student))
        setSave(update)
        setStudent({username:"",userage:"",usercourse:"",usercity:""})
    }
  return (
    <>
    <div>
        <form>
            <input type="text" value={student.username} name='username' onChange={handle} placeholder='Enter the Name' />
            <input type="text" value={student.userage} name='userage' onChange={handle} placeholder='Enter the Age' />
            <input type="text" value={student.usercourse} name='usercourse' onChange={handle} placeholder='Enter the Course' />
            <input type="text" value={student.usercity} name='usercity' onChange={handle} placeholder='Enter the City' />
            <button onClick={change}>Register</button>
        </form>
    </div>
    <div>
        {save.map((e,i)=>(
            <div key={i+1}>
                <p>{e.username}</p>
                <p>{e.userage}</p>
                <p>{e.usercourse}</p>
                <p>{e.usercity}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Students
