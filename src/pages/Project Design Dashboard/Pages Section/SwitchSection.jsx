import { Button, ButtonGroup } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import React from 'react'

const SwitchSection = ({togglePreview,setPreview}) => {

    console.log(togglePreview)
    return (
        <div className='sticky top-0 w-full text-center'>
        <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            color='inherit'
            
        >
            <Button  color={`${togglePreview == 0 ? 'success' : 'inherit'}`} style={{backgroundColor: `${togglePreview == 0 ? '' : 'white'}`}}
             onClick={()=>setPreview(0)}
            >
                <VisibilityIcon />
            </Button>
            <Button color={`${togglePreview  == 1? 'success' : 'inherit'}`} style={{backgroundColor: `${togglePreview == 1 ? '' : 'white'}`}}
            onClick={()=>setPreview(1)}
            >
                <EditIcon />
            </Button>
            <Button  color={`${togglePreview == 2? 'success' : 'inherit'}`} style={{backgroundColor: `${togglePreview == 2? '' : 'white'}`}}
            onClick={()=>setPreview(2)}
            >
                <ViewQuiltIcon />
            </Button>
        </ButtonGroup>
        </div>
    )
}

export default SwitchSection