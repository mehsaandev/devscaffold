import React, { useState } from 'react'
import Sidebar from './Sidebar/index'
import PageDesign from './PageDesign/Indx'
import Navbar from '../Navbar'
import ComponentsSection from './ComponentsSection'
import ToolboxSection from './ToolboxSection'
import PagesSection from './Sidebar/PageSection/Index'
import AddModal from './Modals/AddModal'

const ProjectDesignDashboard = ({ toggleTheme, theme }) => {

  const [activeElement, setActiveElement] = useState(document.activeElement)

  const activeClassHandler = () => {


    console.log("Hello")
    setActiveElement(document.activeElement)

  }


  // console.log(activeElement)

  return (
    // bg-gradient-to-br from-dimWhite to-slate-200
    <>
    {/* <AddModal open={true} /> */}
    <div className='  dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen'>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className='flex flex-row'>
        <Sidebar />
        <div className='grid grid-cols-12 grid-flow-col w-full'>
          <div className='col-span-9'>
            <PageDesign activeClassHandler={activeClassHandler} />
          </div>
          <div className='col-span-3'>
          <ToolboxSection activeElement={activeElement} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDesignDashboard