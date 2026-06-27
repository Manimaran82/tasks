import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Registers = () => {
    const navigate = useNavigate()
    const [datas, setDatas] = useState({username:"",useremail:"",userpassword:""})
   const handle = (e) => {
        setDatas({...datas, [e.target.name]: e.target.value})
    }
   
    const clicksubmit = (e) => {
        e.preventDefault()
        if (
        datas.username === "" ||
        datas.useremail === "" ||
        datas.userpassword === ""
    ) {
        alert("Fill the Empty Input")
        return
    }

    const existingUsers = JSON.parse(localStorage.getItem("user")) || []

    const checkEmail = existingUsers.find( (e) => e.useremail === datas.useremail  )

    if (checkEmail) {
        alert("Email already registered")
        return
    }
        const update = [...existingUsers, datas]
        localStorage.setItem("user", JSON.stringify(update))
        setDatas({ username: "", useremail: "", userpassword: "" })
        navigate("/login")
    }
  return (
   <>
   <div>
    <form onSubmit={clicksubmit}>
        <input type="text" onChange={handle} value={datas.username} name='username' placeholder='Enter the Name'/>
        <input type="text" onChange={handle} value={datas.useremail} name='useremail' placeholder='Enter the Name'/>
        <input type="text" onChange={handle} value={datas.userpassword} name='userpassword' placeholder='Enter the Name'/>
        <input type="submit" value={"Register"} />
    </form>
   </div>
   </>
  )
}

export default Registers
