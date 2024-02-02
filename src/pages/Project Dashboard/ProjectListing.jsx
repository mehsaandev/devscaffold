import React, { useEffect, useState } from 'react'
import Card from './Project Card/Card'
import AddModal from '../common/Modals/AddModal'
import { useDispatch, useSelector } from 'react-redux'
import { createProject, getAllProjects } from '../../actions/project'
import Header from '../common/Header/ProjectDashboardHeader'


const ProjectListing = ({ type }) => {

    const [openAddModal, setOpenAddModal] = useState(false)
    const [addProjectForm, setAddProjectForm] = useState({})


    const dispatch = useDispatch()
    const projectsList = useSelector(data => data.projects?.projects)






    const createProjectHandler = (e) => {
        e.preventDefault()
        dispatch(createProject(addProjectForm, setOpenAddModal))
    }



    useEffect(() => {

        // dispatch(getAllProjects())
        getAllProjects(dispatch)

    }, [openAddModal])



    return (
        <>
            {
                openAddModal && (
                    <AddModal open={openAddModal} setOpen={setOpenAddModal} projectForm={addProjectForm} setProjectForm={setAddProjectForm} createProjectHandler={createProjectHandler} />
                )}

            <Header setOpen={setOpenAddModal} type={type} />

            {projectsList ? (

                <div className='bg-inherit dark:inherit dark:bg-gray-700 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3  '>
                    {projectsList.map(project => (
                        <Card project={project} />
                    ))}
                </div>
            ) : (
                <p>Loaading...</p>
            )}
        </>
    )
}

export default ProjectListing