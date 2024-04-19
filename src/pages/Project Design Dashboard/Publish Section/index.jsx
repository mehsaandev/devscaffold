import { Button, TextField, styled } from '@mui/material'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSingleProject, publishProject, unpublishProject } from '../../../actions/project';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const PublishProject = () => {


    const params = useParams()
    const dispatch = useDispatch()
    const project = useSelector(state => state.projects?.project)
    const [loading, setLoading] = useState(false)
    console.log(project)

    useEffect(() => {
        console.log(params.projectId)
        dispatch(getSingleProject(params.projectId))

    }, [loading])

    const handlePublication = () => {
        // alert('Project Published')

        if (project?.isPublished) {
            dispatch(unpublishProject(params.projectId,setLoading))
        }
        else {
            dispatch(publishProject(params.projectId,setLoading))

        }
    }
    return (
        <div class="bg-slate-200 w-screen flex justify-center h-screen">
            <div class="bg-white rounded-lg md:w-1/2 h-1/2 m-5 p-8">
                <div className=' align-middle items-center mb-5'>
                    <p class="font-sans font-bold text-2xl"> Publish Projects</p>
                    {/* <p className='text-left mt-10 text-lg text-gray-600'>Publish your project to Devscaffold Developers</p> */}
                </div>

                <div className='flex items-start text-2xl gap-3 '>
                    <p>Project Title:</p>
                    <p className='text-green-700 underline'>DevScaffold</p>
                </div>

                <p className='mt-2'>{project?.isPublished ? 'You have published your project, Click on Unpublish to remove publication' :'Publish your project to showcase your work to other Devscaffold users'}</p>

                <div className='text-center mt-5'>
                    <Button variant='contained' onClick={handlePublication} color={`${project?.isPublished ? 'error': 'success'}`} >{ project?.isPublished ? "Unpublish" : "Publish"}</Button>
                </div>

                <form>
                    {/* <div className='flex flex-row w-full justify-between gap-10 mt-10'>
                        <div className='flex items-center'>
                            <p for="name" class="block text-md font-medium text-gray-700">Privilliges</p>
                            <TextField type='text' size='small' />
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <p for="name" class="block text-md font-medium text-gray-700">Project Name</p>
                            <TextField type='text' size='small' />
                        </div>
                    </div> */}
                    {/* <div className='flex flex-col w-full items-start justify-start  gap-2 mt-10'>
                            <p for="name" class="block text-md font-medium text-gray-700">Project Name</p>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput type="file" />
                            </Button>
                     
                       
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default PublishProject