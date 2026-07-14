import React from 'react'

const Child = ({handle}) => {
    console.log("Running Child");
    
  return (
    <div>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default Child
