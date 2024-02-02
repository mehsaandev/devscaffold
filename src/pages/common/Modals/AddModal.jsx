import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
const AddModal = ({ open, setOpen,projectForm,setProjectForm ,createProjectHandler}) => {
    return (
        <div className={`${!open && 'hidden'} absolute h-screen w-screen top-0 bottom-0 z-30 grid place-items-center`}>

            <div className='p-0 m-0 top-0 bottom-0 h-screen w-full bg-black opacity-60  z-40' />
            <div className='absolute bg-white dark:bg-primary dark:text-white w-96 h-auto rounded-lg z-50 p-4 '>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'>Create Project</h1>
                   <button className='bg-transparent rounded-full group' onClick={()=>setOpen(false)}>
                     <AiFillCloseCircle size={20} className='group-hover:text-red-600 text-gray-400' />
                    </button>
                </div>
                <div className='p-4 mt-2'>
                    <form className='flex flex-col' onSubmit={createProjectHandler}>


                        <div class="md:flex-col md:flex md:items-start mb-6 gap-2">
                            <div class="">
                                <label class="block font-light dark:text-white  text-gray-800 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Name Your Project
                                </label>
                            </div>
                            <div class="w-full">
                                <input onChange={(e)=>setProjectForm({...projectForm,title:e.target.value})} class="font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 dark:text-white border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Project Name...' />
                            </div>
                        </div>
                        <div class="md:flex-col md:flex md:items-start mb-6 gap-2">
                            <div class="">
                                <label class="block font-light dark:text-white text-gray-800 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Add Some details about project
                                </label>
                            </div>
                            <div class="w-full ">
                                <textarea onChange={(e)=>setProjectForm({...projectForm,description:e.target.value})} rows={5} class="resize-none font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 border-gray-100 rounded w-full py-2 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Project Description...' />
                            </div>
                        </div>
                        <div className='text-right'>
                            <button type='submit' className='text-slate-200 bg-blue-800 hover:bg-blue-900  rounded-lg p-2 text-sm '>Create Project</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddModal