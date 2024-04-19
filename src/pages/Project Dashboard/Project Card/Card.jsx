import React from 'react'
import projectimg from './Project.jpg'
import { CiMenuKebab } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import  BasicMenu  from './Card_menu'


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


function Card({ setOpenDel,openDel,project }) {

  const navigate = useNavigate()

  const openProjectViewHandler = () =>{
    navigate(`/dashboard/${project?._id}`)
  }
  const openProjectSingleView = () =>{
    navigate(`/dashboard/${project?._id}`)
  }
  return (

    //   <div className="grid">

    //       <a key={project?.id} href={projectimg} className="box-border p-4 rounded-lg shadow-lg bg-white">
    //         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-5 sm:aspect-w-7">
    //           <img
    //             src={projectimg}
    //             className="h-40 w-60 object-cover object-center group-hover:opacity-75"
    //           />
    //         </div>
    //         <h3 className="mt-4 text-base font-medium text-gray-900">{project?.title}</h3>
    //         <p className="text-sm font-normal text-gray-400">{project?.description}</p>
    //       </a>
    // </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-900">
      <img class="w-full hover:cursor-pointer" src={projectimg} alt="Sunset in the mountains" onClick={openProjectSingleView} />
      <div class="px-6 py-4">
        <p class="font-bold text-xl mb-2 hover:cursor-pointer hover:text-blue-600" style={{width:'max-content'}} >{project?.title}</p>
        <p class="dark:text-slate-200 font-light text-gray-700 text-base">
          {project?.description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-4 flex items-center justify-between">
        {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
        {/* <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}

          <button className='dark:text-slate-200 border-blue-800 border-2 bg-transparent hover:border-blue-900  rounded-lg p-2 text-sm ' onClick={openProjectViewHandler} >Continue</button>
        <div className='flex justify-between gap-2'>
          {/* <button className='rounded-full bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-slate-400'><CiMenuKebab /></button> */}
          <BasicMenu openDel={openDel} setOpenDel={setOpenDel} project={project} />
        </div>
      </div>
    </div>

  )
}

export default Card
