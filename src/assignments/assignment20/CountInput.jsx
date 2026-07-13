import React, { useMemo, useState } from 'react'



const ProductProces = (datas) => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
    
    
  }
  return datas*2
}






const App = () => {

 
  
  const [search, setSearch] = useState("")
  const [theme,setTheme] = useState(false)
  

  const onsearch = (e)=>{   
    setSearch(e.target.value)
  }
const handlechange =(e)=>{
  setTheme(!theme)
}


const Searchdata = useMemo(()=>{
 
  return ProductProces(search)
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
    <p>{Searchdata}</p>
      </div>
      <div>
        <input type="text" onChange={onsearch} value={search} />
      </div>
     
    

     <div style={theme?light():dark()}>
       <p>Box</p>
     </div>
     <button onClick={handlechange}>Click</button>
     
    </div>
  )
}

export default App
