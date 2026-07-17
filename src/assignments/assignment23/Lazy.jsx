import React, { lazy, Suspense } from 'react'
import NavBar from './Navbar'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(()=>import("./Home"))
const About = lazy(()=>import("./About"))

const Lazy = () => {
  return (
    <div>
      <h1>Lazy Loading Process</h1>
      <NavBar/>

     <Suspense fallback={<p>Page Loading ....</p>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </Suspense>
    </div>
  )
}

export default Lazy