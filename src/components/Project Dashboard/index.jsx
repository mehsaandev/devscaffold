import React, { useEffect, useState } from 'react'
import Header from '../common/Header/ProjectDashboardHeader'
import AddModal from '../common/Modals/AddModal'
import { useDispatch, useSelector } from 'react-redux'
import { createProject, getAllProjects } from '../../actions/project'
import ProjectListing from './ProjectListing'


const ProjectDashboard = () => {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [addProjectForm, setAddProjectForm] = useState({})

  const dispatch = useDispatch()
  const projectsList = useSelector(data=>data.projects?.projects)


  const createProjectHandler = (e) =>{
      e.preventDefault()
      dispatch(createProject(addProjectForm,setOpenAddModal))
  }

  useEffect(() => {
    
    dispatch(getAllProjects())
  
  }, [openAddModal])
  



  return (
    <>
      {openAddModal && (
        <AddModal open={openAddModal} setOpen={setOpenAddModal} projectForm={addProjectForm} setProjectForm={setAddProjectForm} createProjectHandler={createProjectHandler} />
      )}

      <div className='bg-slate-100 dark:text-slate-200 dark:bg-gray-700 w-screen rounded-lg m-5 p-4 text-xl font-sans font-semibold shadow-md '>
        <Header setOpen={setOpenAddModal} />
        {projectsList ? (
          <ProjectListing projectsList= {projectsList}/>

        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>



  )
}

export default ProjectDashboard