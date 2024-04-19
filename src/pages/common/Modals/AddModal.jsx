import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
const AddModal = ({ open, setOpen, projectForm, setProjectForm, createProjectHandler }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            scroll={'paper'}
            fullWidth
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Project
                </Typography>
            </DialogTitle>
            <DialogContent dividers={'paper'}>
                <Box >

                  
                    <div className='p-4 mt-2'>
                        <form className='flex flex-col' onSubmit={createProjectHandler}>


                            <div class="md:flex-col md:flex md:items-start mb-6 gap-2">
                                <div class="">
                                    <label class="block font-light dark:text-white  text-gray-800 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Name Your Project
                                    </label>
                                </div>
                                <div class="w-full">
                                    <input onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })} class="font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 dark:text-white border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Project Name...' />
                                </div>
                            </div>
                            <div class="md:flex-col md:flex md:items-start mb-6 gap-2">
                                <div class="">
                                    <label class="block font-light dark:text-white text-gray-800 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Add Some details about project
                                    </label>
                                </div>
                                <div class="w-full ">
                                    <textarea onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} rows={5} class="resize-none font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 border-gray-100 rounded w-full py-2 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Project Description...' />
                                </div>
                            </div>
                            <div className='text-right'>
                                <button type='submit' className='text-slate-200 bg-blue-800 hover:bg-blue-900  rounded-lg p-2 text-sm '>Create Project</button>
                            </div>

                        </form>
                    </div>
                </Box>



            </DialogContent>
        </Dialog>
    )
}

export default AddModal