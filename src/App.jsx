import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/Landing Page'
import Home from './pages/Home'
import Dashboard from './pages/Project Design Dashboard/index'
import Rout from './pages/Project Design Dashboard/Routing Section/index'
import './App.css'
import Signup from './pages/Authentication/Signup'
import Login from './pages/Authentication/Login'
import Forgotpassword from './pages/Authentication/Forgotpassword'



function App() {

  const [theme, setTheme] = useState('')

    const toggleTheme = () =>{
      setTheme(theme == "dark" ? "" : "dark")
    }

  return (
    <div className= {`${theme}`}>
      <Routes>
        <Route path='/' element={<LandingPage  />} />
        <Route path='/route/*' element={<Rout  />} />
        {/* <Route path='/dashboard/*' element={<Home toggleTheme={toggleTheme} theme={theme} />} /> */}
        <Route path='/home/*' element={<Home toggleTheme={toggleTheme} theme={theme} />} />
        <Route path='/dashboard/:projectId/*' element={<Dashboard toggleTheme={toggleTheme} theme={theme} />} />
        <Route path='/login/*' element={<Login  />} />
        <Route path='/register/*' element={<Signup />} />
        <Route path='/forgot-password/*' element={<Forgotpassword />} />

      </Routes>

    </div>

  )
}

export default App