import React, { useState } from 'react'

const Employ = () => {
    const [empdata,setEmpdata] = useState({empname:"",empid:"",empdept:"",empsalary:""})
    const [save,setSave] = useState([])
    const handle =(e)=>{
       setEmpdata({...empdata,[e.target.name]:e.target.value}) 
    }
    const update = ()=>{
        setSave([...save,empdata])
        setEmpdata({empname:"",empid:"",empdept:"",empsalary:""})
    }
  return (
    <>
    <div>
        <form>
            <input type="text" onChange={handle} value={empdata.empname} name='empname' placeholder='Enter the name' />
            <input type="text" onChange={handle} value={empdata.empid} name='empid' placeholder='Enter the Id' />
            <input type="text" onChange={handle} value={empdata.empdept} name='empdept' placeholder='Enter the Department' />
            <input type="text" onChange={handle} value={empdata.empsalary} name='empsalary' placeholder='Enter the Salary' />
            <button onClick={update}>Submit</button>
        </form>
    </div>
    <div>
        {save.map((e,i)=>(
            <div key={i+1}>
                <p>{e.empname}</p>
                <p>{e.empid}</p>
                <p>{e.empdept}</p>
                <p>{e.empsalary}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Employ
