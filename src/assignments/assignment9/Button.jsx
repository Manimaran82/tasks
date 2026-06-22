import React from 'react'

const Button = ({ text, handle }) => {
  return (
    <>
      <div>
        <input type="text" placeholder={text}  onChange={handle}/>
       
      </div>
    </>
  )
}

export default Button
