import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { tagMapHandler, tagsWithProperties, textBasedTags } from '../../../../utilities/tagsUtility'
import { updateElement, updateElementClasses } from '../../../../utilities/componentCompiler'
import { Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from '@mui/material';
import { updatePage } from '../../../../actions/pages';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { forEach } from 'jszip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({ open, handleClose, elementData }) {

  const dispatch = useDispatch()
  const pageObj = useSelector(state => state.page)
  const [updatedData, setUpdatedData] = useState(elementData)
  const [allProperties, setAllProperties] = useState([])


  const handleUpdateElement = () => {
    const updatedElement = updateElement(pageObj, elementData.id, updatedData)
  }

  useEffect(() => {
    for (let index = 0; index < tagsWithProperties.length; index++) {

      if (tagsWithProperties[index].tag == elementData?.name) {
        console.log(tagsWithProperties[index].tag)
        console.log(elementData.name)
        setAllProperties(tagsWithProperties[index].properties)
        break;
      }
    }
    setUpdatedData(elementData)
  }, [elementData])

  console.log(updatedData)



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
          Update Element
        </Typography>
      </DialogTitle>
      <DialogContent dividers={'paper'}>
        <Box >
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="h2">
              <h1>Title: <span className='font-bold'>{tagMapHandler(elementData?.name)}</span></h1>
              <h1 className='mt-2'>Element Name: <span className='font-bold text-green-700'>{elementData?.name}</span></h1>
              <div className='bg-gray-500 w-full opacity-40 h-[0.1px] my-4' />
             
              <>
                <h1 className='mt-2'>Element Properties</h1>
                <Paper elevation={1} color='black' className='m-2 p-2' variant='outlined'>
                  <div className='mb-2'>
                    <p className=' uppercase'>ID</p>
                    <TextField multiline fullWidth type='text' name={'id'}
                      defaultValue={elementData?.id}
                      onChange={(e) => {
                        setUpdatedData({ ...elementData, id: e.target.value })
                      }
                      }
                    />
                  </div>
                  <div className='mb-2'>
                    <p className=' uppercase'>Classes</p>
                    <TextField multiline fullWidth type='text' name={'classes'} defaultValue={elementData?.classes}
                      onChange={(e) => {
                        setUpdatedData({ ...elementData, classes: e.target.value })
                      }
                      } />
                  </div>
                  {/* {Object.keys(elementData?.properties)?.map((key, index) => { */}
                  {allProperties?.map((property, index) => {
                    return (
                      <div key={index} className='mb-2'>
                        <p className=' uppercase'>{property.name}</p>
                        {/* <p className='text-gray-700'>{elementData?.properties[key]}</p> */}
                        {elementData?.properties && elementData?.properties[property?.name] != null ? (
                          <TextField multiline fullWidth defaultValue={elementData?.properties[property?.name]}
                            onChange={(e) => {
                              setUpdatedData({ ...elementData, properties: { ...elementData?.properties, [property.name]: e.target.value } })
                            }}
                          />
                        ) : (

                          <TextField multiline fullWidth
                            onChange={(e) => {
                              setUpdatedData({ ...elementData, properties: { ...elementData?.properties, [property.name]: e.target.value } })
                            }}
                          />
                        )}
                      </div>
                    )
                  })}
                  {textBasedTags.includes(elementData?.name) && (
                    <div>
                      <p className=' uppercase'>Text</p>
                      <TextField multiline fullWidth type='text' name={'text'} defaultValue={elementData?.properties?.text}
                        onChange={(e) => {
                          setUpdatedData({ ...elementData, properties: { ...elementData?.properties, text: e.target.value } })
                        }
                        }

                      />
                    </div>
                  )}
                </Paper>
              </>
              {/* )} */}
            </Typography>
          </div>

        </Box>
      </DialogContent>
      <DialogActions>
      <Button variant="contained" color='success' onClick={handleUpdateElement}>Update Element</Button>

      </DialogActions>
    </Dialog>
  );
}
