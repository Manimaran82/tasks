import React, { useState } from 'react'

const Searchemplohye = () => {
  const [prod,setProd] = useState("")
  const product = ["Ramesh","Ravi","Manimaran", "Dinesh", "Sanjai"];
  const handle =(e)=>{
    setProd(e.target.value)
  }
  const searchpro = product.filter((e)=>e.toLowerCase().includes(prod.toLowerCase()))

  return (
    <>
    <div>
      <input type="text" value={prod} onChange={handle} />
    </div>
    <div>
      {searchpro.map((e,i)=>(
        <div key={i+1}>
          <p>{e}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Searchemplohye
