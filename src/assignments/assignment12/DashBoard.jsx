import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dasboard = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("auth") || "null")
  })

  useEffect(() => {
    if (!userData) {
      navigate("/login")
    }
  }, [navigate, userData])

  const logout = () => {
    localStorage.removeItem("auth")
    navigate("/login")
  }

  return (
    <div>
      <h1>Dashboard</h1>

     
        <>
          <h2>{userData.username}</h2>
          <p>{userData.useremail}</p>
          <p>{userData.userpassword}</p>
        </>
     

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dasboard