import React from 'react'
import Navbar from '../Landing Page/navbar.jsx'
import land from '../../assets/land.png'
import laptop from '../../assets/features.png'
import {ImBooks} from 'react-icons/im' 
import {BsWindowFullscreen} from 'react-icons/bs' 
import {TbComponents} from 'react-icons/tb' 
import Footer from '../Landing Page/footer.jsx'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <div className=' dark:bg-slate-700 dark:text-slate-200  '>
    <Navbar/>
    <div className='mx-20'>
    <div className='text-slate-400 pt-40  font-poppins text-6xl text-center font-semibold animate-pulse'>
      Design and Code with Dev Scaffold
    </div>
    <div className='text-slate-400 pt-5  font-poppins text-md text-center font-normal'>
    {'< The No-Code System for developing react application with drag and drop selection / >'}
    </div>
    <div className='flex flex-row p-10 justify-center	'>
    <button className='bg-sky-500 outline outline-sky-500 rounded-xl m-3 hover:text-sky-500 hover:bg-white hover:scale-110 text-white p-3 font-poppins  w-44' onClick={()=>navigate('/login')}>Get Started</button>
    {/* <button className='bg-white outline outline-sky-500 outline-offset-0 rounded-r-xl hover:bg-sky-500 hover:text-white hover:scale-110 font-poppins m-3 text-sky-500 p-3 w-44' onClick={()}>Explore</button> */}
    </div>
    <div className='w-auto p-10'>
    <img  src={land}/>
    </div>
    
    <div className='text-slate-400 pt-10  font-poppins text-4xl text-center font-semibold '>
      Features
      </div>
      <div className='flex flex-row justify-center space-x-44 '>
      <div className='w-auto pt-20 '>
      <img  src={laptop}/>
      </div>
      <div className='w-56 m-8 pt-10'>
        <div>
          <div className='text-sky-400 font-poppins text-md text-left font-semibold my-5'>
          <div className='flex flex-row -2'><ImBooks className='text-sky-400 mr-4' size={20}/>Projects</div>
          
          </div>
          <div className='text-sm'>You are able to show your creativity on multiple screens.</div>
          <div className='text-sky-400 text-md font-poppins text-left font-semibold my-5 '>
          <div className='flex flex-row -2'><BsWindowFullscreen className='text-sky-400 mr-4' size={20}/>Screens</div>
          </div>
          <div className='text-sm'>You are able to show your creativity on multiple screens.</div>
          <div className='text-sky-400  text-md font-poppins text-left font-semibold my-5'>
          <div className='flex flex-row -2'><TbComponents className='text-sky-400 mr-4' size={20}/>Components</div>
          </div>
          <div className='text-sm'>You are able to show your creativity on multiple screens.</div>
          </div>
      </div>
      
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default LandingPage