import React, { useState } from 'react'

const Product = () => {
    const [empdata,setEmpdata] = useState({prname:"",prdprice:"",prdcat:"",prdbrand:""})
    const [save,setSave] = useState([])
    const handle =(e)=>{
       setEmpdata({...empdata,[e.target.name]:e.target.value}) 
    }
    const update = (e)=>{
        e.preventDefault()
        setSave([...save,empdata])
        setEmpdata({prname:"",prdprice:"",prdcat:"",prdbrand:""})
    }
  return (
    <>
    <div>
        <form>
            <input type="text" onChange={handle} value={empdata.prname} name='prname' placeholder='Enter the name' />
            <input type="text" onChange={handle} value={empdata.prdprice} name='prdprice' placeholder='Enter the Price' />
            <input type="text" onChange={handle} value={empdata.prdcat} name='prdcat' placeholder='Enter the Category' />
            <input type="text" onChange={handle} value={empdata.prdbrand} name='prdbrand' placeholder='Enter the Brand' />
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

export default Product
