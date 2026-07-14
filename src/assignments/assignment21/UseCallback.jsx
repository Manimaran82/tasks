import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallback = () => {
console.log("Running component");

const [count,setCount] = useState(0)
const [theme,setTheme] = useState(false)

const handleclick = useCallback(()=>{
    setCount(count+1)
},[count])



  return (
    <div>
      {count}
      <Child  handle = {handleclick}/>
      {theme?"Light":"Dark"}
      <button onClick={()=>setTheme(!theme)}>Click</button>
    </div>
    
  )
}

export default UseCallback
