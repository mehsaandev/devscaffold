import React from 'react'
import Navbar from '../Landing Page/navbar.jsx'
import land from '../../assets/land.png'


const LandingPage = () => {
  return (
    <div className=' dark:bg-slate-700 dark:text-slate-200 '>
    <Navbar/>
    <div className='mx-20'>
    <div className='text-slate-400 pt-40  font-sans text-6xl text-center font-semibold animate-pulse'>
      Design and Code with Dev Scaffold
    </div>
    <div className='text-slate-400 pt-5  font-sans text-md text-center font-normal'>
    {'< The No-Code System for developing react application with drag and drop selection / >'}
    </div>
    <div className='w-auto p-10'>
    <img  src={land}/>
    </div>
    <div className='flex flex-row p-10 justify-center	'>
    <button className='bg-sky-500 outline outline-sky-500 rounded-l-xl m-3 hover:text-sky-500 hover:bg-white hover:scale-110 text-white p-3  w-44'>Get Started</button>
    <button className='bg-white outline outline-sky-500 outline-offset-0 rounded-r-xl hover:bg-sky-500 hover:text-white hover:scale-110  m-3 text-sky-500 p-3 w-44'>Explore</button>
    </div>
    <div className='text-slate-400 pt-10  font-sans text-4xl text-center font-semibold '>
      Features
    </div>
    </div>

    </div>
    
  )
}

export default LandingPage