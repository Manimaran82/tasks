import React, { useEffect, useState } from 'react'

const Apicarts = () => {
  const [cart, setCart] = useState([])

  const fetchdata = async()=>{
    const get = await fetch("https://dummyjson.com/products")
    const update = await get.json()
    console.log(update.products)
    setCart(update.products)
  }

 useEffect(()=>{
  fetchdata()
 },[])
  return (
    <>
      <div>
        <h1>Cards</h1>
        {cart?.map((e) => (
          <div key={e.id}>
            <p>{e.title}</p>
            <p>{e.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Apicarts
