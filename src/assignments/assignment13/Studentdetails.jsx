import React, { useState } from 'react'

const Studentdetails = () => {
    const [datas,setDatas] = useState({username:"",userage:"",usercourse:"",usercity:""})
    const [save,setSave] = useState([])
    const handle = (e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }
    const change =(e)=>{
        e.preventDefault()
        const update = [...save,datas]
        localStorage.setItem("user",JSON.stringify(update))
        setSave(update)
        
        setDatas({username:"",userage:"",usercourse:"",usercity:""})
    }
  return (
   <>
   
   <div>
   <form onSubmit={change}>
    <input type="text" onChange={handle} name="username" value={datas.username} placeholder='Enter the Name' />
    <input type="text" onChange={handle} name="userage" value={datas.userage} placeholder='Enter the Age' />
    <input type="text" onChange={handle} name="usercourse" value={datas.usercourse} placeholder='Enter the Course' />
    <input type="text" onChange={handle} name="usercity" value={datas.usercity} placeholder='Enter the City' />
    <input type="submit" value={"submit"} />
    
   </form>
   </div>
   <div>
    {save.map((e,i)=>(
        <div key={i}>
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

export default Studentdetails
