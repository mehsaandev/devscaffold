import { Box, Button, Dialog, DialogContent, DialogTitle, Modal, Typography } from '@mui/material'
import React from 'react'

const DeleteModal = ({ open, onClose }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };




    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            {/* <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'paper'}
                fullWidth
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Element
                    </Typography>
                </DialogTitle>
                <DialogContent dividers={'paper'}>
                    <Box >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure you want to delete this <span className={'text-red-600'}>{elementData?.name}</span>?
                        </Typography>
                        <p id="modal-modal-title" className='mt-5' >
                            Please read the following terms and conditions before deleting this element.
                        </p>
                        <ul style={{ listStyleType: 'numbers' }} className='ml-5'>
                            <li>Your element will be deleted permenntly</li>
                            <li>You can't undo this action</li>
                            <li>Any element inside this element will also be deleted</li>

                        </ul>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" color='error' onClick={handleDeleteElement}>Delete Element</Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteModal