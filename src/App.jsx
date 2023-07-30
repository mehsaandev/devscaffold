import { useState } from 'react'
import {Navbar,ProjectDashboard,Sidebar} from './components'
import './App.css'

function App() {

  return (
    <div className=''>
      <div className='bg-gradient-to-br from-dimWhite to-slate-200 dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen'>
      <Navbar/>
      <Sidebar/>
      </div>
    </div>
  )
}

export default App
