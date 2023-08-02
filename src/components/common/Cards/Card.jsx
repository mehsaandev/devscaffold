import React from 'react'
import projectimg from './Project.jpg'
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

function Card() {
  return (
    <div className="inherit">
      
        <div className="grid grid-cols-5 gap-4 ">
          
          {projects.map((project) => (
            <a key={project.id} href={project.href} className="box-border p-4 rounded-lg shadow-lg bg-white">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-5 sm:aspect-w-7">
                <img
                  src={project.imageSrc}
                  className="h-40 w-60 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-gray-900">{project.name}</h3>
              <p className="text-sm font-normal text-gray-400">{project.update}</p>
            </a>
          ))}
      </div>
      
    </div>
  )
}

export default Card
