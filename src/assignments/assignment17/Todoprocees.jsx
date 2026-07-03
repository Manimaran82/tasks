import React, { useState } from 'react'

const Todoprocees = () => {
  const [datas,setDatas] = useState({userName:"",userMobile:"",userEmail:""})
  const [saveDatas,setSaveDatas] =useState([])
  const [editdatas,setEditDatas] = useState(null)
  const[serac,setSerac] = useState("")

  const handle =(e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }
  const handleAdd = (e) => {
  e.preventDefault()

  if (editdatas !== null) {
    const edited = saveDatas.map((e) =>
      e.id === editdatas ? { ...e, ...datas } : e
    )

    setSaveDatas(edited)
    setEditDatas(null)
    setDatas({ userName: "", userMobile: "", userEmail: "" })
    return
  }

  const update = [...saveDatas, { id: Date.now(), ...datas }]
  setSaveDatas(update)
  setDatas({ userName: "", userMobile: "", userEmail: "" })
}
  const handleEdit =(key)=>{
    const editData = saveDatas.find((e)=>e.id===key)
      setDatas({
        userName:editData.userName,
        userMobile:editData.userMobile,
        userEmail:editData.userEmail
      })
     setEditDatas(key) 

  }
  const handleDelete =(key)=>{
    const delet =saveDatas.filter((e)=>e.id!==key)
    setSaveDatas(delet)
  }
  const handleUpdate = (e)=>{
    e.preventDefault()

    const getdata = saveDatas.map((e)=>e.id===e?saveDatas:datas)
    setSaveDatas(getdata)
  }
  let saveall = [...saveDatas]
  if(serac){
    saveall = saveall.filter((e)=>e.userName.toLowerCase().includes(serac.toLowerCase()))
  }
  
  return (
    <>
    <div>
      <form>
        <input type="text" name='userName' value={datas.userName} placeholder='Enter the Name' onChange={handle} />
        <input type="text" name='userMobile' value={datas.userMobile} placeholder='Enter the Mobile' onChange={handle} />
        <input type="text" name='userEmail' value={datas.userEmail} placeholder='Enter the Email' onChange={handle} />
        {editdatas === null?<button onClick={handleAdd}>Add</button>:<button onClick={handleUpdate}>Update</button>}
      </form>
    </div>
    <div>
      <input type="text" onChange={(e)=>setSerac(e.target.value)} />
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>S:No</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {saveall.map((e,i)=>(
            <tr key={i+1}>
              <td>{i+1}</td>
              <td>{e.userName}</td>
              <td>{e.userMobile}</td>
              <td>{e.userEmail}</td>
              <td><button onClick={()=>handleEdit(e.id)}>Edit</button> || <button onClick={()=>handleDelete(e.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Todoprocees
