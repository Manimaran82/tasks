import React from 'react'
import AppRoutes from './route/AppRoutes'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
