import React from 'react'
import Card from '../common/Cards/Card'

const ProjectListing = ({ projectsList }) => {
    return (
        <div className='bg-inherit dark:inherit dark:bg-gray-700 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3  '>
            {projectsList.map(project => (
                <Card project={project}/>
            ))}
        </div>
    )
}

export default ProjectListing