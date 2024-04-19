import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md'


import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = ({ toggleTheme, theme }) => {
  const nav = useNavigate()
  const profile = useSelector(state=>state?.user?.auth?.result)
  console.log(profile)

  const homeNavigate = () => {
    nav('/home')
  }

  const handleLogout = () => {
    localStorage.removeItem('devscaffold_token')
    localStorage.removeItem('devscaffold_profile')
    nav('/login')
  }


  return (
    <nav className='flex sticky top-0 z-20 flex-row justify-between p-3  bg-inherit dark:bg-transparent backdrop-blur dark:text-slate-200 shadow-lg'>

      <div className='ml-2'>
        <button className='hover:scale-110 duration-200 h-10' onClick={homeNavigate} >
          <img width={170} src={logo} />

        </button>
      </div>
      <div className='flex flex-row gap-2 '>
        {/* <button className='bg-gray-200 hover:bg-gray-300 dark:bg-slate-600 p-1 rounded-md w-14  '>Login</button> */}
        <button className='text-slate-200 bg-orange-600 hover:bg-orange-700  rounded-lg p-2 text-sm ' onClick={handleLogout}>Logout</button>
        <button className='bg-gray-400 hover:bg-gray-300 dark:bg-slate-60 w-11 rounded-full'>{profile?.firstName[0] + profile?.lastName[0]}</button>
        <button className='bg-inherit  hover:bg-gray-200 dark:hover:bg-slate-600  w-8 text-center flex justify-center items-center rounded-md group'><RiSettings3Fill className='text-slate-900 dark:text-slate-200 group-hover:rotate-180 duration-200' size={25} /></button>
        <button className='bg-inherit  hover:bg-gray-200 dark:hover:bg-slate-600  w-8 text-center flex justify-center items-center rounded-md group' onClick={toggleTheme}>

          {theme == "dark" ? (

            <MdOutlineLightMode className='text-slate-900 dark:text-slate-200 ' size={25} />
          ) : (
            <MdOutlineNightlight className='text-slate-900 dark:text-slate-200 ' size={25} />

          )}

        </button>

      </div>
    </nav>
  )
}

export default Navbar