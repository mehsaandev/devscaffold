import { useState } from 'react'
import {Navbar,ProjectDashboard,Sidebar} from './components'
import './App.css'

function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () =>{
    setTheme(theme == "dark" ? "" : "dark")
  }

  return (
    <div className= {`${theme}`}>
      <div className='bg-gradient-to-br from-dimWhite to-slate-200 dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen overflow-y-scroll'>
      <Navbar toggleTheme = {toggleTheme} theme={theme}/>
      <div className='flex flex-row'>
      <Sidebar/>
      <ProjectDashboard />

      </div>
      </div>
    </div>
  )
}

export default App