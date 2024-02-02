import React, { useEffect, useState } from 'react'
import projectimg from './Project Card/Project.jpg'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProject } from '../../actions/project'


const SingleProject = () => {
  const params = useParams()
  const [projectObj, setProjectObj] = useState(null)
  const dispatch = useDispatch()
  // const projectObj = useSelector(data => data.projects?.project)
  console.log(projectObj)

  useEffect(() => {
    console.log(params.id)
    dispatch(getSingleProject(params.id, setProjectObj))

  }, [])


  return (
    <div>
      <div>
        <img class="h-60 w-full object-cover " src={projectimg} />
      </div>

      <div>
        {projectObj ? (
          <>
            <p className='text-center m-4 font-bold' >{projectObj?.title}</p>
            <p className='text-center font-light' >{projectObj?.description}</p>
          </>
        ) : (
          <p className='text-center m-4 font-bold'>Loading...</p>
        )}
      </div>
      <div className='p-4 flex flex-row justify-center gap-3'>
        <button className='dark:text-slate-200 border-blue-800 border-2 bg-transparent hover:bg-slate-200  rounded-lg p-2 text-sm '>Continue Editing</button>


        <button
          className='text-slate-200 bg-blue-800 hover:bg-blue-900  rounded-lg p-2 text-sm '
          onClick={() => setOpen(true)}
        >Export Project</button>
      </div>
    </div>

  )
}

export default SingleProject