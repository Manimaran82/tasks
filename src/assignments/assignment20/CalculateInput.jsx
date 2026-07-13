import React, { useMemo, useState } from 'react'



const ProductProces = (datas, products) => {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
    
    
  }
  return products.filter((e) => e.userProduct.toLocaleLowerCase().includes(datas.toLocaleLowerCase()))
}






const CalculateInput = () => {

  const products =[
    {id:1,userProduct:"Laptop",userPrice:20000},
    {id:2,userProduct:"Keyboard",userPrice:200},
    {id:3,userProduct:"Mouse",userPrice:150}
  ]
  
  const [search, setSearch] = useState("")
  const [theme,setTheme] = useState(false)
  

  const onsearch = (e)=>{   
    setSearch(e.target.value)
  }
const handlechange =(e)=>{
  setTheme(!theme)
}


const Searchdata = useMemo(()=>{
 
  return ProductProces(search,products)
},[search])
 const light = ()=>{
  return {
    backgroundColor:"white",
    color:"black"
  }
 }
 const dark = ()=>{
  return {
    backgroundColor:"black",
    color:"white"
  }
 }

  return (
    <div>
      <div>
        <input type="text" onChange={onsearch} value={search} />
      </div>
     
     
     <div>
      
      {Searchdata.map((e)=>(
        <div key={e.id}>
          <p>{e.userProduct}</p>
          <p>{e.userPrice}</p>
        </div>
      ))}
     </div>

     <div style={theme?light():dark()}>
       <p>Box</p>
     </div>
     <button onClick={handlechange}>Click</button>
     
    </div>
  )
}

export default CalculateInput
