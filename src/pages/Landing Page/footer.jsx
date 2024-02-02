import React from 'react'
import logo from '../../assets/logo.png'
const footer = () => {
  return (
    <div className='w-screen bg-slate-100 h-96 mt-36'>
      <div className='text-center pt-20 flex flex-row justify-center'>
        <button className='p-10 hover:underline hover:text-sky-500 hover:underline-offset-4'>Home</button>
        <button className='p-10 hover:underline hover:text-sky-500 hover:underline-offset-4'>Contact</button>
        <button className='p-10 hover:underline hover:text-sky-500 hover:underline-offset-4'>Features</button>
        <button className='p-10 hover:underline hover:text-sky-500 hover:underline-offset-4'>About Us</button>
      </div>
    
    </div >

  )
}

export default footer