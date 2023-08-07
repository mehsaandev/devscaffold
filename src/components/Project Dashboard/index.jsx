import React, { useEffect, useState } from 'react'
import Header from '../common/Header/ProjectDashboardHeader'
import ProjectListing from './ProjectListing'
import AddModal from '../common/Modals/AddModal'
import { Navigate, Route, Routes } from 'react-router-dom'
import SingleProject from './SingleProject'
import { useDispatch } from 'react-redux'
import { createProject } from '../../actions/project'


const ProjectDashboard = () => {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [addProjectForm, setAddProjectForm] = useState({})

  const dispatch = useDispatch()



  const createProjectHandler = (e) => {
    e.preventDefault()
    dispatch(createProject(addProjectForm, setOpenAddModal))
  }




  return (
    <>

      {openAddModal && (
        <AddModal open={openAddModal} setOpen={setOpenAddModal} projectForm={addProjectForm} setProjectForm={setAddProjectForm} createProjectHandler={createProjectHandler} />
      )}


      <div className='bg-slate-100 dark:text-slate-200 dark:bg-gray-700 w-screen rounded-lg m-5 p-4 text-xl font-sans font-semibold shadow-md '>

        <Routes>

          <Route path='/' element={<Navigate to={'home'} />} />
          <Route path='/home' element={<ProjectListing openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} type={"Recent"} />} />
          <Route path='/projects' element={<ProjectListing openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} type={"My Projects"} />} />
          <Route path='/components' element={<ProjectListing openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} type={"My Components"} />} />
          <Route exact path='/project/:id' element={<div className='transition-height duration-500 ease-in-out'><SingleProject /></div>} />
        </Routes>


      </div>
    </>



  )
}

export default ProjectDashboard