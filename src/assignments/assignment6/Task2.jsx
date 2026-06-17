import React, { useState } from 'react'

const Task2 = () => {
    const [user,setUser] = useState("Sudhan")
    const change =()=>{
        setUser("Ravi")
    }

  return (
   <>
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-blue-600 mb-4">
    {user}
  </h1>

  <button
    onClick={change}
    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
  >
    Change Name
  </button>
</div>
   </>
  )
}

export default Task2
