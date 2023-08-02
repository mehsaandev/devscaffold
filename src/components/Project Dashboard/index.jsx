import React, { useState } from 'react'
import Card from '../common/Cards/Card'
import Header from '../common/Header/ProjectDashboardHeader'
import AddModal from '../common/Modals/AddModal'


const ProjectDashboard = () => {
  const [openAddModal, setOpenAddModal] = useState(true)

  return (
    <>
    {openAddModal && (

      <AddModal open={openAddModal} setOpen={setOpenAddModal}/>
    )}
      <div className='bg-inherit dark:inherit dark:text-slate-200 dark:bg-gray-700 w-screen rounded-lg m-5 p-2 text-xl font-sans font-semibold '>


        <Header setOpen={setOpenAddModal} />
        <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 mb-4 p-2 h-18  '>
          <Card />


        </div>
        Projects
      <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 p-2 h-18  '>
        <Card />
      </div>
      Components
      <div className='bg-inherit dark:inherit dark:bg-gray-700 w-100 rounded-lg mt-2 p-2 h-18  '>
        <Card />
      </div>
      </div>
    </>


  )
}

export default ProjectDashboard