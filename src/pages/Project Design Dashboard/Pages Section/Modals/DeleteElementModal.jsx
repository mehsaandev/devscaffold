import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogActions, DialogContent, DialogTitle, Paper } from '@mui/material';
import {deleteElement} from '../../../../utilities/componentCompiler'
import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '../../../../actions/pages';



export default function BasicModal({ open, handleClose, elementData }) {

  const pageObj = useSelector(state => state.page)
  const dispatch = useDispatch()

  const handleDeleteElement = () => {
    const response = deleteElement(pageObj,elementData.id)
    dispatch(updatePage(response))
    console.log(response)
  }


  return (
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
  );
}
