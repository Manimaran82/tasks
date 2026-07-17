import React, { Suspense } from 'react'
import NavBar from './Navbar'
import Lazy from './Lazy'

const App = () => {
  return (
    <div>
   <NavBar/>
  <Lazy/>
    </div>
  )
}

export default App
