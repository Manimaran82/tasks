import React, { useReducer } from 'react'
const init = 0
const reduce = (state,action)=>{
switch(action.type){
  case "inc":
    return state+1
  case "dec":
    return state-1
  case "res":
    return 0
  default :
    return state
}
}

const CountUseReducer = () => {
  const [state,dispatch] = useReducer(reduce,init)
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
      <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"res"})}>Reset</button>
    </div>
  )
}

export default CountUseReducer
