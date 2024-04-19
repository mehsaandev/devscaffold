import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateProject } from '../../../actions/project';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function EditProjectModal({ project, openEdit, handleCloseEdit }) {
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = React.useState('');
    const handleOpen = () => setOpen(true);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const updatedProject = {
                ...project,
                title: projectName, 
            };
            console.log(projectName);
            dispatch(updateProject(project?._id, updatedProject))
            // console.log("hello");
            handleCloseEdit(); 
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openEdit}
                onClose={handleCloseEdit}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={handleOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Edit Project
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <FormControl>
                                <TextField type="text" variant='outlined' defaultValue="Project Name" label="Project Name"
                                    name="projectName" 
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}/> 
                            </FormControl>
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <Button color="primary" onClick={handleCloseEdit}>Cancel</Button>
                            <Button variant="contained" color="warning" onClick={handleSubmit}>
                                Edit and Save
                            </Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
