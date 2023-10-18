import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './components/Landing Page'
import Home from './components/Home'
import Dashboard from './components/Project Design Dashboard/index'
import './App.css'



function App() {

  const [theme, setTheme] = useState('')

    const toggleTheme = () =>{
      setTheme(theme == "dark" ? "" : "dark")
    }

  return (
    <div className= {`${theme}`}>
      <Routes>
        <Route path='/' element={<LandingPage  />} />

        {/* <Route path='/dashboard/*' element={<Home toggleTheme={toggleTheme} theme={theme} />} /> */}
        <Route path='/home/*' element={<Home toggleTheme={toggleTheme} theme={theme} />} />
        <Route path='/dashboard/*' element={<Dashboard toggleTheme={toggleTheme} theme={theme} />} />
      </Routes>

    </div>

  )
}

export default App