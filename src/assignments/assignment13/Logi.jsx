import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logi = () => {
    const navigate = useNavigate()
    const [datas, setDatas] = useState({ useremail: "", userpassword: "" })

    const handle = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }

    const storedUsers = JSON.parse(localStorage.getItem("user") || "[]")

    const clicksubmit = (e) => {
        e.preventDefault()
        if (datas.useremail === "" || datas.userpassword === "") {
            alert("Enter the Empty data")
            return
        }

        const checkauth = storedUsers.find(
            (item) => item.useremail === datas.useremail && item.userpassword === datas.userpassword
        )

        if (!checkauth) {
            alert("Invalid email or password")
            return
        }

        localStorage.setItem("auth", JSON.stringify(checkauth))
        setDatas({ useremail: "", userpassword: "" })
        navigate("/dasboard")
    }

    return (
        <>
            <div>
                <form onSubmit={clicksubmit}>
                    <input type="text" onChange={handle} value={datas.useremail} name='useremail' placeholder='Enter the Email' />
                    <input type="password" onChange={handle} value={datas.userpassword} name='userpassword' placeholder='Enter the Password' />
                    <input type="submit" value={"Login"} />
                </form>
            </div>
        </>
    )
}

export default Logi
