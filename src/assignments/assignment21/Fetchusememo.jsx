import React, { useEffect, useMemo, useState } from 'react'

const productprocess = (datas, search, sort) => {
  let alldatas = [...datas]

  if (search) {
    alldatas = alldatas.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
  }

  if (sort === 'asc') {
   alldatas = alldatas.sort((a,b)=>a.price - b.price)
  }

  if (sort === 'dsc') {
     alldatas = alldatas.sort((a,b)=>b.price - a.price)
  }

  return alldatas
}


const Fetchusememo = () => {

  const [datas,setDatas] = useState([])
  const [search,setSearch] = useState("")
  const [sort,setSort] = useState("")
  
  const fetchdata = async()=>{
    const getdata = await fetch("https://dummyjson.com/products")
    const changedata = await getdata.json()
    setDatas(changedata.products)
  }
  useEffect(()=>{
    fetchdata()
  },[])

  const processdata = useMemo(() => {
    return productprocess(datas, search, sort)
  }, [datas, search, sort])
  return (
    <>
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} />

      <select onChange={(e)=>setSort(e.target.value)} value={sort}>
        <option value="">Select All</option>
        <option value="asc">High to Low</option>
        <option value="dsc">Low to High</option>
      </select>
    </div>
    <div>
      {processdata.map((e)=>(
        <div key={e.id}>
          <p>{e.title}</p>
           <p>{e.category}</p>
            <p>{e.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Fetchusememo
