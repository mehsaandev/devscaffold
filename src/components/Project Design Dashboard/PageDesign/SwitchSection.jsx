import { Button, ButtonGroup } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'

const SwitchSection = ({togglePreview,setActiveEdit,setActivePreview}) => {
    return (
        <div className='sticky top-0 w-full text-center'>
        <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            color='inherit'
            
        >
            <Button color={`${togglePreview ? 'inherit' : 'success'}`} style={{backgroundColor: `${togglePreview ? 'white' : ''}`}}
            onClick={setActiveEdit}
            >
                <EditIcon />
            </Button>
            <Button  color={`${togglePreview ? 'success' : 'inherit'}`} style={{backgroundColor: `${togglePreview ? '' : 'white'}`}}
            onClick={setActivePreview}>
                <VisibilityIcon />
            </Button>
        </ButtonGroup>
        </div>
    )
}

export default SwitchSection