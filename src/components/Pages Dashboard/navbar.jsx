import React from 'react'
import {RiSettings3Fill} from 'react-icons/ri'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className='fixed z-50 flex flex-row w-screen justify-between pt-3 pb-3 pl-14 pr-14 bg-slate-100 dark:bg-slate-700 dark:text-slate-200 shadow-md '>
     <div className='ml-2'>
      <button className='hover:scale-110 duration-200 h-10' >
      <img width={150} src={logo}/>
      </button>
     </div>
     <div className='flex flex-row gap-2 '>

      <button className='bg-red-500 mx-2 hover:bg-red-600 dark:bg-slate-600 px-5 py-1 rounded-full w-22 text-white text-sm font-poppins'>Log out</button>
      <button className='bg-inherit  hover:bg-gray-200 dark:hover:bg-slate-600   w-14 text-center flex justify-center items-center rounded-full focus:bg-gray-200 group'><RiSettings3Fill className='text-slate-900 dark:text-slate-200 group-hover:rotate-180  duration-500' size={30}/></button>
     </div>
    </nav>

    </>

  )
}

export default Navbar