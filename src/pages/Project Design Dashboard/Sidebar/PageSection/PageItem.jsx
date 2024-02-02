import { Delete } from '@mui/icons-material'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { IconButton } from '@mui/material';

import React from 'react'

const PageItem = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            {/* <Avatar className="w-10"> */}
            <div className="flex flex-row gap-2 items-center">
                <InsertDriveFileIcon className="w-10" />
                <p>Home</p>
            </div>
            <IconButton color="success">
                <Delete color="error" />
            </IconButton>

            {/* </Avatar> */}
        </div>
    )
}

export default PageItem