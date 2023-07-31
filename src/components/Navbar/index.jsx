import React from 'react'
import {RiSettings3Fill} from 'react-icons/ri'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between p-3 bg-inherit dark:bg-transparent dark:text-slate-200 shadow-lg'>
     <div className='ml-2'>
      <button className='hover:scale-110 duration-200 h-10'>
      <img width={170} src={logo}/>
      </button>
     </div>
     <div className='flex flex-row gap-2 '>
      <button className='bg-gray-200 hover:bg-gray-300 dark:bg-slate-600 p-1 rounded-md w-14  '>Login</button>
      <button className='bg-gray-400 hover:bg-gray-300 dark:bg-slate-60 p-0.5 rounded-full w-full h-full'>ME</button>
      <button className='bg-inherit  hover:bg-gray-200 dark:hover:bg-slate-600   w-8 text-center flex justify-center items-center rounded-md group'><RiSettings3Fill className='text-slate-900 dark:text-slate-200 group-hover:rotate-180 duration-200' size={25}/></button>
     </div>
    </nav>
  )
}

export default Navbar