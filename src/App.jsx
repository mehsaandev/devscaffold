import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './components/Landing Page'
import Home from './components/Home'
import './App.css'
import Hello from './components/Hello'


function App() {

  const [theme, setTheme] = useState('')

    const toggleTheme = () =>{
      setTheme(theme == "dark" ? "" : "dark")
    }

  return (
    <div className= {`${theme}`}>
      <Routes>
        <Route path='/' element={<LandingPage  />} />
        <Route path='/dashboard/*' element={<Home toggleTheme={toggleTheme} theme={theme} />} />
        <Route path='/hello/' element={<Hello  />} />
      </Routes>

    </div>

  )
}

export default App