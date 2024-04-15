import { Delete } from '@mui/icons-material'
import { Edit } from '@mui/icons-material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { IconButton } from '@mui/material';


import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getPage, getPagesOfProjectAPIHandler } from '../../../../actions/pages';
import { useDispatch } from 'react-redux';

const PageItem = ({ handleDeleteModalOpen, handleEditModalOpen, pageData }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openPageEditor = (id) => {
        // dispatch(getPage(pageData?._id))
        localStorage.removeItem('gjsProject')

        navigate(`${pageData?._id}`)
    }

    return (
        <div className="flex flex-row justify-between items-center">
            {/* <Avatar className="w-10"> */}
            <div className="flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-200 cursor-pointer" onClick={openPageEditor}>
                <InsertDriveFileIcon className="w-10" />
                <a>{pageData?.name}</a>
            </div>
            <div className="flex flex-row gap-0 items-center">

                <IconButton color="info" onClick={handleEditModalOpen}>
                    <Edit color="action" />
                </IconButton>
                <IconButton color="success" onClick={()=>handleDeleteModalOpen(pageData)}>
                    <Delete color="error" />
                </IconButton>
            </div>

            {/* </Avatar> */}
        </div>
    )
}

export default PageItem