import React from 'react'
import projectimg from './Project.jpg'
import { CiMenuKebab } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import { restoreProject,deleteProject } from '../../../actions/project'



const projects = [
  {
    id: 1,
    name: 'Landing Page',
    href: '#',
    update: 'Updated 1 month ago',
    imageSrc: projectimg,
  },
  {
    id: 2,
    name: 'Landing Page',
    href: '#',
    update: 'Updated 1 month ago',
    imageSrc: projectimg,
  },
  {
    id: 3,
    name: 'Landing Page',
    href: '#',
    update: 'Updated 2 years ago',
    imageSrc: projectimg,
  },
  {
    id: 4,
    name: 'E-Commerce App',
    href: '#',
    update: 'Updated 1 sec ago',
    imageSrc: projectimg,
  },

  // More Projects...
]


function TrashedCard({ project }) {

  const navigate = useNavigate()

  const restoreProjectHandler = () =>{
    navigate(`/dashboard/${project?._id}`)
  }
  //deleteProjectHandler
  // const deleteProjectHandler = () =>{
  //   console.log('delete project')
  // }
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-900">
      <img class="w-full hover:cursor-pointer" src={projectimg} alt="Sunset in the mountains"  />
      <div class="px-6 py-4">
        <p class="font-bold text-xl mb-2 " style={{width:'max-content'}} >{project?.title}</p>
        </div>
        <div className='px-5 py-2 flex justify-between gap-32'>
          {/* <button className='dark:text-slate-200 border-blue-800 border-2 bg-transparent hover:border-blue-900  rounded-lg p-2 text-sm ' onClick={restoreProject(project._id)} >Restore</button> */}
          <Button variant='outlined' color="info" className='dark:text-slate-200 border-blue-800 border-2 bg-transparent hover:border-blue-900  rounded-lg p-2 text-sm ' onClick={restoreProject(project._id)} >Restore</Button>
          <Button variant="contained" color="error" onClick={deleteProject(project._id)}>Delete</Button>
          {/* <button className='dark:text-slate-200 border-blue-800 border-2 bg-transparent hover:border-blue-900  rounded-lg p-2 text-sm ' onClick={deleteProjectHandler} >Delete</button> */}
        </div>
       </div>

  )
}

export default TrashedCard
