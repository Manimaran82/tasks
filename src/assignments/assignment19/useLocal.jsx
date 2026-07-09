import React, { useEffect, useState } from 'react'

const useLocal = (key,init) => {
    const [values,setValue] =  useState(()=>{
        
            try {
                const userdata = localStorage.getItem(key)
                return JSON.parse(userdata)
            } catch (error) {
                return init
            }
       
    })

    
    const handle = (e)=>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(values))
    },[key,values])
  return {values,handle}
}

export default useLocal
