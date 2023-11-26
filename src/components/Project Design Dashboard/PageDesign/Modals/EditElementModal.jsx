import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { tagMapHandler } from '../../../../utilities/tagsUtility'
import { updateElement,updateElementClasses } from '../../../../utilities/componentCompiler'
import { Paper, TextField } from '@mui/material';
import { updatePage } from '../../../../actions/pages';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({ open, handleClose, elementData }) {

  const dispatch = useDispatch()
  const pageObj = useSelector(state => state.pageDesign.page)
  const [updatedData, setUpdatedData] = useState(elementData)


  const handleUpdateElement = () => {
    const updatedElement = updateElement(pageObj, elementData.id, updatedData)
  }

  useEffect(() => {
    setUpdatedData(elementData)
  }, [elementData])
  
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Element
        </Typography>
        <div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component="h2">
            <h1>Title: <span className='font-bold'>{tagMapHandler(elementData?.name)}</span></h1>
            <h1 className='mt-2'>Element Name: <span className='font-bold text-green-700'>{elementData?.name}</span></h1>
            <div className='bg-gray-500 w-full opacity-40 h-[0.1px] my-4' />
            <h1 className='mt-2'>Element Classes</h1>
            <Paper elevation={1} color='black' className='m-2 p-2' variant=''>
              {/* <p className='font-bold text-blue-700'>{elementData?.classes}</p>  */}
              <TextField multiline fullWidth defaultValue={elementData?.classes} onChange={(e)=>
              setUpdatedData({...elementData, classes: e.target.value})}
               />
            </Paper>
            {elementData?.properties && (
              <>
                <h1 className='mt-2'>Element Properties</h1>
                <Paper elevation={1} color='black' className='m-2 p-2' variant='outlined'>
                  {Object.keys(elementData?.properties)?.map((key, index) => {
                    return (
                      <div key={index} >
                        <p className='font-bold text-blue-700 uppercase'>{key}</p>
                        {/* <p className='text-gray-700'>{elementData?.properties[key]}</p> */}
                        <TextField multiline fullWidth defaultValue={elementData?.properties[key]}
                        onChange={(e)=>{
                          setUpdatedData({...elementData, properties: {...elementData?.properties, [key]: e.target.value}})
                        }}
                        />
                      </div>
                    )
                  })}
                </Paper>
              </>
            )}
          </Typography>
        </div>

        <div className=' mt-5 flex justify-end'>
          <Button variant="contained" color='success' onClick={handleUpdateElement}>Update Element</Button>
        </div>

      </Box>
    </Modal>
  );
}
