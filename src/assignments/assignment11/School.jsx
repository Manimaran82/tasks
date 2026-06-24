import React, { useState } from 'react'

const School = () => {
    const [empdata,setEmpdata] = useState({schoolname:"",principal:"",city:"",total:""})
    const [save,setSave] = useState([])
    const handle =(e)=>{
       setEmpdata({...empdata,[e.target.name]:e.target.value}) 
    }
    const update = (e)=>{
        e.preventDefault()
        setSave([...save,empdata])
        setEmpdata({schoolname:"",principal:"",city:"",total:""})
    }
  return (
    <>
    <div>
        <form>
            <input type="text" onChange={handle} value={empdata.schoolname} name='schoolname' placeholder='Enter the school Name' />
            <input type="text" onChange={handle} value={empdata.principal} name='email' placeholder='Enter the Principal Name' />
            <input type="text" onChange={handle} value={empdata.city} name='city' placeholder='Enter the city' />
            <input type="text" onChange={handle} value={empdata.total} name='total' placeholder='Enter the total Count' />
            <button onClick={update}>Submit</button>
        </form>
    </div>
    <div>
        {save.map((e,i)=>(
            <div key={i+1}>
                <p>{e.schoolname}</p>
                <p>{e.email}</p>
                <p>{e.city}</p>
                <p>{e.total}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default School
