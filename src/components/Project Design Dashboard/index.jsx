import React from 'react'
import Sidebar from '../Sidebar'
import PageDesign from './PageDesign/Canvas'
import Navbar from '../Navbar'
import ComponentsSection from './ComponentsSection'

const ProjectDesignDashboard = ({ toggleTheme, theme }) => {
  return (
    <div className=' bg-gradient-to-br from-dimWhite to-slate-200 dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen overflow-y-scroll'>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className='flex flex-row'>
        <Sidebar />
        <ComponentsSection />
        <PageDesign />
        
      </div>
    </div>
  )
}

export default ProjectDesignDashboard