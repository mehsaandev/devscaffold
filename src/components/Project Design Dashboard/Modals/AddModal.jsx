import { Box, Tab } from '@mui/material'
import Tabs from '../Modals/Tabs'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
const AddModal = ({ open, setOpen, setpropertiesList,handleModelClose}) => {





    return (
        <div className={` absolute ${!open && 'hidden'} h-screen w-screen top-0 bottom-0 z-30 grid place-items-center`}>

            <div className='p-0 m-0 top-0 bottom-0 h-screen w-full bg-black opacity-60  z-40' />
            <div className='absolute bg-white dark:bg-primary dark:text-white w-96 h-auto rounded-lg z-50 p-4 '>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'></h1>
                    <button className='bg-transparent rounded-full group' onClick={() => setOpen(false)}>
                        <AiFillCloseCircle size={20} className='group-hover:text-red-600 text-gray-400' />
                    </button>
                </div>
                <div className='p-4 mt-2'>
                    <div class="md:flex-col md:flex md:items-start mb-6 gap-2">
                        <Tabs setpropertiesList = {setpropertiesList} setOpen={setOpen} handleModelClose={handleModelClose}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddModal