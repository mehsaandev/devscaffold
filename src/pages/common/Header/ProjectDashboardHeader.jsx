import React from 'react'

const ProjectDashboardHeader = ({ setOpen,type }) => {
    return (
        <div className='flex flex-row justify-between'>
            <h2>{type}</h2>
            <button className='text-slate-200 bg-blue-800 hover:bg-blue-900  rounded-lg p-2 text-sm ' onClick={()=>setOpen(true)} >Create New Project</button>
        </div>
    )
}

export default ProjectDashboardHeader