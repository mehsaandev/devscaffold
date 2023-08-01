import React from 'react'
import Card from '../common/Card'


const ProjectDashboard = () => {
  
  return (
    
   
    <div className='bg-inherit dark:inherit dark:bg-gray-700 w-screen rounded-lg m-5 p-2 text-xl font-sans font-semibold '>
    Recents

    <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 mb-4 p-2 h-18  '>
    <Card/>
    
    
    </div>
    Projects
    <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 p-2 h-18  '>
    <Card/>
    </div>
    Components
    <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 p-2 h-18  '>
    <Card/>
    </div>
    </div>
    
  )
}

export default ProjectDashboard