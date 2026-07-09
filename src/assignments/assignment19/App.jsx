import React from 'react'
import useCount from './useCount'
import useLocal from './useLocal'

const App = () => {
    const {count,incre,decr,reset} = useCount()
    const {values,handle} = useLocal("user","")
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={incre}>Increment</button>
        <button onClick={decr}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

    <div>
    <input type="text" value={values} onChange={handle} />
    </div>
    {/* <div>
        {values.map((e,i)=>(
            <div key={i+1}>
            <p >{e}</p>
            </div>

        ))}
    </div> */}
    </div>
  )
}

export default App
