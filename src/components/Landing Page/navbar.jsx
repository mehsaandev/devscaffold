import React from 'react'
import {RiSettings3Fill} from 'react-icons/ri'
import logo from '../../assets/logo.png'
const Navbar = () => {
  
  return (
    <>
    <nav className='fixed z-50 flex flex-row w-screen justify-between pt-3 pb-3 pl-14 pr-14 bg-slate-100 dark:bg-slate-700 dark:text-slate-200 shadow-lg '>
     <div className='ml-2'>
      <button className='hover:scale-110 duration-200 h-10' >
      <img width={150} src={logo}/>
      </button>
     </div>
     <div className='flex flex-row gap-2 '>
     <button className='bg-inherit m-3 hover:scale-110  hover:text-sky-500 focus:text-sky-500 focus:font-semibold focus:scale-110 font-poppins'>Home</button>
     <button className='bg-inherit mx-3 hover:scale-110 hover:text-sky-500 focus:text-sky-500 focus:font-semibold focus:scale-110 font-poppins'>Features</button>
     <button className='bg-inherit mx-3 hover:scale-110 hover:text-sky-500  focus:text-sky-500 focus:font-semibold focus:scale-110 font-poppins'>Pricing</button>
     <button className='bg-inherit mx-3 hover:scale-110 hover:text-sky-500 focus:text-sky-500 focus:font-semibold focus:scale-110  font-poppins'>Contact</button>
      <button className='bg-sky-500 mx-3 hover:bg-sky-600 dark:bg-slate-600 px-6 py-1 rounded-full w-22 text-white font-poppins'>Login</button>
      <button className='bg-inherit  hover:bg-gray-200 dark:hover:bg-slate-600   w-14 text-center flex justify-center items-center rounded-full focus:bg-gray-200 group'><RiSettings3Fill className='text-slate-900 dark:text-slate-200 group-hover:rotate-180  duration-500' size={30}/></button>
     </div>
    </nav>

    </>

  )
}

export default Navbar