import React, { useState } from 'react'

const Profile = () => {
    const [empdata,setEmpdata] = useState({name:"",email:"",mobile:"",address:""})
    const [save,setSave] = useState([])
    const handle =(e)=>{
       setEmpdata({...empdata,[e.target.name]:e.target.value}) 
    }
    const update = (e)=>{
        e.preventDefault()
        setSave([...save,empdata])
        setEmpdata({name:"",email:"",mobile:"",address:""})
    }
  return (
    <>
    <div>
        <form>
            <input type="text" onChange={handle} value={empdata.name} name='name' placeholder='Enter the Name' />
            <input type="text" onChange={handle} value={empdata.email} name='email' placeholder='Enter the Email' />
            <input type="text" onChange={handle} value={empdata.mobile} name='mobile' placeholder='Enter the mobile' />
            <input type="text" onChange={handle} value={empdata.address} name='address' placeholder='Enter the address' />
            <button onClick={update}>Submit</button>
        </form>
    </div>
    <div>
        {save.map((e,i)=>(
            <div key={i+1}>
                <p>{e.name}</p>
                <p>{e.email}</p>
                <p>{e.mobile}</p>
                <p>{e.address}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Profile
