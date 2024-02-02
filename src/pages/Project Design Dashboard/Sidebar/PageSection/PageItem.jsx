import { Delete } from '@mui/icons-material'
import { Edit } from '@mui/icons-material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { IconButton } from '@mui/material';

import React from 'react'

const PageItem = ({handleDeleteModalOpen,handleEditModalOpen}) => {
    return (
        <div className="flex flex-row justify-between items-center">
            {/* <Avatar className="w-10"> */}
            <div className="flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-200">
                <InsertDriveFileIcon className="w-10" />
                <a href='#' >Home</a>
            </div>
            <div className="flex flex-row gap-0 items-center">

                <IconButton color="info" onClick={handleEditModalOpen}>
                    <Edit color="action" />
                </IconButton>
                <IconButton color="success" onClick={handleDeleteModalOpen}>
                    <Delete color="error" />
                </IconButton>
            </div>

            {/* </Avatar> */}
        </div>
    )
}

export default PageItem