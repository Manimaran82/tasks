import React, { useState } from 'react'
import withHiger from './withHigher'
import Button from './Button'
const EnhanceChange = withHiger(Button)
const Higher = () => {
    
    const [name,setName] = useState("")
    const change =(e)=>{
       setName(e.target.value) 
    }
  return (
    <>
    <div>
      <EnhanceChange text="Enter The Name" handle={change}  />
     <p>{name}</p>
    </div>
    </>
  )
}

export default Higher
