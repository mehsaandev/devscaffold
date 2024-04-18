import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateProject } from '../../../actions/project';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditProjectModal({ projectId, openEdit, handleCloseEdit }) {
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = React.useState('');
    const handleOpen = () => setOpen(true);

    const handleSubmit = async () => {
        try {
            const updatedProject = { projectName }; // Prepare project object with updated project name
            await updateProject(projectId, {updatedProject}); // Call the backend API to update the project
            handleCloseEdit(); // Close the modal after submitting
        } catch (error) {
            console.error('Error updating project:', error);
            // Handle error (e.g., show error message to the user)
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
