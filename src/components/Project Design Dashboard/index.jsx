import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import PageDesign from './PageDesign/PreviewSection'
import Navbar from '../Navbar'
import ComponentsSection from './ComponentsSection'
import ToolboxSection from './ToolboxSection'

const ProjectDesignDashboard = ({ toggleTheme, theme }) => {

  const [activeElement, setActiveElement] = useState(document.activeElement)

  const activeClassHandler = () => {


    console.log("Hello")
    setActiveElement(document.activeElement)

  }


  console.log(activeElement)

  return (
    <div className=' bg-gradient-to-br from-dimWhite to-slate-200 dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen'>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className='flex flex-row'>
        <Sidebar />
        {/* <ComponentsSection /> */}
        <div className='grid grid-4 grid-flow-col w-full'>
          <div className='col-span-3'>
            <button>sdsad</button>
            <PageDesign activeClassHandler={activeClassHandler} />
          </div>
          <div className='col-span-1'>
          <ToolboxSection activeElement={activeElement} />
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProjectDesignDashboard