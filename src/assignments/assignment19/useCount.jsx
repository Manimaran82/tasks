import React, { useState } from 'react'

const useCount = (init = 0) => {
    const [count,setCount] = useState(init)

    const incre = ()=>{
        setCount(count+1)
    }
    const decr = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
  return {count,incre,decr,reset}
}

export default useCount
